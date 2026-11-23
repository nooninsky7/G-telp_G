// G-TELP 문법 마스터 컨트롤러 (전 파트 지원 & 준동사 3:3 균형 출제)

class GTelpApp {
  constructor() {
    this.questions = [...QUESTIONS_DATABASE];
    this.currentCategory = 'gerund_infinitive'; // 방금 준동사 자료를 주셨으므로 준동사를 우선 기본 선택
    this.currentQuestions = [];
    this.currentIndex = 0;
    this.selectedAnswers = {};
    this.isAnswered = {};
    this.history = { totalSolved: 0, totalCorrect: 0, streak: 1, wrongIds: [] };

    this.loadUserData();
    this.initDOM();
    this.bindEvents();
    this.renderDashboard();
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
    } catch (e) {
      console.error(e);
    }
  }

  saveUserData() {
    localStorage.setItem('gtelp_user_history', JSON.stringify(this.history));
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

      progressText: document.getElementById('progress-text'),
      progressBar: document.getElementById('progress-bar'),
      questionText: document.getElementById('question-text'),
      optionsContainer: document.getElementById('options-container'),
      feedbackBox: document.getElementById('feedback-box'),
      feedbackContent: document.getElementById('feedback-content'),
      btnNextQuestion: document.getElementById('btn-next-question'),
      quickDots: document.getElementById('quick-dots')
    };
  }

  bindEvents() {
    document.getElementById('btn-start-session').addEventListener('click', () => this.startQuizSession(this.currentCategory));
    document.getElementById('btn-home').addEventListener('click', () => this.showDashboard());
    document.getElementById('btn-quit-quiz').addEventListener('click', () => {
      if (confirm('현재 풀던 10문제 세트를 종료하고 메인으로 돌아갈까요?')) {
        this.showDashboard();
      }
    });

    document.getElementById('btn-open-cheat').addEventListener('click', () => this.openCheatsheet());
    document.getElementById('btn-close-cheat').addEventListener('click', () => this.closeModal('cheatsheet-modal'));

    document.getElementById('btn-open-add').addEventListener('click', () => this.openAddModal());
    document.getElementById('btn-close-add').addEventListener('click', () => this.closeModal('add-question-modal'));
    document.getElementById('form-add-question').addEventListener('submit', (e) => this.handleSaveNewQuestion(e));

    this.dom.btnNextQuestion.addEventListener('click', () => this.goNextQuestion());
    document.getElementById('btn-retry-session').addEventListener('click', () => this.startQuizSession(this.currentCategory));
    document.getElementById('btn-result-home').addEventListener('click', () => this.showDashboard());

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal('cheatsheet-modal');
        this.closeModal('add-question-modal');
      }
      if ((e.key === 'Enter') && !this.dom.quizView.classList.contains('hidden')) {
        const currentQ = this.currentQuestions[this.currentIndex];
        if (this.isAnswered[currentQ.id]) {
          this.goNextQuestion();
        }
      }
    });
  }

  renderDashboard() {
    const total = this.history.totalSolved || 0;
    const rate = total > 0 ? Math.round((this.history.totalCorrect / total) * 100) : 0;
    const wrongCount = this.history.wrongIds ? this.history.wrongIds.length : 0;

    this.dom.statSolved.textContent = total;
    this.dom.statRate.textContent = `${rate}%`;
    this.dom.statWrongCount.textContent = wrongCount;
    this.dom.statStreak.textContent = `${this.history.streak || 1}일`;

    const wrongCard = document.getElementById('card-wrong-notes');
    if (wrongCount === 0) {
      wrongCard.classList.add('opacity-50', 'pointer-events-none');
      document.getElementById('wrong-badge').textContent = '오답 없음';
    } else {
      wrongCard.classList.remove('opacity-50', 'pointer-events-none');
      document.getElementById('wrong-badge').textContent = `${wrongCount}문제`;
      wrongCard.onclick = () => this.startWrongSession();
    }

    this.renderCategoryCards();
    this.updateSelectedCategoryBanner();
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
              <span class="text-[11px] font-bold px-2 py-0.5 rounded-full ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}">
                ${cat.badge}
              </span>
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
    this.renderCategoryCards();
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

    this.dom.selectedCatDesc.textContent = desc;
  }

  // =========================================================================
  // 10문제 추출 및 무한 실전 동적 생성 엔진 연동
  // =========================================================================
  startQuizSession(categoryId) {
    let selected = [];

    // 동적 무한 생성 엔진이 있으면 즉석에서 신선한 G-TELP 규격 10문제 생성
    if (typeof GTELP_GENERATOR !== 'undefined') {
      selected = GTELP_GENERATOR.generate10Set(categoryId);
    } else {
      let pool = categoryId === 'all' ? [...this.questions] : this.questions.filter(q => q.category === categoryId);
      if (pool.length === 0) pool = [...this.questions];
      const shuffled = [...pool].sort(() => Math.random() - 0.5);
      selected = shuffled.slice(0, Math.min(10, pool.length));
    }

    selected.sort(() => Math.random() - 0.5);

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
    const wrongPool = this.questions.filter(q => this.history.wrongIds.includes(q.id));
    if (wrongPool.length === 0) return;

    this.currentQuestions = wrongPool.slice(0, 10).map(q => {
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

    const formatted = currentQ.question.replace(/___________/g, '<span class="px-2 py-0.5 mx-1 font-bold text-indigo-700 bg-indigo-50 border-b-2 border-indigo-500 rounded">___________</span>');
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

      this.dom.btnNextQuestion.classList.remove('hidden');
      if (this.currentIndex === total - 1) {
        this.dom.btnNextQuestion.innerHTML = `<span>채점 결과 보기</span> <span>→</span>`;
        this.dom.btnNextQuestion.className = "w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm md:text-base flex items-center justify-center gap-2 shadow-lg transition";
      } else {
        this.dom.btnNextQuestion.innerHTML = `<span>다음 문제 풀기 (Enter)</span> <span>→</span>`;
        this.dom.btnNextQuestion.className = "w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm md:text-base flex items-center justify-center gap-2 shadow-lg transition";
      }
    } else {
      this.dom.feedbackBox.classList.add('hidden');
      this.dom.btnNextQuestion.classList.add('hidden');
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
      if (this.history.wrongIds) {
        this.history.wrongIds = this.history.wrongIds.filter(id => id !== currentQ.id);
      }
    } else {
      if (!this.history.wrongIds) this.history.wrongIds = [];
      if (!this.history.wrongIds.includes(currentQ.id)) {
        this.history.wrongIds.push(currentQ.id);
      }
    }

    this.saveUserData();
    this.renderQuestion();

    setTimeout(() => {
      this.dom.feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
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
      let dotColor = "bg-slate-200 text-slate-500";

      if (answered) {
        const selIdx = this.selectedAnswers[q.id];
        const isRight = q.shuffledOptions[selIdx]?.isCorrect;
        dotColor = isRight ? "bg-emerald-500 text-white font-bold" : "bg-rose-500 text-white font-bold";
      }

      const ring = isCurrent ? "ring-2 ring-indigo-600 ring-offset-2 scale-110 font-bold" : "";

      return `
        <div class="w-7 h-7 rounded-lg text-xs flex items-center justify-center transition ${dotColor} ${ring}">
          ${idx + 1}
        </div>
      `;
    }).join('');

    this.dom.quickDots.innerHTML = dotsHtml;
  }

  showFinalResult() {
    this.dom.quizView.classList.add('hidden');
    this.dom.resultView.classList.remove('hidden');

    let correctCount = 0;
    this.currentQuestions.forEach(q => {
      const selIdx = this.selectedAnswers[q.id];
      if (q.shuffledOptions[selIdx]?.isCorrect) correctCount++;
    });

    const total = this.currentQuestions.length;
    const rate = Math.round((correctCount / total) * 100);

    document.getElementById('final-score').textContent = `${correctCount} / ${total}`;
    document.getElementById('final-rate').textContent = `${rate}%`;

    let message = "🎉 축하합니다! 완벽하게 마스터하고 계시네요!";
    if (rate < 60) {
      message = "💪 괜찮아요! 단서와 공식을 복습하며 오답노트를 다시 풀어보세요.";
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

    document.getElementById('cheat-content').innerHTML = `
      <div class="space-y-2">
        <h4 class="font-extrabold text-slate-900 text-sm mb-2">${data.title}</h4>
        ${rulesHtml}
      </div>
    `;
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
