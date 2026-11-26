// G-TELP 문법 마스터 컨트롤러 (전 파트 지원 & 준동사 3:3 균형 출제)

class GTelpApp {
  constructor() {
    this.questions = [...QUESTIONS_DATABASE];
    this.currentCategory = 'gerund_infinitive';
    this.currentQuestions = [];
    this.currentIndex = 0;
    this.selectedAnswers = {};
    this.isAnswered = {};
    this.history = { totalSolved: 0, totalCorrect: 0, streak: 1, wrongIds: [] };
    this.wrongQuestionStore = {};
    this.dailyStats = this.getDefaultDailyStats();
    this.currentSessionType = 'gerund_infinitive';
    this.selectedQuestionCount = 10;
    this.customCycle = { unvisitedIds: [], round: 1 };

    // 타이머 변수
    this.timerInterval = null;
    this.elapsedSeconds = 0;

    this.loadUserData();
    this.checkUrlSyncParam();
    this.initDOM();
    this.bindEvents();
    this.renderDashboard();
  }

  getTodayDateString() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  getDefaultDailyStats() {
    return {
      date: this.getTodayDateString(),
      totalSets: 0,
      totalQuestions: 0,
      categories: {},
      todayWrongStore: {}
    };
  }

  loadUserData() {
    try {
      const savedCustom = localStorage.getItem('gtelp_custom_questions');
      if (savedCustom) {
        const parsed = JSON.parse(savedCustom);
        if (Array.isArray(parsed) && parsed.length > 0) {
          this.questions = [...QUESTIONS_DATABASE, ...parsed];
        }
      }

      const savedHistory = localStorage.getItem('gtelp_user_history');
      if (savedHistory) {
        this.history = JSON.parse(savedHistory);
      }

      const savedWrongStore = localStorage.getItem('gtelp_wrong_questions_store');
      if (savedWrongStore) {
        this.wrongQuestionStore = JSON.parse(savedWrongStore);
      } else {
        this.wrongQuestionStore = {};
      }

      const savedDaily = localStorage.getItem('gtelp_daily_stats');
      if (savedDaily) {
        const parsedDaily = JSON.parse(savedDaily);
        if (parsedDaily && parsedDaily.date === this.getTodayDateString()) {
          this.dailyStats = parsedDaily;
        } else {
          this.dailyStats = this.getDefaultDailyStats();
        }
      } else {
        this.dailyStats = this.getDefaultDailyStats();
      }

      // 오늘 오답 저장소 확보
      if (!this.dailyStats.todayWrongStore) {
        this.dailyStats.todayWrongStore = {};
      }

      // 비중복 순환 사이클 로드
      const savedCycle = localStorage.getItem('gtelp_custom_cycle');
      if (savedCycle) {
        this.customCycle = JSON.parse(savedCycle);
      } else {
        this.customCycle = { unvisitedIds: [], solvedInRound: 0, round: 1 };
      }

      // 1번, 3번 문제 완전 영구 배제
      this.questions = this.questions.filter(q => q.id !== 'KELLY-DAILY-01' && q.id !== 'KELLY-DAILY-03');
      if (this.customCycle && this.customCycle.unvisitedIds) {
        this.customCycle.unvisitedIds = this.customCycle.unvisitedIds.filter(id => id !== 'KELLY-DAILY-01' && id !== 'KELLY-DAILY-03');
      }
      if (this.history && this.history.wrongIds) {
        this.history.wrongIds = this.history.wrongIds.filter(id => id !== 'KELLY-DAILY-01' && id !== 'KELLY-DAILY-03');
      }
      if (this.wrongQuestionStore) {
        delete this.wrongQuestionStore['KELLY-DAILY-01'];
        delete this.wrongQuestionStore['KELLY-DAILY-03'];
      }

      // Kelly 오답 문제는 '선생님 맞춤 오답' 문제은행에서만 순환 출제되도록 하고,
      // 하단 '오늘 틀린 오답노트'에는 사용자가 오늘 직접 풀다 틀렸을 때만 순수하게 등록되도록 강제 연동 해제
      const kellyWrongIds = ['KELLY-DAILY-02', 'KELLY-DAILY-04', 'KELLY-DAILY-05'];
      if (this.history && this.history.wrongIds) {
        this.history.wrongIds = this.history.wrongIds.filter(id => !kellyWrongIds.includes(id));
      }
      if (this.wrongQuestionStore) {
        kellyWrongIds.forEach(id => delete this.wrongQuestionStore[id]);
      }
      if (this.dailyStats.todayWrongStore) {
        kellyWrongIds.forEach(id => delete this.dailyStats.todayWrongStore[id]);
      }
      delete this.history.kellyDailyInitialized;

      this.saveUserData();
    } catch (e) {
      console.error(e);
    }
  }

  saveUserData() {
    localStorage.setItem('gtelp_user_history', JSON.stringify(this.history));
    localStorage.setItem('gtelp_wrong_questions_store', JSON.stringify(this.wrongQuestionStore));
    localStorage.setItem('gtelp_daily_stats', JSON.stringify(this.dailyStats));
    localStorage.setItem('gtelp_custom_cycle', JSON.stringify(this.customCycle));
  }

  recordDailySet(categoryId, questionCount) {
    const today = this.getTodayDateString();
    if (!this.dailyStats || this.dailyStats.date !== today) {
      this.dailyStats = this.getDefaultDailyStats();
    }
    this.dailyStats.totalSets = (this.dailyStats.totalSets || 0) + 1;
    this.dailyStats.totalQuestions = (this.dailyStats.totalQuestions || 0) + questionCount;

    if (!this.dailyStats.categories) this.dailyStats.categories = {};

    const names = {
      'full_26': '실전 26제 모의고사',
      'tense': '시제',
      'gerund_infinitive': '준동사',
      'subjunctive': '가정법',
      'should_omission': 'Should 생략',
      'relative': '관계사',
      'modal': '조동사',
      'conjunction': '연결어',
      'custom': '선생님 맞춤 오답',
      'all': '전체 종합',
      'wrong': '오답노트 복습'
    };
    const catName = names[categoryId] || categoryId;

    if (!this.dailyStats.categories[categoryId]) {
      this.dailyStats.categories[categoryId] = {
        name: catName,
        sets: 0,
        questions: 0
      };
    }
    this.dailyStats.categories[categoryId].sets += 1;
    this.dailyStats.categories[categoryId].questions += questionCount;
  }

  getTodayWrongQuestionsList() {
    const today = this.getTodayDateString();
    if (!this.dailyStats || this.dailyStats.date !== today || !this.dailyStats.todayWrongStore) {
      return [];
    }
    return Object.values(this.dailyStats.todayWrongStore);
  }

  getWrongQuestionsList() {
    return this.getTodayWrongQuestionsList();
  }

