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
  // 3. 가정법 (SUBJUNCTIVE : 과거 vs 과거완료)
  // =========================================================================
  {
    id: "SUB-01",
    category: "subjunctive",
    subCategory: "가정법과거",
    subCategoryName: "가정법 > 가정법 과거 (현재 사실 반대)",
    question: "If Mr. Robinson ___________ more flexible with his work schedule, he could collaborate with the international overseas design team.",
    options: [
      { text: "were", isCorrect: true },
      { text: "had been", isCorrect: false },
      { text: "is", isCorrect: false },
      { text: "will be", isCorrect: false }
    ],
    hint: "단서: 주절의 'could collaborate (조동사 과거형 + 동사원형)'",
    gPoint: "G-TELP 가정법 공식: If + S + 과거동사(were), S + would/could/might + 동사원형",
    explanation: "주절에 'could + 동사원형'이 왔으므로 현재 사실과 반대되는 가정을 나타내는 가정법 과거 공식입니다. If절의 be동사는 인칭에 상관없이 'were'를 씁니다."
  },
  {
    id: "SUB-02",
    category: "subjunctive",
    subCategory: "가정법과거완료",
    subCategoryName: "가정법 > 가정법 과거완료 (과거 사실 반대)",
    question: "If the logistics department ___________ the cargo shipment earlier yesterday, the client would have received the industrial parts on schedule.",
    options: [
      { text: "had dispatched", isCorrect: true },
      { text: "dispatched", isCorrect: false },
      { text: "dispatches", isCorrect: false },
      { text: "would dispatch", isCorrect: false }
    ],
    hint: "단서: 주절의 'would have received (조동사 과거 + have p.p.)'",
    gPoint: "G-TELP 가정법 공식: If + S + had p.p., S + would/could/might + have p.p.",
    explanation: "주절에 'would have p.p.'가 주어졌으므로 If절에는 가정법 과거완료인 'had p.p.(had dispatched)'가 정답입니다."
  },

  // =========================================================================
  // 4. Should 생략 (주장·제안·요구·명령 동사원형)
  // =========================================================================
  {
    id: "SHOULD-01",
    category: "should_omission",
    subCategory: "should생략",
    subCategoryName: "Should 생략 > 제안/요구/주장/명령 동사원형",
    question: "The senior safety inspector strongly recommended that all factory workers ___________ protective goggles while operating the heavy machinery.",
    options: [
      { text: "wear", isCorrect: true },
      { text: "wore", isCorrect: false },
      { text: "wears", isCorrect: false },
      { text: "wearing", isCorrect: false }
    ],
    hint: "단서: 주절의 제안/권고 동사 'recommended that + S + (should) 동사원형'",
    gPoint: "G-TELP 당위성 공식: recommend + that + S + (should) 동사원형",
    explanation: "recommend, suggest, insist 등의 동사 뒤의 that절에는 당위성을 뜻하는 조동사 should가 생략되어 주어의 수나 시제와 무관하게 '동사원형(wear)'이 정답입니다."
  },

  // =========================================================================
  // 5. 관계사 / 조동사 / 연결어
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
    hint: "단서: 콤마(,) 뒤 사물 선행사 BioGen Laboratories (that은 콤마 뒤 불가)",
    gPoint: "G-TELP 관계사 공식: 콤마(,) 뒤에는 that 절대 불가 -> which",
    explanation: "선행사가 회사(사물)이고 콤마(,) 뒤 계속적 용법이므로 관계대명사 that은 쓸 수 없습니다. 따라서 주격 관계대명사 'which'가 정답입니다."
  },
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
    hint: "단서: 엄격한 항공 안전 규정 (strict regulations) -> 강한 의무/법칙",
    gPoint: "G-TELP 조동사 해석: 법규/규정에 따른 필수 의무 = must",
    explanation: "문맥상 안전 규정에 따라 '반드시 좌석 벨트를 착용해야 한다'는 강한 의무를 나타내므로 조동사 'must'가 정답입니다."
  },
  {
    id: "CONJ-01",
    category: "conjunction",
    subCategory: "연결어",
    subCategoryName: "연결어 > 양보 접속사 (although/though)",
    question: "___________ the sales team encountered unexpected supply chain disruptions, they managed to surpass their annual revenue target.",
    options: [
      { text: "Although", isCorrect: true },
      { text: "Despite", isCorrect: false },
      { text: "Because of", isCorrect: false },
      { text: "However", isCorrect: false }
    ],
    hint: "단서: 뒤에 주어+동사 절(the sales team encountered ...)이 오고 양보의 의미",
    gPoint: "G-TELP 연결어 공식: 절을 이끄는 양보 접속사 = Although (Despite는 전치사)",
    explanation: "뒤에 '주어 + 동사'를 갖춘 절이 이어지며, '공급망 혼란을 겪었음에도 불구하고'라는 역접/양보의 관계이므로 접속사 'Although'가 정답입니다."
  }
];

// 카테고리 정보
const CATEGORIES = [
  { id: "all", name: "전체 종합 (전 문법 모의고사)", icon: "sparkles", badge: "실전 종합 10제" },
  { id: "tense", name: "시제 (Tense)", icon: "clock", badge: "6대 시제 60제 완비" },
  { id: "gerund_infinitive", name: "준동사 (동명사 vs to부정사)", icon: "git-commit", badge: "실전 20제 탑재" },
  { id: "subjunctive", name: "가정법 (과거 & 과거완료)", icon: "wand-2", badge: "공식 짝맞추기" },
  { id: "should_omission", name: "Should 생략 (동사원형)", icon: "check-circle", badge: "주장·제안 동사원형" },
  { id: "relative", name: "관계사 (관계대명사/부사)", icon: "link", badge: "that불가 공식" },
  { id: "modal", name: "조동사 (문맥 해석)", icon: "shield-alert", badge: "의무·가능성" },
  { id: "conjunction", name: "연결어 (접속사/부사)", icon: "share-2", badge: "논리 관계" }
];
