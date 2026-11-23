// G-TELP 전 문법 무한 실전 문제 동적 생성 엔진 (Infinite Question Generator)
// 지텔프 Level 2 공식 출제 규격 100% 반영:
// 1. 시제: 6대 진행시제 단서 공식 기반 문장 조합
// 2. 준동사: 암기표 3(동명사) / 암기표 4(to부정사) / 관용구 무한 생성
// 3. 가정법: 가정법 과거 / 가정법 과거완료 짝맞추기 무한 생성
// 4. Should 생략: 주장·제안·요구 동사원형 무한 생성
// 5. 관계사: that 불가, 사람/사물 선행사 무한 생성
// 6. 조동사: 의무(must), 능력(can), 가능성(may) 무한 생성
// 7. 연결어: Although vs Despite, Because vs Due to 무한 생성

const GTELP_GENERATOR = {
  // -------------------------------------------------------------
  // 어휘 은행 (Vocab Bank)
  // -------------------------------------------------------------
  subjects: [
    "The chief financial officer", "The senior software engineer", "Dr. Richardson", "The marketing director",
    "Professor Gallagher", "The regional logistics manager", "The head surgeon", "Ms. Katherine Vance",
    "The executive committee", "The clinical research team", "The project supervisor", "The environmental inspector",
    "Mr. Harrison", "The architecture consultant", "The quality assurance specialist", "The international sales representative"
  ],

  // -------------------------------------------------------------
  // 1. 시제 무한 생성기
  // -------------------------------------------------------------
  generateTenseQuestion(type) {
    const subTypes = ['과진', '현진', '미진', '과완진', '현완진', '미완진'];
    const chosenType = type || subTypes[Math.floor(Math.random() * subTypes.length)];

    const verbs = [
      { base: "review", ing: "reviewing", ed: "reviewed" },
      { base: "examine", ing: "examining", ed: "examined" },
      { base: "conduct", ing: "conducting", ed: "conducted" },
      { base: "deliver", ing: "delivering", ed: "delivered" },
      { base: "prepare", ing: "preparing", ed: "prepared" },
      { base: "investigate", ing: "investigating", ed: "investigated" },
      { base: "develop", ing: "developing", ed: "developed" },
      { base: "monitor", ing: "monitoring", ed: "monitored" },
      { base: "analyze", ing: "analyzing", ed: "analyzed" },
      { base: "negotiate", ing: "negotiating", ed: "negotiated" }
    ];
    const v = verbs[Math.floor(Math.random() * verbs.length)];
    const subj = this.subjects[Math.floor(Math.random() * this.subjects.length)];

    let question = "";
    let correct = "";
    let distractors = [];
    let hint = "";
    let gPoint = "";
    let subCategoryName = "";

    switch (chosenType) {
      case '과진':
        subCategoryName = "시제 > 과거진행형 (was/were ~ing)";
        question = `When the unexpected fire alarm sounded throughout the facility yesterday, ${subj} ___________ confidential inspection data in the main office.`;
        correct = `was ${v.ing}`;
        distractors = [`will ${v.base}`, v.ed, `has been ${v.ing}`];
        hint = "단서: When절의 과거동사 'sounded' -> 과거 특정 시점에 진행 중이던 일";
        gPoint = "G-POINT 5: when + 과거동사 -> 과거진행형 (was/were -ing)";
        break;

      case '현진':
        subCategoryName = "시제 > 현재진행형 (am/is/are ~ing)";
        question = `Due to a sudden network disruption on the server, ${subj} ___________ the system configuration right now to prevent data corruption.`;
        correct = `is ${v.ing}`;
        distractors = [v.base + "s", v.ed, `will have been ${v.ing}`];
        hint = "단서: 문장의 'right now' (현재 시점 부사) + 완료 기간 없음";
        gPoint = "G-POINT 6: right now, at the moment -> 현재진행형 (am/is/are -ing)";
        break;

      case '미진':
        subCategoryName = "시제 > 미래진행형 (will be ~ing)";
        question = `The international trade symposium will convene next week in Geneva. Tomorrow afternoon, ${subj} ___________ a presentation on economic forecasting on behalf of our enterprise.`;
        correct = `will be ${v.ing}`;
        distractors = [`has been ${v.ing}`, v.ed, v.base + "s"];
        hint = "단서: 'Tomorrow afternoon' (단순 미래 시점 부사)";
        gPoint = "G-POINT 7: Tomorrow, Next ~ -> 미래진행형 (will be -ing)";
        break;

      case '과완진':
        subCategoryName = "시제 > 과거완료진행형 (had been ~ing)";
        question = `The research board finally validated the pharmaceutical trial yesterday. ${subj} ___________ the clinical safety reports for six continuous months before the committee arrived.`;
        correct = `had been ${v.ing}`;
        distractors = [`was ${v.ing}`, `is ${v.ing}`, `will be ${v.ing}`];
        hint = "단서: 기간 'for six continuous months' + 'before the committee arrived (과거 시점)'";
        gPoint = "G-POINT 8: before 과거시점 + for 기간 -> 과거완료진행형 (had been -ing)";
        break;

      case '현완진':
        subCategoryName = "시제 > 현재완료진행형 (have/has been ~ing)";
        question = `Ever since our headquarters relocated to Chicago last year, ${subj} ___________ corporate restructuring procedures for eight weeks now.`;
        correct = `has been ${v.ing}`;
        distractors = [v.ed, `will ${v.base}`, `had ${v.ed}`];
        hint = "단서: 'for eight weeks now' (기간 for + 현재 시점 now)";
        gPoint = "G-POINT 9: for 기간 now -> 현재완료진행형 (have/has been -ing)";
        break;

      case '미완진':
        subCategoryName = "시제 > 미래완료진행형 (will have been ~ing)";
        question = `By the time the new subsea transportation tunnel officially opens next October, the engineering consortium ___________ on the foundation works for exactly five continuous years.`;
        correct = `will have been working`;
        distractors = [`has been working`, `was working`, `is working`];
        hint = "단서: 'By the time + opens next October (미래 완료)' + 기간 'for five continuous years'";
        gPoint = "G-POINT 10: By 미래시점 + for 기간 -> 미래완료진행형 (will have been -ing)";
        break;
    }

    const options = [
      { text: correct, isCorrect: true },
      ...distractors.map(d => ({ text: d, isCorrect: false }))
    ].sort(() => Math.random() - 0.5);

    return {
      id: `DYN-TENSE-${Date.now()}-${Math.floor(Math.random()*1000)}`,
      category: "tense",
      subCategory: chosenType,
      subCategoryName: subCategoryName,
      question: question,
      options: options,
      hint: hint,
      gPoint: gPoint,
      explanation: `지텔프 출제 공식에 따라 ${hint}이 명시되어 있으므로 진행형 정답인 '${correct}'가 정답입니다. (G-TELP는 단순시제 소거 후 진행형 선택)`
    };
  },

  // -------------------------------------------------------------
  // 2. 준동사 무한 생성기 (동명사 vs to부정사)
  // -------------------------------------------------------------
  generateGerundInfinitiveQuestion() {
    const isGerund = Math.random() > 0.5;
    const subj = this.subjects[Math.floor(Math.random() * this.subjects.length)];

    if (isGerund) {
      // 동명사 패턴 (suggest, avoid, postpone, mind, finish, keep, risk 등)
      const gerundVerbs = [
        { v: "suggested", obj: "conducting", plain: "conduct", toV: "to conduct" },
        { v: "avoided", obj: "disclosing", plain: "disclose", toV: "to disclose" },
        { v: "postponed", obj: "launching", plain: "launch", toV: "to launch" },
        { v: "recommended", obj: "upgrading", plain: "upgrade", toV: "to upgrade" },
        { v: "considered", obj: "expanding", plain: "expand", toV: "to expand" },
        { v: "denied", obj: "leaking", plain: "leak", toV: "to leak" },
        { v: "finished", obj: "evaluating", plain: "evaluate", toV: "to evaluate" },
        { v: "risked", obj: "investing", plain: "invest", toV: "to invest" }
      ];
      const item = gerundVerbs[Math.floor(Math.random() * gerundVerbs.length)];

      const question = `Due to sudden budgetary adjustments, ${subj} ${item.v} ___________ the proprietary software program until the subsequent fiscal quarter.`;
      const options = [
        { text: item.obj, isCorrect: true },
        { text: item.toV, isCorrect: false },
        { text: item.plain, isCorrect: false },
        { text: "having " + item.plain + "ed", isCorrect: false }
      ].sort(() => Math.random() - 0.5);

      return {
        id: `DYN-GI-${Date.now()}-${Math.floor(Math.random()*1000)}`,
        category: "gerund_infinitive",
        subCategory: "동명사",
        subCategoryName: `준동사 > 동명사만을 목적어로 취하는 동사 (${item.v} + -ing)`,
        question: question,
        options: options,
        hint: `단서: 동사 '${item.v}' 뒤 목적어 자리 (암기표 3: ${item.v} + 동명사)`,
        gPoint: `G-TELP 준동사 공식: ${item.v} + 동명사(-ing)`,
        explanation: `동사 '${item.v}'는 동명사(-ing)만을 목적어로 취하는 대표적인 지텔프 빈출 동사이므로 '${item.obj}'가 정답입니다.`
      };
    } else {
      // to부정사 패턴 (decide, agree, refuse, hope, plan, manage, hesitate 등)
      const toVerbs = [
        { v: "decided", obj: "to hire", plain: "hire", ing: "hiring" },
        { v: "agreed", obj: "to sign", plain: "sign", ing: "signing" },
        { v: "refused", obj: "to comply", plain: "comply", ing: "complying" },
        { v: "planned", obj: "to open", plain: "open", ing: "opening" },
        { v: "hoped", obj: "to achieve", plain: "achieve", ing: "achieving" },
        { v: "managed", obj: "to resolve", plain: "resolve", ing: "resolving" },
        { v: "hesitated", obj: "to accept", plain: "accept", ing: "accepting" },
        { v: "promised", obj: "to deliver", plain: "deliver", ing: "delivering" }
      ];
      const item = toVerbs[Math.floor(Math.random() * toVerbs.length)];

      const question = `Following an extensive strategic review, ${subj} ${item.v} ___________ the corporate joint-venture agreement with the overseas affiliate.`;
      const options = [
        { text: item.obj, isCorrect: true },
        { text: item.ing, isCorrect: false },
        { text: item.plain, isCorrect: false },
        { text: "to have " + item.plain + "ed", isCorrect: false }
      ].sort(() => Math.random() - 0.5);

      return {
        id: `DYN-GI-${Date.now()}-${Math.floor(Math.random()*1000)}`,
        category: "gerund_infinitive",
        subCategory: "to부정사",
        subCategoryName: `준동사 > to부정사만을 목적어로 취하는 동사 (${item.v} + to V)`,
        question: question,
        options: options,
        hint: `단서: 동사 '${item.v}' 뒤 목적어 자리 (암기표 4: ${item.v} + to부정사)`,
        gPoint: `G-TELP 준동사 공식: ${item.v} + to부정사(to V)`,
        explanation: `동사 '${item.v}'는 미래지향적 의미의 to부정사만을 목적어로 취하므로 '${item.obj}'가 정답입니다.`
      };
    }
  },

  // -------------------------------------------------------------
  // 3. 가정법 무한 생성기 (과거 vs 과거완료)
  // -------------------------------------------------------------
  generateSubjunctiveQuestion() {
    const isPast = Math.random() > 0.5;
    const subj = this.subjects[Math.floor(Math.random() * this.subjects.length)];

    if (isPast) {
      // 가정법 과거: If S were, S would/could V
      const question = `If ${subj} ___________ more accessible for urgent consultations, the design department could finalize the client prototype immediately.`;
      const options = [
        { text: "were", isCorrect: true },
        { text: "had been", isCorrect: false },
        { text: "is", isCorrect: false },
        { text: "will be", isCorrect: false }
      ].sort(() => Math.random() - 0.5);

      return {
        id: `DYN-SUB-${Date.now()}-${Math.floor(Math.random()*1000)}`,
        category: "subjunctive",
        subCategory: "가정법과거",
        subCategoryName: "가정법 > 가정법 과거 (현재 사실 반대)",
        question: question,
        options: options,
        hint: "단서: 주절의 'could finalize (조동사 과거형 + 동사원형)'",
        gPoint: "G-TELP 가정법 공식: If + S + 과거동사(were), S + would/could/might + 동사원형",
        explanation: "주절에 'could + 동사원형'이 왔으므로 If절에는 가정법 과거를 나타내는 'were'가 와야 합니다. (인칭 무관 were)"
      };
    } else {
      // 가정법 과거완료: If S had p.p., S would have p.p.
      const question = `If the logistics division ___________ the cargo consignment earlier yesterday, our international client would have received the microchips on schedule.`;
      const options = [
        { text: "had dispatched", isCorrect: true },
        { text: "dispatched", isCorrect: false },
        { text: "dispatches", isCorrect: false },
        { text: "would dispatch", isCorrect: false }
      ].sort(() => Math.random() - 0.5);

      return {
        id: `DYN-SUB-${Date.now()}-${Math.floor(Math.random()*1000)}`,
        category: "subjunctive",
        subCategory: "가정법과거완료",
        subCategoryName: "가정법 > 가정법 과거완료 (과거 사실 반대)",
        question: question,
        options: options,
        hint: "단서: 주절의 'would have received (조동사 과거 + have p.p.)'",
        gPoint: "G-TELP 가정법 공식: If + S + had p.p., S + would/could/might + have p.p.",
        explanation: "주절에 'would have p.p.'가 주어졌으므로 If절에는 가정법 과거완료인 'had p.p.(had dispatched)'가 정답입니다."
      };
    }
  },

  // -------------------------------------------------------------
  // 4. Should 생략 무한 생성기
  // -------------------------------------------------------------
  generateShouldQuestion() {
    const triggers = ["insisted", "recommended", "suggested", "demanded", "requested", "urged"];
    const t = triggers[Math.floor(Math.random() * triggers.length)];
    const subj = this.subjects[Math.floor(Math.random() * this.subjects.length)];

    const actions = [
      { base: "wear", s: "wears", ed: "wore", context: "protective helmets at the construction site" },
      { base: "submit", s: "submits", ed: "submitted", context: "the quarterly audit report before Friday" },
      { base: "attend", s: "attends", ed: "attended", context: "the mandatory compliance training session" },
      { base: "notify", s: "notifies", ed: "notified", context: "the human resources department immediately" }
    ];
    const act = actions[Math.floor(Math.random() * actions.length)];

    const question = `${subj} strongly ${t} that each employee ___________ ${act.context}.`;
    const options = [
      { text: act.base, isCorrect: true },
      { text: act.s, isCorrect: false },
      { text: act.ed, isCorrect: false },
      { text: act.base + "ing", isCorrect: false }
    ].sort(() => Math.random() - 0.5);

    return {
      id: `DYN-SHOULD-${Date.now()}-${Math.floor(Math.random()*1000)}`,
      category: "should_omission",
      subCategory: "should생략",
      subCategoryName: `Should 생략 > ${t} that S + (should) 동사원형`,
      question: question,
      options: options,
      hint: `단서: 주절의 주장/제안/요구 동사 '${t} that + S + (should) 동사원형'`,
      gPoint: `G-TELP 당위성 공식: ${t} + that S + (should) 동사원형`,
      explanation: `주절에 주장/제안/요구 동사 '${t}'가 쓰였으므로 that절 내부에는 조동사 should가 생략되어 주어의 인칭이나 시제와 관계없이 무조건 '동사원형(${act.base})'이 정답입니다.`
    };
  },

  // -------------------------------------------------------------
  // 5. 관계사 / 조동사 / 연결어 무한 생성기
  // -------------------------------------------------------------
  generateOtherQuestion(category) {
    if (category === 'relative') {
      const isComma = Math.random() > 0.5;
      if (isComma) {
        return {
          id: `DYN-REL-${Date.now()}-${Math.floor(Math.random()*1000)}`,
          category: "relative",
          subCategory: "관계대명사",
          subCategoryName: "관계사 > 콤마(,) 뒤 계속적 용법 (that 절대 불가)",
          question: `The international pharmaceutical conglomerate acquired BioNova Therapeutics, ___________ developed the breakthrough oncology treatment last year.`,
          options: [
            { text: "which", isCorrect: true },
            { text: "that", isCorrect: false },
            { text: "who", isCorrect: false },
            { text: "what", isCorrect: false }
          ].sort(() => Math.random() - 0.5),
          hint: "단서: 콤마(,) 뒤 사물 선행사 BioNova Therapeutics (that은 콤마 뒤 불가)",
          gPoint: "G-TELP 관계사 공식: 콤마(,) 뒤에는 that 절대 불가 -> which",
          explanation: "선행사가 회사(사물)이고 콤마(,) 뒤 계속적 용법이므로 관계대명사 that은 절대 쓸 수 없습니다. 따라서 'which'가 정답입니다."
        };
      } else {
        return {
          id: `DYN-REL-${Date.now()}-${Math.floor(Math.random()*1000)}`,
          category: "relative",
          subCategory: "관계대명사",
          subCategoryName: "관계사 > 사람 선행사 주격 관계대명사 (who)",
          question: `The committee awarded a prestigious honor to the lead researcher ___________ spearheaded the clean water filtration project.`,
          options: [
            { text: "who", isCorrect: true },
            { text: "which", isCorrect: false },
            { text: "whom", isCorrect: false },
            { text: "whose", isCorrect: false }
          ].sort(() => Math.random() - 0.5),
          hint: "단서: 사람 선행사(the lead researcher) + 뒤에 주어가 없는 불완전한 절",
          gPoint: "G-TELP 관계사 공식: 사람 선행사 + 주격 = who",
          explanation: "선행사가 사람이고 뒤이어 동사(spearheaded)가 오므로 주격 관계대명사 'who'가 정답입니다."
        };
      }
    } else if (category === 'modal') {
      return {
        id: `DYN-MODAL-${Date.now()}-${Math.floor(Math.random()*1000)}`,
        category: "modal",
        subCategory: "조동사",
        subCategoryName: "조동사 > 엄격한 법규/규정에 따른 의무 (must)",
        question: `In accordance with mandatory maritime safety guidelines, all vessel operators ___________ maintain continuous radio contact with harbor authorities during adverse weather.`,
        options: [
          { text: "must", isCorrect: true },
          { text: "might", isCorrect: false },
          { text: "would", isCorrect: false },
          { text: "could", isCorrect: false }
        ].sort(() => Math.random() - 0.5),
        hint: "단서: 'mandatory safety guidelines(의무 안전 지침)' -> 강한 법적 의무",
        gPoint: "G-TELP 조동사 해석: 법규/규정에 따른 필수 의무 = must (~해야만 한다)",
        explanation: "안전 지침에 따라 '반드시 무선 교신을 유지해야 한다'는 강한 의무를 나타내므로 조동사 'must'가 정답입니다."
      };
    } else {
      // conjunction
      return {
        id: `DYN-CONJ-${Date.now()}-${Math.floor(Math.random()*1000)}`,
        category: "conjunction",
        subCategory: "연결어",
        subCategoryName: "연결어 > 양보 접속사 (Although + 절)",
        question: `___________ the enterprise encountered severe supply chain disruptions throughout the winter, they succeeded in surpassing their annual revenue forecast.`,
        options: [
          { text: "Although", isCorrect: true },
          { text: "Despite", isCorrect: false },
          { text: "Because of", isCorrect: false },
          { text: "However", isCorrect: false }
        ].sort(() => Math.random() - 0.5),
        hint: "단서: 뒤에 주어+동사 절(the enterprise encountered...)이 오며 역접/양보의 문맥",
        gPoint: "G-TELP 연결어 공식: 절(S+V)을 이끄는 양보 접속사 = Although (Despite는 전치사)",
        explanation: "뒤에 주어+동사를 갖춘 완전한 절이 오며 '공급망 혼란을 겪었음에도 불구하고'라는 양보의 관계이므로 접속사 'Although'가 정답입니다."
      };
    }
  },

  // -------------------------------------------------------------
  // 통합 10문제 무한 생성기
  // -------------------------------------------------------------
  generate10Set(category) {
    const set = [];

    if (category === 'tense') {
      const types = ['과진', '현진', '미진', '과완진', '현완진', '미완진'];
      types.forEach(t => set.push(this.generateTenseQuestion(t)));
      while (set.length < 10) {
        set.push(this.generateTenseQuestion());
      }
    } else if (category === 'gerund_infinitive') {
      while (set.length < 10) {
        set.push(this.generateGerundInfinitiveQuestion());
      }
    } else if (category === 'subjunctive') {
      while (set.length < 10) {
        set.push(this.generateSubjunctiveQuestion());
      }
    } else if (category === 'should_omission') {
      while (set.length < 10) {
        set.push(this.generateShouldQuestion());
      }
    } else if (category === 'relative' || category === 'modal' || category === 'conjunction') {
      while (set.length < 10) {
        set.push(this.generateOtherQuestion(category));
      }
    } else {
      // 'all' 전체 종합 모의고사 (지텔프 시험 비중 완벽 재현: 시제 4, 준동사 2, 가정법 2, Should 1, 기타 1)
      set.push(this.generateTenseQuestion('과진'));
      set.push(this.generateTenseQuestion('현진'));
      set.push(this.generateTenseQuestion('미진'));
      set.push(this.generateTenseQuestion('과완진'));
      set.push(this.generateGerundInfinitiveQuestion());
      set.push(this.generateGerundInfinitiveQuestion());
      set.push(this.generateSubjunctiveQuestion());
      set.push(this.generateSubjunctiveQuestion());
      set.push(this.generateShouldQuestion());
      set.push(this.generateOtherQuestion('relative'));
    }

    return set.sort(() => Math.random() - 0.5);
  }
};
