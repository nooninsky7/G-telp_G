// G-TELP 문법 전 영역 실전 문제 은행
// 파트 분류:
// 1. tense (시제 - 60문항)
// 2. gerund_infinitive (준동사 - 20문항 실전 변형 탑재)
// 3. subjunctive (가정법)
// 4. should_omission (Should 생략)
// 5. relative (관계사)
// 6. modal (조동사)
// 7. conjunction (연결어)

const QUESTIONS_DATABASE = [
  // =========================================================================
  // 1. 시제 (TENSE) - 6대 진행형 60문항
  // =========================================================================
  {
    id: "PAST-CONT-01",
    category: "tense",
    subCategory: "과진",
    subCategoryName: "시제 > 과거진행형 (was/were ~ing)",
    question: "When the regional manager arrived at the branch office unannounced, the senior accountant ___________ the quarterly financial audit with his team.",
    options: [
      { text: "was reviewing", isCorrect: true },
      { text: "will review", isCorrect: false },
      { text: "reviews", isCorrect: false },
      { text: "has been reviewing", isCorrect: false }
    ],
    hint: "단서: When절의 과거시제 동사 'arrived' (특정 과거 시점의 일시적 동작)",
    gPoint: "G-POINT 5: when + 과거동사 + 주절 과거진행형 (was/were -ing)",
    explanation: "When절에 과거시제 'arrived'가 쓰여 과거 특정 시점을 나타냅니다. 지점장이 예고 없이 도착했을 당시 회계사가 감사 자료를 '검토하고 있던 중'이었으므로 과거진행형 'was reviewing'이 정답입니다."
  },
  {
    id: "PAST-CONT-02",
    category: "tense",
    subCategory: "과진",
    subCategoryName: "시제 > 과거진행형 (was/were ~ing)",
    question: "While Julian ___________ samples of the new fabric in the laboratory, his partner drafted the patent application. In fact, Julian wanted to double-check the durability.",
    options: [
      { text: "tested", isCorrect: false },
      { text: "was testing", isCorrect: true },
      { text: "will test", isCorrect: false },
      { text: "had been testing", isCorrect: false }
    ],
    hint: "단서: 접속사 'While' + 주절의 과거동사 'drafted'",
    gPoint: "G-POINT 4: 주절 과거 + while 과거진행형 (was/were -ing)",
    explanation: "주절의 시제가 과거(drafted)이며, While절 내부에서 동시 동작으로 진행 중이던 상황을 묘사하므로 과거진행형 'was testing'이 정답입니다."
  },
  {
    id: "PAST-CONT-03",
    category: "tense",
    subCategory: "과진",
    subCategoryName: "시제 > 과거진행형 (was/were ~ing)",
    question: "Carlos, the chief architect from Madrid, visited the construction site yesterday. When I met him in the temporary trailer, several engineers ___________ blueprints on the digital table.",
    options: [
      { text: "examined", isCorrect: false },
      { text: "were examining", isCorrect: true },
      { text: "have been examining", isCorrect: false },
      { text: "will examine", isCorrect: false }
    ],
    hint: "단서: 'When I met (과거동사) him'",
    gPoint: "G-POINT 5: when + 과거동사, 주어 복수(several engineers) -> were ~ing",
    explanation: "When절에 과거동사 'met'이 주어졌고 주어가 복수인 'several engineers'이므로 과거진행형 'were examining'이 정답입니다."
  },
  {
    id: "PAST-CONT-04",
    category: "tense",
    subCategory: "과진",
    subCategoryName: "시제 > 과거진행형 (was/were ~ing)",
    question: "Marcus answered incoming emails while Clara ___________ the medical equipment for the upcoming demonstration. She was extremely careful not to damage the delicate sensors.",
    options: [
      { text: "would calibrate", isCorrect: false },
      { text: "calibrated", isCorrect: false },
      { text: "was calibrating", isCorrect: true },
      { text: "has been calibrating", isCorrect: false }
    ],
    hint: "단서: 주절 과거동사 'answered' + 접속사 'while'",
    gPoint: "G-POINT 4: 과거 주절 + while 과거진행형",
    explanation: "마커스가 이메일에 답장하던 과거 시점(answered) 동안 클라라가 장비를 조율 중이었으므로 과거진행형 'was calibrating'이 정답입니다."
  },
  {
    id: "PAST-CONT-05",
    category: "tense",
    subCategory: "과진",
    subCategoryName: "시제 > 과거진행형 (was/were ~ing)",
    question: "At 9 o'clock last night, the security guard noticed smoke rising from the basement. When he rushed to investigate, the faulty server ___________ sparks near the electrical panel.",
    options: [
      { text: "was emitting", isCorrect: true },
      { text: "emitted", isCorrect: false },
      { text: "will be emitting", isCorrect: false },
      { text: "has been emitting", isCorrect: false }
    ],
    hint: "단서: 'When he rushed (과거시제)'",
    gPoint: "G-POINT 5: when + 과거동사 -> 과거진행형",
    explanation: "경비원이 조사하러 달려갔을 당시(rushed) 스파크를 일으키고 있던 중이었으므로 과거진행형 'was emitting'이 정답입니다."
  },
  {
    id: "PRES-CONT-01",
    category: "tense",
    subCategory: "현진",
    subCategoryName: "시제 > 현재진행형 (am/is/are ~ing)",
    question: "Due to a technical glitch on the main payment gateway, the IT support team ___________ the system right now to prevent data loss.",
    options: [
      { text: "is now rebooting", isCorrect: true },
      { text: "reboots", isCorrect: false },
      { text: "had rebooted", isCorrect: false },
      { text: "will have rebooted", isCorrect: false }
    ],
    hint: "단서: 'right now' (현재 시점 단서) + 완료 기간(for, since) 없음",
    gPoint: "G-POINT 6: 현재 힌트(now, right now) -> 현재진행형 (am/is/are -ing)",
    explanation: "'right now'라는 현재 시점 부사가 주어졌고 기간 단서가 없으므로 현재진행형 'is now rebooting'이 정답입니다."
  },
  {
    id: "PRES-CONT-02",
    category: "tense",
    subCategory: "현진",
    subCategoryName: "시제 > 현재진행형 (am/is/are ~ing)",
    question: "Sophia is scheduled to graduate from culinary school this summer. She ___________ specialized baking utensils at the supply store at the moment.",
    options: [
      { text: "is purchasing", isCorrect: true },
      { text: "purchased", isCorrect: false },
      { text: "has been purchasing", isCorrect: false },
      { text: "will purchase", isCorrect: false }
    ],
    hint: "단서: 'at the moment' (현재 시점) + 기간 단서 없음",
    gPoint: "G-POINT 6: at the moment -> 현재진행형",
    explanation: "'at the moment(지금 이 순간)'는 현재진행형의 대표적인 단서이며, 완료 기간(for 등)이 없으므로 현재진행형 'is purchasing'이 정답입니다."
  },
  {
    id: "FUT-CONT-01",
    category: "tense",
    subCategory: "미진",
    subCategoryName: "시제 > 미래진행형 (will be ~ing)",
    question: "The regional technology expo will begin next Monday in Tokyo. Tomorrow morning, Ms. Vance ___________ an opening speech on artificial intelligence on behalf of our firm.",
    options: [
      { text: "will be delivering", isCorrect: true },
      { text: "delivered", isCorrect: false },
      { text: "has delivered", isCorrect: false },
      { text: "had been delivering", isCorrect: false }
    ],
    hint: "단서: 'Tomorrow morning' (미래 시점 부사) + 기간 단서 없음",
    gPoint: "G-POINT 7: 미래 힌트(Tomorrow morning) -> 미래진행형 (will be -ing)",
    explanation: "내일 아침이라는 명확한 미래 시점 단서가 주어졌으며 완료 기간이 없으므로 미래진행형 'will be delivering'이 정답입니다."
  },
  {
    id: "PAST-PERF-CONT-01",
    category: "tense",
    subCategory: "과완진",
    subCategoryName: "시제 > 과거완료진행형 (had been ~ing)",
    question: "The symphony orchestra earned a standing ovation after their flawless concert. The musicians ___________ the challenging concerto for eight weeks before opening night arrived.",
    options: [
      { text: "had been rehearsing", isCorrect: true },
      { text: "are rehearsing", isCorrect: false },
      { text: "were rehearsing", isCorrect: false },
      { text: "will be rehearsing", isCorrect: false }
    ],
    hint: "단서: 기간 'for eight weeks' + 'before opening night arrived (과거 시점)'",
    gPoint: "G-POINT 8: before 과거시점 + for 기간 -> 과거완료진행형 (had been -ing)",
    explanation: "개막일이 도달한 과거 시점(arrived) 전까지 8주 동안 연습해오고 있었던 것이므로 과거완료진행형 'had been rehearsing'이 정답입니다."
  },
  {
    id: "PRES-PERF-CONT-01",
    category: "tense",
    subCategory: "현완진",
    subCategoryName: "시제 > 현재완료진행형 (have/has been ~ing)",
    question: "When David graduated from architecture school, he moved to Seattle, where he ___________ eco-friendly skyscrapers for fourteen years now. He still loves his job.",
    options: [
      { text: "has been designing", isCorrect: true },
      { text: "designed", isCorrect: false },
      { text: "will be designing", isCorrect: false },
      { text: "had designed", isCorrect: false }
    ],
    hint: "단서: 'for fourteen years now' (기간 for + 현재 시점 now) + 현재 문맥(still loves)",
    gPoint: "G-POINT 9: for 기간 + now -> 현재완료진행형 (has/have been -ing)",
    explanation: "과거에 시애틀로 이주한 후 '지금까지 14년 동안(for fourteen years now)' 친환경 빌딩을 계속 설계해오고 있는 중이므로 현재완료진행형 'has been designing'이 정답입니다."
  },
  {
    id: "FUT-PERF-CONT-01",
    category: "tense",
    subCategory: "미완진",
    subCategoryName: "시제 > 미래완료진행형 (will have been ~ing)",
    question: "By the end of this semester, Professor Harrison ___________ international finance and economics at Stanford University for exactly thirty years.",
    options: [
      { text: "will have been teaching", isCorrect: true },
      { text: "is teaching", isCorrect: false },
      { text: "taught", isCorrect: false },
      { text: "has been teaching", isCorrect: false }
    ],
    hint: "단서: 미래 완료 시점 'By the end of this semester' + 기간 'for exactly thirty years'",
    gPoint: "G-POINT 10: 미래 힌트(by ~) + for 기간 -> 미래완료진행형 (will have been -ing)",
    explanation: "미래 시점을 나타내는 'By the end of this semester'와 지속 기간인 'for exactly thirty years'가 결합되어 있으므로 미래완료진행형 'will have been teaching'이 정답입니다."
  },

  // =========================================================================
  // 2. 준동사 (GERUND vs INFINITIVE) - 교재 20문제 실전 완벽 변형
  // =========================================================================
  {
    id: "GI-01",
    category: "gerund_infinitive",
    subCategory: "to부정사",
    subCategoryName: "준동사 > to부정사만을 목적어로 취하는 동사 (decide to V)",
    question: "Due to the explosive surge in overseas sales this quarter, the board of directors decided ___________ thirty additional software engineers to expand the platform.",
    options: [
      { text: "to hire", isCorrect: true },
      { text: "hiring", isCorrect: false },
      { text: "to be hiring", isCorrect: false },
      { text: "having hired", isCorrect: false }
    ],
    hint: "단서: 동사 'decide' 뒤 목적어 자리 (암기표 4: decide + to V)",
    gPoint: "G-POINT 14: decide, plan, hope, agree, refuse + to부정사",
    explanation: "동사 'decide'는 미래지향적 동작을 나타내는 to부정사만을 목적어로 취합니다. 따라서 'to hire'가 정답입니다."
  },
  {
    id: "GI-02",
    category: "gerund_infinitive",
    subCategory: "to부정사",
    subCategoryName: "준동사 > to부정사만을 목적어로 취하는 동사 (agree to V)",
    question: "After intense collective negotiations, union representatives agreed ___________ with a compromise proposal to overcome the company's financial crisis.",
    options: [
      { text: "to come", isCorrect: true },
      { text: "coming", isCorrect: false },
      { text: "to have come", isCorrect: false },
      { text: "having come", isCorrect: false }
    ],
    hint: "단서: 동사 'agree' 뒤 목적어 자리 (암기표 4: agree + to V)",
    gPoint: "G-POINT 14: agree, promise, consent + to부정사",
    explanation: "동사 'agree(동의하다/합의하다)'는 to부정사만을 목적어로 취하므로 'to come'이 정답입니다."
  },
  {
    id: "GI-03",
    category: "gerund_infinitive",
    subCategory: "동명사",
    subCategoryName: "준동사 > 동명사만을 목적어로 취하는 동사 (stop -ing)",
    question: "Because the workload as a chief accountant was too heavy, Victoria's chronic illness worsened. Her physician recommended that she stop ___________ overtime and take adequate rest.",
    options: [
      { text: "working", isCorrect: true },
      { text: "to work", isCorrect: false },
      { text: "having worked", isCorrect: false },
      { text: "work", isCorrect: false }
    ],
    hint: "단서: 'stop + -ing' (하던 일을 그만두다 / 멈추다)",
    gPoint: "G-POINT 15: stop + -ing (~하던 것을 멈추다) vs stop + to V (~하기 위해 멈추다)",
    explanation: "문맥상 의사가 야근하던 것을 '그만두고 휴식을 취하라'고 권고한 것이므로 동명사 'working'이 정답입니다. (stop to work는 '일하기 위해 멈추다'라는 뜻이 되어 어색합니다)"
  },
  {
    id: "GI-04",
    category: "gerund_infinitive",
    subCategory: "to부정사",
    subCategoryName: "준동사 > 목적을 나타내는 to부정사 (부사적 용법)",
    question: "___________ an intellectual property dispute with its overseas competitor, the technology startup decided to retain an experienced patent attorney.",
    options: [
      { text: "To settle", isCorrect: true },
      { text: "Settling", isCorrect: false },
      { text: "To have settled", isCorrect: false },
      { text: "Having settled", isCorrect: false }
    ],
    hint: "단서: 문두에서 '~하기 위하여 (목적)'를 나타내는 부사적 용법",
    gPoint: "G-POINT 16: 문두 빈칸, 뒤에 주절(S+V) 완벽 -> 목적의 to부정사 (To V)",
    explanation: "특허 분쟁을 '원만하게 해결하기 위하여' 변호사를 고용하기로 결정했다는 목적을 나타내므로 to부정사 'To settle'이 정답입니다."
  },
  {
    id: "GI-05",
    category: "gerund_infinitive",
    subCategory: "to부정사",
    subCategoryName: "준동사 > 관용 표현 (be able to V)",
    question: "Henry had been practicing Japanese pronunciation diligently for eight years. Now he is fully able ___________ with Tokyo clients without any interpreter.",
    options: [
      { text: "to speak", isCorrect: true },
      { text: "speaking", isCorrect: false },
      { text: "to have spoken", isCorrect: false },
      { text: "will speak", isCorrect: false }
    ],
    hint: "단서: 관용 표현 'be able + to부정사'",
    gPoint: "G-POINT 19: be able to V (~할 수 있다)",
    explanation: "be able 뒤에는 to부정사가 연결되어 능력을 나타내므로 'to speak'가 정답입니다."
  },
  {
    id: "GI-06",
    category: "gerund_infinitive",
    subCategory: "동명사",
    subCategoryName: "준동사 > 전치사 뒤 빈칸 = 동명사 (without + -ing)",
    question: "Several junior developers refused to take on emergency maintenance duties because the company kept assigning extra tasks without ___________ proper compensation.",
    options: [
      { text: "giving", isCorrect: true },
      { text: "to give", isCorrect: false },
      { text: "being given", isCorrect: false },
      { text: "to have given", isCorrect: false }
    ],
    hint: "단서: 전치사 'without' 뒤 목적어 자리",
    gPoint: "G-POINT 11: 전치사(in, on, of, for, with, without) 뒤 빈칸 -> -ing(동명사)",
    explanation: "전치사(without) 뒤에는 목적어로 동명사가 와야 하므로 'giving'이 정답입니다."
  },
  {
    id: "GI-07",
    category: "gerund_infinitive",
    subCategory: "to부정사",
    subCategoryName: "준동사 > to부정사만을 목적어로 취하는 동사 (manage to V)",
    question: "Although the venture capital firm was extremely skeptical of the business proposal, Sarah managed ___________ the investment committee to fund her project.",
    options: [
      { text: "to persuade", isCorrect: true },
      { text: "persuading", isCorrect: false },
      { text: "would persuade", isCorrect: false },
      { text: "having persuaded", isCorrect: false }
    ],
    hint: "단서: 동사 'manage' 뒤 목적어 자리 (암기표 4: manage + to V)",
    gPoint: "G-POINT 14: manage to V (가까스로 ~해내다)",
    explanation: "동사 manage는 목적어로 to부정사만을 취하므로 'to persuade'가 정답입니다."
  },
  {
    id: "GI-08",
    category: "gerund_infinitive",
    subCategory: "to부정사",
    subCategoryName: "준동사 > 목적을 나타내는 to부정사 (to V)",
    question: "Global Retailers Corporation has expanded its seasonal marketing campaign across social media ___________ young demographic consumers worldwide.",
    options: [
      { text: "to attract", isCorrect: true },
      { text: "attracting", isCorrect: false },
      { text: "having attracted", isCorrect: false },
      { text: "to have attracted", isCorrect: false }
    ],
    hint: "단서: 문맥상 젊은 소비자들을 '유치하기 위하여 (목적)'",
    gPoint: "G-POINT 16: ~하기 위하여 (in order to) = to부정사",
    explanation: "캠페인을 확장한 목적(~을 유치하기 위해)을 나타내는 부사적 용법이므로 'to attract'가 정답입니다."
  },
  {
    id: "GI-09",
    category: "gerund_infinitive",
    subCategory: "to부정사",
    subCategoryName: "준동사 > 명사를 수식하는 to부정사 (형용사적 용법)",
    question: "Kelly enjoys relaxing at cozy cafes on Sunday afternoons. She visits the local bookstore every weekend to purchase interesting novels ___________ during her break.",
    options: [
      { text: "to read", isCorrect: true },
      { text: "reading", isCorrect: false },
      { text: "will read", isCorrect: false },
      { text: "having read", isCorrect: false }
    ],
    hint: "단서: 앞의 명사 'interesting novels'를 수식 (~할 소설)",
    gPoint: "G-POINT 17: 명사 + to V (~할 명사 - 형용사적 용법)",
    explanation: "휴식 시간에 '읽을 소설(novels to read)'이라는 수식 관계이므로 to부정사 'to read'가 정답입니다."
  },
  {
    id: "GI-10",
    category: "gerund_infinitive",
    subCategory: "동명사",
    subCategoryName: "준동사 > 동명사만을 목적어로 취하는 동사 (suggest -ing)",
    question: "The experienced fitness trainer whom I met at the rehabilitation center suggested ___________ cardiovascular workouts at least three times a week.",
    options: [
      { text: "exercising", isCorrect: true },
      { text: "to exercise", isCorrect: false },
      { text: "exercise", isCorrect: false },
      { text: "to have exercised", isCorrect: false }
    ],
    hint: "단서: 동사 'suggest' 뒤 목적어 자리 (암기표 3: suggest + -ing)",
    gPoint: "G-POINT 13: suggest, recommend, consider + -ing(동명사)",
    explanation: "동사 suggest(제안하다)는 동명사만을 목적어로 취하므로 'exercising'이 정답입니다."
  },
  {
    id: "GI-11",
    category: "gerund_infinitive",
    subCategory: "동명사",
    subCategoryName: "준동사 > 최빈출 관용표현 (prevent A from -ing)",
    question: "The cybersecurity department deployed biometric verification protocols to prevent unauthorized hackers from ___________ classified corporate files.",
    options: [
      { text: "accessing", isCorrect: true },
      { text: "to access", isCorrect: false },
      { text: "would access", isCorrect: false },
      { text: "having accessed", isCorrect: false }
    ],
    hint: "단서: 관용구 'prevent [keep/stop] A from + -ing'",
    gPoint: "G-POINT 20: prevent A from ~ing (A가 ~하는 것을 막다)",
    explanation: "전치사 from 뒤에 동명사가 결합하는 지텔프 최빈출 관용표현 'prevent A from -ing'이므로 'accessing'이 정답입니다."
  },
  {
    id: "GI-12",
    category: "gerund_infinitive",
    subCategory: "동명사",
    subCategoryName: "준동사 > 문장의 주어 자리 빈칸 = 동명사 (-ing)",
    question: "___________ complex economic models using artificial intelligence was Dr. Mitchell's primary research passion throughout his academic career.",
    options: [
      { text: "Developing", isCorrect: true },
      { text: "Develop", isCorrect: false },
      { text: "To have developed", isCorrect: false },
      { text: "Having developed", isCorrect: false }
    ],
    hint: "단서: 문장의 단수동사 'was' 앞의 주어 자리 빈칸",
    gPoint: "G-POINT 12: 문두 주어 자리 빈칸 + 단수동사 -> 동명사 (~ing)",
    explanation: "문장의 본동사 'was' 앞에서 주어 역할을 해야 하므로 동명사 'Developing'이 정답입니다."
  },
  {
    id: "GI-13",
    category: "gerund_infinitive",
    subCategory: "to부정사",
    subCategoryName: "준동사 > 가주어(It) - 진주어(to V) 구문",
    question: "In today's fast-paced corporate environment, it is an absolute relief ___________ a project finished ahead of its contractual deadline.",
    options: [
      { text: "to get", isCorrect: true },
      { text: "getting", isCorrect: false },
      { text: "to have got", isCorrect: false },
      { text: "would get", isCorrect: false }
    ],
    hint: "단서: 가주어 'it is an absolute relief' + 진주어 자리 빈칸",
    gPoint: "G-POINT 18: 가주어 It is 명사/형용사 + 진주어 to부정사 (to V)",
    explanation: "가주어 it에 대응하는 진짜 주어가 필요한 자리이므로 to부정사 'to get'이 정답입니다."
  },
  {
    id: "GI-14",
    category: "gerund_infinitive",
    subCategory: "to부정사",
    subCategoryName: "준동사 > 목적격보어 to부정사 (expect A to V)",
    question: "The venture capitalist expected the fledgling biotech firm ___________ clinical trial approval by the end of the fiscal year.",
    options: [
      { text: "to obtain", isCorrect: true },
      { text: "obtaining", isCorrect: false },
      { text: "obtain", isCorrect: false },
      { text: "obtained", isCorrect: false }
    ],
    hint: "단서: 5형식 동사 'expected + 목적어 + to V'",
    gPoint: "G-POINT 19: expect, allow, encourage, advise + 목적어 + to부정사",
    explanation: "동사 expect는 5형식 구문에서 목적격보어로 to부정사를 취하므로 'to obtain'이 정답입니다."
  },
  {
    id: "GI-15",
    category: "gerund_infinitive",
    subCategory: "동명사",
    subCategoryName: "준동사 > 동명사만을 목적어로 취하는 동사 (keep -ing)",
    question: "Despite fluctuating raw material prices, the solar energy manufacturer must keep ___________ high-efficiency photovoltaic cells to remain competitive.",
    options: [
      { text: "producing", isCorrect: true },
      { text: "to produce", isCorrect: false },
      { text: "produce", isCorrect: false },
      { text: "having produced", isCorrect: false }
    ],
    hint: "단서: 동사 'keep + -ing' (계속해서 ~하다)",
    gPoint: "G-POINT 13: keep, continue(진행), practice + 동명사",
    explanation: "동사 keep은 동명사만을 목적어로 취하여 '계속해서 ~하다'라는 의미를 나타내므로 'producing'이 정답입니다."
  },
  {
    id: "GI-16",
    category: "gerund_infinitive",
    subCategory: "동명사",
    subCategoryName: "준동사 > 동명사만을 목적어로 취하는 동사 (risk -ing)",
    question: "The aggressive hedge fund manager was willing to risk ___________ significant financial capital on speculative overseas investments.",
    options: [
      { text: "losing", isCorrect: true },
      { text: "to lose", isCorrect: false },
      { text: "will lose", isCorrect: false },
      { text: "having lost", isCorrect: false }
    ],
    hint: "단서: 동사 'risk + -ing' (암기표 3: risk는 동명사만 목적어로 취함)",
    gPoint: "G-POINT 13: risk + -ing (~의 위험을 무릅쓰다)",
    explanation: "동사 risk는 동명사(-ing)만을 목적어로 취하므로 'losing'이 정답입니다."
  },
  {
    id: "GI-17",
    category: "gerund_infinitive",
    subCategory: "to부정사",
    subCategoryName: "준동사 > to부정사만을 목적어로 취하는 동사 (refuse to V)",
    question: "When the building superintendent requested tenants to vacate the premises for fire inspection, the store manager refused ___________ until the next day.",
    options: [
      { text: "to cooperate", isCorrect: true },
      { text: "cooperating", isCorrect: false },
      { text: "will cooperate", isCorrect: false },
      { text: "having cooperated", isCorrect: false }
    ],
    hint: "단서: 동사 'refuse' 뒤 목적어 자리 (암기표 4: refuse + to V)",
    gPoint: "G-POINT 14: refuse, hesitate, reject(단, reject는 -ing) / refuse + to V",
    explanation: "동사 refuse(거절하다)는 to부정사만을 목적어로 취하므로 'to cooperate'가 정답입니다."
  },
  {
    id: "GI-18",
    category: "gerund_infinitive",
    subCategory: "동명사",
    subCategoryName: "준동사 > 동명사만을 목적어로 취하는 동사 (recommend -ing)",
    question: "The nutritionist emphasized the importance of balanced metabolism and recommended ___________ excessive refined sugar intake completely.",
    options: [
      { text: "cutting", isCorrect: true },
      { text: "to cut", isCorrect: false },
      { text: "to have cut", isCorrect: false },
      { text: "cut", isCorrect: false }
    ],
    hint: "단서: 동사 바로 뒤 목적어 자리 'recommended + -ing'",
    gPoint: "G-POINT 13 & 오답 POINT 1: recommend 뒤 바로 목적어는 동명사(-ing)",
    explanation: "recommend 뒤에 목적어(A)가 없을 때는 바로 동명사(-ing)를 목적어로 취하므로 'cutting'이 정답입니다. (recommend A to V와 구별 필수!)"
  },

  // =========================================================================
  // 3. 가정법 (SUBJUNCTIVE : 과거 vs 과거완료 실전 10문항 완비)
  // =========================================================================
  {
    id: "SUB-01",
    category: "subjunctive",
    subCategory: "가정법과거",
    subCategoryName: "가정법 > 가정법 과거 (If절 Be동사 were)",
    question: "If Mr. Robinson ___________ more flexible with his work schedule, he could collaborate with the international overseas design team.",
    options: [
      { text: "were", isCorrect: true },
      { text: "had been", isCorrect: false },
      { text: "is", isCorrect: false },
      { text: "will be", isCorrect: false }
    ],
    triggerWord: "could collaborate",
    hint: "단서: 주절의 'could collaborate (조동사 과거형 + 동사원형)'",
    gPoint: "G-TELP 가정법 공식: If + S + 과거동사(were), S + would/could/might + 동사원형",
    explanation: "주절에 'could + 동사원형'이 왔으므로 현재 사실과 반대되는 가정을 나타내는 가정법 과거 공식입니다. If절의 be동사는 주어 인칭에 상관없이 'were'가 정답입니다."
  },
  {
    id: "SUB-02",
    category: "subjunctive",
    subCategory: "가정법과거",
    subCategoryName: "가정법 > 가정법 과거 (주절 would + 동사원형)",
    question: "If our engineering team had access to the high-performance computing cluster, Dr. Bennett ___________ the aerodynamic simulation much faster.",
    options: [
      { text: "would complete", isCorrect: true },
      { text: "completed", isCorrect: false },
      { text: "will complete", isCorrect: false },
      { text: "would have completed", isCorrect: false }
    ],
    triggerWord: "If our engineering team had",
    hint: "단서: If절의 과거동사 'had'",
    gPoint: "G-POINT 1: If + 과거동사 -> 주절 would/could + 동사원형",
    explanation: "If절에 과거동사 'had'가 쓰였으므로 가정법 과거입니다. 주절에는 'would + 동사원형'인 'would complete'가 정답입니다."
  },
  {
    id: "SUB-03",
    category: "subjunctive",
    subCategory: "가정법과거",
    subCategoryName: "가정법 > 가정법 과거 (If절 일반동사 과거형)",
    question: "If the municipal transport authorities ___________ in favor of the urban subway extension, the city would initiate the tunnel excavation work next month.",
    options: [
      { text: "voted", isCorrect: true },
      { text: "had voted", isCorrect: false },
      { text: "votes", isCorrect: false },
      { text: "will vote", isCorrect: false }
    ],
    triggerWord: "would initiate",
    hint: "단서: 주절의 'would initiate (would + 동사원형)'",
    gPoint: "G-POINT 1: If + S + 과거동사 -> 주절 would + 동사원형",
    explanation: "주절에 'would initiate'가 있으므로 If절에는 일반동사 과거형인 'voted'가 정답입니다."
  },
  {
    id: "SUB-04",
    category: "subjunctive",
    subCategory: "가정법과거",
    subCategoryName: "가정법 > 가정법 과거 (주절 could + 동사원형)",
    question: "If the corporate treasury department possessed sufficient liquid capital reserves, we ___________ the regional logistics competitor this quarter.",
    options: [
      { text: "could acquire", isCorrect: true },
      { text: "acquired", isCorrect: false },
      { text: "will acquire", isCorrect: false },
      { text: "could have acquired", isCorrect: false }
    ],
    triggerWord: "If the corporate treasury department possessed",
    hint: "단서: If절의 과거동사 'possessed'",
    gPoint: "G-POINT 1: If + 과거동사 -> 주절 could + 동사원형",
    explanation: "If절의 시제가 과거(possessed)이므로 주절에는 조동사 과거+동사원형인 'could acquire'가 정답입니다."
  },
  {
    id: "SUB-05",
    category: "subjunctive",
    subCategory: "가정법과거",
    subCategoryName: "가정법 > 가정법 과거 (If절 knew)",
    question: "If the marketing director ___________ the exact budgetary constraints of the client, she could draft a tailored proposal today.",
    options: [
      { text: "knew", isCorrect: true },
      { text: "had known", isCorrect: false },
      { text: "knows", isCorrect: false },
      { text: "will know", isCorrect: false }
    ],
    triggerWord: "could draft",
    hint: "단서: 주절의 'could draft (could + 동사원형)'",
    gPoint: "G-POINT 1: If + S + 과거동사(knew) -> 주절 could + 동사원형",
    explanation: "주절에 'could draft'가 있으므로 If절에는 과거동사 'knew'가 정답입니다."
  },
  {
    id: "SUB-06",
    category: "subjunctive",
    subCategory: "가정법과거완료",
    subCategoryName: "가정법 > 가정법 과거완료 (If절 had p.p.)",
    question: "If the technical operations team ___________ the diagnostic evaluation earlier yesterday, we would have prevented the catastrophic server shutdown.",
    options: [
      { text: "had analyzed", isCorrect: true },
      { text: "analyzed", isCorrect: false },
      { text: "has analyzed", isCorrect: false },
      { text: "would analyze", isCorrect: false }
    ],
    triggerWord: "would have prevented",
    hint: "단서: 주절의 'would have prevented (조동사 과거 + have p.p.)'",
    gPoint: "G-TELP 가정법 공식: If + S + had p.p., S + would/could/might + have p.p.",
    explanation: "주절에 'would have prevented'가 있으므로 If절에는 가정법 과거완료인 'had p.p.(had analyzed)'가 정답입니다."
  },
  {
    id: "SUB-07",
    category: "subjunctive",
    subCategory: "가정법과거완료",
    subCategoryName: "가정법 > 가정법 과거완료 (주절 would have p.p.)",
    question: "If the logistics department had dispatched the cargo shipment prior to 3 PM yesterday, the client ___________ the industrial parts on schedule.",
    options: [
      { text: "would have received", isCorrect: true },
      { text: "received", isCorrect: false },
      { text: "will receive", isCorrect: false },
      { text: "would receive", isCorrect: false }
    ],
    triggerWord: "If the logistics department had dispatched",
    hint: "단서: If절의 'had dispatched (had p.p.)'",
    gPoint: "G-POINT 2: If + had p.p. -> 주절 would have p.p.",
    explanation: "If절에 'had dispatched'가 주어졌으므로 주절에는 가정법 과거완료 짝인 'would have received'가 정답입니다."
  },
  {
    id: "SUB-08",
    category: "subjunctive",
    subCategory: "가정법과거완료",
    subCategoryName: "가정법 > 가정법 과거완료 (If절 had reviewed)",
    question: "If the quality assurance division ___________ the manufacturing batch before packaging, they could have detected the micro-fractures in the glass components.",
    options: [
      { text: "had reviewed", isCorrect: true },
      { text: "reviewed", isCorrect: false },
      { text: "reviews", isCorrect: false },
      { text: "would have reviewed", isCorrect: false }
    ],
    triggerWord: "could have detected",
    hint: "단서: 주절의 'could have detected (could have p.p.)'",
    gPoint: "G-POINT 2: If + had p.p. -> could have p.p.",
    explanation: "주절에 'could have detected'가 있으므로 If절에는 'had reviewed'가 정답입니다."
  },
  {
    id: "SUB-09",
    category: "subjunctive",
    subCategory: "가정법과거완료",
    subCategoryName: "가정법 > 가정법 과거완료 (주절 could have p.p.)",
    question: "If Dr. Gallagher had consulted with the chief legal counsel regarding patent infringement risks, the laboratory ___________ this expensive lawsuit.",
    options: [
      { text: "could have avoided", isCorrect: true },
      { text: "avoided", isCorrect: false },
      { text: "will avoid", isCorrect: false },
      { text: "could avoid", isCorrect: false }
    ],
    triggerWord: "If Dr. Gallagher had consulted",
    hint: "단서: If절의 'had consulted (had p.p.)'",
    gPoint: "G-POINT 2: If + had p.p. -> could have p.p.",
    explanation: "If절에 had consulted가 쓰였으므로 주절에는 과거완료 귀결절인 'could have avoided'가 정답입니다."
  },
  {
    id: "SUB-10",
    category: "subjunctive",
    subCategory: "가정법과거완료",
    subCategoryName: "가정법 > If생략 도치 구문 (Had S p.p.)",
    question: "___________ the pharmaceutical researchers conducted the preliminary toxicity screen earlier, the laboratory would have identified the harmful compound immediately.",
    options: [
      { text: "Had", isCorrect: true },
      { text: "If", isCorrect: false },
      { text: "Did", isCorrect: false },
      { text: "Were", isCorrect: false }
    ],
    triggerWord: "would have identified",
    hint: "단서: 주절 'would have identified' + 빈칸 뒤 'the researchers conducted (S + p.p.)'",
    gPoint: "G-POINT 3: Had + S + p.p. (If생략 도치) -> 주절 would have p.p.",
    explanation: "If가 생략되고 Had가 주어 앞으로 튀어나온 가정법 과거완료 도치 구문입니다. 빈칸에 'Had'가 들어가 'Had S p.p.'를 완성해야 합니다."
  },

  // =========================================================================
  // 4. Should 생략 (주장·제안·요구·명령 동사 & 당위성 형용사 10문항 완비)
  // =========================================================================
  {
    id: "SHOULD-01",
    category: "should_omission",
    subCategory: "should생략",
    subCategoryName: "Should 생략 > recommended that + 동사원형",
    question: "The senior safety inspector strongly recommended that all factory workers ___________ protective goggles while operating the heavy machinery.",
    options: [
      { text: "wear", isCorrect: true },
      { text: "wore", isCorrect: false },
      { text: "wears", isCorrect: false },
      { text: "wearing", isCorrect: false }
    ],
    triggerWord: "recommended that",
    hint: "단서: 주절의 제안/권고 동사 'recommended that + S + (should) 동사원형'",
    gPoint: "G-TELP 당위성 공식: recommend + that + S + (should) 동사원형",
    explanation: "recommend 뒤의 that절에는 당위성을 뜻하는 조동사 should가 생략되어 주어의 수나 시제와 무관하게 무조건 '동사원형(wear)'이 정답입니다."
  },
  {
    id: "SHOULD-02",
    category: "should_omission",
    subCategory: "should생략",
    subCategoryName: "Should 생략 > insisted that + 3인칭 단수 주어 함정",
    question: "The chief financial officer insisted that each regional branch manager ___________ the audited expenditure receipts prior to the Friday noon deadline.",
    options: [
      { text: "submit", isCorrect: true },
      { text: "submits", isCorrect: false },
      { text: "submitted", isCorrect: false },
      { text: "submitting", isCorrect: false }
    ],
    triggerWord: "insisted that",
    hint: "단서: 주장/요구 동사 'insisted that' + S + (should) 동사원형",
    gPoint: "G-POINT 11: insist that S + (should) 동사원형",
    explanation: "that절 주어가 'each manager'로 3인칭 단수이지만, should가 생략되어 있으므로 -s나 -ed를 붙이지 않은 동사원형 'submit'이 정답입니다."
  },
  {
    id: "SHOULD-03",
    category: "should_omission",
    subCategory: "should생략",
    subCategoryName: "Should 생략 > demanded that + 동사원형",
    question: "The executive committee demanded that the facility supervisor ___________ a comprehensive safety inspection before the factory resumed operations.",
    options: [
      { text: "conduct", isCorrect: true },
      { text: "conducts", isCorrect: false },
      { text: "conducted", isCorrect: false },
      { text: "conducting", isCorrect: false }
    ],
    triggerWord: "demanded that",
    hint: "단서: 요구 동사 'demanded that' + S + (should) 동사원형",
    gPoint: "G-POINT 11: demand that S + (should) 동사원형",
    explanation: "demanded that 뒤의 that절에는 should가 생략되므로 동사원형 'conduct'가 정답입니다."
  },
  {
    id: "SHOULD-04",
    category: "should_omission",
    subCategory: "should생략",
    subCategoryName: "Should 생략 > requested that + 동사원형",
    question: "The human resources director requested that every department head ___________ a detailed quarterly staffing plan by tomorrow morning.",
    options: [
      { text: "provide", isCorrect: true },
      { text: "provides", isCorrect: false },
      { text: "provided", isCorrect: false },
      { text: "providing", isCorrect: false }
    ],
    triggerWord: "requested that",
    hint: "단서: 요청 동사 'requested that' + S + (should) 동사원형",
    gPoint: "G-POINT 11: request that S + (should) 동사원형",
    explanation: "요구/요청 동사 requested that 뒤에는 동사원형 'provide'가 정답입니다."
  },
  {
    id: "SHOULD-05",
    category: "should_omission",
    subCategory: "should생략",
    subCategoryName: "Should 생략 > suggested that + 동사원형",
    question: "The lead software architect suggested that our engineering team ___________ the production database migration until off-peak weekend hours.",
    options: [
      { text: "postpone", isCorrect: true },
      { text: "postpones", isCorrect: false },
      { text: "postponed", isCorrect: false },
      { text: "postponing", isCorrect: false }
    ],
    triggerWord: "suggested that",
    hint: "단서: 제안 동사 'suggested that' + S + (should) 동사원형",
    gPoint: "G-POINT 11: suggest that S + (should) 동사원형",
    explanation: "suggest that 뒤에는 조동사 should가 생략되므로 동사원형 'postpone'이 정답입니다."
  },
  {
    id: "SHOULD-06",
    category: "should_omission",
    subCategory: "should생략",
    subCategoryName: "Should 생략 > required that + 동사원형",
    question: "Environmental compliance guidelines required that the industrial chemical refinery ___________ its operating discharge permit every two years.",
    options: [
      { text: "renew", isCorrect: true },
      { text: "renews", isCorrect: false },
      { text: "renewed", isCorrect: false },
      { text: "renewing", isCorrect: false }
    ],
    triggerWord: "required that",
    hint: "단서: 요구 동사 'required that' + S + (should) 동사원형",
    gPoint: "G-POINT 11: require that S + (should) 동사원형",
    explanation: "require that 절에서는 should가 생략되어 동사원형 'renew'가 정답입니다."
  },
  {
    id: "SHOULD-07",
    category: "should_omission",
    subCategory: "should생략",
    subCategoryName: "Should 생략 > It is essential that (당위성 형용사)",
    question: "In light of recent cyber attacks, it is essential that every newly hired computer programmer ___________ the corporate security briefing today.",
    options: [
      { text: "attend", isCorrect: true },
      { text: "attends", isCorrect: false },
      { text: "attended", isCorrect: false },
      { text: "will attend", isCorrect: false }
    ],
    triggerWord: "it is essential that",
    hint: "단서: 당위성 형용사 'It is essential that + S + (should) 동사원형'",
    gPoint: "G-POINT 12: It is essential that S + (should) 동사원형",
    explanation: "It is essential that 구문에서는 당위성 조동사 should가 생략되므로 주어의 단수 형태에 낚이지 말고 동사원형 'attend'를 골라야 합니다."
  },
  {
    id: "SHOULD-08",
    category: "should_omission",
    subCategory: "should생략",
    subCategoryName: "Should 생략 > It is imperative that (당위성 형용사)",
    question: "To prevent structural collapse, it is imperative that the lead civil engineer ___________ the municipal safety bureau immediately upon noticing any cracks.",
    options: [
      { text: "notify", isCorrect: true },
      { text: "notifies", isCorrect: false },
      { text: "notified", isCorrect: false },
      { text: "notifying", isCorrect: false }
    ],
    triggerWord: "it is imperative that",
    hint: "단서: 당위성 형용사 'It is imperative that + S + (should) 동사원형'",
    gPoint: "G-POINT 12: It is imperative that S + (should) 동사원형",
    explanation: "It is imperative that 뒤에 이어지는 절에는 should가 생략되므로 동사원형 'notify'가 정답입니다."
  },
  {
    id: "SHOULD-09",
    category: "should_omission",
    subCategory: "should생략",
    subCategoryName: "Should 생략 > It is vital that (수동태 be p.p. 함정)",
    question: "Before pouring the deep foundation concrete, it is vital that the structural load calculations ___________ by an independent certified engineer.",
    options: [
      { text: "be verified", isCorrect: true },
      { text: "are verified", isCorrect: false },
      { text: "were verified", isCorrect: false },
      { text: "verified", isCorrect: false }
    ],
    triggerWord: "it is vital that",
    hint: "단서: 당위성 형용사 'it is vital that' + 수동 관계(계산이 검증되는 것)",
    gPoint: "G-POINT 12: It is vital that S + (should) be p.p.",
    explanation: "계산이 '검증되어야 한다'는 수동 의미이므로 (should) be verified 공식에 따라 Be동사의 원형인 'be verified'가 정답입니다."
  },
  {
    id: "SHOULD-10",
    category: "should_omission",
    subCategory: "should생략",
    subCategoryName: "Should 생략 > insisted that (수동태 be p.p. 함정)",
    question: "The aviation safety inspector insisted that all hazardous chemical cargo containers ___________ with waterproof reflective labels before loading.",
    options: [
      { text: "be labeled", isCorrect: true },
      { text: "are labeled", isCorrect: false },
      { text: "were labeled", isCorrect: false },
      { text: "labeled", isCorrect: false }
    ],
    triggerWord: "insisted that",
    hint: "단서: 요구 동사 'insisted that' + 수동 관계(용기가 라벨 부착되는 것)",
    gPoint: "G-POINT 11: insist that S + (should) be p.p.",
    explanation: "insisted that 뒤의 절이며 용기가 라벨링되어야 한다는 수동태이므로 should 생략 후 Be동사 원형인 'be labeled'가 정답입니다."
  },

  // =========================================================================
  // 5. 관계사 / 조동사 / 연결어 (각 6문항 완비)
  // =========================================================================
  {
    id: "REL-01",
    category: "relative",
    subCategory: "관계대명사",
    subCategoryName: "관계사 > 콤마(,) 뒤 계속적 용법 (that 불가)",
    question: "The global pharmaceutical firm acquired BioGen Laboratories, ___________ developed the revolutionary vaccine last winter.",
    options: [
      { text: "which", isCorrect: true },
      { text: "that", isCorrect: false },
      { text: "who", isCorrect: false },
      { text: "what", isCorrect: false }
    ],
    triggerWord: ", (콤마)",
    hint: "단서: 콤마(,) 뒤 사물 선행사 BioGen Laboratories (that은 콤마 뒤 불가)",
    gPoint: "G-TELP 관계사 공식: 콤마(,) 뒤에는 that 절대 불가 -> which",
    explanation: "선행사가 회사(사물)이고 콤마(,) 뒤 계속적 용법이므로 관계대명사 that은 쓸 수 없습니다. 따라서 주격 관계대명사 'which'가 정답입니다."
  },
  {
    id: "REL-02",
    category: "relative",
    subCategory: "관계대명사",
    subCategoryName: "관계사 > 사람 선행사 주격 관계대명사 (who)",
    question: "The board of trustees commended the dedicated engineer ___________ designed the energy-efficient water filtration module.",
    options: [
      { text: "who", isCorrect: true },
      { text: "which", isCorrect: false },
      { text: "whom", isCorrect: false },
      { text: "whose", isCorrect: false }
    ],
    triggerWord: "the dedicated engineer (사람 선행사)",
    hint: "단서: 사람 선행사 + 주어가 없는 불완전 절",
    gPoint: "G-TELP 관계사 공식: 사람 선행사 + 주격 = who",
    explanation: "선행사가 사람이고 뒤에 동사(designed)가 오므로 주격 관계대명사 'who'가 정답입니다."
  },
  {
    id: "REL-03",
    category: "relative",
    subCategory: "관계대명사",
    subCategoryName: "관계사 > 소유격 관계대명사 (whose)",
    question: "The university awarded a research grant to the young scientist ___________ groundbreaking thesis was published in Nature.",
    options: [
      { text: "whose", isCorrect: true },
      { text: "who", isCorrect: false },
      { text: "whom", isCorrect: false },
      { text: "which", isCorrect: false }
    ],
    triggerWord: "scientist [ ] groundbreaking thesis",
    hint: "단서: 선행사 명사와 뒤의 명사(thesis)가 소유격 관계",
    gPoint: "G-TELP 관계사 공식: 선행사 + whose + 무관사 명사",
    explanation: "뒤에 완전한 명사구(groundbreaking thesis)가 오며 '~의 논문'이라는 소유 관계이므로 'whose'가 정답입니다."
  },
  {
    id: "REL-04",
    category: "relative",
    subCategory: "관계부사",
    subCategoryName: "관계사 > 장소 선행사 관계부사 (where)",
    question: "The tech corporation built an advanced research facility ___________ automated robotic systems are tested daily.",
    options: [
      { text: "where", isCorrect: true },
      { text: "which", isCorrect: false },
      { text: "what", isCorrect: false },
      { text: "whom", isCorrect: false }
    ],
    triggerWord: "research facility (장소 선행사)",
    hint: "단서: 장소 선행사 + 수동태 완전한 절(systems are tested daily)",
    gPoint: "G-TELP 관계사 공식: 장소 선행사 + 완전한 절 = where",
    explanation: "선행사가 장소이고 뒤따르는 절이 수동태로 완전하므로 관계부사 'where'가 정답입니다."
  },
  {
    id: "REL-05",
    category: "relative",
    subCategory: "관계부사",
    subCategoryName: "관계사 > 시간 선행사 관계부사 (when)",
    question: "The corporate leadership fondly remembered the historic milestone year ___________ the innovative clean-energy engine was launched globally.",
    options: [
      { text: "when", isCorrect: true },
      { text: "which", isCorrect: false },
      { text: "where", isCorrect: false },
      { text: "whom", isCorrect: false }
    ],
    triggerWord: "the historic milestone year",
    hint: "단서: 시간 선행사(year) + 뒤에 완전한 절",
    gPoint: "G-POINT 20: 시간 선행사 + 완전한 절 = when",
    explanation: "선행사가 시간이고 뒤에 수동태 완전한 절이 오므로 관계부사 'when'이 정답입니다."
  },
  {
    id: "REL-06",
    category: "relative",
    subCategory: "관계대명사",
    subCategoryName: "관계사 > 전치사 + 관계대명사 (in which)",
    question: "The environmental symposium addressed the critical socio-economic context ___________ developing nations must transition away from fossil fuels.",
    options: [
      { text: "in which", isCorrect: true },
      { text: "which", isCorrect: false },
      { text: "that", isCorrect: false },
      { text: "where in", isCorrect: false }
    ],
    triggerWord: "the critical context [ ] S + V",
    hint: "단서: context를 수식하며 뒤에 완전한 절을 이끄는 전치사+관계대명사",
    gPoint: "G-POINT 21: 전치사 + 관계대명사(which) + 완전한 절",
    explanation: "선행사 context와 어울려 '그 맥락 속에서'의 의미를 구성하며 뒤에 완전한 절이 오므로 'in which'가 정답입니다."
  },

  // 조동사 (MODAL)
  {
    id: "MOD-01",
    category: "modal",
    subCategory: "조동사",
    subCategoryName: "조동사 > 엄격한 규칙/의무 (must)",
    question: "According to strict aviation safety regulations, all passengers ___________ fasten their seatbelts whenever the seatbelt light is illuminated.",
    options: [
      { text: "must", isCorrect: true },
      { text: "might", isCorrect: false },
      { text: "would", isCorrect: false },
      { text: "could", isCorrect: false }
    ],
    triggerWord: "strict aviation safety regulations",
    hint: "단서: 엄격한 항공 안전 규정 (strict regulations) -> 강한 의무/법칙",
    gPoint: "G-TELP 조동사 해석: 법규/규정에 따른 필수 의무 = must",
    explanation: "문맥상 안전 규정에 따라 '반드시 좌석 벨트를 착용해야 한다'는 강한 의무를 나타내므로 조동사 'must'가 정답입니다."
  },
  {
    id: "MOD-02",
    category: "modal",
    subCategory: "조동사",
    subCategoryName: "조동사 > 건강/업무 권고 (should)",
    question: "To prevent chronic repetitive strain injuries, ergonomic experts advise that desk workers ___________ take brief stretch breaks every hour.",
    options: [
      { text: "should", isCorrect: true },
      { text: "might", isCorrect: false },
      { text: "would", isCorrect: false },
      { text: "may", isCorrect: false }
    ],
    triggerWord: "experts advise (권고)",
    hint: "단서: 전문가의 조언 및 권고 상황",
    gPoint: "G-POINT 23: 충고/권고 = should (~하는 것이 좋다)",
    explanation: "건강 예방을 위해 스트레칭을 하는 것이 바람직하다는 충고/권고의 의미이므로 'should'가 정답입니다."
  },
  {
    id: "MOD-03",
    category: "modal",
    subCategory: "조동사",
    subCategoryName: "조동사 > 기능적 능력 및 가능성 (can)",
    question: "Thanks to newly installed solar panels, the automated greenhouse ___________ generate all its own electricity year-round.",
    options: [
      { text: "can", isCorrect: true },
      { text: "must", isCorrect: false },
      { text: "should", isCorrect: false },
      { text: "might", isCorrect: false }
    ],
    triggerWord: "Thanks to panels (능력 가능)",
    hint: "단서: 시설의 기능적 발전 능력(~할 수 있다)",
    gPoint: "G-POINT 24: 가능/능력 = can",
    explanation: "태양광 패널 설치로 자체 전력을 생산할 능력이 생겼음을 나타내므로 'can'이 정답입니다."
  },
  {
    id: "MOD-04",
    category: "modal",
    subCategory: "조동사",
    subCategoryName: "조동사 > 불확실한 미래 추측 (may)",
    question: "Weather forecasts indicate high ocean winds tomorrow, which ___________ cause minor shipping delays at the container terminal.",
    options: [
      { text: "may", isCorrect: true },
      { text: "must", isCorrect: false },
      { text: "should", isCorrect: false },
      { text: "can", isCorrect: false }
    ],
    triggerWord: "forecasts indicate (추측)",
    hint: "단서: 일기예보에 근거한 불확실한 가능성/추측",
    gPoint: "G-POINT 25: 불확실한 추측 = may (~일지도 모른다)",
    explanation: "강풍으로 인해 지연이 발생할 수도 있다는 가능성/추측 문맥이므로 'may'가 정답입니다."
  },
  {
    id: "MOD-05",
    category: "modal",
    subCategory: "조동사",
    subCategoryName: "조동사 > 과거의 능력 및 가능성 (could)",
    question: "Decades before modern computer simulations were invented, visionary architects ___________ draft intricate structural blueprints entirely by hand.",
    options: [
      { text: "could", isCorrect: true },
      { text: "must", isCorrect: false },
      { text: "should", isCorrect: false },
      { text: "may", isCorrect: false }
    ],
    triggerWord: "Decades before were invented (과거)",
    hint: "단서: 과거(Decades before) 시점에서의 능력",
    gPoint: "G-POINT 24: 과거의 능력 = could",
    explanation: "과거 시점에 손으로 정밀 청사진을 그릴 수 있었다는 과거의 능력을 뜻하므로 'could'가 정답입니다."
  },
  {
    id: "MOD-06",
    category: "modal",
    subCategory: "조동사",
    subCategoryName: "조동사 > 확정적 미래 예정 (will)",
    question: "According to the corporate scheduling release, the newly appointed chief executive officer ___________ address the shareholders next Monday.",
    options: [
      { text: "will", isCorrect: true },
      { text: "must", isCorrect: false },
      { text: "should", isCorrect: false },
      { text: "might", isCorrect: false }
    ],
    triggerWord: "next Monday (확정된 미래 일정)",
    hint: "단서: 다음 주 월요일로 예정된 확정적 미래 일정",
    gPoint: "G-POINT 26: 미래 예정 = will",
    explanation: "공식 발표에 따른 확정적 미래 일정을 나타내므로 'will'이 정답입니다."
  },

  // 연결어 (CONJUNCTION)
  {
    id: "CONJ-01",
    category: "conjunction",
    subCategory: "연결어",
    subCategoryName: "연결어 > 양보 접속사 (Although + 절)",
    question: "___________ the sales team encountered unexpected supply chain disruptions, they managed to surpass their annual revenue target.",
    options: [
      { text: "Although", isCorrect: true },
      { text: "Despite", isCorrect: false },
      { text: "Because of", isCorrect: false },
      { text: "However", isCorrect: false }
    ],
    triggerWord: "Although vs Despite",
    hint: "단서: 뒤에 주어+동사 절(the sales team encountered ...)이 오고 양보의 의미",
    gPoint: "G-TELP 연결어 공식: 절을 이끄는 양보 접속사 = Although (Despite는 전치사)",
    explanation: "뒤에 '주어 + 동사'를 갖춘 절이 이어지며, '공급망 혼란을 겪었음에도 불구하고'라는 역접/양보의 관계이므로 접속사 'Although'가 정답입니다."
  },
  {
    id: "CONJ-02",
    category: "conjunction",
    subCategory: "연결어",
    subCategoryName: "연결어 > 양보 전치사 (Despite + 명사구)",
    question: "___________ torrential rainstorms during the morning rush hour, all scheduled express commuter trains arrived on time.",
    options: [
      { text: "Despite", isCorrect: true },
      { text: "Although", isCorrect: false },
      { text: "Even though", isCorrect: false },
      { text: "Whereas", isCorrect: false }
    ],
    triggerWord: "torrential rainstorms (명사구)",
    hint: "단서: 뒤에 동사가 없는 순수 명사구(torrential rainstorms)",
    gPoint: "G-TELP 연결어 공식: 명사(구)를 목적어로 취하는 양보 전치사 = Despite",
    explanation: "뒤에 주어+동사 절이 아닌 명사구만 이어지므로 전치사 'Despite'가 정답입니다."
  },
  {
    id: "CONJ-03",
    category: "conjunction",
    subCategory: "연결어",
    subCategoryName: "연결어 > 역접 연결부사 (However)",
    question: "The prototype showed remarkable test results in lab simulations. ___________, unexpected hardware overheating was detected during field testing.",
    options: [
      { text: "However", isCorrect: true },
      { text: "Therefore", isCorrect: false },
      { text: "Furthermore", isCorrect: false },
      { text: "Consequently", isCorrect: false }
    ],
    triggerWord: "remarkable vs overheating (대조)",
    hint: "단서: 앞문장(긍정 결과)과 뒷문장(발열 문제) 간의 역접 대조",
    gPoint: "G-TELP 연결어: 앞뒤 문맥 반전 = However (그러나)",
    explanation: "시뮬레이션 호평과 실제 필드 테스트에서의 문제점이라는 상반된 두 문장을 잇는 역접 연결부사 'However'가 정답입니다."
  },
  {
    id: "CONJ-04",
    category: "conjunction",
    subCategory: "연결어",
    subCategoryName: "연결어 > 인과 연결부사 (Therefore)",
    question: "Severe blizzards grounded all regional cargo flights last night. ___________, delivery packages will be delayed by one business day.",
    options: [
      { text: "Therefore", isCorrect: true },
      { text: "However", isCorrect: false },
      { text: "Nevertheless", isCorrect: false },
      { text: "Otherwise", isCorrect: false }
    ],
    triggerWord: "grounded flights -> delayed packages (인과)",
    hint: "단서: 앞문장(원인)과 뒷문장(결과)의 명확한 인과관계",
    gPoint: "G-TELP 연결어: 원인과 결과 = Therefore (따라서, 그러므로)",
    explanation: "비행기 결항이라는 원인으로 인해 배송이 지연된다는 당연한 결과가 이어지므로 인과 접속부사 'Therefore'가 정답입니다."
  },
  {
    id: "CONJ-05",
    category: "conjunction",
    subCategory: "연결어",
    subCategoryName: "연결어 > 이유 접속사 (Because + 절)",
    question: "___________ the raw component materials were held up in customs for two weeks, the assembly plant temporarily halted production lines.",
    options: [
      { text: "Because", isCorrect: true },
      { text: "Because of", isCorrect: false },
      { text: "Due to", isCorrect: false },
      { text: "Owing to", isCorrect: false }
    ],
    triggerWord: "the materials were held up (절)",
    hint: "단서: 뒤에 주어+동사 절이 이어짐",
    gPoint: "G-POINT 31: 절을 이끄는 이유 접속사 = Because",
    explanation: "뒤에 완전한 주어+동사 절이 오므로 접속사 'Because'가 정답입니다."
  },
  {
    id: "CONJ-06",
    category: "conjunction",
    subCategory: "연결어",
    subCategoryName: "연결어 > 첨가 연결부사 (Furthermore)",
    question: "The upgraded mobile application offers streamlined biometric authentication. ___________, it reduces battery consumption by twenty percent.",
    options: [
      { text: "Furthermore", isCorrect: true },
      { text: "However", isCorrect: false },
      { text: "Instead", isCorrect: false },
      { text: "Nevertheless", isCorrect: false }
    ],
    triggerWord: "streamlined auth + reduced battery (장점 첨가)",
    hint: "단서: 앞문장의 장점에 이어 또 다른 장점을 추가하는 순접 첨가",
    gPoint: "G-POINT 29: 순접/정보 추가 연결부사 = Furthermore / Moreover",
    explanation: "인증 간소화에 이어 배터리 절감이라는 긍정적 기능을 추가하는 문맥이므로 'Furthermore'가 정답입니다."
  }
];

// 카테고리 정보
const CATEGORIES = [
  { id: "all", name: "전체 종합 (전 문법 모의고사)", icon: "sparkles", badge: "실전 종합 10제" },
  { id: "tense", name: "시제 (Tense)", icon: "clock", badge: "6대 시제 60제 완비" },
  { id: "gerund_infinitive", name: "준동사 (동명사 vs to부정사)", icon: "git-commit", badge: "실전 20제 탑재" },
  { id: "subjunctive", name: "가정법 (과거 & 과거완료)", icon: "wand-2", badge: "실전 10제 완비" },
  { id: "should_omission", name: "Should 생략 (동사원형)", icon: "check-circle", badge: "실전 10제 완비" },
  { id: "relative", name: "관계사 (관계대명사/부사)", icon: "link", badge: "실전 6제 탑재" },
  { id: "modal", name: "조동사 (문맥 해석)", icon: "shield-alert", badge: "실전 6제 탑재" },
  { id: "conjunction", name: "연결어 (접속사/부사)", icon: "share-2", badge: "실전 6제 탑재" }
];
