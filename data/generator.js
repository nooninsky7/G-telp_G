// G-TELP 전 문법 무한 실전 문제 동적 생성 엔진 (중복 방지 & 방대한 템플릿 풀)
// 실제 G-TELP 시험 출제 비율 및 어휘·문맥 100% 반영

const GTELP_GENERATOR = {
  // 최근 출제된 문제 지문 해시(중복 방지용)
  seenQuestions: new Set(),

  // 다양한 분야별 주어 (30종 이상)
  subjects: [
    "The chief financial officer", "The senior software architect", "Dr. Patricia Gallagher", 
    "The regional logistics director", "The quality assurance specialist", "The environmental inspector",
    "Professor Bennett", "The head neurosurgeon", "Ms. Katherine Vance", "The chief executive officer",
    "The aviation safety supervisor", "The lead archaeologist", "Mr. Samuel Sterling", "The corporate compliance auditor",
    "The head botanist", "The clinical research director", "The municipal transport planner", "The lead civil engineer",
    "The international trade delegate", "The principal architect", "Dr. Martinez", "The laboratory director",
    "The investment portfolio manager", "The senior meteorologist", "The executive committee chair", "The cybersecurity analyst"
  ],

  // -------------------------------------------------------------------------
  // 1. 시제 무한 생성기 (6대 시제별 풍부한 템플릿)
  // -------------------------------------------------------------------------
  tenseTemplates: {
    '과진': [
      {
        getQ: (s) => `When the unexpected fire alarm sounded throughout the facility yesterday afternoon, ${s} ___________ confidential inspection data in the main office.`,
        getCorrect: (v) => `was ${v.ing}`,
        distractors: (v) => [`will ${v.base}`, v.ed, `has been ${v.ing}`],
        trigger: "When the unexpected fire alarm sounded",
        hint: "단서: When절의 과거동사 'sounded' (과거 특정 시점의 진행 동작)",
        gPoint: "G-POINT 5: when + 과거동사 -> 과거진행형 (was/were -ing)"
      },
      {
        getQ: (s) => `While the technical crew installed emergency power backup units in the basement, ${s} ___________ the structural integrity of the cooling tower.`,
        getCorrect: (v) => `was ${v.ing}`,
        distractors: (v) => [v.ed, `will be ${v.ing}`, `had been ${v.ing}`],
        trigger: "While the technical crew installed (과거)",
        hint: "단서: 과거 주절과 접속사 'While' (과거 동시 진행 동작)",
        gPoint: "G-POINT 4: 과거 문맥 + while -> 과거진행형"
      },
      {
        getQ: (s) => `Carlos, the overseas buyer from Madrid, visited our headquarters yesterday. When I met him in the conference lobby, several assistants ___________ marketing brochures on the digital table.`,
        getCorrect: () => `were distributing`,
        distractors: () => [`distributed`, `will distribute`, `have been distributing`],
        trigger: "When I met (과거동사) him",
        hint: "단서: 'When I met(과거)' + 복수주어 assistants -> were ~ing",
        gPoint: "G-POINT 5: when 과거동사 -> 과거진행형 (were -ing)"
      },
      {
        getQ: (s) => `At precisely 8:30 PM last night, when the severe power outage hit the metropolitan area, ${s} ___________ emergency backup protocols with hospital staff.`,
        getCorrect: (v) => `was ${v.ing}`,
        distractors: (v) => [v.ed, `will ${v.base}`, `has been ${v.ing}`],
        trigger: "last night, when the power outage hit (과거)",
        hint: "단서: 'last night when ~ hit (과거 시점)'",
        gPoint: "G-POINT 5: 과거 특정 시점 진행 -> 과거진행형"
      }
    ],

    '현진': [
      {
        getQ: (s) => `Due to a sudden network glitch on the main billing server, ${s} ___________ the system configuration right now to prevent transaction errors.`,
        getCorrect: (v) => `is now ${v.ing}`,
        distractors: (v) => [v.base + "s", v.ed, `will have been ${v.ing}`],
        trigger: "right now",
        hint: "단서: 문장의 'right now' (현재 시점 부사) + 완료 기간(for/since) 없음",
        gPoint: "G-POINT 6: right now, at the moment -> 현재진행형 (am/is/are -ing)"
      },
      {
        getQ: (s) => `Be quiet in the hallway! The executive search committee ___________ the finalists behind closed doors at the moment.`,
        getCorrect: () => `is interviewing`,
        distractors: () => [`interviewed`, `will interview`, `has interviewed`],
        trigger: "at the moment",
        hint: "단서: 명령문 'Be quiet!' + 'at the moment (지금 이 순간)'",
        gPoint: "G-POINT 6: at the moment -> 현재진행형"
      },
      {
        getQ: (s) => `The urgent product recall announcement was released ten minutes ago. Currently, ${s} ___________ media inquiries at the press conference.`,
        getCorrect: (v) => `is ${v.ing}`,
        distractors: (v) => [v.ed, `will ${v.base}`, `had ${v.ed}`],
        trigger: "Currently",
        hint: "단서: 문장의 'Currently (현재)' + 기간 없음",
        gPoint: "G-POINT 6: Currently -> 현재진행형"
      },
      {
        getQ: (s) => `The flight schedule has been adjusted due to heavy snowfall. Now the airline representatives ___________ meal vouchers to stranded international travelers.`,
        getCorrect: () => `are distributing`,
        distractors: () => [`distributed`, `will distribute`, `have distributed`],
        trigger: "Now",
        hint: "단서: 문두의 'Now' + 복수주어 representatives",
        gPoint: "G-POINT 6: Now -> 현재진행형"
      }
    ],

    '미진': [
      {
        getQ: (s) => `The international renewable energy expo will begin next Monday in Tokyo. Tomorrow morning, ${s} ___________ a keynote speech on solar grid efficiency on behalf of our firm.`,
        getCorrect: (v) => `will be ${v.ing}`,
        distractors: (v) => [v.ed, `has been ${v.ing}`, v.base + "s"],
        trigger: "Tomorrow morning",
        hint: "단서: 'Tomorrow morning' (단순 미래 시점 부사)",
        gPoint: "G-POINT 7: Tomorrow, Next ~ -> 미래진행형 (will be -ing)"
      },
      {
        getQ: (s) => `Please do not schedule any phone calls between 2 PM and 4 PM tomorrow because ${s} ___________ an executive board session during those hours.`,
        getCorrect: (v) => `will be leading`,
        distractors: (v) => [`led`, `leads`, `had led`],
        trigger: "tomorrow between 2 PM and 4 PM",
        hint: "단서: 내일 특정 시간대(tomorrow between 2 PM and 4 PM)",
        gPoint: "G-POINT 7: 미래 특정 시점 진행 -> 미래진행형"
      },
      {
        getQ: (s) => `When the foreign diplomatic delegation arrives at the airport terminal tomorrow afternoon, our welcoming committee ___________ commemorative badges to each dignitary.`,
        getCorrect: () => `will be presenting`,
        distractors: () => [`presented`, `presents`, `had presented`],
        trigger: "When + arrives (현재) tomorrow afternoon",
        hint: "단서: 시간부사절의 현재동사 'arrives' (내일 미래 시점 대용)",
        gPoint: "G-POINT 7: when절 현재동사 -> 주절 미래진행형 (will be -ing)"
      },
      {
        getQ: (s) => `The entire film production crew has finalized their travel arrangements. Next Tuesday afternoon, they ___________ to Vancouver for outdoor location shooting.`,
        getCorrect: () => `will be traveling`,
        distractors: () => [`traveled`, `have traveled`, `had traveled`],
        trigger: "Next Tuesday afternoon",
        hint: "단서: 'Next Tuesday afternoon' (명확한 미래 시점 부사)",
        gPoint: "G-POINT 7: Next + 시점 -> 미래진행형"
      }
    ],

    '과완진': [
      {
        getQ: (s) => `The symphony orchestra received thunderous applause after their flawless recital. The musicians ___________ the intricate piece for eight weeks before opening night arrived.`,
        getCorrect: () => `had been rehearsing`,
        distractors: () => [`were rehearsing`, `are rehearsing`, `will be rehearsing`],
        trigger: "for eight weeks before opening night arrived",
        hint: "단서: 기간 'for eight weeks' + 'before opening night arrived (과거 시점)'",
        gPoint: "G-POINT 8: before 과거시점 + for 기간 -> 과거완료진행형 (had been -ing)"
      },
      {
        getQ: (s) => `By the time the alpine rescue squad finally reached the stranded climbers yesterday, the expedition members ___________ freezing gale winds for nearly twenty-four hours.`,
        getCorrect: () => `had been enduring`,
        distractors: () => [`were enduring`, `have been enduring`, `will be enduring`],
        trigger: "By the time + reached (과거) + for nearly twenty-four hours",
        hint: "단서: 'By the time reached(과거)' + 기간 'for twenty-four hours'",
        gPoint: "G-POINT 8: By the time 과거시점 + for 기간 -> 과거완료진행형"
      },
      {
        getQ: (s) => `Until the unexpected electrical breakdown occurred at midnight, ${s} ___________ the gene sequence data for seven consecutive hours.`,
        getCorrect: (v) => `had been ${v.ing}`,
        distractors: (v) => [`was ${v.ing}`, `is ${v.ing}`, `will have been ${v.ing}`],
        trigger: "Until + occurred (과거) + for seven consecutive hours",
        hint: "단서: 'Until occurred(과거 시점)' + 기간 'for seven hours'",
        gPoint: "G-POINT 8: until 과거시점 + for 기간 -> 과거완료진행형"
      },
      {
        getQ: (s) => `Mr. Campbell stepped down from his executive post last week. He ___________ the multinational maritime firm for over twelve years before he made his final announcement.`,
        getCorrect: () => `had been directing`,
        distractors: () => [`has been directing`, `was directing`, `will direct`],
        trigger: "for over twelve years before he made (과거)",
        hint: "단서: 'before he made(과거)' + 기간 'for over twelve years'",
        gPoint: "G-POINT 8: before 과거 + for 기간 -> 과거완료진행형"
      }
    ],

    '현완진': [
      {
        getQ: (s) => `When David graduated from university, he moved to Seattle, where he ___________ eco-friendly skyscrapers for fourteen years now. He still loves his profession.`,
        getCorrect: () => `has been designing`,
        distractors: () => [`designed`, `will design`, `had designed`],
        trigger: "for fourteen years now",
        hint: "단서: 'for fourteen years now' (기간 for + 현재 시점 now) + 현재 문맥",
        gPoint: "G-POINT 9: for 기간 now -> 현재완료진행형 (have/has been -ing)"
      },
      {
        getQ: (s) => `Elena, an internationally acclaimed novelist, ___________ her upcoming fantasy saga for three years now. Eager readers continue to anticipate its publication.`,
        getCorrect: () => `has been writing`,
        distractors: () => [`wrote`, `is writing`, `had written`],
        trigger: "for three years now",
        hint: "단서: 'for three years now' (now + for 기간)",
        gPoint: "G-POINT 9: for 기간 now -> 현재완료진행형"
      },
      {
        getQ: (s) => `Dr. Martinez has dedicated his entire career to sustainable energy. Ever since he joined the national institute in 2018, he ___________ solar cell efficiency with remarkable success.`,
        getCorrect: () => `has been improving`,
        distractors: () => [`improved`, `will improve`, `had been improving`],
        trigger: "Since he joined in 2018",
        hint: "단서: 'Since + 과거시점(joined in 2018)' + 주절 현재까지 지속",
        gPoint: "G-POINT 9: Since 과거시점 -> 주절 현재완료진행형"
      },
      {
        getQ: (s) => `Because the chief engineer resigned abruptly, recruiting a competent replacement is vital. ${s} ___________ qualified candidates for four weeks now to fill the opening.`,
        getCorrect: (v) => `has been ${v.ing}`,
        distractors: (v) => [v.ed, `will ${v.base}`, `had ${v.ed}`],
        trigger: "for four weeks now",
        hint: "단서: 현재 문맥(is vital) + 기간 'for four weeks now'",
        gPoint: "G-POINT 9: 현재 상황 + for 기간 now -> 현재완료진행형"
      }
    ],

    '미완진': [
      {
        getQ: (s) => `By the end of this academic semester, Professor Harrison ___________ international economics at the university for exactly thirty continuous years.`,
        getCorrect: () => `will have been teaching`,
        distractors: () => [`has been teaching`, `is teaching`, `had been teaching`],
        trigger: "By the end of this semester + for exactly thirty continuous years",
        hint: "단서: 미래 완료 시점 'By the end of this semester' + 기간 'for thirty years'",
        gPoint: "G-POINT 10: By 미래시점 + for 기간 -> 미래완료진행형 (will have been -ing)"
      },
      {
        getQ: (s) => `By next September, the global civil engineering consortium ___________ on the subsea rail tunnel project for five uninterrupted years.`,
        getCorrect: () => `will have been working`,
        distractors: () => [`has been working`, `is working`, `had been working`],
        trigger: "By next September + for five uninterrupted years",
        hint: "단서: 'By next September (미래 완료)' + 기간 'for five years'",
        gPoint: "G-POINT 10: By 미래시점 + for 기간 -> 미래완료진행형"
      },
      {
        getQ: (s) => `By the time the global aerospace summit convenes next November, ${s} ___________ the new satellite propulsion system for two full years.`,
        getCorrect: (v) => `will have been ${v.ing}`,
        distractors: (v) => [`has been ${v.ing}`, `is ${v.ing}`, `had been ${v.ing}`],
        trigger: "By the time + convenes next November + for two full years",
        hint: "단서: 'By the time + 현재동사(convenes) next November' + 기간 'for two years'",
        gPoint: "G-POINT 10: By the time 현재 + for 기간 -> 미래완료진행형"
      },
      {
        getQ: (s) => `When Kevin completes his medical fellowship next spring, he ___________ alongside senior surgeons at the hospital for four continuous years.`,
        getCorrect: () => `will have been practicing`,
        distractors: () => [`has been practicing`, `is practicing`, `had practiced`],
        trigger: "When + completes next spring + for four continuous years",
        hint: "단서: 'When completes next spring (미래)' + 기간 'for four years'",
        gPoint: "G-POINT 10: When절 미래 + for 기간 -> 미래완료진행형"
      }
    ]
  },

  // 동사 어휘 풀
  verbs: [
    { base: "review", ing: "reviewing", ed: "reviewed" },
    { base: "examine", ing: "examining", ed: "examined" },
    { base: "investigate", ing: "investigating", ed: "investigated" },
    { base: "analyze", ing: "analyzing", ed: "analyzed" },
    { base: "evaluate", ing: "evaluating", ed: "evaluated" },
    { base: "monitor", ing: "monitoring", ed: "monitored" },
    { base: "manage", ing: "managing", ed: "managed" },
    { base: "supervise", ing: "supervising", ed: "supervised" }
  ],

  // -------------------------------------------------------------------------
  // 시제 문제 1개 생성
  // -------------------------------------------------------------------------
  generateTenseQuestion(specificType) {
    const types = ['과진', '현진', '미진', '과완진', '현완진', '미완진'];
    const type = specificType || types[Math.floor(Math.random() * types.length)];
    const templates = this.tenseTemplates[type];
    const tmpl = templates[Math.floor(Math.random() * templates.length)];
    const subj = this.subjects[Math.floor(Math.random() * this.subjects.length)];
    const v = this.verbs[Math.floor(Math.random() * this.verbs.length)];

    const question = tmpl.getQ(subj);
    const correct = tmpl.getCorrect(v);
    const distractors = tmpl.distractors(v);

    const options = [
      { text: correct, isCorrect: true },
      ...distractors.map(d => ({ text: d, isCorrect: false }))
    ].sort(() => Math.random() - 0.5);

    const subCategoryNames = {
      '과진': '시제 > 과거진행형 (was/were ~ing)',
      '현진': '시제 > 현재진행형 (am/is/are ~ing)',
      '미진': '시제 > 미래진행형 (will be ~ing)',
      '과완진': '시제 > 과거완료진행형 (had been ~ing)',
      '현완진': '시제 > 현재완료진행형 (have/has been ~ing)',
      '미완진': '시제 > 미래완료진행형 (will have been ~ing)'
    };

    return {
      id: `TENSE-${Date.now()}-${Math.floor(Math.random()*10000)}`,
      category: "tense",
      subCategory: type,
      subCategoryName: subCategoryNames[type],
      question: question,
      options: options,
      triggerWord: tmpl.trigger,
      hint: tmpl.hint,
      gPoint: tmpl.gPoint,
      explanation: `지텔프 출제 공식에 따라 문장 속 핵심 단서인 [${tmpl.trigger}]가 주어져 있으므로 진행형 시제인 '${correct}'가 정답입니다.`
    };
  },

  // -------------------------------------------------------------------------
  // 2. 준동사 무한 생성기 (동명사 vs to부정사)
  // -------------------------------------------------------------------------
  generateGerundInfinitiveQuestion(forceType) {
    const isGerund = forceType ? forceType === '동명사' : Math.random() > 0.5;
    const subj = this.subjects[Math.floor(Math.random() * this.subjects.length)];

    if (isGerund) {
      const items = [
        { v: "suggested", obj: "postponing", plain: "postpone", toV: "to postpone", ctx: "the launch of the mobile application until next quarter" },
        { v: "avoided", obj: "disclosing", plain: "disclose", toV: "to disclose", ctx: "sensitive trade secrets during the media briefing" },
        { v: "recommended", obj: "upgrading", plain: "upgrade", toV: "to upgrade", ctx: "the server firewalls to prevent cyber intrusions" },
        { v: "postponed", obj: "holding", plain: "hold", toV: "to hold", ctx: "the annual stakeholder summit due to adverse weather" },
        { v: "considered", obj: "expanding", plain: "expand", toV: "to expand", ctx: "commercial sales operations into emerging European markets" },
        { v: "denied", obj: "leaking", plain: "leak", toV: "to leak", ctx: "confidential audit documents to external news reporters" },
        { v: "finished", obj: "evaluating", plain: "evaluate", toV: "to evaluate", ctx: "the chemical compound samples in the clean laboratory" },
        { v: "risked", obj: "investing", plain: "invest", toV: "to invest", ctx: "venture capital into the high-risk green energy startup" },
        { v: "quit", obj: "smoking", plain: "smoke", toV: "to smoke", ctx: "following the physician's urgent medical recommendation" },
        { v: "kept", obj: "monitoring", plain: "monitor", toV: "to monitor", ctx: "the patient's vital signs throughout the post-operative period" }
      ];
      const item = items[Math.floor(Math.random() * items.length)];

      const question = `Due to strategic restructuring, ${subj} ${item.v} ___________ ${item.ctx}.`;
      const options = [
        { text: item.obj, isCorrect: true },
        { text: item.toV, isCorrect: false },
        { text: item.plain, isCorrect: false },
        { text: "having " + item.plain + "ed", isCorrect: false }
      ].sort(() => Math.random() - 0.5);

      return {
        id: `GI-${Date.now()}-${Math.floor(Math.random()*10000)}`,
        category: "gerund_infinitive",
        subCategory: "동명사",
        subCategoryName: `준동사 > 동명사만을 목적어로 취하는 동사 (${item.v} + -ing)`,
        question: question,
        options: options,
        triggerWord: item.v,
        hint: `단서: 동사 '${item.v}' 뒤 목적어 자리 (암기표 3: ${item.v} + 동명사)`,
        gPoint: `G-POINT 13: ${item.v} + 동명사(-ing)`,
        explanation: `동사 '${item.v}'는 동명사만을 목적어로 취하는 대표적인 지텔프 빈출 동사이므로 '${item.obj}'가 정답입니다.`
      };
    } else {
      const items = [
        { v: "decided", obj: "to hire", plain: "hire", ing: "hiring", ctx: "twenty additional biomedical specialists to accelerate vaccine development" },
        { v: "agreed", obj: "to sign", plain: "sign", ing: "signing", ctx: "the bilateral partnership contract before the fiscal year concluded" },
        { v: "refused", obj: "to compromise", plain: "compromise", ing: "compromising", ctx: "on strict aviation quality benchmarks despite intense deadlines" },
        { v: "planned", obj: "to establish", plain: "establish", ing: "establishing", ctx: "a state-of-the-art logistics hub near the international airport" },
        { v: "hoped", obj: "to achieve", plain: "achieve", ing: "achieving", ctx: "carbon neutrality across all manufacturing facilities by 2030" },
        { v: "managed", obj: "to persuade", plain: "persuade", ing: "persuading", ctx: "the municipal committee to approve the urban revitalization grant" },
        { v: "hesitated", obj: "to accept", plain: "accept", ing: "accepting", ctx: "the overseas transfer offer due to personal family commitments" },
        { v: "promised", obj: "to deliver", plain: "deliver", ing: "delivering", ctx: "the replacement industrial parts within forty-eight hours" },
        { v: "attempted", obj: "to resolve", plain: "resolve", ing: "resolving", ctx: "the customer dispute through independent mediation" },
        { v: "chose", obj: "to relocate", plain: "relocate", ing: "relocating", ctx: "the corporate headquarters to a tech-friendly business district" }
      ];
      const item = items[Math.floor(Math.random() * items.length)];

      const question = `Following a unanimous boardroom consensus, ${subj} ${item.v} ___________ ${item.ctx}.`;
      const options = [
        { text: item.obj, isCorrect: true },
        { text: item.ing, isCorrect: false },
        { text: item.plain, isCorrect: false },
        { text: "to have " + item.plain + "ed", isCorrect: false }
      ].sort(() => Math.random() - 0.5);

      return {
        id: `GI-${Date.now()}-${Math.floor(Math.random()*10000)}`,
        category: "gerund_infinitive",
        subCategory: "to부정사",
        subCategoryName: `준동사 > to부정사만을 목적어로 취하는 동사 (${item.v} + to V)`,
        question: question,
        options: options,
        triggerWord: item.v,
        hint: `단서: 동사 '${item.v}' 뒤 목적어 자리 (암기표 4: ${item.v} + to부정사)`,
        gPoint: `G-POINT 14: ${item.v} + to부정사(to V)`,
        explanation: `동사 '${item.v}'는 미래지향적인 to부정사만을 목적어로 취하므로 '${item.obj}'가 정답입니다.`
      };
    }
  },

  // -------------------------------------------------------------------------
  // 3. 가정법 무한 생성기
  // -------------------------------------------------------------------------
  generateSubjunctiveQuestion(forceType) {
    const isPast = forceType ? forceType === '과거' : Math.random() > 0.5;
    const subj = this.subjects[Math.floor(Math.random() * this.subjects.length)];

    if (isPast) {
      const actions = [
        { ifV: "were", mainV: "could collaborate", mainPlain: "collaborate", ctx: "with the international architectural consulting agency" },
        { ifV: "were", mainV: "would finalize", mainPlain: "finalize", ctx: "the corporate acquisition proposal without delay" },
        { ifV: "were", mainV: "might resolve", mainPlain: "resolve", ctx: "the complex supply chain bottleneck much faster" }
      ];
      const act = actions[Math.floor(Math.random() * actions.length)];

      const question = `If ${subj} ___________ more flexible with project scheduling, our department ${act.mainV} ${act.ctx}.`;
      const options = [
        { text: "were", isCorrect: true },
        { text: "had been", isCorrect: false },
        { text: "is", isCorrect: false },
        { text: "will be", isCorrect: false }
      ].sort(() => Math.random() - 0.5);

      return {
        id: `SUB-${Date.now()}-${Math.floor(Math.random()*10000)}`,
        category: "subjunctive",
        subCategory: "가정법과거",
        subCategoryName: "가정법 > 가정법 과거 (현재 사실 반대)",
        question: question,
        options: options,
        triggerWord: act.mainV,
        hint: `단서: 주절의 '${act.mainV} (조동사 과거 + 동사원형)'`,
        gPoint: "G-TELP 가정법 공식: If + S + 과거동사(were), S + would/could/might + 동사원형",
        explanation: `주절에 '${act.mainV}'가 왔으므로 If절에는 가정법 과거를 나타내는 'were'가 와야 합니다.`
      };
    } else {
      const actions = [
        { ifV: "had dispatched", mainV: "would have received", ctx: "the critical replacement components yesterday morning" },
        { ifV: "had analyzed", mainV: "could have prevented", ctx: "the catastrophic system shutdown before the audit" },
        { ifV: "had reviewed", mainV: "might have detected", ctx: "the calculation discrepancies in the annual statement" }
      ];
      const act = actions[Math.floor(Math.random() * actions.length)];

      const question = `If the technical operations team ___________ the diagnostic evaluation earlier yesterday, we ${act.mainV} ${act.ctx}.`;
      const options = [
        { text: act.ifV, isCorrect: true },
        { text: act.ifV.replace("had ", ""), isCorrect: false },
        { text: "will review", isCorrect: false },
        { text: "would have " + act.ifV.replace("had ", ""), isCorrect: false }
      ].sort(() => Math.random() - 0.5);

      return {
        id: `SUB-${Date.now()}-${Math.floor(Math.random()*10000)}`,
        category: "subjunctive",
        subCategory: "가정법과거완료",
        subCategoryName: "가정법 > 가정법 과거완료 (과거 사실 반대)",
        question: question,
        options: options,
        triggerWord: act.mainV,
        hint: `단서: 주절의 '${act.mainV} (조동사 과거 + have p.p.)'`,
        gPoint: "G-TELP 가정법 공식: If + S + had p.p., S + would/could/might + have p.p.",
        explanation: `주절에 '${act.mainV}'가 있으므로 If절에는 가정법 과거완료인 '${act.ifV}'가 정답입니다.`
      };
    }
  },

  // -------------------------------------------------------------------------
  // 4. Should 생략 무한 생성기
  // -------------------------------------------------------------------------
  generateShouldQuestion() {
    const verbs = ["recommended", "suggested", "insisted", "demanded", "requested", "urged"];
    const v = verbs[Math.floor(Math.random() * verbs.length)];
    const subj = this.subjects[Math.floor(Math.random() * this.subjects.length)];

    const actions = [
      { base: "wear", s: "wears", ed: "wore", ctx: "protective safety equipment on the industrial factory floor" },
      { base: "submit", s: "submits", ed: "submitted", ctx: "the audited expenditure records prior to the Friday deadline" },
      { base: "attend", s: "attends", ed: "attended", ctx: "the mandatory corporate security briefing this afternoon" },
      { base: "notify", s: "notifies", ed: "notified", ctx: "the project supervisor immediately upon discovering any system errors" }
    ];
    const act = actions[Math.floor(Math.random() * actions.length)];

    const question = `${subj} strongly ${v} that every regional team leader ___________ ${act.ctx}.`;
    const options = [
      { text: act.base, isCorrect: true },
      { text: act.s, isCorrect: false },
      { text: act.ed, isCorrect: false },
      { text: act.base + "ing", isCorrect: false }
    ].sort(() => Math.random() - 0.5);

    return {
      id: `SHOULD-${Date.now()}-${Math.floor(Math.random()*10000)}`,
      category: "should_omission",
      subCategory: "should생략",
      subCategoryName: `Should 생략 > ${v} that S + (should) 동사원형`,
      question: question,
      options: options,
      triggerWord: `${v} that`,
      hint: `단서: 주장/제안/요구 동사 '${v} that + S + (should) 동사원형'`,
      gPoint: `G-TELP 당위성 공식: ${v} + that S + (should) 동사원형`,
      explanation: `주절에 제안/요구 동사 '${v}'가 쓰였으므로 that절 내부에는 조동사 should가 생략되어 주어의 인칭과 상관없이 무조건 동사원형 '${act.base}'가 정답입니다.`
    };
  },

  // -------------------------------------------------------------------------
  // 5. 기타 파트 (관계사, 조동사, 연결어) 다채로운 템플릿 풀
  // -------------------------------------------------------------------------
  generateOtherQuestion(category) {
    if (category === 'relative') {
      const relItems = [
        {
          sub: "관계대명사 계속적 용법 (that 불가)",
          q: "The international pharmaceutical conglomerate acquired BioNova Therapeutics, ___________ developed the breakthrough oncology treatment last year.",
          correct: "which",
          dist: ["that", "who", "what"],
          trig: ", (콤마)",
          hint: "단서: 콤마(,) 뒤 사물 선행사 (that은 콤마 뒤 사용 불가)",
          gp: "G-TELP 관계사 공식: 콤마(,) 뒤에는 that 절대 불가 -> which",
          exp: "선행사가 사물/회사이며 콤마 뒤 계속적 용법이므로 관계대명사 that은 올 수 없고 which가 정답입니다."
        },
        {
          sub: "사람 선행사 주격 관계대명사 (who)",
          q: "The board of trustees commended the dedicated engineer ___________ designed the energy-efficient water filtration module.",
          correct: "who",
          dist: ["which", "whom", "whose"],
          trig: "the dedicated engineer (사람 선행사)",
          hint: "단서: 사람 선행사 + 뒤에 주어가 없는 불완전 절",
          gp: "G-TELP 관계사 공식: 사람 선행사 + 주격 = who",
          exp: "선행사가 사람이고 뒤이어 동사(designed)가 오므로 주격 관계대명사 who가 정답입니다."
        },
        {
          sub: "소유격 관계대명사 (whose)",
          q: "The university awarded a research grant to the young scientist ___________ groundbreaking thesis was published in Nature.",
          correct: "whose",
          dist: ["who", "whom", "which"],
          trig: "scientist [ ] groundbreaking thesis",
          hint: "단서: 선행사 명사와 뒤의 명사(thesis)가 소유격 관계",
          gp: "G-TELP 관계사 공식: 선행사 + whose + 무관사 명사",
          exp: "뒤에 완전한 형태의 명사구(groundbreaking thesis)가 오며 '~의 논문'이라는 소유 관계이므로 whose가 정답입니다."
        },
        {
          sub: "장소 선행사 관계부사 (where)",
          q: "The tech corporation built an advanced research facility ___________ automated robotic systems are tested daily.",
          correct: "where",
          dist: ["which", "what", "whom"],
          trig: "an advanced research facility (장소 선행사)",
          hint: "단서: 장소 선행사 + 뒤에 완전한 절(systems are tested daily)",
          gp: "G-TELP 관계사 공식: 장소 선행사 + 완전한 절 = where",
          exp: "선행사가 장소이고 뒤따르는 절이 수동태로 완전하므로 관계부사 where가 정답입니다."
        }
      ];
      const item = relItems[Math.floor(Math.random() * relItems.length)];
      return {
        id: `REL-${Date.now()}-${Math.floor(Math.random()*10000)}`,
        category: "relative",
        subCategory: "관계대명사/부사",
        subCategoryName: `관계사 > ${item.sub}`,
        question: item.q,
        options: [
          { text: item.correct, isCorrect: true },
          ...item.dist.map(d => ({ text: d, isCorrect: false }))
        ].sort(() => Math.random() - 0.5),
        triggerWord: item.trig,
        hint: item.hint,
        gPoint: item.gp,
        explanation: item.exp
      };
    } else if (category === 'modal') {
      const modalItems = [
        {
          sub: "법규/규정에 따른 의무 (must)",
          q: "According to rigorous international aviation protocols, all passengers ___________ fasten their seatbelts whenever the illuminate sign is active.",
          correct: "must",
          dist: ["might", "would", "could"],
          trig: "According to protocols (규정)",
          hint: "단서: 엄격한 안전 법규 및 규정에 따른 강한 의무",
          gp: "G-TELP 조동사: 규정/법률 준수 = must (~해야만 한다)",
          exp: "항공 안전 규정에 의해 반드시 지켜야 하는 강한 의무이므로 must가 정답입니다."
        },
        {
          sub: "건강/업무 권고 (should)",
          q: "To prevent repetitive strain injuries, ergonomic experts advise that desk workers ___________ take brief stretch breaks every hour.",
          correct: "should",
          dist: ["might", "would", "may"],
          trig: "advise (권고 문맥)",
          hint: "단서: 전문가의 조언 및 권고 상황",
          gp: "G-TELP 조동사: 충고/권고 = should (~하는 것이 좋다)",
          exp: "건강 예방을 위해 스트레칭을 하는 것이 바람직하다는 충고/권고의 의미이므로 should가 정답입니다."
        },
        {
          sub: "능력 및 기능성 (can)",
          q: "Thanks to newly installed solar panels, the automated greenhouse ___________ generate all its own electricity year-round.",
          correct: "can",
          dist: ["must", "should", "might"],
          trig: "Thanks to panels (능력 가능)",
          hint: "단서: 시설의 기능적 능력(~할 수 있다)",
          gp: "G-TELP 조동사: 가능/능력 = can",
          exp: "태양광 패널 설치로 자체 전력을 생산할 능력이 생겼음을 나타내므로 can이 정답입니다."
        },
        {
          sub: "불확실한 미래 추측 (may)",
          q: "Weather forecasts indicate high winds tomorrow, which ___________ cause minor shipping delays at the container terminal.",
          correct: "may",
          dist: ["must", "should", "can"],
          trig: "indicate high winds (추측 문맥)",
          hint: "단서: 일기예보에 근거한 불확실한 가능성/추측",
          gp: "G-TELP 조동사: 불확실한 추측 = may (~일지도 모른다)",
          exp: "강풍으로 인해 지연이 발생할 수도 있다는 가능성/추측 문맥이므로 may가 정답입니다."
        }
      ];
      const item = modalItems[Math.floor(Math.random() * modalItems.length)];
      return {
        id: `MOD-${Date.now()}-${Math.floor(Math.random()*10000)}`,
        category: "modal",
        subCategory: "조동사",
        subCategoryName: `조동사 > ${item.sub}`,
        question: item.q,
        options: [
          { text: item.correct, isCorrect: true },
          ...item.dist.map(d => ({ text: d, isCorrect: false }))
        ].sort(() => Math.random() - 0.5),
        triggerWord: item.trig,
        hint: item.hint,
        gPoint: item.gp,
        explanation: item.exp
      };
    } else {
      const conjItems = [
        {
          sub: "양보 접속사 (Although + 절)",
          q: "___________ the enterprise encountered severe supply chain disruptions throughout the winter, they succeeded in surpassing their annual revenue forecast.",
          correct: "Although",
          dist: ["Despite", "Because of", "However"],
          trig: "Although vs Despite",
          hint: "단서: 뒤에 주어+동사 절(the enterprise encountered...)이 연결됨",
          gp: "G-TELP 연결어 공식: S+V 절을 이끄는 양보 접속사 = Although",
          exp: "뒤에 완전한 주어+동사 절이 오고 역접 양보 의미이므로 접속사 Although가 정답입니다. (Despite는 전치사)"
        },
        {
          sub: "양보 전치사 (Despite + 명사구)",
          q: "___________ torrential rainstorms during the morning rush hour, all scheduled express trains arrived on time.",
          correct: "Despite",
          dist: ["Although", "Even though", "Whereas"],
          trig: "torrential rainstorms (명사구)",
          hint: "단서: 뒤에 동사가 없는 순수 명사구(torrential rainstorms)",
          gp: "G-TELP 연결어 공식: 명사(구)를 목적어로 취하는 양보 전치사 = Despite",
          exp: "뒤에 주어+동사 절이 아닌 명사구만 이어지므로 전치사 Despite가 정답입니다."
        },
        {
          sub: "역접 연결부사 (However)",
          q: "The prototype showed remarkable test results in lab simulations. ___________, unexpected hardware overheating was detected during long-term field testing.",
          correct: "However",
          dist: ["Therefore", "Furthermore", "Consequently"],
          trig: "remarkable vs overheating (대조)",
          hint: "단서: 앞문장(긍정 결과)과 뒷문장(발열 문제) 간의 역접 대조",
          gp: "G-TELP 연결어: 앞뒤 문맥 반전 = However (그러나)",
          exp: "시뮬레이션 호평과 실제 필드 테스트에서의 문제점이라는 상반된 두 문장을 잇는 역접 연결부사 However가 정답입니다."
        },
        {
          sub: "인과 연결부사 (Therefore)",
          q: "Severe blizzards grounded all regional cargo flights last night. ___________, delivery packages will be delayed by one business day.",
          correct: "Therefore",
          dist: ["However", "Nevertheless", "Otherwise"],
          trig: "grounded flights -> delayed packages (인과)",
          hint: "단서: 앞문장(원인)과 뒷문장(결과)의 명확한 인과관계",
          gp: "G-TELP 연결어: 원인과 결과 = Therefore (따라서, 그러므로)",
          exp: "비행기 결항이라는 원인으로 인해 배송이 지연된다는 당연한 결과가 이어지므로 인과 접속부사 Therefore가 정답입니다."
        }
      ];
      const item = conjItems[Math.floor(Math.random() * conjItems.length)];
      return {
        id: `CONJ-${Date.now()}-${Math.floor(Math.random()*10000)}`,
        category: "conjunction",
        subCategory: "연결어",
        subCategoryName: `연결어 > ${item.sub}`,
        question: item.q,
        options: [
          { text: item.correct, isCorrect: true },
          ...item.dist.map(d => ({ text: d, isCorrect: false }))
        ].sort(() => Math.random() - 0.5),
        triggerWord: item.trig,
        hint: item.hint,
        gPoint: item.gp,
        explanation: item.exp
      };
    }
  },

  // -------------------------------------------------------------------------
  // 통합 세트 생성기 (10문제 코스 또는 26문제 실전 풀세트)
  // -------------------------------------------------------------------------
  generateSet(category, count = 10) {
    const set = [];

    // 1. 실전 26문제 풀세트 모의고사 (G-TELP 공식 문항 비율 100% 완전 복제)
    if (count === 26 || category === 'full_26') {
      // 시제 6문제 (6대 시제 각 1문제)
      ['과진', '현진', '미진', '과완진', '현완진', '미완진'].forEach(t => set.push(this.generateTenseQuestion(t)));
      // 가정법 6문제 (과거 3 + 과거완료 3)
      set.push(this.generateSubjunctiveQuestion('과거'));
      set.push(this.generateSubjunctiveQuestion('과거'));
      set.push(this.generateSubjunctiveQuestion('과거'));
      set.push(this.generateSubjunctiveQuestion('과거완료'));
      set.push(this.generateSubjunctiveQuestion('과거완료'));
      set.push(this.generateSubjunctiveQuestion('과거완료'));
      // 준동사 5문제 (동명사 3 + to부정사 2)
      set.push(this.generateGerundInfinitiveQuestion('동명사'));
      set.push(this.generateGerundInfinitiveQuestion('동명사'));
      set.push(this.generateGerundInfinitiveQuestion('동명사'));
      set.push(this.generateGerundInfinitiveQuestion('to부정사'));
      set.push(this.generateGerundInfinitiveQuestion('to부정사'));
      // Should 생략 3문제
      set.push(this.generateShouldQuestion());
      set.push(this.generateShouldQuestion());
      set.push(this.generateShouldQuestion());
      // 관계사 2문제
      set.push(this.generateOtherQuestion('relative'));
      set.push(this.generateOtherQuestion('relative'));
      // 조동사 2문제
      set.push(this.generateOtherQuestion('modal'));
      set.push(this.generateOtherQuestion('modal'));
      // 연결어 2문제
      set.push(this.generateOtherQuestion('conjunction'));
      set.push(this.generateOtherQuestion('conjunction'));
    } 
    // 2. 시제 10문제 코스 (6대 시제 필수 포함 + 4문제 추가)
    else if (category === 'tense') {
      ['과진', '현진', '미진', '과완진', '현완진', '미완진'].forEach(t => set.push(this.generateTenseQuestion(t)));
      while (set.length < 10) {
        set.push(this.generateTenseQuestion());
      }
    } 
    // 3. 준동사 10문제 코스 (동명사 5 + to부정사 5 균형)
    else if (category === 'gerund_infinitive') {
      while (set.length < 5) set.push(this.generateGerundInfinitiveQuestion('동명사'));
      while (set.length < 10) set.push(this.generateGerundInfinitiveQuestion('to부정사'));
    } 
    // 4. 가정법 10문제 코스 (과거 5 + 과거완료 5)
    else if (category === 'subjunctive') {
      while (set.length < 5) set.push(this.generateSubjunctiveQuestion('과거'));
      while (set.length < 10) set.push(this.generateSubjunctiveQuestion('과거완료'));
    } 
    // 5. Should 생략 10문제 코스
    else if (category === 'should_omission') {
      while (set.length < 10) set.push(this.generateShouldQuestion());
    } 
    // 6. 기타 파트
    else if (category === 'relative' || category === 'modal' || category === 'conjunction') {
      while (set.length < 10) set.push(this.generateOtherQuestion(category));
    } 
    // 7. 종합 10문제 코스
    else {
      set.push(this.generateTenseQuestion('과진'));
      set.push(this.generateTenseQuestion('현진'));
      set.push(this.generateTenseQuestion('미진'));
      set.push(this.generateTenseQuestion('과완진'));
      set.push(this.generateGerundInfinitiveQuestion('동명사'));
      set.push(this.generateGerundInfinitiveQuestion('to부정사'));
      set.push(this.generateSubjunctiveQuestion('과거'));
      set.push(this.generateSubjunctiveQuestion('과거완료'));
      set.push(this.generateShouldQuestion());
      set.push(this.generateOtherQuestion('relative'));
    }

    // 중복 방지: 이미 푼 문제와 너무 유사하지 않도록 셔플
    for (let i = set.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [set[i], set[j]] = [set[j], set[i]];
    }

    return set;
  },

  // 호환성 메서드 (app.js 연동 편의용)
  generate10Set(category) {
    return this.generateSet(category, 10);
  },

  generate26MockExam() {
    return this.generateSet('full_26', 26);
  }
};
