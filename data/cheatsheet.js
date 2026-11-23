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
    ]
  },
  subjunctive: {
    title: "3. 가정법 (과거 & 과거완료)",
    rules: [
      { name: "가정법 과거 공식", desc: "If + S + 과거동사(were), S + would / could / might + 동사원형" },
      { name: "가정법 과거완료 공식", desc: "If + S + had p.p., S + would / could / might + have p.p." },
      { name: "혼합가정법", desc: "If S + had p.p. (과거), S + would/could/might + 동사원형 + now (현재)" },
      { name: "If 도치 생략", desc: "Had + S + p.p., S + would have p.p. (If가 생략되면 Had가 문두로)" }
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
      { name: "선행사 구분", desc: "사람 선행사 -> who / whom, 사물/동물 선행사 -> which" },
      { name: "that 절대 불가 2가지", desc: "1) 콤마 뒤 (, that X), 2) 전치사 바로 뒤 (in that X)" },
      { name: "관계부사", desc: "완전한 문장 뒤따름: where(장소), when(시간), why(이유), how(방법)" },
      { name: "소유격 관계대명사 whose", desc: "선행사의 소유격 역할 + 뒤에 무관사 명사가 옴" }
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