  // =========================================================================
  // 초간단 기기간 동기화 (QR 코드 & 카카오톡 복사/붙여넣기)
  // =========================================================================
  checkUrlSyncParam() {
    try {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#sync=')) {
        const code = hash.replace('#sync=', '');
        if (this.applySyncPayload(code)) {
          history.replaceState(null, null, window.location.pathname);
          setTimeout(() => {
            alert("🎉 기기 동기화 완료!\n\n다른 기기에서 풀던 학습 기록과 오답노트가 성공적으로 반영되었습니다. 계속해서 학습하세요!");
          }, 300);
        }
      }
    } catch (e) {
      console.error("URL sync error:", e);
    }
  }

  generateSyncPayload() {
    const payload = {
      h: this.history,
      w: this.wrongQuestionStore || {},
      d: this.dailyStats || {},
      t: Date.now()
    };
    const jsonStr = JSON.stringify(payload);
    if (typeof LZString !== 'undefined') {
      return LZString.compressToEncodedURIComponent(jsonStr);
    } else {
      return encodeURIComponent(btoa(unescape(encodeURIComponent(jsonStr))));
    }
  }

  applySyncPayload(compressedString) {
    if (!compressedString) return false;
    try {
      let jsonStr = '';
      if (typeof LZString !== 'undefined') {
        jsonStr = LZString.decompressFromEncodedURIComponent(compressedString);
      }
      if (!jsonStr) {
        jsonStr = decodeURIComponent(escape(atob(decodeURIComponent(compressedString))));
      }
      const data = JSON.parse(jsonStr);
      if (data && data.h) {
        this.history = data.h;
        this.wrongQuestionStore = data.w || {};
        if (data.d && data.d.date === this.getTodayDateString()) {
          this.dailyStats = data.d;
        }
        this.saveUserData();
        this.renderDashboard();
        return true;
      }
    } catch (e) {
      console.error("Sync parse error:", e);
    }
    return false;
  }

  openSyncModal() {
    const code = this.generateSyncPayload();
    const syncUrl = `${window.location.origin}${window.location.pathname}#sync=${code}`;
    const qrContainer = document.getElementById('sync-qrcode');
    if (qrContainer) {
      qrContainer.innerHTML = '';
      if (typeof QRCode !== 'undefined') {
        try {
          new QRCode(qrContainer, {
            text: syncUrl,
            width: 170,
            height: 170,
            colorDark: "#0f172a",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.M
          });
        } catch (e) {
          qrContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${encodeURIComponent(syncUrl)}" alt="QR Code" class="w-42 h-42">`;
        }
      } else {
        qrContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${encodeURIComponent(syncUrl)}" alt="QR Code" class="w-42 h-42">`;
      }
    }
    const inputArea = document.getElementById('sync-paste-input');
    if (inputArea) inputArea.value = '';
    const modal = document.getElementById('sync-modal');
    if (modal) modal.classList.remove('hidden');
  }

  copySyncCode() {
    const code = this.generateSyncPayload();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(() => {
        alert("✅ 내 학습기록 코드가 복사되었습니다!\n\n카카오톡 '나와의 채팅방' 등에 붙여넣어 전송한 뒤, 다른 기기에서 [붙여넣은 코드 적용하기]를 누르시면 됩니다.");
      }).catch(() => {
        prompt("아래 코드를 전체 복사해주세요:", code);
      });
    } else {
      prompt("아래 코드를 전체 복사해주세요:", code);
    }
  }

  applySyncCodeFromInput() {
    const inputArea = document.getElementById('sync-paste-input');
    if (!inputArea) return;
    const val = inputArea.value.trim();
    if (!val) {
      alert("붙여넣을 동기화 코드를 먼저 입력해주세요.");
      return;
    }
    let code = val;
    if (val.includes('#sync=')) {
      code = val.split('#sync=')[1];
    }
    if (this.applySyncPayload(code)) {
      alert("🎉 동기화 완료!\n\n학습 기록과 오답노트가 성공적으로 적용되었습니다.");
      this.closeModal('sync-modal');
    } else {
      alert("⚠️ 올바른 동기화 코드가 아닙니다. 다시 확인하고 붙여넣어 주세요.");
    }
  }

  initDOM() {
    this.dom = {
      dashboardView: document.getElementById('dashboard-view'),
      quizView: document.getElementById('quiz-view'),
      resultView: document.getElementById('result-view'),
      cheatsheetModal: document.getElementById('cheatsheet-modal'),
      addQuestionModal: document.getElementById('add-question-modal'),

      statSolved: document.getElementById('stat-solved'),
      statRate: document.getElementById('stat-rate'),
      statWrongCount: document.getElementById('stat-wrong-count'),
      statStreak: document.getElementById('stat-streak'),

      categoryContainer: document.getElementById('category-container'),
      selectedCatTitle: document.getElementById('selected-cat-title'),
      selectedCatDesc: document.getElementById('selected-cat-desc'),
      selectedCatCount: document.getElementById('selected-cat-count'),

      // 타이머 DOM
      timerDisplay: document.getElementById('timer-display'),

      progressText: document.getElementById('progress-text'),
      progressBar: document.getElementById('progress-bar'),
      questionText: document.getElementById('question-text'),
      optionsContainer: document.getElementById('options-container'),
      feedbackBox: document.getElementById('feedback-box'),
      feedbackContent: document.getElementById('feedback-content'),
      btnNextQuestion: document.getElementById('btn-next-question'),
      btnPrevQuestion: document.getElementById('btn-prev-question'),
      quickDots: document.getElementById('quick-dots')
    };
  }

  bindEvents() {
    document.getElementById('btn-start-session').addEventListener('click', () => {
      this.startQuizSession(this.currentCategory, this.selectedQuestionCount);
    });

    ['5', '10', 'all'].forEach(cnt => {
      const btn = document.getElementById(`btn-count-${cnt}`);
      if (btn) {
        btn.addEventListener('click', () => this.setSelectedQuestionCount(cnt));
      }
    });
    
    // 26문제 풀세트 모의고사 버튼
    const btn26 = document.getElementById('btn-start-full-26');
    if (btn26) {
      btn26.addEventListener('click', () => this.startQuizSession('full_26', 26));
    }

    document.getElementById('btn-home').addEventListener('click', () => this.showDashboard());
    const btnRefresh = document.getElementById('btn-refresh');
    if (btnRefresh) {
      btnRefresh.addEventListener('click', () => this.forceRefreshApp());
    }
    document.getElementById('btn-quit-quiz').addEventListener('click', () => {
      if (confirm('현재 풀던 세트를 종료하고 메인으로 돌아갈까요?')) {
        this.stopTimer();
        this.showDashboard();
      }
    });

    document.getElementById('btn-open-sync').addEventListener('click', () => this.openSyncModal());
    document.getElementById('btn-close-sync').addEventListener('click', () => this.closeModal('sync-modal'));
    document.getElementById('btn-copy-sync-code').addEventListener('click', () => this.copySyncCode());
    document.getElementById('btn-apply-sync-code').addEventListener('click', () => this.applySyncCodeFromInput());

    document.getElementById('btn-open-cheat').addEventListener('click', () => this.openCheatsheet());
    document.getElementById('btn-close-cheat').addEventListener('click', () => this.closeModal('cheatsheet-modal'));

    document.getElementById('btn-open-add').addEventListener('click', () => this.openAddModal());
    document.getElementById('btn-close-add').addEventListener('click', () => this.closeModal('add-question-modal'));
    document.getElementById('form-add-question').addEventListener('submit', (e) => this.handleSaveNewQuestion(e));

    this.dom.btnNextQuestion.addEventListener('click', () => this.goNextQuestion());
    if (this.dom.btnPrevQuestion) {
      this.dom.btnPrevQuestion.addEventListener('click', () => this.goPrevQuestion());
    }

    document.getElementById('btn-retry-session').addEventListener('click', () => {
      if (this.currentSessionType === 'custom') {
        this.startQuizSession('custom', 5);
        return;
      }
      if (this.currentSessionType === 'wrong') {
        this.startWrongSession();
        return;
      }
      const is26 = this.currentSessionType === 'full_26' || this.currentQuestions.length === 26;
      this.startQuizSession(is26 ? 'full_26' : this.currentCategory, is26 ? 26 : this.selectedQuestionCount);
    });
    document.getElementById('btn-result-home').addEventListener('click', () => this.showDashboard());

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal('sync-modal');
        this.closeModal('cheatsheet-modal');
        this.closeModal('add-question-modal');
      }
      if (!this.dom.quizView.classList.contains('hidden')) {
        const currentQ = this.currentQuestions[this.currentIndex];
        if (e.key === 'Enter') {
          if (this.isAnswered[currentQ.id]) {
            this.goNextQuestion();
          }
        } else if (e.key === 'ArrowLeft') {
          this.goPrevQuestion();
        } else if (e.key === 'ArrowRight') {
          if (this.isAnswered[currentQ.id]) {
            this.goNextQuestion();
          }
        }
      }
    });
  }

  // 타이머 제어
  startTimer() {
    this.stopTimer();
    this.elapsedSeconds = 0;
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      this.elapsedSeconds++;
      this.updateTimerDisplay();
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  updateTimerDisplay() {
    const el = document.getElementById('timer-time') || this.dom.timerDisplay;
    if (!el) return;
    const m = Math.floor(this.elapsedSeconds / 60);
    const s = this.elapsedSeconds % 60;
    const is26 = this.currentSessionType === 'full_26' || (this.currentQuestions && this.currentQuestions.length === 26);
    if (is26) {
      const isOver = this.elapsedSeconds > 1200;
      el.innerHTML = `<span class="${isOver ? 'text-rose-500 font-extrabold' : ''}">${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}</span><span class="text-[10px] text-slate-400 font-normal ml-1">/ 20:00</span>`;
    } else {
      el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
  }

  renderDashboard() {
    const total = this.history.totalSolved || 0;
    const rate = total > 0 ? Math.round((this.history.totalCorrect / total) * 100) : 0;
    const todayWrongList = this.getTodayWrongQuestionsList();
    const todayWrongCount = todayWrongList.length;

    this.dom.statSolved.textContent = total;
    this.dom.statRate.textContent = `${rate}%`;
    this.dom.statWrongCount.textContent = todayWrongCount;
    this.dom.statStreak.textContent = `${this.history.streak || 1}일`;

    const wrongCard = document.getElementById('card-wrong-notes');
    const wrongBadge = document.getElementById('wrong-badge');
    if (wrongCard) {
      wrongCard.classList.remove('opacity-50', 'pointer-events-none');

      if (todayWrongCount === 0) {
        wrongCard.className = "bg-white p-5 rounded-2xl border border-slate-200 hover:border-indigo-200 transition cursor-pointer shadow-xs flex items-center justify-between";
        if (wrongBadge) {
          wrongBadge.className = "text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500";
          wrongBadge.textContent = "오늘 오답 0개";
        }
        wrongCard.onclick = () => {
          alert("👏 오늘 문제 풀이 중 틀린 문제가 없습니다!\n\n다른 파트나 실전 모의고사를 풀다가 틀린 문제가 생기면 이곳에 자동으로 모여 언제든 집중 복습할 수 있습니다.");
        };
      } else {
        wrongCard.className = "bg-rose-50/50 p-5 rounded-2xl border-2 border-rose-300 hover:border-rose-400 hover:bg-rose-100/60 transition cursor-pointer shadow-sm flex items-center justify-between";
        if (wrongBadge) {
          wrongBadge.className = "text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-rose-600 text-white shadow-xs animate-pulse";
          wrongBadge.textContent = `🔥 오늘 틀린 ${todayWrongCount}문제 집중 복습하기`;
        }
        wrongCard.onclick = () => this.startWrongSession();
      }
    }

    this.renderCategoryCards();
    this.updateSelectedCategoryBanner();
    this.renderDailyActivity();
  }

  renderDailyActivity() {
    const today = this.getTodayDateString();
    if (this.dailyStats.date !== today) {
      this.dailyStats = this.getDefaultDailyStats();
      this.saveUserData();
    }

    const badgeDate = document.getElementById('daily-date-badge');
    const summaryEl = document.getElementById('daily-total-summary');
    const listEl = document.getElementById('daily-categories-list');
    if (!listEl) return;

    if (badgeDate) {
      const parts = today.split('-');
      badgeDate.textContent = `${parts[0]}.${parts[1]}.${parts[2]}`;
    }

    const totalSets = this.dailyStats.totalSets || 0;
    const totalQ = this.dailyStats.totalQuestions || 0;

    if (summaryEl) {
      summaryEl.textContent = `오늘 총 ${totalSets}세트 (${totalQ}문제)`;
      if (totalSets > 0) {
        summaryEl.className = "text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs";
      } else {
        summaryEl.className = "text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200";
      }
    }

    const cats = this.dailyStats.categories || {};
    const catKeys = Object.keys(cats);

    if (catKeys.length === 0 || totalSets === 0) {
      listEl.innerHTML = `
        <div class="py-1 text-xs text-slate-400 flex items-center gap-1.5">
          <span>🌱</span>
          <span>오늘 아직 완료한 학습이 없습니다. 문제 풀기를 시작해보세요!</span>
        </div>
      `;
    } else {
      const html = catKeys.map(k => {
        const item = cats[k];
        return `
          <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 shadow-2xs">
            <span class="font-extrabold text-indigo-700">${item.name}</span>
            <span class="font-black text-slate-900 bg-white px-2 py-0.5 rounded-md border border-slate-200">${item.sets}세트</span>
            <span class="text-[11px] font-medium text-slate-400">(${item.questions}제)</span>
          </div>
        `;
      }).join('');
      listEl.innerHTML = html;
    }
  }

  renderCategoryCards() {
    const html = CATEGORIES.map(cat => {
      const isSelected = this.currentCategory === cat.id;
      const count = cat.id === 'all' 
        ? this.questions.length 
        : this.questions.filter(q => q.category === cat.id).length;

      const activeBorder = isSelected 
        ? 'border-indigo-600 ring-2 ring-indigo-500/20 bg-indigo-50/50' 
        : 'border-slate-200 bg-white hover:border-indigo-300';

      return `
        <div onclick="app.selectCategory('${cat.id}')" 
             class="p-4 rounded-2xl border ${activeBorder} cursor-pointer transition shadow-xs flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              ${cat.badge ? `
                <span class="text-[11px] font-bold px-2 py-0.5 rounded-full ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}">
                  ${cat.badge}
                </span>
              ` : `<span></span>`}
              <span class="text-xs font-mono font-semibold text-slate-400">${count}문항</span>
            </div>
            <h4 class="font-extrabold text-slate-900 text-sm md:text-base">${cat.name}</h4>
          </div>
          <div class="mt-3 text-xs font-bold ${isSelected ? 'text-indigo-600' : 'text-slate-400'} flex items-center justify-between">
            <span>${isSelected ? '선택됨 ✓' : '선택하기'}</span>
            <span>→</span>
          </div>
        </div>
      `;
    }).join('');

    this.dom.categoryContainer.innerHTML = html;
  }

  selectCategory(catId) {
    this.currentCategory = catId;
    if (catId === 'custom') {
      this.setSelectedQuestionCount(5);
    }
    this.renderCategoryCards();
    this.updateSelectedCategoryBanner();
    this.renderDailyActivity();
  }

  renderDailyActivity() {
    const today = this.getTodayDateString();
    if (this.dailyStats.date !== today) {
      this.dailyStats = this.getDefaultDailyStats();
      this.saveUserData();
    }

    const badgeDate = document.getElementById('daily-date-badge');
    const summaryEl = document.getElementById('daily-total-summary');
    const listEl = document.getElementById('daily-categories-list');
    if (!listEl) return;

    if (badgeDate) {
      const parts = today.split('-');
      badgeDate.textContent = `${parts[0]}.${parts[1]}.${parts[2]}`;
    }

    const totalSets = this.dailyStats.totalSets || 0;
    const totalQ = this.dailyStats.totalQuestions || 0;

    if (summaryEl) {
      summaryEl.textContent = `오늘 총 ${totalSets}세트 (${totalQ}문제)`;
      if (totalSets > 0) {
        summaryEl.className = "text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs";
      } else {
        summaryEl.className = "text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200";
      }
    }

    const cats = this.dailyStats.categories || {};
    const catKeys = Object.keys(cats);

    if (catKeys.length === 0 || totalSets === 0) {
      listEl.innerHTML = `
        <div class="py-1 text-xs text-slate-400 flex items-center gap-1.5">
          <span>🌱</span>
          <span>오늘 아직 완료한 학습이 없습니다. 문제 풀기를 시작해보세요!</span>
        </div>
      `;
    } else {
      const html = catKeys.map(k => {
        const item = cats[k];
        return `
          <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 shadow-2xs">
            <span class="font-extrabold text-indigo-700">${item.name}</span>
            <span class="font-black text-slate-900 bg-white px-2 py-0.5 rounded-md border border-slate-200">${item.sets}세트</span>
            <span class="text-[11px] font-medium text-slate-400">(${item.questions}제)</span>
          </div>
        `;
      }).join('');
      listEl.innerHTML = html;
    }
  }

  setSelectedQuestionCount(count) {
    this.selectedQuestionCount = count === 'all' ? 'all' : parseInt(count, 10);
    ['5', '10', 'all'].forEach(c => {
      const btn = document.getElementById(`btn-count-${c}`);
      if (btn) {
        if ((c === 'all' && this.selectedQuestionCount === 'all') || (parseInt(c, 10) === this.selectedQuestionCount)) {
          btn.className = "px-3 py-1 rounded-lg transition bg-white text-indigo-700 shadow-xs";
        } else {
          btn.className = "px-3 py-1 rounded-lg transition text-indigo-100 hover:text-white";
        }
      }
    });
    this.updateSelectedCategoryBanner();
  }

  updateSelectedCategoryBanner() {
    const cat = CATEGORIES.find(c => c.id === this.currentCategory) || CATEGORIES[2];
    const count = this.currentCategory === 'all' 
      ? this.questions.length 
      : this.questions.filter(q => q.category === this.currentCategory).length;

    this.dom.selectedCatTitle.textContent = cat.name;
    this.dom.selectedCatCount.textContent = `현재 등록 문항: ${count}개`;

    let desc = "준동사(동명사 vs to부정사) 3:3 출제 공식에 맞춰 실전 10문제를 출제합니다.";
    if (cat.id === 'tense') desc = "6대 시제(과진·현진·미진·과완진·현완진·미완진)를 골고루 섞어 10문제를 출제합니다.";
    else if (cat.id === 'all') desc = "G-TELP 시험에 나오는 시제, 준동사, 가정법, should생략, 관계사, 조동사, 연결어를 골고루 섞어 출제합니다.";
    else if (cat.id === 'gerund_infinitive') desc = "G-TELP 준동사 핵심: 동명사 3:3 to부정사 출제 공식 및 빈출 표현(decide to V / suggest -ing)을 집중 훈련합니다.";
    else if (cat.id === 'subjunctive') desc = "가정법 과거(If 과거, would 동사원형)와 가정법 과거완료(If had p.p., would have p.p.) 짝맞추기 훈련입니다.";
    else if (cat.id === 'should_omission') desc = "suggest, recommend, insist 등 주장·제안·요구 동사 뒤 (should) 동사원형 공식을 훈련합니다.";
    else if (cat.id === 'relative') desc = "콤마 뒤 that 불가, 사람/사물 선행사 구분 등 관계대명사/관계부사 핵심을 훈련합니다.";
    else if (cat.id === 'modal') desc = "문맥에 따른 의무(must/should), 가능성(may/can) 등 조동사 해석을 훈련합니다.";
    else if (cat.id === 'conjunction') desc = "although(접속사) vs despite(전치사), however 등 문맥 연결어 논리 관계를 훈련합니다.";
    else if (cat.id === 'custom') desc = "선생님 문제은행의 모든 문제를 5개씩 순환 출제합니다. 1번 풀거나 여러 번 연속으로 풀어 문제은행의 모든 문제를 1세트로 완주할 수 있습니다.";

    this.dom.selectedCatDesc.textContent = desc;

    // 시작 버튼 텍스트 업데이트
    const btnTextEl = document.getElementById('btn-start-session-text');
    if (btnTextEl) {
      if (cat.id === 'custom') {
        const customPool = this.questions.filter(q => q.category === 'custom');
        const poolIds = customPool.map(q => q.id);
        const unvisitedCount = (this.customCycle && this.customCycle.unvisitedIds && this.customCycle.unvisitedIds.length > 0)
          ? this.customCycle.unvisitedIds.filter(id => poolIds.includes(id)).length
          : customPool.length;
        if (customPool.length <= 5) {
          btnTextEl.textContent = `🔥 선생님 문제은행 ${customPool.length}문제 풀기 (1세트 완주)`;
        } else {
          const nextCount = Math.min(5, unvisitedCount);
          if (nextCount < 5) {
            btnTextEl.textContent = `🔥 선생님 문제은행 마지막 ${nextCount}문제 풀기 (1세트 완주)`;
          } else {
            btnTextEl.textContent = `🔥 선생님 문제은행 5문제 풀기 (순환 출제)`;
          }
        }
      } else {
        const cntStr = this.selectedQuestionCount === 'all' ? `전체 ${count}문제 모두` : `${this.selectedQuestionCount}문제`;
        btnTextEl.textContent = `🔥 ${cat.name} ${cntStr} 시작하기 (중복없는 순환 풀이)`;
      }
    }

    // 순환 뱃지 표시
    const cycleBadge = document.getElementById('cycle-status-badge');
    if (cycleBadge) {
      if (this.currentCategory === 'custom') {
        cycleBadge.classList.remove('hidden');
        const customPool = this.questions.filter(q => q.category === 'custom');
        const poolIds = customPool.map(q => q.id);
        const unvisited = (this.customCycle && this.customCycle.unvisitedIds) 
          ? this.customCycle.unvisitedIds.filter(id => poolIds.includes(id)) 
          : [];
        const currentRound = (this.customCycle && this.customCycle.round) ? this.customCycle.round : 1;
        const totalCount = customPool.length;
        const remaining = (this.customCycle && this.customCycle.unvisitedIds && this.customCycle.unvisitedIds.length > 0)
          ? unvisited.length
          : totalCount;
        const solved = totalCount - remaining;
        cycleBadge.textContent = `🔄 문제은행 ${currentRound}회독: [진행 ${solved} / 총 ${totalCount}문제] (남은 문제: ${remaining}개)`;
      } else {
        cycleBadge.classList.add('hidden');
      }
    }
  }

  // =========================================================================
  // 10문제 또는 26문제 무한 실전 동적 생성 엔진 연동
  // =========================================================================
  startQuizSession(categoryId, count = 10) {
    if (categoryId === 'custom') {
      const customPool = this.questions.filter(q => q.category === 'custom');
      if (customPool.length === 0) {
        alert("📷 [선생님 맞춤 오답 안내]\n\n아직 등록된 문제가 없습니다.\n\n선생님이 내주신 과제나 틀렸던 교재 문제 사진을 채팅창에 올려주시면, 지문/선지/정답/해설을 정확히 디지털화하여 이곳에 즉시 등록해 드립니다!");
        return;
      }
      this.currentSessionType = 'custom';
      this.startTimer();

      // =========================================================================
      // 선생님 문제은행 비중복 5문제 순환 알고리즘
      // - 모든 문제가 1세트로 빠짐없이 풀릴 때까지 중복 없이 5개씩 출제
      // - 1번 또는 여러 번 연속으로 풀 수 있으며, 모두 풀면 1세트 완주 후 다음 회독 시작
      // =========================================================================
      if (!this.customCycle) {
        this.customCycle = { unvisitedIds: [], solvedInRound: 0, round: 1 };
      }
      
      const poolIds = customPool.map(q => q.id);
      this.customCycle.unvisitedIds = (this.customCycle.unvisitedIds || []).filter(id => poolIds.includes(id));

      // 남은 미풀이 문항이 없으면 새로운 회독(1세트) 시작
      if (this.customCycle.unvisitedIds.length === 0) {
        this.customCycle.round = (this.customCycle.round || 0) + 1;
        this.customCycle.unvisitedIds = [...customPool].sort(() => Math.random() - 0.5).map(q => q.id);
        this.customCycle.solvedInRound = 0;
      }

      // 기본 5문제(또는 남은 문항 수)를 뽑아 1세트로 출제
      const numToPick = Math.min(5, this.customCycle.unvisitedIds.length);
      const pickedIds = this.customCycle.unvisitedIds.splice(0, numToPick);
      this.customCycle.solvedInRound = (this.customCycle.solvedInRound || 0) + pickedIds.length;
      this.customCycle.justFinishedCycle = (this.customCycle.unvisitedIds.length === 0);
      this.saveUserData();

      var selected = pickedIds.map(id => customPool.find(q => q.id === id)).filter(Boolean);
    } else {
      const is26 = categoryId === 'full_26' || count === 26;
      this.currentSessionType = is26 ? 'full_26' : categoryId;
      this.startTimer();
      var selected = [];

      const targetCount = count === 'all' ? 10 : count;

      // 동적 무한 생성 엔진이 있으면 즉석에서 신선한 G-TELP 규격 문제 생성
      if (typeof GTELP_GENERATOR !== 'undefined') {
        selected = GTELP_GENERATOR.generateSet(categoryId, targetCount);
      } else {
        let pool = categoryId === 'all' ? [...this.questions] : this.questions.filter(q => q.category === categoryId);
        if (pool.length === 0) pool = [...this.questions];
        const shuffled = [...pool].sort(() => Math.random() - 0.5);
        selected = shuffled.slice(0, Math.min(targetCount, pool.length));
      }
    }

    // 문제 추출 후 완벽한 무작위 셔플 (Fisher-Yates 셔플로 순서 완전히 섞기)
    for (let i = selected.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [selected[i], selected[j]] = [selected[j], selected[i]];
    }

    // 보기(A, B, C, D) 무작위 셔플
    this.currentQuestions = selected.map(q => {
      const labels = ['A', 'B', 'C', 'D'];
      const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
      return {
        ...q,
        shuffledOptions: shuffledOptions.map((opt, idx) => ({
          label: labels[idx],
          text: opt.text,
          isCorrect: opt.isCorrect
        }))
      };
    });

    this.currentIndex = 0;
    this.selectedAnswers = {};
    this.isAnswered = {};

    this.dom.dashboardView.classList.add('hidden');
    this.dom.resultView.classList.add('hidden');
    this.dom.quizView.classList.remove('hidden');

    this.renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  startWrongSession() {
    let wrongPool = this.getTodayWrongQuestionsList();
    if (wrongPool.length === 0) {
      alert("👏 오늘 문제 풀이 중 틀린 문제가 없습니다!\n\n다른 파트나 실전 모의고사를 풀다가 틀린 문제가 생기면 이곳에 자동으로 모여 집중 복습할 수 있습니다.");
      return;
    }

    this.currentSessionType = 'wrong';
    this.startTimer();
    const shuffled = [...wrongPool].sort(() => Math.random() - 0.5);
    this.currentQuestions = shuffled.map(q => {
      const labels = ['A', 'B', 'C', 'D'];
      const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
      return {
        ...q,
        shuffledOptions: shuffledOptions.map((opt, idx) => ({
          label: labels[idx],
          text: opt.text,
          isCorrect: opt.isCorrect
        }))
      };
    });

    this.currentIndex = 0;
    this.selectedAnswers = {};
    this.isAnswered = {};

    this.dom.dashboardView.classList.add('hidden');
    this.dom.resultView.classList.add('hidden');
    this.dom.quizView.classList.remove('hidden');

    this.renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderQuestion() {
    const total = this.currentQuestions.length;
    const currentQ = this.currentQuestions[this.currentIndex];
    const isAlreadyAnswered = !!this.isAnswered[currentQ.id];
    const selectedOptIdx = this.selectedAnswers[currentQ.id];

    const progressPercent = Math.round(((this.currentIndex + 1) / total) * 100);
    this.dom.progressBar.style.width = `${progressPercent}%`;
    this.dom.progressText.textContent = `문제 ${this.currentIndex + 1} / ${total}`;

    this.renderQuickDots();

    let formatted = currentQ.question.replace(/___________/g, '<span class="px-2 py-0.5 mx-1 font-bold text-indigo-700 bg-indigo-50 border-b-2 border-indigo-500 rounded">___________</span>');
    if (isAlreadyAnswered && currentQ.triggerWord) {
      const tw = currentQ.triggerWord.trim();
      if (formatted.includes(tw)) {
        formatted = formatted.replace(tw, `<mark class="bg-amber-200 text-amber-950 px-1 py-0.5 rounded font-bold">${tw}</mark>`);
      } else {
        const cleanTw = tw.split('(')[0].trim();
        if (cleanTw && formatted.includes(cleanTw)) {
          formatted = formatted.replace(cleanTw, `<mark class="bg-amber-200 text-amber-950 px-1 py-0.5 rounded font-bold">${cleanTw}</mark>`);
        }
      }
    }
    this.dom.questionText.innerHTML = formatted;

    // 보기 렌더링 (실제 G-TELP 시험지 폰트 100% 반영)
    const optionsHtml = currentQ.shuffledOptions.map((opt, idx) => {
      let cardStyle = "border-slate-200 bg-white hover:border-indigo-400 hover:bg-slate-50/80 cursor-pointer text-slate-800 shadow-xs";
      let labelStyle = "text-slate-600 font-bold border-r border-slate-200 pr-3 mr-3 gtelp-label-font";
      let statusIcon = "";

      if (isAlreadyAnswered) {
        if (opt.isCorrect) {
          cardStyle = "border-emerald-500 bg-emerald-50/80 text-emerald-950 font-semibold ring-2 ring-emerald-500/30";
          labelStyle = "text-emerald-700 font-bold border-r border-emerald-300 pr-3 mr-3 gtelp-label-font";
          statusIcon = `<span class="ml-auto text-emerald-600 font-bold text-xs bg-emerald-100 px-2 py-1 rounded-md gtelp-label-font">✓ 정답</span>`;
        } else if (selectedOptIdx === idx && !opt.isCorrect) {
          cardStyle = "border-rose-400 bg-rose-50/80 text-rose-950 ring-2 ring-rose-400/30";
          labelStyle = "text-rose-600 font-bold border-r border-rose-300 pr-3 mr-3 gtelp-label-font";
          statusIcon = `<span class="ml-auto text-rose-600 font-bold text-xs bg-rose-100 px-2 py-1 rounded-md gtelp-label-font">✗ 내가 고른 오답</span>`;
        } else {
          cardStyle = "border-slate-200 bg-white opacity-40 text-slate-400 cursor-not-allowed";
          labelStyle = "text-slate-400 border-r border-slate-200 pr-3 mr-3 gtelp-label-font";
        }
      }

      return `
        <div onclick="app.handleSelectOption(${idx})" 
             class="group flex items-center p-4 rounded-xl border text-[16px] md:text-[17px] transition-all duration-150 ${cardStyle}">
          <span class="text-sm tracking-wider uppercase ${labelStyle}">
            (${opt.label})
          </span>
          <span class="flex-1 gtelp-exam-font">${opt.text}</span>
          ${statusIcon}
        </div>
      `;
    }).join('');

    this.dom.optionsContainer.innerHTML = optionsHtml;

    if (isAlreadyAnswered) {
      const chosenOpt = currentQ.shuffledOptions[selectedOptIdx];
      const isCorrect = chosenOpt && chosenOpt.isCorrect;

      this.dom.feedbackBox.classList.remove('hidden');
      this.dom.feedbackContent.innerHTML = `
        <div class="p-4 rounded-2xl border ${isCorrect ? 'bg-emerald-50/90 border-emerald-300' : 'bg-rose-50/90 border-rose-300'} space-y-2.5 animate-fade-in">
          <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b ${isCorrect ? 'border-emerald-200' : 'border-rose-200'}">
            <div class="flex items-center gap-2">
              <span class="text-base font-extrabold ${isCorrect ? 'text-emerald-700' : 'text-rose-600'}">
                ${isCorrect ? '🎉 정답입니다!' : '❌ 아쉽네요, 오답입니다!'}
              </span>
            </div>
            <!-- 이때 문법 파트 및 세부 유형 공개 -->
            <div class="flex items-center gap-1.5">
              <span class="text-xs text-slate-500 font-medium">출제 유형:</span>
              <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-600 text-white shadow-xs">
                📌 ${currentQ.subCategoryName || currentQ.subCategory}
              </span>
            </div>
          </div>

          <div class="text-xs md:text-sm text-slate-700 space-y-1.5 leading-relaxed">
            <div class="p-2.5 bg-white/80 rounded-xl border border-slate-200/80">
              <span class="font-bold text-indigo-700">🔑 단서 & 공식:</span> ${currentQ.hint}
            </div>
            <p class="pt-1">${currentQ.explanation}</p>
          </div>
        </div>
      `;

      // 버튼 제어: 이전 문제 버튼 및 다음 문제 버튼
      if (this.dom.btnPrevQuestion) {
        if (this.currentIndex > 0) {
          this.dom.btnPrevQuestion.classList.remove('hidden');
        } else {
          this.dom.btnPrevQuestion.classList.add('hidden');
        }
      }

      this.dom.btnNextQuestion.classList.remove('hidden');
      if (this.currentIndex === total - 1) {
        this.dom.btnNextQuestion.innerHTML = `<span>채점 결과 보기</span> <span>→</span>`;
        this.dom.btnNextQuestion.className = "flex-1 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm md:text-base flex items-center justify-center gap-2 shadow-lg transition";
      } else {
        this.dom.btnNextQuestion.innerHTML = `<span>다음 문제 풀기 (Enter)</span> <span>→</span>`;
        this.dom.btnNextQuestion.className = "flex-1 py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm md:text-base flex items-center justify-center gap-2 shadow-lg transition";
      }
    } else {
      this.dom.feedbackBox.classList.add('hidden');
      this.dom.btnNextQuestion.classList.add('hidden');
      if (this.dom.btnPrevQuestion) {
        if (this.currentIndex > 0) {
          this.dom.btnPrevQuestion.classList.remove('hidden');
        } else {
          this.dom.btnPrevQuestion.classList.add('hidden');
        }
      }
    }
  }

  handleSelectOption(optionIndex) {
    const currentQ = this.currentQuestions[this.currentIndex];
    if (this.isAnswered[currentQ.id]) return;

    this.selectedAnswers[currentQ.id] = optionIndex;
    this.isAnswered[currentQ.id] = true;

    const chosenOpt = currentQ.shuffledOptions[optionIndex];
    const isCorrect = chosenOpt.isCorrect;

    this.history.totalSolved = (this.history.totalSolved || 0) + 1;
    if (isCorrect) {
      this.history.totalCorrect = (this.history.totalCorrect || 0) + 1;
      // 오답노트 보존: 문제를 다시 맞히더라도 보관함에서 자동 삭제하지 않고 언제든 무제한 재복습 가능하도록 보존
    } else {
      const today = this.getTodayDateString();
      if (!this.dailyStats || this.dailyStats.date !== today) {
        this.dailyStats = this.getDefaultDailyStats();
      }
      if (!this.dailyStats.todayWrongStore) {
        this.dailyStats.todayWrongStore = {};
      }
      const wrongItem = {
        id: currentQ.id,
        category: currentQ.category,
        subCategory: currentQ.subCategory,
        subCategoryName: currentQ.subCategoryName,
        question: currentQ.question,
        options: currentQ.options,
        triggerWord: currentQ.triggerWord,
        hint: currentQ.hint,
        gPoint: currentQ.gPoint,
        explanation: currentQ.explanation
      };
      this.dailyStats.todayWrongStore[currentQ.id] = wrongItem;

      if (!this.history.wrongIds) this.history.wrongIds = [];
      if (!this.history.wrongIds.includes(currentQ.id)) {
        this.history.wrongIds.push(currentQ.id);
      }
      if (!this.wrongQuestionStore) this.wrongQuestionStore = {};
      this.wrongQuestionStore[currentQ.id] = wrongItem;
    }

    this.saveUserData();
    this.renderQuestion();

    setTimeout(() => {
      this.dom.feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }

  goPrevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderQuestion();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  jumpToQuestion(index) {
    if (index >= 0 && index < this.currentQuestions.length) {
      this.currentIndex = index;
      this.renderQuestion();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goNextQuestion() {
    if (this.currentIndex < this.currentQuestions.length - 1) {
      this.currentIndex++;
      this.renderQuestion();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.showFinalResult();
    }
  }

  renderQuickDots() {
    const dotsHtml = this.currentQuestions.map((q, idx) => {
      const answered = this.isAnswered[q.id];
      const isCurrent = idx === this.currentIndex;
      let dotColor = "bg-slate-200 text-slate-600 hover:bg-slate-300";

      if (answered) {
        const selIdx = this.selectedAnswers[q.id];
        const isRight = q.shuffledOptions[selIdx]?.isCorrect;
        dotColor = isRight 
          ? "bg-emerald-500 text-white font-bold hover:bg-emerald-600 shadow-xs" 
          : "bg-rose-500 text-white font-bold hover:bg-rose-600 shadow-xs";
      }

      const ring = isCurrent ? "ring-2 ring-indigo-600 ring-offset-2 scale-110 font-black shadow-sm" : "";

      return `
        <button onclick="app.jumpToQuestion(${idx})" 
                title="${idx + 1}번 문제로 이동"
                class="w-7 h-7 rounded-lg text-xs flex items-center justify-center transition cursor-pointer ${dotColor} ${ring}">
          ${idx + 1}
        </button>
      `;
    }).join('');

    this.dom.quickDots.innerHTML = dotsHtml;
  }

  showFinalResult() {
    this.stopTimer();
    this.dom.quizView.classList.add('hidden');
    this.dom.resultView.classList.remove('hidden');

    let correctCount = 0;
    const wrongQuestions = [];
    this.currentQuestions.forEach(q => {
      const selIdx = this.selectedAnswers[q.id];
      if (q.shuffledOptions[selIdx]?.isCorrect) {
        correctCount++;
      } else {
        wrongQuestions.push(q);
      }
    });

    const total = this.currentQuestions.length;
    const rate = Math.round((correctCount / total) * 100);

    document.getElementById('final-score').textContent = `${correctCount} / ${total}`;
    document.getElementById('final-rate').textContent = `${rate}%`;

    // 타이머 결과 통계 표시
    const m = Math.floor(this.elapsedSeconds / 60);
    const s = this.elapsedSeconds % 60;
    const timeFormatted = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    const avgSec = total > 0 ? Math.round(this.elapsedSeconds / total) : 0;
    const elFinalTime = document.getElementById('final-time');
    const elFinalAvg = document.getElementById('final-avg-time');
    if (elFinalTime) elFinalTime.textContent = timeFormatted;
    if (elFinalAvg) elFinalAvg.textContent = `문제당 평균 ${avgSec}초`;

    // 당일 학습 기록 갱신 (하루 기준 완료 세트 수 & 문항 수)
    const sessionCat = this.currentSessionType || this.currentCategory;
    this.recordDailySet(sessionCat, total);
    this.saveUserData();

    const catStats = this.dailyStats && this.dailyStats.categories ? this.dailyStats.categories[sessionCat] : null;
    const dailyBadge = document.getElementById('final-daily-badge');
    const isCustom = this.currentSessionType === 'custom';
    const isWrong = this.currentSessionType === 'wrong';

    if (dailyBadge) {
      if (isCustom) {
        const customPool = this.questions.filter(q => q.category === 'custom');
        const round = (this.customCycle && this.customCycle.round) ? this.customCycle.round : 1;
        const justFinished = this.customCycle && this.customCycle.justFinishedCycle;
        if (justFinished) {
          dailyBadge.innerHTML = `🏆 <strong>[선생님 문제은행 1세트 완주!]</strong> 전체 <strong>${customPool.length}문제를 빠짐없이 모두 풀었습니다!</strong> (${round}회독 완료)`;
        } else {
          const remaining = (this.customCycle && this.customCycle.unvisitedIds) ? this.customCycle.unvisitedIds.length : 0;
          const solved = (this.customCycle && this.customCycle.solvedInRound) ? this.customCycle.solvedInRound : (customPool.length - remaining);
          dailyBadge.innerHTML = `✨ <strong>[선생님 문제은행 5문제 완료]</strong> ${round}회독 진행: <strong>${solved} / ${customPool.length}문제</strong> (남은 문제: ${remaining}개)`;
        }
      } else if (isWrong) {
        dailyBadge.innerHTML = `📝 <strong>[오늘의 오답 복습 완료]</strong> 틀렸던 문제들을 꼼꼼하게 복습했습니다!`;
      } else if (catStats) {
        dailyBadge.innerHTML = `<span>📅</span> 오늘 <strong>${catStats.name}</strong> 누적 <strong>${catStats.sets}세트 (${catStats.questions}문제)</strong> 완료!`;
      }
    }

    // 실전 26제 모의고사 전용 G-TELP 100점 환산 및 6대 영역 분석 리포트
    const isFull26 = this.currentSessionType === 'full_26' || total === 26;
    let full26ScoreHtml = '';

    if (isFull26) {
      const catMap = {
        tense: { name: '시제', total: 6, correct: 0 },
        subjunctive: { name: '가정법', total: 6, correct: 0 },
        gerund_infinitive: { name: '준동사', total: 5, correct: 0 },
        should_omission: { name: 'Should생략', total: 3, correct: 0 },
        relative: { name: '관계사', total: 2, correct: 0 },
        modal_conjunction: { name: '조동사/연결어', total: 4, correct: 0 }
      };

      this.currentQuestions.forEach(q => {
        const selIdx = this.selectedAnswers[q.id];
        const isCorr = q.shuffledOptions[selIdx]?.isCorrect;
        let cKey = q.category;
        if (cKey === 'modal' || cKey === 'conjunction') cKey = 'modal_conjunction';
        if (catMap[cKey]) {
          if (isCorr) catMap[cKey].correct++;
        }
      });

      const gtelpScore = Math.round((correctCount / 26) * 100);
      let gradeBadge = '';
      if (gtelpScore >= 92) {
        gradeBadge = `<span class="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-black">🏆 문법 만점권 (초고득점)</span>`;
      } else if (gtelpScore >= 80) {
        gradeBadge = `<span class="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-black">🎯 65점 합격 안정권 (공무원/자격증)</span>`;
      } else if (gtelpScore >= 65) {
        gradeBadge = `<span class="px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-black">⚡ 32/43점 합격권 (군무원/노무사)</span>`;
      } else {
        gradeBadge = `<span class="px-3 py-1 rounded-full bg-rose-500 text-white text-xs font-black">📚 공식 집중 보완 필요</span>`;
      }

      let timeEval = '';
      if (this.elapsedSeconds <= 1200) {
        const savedMin = Math.round((1200 - this.elapsedSeconds) / 60);
        timeEval = `<span class="text-emerald-700 font-bold">⚡ 20분 제한시간보다 약 ${savedMin}분 단축! (독해/청취 시간 확보 대성공)</span>`;
      } else {
        const overMin = Math.round((this.elapsedSeconds - 1200) / 60);
        timeEval = `<span class="text-rose-700 font-bold">⚠️ 본시험 기준 20분에서 ${overMin}분 초과 (공식 1초 컷으로 시간 단축 권장)</span>`;
      }

      full26ScoreHtml = `
        <div class="bg-indigo-50 border border-indigo-200 rounded-2xl p-4.5 space-y-3 mb-3 text-left">
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-100 pb-2.5">
            <div class="flex items-center gap-2">
              <span class="text-xl">🏆</span>
              <div>
                <h4 class="font-black text-indigo-950 text-sm md:text-base">G-TELP 실전 26제 문법 환산 성적표</h4>
                <p class="text-[11px] text-indigo-600">본시험 공식 문항 비율 100% 반영 모의고사</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm font-extrabold text-indigo-900">${gtelpScore}점</span>
              ${gradeBadge}
            </div>
          </div>
          
          <div class="flex items-center justify-between text-xs text-slate-700 bg-white/80 p-2.5 rounded-xl border border-indigo-100">
            <span class="font-bold">⏱️ 실전 시간: ${timeFormatted} / 20:00</span>
            ${timeEval}
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
            ${Object.values(catMap).map(c => {
              const pass = c.correct === c.total;
              return `
                <div class="bg-white p-2.5 rounded-xl border ${pass ? 'border-emerald-200 bg-emerald-50/40' : 'border-slate-200'} flex items-center justify-between text-xs">
                  <span class="font-bold text-slate-700">${c.name}</span>
                  <span class="font-black ${pass ? 'text-emerald-600' : 'text-slate-800'}">${c.correct} / ${c.total} ${pass ? '💮' : ''}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    // 취약점 정밀 진단 리포트 생성
    const reportBox = document.getElementById('weakness-report');
    if (reportBox) {
      if (wrongQuestions.length === 0) {
        reportBox.innerHTML = full26ScoreHtml + `
          <div class="flex items-start gap-3">
            <span class="text-2xl">🎯</span>
            <div>
              <h4 class="font-bold text-emerald-800 text-sm">취약점 없음 - 전 문항 정답!</h4>
              <p class="text-xs text-slate-600 mt-0.5">이번 세트의 모든 문항을 완벽하게 맞혔습니다. 실전 감각이 최고조입니다!</p>
            </div>
          </div>
        `;
        reportBox.className = "text-left bg-emerald-50 border border-emerald-200 rounded-2xl p-4.5 space-y-2";
      } else {
        const wrongByCat = {};
        wrongQuestions.forEach(q => {
          const catKey = q.subCategoryName || q.subCategory || q.category;
          wrongByCat[catKey] = (wrongByCat[catKey] || 0) + 1;
        });

        const sortedCats = Object.entries(wrongByCat).sort((a, b) => b[1] - a[1]);
        const [topWeakCat, topCount] = sortedCats[0];

        let tip = "오답 문제의 '🔑 단서 & 공식' 박스를 유심히 확인하고 우측 상단 '📖 공식표'를 복습해보세요.";
        if (topWeakCat.includes('시제') || topWeakCat.includes('진행')) {
          tip = "시제 문제는 문장의 특정 시간 부사(right now, when+과거, for+기간)를 먼저 찾는 연습을 집중하세요.";
        } else if (topWeakCat.includes('준동사') || topWeakCat.includes('동명사') || topWeakCat.includes('to부정사')) {
          tip = "동사 뒤 목적어 공식표(suggest -ing, decide to V 등)를 소리 내어 3번 반복 암기하면 1초 컷 가능합니다.";
        } else if (topWeakCat.includes('가정법')) {
          tip = "If절과 주절의 짝맞추기 공식(If 과거->would 원형 / If had p.p.->would have p.p.)에 집중하세요.";
        } else if (topWeakCat.includes('Should') || topWeakCat.includes('should')) {
          tip = "주장·제안·요구 동사(suggest, insist) 뒤 that절에는 주어 인칭 상관없이 무조건 동사원형입니다.";
        } else if (topWeakCat.includes('관계사')) {
          tip = "콤마(,) 뒤 that 불가 규칙과 선행사(사람 who vs 사물 which) 구분을 점검하세요.";
        }

        reportBox.innerHTML = full26ScoreHtml + `
          <div class="flex items-start gap-2.5">
            <span class="text-xl">⚠️</span>
            <div class="space-y-1 w-full">
              <div class="flex items-center justify-between">
                <h4 class="font-extrabold text-slate-900 text-sm">🎯 집중 보완이 필요한 취약 파트</h4>
                <span class="text-xs font-bold text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full">${topCount}문항 오답</span>
              </div>
              <p class="text-xs font-bold text-indigo-700 bg-white p-2 rounded-lg border border-slate-200">
                ${topWeakCat}
              </p>
              <p class="text-xs text-slate-600 leading-relaxed pt-1">
                <span class="font-semibold text-slate-800">💡 족집게 처방:</span> ${tip}
              </p>
            </div>
          </div>
        `;
        reportBox.className = "text-left bg-amber-50/70 border border-amber-200 rounded-2xl p-4 space-y-2";
      }
    }

    const retryBtn = document.getElementById('btn-retry-session');
    if (retryBtn) {
      if (isCustom) {
        const remaining = (this.customCycle && this.customCycle.unvisitedIds) ? this.customCycle.unvisitedIds.length : 0;
        const justFinished = this.customCycle && this.customCycle.justFinishedCycle;
        const round = (this.customCycle && this.customCycle.round) ? this.customCycle.round : 1;
        if (justFinished) {
          retryBtn.textContent = `🔄 새로운 1세트(${round + 1}회독) 다시 시작하기`;
        } else {
          const nextBatch = Math.min(5, remaining);
          retryBtn.textContent = `🔄 다음 ${nextBatch}문제 이어서 풀기 (순환)`;
        }
      } else if (isWrong) {
        retryBtn.textContent = '🔄 오늘 오답 다시 복습하기';
      } else {
        retryBtn.textContent = isFull26 ? '🔄 새로운 26제 모의고사 또 풀기' : `🔄 새로운 ${this.selectedQuestionCount}문제 또 풀기`;
      }
    }

    let message = "🎉 축하합니다! 완벽하게 마스터하고 계시네요!";
    if (rate < 60) {
      message = "💪 괜찮아요! 단서와 공식을 복습하며 취약 파트를 다시 정복해보세요.";
    } else if (rate < 90) {
      message = "👍 아주 훌륭합니다! 헷갈린 문항만 보완하면 실전 만점입니다.";
    }
    document.getElementById('final-message').textContent = message;

    const reviewHtml = this.currentQuestions.map((q, idx) => {
      const selIdx = this.selectedAnswers[q.id];
      const userOpt = q.shuffledOptions[selIdx];
      const isRight = userOpt?.isCorrect;
      const rightOpt = q.shuffledOptions.find(o => o.isCorrect);

      return `
        <div class="p-4 rounded-xl border ${isRight ? 'bg-emerald-50/40 border-emerald-200' : 'bg-rose-50/40 border-rose-200'}">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-700">
              Q${idx + 1}. [${q.subCategoryName || q.subCategory}]
            </span>
            <span class="text-xs font-bold ${isRight ? 'text-emerald-700' : 'text-rose-600'}">
              ${isRight ? '✓ 정답' : `✗ 오답 (내 선택: (${userOpt ? userOpt.label : '-'}) / 정답: (${rightOpt.label}))`}
            </span>
          </div>
          <p class="text-sm md:text-base text-slate-800 mb-2 gtelp-exam-font leading-relaxed">${q.question}</p>
          <div class="text-xs text-slate-600 bg-white/90 p-2.5 rounded-lg border border-slate-200">
            <span class="font-bold text-indigo-700">G-POINT:</span> ${q.hint} - ${q.explanation}
          </div>
        </div>
      `;
    }).join('');

    document.getElementById('result-review-list').innerHTML = reviewHtml;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showDashboard() {
    this.dom.quizView.classList.add('hidden');
    this.dom.resultView.classList.add('hidden');
    this.dom.dashboardView.classList.remove('hidden');
    this.renderDashboard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openCheatsheet() {
    const keys = Object.keys(CHEATSHEET);
    const tabsHtml = keys.map((k, i) => `
      <button onclick="app.showCheatTab('${k}')" id="cheat-tab-${k}" 
              class="px-3 py-1.5 rounded-lg text-xs font-bold transition ${k === 'gerund_infinitive' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">
        ${CHEATSHEET[k].title.split('.')[1] || CHEATSHEET[k].title}
      </button>
    `).join('');

    document.getElementById('cheat-tabs').innerHTML = tabsHtml;
    this.showCheatTab('gerund_infinitive'); // 준동사 탭 기본 열기
    this.dom.cheatsheetModal.classList.remove('hidden');
  }

  showCheatTab(tabKey) {
    Object.keys(CHEATSHEET).forEach(k => {
      const btn = document.getElementById(`cheat-tab-${k}`);
      if (btn) {
        if (k === tabKey) {
          btn.className = "px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 text-white transition";
        } else {
          btn.className = "px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 transition";
        }
      }
    });

    const data = CHEATSHEET[tabKey];
    const rulesHtml = data.rules.map(r => `
      <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
        <div class="font-bold text-slate-800 text-sm mb-1">${r.name}</div>
        <p class="text-xs text-slate-600 leading-relaxed whitespace-pre-line">${r.desc}</p>
      </div>
    `).join('');

    let trapsHtml = '';
    if (data.traps && data.traps.length > 0) {
      trapsHtml = `
        <div class="mt-3 p-3.5 bg-amber-50 rounded-2xl border-2 border-amber-300 space-y-2">
          <div class="flex items-center gap-1.5 text-amber-950 font-black text-xs">
            <span class="text-base">🚨</span>
            <span>출제자의 낚시 주의! 핵심 오답 POINT</span>
          </div>
          <div class="space-y-1.5">
            ${data.traps.map(t => `
              <div class="bg-white p-2.5 rounded-xl border border-amber-200">
                <div class="font-black text-rose-700 text-xs mb-0.5">${t.name}</div>
                <div class="text-[11px] text-slate-700 leading-relaxed font-medium">${t.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    document.getElementById('cheat-content').innerHTML = `
      <div class="space-y-2">
        <h4 class="font-extrabold text-slate-900 text-sm mb-2">${data.title}</h4>
        ${rulesHtml}
        ${trapsHtml}
      </div>
    `;
  }

  forceRefreshApp() {
    const icon = document.getElementById('refresh-icon');
    if (icon) {
      icon.style.transition = 'transform 0.6s ease';
      icon.style.transform = 'rotate(360deg)';
    }
    // 캐시 무효화 쿼리스트링 부착하여 완전 새로고침 (최신 업데이트 즉시 반영)
    setTimeout(() => {
      const cleanUrl = window.location.origin + window.location.pathname;
      window.location.href = cleanUrl + '?t=' + Date.now();
    }, 250);
  }

  openAddModal() {
    this.dom.addQuestionModal.classList.remove('hidden');
  }

  closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
  }

  handleSaveNewQuestion(e) {
    e.preventDefault();
    const form = e.target;
    const category = form.category.value;
    const subCategoryName = form.subCategoryName.value.trim();
    const questionText = form.questionText.value.trim();
    const optA = form.optA.value.trim();
    const optB = form.optB.value.trim();
    const optC = form.optC.value.trim();
    const optD = form.optD.value.trim();
    const answer = form.answer.value;
    const hint = form.hint.value.trim();
    const explanation = form.explanation.value.trim();

    if (!questionText || !optA || !optB || !optC || !optD) {
      alert("모든 필수 항목을 입력해주세요.");
      return;
    }

    const newQuestion = {
      id: `CUSTOM-${Date.now()}`,
      category: category,
      subCategory: subCategoryName || category,
      subCategoryName: `${subCategoryName || category} (직접 등록)`,
      question: questionText,
      options: [
        { text: optA, isCorrect: answer === 'a' },
        { text: optB, isCorrect: answer === 'b' },
        { text: optC, isCorrect: answer === 'c' },
        { text: optD, isCorrect: answer === 'd' }
      ],
      hint: hint || "단서 키워드를 확인하세요.",
      gPoint: "사용자 추가 문제",
      explanation: explanation || "정답 해설이 등록되지 않았습니다."
    };

    this.questions.push(newQuestion);
    try {
      const saved = localStorage.getItem('gtelp_custom_questions');
      const list = saved ? JSON.parse(saved) : [];
      list.push(newQuestion);
      localStorage.setItem('gtelp_custom_questions', JSON.stringify(list));
    } catch (err) {
      console.error(err);
    }

    alert("새 문제가 성공적으로 등록되었습니다!");
    form.reset();
    this.closeModal('add-question-modal');
    this.renderDashboard();
  }
}

let app;
window.addEventListener('DOMContentLoaded', () => {
  app = new GTelpApp();
});
