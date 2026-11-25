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
    subCategoryName: "관계사 > 콤마(,) 뒤 사물 계속적 용법 (that 불가 + 대명사 중복 오답)",
    question: "He had created great works of art, ___________ to the development of art history. So it's no wonder he is considered by many a great artist.",
    options: [
      { text: "which inspired artists and contributed greatly", isCorrect: true },
      { text: "that inspired artists and contributed greatly", isCorrect: false },
      { text: "who he inspired artists and contributed greatly", isCorrect: false },
      { text: "whose they inspired artists and contributed greatly", isCorrect: false }
    ],
    triggerWord: ", (콤마) + great works of art (사물 선행사)",
    hint: "단서: 콤마(,) 뒤 사물 선행사 (that은 콤마 뒤 불가, 대명사 he/they 중복 선지 오답)",
    gPoint: "G-POINT 23 & 25: 사물 선행사 + 콤마 뒤 that 불가 = which",
    explanation: "선행사가 사물 복수명사(great works of art)이고 콤마 뒤 계속적 용법이므로 that은 올 수 없습니다. 또한 절 내에 he나 they 대명사가 불필요하게 중복 삽입된 보기는 지텔프 전형적 오답 함정입니다."
  },
  {
    id: "REL-02",
    category: "relative",
    subCategory: "관계대명사",
    subCategoryName: "관계사 > 사람 선행사 주격 관계대명사 (who)",
    question: "According to a research, eight out of ten people ___________ responded they felt lonely, especially when they had some degree of uncertainty in their lives.",
    options: [
      { text: "who were looking for a job", isCorrect: true },
      { text: "whom they were looking for a job", isCorrect: false },
      { text: "when were looking for a job", isCorrect: false },
      { text: "where were looking for a job", isCorrect: false }
    ],
    triggerWord: "people (사람 선행사) + 주어 결여",
    hint: "단서: 사람 선행사(people) + 동사 were looking의 주어 역할 (whom they~ 대명사 중복 오답)",
    gPoint: "G-POINT 21: 사람 선행사 + 주어 없음 = who",
    explanation: "선행사가 사람(people)이고 뒤에 주어가 빠진 불완전한 절이 오므로 주격 관계대명사 who가 정답입니다. whom they~는 목적격 whom에 they가 중복 삽입되어 오답입니다."
  },
  {
    id: "REL-03",
    category: "relative",
    subCategory: "관계대명사",
    subCategoryName: "관계사 > 콤마 뒤 that 불가 + it 중복 오답 함정",
    question: "These days, there are many children suffering from smartphone addiction, ___________ but also cognitive and emotional development.",
    options: [
      { text: "which hinders not only physical development", isCorrect: true },
      { text: "that it hinders not only physical development", isCorrect: false },
      { text: "who hinders not only physical development", isCorrect: false },
      { text: "what it hinders not only physical development", isCorrect: false }
    ],
    triggerWord: ", (콤마) + smartphone addiction (사물 선행사)",
    hint: "단서: 콤마 뒤 that 불가! + it 대명사 중복 선지 즉시 소거!",
    gPoint: "G-POINT 23 & 25: 콤마 뒤 that 불가 + 대명사 중복 제거",
    explanation: "선행사가 사물(smartphone addiction)이고 콤마 뒤이므로 that은 불가하며, 대명사 it이 중복 삽입된 보기는 대표적 지텔프 오답 함정입니다. 따라서 which hinders...가 정답입니다."
  },
  {
    id: "REL-04",
    category: "relative",
    subCategory: "관계부사",
    subCategoryName: "관계사 > 장소 선행사 관계부사 (where)",
    question: "Tomorrow, Amy is going to go to the football stadium ___________ . Strict rules will be applied, which encourage players to play fair, thus satisfying spectators.",
    options: [
      { text: "where the final game will be held", isCorrect: true },
      { text: "when the final game will be held", isCorrect: false },
      { text: "who the final game will be held", isCorrect: false },
      { text: "what will hold the final game", isCorrect: false }
    ],
    triggerWord: "the football stadium (장소 선행사)",
    hint: "단서: 장소 선행사 + 수동태 완전한 절 (the final game will be held)",
    gPoint: "G-POINT 26: 장소 선행사 + 완전한 문장 = 관계부사 where",
    explanation: "선행사가 장소(stadium)이고 뒤에 주어+수동태 동사를 갖춘 완전한 절이 오므로 관계부사 where가 이끄는 절이 정답입니다."
  },
  {
    id: "REL-05",
    category: "relative",
    subCategory: "관계부사",
    subCategoryName: "관계사 > 시간 선행사 관계부사 (when)",
    question: "The release day of the last Avengers movie had been announced. Yesterday was the day ___________, but the movie tickets were sold out in no time.",
    options: [
      { text: "when people could book the movie ticket", isCorrect: true },
      { text: "where could book the movie ticket", isCorrect: false },
      { text: "which people could book the movie ticket", isCorrect: false },
      { text: "who could book the movie ticket", isCorrect: false }
    ],
    triggerWord: "the day (시간 선행사) + 완전한 절",
    hint: "단서: 시간 선행사(the day) + 주어(people)와 목적어(the ticket)를 모두 갖춘 완전한 절",
    gPoint: "G-POINT 26: 시간 선행사 + 완전한 문장 = 관계부사 when",
    explanation: "선행사가 시간(the day)이고 뒤에 주어+타동사+목적어가 완전하게 갖추어져 있으므로 관계부사 when이 정답입니다."
  },
  {
    id: "REL-06",
    category: "relative",
    subCategory: "관계대명사",
    subCategoryName: "관계사 > 소유격 관계대명사 (whose)",
    question: "Most infants acquire linguistic competence naturally through various stimuli. Because babies ___________ are exposed to rich verbal environments, it is beneficial.",
    options: [
      { text: "whose parents say a lot of words", isCorrect: true },
      { text: "who parents say a lot of words", isCorrect: false },
      { text: "which say a lot of words", isCorrect: false },
      { text: "whom parents say a lot of words", isCorrect: false }
    ],
    triggerWord: "babies [ ] parents (소유격 관계)",
    hint: "단서: 선행사(babies)와 뒤의 무관사 명사 주어(parents) 사이의 소유 관계(~의)",
    gPoint: "G-POINT 24: 선행사 + 소유 관계(~의) + 뒷문장 완전 = whose",
    explanation: "선행사 babies와 뒤의 명사 parents 사이에 '아기들의 부모'라는 소유 관계가 성립하고 뒷절이 완전하므로 소유격 관계대명사 whose가 정답입니다."
  },
  {
    id: "REL-07",
    category: "relative",
    subCategory: "관계대명사",
    subCategoryName: "관계사 > 사물 선행사 주격 관계대명사 (that)",
    question: "An international e-commerce platform ___________ is facing an existential crisis due to defective merchandise and fraudulent merchant accounts.",
    options: [
      { text: "that is the most popular in Southeast Asia", isCorrect: true },
      { text: "when it is the most popular in Southeast Asia", isCorrect: false },
      { text: "which it is the most popular in Southeast Asia", isCorrect: false },
      { text: "who is the most popular in Southeast Asia", isCorrect: false }
    ],
    triggerWord: "platform (사물 선행사) + is의 주어 결여",
    hint: "단서: 사물 선행사 + 주격 (which it~ 대명사 it 중복 오답 소거!)",
    gPoint: "G-POINT 23: 사물 선행사 + 주격 = that (대명사 it 중복 제거)",
    explanation: "선행사가 사물(platform)이고 뒤에 주어가 없는 불완전한 절이므로 that이 정답입니다. which it~은 선행사를 받는 it이 불필요하게 중복되어 지텔프 단골 오답입니다."
  },
  {
    id: "REL-08",
    category: "relative",
    subCategory: "관계대명사",
    subCategoryName: "관계사 > 사람 고유명사 콤마 계속적 용법 (who)",
    question: "Douglas, ___________, enjoyed reciting poems sometimes. He especially liked the poem titled 'Youth', which inspired many local listeners.",
    options: [
      { text: "who was an English teacher in Maryland", isCorrect: true },
      { text: "which an English teacher in Maryland was", isCorrect: false },
      { text: "where he was an English teacher in Maryland", isCorrect: false },
      { text: "whom he was an English teacher in Maryland", isCorrect: false }
    ],
    triggerWord: "Douglas (사람 이름) + 콤마 계속적 용법",
    hint: "단서: 사람 고유명사 선행사 + 주어가 비어있는 불완전한 절",
    gPoint: "G-POINT 21: 사람 선행사 + 주격 = who",
    explanation: "선행사가 사람 이름(Douglas)이며 동사 was 앞의 주어가 빠져 있으므로 주격 관계대명사 who가 정답입니다. which는 사물에 쓰이며, he가 중복 삽입된 보기는 오답입니다."
  },
  {
    id: "REL-09",
    category: "relative",
    subCategory: "관계대명사",
    subCategoryName: "관계사 > 장소 선행사 + 불완전 절 (관계부사 오답 함정)",
    question: "There are intense debates about cultural diversity. This is illustrated by ongoing controversy in some countries ___________ under traditional laws.",
    options: [
      { text: "that oppress women severely", isCorrect: true },
      { text: "which women oppress severely", isCorrect: false },
      { text: "where oppress women severely", isCorrect: false },
      { text: "when oppress women severely", isCorrect: false }
    ],
    triggerWord: "some countries (선행사) + oppress의 주어 결여",
    hint: "단서: 선행사가 국가(countries)이지만 뒤에 주어가 없는 '불완전한 절'이므로 where가 아닌 관계대명사 that 필요!",
    gPoint: "G-POINT 23: 불완전 절 -> 관계대명사 (where는 완전한 절에만 사용)",
    explanation: "선행사가 장소/국가(countries)처럼 보이지만, 뒤에 주어가 빠진 불완전한 절(동사 oppress...)이 오므로 관계부사 where는 절대 쓸 수 없고 관계대명사 that이 정답입니다."
  },
  {
    id: "REL-10",
    category: "relative",
    subCategory: "관계대명사",
    subCategoryName: "관계사 > those who 관용 구문 (사람 복수 선행사)",
    question: "The executive director announced that there would be immediate termination and legal action against those ___________ without official authorization.",
    options: [
      { text: "who stole confidential client documents", isCorrect: true },
      { text: "where they stole confidential client documents", isCorrect: false },
      { text: "which they stole confidential client documents", isCorrect: false },
      { text: "when stole confidential client documents", isCorrect: false }
    ],
    triggerWord: "those (~하는 사람들: 사람 복수 선행사)",
    hint: "단서: 'those who ~' (~하는 사람들) 필수 관용 표현 + they 중복 소거",
    gPoint: "G-POINT 21: those(사람들) + who + 동사",
    explanation: "'those who + 동사'는 '~하는 사람들'을 뜻하는 빈출 표현입니다. 선행사가 사람(those)이며 they가 중복된 보기는 오답이므로 'who stole...'가 정답입니다."
  },

  // 조동사 (MODAL) - 켈리쌤 G-POINT 27~31 및 3대 찐팁 반영
  {
    id: "MOD-01",
    category: "modal",
    subCategory: "조동사",
    subCategoryName: "조동사 > 동물 주어의 고유 생체 능력 (can)",
    question: "Chameleons possess specialized pigment cells in their skin layers, which means they ___________ rapidly alter their body colors to blend into foliage or deter predators.",
    options: [
      { text: "can", isCorrect: true },
      { text: "shall", isCorrect: false },
      { text: "must", isCorrect: false },
      { text: "should", isCorrect: false }
    ],
    triggerWord: "Chameleons (동물 주어) + 생체 능력",
    hint: "켈리 찐팁 2: 동물이 주어이고 고유한 신체/생체 능력을 나타낼 때는 'can'이 정답! (shall은 1초 컷 오답 소거)",
    gPoint: "G-POINT 27: 동물/생물의 선천적 신체 능력 = can",
    explanation: "주어가 동물(Chameleons)이고 주변 환경에 맞춰 피부색을 바꾸는 생체적 능력을 설명하므로 'can'이 정답입니다. 켈리쌤의 찐팁 1대로 shall은 오답 1순위로 즉시 소거됩니다."
  },
  {
    id: "MOD-02",
    category: "modal",
    subCategory: "조동사",
    subCategoryName: "조동사 > 보안 규정 준수 필수 의무 (in order to V + must)",
    question: "In order to safeguard classified laboratory records from cyber intrusions, all research staff members ___________ change their system security credentials every thirty days.",
    options: [
      { text: "must", isCorrect: true },
      { text: "shall", isCorrect: false },
      { text: "would", isCorrect: false },
      { text: "could", isCorrect: false }
    ],
    triggerWord: "In order to safeguard (목적) + 회사 보안 규정",
    hint: "켈리 찐팁 3: 'In order to V' 목적 구문 + 사내 규정의 외부 강제성 -> must",
    gPoint: "G-POINT 29: 무조건 해야 하는 의무 (의지 개입 불가, 외부 강제성) = must",
    explanation: "보안 침해를 막기 위하여(In order to safeguard) 연구원들이 반드시 따라야 하는 강제적 사내 규정이므로 must가 정답입니다. 개인의 의지가 개입될 수 없는 외부 강제 규정입니다."
  },
  {
    id: "MOD-03",
    category: "modal",
    subCategory: "조동사",
    subCategoryName: "조동사 > 건강 증진 권고 (To V + should)",
    question: "To prevent chronic repetitive eye strain while working on digital displays, ergonomic consultants recommend that office workers ___________ look at distant objects for twenty seconds every twenty minutes.",
    options: [
      { text: "should", isCorrect: true },
      { text: "shall", isCorrect: false },
      { text: "would", isCorrect: false },
      { text: "can", isCorrect: false }
    ],
    triggerWord: "To prevent eye strain (목적) + consultants recommend (권고)",
    hint: "켈리 찐팁 3: 'To V' 목적 + 전문가의 충고/권고 -> should",
    gPoint: "G-POINT 28: 충고, 권유, 도덕성 = should",
    explanation: "눈의 피로를 예방하기 위하여(To prevent...) 전문가가 권고하는 바람직한 행동 지침이므로 충고/권유의 조동사 should가 정답입니다."
  },
  {
    id: "MOD-04",
    category: "modal",
    subCategory: "조동사",
    subCategoryName: "조동사 > 기상 상황에 근거한 불확실한 추측 (may)",
    question: "Meteorological forecasts indicate severe ocean gale winds tomorrow, which ___________ cause minor shipping delays at the container terminal.",
    options: [
      { text: "may", isCorrect: true },
      { text: "shall", isCorrect: false },
      { text: "must", isCorrect: false },
      { text: "should", isCorrect: false }
    ],
    triggerWord: "forecasts indicate (불확실한 추측)",
    hint: "단서: 일기예보에 근거한 개연성 있는 약한 추측/불확실한 가능성 -> may",
    gPoint: "G-POINT 31: 약한 추측, 불확실한 가능성 = may",
    explanation: "강풍으로 인해 지연이 발생할 수도 있다는 가능성/추측 문맥이므로 may가 정답입니다. shall은 지텔프 대표적 오답 보기입니다."
  },
  {
    id: "MOD-05",
    category: "modal",
    subCategory: "조동사",
    subCategoryName: "조동사 > 과거의 능력 및 가능성 (could)",
    question: "Long before modern automated navigational radar was engineered, experienced oceanic navigators ___________ pinpoint their vessel coordinates using only celestial constellations.",
    options: [
      { text: "could", isCorrect: true },
      { text: "shall", isCorrect: false },
      { text: "should", isCorrect: false },
      { text: "must", isCorrect: false }
    ],
    triggerWord: "Long before was engineered (과거 시점)",
    hint: "단서: can의 과거 표현 (~할 수 있었다) -> could",
    gPoint: "G-POINT 27: 과거의 능력 = could",
    explanation: "현대식 레이더가 발명되기 훨씬 전(과거 시점) 항해사들이 별자리를 보고 배의 위치를 정확히 파악할 수 있었다는 과거의 능력을 나타내므로 could가 정답입니다."
  },
  {
    id: "MOD-06",
    category: "modal",
    subCategory: "조동사",
    subCategoryName: "조동사 > 공식 발표된 확실한 미래 일정 및 환불 약속 (will)",
    question: "The railway management officially announced that passengers whose departures were canceled due to electrical malfunction ___________ receive a full voucher reimbursement next Tuesday.",
    options: [
      { text: "will", isCorrect: true },
      { text: "shall", isCorrect: false },
      { text: "must", isCorrect: false },
      { text: "could", isCorrect: false }
    ],
    triggerWord: "next Tuesday (확실한 미래 일정) + 공식 약속",
    hint: "단서: 철도청 공식 발표에 따른 확정적 미래 일정 및 보상 약속 -> will",
    gPoint: "G-POINT 30: 미래에 있을 확실한 일, 의지 = will",
    explanation: "공식 발표에 의해 다음 주 화요일에 환불 바우처를 지급하겠다는 확실한 미래 일정과 약속을 나타내므로 will이 정답입니다."
  },
  {
    id: "MOD-07",
    category: "modal",
    subCategory: "조동사",
    subCategoryName: "조동사 > 동물 주어의 초음파 감각 능력 (can)",
    question: "Bats emit ultrasonic echolocation signals in rapid bursts, so they ___________ effortlessly navigate obstacle-filled caves and capture small insects in total darkness.",
    options: [
      { text: "can", isCorrect: true },
      { text: "shall", isCorrect: false },
      { text: "should", isCorrect: false },
      { text: "would", isCorrect: false }
    ],
    triggerWord: "Bats (동물 주어) + 초음파 탐지 능력",
    hint: "켈리 찐팁 2: 동물 주어의 초음파 야간 비행 및 사냥 능력 -> can",
    gPoint: "G-POINT 27: 생체적 능력/가능성 = can",
    explanation: "박쥐(Bats)가 초음파를 쏘아 어둠 속에서 장애물을 피하고 곤충을 잡을 수 있는 '생물학적 능력'을 나타내므로 can이 정답입니다."
  },
  {
    id: "MOD-08",
    category: "modal",
    subCategory: "조동사",
    subCategoryName: "조동사 > 교통 법규 준수 절대 의무 (must)",
    question: "According to national highway safety statutes, automobile operators ___________ yield the right-of-way immediately when an emergency siren approaches.",
    options: [
      { text: "must", isCorrect: true },
      { text: "shall", isCorrect: false },
      { text: "may", isCorrect: false },
      { text: "would", isCorrect: false }
    ],
    triggerWord: "According to statutes (법률/규정)",
    hint: "단서: 교통 법규에 따른 외부 강제성 (개인 의지 개입 불가능) -> must",
    gPoint: "G-POINT 29: 법률/규정에 의한 절대 의무 = must",
    explanation: "교통 안전 법규에 명시된 법적 의무이므로 개인의 선택이나 의지가 개입될 수 없는 강제 규정입니다. 따라서 must가 정답입니다."
  },
  {
    id: "MOD-09",
    category: "modal",
    subCategory: "조동사",
    subCategoryName: "조동사 > 과거의 정기적 습관 (would)",
    question: "During his retirement years by the scenic lake, the elderly painter ___________ set up his wooden easel at sunrise and sketch the misty shoreline for hours.",
    options: [
      { text: "would", isCorrect: true },
      { text: "shall", isCorrect: false },
      { text: "can", isCorrect: false },
      { text: "must", isCorrect: false }
    ],
    triggerWord: "During his retirement years (과거 시점) + 과거의 규칙적 습관",
    hint: "손글씨 메모: would의 과거의 습관 (~하곤 했다)",
    gPoint: "G-POINT 30: 과거의 습관 = would",
    explanation: "은퇴 시절 호숫가에서 아침마다 이젤을 펴고 스케치를 하곤 했다는 '과거의 규칙적인 습관'을 나타내므로 would가 정답입니다."
  },
  {
    id: "MOD-10",
    category: "modal",
    subCategory: "조동사",
    subCategoryName: "조동사 > 계약 체결 전 전문가 자문 권유 (should)",
    question: "Before signing an exclusive commercial partnership agreement, prospective enterprise owners ___________ review the liability provisions thoroughly with a licensed attorney.",
    options: [
      { text: "should", isCorrect: true },
      { text: "shall", isCorrect: false },
      { text: "may", isCorrect: false },
      { text: "can", isCorrect: false }
    ],
    triggerWord: "Before signing agreement (권유 문맥)",
    hint: "단서: 법적 분쟁 예방을 위해 변호사와 검토하는 것이 바람직하다는 충고/권고 -> should",
    gPoint: "G-POINT 28: 충고, 권유, 도덕성 = should",
    explanation: "계약서에 서명하기 전 변호사와 조항을 면밀히 검토하는 것이 바람직하다는 권유이므로 should가 정답입니다."
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
    gPoint: "G-POINT 33: 절을 이끄는 양보 접속사 = Although (Despite는 전치사)",
    explanation: "뒤에 '주어 + 동사'를 갖춘 절이 이어지며, '공급망 혼란을 겪었음에도 불구하고'라는 역접/양보의 관계이므로 접속사 'Although'가 정답입니다."
  },
  {
    id: "CONJ-02",
    category: "conjunction",
    subCategory: "연결어",
    subCategoryName: "연결어 > 양보 전치사 (Despite + 명사구)",
    question: "___________ torrential monsoon rainstorms and severe flood warnings across the city, all scheduled express commuter trains arrived on time.",
    options: [
      { text: "Despite", isCorrect: true },
      { text: "Although", isCorrect: false },
      { text: "Even though", isCorrect: false },
      { text: "Whereas", isCorrect: false }
    ],
    triggerWord: "torrential rainstorms (명사구)",
    hint: "단서: 뒤에 동사가 없는 순수 명사구(rainstorms and warnings) -> 1초 컷 전치사 자리!",
    gPoint: "G-POINT 32/33 소거 공식: 명사(구)를 목적어로 취하는 양보 전치사 = Despite",
    explanation: "뒤에 주어+동사 절이 아닌 명사구만 이어지므로 전치사 'Despite'가 정답입니다."
  },
  {
    id: "CONJ-03",
    category: "conjunction",
    subCategory: "연결어",
    subCategoryName: "연결어 > 역접 접속부사 (However)",
    question: "The prototype showed remarkable test results in lab simulations. ___________, unexpected hardware overheating was detected during field testing.",
    options: [
      { text: "However", isCorrect: true },
      { text: "Therefore", isCorrect: false },
      { text: "Furthermore", isCorrect: false },
      { text: "Consequently", isCorrect: false }
    ],
    triggerWord: "remarkable vs overheating (대조)",
    hint: "단서: 앞문장(긍정 결과)과 뒷문장(발열 문제) 간의 역접 대조. 마침표 뒤 콤마 앞 자리.",
    gPoint: "G-POINT 32: 접속부사의 자리 (S+V. [접속부사], S+V.) -> 역접 However (그러나)",
    explanation: "시뮬레이션 호평과 실제 필드 테스트에서의 문제점이라는 상반된 두 문장을 잇는 역접 연결부사 'However'가 정답입니다."
  },
  {
    id: "CONJ-04",
    category: "conjunction",
    subCategory: "연결어",
    subCategoryName: "연결어 > 인과 접속부사 (Therefore)",
    question: "Severe blizzards grounded all regional cargo flights last night. ___________, delivery packages will be delayed by one business day.",
    options: [
      { text: "Therefore", isCorrect: true },
      { text: "However", isCorrect: false },
      { text: "Nevertheless", isCorrect: false },
      { text: "Otherwise", isCorrect: false }
    ],
    triggerWord: "grounded flights -> delayed packages (인과)",
    hint: "단서: 앞문장(원인)과 뒷문장(결과)의 명확한 인과관계",
    gPoint: "G-POINT 32: 접속부사의 자리 (S+V. [접속부사], S+V.) -> 인과 Therefore (따라서, 그러므로)",
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
    hint: "단서: 뒤에 주어+동사 절이 이어짐 (전치사 Due to 등 소거)",
    gPoint: "G-POINT 33: 접속사의 자리 ([접속사] S+V, S+V.) -> 이유 Because / Since",
    explanation: "뒤에 완전한 주어+동사 절이 오므로 접속사 'Because'가 정답입니다."
  },
  {
    id: "CONJ-06",
    category: "conjunction",
    subCategory: "연결어",
    subCategoryName: "연결어 > 이유 전치사 (Due to + 명사구)",
    question: "___________ unforeseen logistical bottlenecks at the overseas shipping port, delivery dates for retail merchandise have been rescheduled.",
    options: [
      { text: "Due to", isCorrect: true },
      { text: "Because", isCorrect: false },
      { text: "Since", isCorrect: false },
      { text: "As", isCorrect: false }
    ],
    triggerWord: "unforeseen logistical bottlenecks (명사구)",
    hint: "단서: 뒤에 주어+동사 절이 없고 명사구(bottlenecks)만 존재 -> 전치사 자리!",
    gPoint: "G-POINT 32/33 소거 공식: 명사구 앞 이유 표현 -> 전치사 Due to / Because of",
    explanation: "뒤에 절이 아닌 명사구만 있으므로 이유 접속사가 아닌 이유 전치사 'Due to'가 정답입니다."
  },
  {
    id: "CONJ-07",
    category: "conjunction",
    subCategory: "연결어",
    subCategoryName: "연결어 > 첨가 접속부사 (Furthermore)",
    question: "The upgraded mobile application offers streamlined biometric authentication. ___________, it reduces battery consumption by twenty percent.",
    options: [
      { text: "Furthermore", isCorrect: true },
      { text: "However", isCorrect: false },
      { text: "Instead", isCorrect: false },
      { text: "Nevertheless", isCorrect: false }
    ],
    triggerWord: "streamlined auth + reduced battery (장점 첨가)",
    hint: "단서: 앞문장의 장점에 이어 또 다른 장점을 추가하는 순접 첨가",
    gPoint: "G-POINT 32: 접속부사의 자리 (S+V. [접속부사], S+V.) -> 첨가 Furthermore / Moreover (게다가)",
    explanation: "인증 간소화에 이어 배터리 절감이라는 긍정적 기능을 추가하는 문맥이므로 'Furthermore'가 정답입니다."
  },
  {
    id: "CONJ-08",
    category: "conjunction",
    subCategory: "연결어",
    subCategoryName: "연결어 > 대조 접속사 (While + 절)",
    question: "___________ lightweight solar panels generate clean electricity efficiently during sunny daytime, wind turbines produce reliable power day and night.",
    options: [
      { text: "While", isCorrect: true },
      { text: "During", isCorrect: false },
      { text: "Despite", isCorrect: false },
      { text: "Unlike", isCorrect: false }
    ],
    triggerWord: "solar panels generate vs wind turbines produce (대조 절)",
    hint: "단서: 뒤에 주어+동사 절이 오며 두 대상의 특징을 대조(~인 반면에). During은 전치사.",
    gPoint: "G-POINT 33: 접속사의 자리 ([접속사] S+V, S+V.) -> 대조 While (~인 반면에)",
    explanation: "절과 절을 연결하며 두 사실의 대조를 나타내므로 접속사 'While'이 정답입니다."
  },
  {
    id: "CONJ-09",
    category: "conjunction",
    subCategory: "연결어",
    subCategoryName: "연결어 > 조건 접속사 (Unless = If not)",
    question: "___________ all building visitors present an authorized security identification badge at the front desk, security officers will deny them entry to the facility.",
    options: [
      { text: "Unless", isCorrect: true },
      { text: "If", isCorrect: false },
      { text: "Because", isCorrect: false },
      { text: "Although", isCorrect: false }
    ],
    triggerWord: "Unless + 긍정문 -> 부정 주절 (부정 조건)",
    hint: "단서: '신분증을 제시하지 않는다면(Unless), 출입이 불허될 것이다'라는 부정 조건",
    gPoint: "G-POINT 33: 접속사의 자리 ([접속사] S+V, S+V.) -> 부정 조건 Unless (만약 ~하지 않는다면)",
    explanation: "문맥상 신분증을 보여주지 않을 경우 입장이 금지된다는 조건이므로 'Unless'(= If ... not)가 정답입니다."
  },
  {
    id: "CONJ-10",
    category: "conjunction",
    subCategory: "연결어",
    subCategoryName: "연결어 > 조건 접속부사 (Otherwise)",
    question: "All conference attendees must complete online badge confirmation before 5:00 PM. ___________, they will be required to pay an on-site registration fee.",
    options: [
      { text: "Otherwise", isCorrect: true },
      { text: "In addition", isCorrect: false },
      { text: "Consequently", isCorrect: false },
      { text: "Meanwhile", isCorrect: false }
    ],
    triggerWord: "register before 5 PM or pay fee (조건/경고)",
    hint: "단서: 앞문장의 조건을 지켜야 하며, '그렇지 않으면' 추가 요금을 지불해야 한다는 반대 조건",
    gPoint: "G-POINT 32: 접속부사의 자리 (S+V. [접속부사], S+V.) -> 조건 Otherwise (그렇지 않으면)",
    explanation: "명령·당위 표현 뒤에서 '그렇지 않으면 다른 불이익이 따른다'는 조건적 반전 경고를 나타내므로 'Otherwise'가 정답입니다."
  },

  // =========================================================================
  // 8. 선생님 맞춤 오답 & 특훈 문항 (켈리 G-TELP 매일 문법 5제 완벽 디지털화)
  // =========================================================================
  {
    id: "KELLY-DAILY-01",
    category: "custom",
    subCategory: "준동사 (to부정사)",
    subCategoryName: "켈리 매일문법 1번 > 가주어 it 진주어 to부정사",
    question: "It is beneficial for adult caregivers ___________ positive facial expressions for babies. Talking with babies also helps the brain develop. [출제자 켈리]",
    options: [
      { text: "having shown", isCorrect: false },
      { text: "to show", isCorrect: true },
      { text: "to be showing", isCorrect: false },
      { text: "showing", isCorrect: false }
    ],
    triggerWord: "It is beneficial ... [to V]",
    hint: "단서: 문두의 가주어 It + 형용사 beneficial + 의미상 주어 for adult caregivers ➔ 진주어 to부정사 자리!",
    gPoint: "G-POINT 18: 가주어 it ... 진주어 to부정사 (to V)",
    explanation: "가주어 it이 문두에 있고 의미상 주어(for adult caregivers) 뒤에 진주어가 와야 하는 자리이므로 to부정사인 'to show'가 정답입니다. (준동사 진주어 공식: It is 형용사 + for 목적격 + to V)"
  },
  {
    id: "KELLY-DAILY-02",
    category: "custom",
    subCategory: "시제 (미래진행)",
    subCategoryName: "켈리 매일문법 2번 [내 오답] > 시간부사절(before) + 주절 미래진행형",
    question: "Before the professor gives a lecture, students ___________ quizzes to identify what they know and what they don't know. Their scores in quizzes will be reflected on their final grade. [출제자 켈리]",
    options: [
      { text: "is taking", isCorrect: false },
      { text: "will be taking", isCorrect: true },
      { text: "would take", isCorrect: false },
      { text: "had taken", isCorrect: false }
    ],
    triggerWord: "Before the professor gives (현재) + will be reflected",
    hint: "단서 1: 지텔프 시제는 진행형(-ing)만 정답 (c, d 즉시 소거) / 단서 2: 시간부사절(Before) 현재동사 ➔ 주절 미래진행형 (will be -ing) / 단서 3: 복수주어 students이므로 is taking 수일치 탈락!",
    gPoint: "G-POINT 7: 시간·조건 부사절(before, when) 현재동사 ➔ 주절 미래진행형 (will be -ing)",
    explanation: "[켈리쌤의 1초 컷 오답 분석]\n1. 지텔프 시제 문제는 100% 진행형(-ing)만 정답이므로 진행형이 아닌 (c) would take와 (d) had taken은 바로 소거합니다.\n2. (a) is taking은 주어가 복수(students)인데 단수동사 is를 썼으므로 수일치 오류로 탈락합니다.\n3. 시간부사절인 Before절에 현재시제(gives)가 쓰였으므로 '시간/조건 부사절에서 현재가 미래를 대신한다'는 문법 규칙에 따라 주절에는 미래진행형인 'will be taking'이 정답입니다!"
  },
  {
    id: "KELLY-DAILY-03",
    category: "custom",
    subCategory: "준동사 (to부정사)",
    subCategoryName: "켈리 매일문법 3번 > 명사 수식 to부정사 (ability to V)",
    question: "Unlike animals, humans have the ability ___________, which allows humans to thrive. Those abilities also make it possible to create innovative solutions when they face adversity in life. [출제자 켈리]",
    options: [
      { text: "to infer", isCorrect: true },
      { text: "inferring", isCorrect: false },
      { text: "having inferred", isCorrect: false },
      { text: "to have inferred", isCorrect: false }
    ],
    triggerWord: "the ability to V",
    hint: "단서: 빈칸 앞 명사 'ability(능력)'를 뒤에서 수식하는 형용사 역할 ➔ to부정사 (to infer)",
    gPoint: "G-POINT 17: 명사 + to부정사 (~할 명사: ability to V)",
    explanation: "선지를 보면 준동사 문제로 (a)와 (b)로 압축됩니다. 빈칸 앞에 있는 명사 ability를 뒤에서 수식해 주는 형용사 역할을 해야 하므로 to부정사인 'to infer'가 정답입니다."
  },
  {
    id: "KELLY-DAILY-04",
    category: "custom",
    subCategory: "조동사 (must)",
    subCategoryName: "켈리 매일문법 4번 [내 오답] > 무조건 해야 하는 의무 (must)",
    question: "Chandler ___________ renew his driver's license to extend his license expiration date. Otherwise, he can't drive any more. Because he is not a U.S. citizen, his driver's license isn't allowed to renew online. [출제자 켈리]",
    options: [
      { text: "should", isCorrect: false },
      { text: "can", isCorrect: false },
      { text: "might", isCorrect: false },
      { text: "must", isCorrect: true }
    ],
    triggerWord: "Otherwise, he can't drive any more (의무 강제성)",
    hint: "단서: 뒷문장 'Otherwise, he can't drive any more(그렇지 않으면 더 이상 운전할 수 없다)' ➔ 단순 권고가 아닌 법적/강제적 의무 must!",
    gPoint: "G-POINT 29: 무조건 해야 하는 의무, 법적 강제성 = must (should는 권유/충고)",
    explanation: "[켈리쌤의 1초 컷 오답 분석]\n운전면허증을 갱신하지 않으면 '더 이상 운전할 수 없다(Otherwise, he can't drive any more)'라고 법적 제재가 뒤따르므로, 이는 '단순히 하는 게 좋다'는 권고(should)가 아니라 운전을 하기 위해 '무조건 해야 하는 필수적 의무'입니다. 따라서 절대적 의무를 나타내는 'must'가 정답입니다."
  },
  {
    id: "KELLY-DAILY-05",
    category: "custom",
    subCategory: "시제 (현재완료진행)",
    subCategoryName: "켈리 매일문법 5번 [내 오답] > Since + 과거동사 ➔ 주절 현재완료진행형",
    question: "Since she learned how to make French toast, she ___________ it for dinner. Although it tastes awful, Jack pretends to like her cooking. [출제자 켈리]",
    options: [
      { text: "has been making", isCorrect: true },
      { text: "was making", isCorrect: false },
      { text: "had made", isCorrect: false },
      { text: "will make", isCorrect: false }
    ],
    triggerWord: "Since she learned (과거)",
    hint: "단서 1: 지텔프 시제는 진행형(-ing)만 정답 (c, d 즉시 소거) / 단서 2: 'Since + 과거시점' ➔ 주절은 무조건 'have/has been -ing'!",
    gPoint: "G-POINT 9: since + 과거동사 ➔ 현재완료진행형 (has/have been -ing)",
    explanation: "[켈리쌤의 1초 컷 오답 분석]\n1. 지텔프 시제 문제는 100% 진행형(-ing)만 정답이므로 진행형이 아닌 (c) had made와 (d) will make는 1초 만에 소거합니다.\n2. 문두에 '~이후로 쭉'을 뜻하는 'Since + 과거동사(learned)'가 나왔으므로, 주절에는 과거부터 현재까지 동작이 이어져 오는 현재완료진행형 'has been making'이 정답입니다!"
  }
];

// 카테고리 정보
const CATEGORIES = [
  { id: "all", name: "전체 종합 (전 문법 모의고사)", icon: "sparkles", badge: "실전 종합 10제" },
  { id: "tense", name: "시제 (Tense)", icon: "clock", badge: "6대 시제 60제 완비" },
  { id: "gerund_infinitive", name: "준동사 (동명사 vs to부정사)", icon: "git-commit", badge: "실전 20제 탑재" },
  { id: "subjunctive", name: "가정법 (과거 & 과거완료)", icon: "wand-2", badge: "실전 10제 완비" },
  { id: "should_omission", name: "Should 생략 (동사원형)", icon: "check-circle", badge: "실전 10제 완비" },
  { id: "relative", name: "관계사 (관계대명사/부사)", icon: "link", badge: "실전 18제 완비" },
  { id: "modal", name: "조동사 (문맥 해석)", icon: "shield-alert", badge: "실전 18제 완비" },
  { id: "conjunction", name: "연결어 (접속사/접속부사)", icon: "share-2", badge: "실전 18제 완비" },
  { id: "custom", name: "선생님 맞춤 오답 & 특훈", icon: "bookmark", badge: "켈리 매일문법 5제 완비" }
];
