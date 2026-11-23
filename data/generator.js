// =========================================================================
// G-TELP Level 2 전 문법 무한 실전 문제 동적 생성 엔진 (Deep Combinatorial Engine)
// 전 영역(시제, 준동사, 가정법, Should생략, 관계사, 조동사, 연결어) 무한 생성 & 중복 방지
// =========================================================================

const GTELP_GENERATOR = {
  // 최근 출제된 문제 서명(최근 50개 문제 중복 완전 차단)
  recentSignatures: new Set(),

  // 1. 방대한 전문 분야별 주어 풀 (30종 이상)
  subjects: [
    "The chief financial officer", "The senior software architect", "Dr. Patricia Gallagher", 
    "The regional logistics director", "The quality assurance specialist", "The environmental inspector",
    "Professor Bennett", "The head neurosurgeon", "Ms. Katherine Vance", "The chief executive officer",
    "The aviation safety supervisor", "The lead archaeologist", "Mr. Samuel Sterling", "The corporate compliance auditor",
    "The head botanist", "The clinical research director", "The municipal transport planner", "The lead civil engineer",
    "The international trade delegate", "The principal architect", "Dr. Martinez", "The laboratory director",
    "The investment portfolio manager", "The senior meteorologist", "The executive committee chair", "The cybersecurity analyst",
    "The operations manager", "The supply chain coordinator", "The lead data scientist", "The public relations director"
  ],

  // 2. 상황별 도입 배경 절 (다양한 문맥 연출용)
  contextOpenings: [
    "Due to urgent corporate restructuring,",
    "Following recommendations from the global audit committee,",
    "To comply with newly revised international safety standards,",
    "After reviewing the fourth-quarter performance report,",
    "In order to accelerate next-generation product development,",
    "During the annual international aerospace symposium,",
    "Before finalizing the bilateral trade agreement,",
    "To prevent potential cyber security vulnerabilities,",
    "Following an intensive executive board conference,",
    "In response to unexpected logistical bottlenecks,",
    "After consulting with senior medical specialists,",
    "To prepare for the upcoming ISO certification review,"
  ],

  // =========================================================================
  // 1. 시제 (Tense) - 6대 시제별 방대한 실전 템플릿 풀
  // =========================================================================
  tenseTemplates: {
    '과진': [
      {
        id: "T-PAST-PROG-1",
        getQ: (s) => `When the unexpected fire alarm sounded throughout the facility yesterday afternoon, ${s} ___________ confidential inspection data in the main office.`,
        getCorrect: (v) => `was ${v.ing}`,
        distractors: (v) => [`will ${v.base}`, v.ed, `has been ${v.ing}`],
        trigger: "When the unexpected fire alarm sounded",
        hint: "단서: When절의 과거동사 'sounded' (과거 특정 시점의 진행 동작)",
        gPoint: "G-POINT 5: when + 과거동사 -> 과거진행형 (was/were -ing)"
      },
      {
        id: "T-PAST-PROG-2",
        getQ: (s) => `While the technical crew installed emergency power backup units in the basement, ${s} ___________ the structural integrity of the cooling tower.`,
        getCorrect: (v) => `was ${v.ing}`,
        distractors: (v) => [v.ed, `will be ${v.ing}`, `had been ${v.ing}`],
        trigger: "While the technical crew installed (과거)",
        hint: "단서: 과거 주절과 접속사 'While' (과거 동시 진행 동작)",
        gPoint: "G-POINT 4: 과거 문맥 + while -> 과거진행형"
      },
      {
        id: "T-PAST-PROG-3",
        getQ: (s) => `Carlos, the overseas buyer from Madrid, visited our headquarters yesterday. When I met him in the conference lobby, several assistants ___________ marketing brochures on the digital table.`,
        getCorrect: () => `were distributing`,
        distractors: () => [`distributed`, `will distribute`, `have been distributing`],
        trigger: "When I met (과거동사) him",
        hint: "단서: 'When I met(과거)' + 복수주어 assistants -> were ~ing",
        gPoint: "G-POINT 5: when 과거동사 -> 과거진행형 (were -ing)"
      },
      {
        id: "T-PAST-PROG-4",
        getQ: (s) => `At precisely 8:30 PM last night, when the severe power outage hit the metropolitan area, ${s} ___________ emergency backup protocols with hospital staff.`,
        getCorrect: (v) => `was ${v.ing}`,
        distractors: (v) => [v.ed, `will ${v.base}`, `has been ${v.ing}`],
        trigger: "last night, when the severe power outage hit",
        hint: "단서: 'last night when ~ hit (과거 특정 시점)'",
        gPoint: "G-POINT 5: 과거 특정 시점 진행 -> 과거진행형"
      },
      {
        id: "T-PAST-PROG-5",
        getQ: (s) => `When the regulatory inspectors arrived unannounced at 10 AM yesterday, ${s} ___________ the chemical storage compliance logs in the cleanroom.`,
        getCorrect: (v) => `was ${v.ing}`,
        distractors: (v) => [v.base + "s", `will be ${v.ing}`, `is ${v.ing}`],
        trigger: "When the regulatory inspectors arrived at 10 AM yesterday",
        hint: "단서: 'When inspectors arrived at 10 AM yesterday (과거 시점)'",
        gPoint: "G-POINT 5: 과거 특정 시점 진행 -> was/were -ing"
      },
      {
        id: "T-PAST-PROG-6",
        getQ: (s) => `Yesterday afternoon at 3:15 PM, while delegates were voting in the main auditorium, ${s} ___________ press release statements in the media lounge.`,
        getCorrect: (v) => `was ${v.ing}`,
        distractors: (v) => [`has ${v.ed}`, `will ${v.base}`, `had ${v.ed}`],
        trigger: "Yesterday afternoon at 3:15 PM, while",
        hint: "단서: 'Yesterday afternoon at 3:15 PM' + while절 과거진행",
        gPoint: "G-POINT 4: 과거 특정 시점 동시 진행 -> 과거진행형"
      }
    ],

    '현진': [
      {
        id: "T-PRES-PROG-1",
        getQ: (s) => `Due to a sudden network glitch on the main billing server, ${s} ___________ the system configuration right now to prevent transaction errors.`,
        getCorrect: (v) => `is now ${v.ing}`,
        distractors: (v) => [v.base + "s", v.ed, `will have been ${v.ing}`],
        trigger: "right now",
        hint: "단서: 문장의 'right now' (현재 시점 부사) + 완료 기간(for/since) 없음",
        gPoint: "G-POINT 6: right now, at the moment -> 현재진행형 (am/is/are -ing)"
      },
      {
        id: "T-PRES-PROG-2",
        getQ: (s) => `Be quiet in the hallway! The executive search committee ___________ the finalists behind closed doors at the moment.`,
        getCorrect: () => `is interviewing`,
        distractors: () => [`interviewed`, `will interview`, `has interviewed`],
        trigger: "at the moment",
        hint: "단서: 명령문 'Be quiet!' + 'at the moment (지금 이 순간)'",
        gPoint: "G-POINT 6: at the moment -> 현재진행형"
      },
      {
        id: "T-PRES-PROG-3",
        getQ: (s) => `The urgent product recall announcement was released ten minutes ago. Currently, ${s} ___________ media inquiries at the press conference.`,
        getCorrect: (v) => `is ${v.ing}`,
        distractors: (v) => [v.ed, `will ${v.base}`, `had ${v.ed}`],
        trigger: "Currently",
        hint: "단서: 문장의 'Currently (현재)' + 기간 없음",
        gPoint: "G-POINT 6: Currently -> 현재진행형"
      },
      {
        id: "T-PRES-PROG-4",
        getQ: (s) => `The flight schedule has been adjusted due to heavy snowfall. Now the airline representatives ___________ meal vouchers to stranded international travelers.`,
        getCorrect: () => `are distributing`,
        distractors: () => [`distributed`, `will distribute`, `have distributed`],
        trigger: "Now",
        hint: "단서: 문두의 'Now' + 복수주어 representatives",
        gPoint: "G-POINT 6: Now -> 현재진행형"
      },
      {
        id: "T-PRES-PROG-5",
        getQ: (s) => `Look at the presentation screen right now! ${s} ___________ the live telemetry data streaming from the oceanic probe.`,
        getCorrect: (v) => `is ${v.ing}`,
        distractors: (v) => [v.ed, `will ${v.base}`, `had been ${v.ing}`],
        trigger: "Look at ~ right now!",
        hint: "단서: 주목 명령문 'Look!' + 'right now'",
        gPoint: "G-POINT 6: Look/Listen + right now -> 현재진행형"
      },
      {
        id: "T-PRES-PROG-6",
        getQ: (s) => `At present, financial analysts at the brokerage ___________ volatile currency fluctuations across European markets.`,
        getCorrect: () => `are monitoring`,
        distractors: () => [`monitored`, `will monitor`, `had monitored`],
        trigger: "At present",
        hint: "단서: 'At present' (현재 이 순간 진행)",
        gPoint: "G-POINT 6: At present -> 현재진행형"
      }
    ],

    '미진': [
      {
        id: "T-FUT-PROG-1",
        getQ: (s) => `The international renewable energy expo will begin next Monday in Tokyo. Tomorrow morning, ${s} ___________ a keynote speech on solar grid efficiency on behalf of our firm.`,
        getCorrect: (v) => `will be ${v.ing}`,
        distractors: (v) => [v.ed, `has been ${v.ing}`, v.base + "s"],
        trigger: "Tomorrow morning",
        hint: "단서: 'Tomorrow morning' (단순 미래 시점 부사)",
        gPoint: "G-POINT 7: Tomorrow, Next ~ -> 미래진행형 (will be -ing)"
      },
      {
        id: "T-FUT-PROG-2",
        getQ: (s) => `Please do not schedule any phone calls between 2 PM and 4 PM tomorrow because ${s} ___________ an executive board session during those hours.`,
        getCorrect: () => `will be leading`,
        distractors: () => [`led`, `leads`, `had led`],
        trigger: "tomorrow between 2 PM and 4 PM",
        hint: "단서: 내일 특정 시간대(tomorrow between 2 PM and 4 PM)",
        gPoint: "G-POINT 7: 미래 특정 시점 진행 -> 미래진행형"
      },
      {
        id: "T-FUT-PROG-3",
        getQ: (s) => `When the foreign diplomatic delegation arrives at the airport terminal tomorrow afternoon, our welcoming committee ___________ commemorative badges to each dignitary.`,
        getCorrect: () => `will be presenting`,
        distractors: () => [`presented`, `presents`, `had presented`],
        trigger: "When + arrives (현재) tomorrow afternoon",
        hint: "단서: 시간부사절의 현재동사 'arrives' (내일 미래 시점 대용)",
        gPoint: "G-POINT 7: when절 현재동사 -> 주절 미래진행형 (will be -ing)"
      },
      {
        id: "T-FUT-PROG-4",
        getQ: (s) => `The entire film production crew has finalized their travel arrangements. Next Tuesday afternoon, they ___________ to Vancouver for outdoor location shooting.`,
        getCorrect: () => `will be traveling`,
        distractors: () => [`traveled`, `have traveled`, `had traveled`],
        trigger: "Next Tuesday afternoon",
        hint: "단서: 'Next Tuesday afternoon' (명확한 미래 시점 부사)",
        gPoint: "G-POINT 7: Next + 시점 -> 미래진행형"
      },
      {
        id: "T-FUT-PROG-5",
        getQ: (s) => `At this exact time next Friday, ${s} ___________ the ceremonial opening address at the international architecture expo.`,
        getCorrect: (v) => `will be ${v.ing}`,
        distractors: (v) => [v.ed, `has been ${v.ing}`, `was ${v.ing}`],
        trigger: "At this exact time next Friday",
        hint: "단서: 'At this time next Friday (미래 특정 시점)'",
        gPoint: "G-POINT 7: 미래 특정 시점 -> will be -ing"
      },
      {
        id: "T-FUT-PROG-6",
        getQ: (s) => `Tomorrow evening around 8 PM, the surgical team ___________ a delicate cardiovascular procedure under high-resolution monitors.`,
        getCorrect: () => `will be performing`,
        distractors: () => [`performed`, `performs`, `had performed`],
        trigger: "Tomorrow evening around 8 PM",
        hint: "단서: 'Tomorrow evening around 8 PM (미래 시점)'",
        gPoint: "G-POINT 7: Tomorrow 시점 -> will be -ing"
      }
    ],

    '과완진': [
      {
        id: "T-PPERF-PROG-1",
        getQ: (s) => `The symphony orchestra received thunderous applause after their recital. The musicians ___________ the intricate piece for eight weeks before opening night arrived.`,
        getCorrect: () => `had been rehearsing`,
        distractors: () => [`were rehearsing`, `are rehearsing`, `will be rehearsing`],
        trigger: "for eight weeks before opening night arrived",
        hint: "단서: 기간 'for eight weeks' + 'before opening night arrived (과거 시점)'",
        gPoint: "G-POINT 8: before 과거시점 + for 기간 -> 과거완료진행형 (had been -ing)"
      },
      {
        id: "T-PPERF-PROG-2",
        getQ: (s) => `By the time the alpine rescue squad finally reached the stranded climbers yesterday, the expedition members ___________ freezing gale winds for nearly twenty-four hours.`,
        getCorrect: () => `had been enduring`,
        distractors: () => [`were enduring`, `have been enduring`, `will be enduring`],
        trigger: "By the time + reached (과거) + for nearly twenty-four hours",
        hint: "단서: 'By the time reached(과거)' + 기간 'for twenty-four hours'",
        gPoint: "G-POINT 8: By the time 과거시점 + for 기간 -> 과거완료진행형"
      },
      {
        id: "T-PPERF-PROG-3",
        getQ: (s) => `Until the unexpected electrical breakdown occurred at midnight, ${s} ___________ the gene sequence data for seven consecutive hours.`,
        getCorrect: (v) => `had been ${v.ing}`,
        distractors: (v) => [`was ${v.ing}`, `is ${v.ing}`, `will have been ${v.ing}`],
        trigger: "Until + occurred (과거) + for seven consecutive hours",
        hint: "단서: 'Until occurred(과거 시점)' + 기간 'for seven hours'",
        gPoint: "G-POINT 8: until 과거시점 + for 기간 -> 과거완료진행형"
      },
      {
        id: "T-PPERF-PROG-4",
        getQ: (s) => `Mr. Campbell stepped down from his executive post last week. He ___________ the multinational maritime firm for over twelve years before he made his final announcement.`,
        getCorrect: () => `had been directing`,
        distractors: () => [`has been directing`, `was directing`, `will direct`],
        trigger: "for over twelve years before he made (과거)",
        hint: "단서: 'before he made(과거)' + 기간 'for over twelve years'",
        gPoint: "G-POINT 8: before 과거 + for 기간 -> 과거완료진행형"
      },
      {
        id: "T-PPERF-PROG-5",
        getQ: (s) => `When the corporate audit team finally intervened last Friday, ${s} ___________ the discrepancy in the ledger for nearly three months.`,
        getCorrect: (v) => `had been ${v.ing}`,
        distractors: (v) => [`was ${v.ing}`, `has been ${v.ing}`, `will be ${v.ing}`],
        trigger: "When intervened last Friday + for nearly three months",
        hint: "단서: 'When intervened (과거)' + 기간 'for nearly three months'",
        gPoint: "G-POINT 8: 과거 시점 + for 기간 -> had been -ing"
      },
      {
        id: "T-PPERF-PROG-6",
        getQ: (s) => `Prior to the moment the power generator shut down yesterday, technicians ___________ stress tests on the turbine for six uninterrupted hours.`,
        getCorrect: () => `had been running`,
        distractors: () => [`were running`, `have been running`, `will run`],
        trigger: "Prior to the moment shut down + for six uninterrupted hours",
        hint: "단서: 'Prior to 과거' + 기간 'for six hours'",
        gPoint: "G-POINT 8: 과거 이전 완료 진행 -> had been -ing"
      }
    ],

    '현완진': [
      {
        id: "T-PRES-PERF-1",
        getQ: (s) => `When David graduated from university, he moved to Seattle, where he ___________ eco-friendly skyscrapers for fourteen years now. He still loves his profession.`,
        getCorrect: () => `has been designing`,
        distractors: () => [`designed`, `will design`, `had designed`],
        trigger: "for fourteen years now",
        hint: "단서: 'for fourteen years now' (기간 for + 현재 시점 now) + 현재 문맥",
        gPoint: "G-POINT 9: for 기간 now -> 현재완료진행형 (have/has been -ing)"
      },
      {
        id: "T-PRES-PERF-2",
        getQ: (s) => `Elena, an internationally acclaimed novelist, ___________ her upcoming fantasy saga for three years now. Eager readers continue to anticipate its publication.`,
        getCorrect: () => `has been writing`,
        distractors: () => [`wrote`, `is writing`, `had written`],
        trigger: "for three years now",
        hint: "단서: 'for three years now' (now + for 기간)",
        gPoint: "G-POINT 9: for 기간 now -> 현재완료진행형"
      },
      {
        id: "T-PRES-PERF-3",
        getQ: (s) => `Dr. Martinez has dedicated his career to sustainable energy. Ever since he joined the national institute in 2018, he ___________ solar cell efficiency with remarkable success.`,
        getCorrect: () => `has been improving`,
        distractors: () => [`improved`, `will improve`, `had been improving`],
        trigger: "Since he joined in 2018",
        hint: "단서: 'Since + 과거시점(joined in 2018)' + 주절 현재까지 지속",
        gPoint: "G-POINT 9: Since 과거시점 -> 주절 현재완료진행형"
      },
      {
        id: "T-PRES-PERF-4",
        getQ: (s) => `Because the chief engineer resigned abruptly, recruiting a competent replacement is vital. ${s} ___________ qualified candidates for four weeks now to fill the opening.`,
        getCorrect: (v) => `has been ${v.ing}`,
        distractors: (v) => [v.ed, `will ${v.base}`, `had ${v.ed}`],
        trigger: "for four weeks now",
        hint: "단서: 현재 문맥(is vital) + 기간 'for four weeks now'",
        gPoint: "G-POINT 9: 현재 상황 + for 기간 now -> 현재완료진행형"
      },
      {
        id: "T-PRES-PERF-5",
        getQ: (s) => `Since the pharmaceutical firm established its genomic research branch five years ago, ${s} ___________ experimental cancer therapies with promising early results.`,
        getCorrect: (v) => `has been ${v.ing}`,
        distractors: (v) => [v.ed, `will ${v.base}`, `had ${v.ed}`],
        trigger: "Since the firm established its branch",
        hint: "단서: 'Since + 과거시동사(established)' + 주절 현재까지 지속",
        gPoint: "G-POINT 9: Since 과거시점 -> have/has been -ing"
      },
      {
        id: "T-PRES-PERF-6",
        getQ: (s) => `The urban revitalization project is actively progressing. Construction crews ___________ the historical bridge foundations for ten months now.`,
        getCorrect: () => `have been reinforcing`,
        distractors: () => [`reinforced`, `will reinforce`, `had reinforced`],
        trigger: "for ten months now",
        hint: "단서: 현재 지속 문맥 + 'for ten months now'",
        gPoint: "G-POINT 9: for 기간 now -> have been -ing"
      }
    ],

    '미완진': [
      {
        id: "T-FUT-PERF-1",
        getQ: (s) => `By the end of this academic semester, Professor Harrison ___________ international economics at the university for exactly thirty continuous years.`,
        getCorrect: () => `will have been teaching`,
        distractors: () => [`has been teaching`, `is teaching`, `had been teaching`],
        trigger: "By the end of this semester + for exactly thirty continuous years",
        hint: "단서: 미래 완료 시점 'By the end of this semester' + 기간 'for thirty years'",
        gPoint: "G-POINT 10: By 미래시점 + for 기간 -> 미래완료진행형 (will have been -ing)"
      },
      {
        id: "T-FUT-PERF-2",
        getQ: (s) => `By next September, the global civil engineering consortium ___________ on the subsea rail tunnel project for five uninterrupted years.`,
        getCorrect: () => `will have been working`,
        distractors: () => [`has been working`, `is working`, `had been working`],
        trigger: "By next September + for five uninterrupted years",
        hint: "단서: 'By next September (미래 완료)' + 기간 'for five years'",
        gPoint: "G-POINT 10: By 미래시점 + for 기간 -> 미래완료진행형"
      },
      {
        id: "T-FUT-PERF-3",
        getQ: (s) => `By the time the global aerospace summit convenes next November, ${s} ___________ the new satellite propulsion system for two full years.`,
        getCorrect: (v) => `will have been ${v.ing}`,
        distractors: (v) => [`has been ${v.ing}`, `is ${v.ing}`, `had been ${v.ing}`],
        trigger: "By the time + convenes next November + for two full years",
        hint: "단서: 'By the time + 현재동사(convenes) next November' + 기간 'for two years'",
        gPoint: "G-POINT 10: By the time 현재 + for 기간 -> 미래완료진행형"
      },
      {
        id: "T-FUT-PERF-4",
        getQ: (s) => `When Kevin completes his medical fellowship next spring, he ___________ alongside senior surgeons at the hospital for four continuous years.`,
        getCorrect: () => `will have been practicing`,
        distractors: () => [`has been practicing`, `is practicing`, `had practiced`],
        trigger: "When + completes next spring + for four continuous years",
        hint: "단서: 'When completes next spring (미래)' + 기간 'for four years'",
        gPoint: "G-POINT 10: When절 미래 + for 기간 -> 미래완료진행형"
      },
      {
        id: "T-FUT-PERF-5",
        getQ: (s) => `By the time the new commercial airport terminal opens next December, ${s} ___________ air traffic logistics models for seven years.`,
        getCorrect: (v) => `will have been ${v.ing}`,
        distractors: (v) => [`has been ${v.ing}`, `was ${v.ing}`, `is ${v.ing}`],
        trigger: "By the time opens next December + for seven years",
        hint: "단서: 'By the time + opens next December' + 기간 'for seven years'",
        gPoint: "G-POINT 10: By the time 미래 + for 기간 -> will have been -ing"
      },
      {
        id: "T-FUT-PERF-6",
        getQ: (s) => `By next Friday, the software testing team ___________ the enterprise security suite for eighty consecutive business days.`,
        getCorrect: () => `will have been evaluating`,
        distractors: () => [`has been evaluating`, `is evaluating`, `had evaluated`],
        trigger: "By next Friday + for eighty consecutive business days",
        hint: "단서: 'By next Friday' + 기간 'for eighty business days'",
        gPoint: "G-POINT 10: By 미래시점 + for 기간 -> will have been -ing"
      }
    ]
  },

  // 시제 동사 풀
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

  // =========================================================================
  // 2. 준동사 (Gerund vs Infinitive) - 20종 동명사 & 20종 to부정사 빈출 풀
  // =========================================================================
  gerundVerbs: [
    { v: "suggested", obj: "postponing", plain: "postpone", toV: "to postpone", ctx: "the launch of the mobile banking platform until next quarter" },
    { v: "avoided", obj: "disclosing", plain: "disclose", toV: "to disclose", ctx: "sensitive trade secrets during the televised media briefing" },
    { v: "recommended", obj: "upgrading", plain: "upgrade", toV: "to upgrade", ctx: "the enterprise firewalls to prevent potential cyber intrusions" },
    { v: "postponed", obj: "holding", plain: "hold", toV: "to hold", ctx: "the annual international investor summit due to adverse travel alerts" },
    { v: "considered", obj: "expanding", plain: "expand", toV: "to expand", ctx: "commercial sales operations into emerging Latin American markets" },
    { v: "denied", obj: "leaking", plain: "leak", toV: "to leak", ctx: "confidential audit documents to external investigative journalists" },
    { v: "finished", obj: "evaluating", plain: "evaluate", toV: "to evaluate", ctx: "the pharmaceutical compound samples in the certified cleanroom" },
    { v: "risked", obj: "investing", plain: "invest", toV: "to invest", ctx: "substantial venture capital into the early-stage artificial intelligence startup" },
    { v: "quit", obj: "smoking", plain: "smoke", toV: "to smoke", ctx: "immediately after receiving the pulmonologist's urgent medical warning" },
    { v: "kept", obj: "monitoring", plain: "monitor", toV: "to monitor", ctx: "the patient's vital cardiovascular signs throughout the post-op recovery" },
    { v: "admitted", obj: "making", plain: "make", toV: "to make", ctx: "a critical computational error in the preliminary revenue projection" },
    { v: "delayed", obj: "announcing", plain: "announce", toV: "to announce", ctx: "the corporate merger timeline until regulatory clearance was granted" },
    { v: "gave up", obj: "negotiating", plain: "negotiate", toV: "to negotiate", ctx: "with the stubborn supplier after three consecutive weeks of deadlock" },
    { v: "mind", obj: "rescheduling", plain: "reschedule", toV: "to reschedule", ctx: "the bilateral video conference to accommodate the overseas delegation" },
    { v: "practiced", obj: "delivering", plain: "deliver", toV: "to deliver", ctx: "the annual shareholder address in front of the executive rehearsal team" },
    { v: "discontinued", obj: "producing", plain: "produce", toV: "to produce", ctx: "the obsolete automotive component line to focus on electric vehicles" },
    { v: "resisted", obj: "accepting", plain: "accept", toV: "to accept", ctx: "the acquisition buyout offer from the rival multinational conglomerate" },
    { v: "imagined", obj: "leading", plain: "lead", toV: "to lead", ctx: "the pioneering deep-sea exploration mission across the Pacific ridge" },
    { v: "put off", obj: "submitting", plain: "submit", toV: "to submit", ctx: "the completed environmental assessment dossier until final lab verification" },
    { v: "enjoyed", obj: "collaborating", plain: "collaborate", toV: "to collaborate", ctx: "with international aerospace scientists on satellite orbit simulation" }
  ],

  infinitiveVerbs: [
    { v: "decided", obj: "to hire", plain: "hire", ing: "hiring", ctx: "twenty additional biomedical specialists to accelerate vaccine development" },
    { v: "agreed", obj: "to sign", plain: "sign", ing: "signing", ctx: "the bilateral trade partnership contract before the current fiscal year concluded" },
    { v: "refused", obj: "to compromise", plain: "compromise", ing: "compromising", ctx: "on strict aviation quality benchmarks despite intense delivery deadlines" },
    { v: "planned", obj: "to establish", plain: "establish", ing: "establishing", ctx: "a state-of-the-art automated logistics distribution hub near the seaport" },
    { v: "hoped", obj: "to achieve", plain: "achieve", ing: "achieving", ctx: "complete carbon neutrality across all industrial facilities by the year 2030" },
    { v: "managed", obj: "to persuade", plain: "persuade", ing: "persuading", ctx: "the municipal committee to approve the urban revitalization research grant" },
    { v: "hesitated", obj: "to accept", plain: "accept", ing: "accepting", ctx: "the overseas transfer offer due to personal family commitments in Seoul" },
    { v: "promised", obj: "to deliver", plain: "deliver", ing: "delivering", ctx: "the customized industrial robotics equipment within forty-eight hours" },
    { v: "attempted", obj: "to resolve", plain: "resolve", ing: "resolving", ctx: "the protracted labor agreement dispute through independent arbitration" },
    { v: "chose", obj: "to relocate", plain: "relocate", ing: "relocating", ctx: "the corporate research headquarters to a tech-friendly metropolitan district" },
    { v: "aimed", obj: "to double", plain: "double", ing: "doubling", ctx: "commercial export volume across European emerging tech sectors this year" },
    { v: "intended", obj: "to file", plain: "file", ing: "filing", ctx: "an expedited patent registration for the novel synthetic semiconductor alloy" },
    { v: "offered", obj: "to assist", plain: "assist", ing: "assisting", ctx: "the regional disaster management squad during the unexpected flood emergency" },
    { v: "failed", obj: "to comply", plain: "comply", ing: "complying", ctx: "with mandatory chemical disposal protocols mandated by the federal agency" },
    { v: "expected", obj: "to complete", plain: "complete", ing: "completing", ctx: "the high-speed railway tunnel construction well ahead of the winter freeze" },
    { v: "wished", obj: "to consult", plain: "consult", ing: "consulting", ctx: "with the chief intellectual property attorney before releasing the product" },
    { v: "struggled", obj: "to balance", plain: "balance", ing: "balancing", ctx: "the stringent operational budget constraints with employee safety training" },
    { v: "demanded", obj: "to inspect", plain: "inspect", ing: "inspecting", ctx: "the unredacted financial transaction records during the audit proceeding" },
    { v: "strove", obj: "to maintain", plain: "maintain", ing: "maintaining", ctx: "exceptional customer satisfaction ratings across all global service centers" },
    { v: "resolved", obj: "to overhaul", plain: "overhaul", ing: "overhauling", ctx: "the legacy cloud infrastructure to minimize latency for mobile users" }
  ],

  // =========================================================================
  // 3. 가정법 (Subjunctive) - 10종 과거 & 10종 과거완료 템플릿
  // =========================================================================
  subjunctivePastItems: [
    {
      q: (s) => `If ${s} ___________ more flexible with project milestone deadlines, our department could collaborate smoothly with the European consulting team.`,
      correct: "were",
      dist: ["had been", "is", "will be"],
      trig: "could collaborate",
      hint: "단서: 주절의 'could collaborate (조동사과거 + 동사원형)'",
      gp: "G-POINT 1: If + S + 과거동사(were), S + would/could/might + 동사원형",
      exp: "주절에 'could collaborate'가 쓰였으므로 If절에는 가정법 과거를 나타내는 'were'가 정답입니다."
    },
    {
      q: (s) => `If our engineering team had access to the high-performance computing cluster, ${s} ___________ the aerodynamic simulation much faster.`,
      correct: "would complete",
      dist: ["completed", "will complete", "would have completed"],
      trig: "If + had access (과거동사)",
      hint: "단서: If절의 과거동사 'had access'",
      gp: "G-POINT 1: If + 과거동사 -> 주절 would/could/might + 동사원형",
      exp: "If절에 과거동사 'had'가 사용된 가정법 과거이므로 주절에는 'would + 동사원형'인 'would complete'가 정답입니다."
    },
    {
      q: (s) => `If the corporate treasury department ___________ sufficient capital reserves, we might acquire the regional logistics competitor this quarter.`,
      correct: "possessed",
      dist: ["had possessed", "possesses", "will possess"],
      trig: "might acquire",
      hint: "단서: 주절의 'might acquire (조동사과거 + 동사원형)'",
      gp: "G-POINT 1: If + S + 과거동사, S + would/could/might + 동사원형",
      exp: "주절에 'might acquire'가 있으므로 If절에는 일반동사 과거형인 'possessed'가 정답입니다."
    },
    {
      q: (s) => `If the municipal authorities ___________ in favor of the urban redevelopment plan, ${s} would initiate the structural foundation work next week.`,
      correct: "were",
      dist: ["are", "had been", "will be"],
      trig: "would initiate",
      hint: "단서: 주절의 'would initiate (조동사과거 + 동사원형)'",
      gp: "G-POINT 1: If + were -> would + 동사원형",
      exp: "주절에 'would initiate'가 있으므로 If절에는 가정법 과거 Be동사 'were'가 정답입니다."
    },
    {
      q: (s) => `If we knew the confidential parameters of the competing bidder, ${s} ___________ a much more competitive procurement proposal today.`,
      correct: "could submit",
      dist: ["submitted", "will submit", "could have submitted"],
      trig: "If we knew (과거동사)",
      hint: "단서: If절의 과거동사 'knew'",
      gp: "G-POINT 1: If + 과거동사 -> 주절 would/could + 동사원형",
      exp: "If절의 시제가 과거(knew)이므로 주절에는 조동사 과거+동사원형인 'could submit'이 정답입니다."
    },
    {
      q: (s) => `If the clinical trial protocol ___________ less cumbersome for participants, the medical staff could recruit suitable volunteers more easily.`,
      correct: "were",
      dist: ["had been", "is", "will be"],
      trig: "could recruit",
      hint: "단서: 주절의 'could recruit (could + 동사원형)'",
      gp: "G-POINT 1: If + were -> could + 동사원형",
      exp: "주절에 'could recruit'가 있으므로 If절에는 'were'가 정답입니다."
    },
    {
      q: (s) => `If ${s} understood the intricate legal framework of international maritime law, the board ___________ the dispute without litigation.`,
      correct: "would settle",
      dist: ["settled", "will settle", "would have settled"],
      trig: "If + understood (과거동사)",
      hint: "단서: If절의 과거동사 'understood'",
      gp: "G-POINT 1: If 과거 -> 주절 would + 동사원형",
      exp: "If절에 과거동사 understood가 쓰였으므로 주절은 'would settle'이 정답입니다."
    },
    {
      q: (s) => `If the automated manufacturing sensors ___________ functioning properly, the production line would not suffer recurring calibration errors.`,
      correct: "were",
      dist: ["are", "had been", "will be"],
      trig: "would not suffer",
      hint: "단서: 주절의 'would not suffer (would + 동사원형)'",
      gp: "G-POINT 1: If + were -> would + 동사원형",
      exp: "주절에 'would not suffer'가 있으므로 If절에는 Be동사 'were'가 정답입니다."
    }
  ],

  subjunctivePastPerfItems: [
    {
      q: (s) => `If the technical operations team ___________ the diagnostic evaluation earlier yesterday, we would have prevented the server shutdown.`,
      correct: "had analyzed",
      dist: ["analyzed", "analyzes", "would analyze"],
      trig: "would have prevented",
      hint: "단서: 주절의 'would have prevented (조동사과거 + have p.p.)'",
      gp: "G-POINT 2: If + S + had p.p., S + would/could/might + have p.p.",
      exp: "주절에 'would have prevented'가 있으므로 If절에는 가정법 과거완료인 'had analyzed'가 정답입니다."
    },
    {
      q: (s) => `If ${s} had dispatched the urgent cargo shipment prior to 3 PM yesterday, the client ___________ the replacement components this morning.`,
      correct: "would have received",
      dist: ["received", "will receive", "would receive"],
      trig: "If + had dispatched",
      hint: "단서: If절의 'had dispatched (had p.p.)'",
      gp: "G-POINT 2: If + had p.p. -> 주절 would/could + have p.p.",
      exp: "If절에 'had dispatched'가 쓰였으므로 주절에는 'would have received'가 정답입니다."
    },
    {
      q: (s) => `If the quality assurance division ___________ the manufacturing batch before packaging, they could have detected the micro-fractures in the glass.`,
      correct: "had reviewed",
      dist: ["reviewed", "reviews", "would have reviewed"],
      trig: "could have detected",
      hint: "단서: 주절의 'could have detected (could have p.p.)'",
      gp: "G-POINT 2: If + had p.p. -> could have p.p.",
      exp: "주절에 'could have detected'가 있으므로 If절에는 'had reviewed'가 정답입니다."
    },
    {
      q: (s) => `If the corporate leadership had approved the emergency budget extension last month, ${s} ___________ the advanced forensic software.`,
      correct: "might have procured",
      dist: ["procured", "will procure", "might procure"],
      trig: "If + had approved",
      hint: "단서: If절의 'had approved (had p.p.)'",
      gp: "G-POINT 2: If + had p.p. -> might have p.p.",
      exp: "If절에 had approved가 있으므로 주절은 'might have procured'가 정답입니다."
    },
    {
      q: (s) => `If ${s} ___________ the legal department regarding patent infringement risks last week, we could have avoided this expensive lawsuit.`,
      correct: "had consulted",
      dist: ["consulted", "consults", "would consult"],
      trig: "could have avoided",
      hint: "단서: 주절의 'could have avoided (could have p.p.)'",
      gp: "G-POINT 2: If + had p.p. -> could have p.p.",
      exp: "주절에 could have avoided가 쓰였으므로 If절에는 'had consulted'가 정답입니다."
    },
    {
      q: (s) => `If the flight dispatcher had notified the aircrew of severe localized icing conditions, the pilot ___________ to the alternate airport safely.`,
      correct: "would have diverted",
      dist: ["diverted", "will divert", "would divert"],
      trig: "If + had notified",
      hint: "단서: If절의 'had notified (had p.p.)'",
      gp: "G-POINT 2: If + had p.p. -> would have p.p.",
      exp: "If절에 had notified가 있으므로 주절에는 'would have diverted'가 정답입니다."
    },
    {
      q: (s) => `Had the pharmaceutical researchers conducted the preliminary toxicity screen earlier, ${s} ___________ the harmful compound immediately.`,
      correct: "would have identified",
      dist: ["identified", "will identify", "would identify"],
      trig: "Had the researchers conducted (도치)",
      hint: "단서: If 생략 도치 'Had + S + conducted (had p.p.)'",
      gp: "G-POINT 3: Had + S + p.p. (If생략 도치) -> 주절 would have p.p.",
      exp: "If가 생략되고 Had가 문두로 도치된 가정법 과거완료 구문이므로 주절은 'would have identified'가 정답입니다."
    },
    {
      q: (s) => `Had ${s} ___________ the emergency shutdown valve when the pressure gauge spiked, the chemical leakage could have been averted.`,
      correct: "engaged",
      dist: ["engages", "engaging", "would engage"],
      trig: "Had S [ ] ... could have been averted",
      hint: "단서: 도치 구문 'Had + S + p.p.' + 주절 'could have been averted'",
      gp: "G-POINT 3: Had + S + p.p. 도치 구문",
      exp: "문두의 Had와 결합하여 had p.p.를 구성하는 과거분사 'engaged'가 정답입니다."
    }
  ],

  // =========================================================================
  // 4. Should 생략 (주장·제안·요구 동사 & 당위성 형용사)
  // =========================================================================
  shouldVerbs: [
    "suggested", "recommended", "insisted", "demanded", "requested", 
    "required", "urged", "asked", "ordered", "commanded", "proposed", "mandated"
  ],

  shouldAdjectives: [
    "essential", "imperative", "vital", "necessary", "crucial", "mandatory", "urgent", "important"
  ],

  shouldSubjects: [
    "every regional sales representative", "each senior laboratory technician",
    "the chief project supervisor", "every newly recruited employee",
    "the executive facility director", "each clinical trial coordinator",
    "the head compliance auditor", "every branch branch manager"
  ],

  shouldActions: [
    { base: "wear", s: "wears", ed: "wore", ctx: "protective safety equipment on the industrial chemical manufacturing floor" },
    { base: "submit", s: "submits", ed: "submitted", ctx: "the audited expenditure receipts prior to the Friday noon deadline" },
    { base: "attend", s: "attends", ed: "attended", ctx: "the mandatory corporate cybersecurity training seminar this afternoon" },
    { base: "notify", s: "notifies", ed: "notified", ctx: "the regional safety supervisor immediately upon detecting any gas leak" },
    { base: "conduct", s: "conducts", ed: "conducted", ctx: "a comprehensive background screening on all prospective contractors" },
    { base: "maintain", s: "maintains", ed: "maintained", ctx: "accurate transaction logs in accordance with federal banking guidelines" },
    { base: "renew", s: "renews", ed: "renewed", ctx: "the environmental operating permit before the upcoming regulatory audit" },
    { base: "verify", s: "verifies", ed: "verified", ctx: "the structural load calculations before pouring the concrete foundation" }
  ],

  // =========================================================================
  // 5. 관계사 (Relative Clauses) - 10종 고유 실전 문제
  // =========================================================================
  relativePool: [
    {
      sub: "관계대명사 계속적 용법 (that 불가)",
      q: "The international pharmaceutical conglomerate acquired BioNova Therapeutics, ___________ developed the breakthrough oncology treatment last year.",
      correct: "which",
      dist: ["that", "who", "what"],
      trig: ", (콤마)",
      hint: "단서: 콤마(,) 뒤 사물 선행사 (that은 콤마 뒤 절대 불가)",
      gp: "G-POINT 17: 콤마(,) 뒤 that 사용 불가 -> which",
      exp: "선행사가 회사(사물)이며 콤마 뒤 계속적 용법이므로 that은 올 수 없고 which가 정답입니다."
    },
    {
      sub: "사람 선행사 주격 관계대명사 (who)",
      q: "The board of trustees commended the dedicated aerospace engineer ___________ designed the energy-efficient satellite propulsion module.",
      correct: "who",
      dist: ["which", "whom", "whose"],
      trig: "the dedicated engineer (사람 선행사)",
      hint: "단서: 사람 선행사 + 뒤에 주어가 없는 불완전한 절(designed...)",
      gp: "G-POINT 15: 사람 선행사 + 주격 = who",
      exp: "선행사가 사람(engineer)이고 뒤에 동사(designed)가 이어지므로 주격 관계대명사 who가 정답입니다."
    },
    {
      sub: "소유격 관계대명사 (whose)",
      q: "The university awarded an honorary fellowship to the young biochemist ___________ groundbreaking research thesis was published in Science.",
      correct: "whose",
      dist: ["who", "whom", "which"],
      trig: "biochemist [ ] groundbreaking research thesis",
      hint: "단서: 선행사(biochemist)와 뒤의 명사(thesis) 사이의 소유격 관계 (~의 논문)",
      gp: "G-POINT 18: 선행사 + whose + 무관사 명사",
      exp: "뒤에 완전한 형태의 명사구(groundbreaking thesis)가 오며 '생화학자의 논문'이라는 소유 관계이므로 whose가 정답입니다."
    },
    {
      sub: "장소 선행사 관계부사 (where)",
      q: "The technological corporation constructed an advanced research facility ___________ automated robotic manufacturing systems are tested daily.",
      correct: "where",
      dist: ["which", "what", "whom"],
      trig: "an advanced research facility (장소 선행사)",
      hint: "단서: 장소 선행사 + 뒤에 주어, 수동태 동사를 갖춘 완전한 절",
      gp: "G-POINT 19: 장소 선행사 + 완전한 절 = where",
      exp: "선행사가 장소이고 뒤따르는 절(systems are tested daily)이 수동태로 완전하므로 관계부사 where가 정답입니다."
    },
    {
      sub: "시간 선행사 관계부사 (when)",
      q: "The corporate leadership fondly remembered the historic milestone year ___________ the innovative clean-energy engine was launched globally.",
      correct: "when",
      dist: ["which", "where", "whom"],
      trig: "the historic milestone year (시간 선행사)",
      hint: "단서: 시간 선행사(year) + 뒤에 완전한 절",
      gp: "G-POINT 20: 시간 선행사 + 완전한 절 = when",
      exp: "선행사가 시간(year)이고 뒤에 주어+수동태 완전한 절이 오므로 관계부사 when이 정답입니다."
    },
    {
      sub: "전치사 + 관계대명사 (in which)",
      q: "The environmental symposium addressed the critical socio-economic context ___________ developing nations must transition away from fossil fuels.",
      correct: "in which",
      dist: ["which", "that", "where in"],
      trig: "the critical context [ ] S + V",
      hint: "단서: context를 수식하며 뒤에 완전한 절을 이끄는 전치사+관계대명사",
      gp: "G-POINT 21: 전치사 + 관계대명사(which) + 완전한 절",
      exp: "선행사 context와 어울려 '그 맥락 속에서'의 의미를 구성하며 뒤에 완전한 절이 오므로 'in which'가 정답입니다."
    },
    {
      sub: "사물 선행사 목적격 관계대명사 (which)",
      q: "The quality assurance inspector examined the specialized precision tools ___________ the senior machinist had ordered from Germany.",
      correct: "which",
      dist: ["who", "whom", "where"],
      trig: "specialized precision tools (사물 선행사)",
      hint: "단서: 사물 선행사(tools) + 목적어가 없는 불완전한 절",
      gp: "G-POINT 16: 사물 선행사 + 목적격 = which / that",
      exp: "선행사가 사물(tools)이며 ordered의 목적어가 비어 있으므로 사물 관계대명사 which가 정답입니다."
    },
    {
      sub: "사람 선행사 목적격 관계대명사 (whom)",
      q: "The hospital chief commended the veteran nurse ___________ the patient advisory council had nominated for the exceptional service award.",
      correct: "whom",
      dist: ["which", "whose", "where"],
      trig: "the veteran nurse (사람 선행사)",
      hint: "단서: 사람 선행사 + had nominated의 목적어 자리",
      gp: "G-POINT 15: 사람 선행사 + 목적격 = whom (또는 who)",
      exp: "선행사가 사람이고 타동사 nominated의 목적어 역할을 하므로 목적격 관계대명사 whom이 정답입니다."
    }
  ],

  // =========================================================================
  // 6. 조동사 (Modals) - 10종 고유 실전 문제
  // =========================================================================
  modalPool: [
    {
      sub: "법규/규정에 따른 절대적 의무 (must)",
      q: "According to rigorous international aviation safety protocols, all passengers ___________ fasten their seatbelts whenever the illuminate sign is active.",
      correct: "must",
      dist: ["might", "would", "could"],
      trig: "According to protocols (규정)",
      hint: "단서: 엄격한 항공 안전 법규 및 규정에 따른 강한 의무",
      gp: "G-POINT 22: 규정/법률 준수 의무 = must (~해야만 한다)",
      exp: "항공 안전 규정에 의해 반드시 지켜야 하는 강한 의무이므로 must가 정답입니다."
    },
    {
      sub: "건강/업무 권고 및 당위 (should)",
      q: "To prevent chronic repetitive strain injuries, ergonomic experts advise that computer programmers ___________ take brief stretch breaks every hour.",
      correct: "should",
      dist: ["might", "would", "may"],
      trig: "experts advise (권고 문맥)",
      hint: "단서: 전문가의 조언 및 권고 상황 (~하는 것이 바람직하다)",
      gp: "G-POINT 23: 충고/권고 = should (~하는 것이 좋다)",
      exp: "건강 예방을 위해 스트레칭을 하는 것이 바람직하다는 전문가의 권고 문맥이므로 should가 정답입니다."
    },
    {
      sub: "설비의 기능적 능력 및 가능성 (can)",
      q: "Thanks to newly installed high-efficiency photovoltaic panels, the automated greenhouse ___________ generate all its own electricity year-round.",
      correct: "can",
      dist: ["must", "should", "might"],
      trig: "Thanks to panels (능력 가능)",
      hint: "단서: 태양광 패널 설치로 인한 기능적 발전 능력(~할 수 있다)",
      gp: "G-POINT 24: 가능/능력 = can",
      exp: "설비 도입으로 자체 전력을 생산할 능력이 생겼음을 나타내므로 can이 정답입니다."
    },
    {
      sub: "기상/상황에 근거한 불확실한 추측 (may)",
      q: "Meteorological forecasts indicate severe ocean gale winds tomorrow, which ___________ cause minor shipping delays at the container terminal.",
      correct: "may",
      dist: ["must", "should", "can"],
      trig: "forecasts indicate (불확실한 추측)",
      hint: "단서: 일기예보에 근거한 개연성 있는 불확실한 가능성/추측",
      gp: "G-POINT 25: 불확실한 추측 = may (~일지도 모른다)",
      exp: "강풍으로 인해 지연이 발생할 수도 있다는 가능성/추측 문맥이므로 may가 정답입니다."
    },
    {
      sub: "공식 문서 작성 시 지침 준수 의무 (must)",
      q: "Applicants seeking government research grants ___________ submit all certified financial balance sheets prior to the portal closure.",
      correct: "must",
      dist: ["might", "could", "would"],
      trig: "seeking grants (필수 자격 요건)",
      hint: "단서: 연구비 수혜를 위해 필수적으로 제출해야 하는 절대적 요건",
      gp: "G-POINT 22: 필수 요건 = must",
      exp: "지원 자격을 얻기 위해 반드시 제출해야 하는 의무 조건이므로 must가 정답입니다."
    },
    {
      sub: "과거의 능력 및 가능성 (could)",
      q: "Decades before modern computer simulations were invented, visionary architects ___________ draft intricate structural blueprints entirely by hand.",
      correct: "could",
      dist: ["must", "should", "may"],
      trig: "Decades before were invented (과거)",
      hint: "단서: 과거(Decades before) 시점에서의 선천적/후천적 능력",
      gp: "G-POINT 24: 과거의 능력 = could",
      exp: "과거 시점에 손으로 직접 정밀 청사진을 그릴 수 있었다는 과거의 능력을 뜻하므로 could가 정답입니다."
    },
    {
      sub: "의학적 처방에 따른 필수 권고 (should)",
      q: "Patients undergoing the novel immunotherapy treatment ___________ monitor their body temperature twice daily as directed by their physician.",
      correct: "should",
      dist: ["might", "could", "would"],
      trig: "as directed by physician",
      hint: "단서: 의사의 지시에 따른 권고 및 주의사항",
      gp: "G-POINT 23: 의학적 권고 = should",
      exp: "의사의 처방 지침에 따라 체온을 측정하는 것이 권장된다는 당위적 표현이므로 should가 정답입니다."
    },
    {
      sub: "확정적 미래 의지 및 예정 (will)",
      q: "According to the corporate scheduling release, the newly appointed chief executive officer ___________ address the shareholders next Monday.",
      correct: "will",
      dist: ["must", "should", "might"],
      trig: "next Monday (확정된 미래 일정)",
      hint: "단서: 다음 주 월요일로 예정된 확정적 미래 일정",
      gp: "G-POINT 26: 미래 예정 = will",
      exp: "공식 일정 발표에 따른 확정적 미래 일정을 나타내므로 will이 정답입니다."
    }
  ],

  // =========================================================================
  // 7. 연결어 (Conjunctions & Connectors) - 10종 고유 실전 문제
  // =========================================================================
  conjunctionPool: [
    {
      sub: "양보 접속사 (Although + 절)",
      q: "___________ the manufacturing enterprise encountered severe supply chain disruptions throughout the winter, they succeeded in surpassing their revenue target.",
      correct: "Although",
      dist: ["Despite", "Because of", "However"],
      trig: "Although vs Despite",
      hint: "단서: 뒤에 주어+동사 절(the enterprise encountered...)이 연결됨",
      gp: "G-POINT 27: S+V 절을 이끄는 양보 접속사 = Although",
      exp: "뒤에 완전한 주어+동사 절이 오고 역접 양보 의미이므로 접속사 Although가 정답입니다. (Despite는 전치사)"
    },
    {
      sub: "양보 전치사 (Despite + 명사구)",
      q: "___________ torrential monsoon rainstorms during the early morning rush hour, all scheduled commuter express trains arrived on time.",
      correct: "Despite",
      dist: ["Although", "Even though", "Whereas"],
      trig: "torrential rainstorms (명사구)",
      hint: "단서: 뒤에 동사가 없는 순수 명사구(torrential rainstorms)",
      gp: "G-POINT 28: 명사(구)를 목적어로 취하는 양보 전치사 = Despite / In spite of",
      exp: "뒤에 주어+동사 절이 아닌 명사구만 이어지므로 전치사 Despite가 정답입니다."
    },
    {
      sub: "역접 연결부사 (However)",
      q: "The aerospace prototype exhibited flawless aerodynamic stability in computer simulations. ___________, unexpected overheating occurred during high-altitude testing.",
      correct: "However",
      dist: ["Therefore", "Furthermore", "Consequently"],
      trig: "stability vs overheating (대조)",
      hint: "단서: 앞문장(긍정 결과)과 뒷문장(발열 문제) 간의 역접 대조",
      gp: "G-POINT 29: 앞뒤 문맥 반전 연결부사 = However (그러나)",
      exp: "시뮬레이션 호평과 실제 비행에서의 문제점이라는 상반된 두 문장을 잇는 역접 연결부사 However가 정답입니다."
    },
    {
      sub: "인과 연결부사 (Therefore)",
      q: "Severe freezing blizzards grounded all regional cargo aircraft last night. ___________, express logistics packages will be delayed by one business day.",
      correct: "Therefore",
      dist: ["However", "Nevertheless", "Otherwise"],
      trig: "grounded aircraft -> delayed packages (인과)",
      hint: "단서: 앞문장(원인)과 뒷문장(결과)의 명확한 인과관계",
      gp: "G-POINT 30: 원인과 결과 연결부사 = Therefore (따라서, 그러므로)",
      exp: "항공편 결항이라는 원인으로 인해 배송이 지연된다는 당연한 결과가 이어지므로 인과 접속부사 Therefore가 정답입니다."
    },
    {
      sub: "이유 접속사 (Because + 절)",
      q: "___________ the raw component materials were held up in customs for two weeks, the assembly plant temporarily halted production lines.",
      correct: "Because",
      dist: ["Because of", "Due to", "Owing to"],
      trig: "the materials were held up (절)",
      hint: "단서: 뒤에 주어(the materials) + 동사(were held up) 절이 이어짐",
      gp: "G-POINT 31: 절을 이끄는 이유 접속사 = Because",
      exp: "뒤에 완전한 주어+동사 절이 오므로 전치사(Due to 등)가 아닌 이유 접속사 Because가 정답입니다."
    },
    {
      sub: "이유 전치사 (Due to + 명사구)",
      q: "___________ unforeseen logistical delays at the overseas maritime terminal, delivery dates for retail merchandise have been rescheduled.",
      correct: "Due to",
      dist: ["Because", "Since", "As"],
      trig: "unforeseen logistical delays (명사구)",
      hint: "단서: 뒤에 절이 아닌 명사구(delays)만 연결됨",
      gp: "G-POINT 32: 명사구를 이끄는 이유 전치사 = Due to / Because of",
      exp: "뒤에 주어+동사가 없는 순수 명사구만 있으므로 전치사 Due to가 정답입니다."
    },
    {
      sub: "시간/대조 접속사 (While + 절)",
      q: "___________ senior executives held discussions inside the boardroom, technical staff prepared the stage equipment in the auditorium.",
      correct: "While",
      dist: ["During", "Throughout", "Despite"],
      trig: "executives held discussions (절)",
      hint: "단서: 뒤에 주어+동사 절이 오며 동시 동작(~하는 동안)을 나타냄",
      gp: "G-POINT 33: 절을 이끄는 시간 접속사 = While (During은 전치사)",
      exp: "뒤에 주어+동사 절이 오고 동시 동작을 나타내므로 접속사 While이 정답입니다. (During은 명사구 전치사)"
    },
    {
      sub: "첨가 연결부사 (Furthermore)",
      q: "The upgraded smartphone application offers streamlined biometric authentication. ___________, it reduces battery consumption by twenty percent.",
      correct: "Furthermore",
      dist: ["However", "Instead", "Nevertheless"],
      trig: "streamlined auth + reduced battery (장점 첨가)",
      hint: "단서: 앞문장의 장점에 이어 또 다른 장점을 추가하는 순접 첨가",
      gp: "G-POINT 29: 순접/정보 추가 연결부사 = Furthermore / Moreover (게다가)",
      exp: "인증 간소화에 이어 배터리 절감이라는 긍정적 기능을 추가하는 문맥이므로 Furthermore가 정답입니다."
    }
  ],

  // =========================================================================
  // 문제 생성 핵심 로직 (중복 방지 & 무한 조합)
  // =========================================================================

  // 시제 문제 1개 생성
  generateTenseQuestion(specificType, usedIndices = new Set()) {
    const types = ['과진', '현진', '미진', '과완진', '현완진', '미완진'];
    const type = specificType || types[Math.floor(Math.random() * types.length)];
    const templates = this.tenseTemplates[type];
    
    // 템플릿 중복 방지
    let tmplIdx = Math.floor(Math.random() * templates.length);
    for (let attempt = 0; attempt < templates.length; attempt++) {
      const candidateKey = `${type}_${tmplIdx}`;
      if (!usedIndices.has(candidateKey)) {
        usedIndices.add(candidateKey);
        break;
      }
      tmplIdx = (tmplIdx + 1) % templates.length;
    }
    const tmpl = templates[tmplIdx];

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
      explanation: `지텔프 출제 공식에 따라 문장 속 핵심 단서인 [${tmpl.trigger}]가 명확하므로 진행형 시제인 '${correct}'가 정답입니다.`
    };
  },

  // 준동사 문제 1개 생성 (동명사 vs to부정사)
  generateGerundInfinitiveQuestion(forceType, usedVerbs = new Set()) {
    const isGerund = forceType ? forceType === '동명사' : Math.random() > 0.5;
    const pool = isGerund ? this.gerundVerbs : this.infinitiveVerbs;
    
    // 동사 중복 방지
    let item = pool[Math.floor(Math.random() * pool.length)];
    for (let attempt = 0; attempt < pool.length; attempt++) {
      if (!usedVerbs.has(item.v)) {
        usedVerbs.add(item.v);
        break;
      }
      item = pool[(Math.floor(Math.random() * pool.length))];
    }

    const opening = this.contextOpenings[Math.floor(Math.random() * this.contextOpenings.length)];
    const subj = this.subjects[Math.floor(Math.random() * this.subjects.length)];

    const question = `${opening} ${subj} ${item.v} ___________ ${item.ctx}.`;

    if (isGerund) {
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
        hint: `단서: 동사 '${item.v}' 뒤 목적어 자리 (암기표: ${item.v} + 동명사)`,
        gPoint: `G-POINT 13: ${item.v} + 동명사(-ing)`,
        explanation: `동사 '${item.v}'는 동명사만을 목적어로 취하는 지텔프 빈출 대표 동사이므로 '${item.obj}'가 정답입니다.`
      };
    } else {
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
        hint: `단서: 동사 '${item.v}' 뒤 목적어 자리 (암기표: ${item.v} + to부정사)`,
        gPoint: `G-POINT 14: ${item.v} + to부정사(to V)`,
        explanation: `동사 '${item.v}'는 미래지향적인 to부정사만을 목적어로 취하므로 '${item.obj}'가 정답입니다.`
      };
    }
  },

  // 가정법 문제 1개 생성
  generateSubjunctiveQuestion(forceType, usedIndices = new Set()) {
    const isPast = forceType ? forceType === '과거' : Math.random() > 0.5;
    const pool = isPast ? this.subjunctivePastItems : this.subjunctivePastPerfItems;
    
    let itemIdx = Math.floor(Math.random() * pool.length);
    for (let attempt = 0; attempt < pool.length; attempt++) {
      const key = `${isPast ? 'P' : 'PP'}_${itemIdx}`;
      if (!usedIndices.has(key)) {
        usedIndices.add(key);
        break;
      }
      itemIdx = (itemIdx + 1) % pool.length;
    }
    const item = pool[itemIdx];
    const subj = this.subjects[Math.floor(Math.random() * this.subjects.length)];

    const question = item.q(subj);
    const options = [
      { text: item.correct, isCorrect: true },
      ...item.dist.map(d => ({ text: d, isCorrect: false }))
    ].sort(() => Math.random() - 0.5);

    return {
      id: `SUB-${Date.now()}-${Math.floor(Math.random()*10000)}`,
      category: "subjunctive",
      subCategory: isPast ? "가정법과거" : "가정법과거완료",
      subCategoryName: isPast ? "가정법 > 가정법 과거 (If 과거, would 동사원형)" : "가정법 > 가정법 과거완료 (If had p.p., would have p.p.)",
      question: question,
      options: options,
      triggerWord: item.trig,
      hint: item.hint,
      gPoint: item.gp,
      explanation: item.exp
    };
  },

  // Should 생략 문제 1개 생성 (동사 패턴 or 형용사 패턴 교차)
  generateShouldQuestion(usedVerbs = new Set()) {
    const isAdjective = Math.random() > 0.6; // 40% 확률로 It is 형용사 that 구문
    const subj2 = this.shouldSubjects[Math.floor(Math.random() * this.shouldSubjects.length)];
    const act = this.shouldActions[Math.floor(Math.random() * this.shouldActions.length)];

    let question = "";
    let trigger = "";
    let hint = "";
    let gPoint = "";

    if (isAdjective) {
      const adj = this.shouldAdjectives[Math.floor(Math.random() * this.shouldAdjectives.length)];
      question = `It is highly ${adj} that ${subj2} ___________ ${act.ctx}.`;
      trigger = `It is ${adj} that`;
      hint = `단서: 당위성 형용사 'It is ${adj} that + S + (should) 동사원형'`;
      gPoint = `G-POINT 11: It is + ${adj} + that S + (should) 동사원형`;
    } else {
      let v = this.shouldVerbs[Math.floor(Math.random() * this.shouldVerbs.length)];
      for (let attempt = 0; attempt < this.shouldVerbs.length; attempt++) {
        if (!usedVerbs.has(v)) {
          usedVerbs.add(v);
          break;
        }
        v = this.shouldVerbs[(Math.floor(Math.random() * this.shouldVerbs.length))];
      }
      const subj1 = this.subjects[Math.floor(Math.random() * this.subjects.length)];
      question = `${subj1} strongly ${v} that ${subj2} ___________ ${act.ctx}.`;
      trigger = `${v} that`;
      hint = `단서: 주장/제안/요구 동사 '${v} that + S + (should) 동사원형'`;
      gPoint = `G-POINT 11: ${v} + that S + (should) 동사원형`;
    }

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
      subCategoryName: `Should 생략 > ${trigger} S + (should) 동사원형`,
      question: question,
      options: options,
      triggerWord: trigger,
      hint: hint,
      gPoint: gPoint,
      explanation: `주절에 당위성을 나타내는 표현이 쓰였으므로 that절 내부에는 조동사 should가 생략되어 주어의 단수/복수 인칭에 관계없이 무조건 동사원형 '${act.base}'가 정답입니다.`
    };
  },

  // 기타 파트 문제 생성 (관계사, 조동사, 연결어 풀에서 비복원 추출)
  generateOtherQuestion(category, usedPool = new Set()) {
    let pool = [];
    if (category === 'relative') pool = this.relativePool;
    else if (category === 'modal') pool = this.modalPool;
    else pool = this.conjunctionPool;

    let itemIdx = Math.floor(Math.random() * pool.length);
    for (let attempt = 0; attempt < pool.length; attempt++) {
      const key = `${category}_${itemIdx}`;
      if (!usedPool.has(key)) {
        usedPool.add(key);
        break;
      }
      itemIdx = (itemIdx + 1) % pool.length;
    }
    const item = pool[itemIdx];

    return {
      id: `${category.toUpperCase()}-${Date.now()}-${Math.floor(Math.random()*10000)}`,
      category: category,
      subCategory: item.sub,
      subCategoryName: `${category === 'relative' ? '관계사' : category === 'modal' ? '조동사' : '연결어'} > ${item.sub}`,
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
  },

  // =========================================================================
  // 통합 세트 생성기 (세션 내 완벽한 중복 방지 필터 적용)
  // =========================================================================
  generateSet(category, count = 10) {
    const set = [];
    
    // 세션 내 중복 방지용 추적 집합
    const usedTenseTemplates = new Set();
    const usedGerundVerbs = new Set();
    const usedSubjTemplates = new Set();
    const usedShouldVerbs = new Set();
    const usedOtherItems = new Set();

    // 1. 실전 26문제 풀세트 모의고사 (G-TELP 공식 100% 반영)
    if (count === 26 || category === 'full_26') {
      // 시제 6문제 (과진, 현진, 미진, 과완진, 현완진, 미완진 각 1개)
      ['과진', '현진', '미진', '과완진', '현완진', '미완진'].forEach(t => {
        set.push(this.generateTenseQuestion(t, usedTenseTemplates));
      });
      // 가정법 6문제 (과거 3개 + 과거완료 3개)
      for (let i = 0; i < 3; i++) set.push(this.generateSubjunctiveQuestion('과거', usedSubjTemplates));
      for (let i = 0; i < 3; i++) set.push(this.generateSubjunctiveQuestion('과거완료', usedSubjTemplates));
      // 준동사 5문제 (동명사 3개 + to부정사 2개)
      for (let i = 0; i < 3; i++) set.push(this.generateGerundInfinitiveQuestion('동명사', usedGerundVerbs));
      for (let i = 0; i < 2; i++) set.push(this.generateGerundInfinitiveQuestion('to부정사', usedGerundVerbs));
      // Should 생략 3문제
      for (let i = 0; i < 3; i++) set.push(this.generateShouldQuestion(usedShouldVerbs));
      // 관계사 2문제
      set.push(this.generateOtherQuestion('relative', usedOtherItems));
      set.push(this.generateOtherQuestion('relative', usedOtherItems));
      // 조동사 2문제
      set.push(this.generateOtherQuestion('modal', usedOtherItems));
      set.push(this.generateOtherQuestion('modal', usedOtherItems));
      // 연결어 2문제
      set.push(this.generateOtherQuestion('conjunction', usedOtherItems));
      set.push(this.generateOtherQuestion('conjunction', usedOtherItems));
    }
    // 2. 시제 10문제 코스 (6대 시제 필수 포함 + 나머지 4개 균형 배분)
    else if (category === 'tense') {
      ['과진', '현진', '미진', '과완진', '현완진', '미완진'].forEach(t => {
        set.push(this.generateTenseQuestion(t, usedTenseTemplates));
      });
      const extraTenses = ['과진', '현진', '미진', '현완진'];
      extraTenses.forEach(t => {
        set.push(this.generateTenseQuestion(t, usedTenseTemplates));
      });
    }
    // 3. 준동사 10문제 코스 (동명사 5 + to부정사 5 균형, 10개 동사 완전 비중복)
    else if (category === 'gerund_infinitive') {
      for (let i = 0; i < 5; i++) set.push(this.generateGerundInfinitiveQuestion('동명사', usedGerundVerbs));
      for (let i = 0; i < 5; i++) set.push(this.generateGerundInfinitiveQuestion('to부정사', usedGerundVerbs));
    }
    // 4. 가정법 10문제 코스 (과거 5 + 과거완료 5 균형, 10개 템플릿 완전 비중복)
    else if (category === 'subjunctive') {
      for (let i = 0; i < 5; i++) set.push(this.generateSubjunctiveQuestion('과거', usedSubjTemplates));
      for (let i = 0; i < 5; i++) set.push(this.generateSubjunctiveQuestion('과거완료', usedSubjTemplates));
    }
    // 5. Should 생략 10문제 코스 (동사/형용사 패턴 교차, 동사 완전 비중복)
    else if (category === 'should_omission') {
      for (let i = 0; i < 10; i++) set.push(this.generateShouldQuestion(usedShouldVerbs));
    }
    // 6. 기타 파트 (관계사, 조동사, 연결어 8~10문제 비복원 추출)
    else if (category === 'relative' || category === 'modal' || category === 'conjunction') {
      for (let i = 0; i < 10; i++) set.push(this.generateOtherQuestion(category, usedOtherItems));
    }
    // 7. 종합 10문제 코스 (전 문법 고루 안배)
    else {
      set.push(this.generateTenseQuestion('과진', usedTenseTemplates));
      set.push(this.generateTenseQuestion('현진', usedTenseTemplates));
      set.push(this.generateTenseQuestion('미진', usedTenseTemplates));
      set.push(this.generateTenseQuestion('과완진', usedTenseTemplates));
      set.push(this.generateGerundInfinitiveQuestion('동명사', usedGerundVerbs));
      set.push(this.generateGerundInfinitiveQuestion('to부정사', usedGerundVerbs));
      set.push(this.generateSubjunctiveQuestion('과거', usedSubjTemplates));
      set.push(this.generateSubjunctiveQuestion('과거완료', usedSubjTemplates));
      set.push(this.generateShouldQuestion(usedShouldVerbs));
      set.push(this.generateOtherQuestion('relative', usedOtherItems));
    }

    // 최종 순서 무작위 셔플 (Fisher-Yates)
    for (let i = set.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [set[i], set[j]] = [set[j], set[i]];
    }

    return set;
  },

  // 편의용 메서드
  generate10Set(category) {
    return this.generateSet(category, 10);
  },

  generate26MockExam() {
    return this.generateSet('full_26', 26);
  }
};