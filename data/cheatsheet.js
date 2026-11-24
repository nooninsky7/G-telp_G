// G-TELP 전 문법 파트 핵심 공식 & 치트시트
const CHEATSHEET = {
  tense: {
    title: "1. 시제 (Tense) - 6대 진행형",
    rules: [
      { name: "시제 절대 공식 1", desc: "G-TELP 시제 문제는 100% '-ing'(진행형)만 정답!" },
      { name: "시제 절대 공식 2", desc: "과진, 현진, 미진, 과완진, 현완진, 미완진 각 1문제씩 총 6문제 출제!" },
      { name: "과거진행 (was/were -ing)", desc: "when + 과거동사, while + 과거진행, 과거 특정 시점" },
      { name: "현재진행 (am/is/are -ing)", desc: "now, right now, at the moment, currently (기간 없음)" },
      { name: "미래진행 (will be -ing)", desc: "tomorrow, next ~, 시간부사절(when/as soon as) 현재동사" },
      { name: "과거완료진행 (had been -ing)", desc: "before/until 과거시점 + for/since 기간" },
      { name: "현재완료진행 (have/has been -ing)", desc: "now + for 기간, for + 기간(현재문맥), since + 과거시점" },
      { name: "미래완료진행 (will have been -ing)", desc: "by 미래시점 + for 기간, by the time 현재 + for 기간" }
    ],
    traps: [
      { name: "🚨 시제 오답-POINT 1", desc: "for가 나왔다고 해서 무조건 완료진행 시제가 정답은 아니다! (문맥상 단순 과거 기간인지, 미래 시점 힌트가 함께 있는지 반드시 확인)" },
      { name: "🚨 시제 오답-POINT 2", desc: "since 뒤에 과거시점(since 2018, since he joined 등)이 나오는 경우 주절은 '현재완료진행형(has/have been -ing)'이 정답!" }
    ]
  },
  gerund_infinitive: {
    title: "2. 준동사 (동명사 vs to부정사)",
    rules: [
      { 
        name: "🎯 켈리쌤 꿀팁 1: 3:3 법칙", 
        desc: "G-TELP 준동사는 총 5~6문제가 나오며, 동명사(-ing) 3문제, to부정사(to V) 3문제가 균형 출제됩니다! 4문제를 확실히 풀면 나머지 2문제는 개수 세기로 맞출 수 있습니다." 
      },
      { 
        name: "동명사(-ing)만 취하는 필수 동사 (암기표 3 핵심)", 
        desc: "enjoy, finish, avoid, mind, consider, postpone, put off, delay, suggest, recommend, deny, give up, admit, quit, practice, keep, risk, resist" 
      },
      { 
        name: "to부정사(to V)만 취하는 필수 동사 (암기표 4 핵심)", 
        desc: "want, hope, wish, decide, plan, promise, agree, refuse, afford, expect, manage, offer, hesitate, choose, fail, tend, would like" 
      },
      { 
        name: "🚨 함정 주의: allow, advise, encourage, recommend, require", 
        desc: "1) 동사 바로 뒤 목적어: suggest / recommend / avoid + -ing (동명사)\n2) 목적어 + 목적격보어: allow A to V, advise A to V, encourage A to V, expect A to V (to부정사)" 
      },
      { 
        name: "📌 시험에 딱 나오는 관용표현 TOP 5 (나머진 버려도 됨!)", 
        desc: "1. prevent [keep, stop, prohibit] A from ~ing (A가 ~하는 것을 막다 - 최빈출!)\n2. look forward to ~ing (~을 고대하다 - to가 전치사)\n3. cannot help ~ing (~하지 않을 수 없다)\n4. spend + 시간/돈 + ~ing (~하는 데 시간/돈을 쓰다)\n5. be busy ~ing (~하느라 바쁘다)" 
      },
      { 
        name: "기타 위치 공식", 
        desc: "1) 전치사 뒤 빈칸: 전치사 + -ing (동명사)\n2) 주어 자리 빈칸: 동명사 (~ing is/was...)\n3) 목적 (~하기 위하여): to부정사 (to V)\n4) 가주어-진주어: It is 형용사 + to V" 
      }
    ],
    traps: [
      { name: "🚨 준동사 오답-POINT 1 (최다 빈출 낚시!)", desc: "allow, advise, encourage, recommend, require는 뒤 구조를 반드시 확인!\n1) 동사 바로 뒤 빈칸: recommend / advise + ~ing (동명사 목적어)\n2) 목적어(A)가 끼어있을 때: advise / encourage A + to V (to부정사 목적격보어)" },
      { name: "🚨 준동사 오답-POINT 2", desc: "be caught 뒤에는 동명사가 온다! (be caught ~ing: ~하다가 발각되다/들키다)" },
      { name: "🚨 켈리쌤의 선지 소거 찐팁", desc: "1) 보기에 -ing와 to V가 보이면 준동사 문제 -> 동사원형, p.p. 보기는 1초 만에 탈락 소거!\n2) 동명사 3개, to부정사 2~3개 균형 출제되므로, 헷갈리는 문제는 앞서 푼 문제들의 개수 세기(3:3 법칙)로 정답 맞추기!" }
    ]
  },
  subjunctive: {
    title: "3. 가정법 (과거 & 과거완료)",
    rules: [
      { name: "가정법 과거 공식", desc: "If + S + 과거동사(were), S + would / could / might + 동사원형" },
      { name: "가정법 과거완료 공식", desc: "If + S + had p.p., S + would / could / might + have p.p." },
      { name: "혼합가정법", desc: "If S + had p.p. (과거), S + would/could/might + 동사원형 + now / today (현재)" },
      { name: "If 도치 생략", desc: "Had + S + p.p., S + would have p.p. (If가 생략되면 Had가 문두로 도치)" }
    ],
    traps: [
      { name: "🚨 가정법 오답-POINT 1 (도치 구문)", desc: "had + 주어 + pp = If + 주어 + had pp (If 생략 도치 구문! 주절은 would/could/might + have pp)" },
      { name: "🚨 가정법 오답-POINT 2 (출제 1순위 함정!)", desc: "if + 주어 + had + 명사(time, money 등) -> had 뒤에 pp가 없으면 조동사가 아니라 일반동사 '가지다'의 과거형이므로 '가정법 과거'! 주절은 would + 동사원형!" },
      { name: "🚨 가정법 오답-POINT 3 (조동사 과거)", desc: "if + 주어 + could / did / were -> could/did도 과거동사이므로 가정법 과거! 주절은 would + 동사원형!" },
      { name: "🚨 가정법 오답-POINT 4 (조건문 함정)", desc: "if + 주어 + 현재시제 -> 가정법 문제 아님! (단순 시간·조건 부사절 -> 주절은 will/can 등 미래)" },
      { name: "🚨 가정법 오답-POINT 5 (명사절 if)", desc: "동사 뒤 if가 '~인지 아닌지'로 해석될 경우 -> 가정법 문제 아님! (명사절 목적어)" },
      { name: "🚨 가정법 오답-POINT 6 (혼합가정법)", desc: "if 주어 had pp, 주어 would/could/might + 동사원형 + right (now), today (과거에 그랬다면 지금 ~할 텐데)" }
    ]
  },
  should_omission: {
    title: "4. Should 생략 (주장·제안·요구·명령)",
    rules: [
      { name: "동사원형 절대 공식", desc: "주절에 주장/제안/요구/명령 동사 + that S + (should) 동사원형!" },
      { name: "주요 동사", desc: "suggest, insist, recommend, demand, request, require, order, propose" },
      { name: "주요 형용사 (이성적 판단)", desc: "It is necessary / essential / important / imperative + that S + (should) 동사원형" }
    ]
  },
  relative: {
    title: "5. 관계사 (관계대명사 & 관계부사)",
    rules: [
      { name: "🔍 관계사 문제 식별법", desc: "선택지(A, B, C, D)가 who, which, that, where, when 등 관계사 절로 시작하면 100% 관계사 문제!" },
      { name: "G-POINT 21 (사람 주격)", desc: "사람 선행사 + 뒤에 주어 없음 ➔ ① who ② that" },
      { name: "G-POINT 22 (사람 목적격)", desc: "사람 선행사 + 뒤에 목적어 없음 ➔ ① whom ② who ③ that" },
      { name: "G-POINT 23 (사물 주격/목적격)", desc: "사물 선행사 + 뒤에 주어나 목적어 없음 ➔ ① which ② that" },
      { name: "G-POINT 24 (소유격 whose)", desc: "선행사 존재 + 뒤 명사와 소유 관계(~의) + 뒷문장 완전 ➔ whose" },
      { name: "G-POINT 25 (콤마 뒤 계속적용법)", desc: ",(콤마) 뒤 빈칸 ➔ that은 무조건 오답 소거! (사물이면 which, 사람이면 who)" },
      { name: "G-POINT 26 (관계부사 where / when)", desc: "선행사가 장소나 때 + 뒷문장이 완전한 절 ➔ 관계부사 where / when" }
    ],
    traps: [
      { name: "🚨 켈리쌤의 관계사 찐팁 1 (콤마 뒤 that 소거)", desc: ",(콤마) 뒤에 빈칸이 있는 경우 보기에서 'that'으로 시작하는 선지는 1초 만에 소거!" },
      { name: "🚨 켈리쌤의 관계사 찐팁 2 (선행사 성격 파악)", desc: "빈칸 바로 앞 선행사가 '사람'인지 '사물'인지 파악하면 문제의 절반은 해결!" },
      { name: "🚨 지텔프 최고 빈출 오답 함정 1: 절 내 대명사 중복 오답!", desc: "보기 중에 관계대명사 절 속에 선행사를 가리키는 대명사(it, they, he, him)를 불필요하게 중복으로 넣어놓은 선지는 100% 오답!\n(예: which it hinders X ➔ which hinders O / who they were looking X ➔ who were looking O)" },
      { name: "🚨 지텔프 최고 빈출 오답 함정 2: 관계대명사 vs 관계부사 뒷문장 구조", desc: "선행사가 장소(countries, stadium)나 시간(day)이어도, 뒷문장에 주어나 목적어가 빠진 '불완전한 절'이라면 관계부사(where/when)가 아니라 관계대명사(which/that)가 정답!" },
      { name: "🚨 필수 출제 관용구: those who + 복수동사", desc: "'those who ~'는 '~하는 사람들'을 뜻하는 대명사 구문으로 매 시험 빈출 출제!" }
    ]
  },
  modal: {
    title: "6. 조동사 (Modal Verbs)",
    rules: [
      { name: "해석 중심 문제", desc: "문맥의 의미에 따라 가장 알맞은 조동사 선택 (조동사 뒤는 동사원형)" },
      { name: "의무 / 필요", desc: "must, should, have to (~해야 한다)" },
      { name: "가능 / 능력", desc: "can, could, be able to (~할 수 있다)" },
      { name: "추측 / 가능성", desc: "may, might (~일지도 모른다), must (~임에 틀림없다)" }
    ]
  },
  conjunction: {
    title: "7. 연결어 (접속사 vs 전치사 vs 접속부사)",
    rules: [
      { name: "접속사 vs 전치사 구분", desc: "양보: although/even though (+ 절) vs despite/in spite of (+ 명사구)\n이유: because/since (+ 절) vs because of/due to (+ 명사구)" },
      { name: "접속부사 (문장 부사)", desc: "however (그러나), therefore (그러므로), furthermore (게다가), otherwise (그렇지 않으면)" },
      { name: "논리적 연결", desc: "앞뒤 문장의 인과, 역접, 나열 관계를 정확히 해석하여 결정" }
    ]
  }
};
