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
    { v: "enjoyed", obj: "collaborating", plain: "collaborate", toV: "to collaborate", ctx: "with international aerospace scientists on satellite orbit simulation" },
    { 
      v: "recommended", 
      obj: "upgrading", 
      plain: "upgrade", 
      toV: "to upgrade", 
      ctx: "the enterprise firewalls to prevent potential cyber intrusions",
      customHint: "단서: [🚨 준동사 오답-POINT 1 주의!] recommend 바로 뒤에 목적어가 없을 때는 동명사(-ing)가 목적어!",
      customGp: "G-POINT 13 / 준동사 오답-POINT 1: recommend + -ing (동사 바로 뒤)",
      customExp: "recommend 뒤에 사람 목적어가 끼어있지 않고 바로 빈칸이 오면 동명사 목적어가 와야 하므로 'upgrading'이 정답입니다."
    },
    { 
      v: "prevented the industrial chemical from", 
      obj: "contaminating", 
      plain: "contaminate", 
      toV: "to contaminate", 
      ctx: "the municipal drinking reservoir during the flash flood",
      customHint: "단서: [📌 관용표현 TOP 1] prevent A from ~ing (A가 ~하는 것을 막다)",
      customGp: "G-POINT 20: prevent [stop, keep] A from ~ing",
      customExp: "전치사 from 뒤에는 동명사가 오며, 'prevent A from ~ing'는 지텔프 최빈출 관용표현이므로 'contaminating'이 정답입니다."
    },
    { 
      v: "looked forward to", 
      obj: "receiving", 
      plain: "receive", 
      toV: "to receive", 
      ctx: "the certified patent clearance certificate from the federal intellectual bureau",
      customHint: "단서: [📌 관용표현 TOP 2] look forward to ~ing (to가 전치사이므로 동명사가 정답!)",
      customGp: "G-POINT 20: look forward to ~ing",
      customExp: "look forward to에서 'to'는 to부정사가 아니라 전치사이므로 뒤에 동명사인 'receiving'이 정답입니다. (단골 낚시 표현!)"
    }
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
    { v: "resolved", obj: "to overhaul", plain: "overhaul", ing: "overhauling", ctx: "the legacy cloud infrastructure to minimize latency for mobile users" },
    { 
      v: "encouraged the young researchers", 
      obj: "to pursue", 
      plain: "pursue", 
      ing: "pursuing", 
      ctx: "groundbreaking genomic experiments independently",
      customHint: "단서: [🚨 준동사 오답-POINT 1 주의!] encourage + 목적어(A) 뒤 목적격보어는 to부정사!",
      customGp: "G-POINT 19 / 준동사 오답-POINT 1: encourage A to V",
      customExp: "encourage 뒤에 목적어(the young researchers)가 있으므로 5형식 목적격보어 자리에는 to부정사인 'to pursue'가 정답입니다. (출제 단골 1순위 함정!)"
    },
    { 
      v: "advised the regional sales managers", 
      obj: "to review", 
      plain: "review", 
      ing: "reviewing", 
      ctx: "the revised distribution partnership terms carefully before signing",
      customHint: "단서: [🚨 준동사 오답-POINT 1 주의!] advise + 목적어(A) 뒤 목적격보어는 to부정사!",
      customGp: "G-POINT 19 / 준동사 오답-POINT 1: advise A to V",
      customExp: "advise 뒤에 목적어(the managers)가 있으므로 목적격보어로 to부정사인 'to review'가 정답입니다."
    },
    { 
      v: "required all factory personnel", 
      obj: "to wear", 
      plain: "wear", 
      ing: "wearing", 
      ctx: "approved safety goggles and respirators in hazardous chemical zones",
      customHint: "단서: [🚨 준동사 오답-POINT 1 주의!] require + 목적어(A) 뒤 목적격보어는 to부정사!",
      customGp: "G-POINT 19 / 준동사 오답-POINT 1: require A to V",
      customExp: "require 뒤에 목적어(all factory personnel)가 있으므로 목적격보어 자리에 to부정사인 'to wear'가 정답입니다."
    }
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
    },
    {
      q: (s) => `If the research laboratory had sufficient funding for advanced spectroscopy, ${s} ___________ the chemical compound structure easily.`,
      correct: "could analyze",
      dist: ["analyzed", "will analyze", "could have analyzed"],
      trig: "If + had funding (had + 명사)",
      hint: "단서: [🚨 오답-POINT 2 주의!] 'had funding'의 had는 pp가 없는 일반동사 '가지다'의 과거형 -> 가정법 과거!",
      gp: "G-POINT 1 / 오답-POINT 2: If + had + 명사 -> 주절 would/could + 동사원형",
      exp: "had 뒤에 p.p.가 아닌 명사(sufficient funding)가 왔으므로 had는 조동사가 아닌 일반동사의 과거형입니다! 따라서 가정법 과거 공식(If 과거, would/could 동원)에 의해 'could analyze'가 정답입니다. (출제 단골 1순위 함정!)"
    },
    {
      q: (s) => `If the compliance auditor could verify all digital transaction hashes, ${s} ___________ the official certification today.`,
      correct: "would issue",
      dist: ["issued", "will issue", "would have issued"],
      trig: "If + could verify (조동사 과거)",
      hint: "단서: [🚨 오답-POINT 3 주의!] If절의 'could verify'는 과거 시제 -> 가정법 과거 공식 적용",
      gp: "G-POINT 1 / 오답-POINT 3: If + could/did + 동사원형 -> 주절 would + 동사원형",
      exp: "If절에 과거형 조동사 'could'가 쓰였으므로 가정법 과거입니다. 주절에는 'would + 동사원형'인 'would issue'가 정답입니다."
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
      gp: "G-POINT 3 / 오답-POINT 1: Had + S + p.p. (If생략 도치 구문)",
      exp: "문두의 Had와 결합하여 had p.p.를 구성하는 과거분사 'engaged'가 정답입니다. (If 생략 도치 구문)"
    },
    {
      q: (s) => `If the international research consortium had received federal approval last year, they ___________ the life-saving therapeutic vaccine across hospitals today.`,
      correct: "would distribute",
      dist: ["distributed", "will distribute", "would have distributed"],
      trig: "If had received (과거) ... today (현재)",
      hint: "단서: [🚨 오답-POINT 6 주의!] If절 'had received(과거)' + 주절 끝 'today(현재)' -> 혼합가정법!",
      gp: "G-POINT 2 / 오답-POINT 6: If + had p.p., 주절 would/could + 동사원형 + today/now (혼합가정법)",
      exp: "If절은 과거 사실의 반대(had received last year)이지만, 주절 끝에 현재 시점 부사 'today'가 있으므로 '혼합가정법'입니다! 따라서 would have p.p.가 아니라 'would + 동사원형'인 'would distribute'가 정답입니다. (출제 단골 함정!)"
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
  // 5. 관계사 (Relative Clauses) - 교재 20문항 실전 패턴 및 오답 함정 완벽 반영 풀
  // =========================================================================
  relativePool: [
    {
      sub: "사람 선행사 목적격 관계대명사 (whom)",
      q: "A strange man came up to her at the charity event and greeted her, but she didn't recognize him. It wasn't until he introduced himself as the man ___________ that she remembered who he was.",
      correct: "whom she had met in Cairo",
      dist: ["which had met in Cairo", "when she had met him in Cairo", "where she had met in Cairo"],
      trig: "the man (사람 선행사) + had met의 목적어 결여",
      hint: "선행사가 사람(man)이고 타동사 had met의 목적어가 빠진 목적격 자리",
      gp: "G-POINT 22: 사람 선행사 + 뒤에 목적어 없음 -> whom / who",
      exp: "선행사가 사람(the man)이며, had met의 목적어 역할을 하는 목적격 관계대명사 절 'whom she had met in Cairo'가 정답입니다. which는 사물 선행사, when/where는 관계부사라 오답입니다."
    },
    {
      sub: "사물 선행사 콤마 계속적 용법 (that 불가 + 대명사 중복 오답)",
      q: "He had created great works of art, ___________ to the development of art history. So it's no wonder he is considered by many a great artist.",
      correct: "which inspired artists and contributed greatly",
      dist: ["that inspired artists and contributed greatly", "who he inspired artists and contributed greatly", "whose they inspired artists and contributed greatly"],
      trig: ", (콤마) + great works of art (사물 선행사)",
      hint: "콤마(,) 뒤 계속적 용법은 that 소거! 선행사가 사물이므로 who 소거 및 대명사(he, they) 중복 선지 소거!",
      gp: "G-POINT 23 & 25: 사물 선행사 + 콤마 뒤 that 불가 = which",
      exp: "선행사가 사물 복수명사(great works of art)이고 콤마 뒤 계속적 용법이므로 that은 쓸 수 없습니다. 또한 관계사 절 내에 주어 대명사 he나 they가 중복 삽입된 보기는 대표적 지텔프 오답 함정입니다. 따라서 which inspired...가 정답입니다."
    },
    {
      sub: "장소 선행사 관계부사 (where)",
      q: "Tomorrow, Amy is going to go to the football stadium ___________ . Strict rules will be applied, which encourage players to play fair, thus satisfying spectators.",
      correct: "where the final game will be held",
      dist: ["when the final game will be held", "who the final game will be held", "what will hold the final game"],
      trig: "the football stadium (장소 선행사) + 수동태 완전한 절",
      hint: "선행사가 장소(stadium)이며 뒤에 주어+수동태 동사를 갖춘 완전한 절",
      gp: "G-POINT 26: 장소 선행사 + 완전한 문장 = 관계부사 where",
      exp: "선행사가 구체적 장소(stadium)이고 뒷문장 'the final game will be held'가 수동태로 완전하므로 관계부사 where가 이끄는 절이 정답입니다."
    },
    {
      sub: "사람 선행사 주격 관계대명사 (who)",
      q: "According to a research, eight out of ten people ___________ responded they felt lonely, especially when they had some degree of uncertainty in their lives.",
      correct: "who were looking for a job",
      dist: ["whom they were looking for a job", "when were looking for a job", "where were looking for a job"],
      trig: "people (사람 선행사) + 주어가 빠진 불완전 절",
      hint: "사람 선행사(people) + 동사 were looking의 주어 역할 (whom + they 대명사 중복 오답 소거)",
      gp: "G-POINT 21: 사람 선행사 + 주어 없음 = who",
      exp: "선행사가 사람(people)이고 뒤에 주어가 비어있는 불완전한 절이 오므로 주격 관계대명사 who가 정답입니다. whom they~는 목적격 whom에 they가 중복 삽입되어 오답입니다."
    },
    {
      sub: "사물 선행사 콤마 계속적 용법 (that 불가 + it 대명사 중복 오답)",
      q: "These days, there are many children suffering from smartphone addiction, ___________ but also cognitive and emotional development.",
      correct: "which hinders not only physical development",
      dist: ["that it hinders not only physical development", "who hinders not only physical development", "what it hinders not only physical development"],
      trig: ", (콤마) + smartphone addiction (사물 선행사)",
      hint: "콤마 뒤 that 불가! + 선행사를 받는 대명사 it 중복 오답 1초 컷 소거!",
      gp: "G-POINT 23 & 25: 사물 선행사 + 콤마 뒤 that 불가 + it 중복 제거",
      exp: "선행사가 사물(smartphone addiction)이고 콤마 뒤이므로 that은 절대 불가합니다. 또한 절 내에 it이 중복 삽입된 (a)와 (d)는 지텔프 전형적 오답 트랩입니다. 따라서 which hinders...가 정답입니다."
    },
    {
      sub: "사물 선행사 주격 관계대명사 (which)",
      q: "'Popcorn brain' is a phenomenon ___________ and is insensitive to others. It is often seen in people using electronic devices excessively.",
      correct: "which responds only to powerful stimuli",
      dist: ["when responds only to powerful stimuli", "what the brain responds only to powerful stimuli", "where the brain responds only to powerful stimuli"],
      trig: "a phenomenon (사물 선행사) + 주어 결여",
      hint: "사물 선행사(phenomenon) + 뒤에 동사 responds가 바로 오는 주격 자리",
      gp: "G-POINT 23: 사물 선행사 + 주격 = which / that",
      exp: "선행사가 사물(현상)이고 뒤에 주어가 없는 불완전한 절이 이어지므로 주격 관계대명사 which가 정답입니다. when이나 where는 뒤에 완전한 절이 와야 하므로 오답입니다."
    },
    {
      sub: "시간 선행사 관계부사 (when)",
      q: "The release day of the last Avengers movie had been announced. Yesterday was the day ___________, but the movie tickets were sold out in no time.",
      correct: "when people could book the movie ticket",
      dist: ["where could book the movie ticket", "which people could book the movie ticket", "who could book the movie ticket"],
      trig: "the day (시간 선행사) + 완전한 절",
      hint: "시간 선행사(the day) + 주어(people)와 목적어(the ticket)를 모두 갖춘 완전한 문장",
      gp: "G-POINT 26: 시간 선행사 + 완전한 문장 = 관계부사 when",
      exp: "선행사가 시간(the day)이고 뒤에 주어+타동사+목적어가 완전하게 갖추어져 있으므로 관계부사 when이 정답입니다. which 뒤에는 불완전한 문장이 와야 합니다."
    },
    {
      sub: "사람 고유명사 선행사 콤마 계속적 용법 (who)",
      q: "Douglas, ___________, enjoyed reciting poems sometimes. He especially liked the poem titled 'Youth', which inspired many local listeners.",
      correct: "who was an English teacher in Maryland",
      dist: ["which an English teacher in Maryland was", "where he was an English teacher in Maryland", "whom he was an English teacher in Maryland"],
      trig: "Douglas (사람 이름) + 콤마 계속적 용법",
      hint: "사람 고유명사 선행사 + 주어가 비어있는 불완전한 절",
      gp: "G-POINT 21: 사람 선행사 + 주격 = who",
      exp: "선행사가 사람 이름(Douglas)이며 동사 was 앞의 주어가 빠져 있으므로 주격 관계대명사 who가 정답입니다. which는 사물에 쓰이며, he가 중복 삽입된 보기는 오답입니다."
    },
    {
      sub: "사물 선행사 주격 관계대명사 (that)",
      q: "Some educators suggest learning occurs through repetition. From this point of view, knowledge tends to be reinforced through a mechanical way ___________.",
      correct: "that is helpful to memorize the learning content",
      dist: ["which it is helpful to memorize the learning content", "whom it is helpful to memorize the learning content", "when is helpful to memorize the learning content"],
      trig: "a mechanical way (사물 선행사) + 주어 결여",
      hint: "사물 선행사 + 주격 자리 (which it~ 대명사 it 중복 함정 즉시 소거!)",
      gp: "G-POINT 23: 사물 선행사 + 주격 = that / which",
      exp: "선행사가 사물(a mechanical way)이고 뒤에 is의 주어가 빠져 있으므로 that이 정답입니다. which it~은 선행사를 받는 대명사 it이 중복 삽입된 지텔프 대표 오답 함정입니다."
    },
    {
      sub: "시간 선행사 관계부사 (when)",
      q: "Jack was eagerly looking forward to the upcoming concert of Maroon 5. But he was so busy that he couldn't realize that last Wednesday was the day ___________.",
      correct: "when ticket sales started",
      dist: ["where ticket sales started", "who ticket sales started", "what it started ticket sales"],
      trig: "the day (시간 선행사) + 1형식 완전한 절",
      hint: "시간 선행사(the day) + 주어(ticket sales) + 자동사(started)의 완전한 절",
      gp: "G-POINT 26: 시간 선행사 + 완전한 절 = 관계부사 when",
      exp: "선행사가 시간 명사(the day)이고 뒤에 '티켓 판매가 시작되다'라는 완전한 1형식 문장이 이어지므로 관계부사 when이 정답입니다."
    },
    {
      sub: "소유격 관계대명사 (whose + 무관사 명사)",
      q: "Most infants acquire linguistic competence naturally through various stimuli. Because babies ___________ are exposed to rich verbal environments, it is beneficial.",
      correct: "whose parents say a lot of words",
      dist: ["who parents say a lot of words", "which say a lot of words", "whom parents say a lot of words"],
      trig: "babies [ ] parents (아기들의 부모님 - 소유격 관계)",
      hint: "선행사(babies)와 뒤의 무관사 명사 주어(parents)가 소유격 관계 (~의)",
      gp: "G-POINT 24: 선행사 + 소유 관계(~의) + 뒷문장 완전 = whose",
      exp: "선행사 babies와 뒤의 명사 parents 사이에 '아기들의 부모'라는 소유 관계가 성립하고 뒷절이 완전하므로 소유격 관계대명사 whose가 정답입니다."
    },
    {
      sub: "사물 선행사 목적격 관계대명사 (that)",
      q: "The photograph of the supermassive black hole ___________ was made public for the first time in astrophysics history.",
      correct: "that Event Horizon Telescope had observed",
      dist: ["which had observed Event Horizon Telescope", "when Event Horizon Telescope had observed", "where Event Horizon Telescope had observed"],
      trig: "black hole (사물 선행사) + had observed의 목적어 결여",
      hint: "사물 선행사 + 능동태 타동사 observed의 목적어가 빠진 목적격 절",
      gp: "G-POINT 23: 사물 선행사 + 목적격 = that / which",
      exp: "선행사가 사물(black hole)이고 뒤에 망원경(EHT)이 관측했던 목적어 자리가 비어 있으므로 목적격 관계대명사 that이 정답입니다."
    },
    {
      sub: "단체 선행사 콤마 계속적 용법 (which + they 중복 오답)",
      q: "Many wildlife species affected by the oil spill were not protected properly. Thus, various animal rescue coalitions, ___________, rushed to provide emergency care.",
      correct: "which had tried to treat and rescue animals",
      dist: ["who they had tried to treat and rescue animals", "what they had tried to treat and rescue animals", "where had tried to treat and rescue animals"],
      trig: "coalitions (단체/사물 선행사) + 콤마 계속적 용법",
      hint: "단체/조직 선행사(사물 취급) + 콤마 뒤 + they 중복 소거",
      gp: "G-POINT 23 & 25: 단체 선행사 + 콤마 뒤 = which (they 중복 제거)",
      exp: "선행사가 단체/조직(coalitions)으로 사물 취급되며, 콤마 뒤 계속적 용법이고 they 대명사가 중복되지 않은 'which had tried to treat...'가 정답입니다."
    },
    {
      sub: "장소 명사 선행사 + 불완전 절 (관계부사 오답 함정)",
      q: "There are intense debates about cultural diversity. This is illustrated by ongoing controversy in some countries ___________ under traditional laws.",
      correct: "that oppress women severely",
      dist: ["which women oppress severely", "where oppress women severely", "when oppress women severely"],
      trig: "some countries (선행사) + oppress의 주어 결여",
      hint: "선행사가 국가(countries)이지만 뒤에 주어가 없는 '불완전한 절'이므로 where가 아닌 관계대명사 that 필요!",
      gp: "G-POINT 23: 불완전 절 -> 관계대명사 (where는 완전한 절에만 사용)",
      exp: "선행사가 장소/국가(countries)처럼 보이지만, 뒤에 주어가 빠진 불완전한 절(동사 oppress...)이 오므로 관계부사 where는 절대 쓸 수 없고 관계대명사 that이 정답입니다."
    },
    {
      sub: "사물 선행사 주격 관계대명사 (which)",
      q: "The problem with illicit narcotics in metropolitan centers has surfaced. Authorities must conduct an intensive inquiry into the illegal drug trade ___________.",
      correct: "which causes serious socio-economic effects",
      dist: ["what it causes serious socio-economic effects", "where causes serious socio-economic effects", "when causes serious socio-economic effects"],
      trig: "the drug trade (사물 선행사) + causes의 주어 결여",
      hint: "사물 선행사 + 주어가 빠진 불완전한 절 (what 및 it 중복 소거)",
      gp: "G-POINT 23: 사물 선행사 + 주격 = which / that",
      exp: "선행사가 사물(the drug trade)이며 동사 causes 앞 주어 자리가 비어있으므로 사물 주격 관계대명사 which가 정답입니다. what it은 선행사 수식 불가 및 it 중복으로 오답입니다."
    },
    {
      sub: "사물 선행사 콤마 계속적 용법 (that 불가)",
      q: "The local bakery became remarkably famous through social media. Furthermore, it is recording unprecedented sales after appearing on a popular TV show, ___________.",
      correct: "which has a great influence on domestic consumers",
      dist: ["that has a great influence on domestic consumers", "who has a great influence on domestic consumers", "when has a great influence on domestic consumers"],
      trig: ", (콤마) + TV show (사물 선행사)",
      hint: "콤마 뒤 that 절대 불가 법칙! + 사물 선행사 -> which",
      gp: "G-POINT 25: 콤마(,) 뒤 that 소거 -> which",
      exp: "콤마(,) 뒤 계속적 용법에서는 that을 절대 쓸 수 없습니다! 선행사가 사물(TV show)이므로 'which has a great influence...'가 정답입니다."
    },
    {
      sub: "사물 선행사 주격 관계대명사 (that)",
      q: "An international e-commerce platform ___________ is facing an existential crisis due to defective merchandise and fraudulent merchant accounts.",
      correct: "that is the most popular in Southeast Asia",
      dist: ["when it is the most popular in Southeast Asia", "which it is the most popular in Southeast Asia", "who is the most popular in Southeast Asia"],
      trig: "platform (사물 선행사) + is의 주어 결여",
      hint: "사물 선행사 + 주격 (which it~ 대명사 it 중복 오답 소거!)",
      gp: "G-POINT 23: 사물 선행사 + 주격 = that (대명사 it 중복 제거)",
      exp: "선행사가 사물(platform)이고 뒤에 주어가 없는 불완전한 절이므로 that이 정답입니다. which it~은 선행사를 받는 it이 불필요하게 중복되어 지텔프 단골 오답입니다."
    },
    {
      sub: "사람 선행사 주격 관계대명사 (who)",
      q: "The veteran stage actor ___________ was deeply touched because the vintage black-and-white films he had starred in decades ago were still widely beloved.",
      correct: "who had a long and prestigious acting career",
      dist: ["which had a long and prestigious acting career", "where he had a long and prestigious acting career", "when had a long and prestigious acting career"],
      trig: "The veteran stage actor (사람 선행사) + had의 주어 결여",
      hint: "사람 선행사(actor) + 주어 빠진 불완전 절 -> who",
      gp: "G-POINT 21: 사람 선행사 + 주격 = who",
      exp: "선행사가 사람(actor)이고 뒤에 주어가 비어있는 불완전한 절이므로 주격 관계대명사 who가 정답입니다. which는 사물, where/when은 관계부사이므로 오답입니다."
    },
    {
      sub: "사물 선행사 콤마 계속적 용법 (that 불가)",
      q: "Global consumers had eagerly anticipated the flagship smartphone release. The unexpected server traffic spike paralyzed the ordering portal, ___________.",
      correct: "which had attracted millions of buyers worldwide",
      dist: ["that had attracted millions of buyers worldwide", "when had attracted millions of buyers worldwide", "whose had attracted millions of buyers worldwide"],
      trig: ", (콤마) + 사물 선행사",
      hint: "콤마 뒤 that 소거 + 동사 had attracted 앞 주어 결여 -> which",
      gp: "G-POINT 25: 콤마 뒤 that 소거 -> which",
      exp: "선행사 뒤에 콤마(,)가 있으므로 that은 1초 만에 소거됩니다. 주어가 빠진 불완전 절이므로 관계부사 when이나 소유격 whose는 올 수 없어 which가 정답입니다."
    },
    {
      sub: "those who 관용 구문 (사람 복수 선행사)",
      q: "The executive director announced that there would be immediate termination and legal action against those ___________ without official authorization.",
      correct: "who stole confidential client documents",
      dist: ["where they stole confidential client documents", "which they stole confidential client documents", "when stole confidential client documents"],
      trig: "those (~하는 사람들: 사람 복수 선행사)",
      hint: "'those who ~' (~하는 사람들) 필수 표현 + they 중복 소거",
      gp: "G-POINT 21: those(사람들) + who + 동사",
      exp: "'those who + 동사'는 '~하는 사람들'을 뜻하는 빈출 표현입니다. 선행사가 사람(those)이며 they가 중복된 보기는 오답이므로 'who stole...'가 정답입니다."
    }
  ],

  // =========================================================================
  // 6. 조동사 (Modals) - 교재 G-POINT 27~31 & 켈리쌤 3대 찐팁 & 손글씨 메모 완벽 반영 풀
  // =========================================================================
  modalPool: [
    {
      sub: "동물 주어의 고유한 생체 능력 (can)",
      q: "Chameleons possess specialized pigment cells in their skin layers, which means they ___________ rapidly alter their body colors to blend into foliage or deter predators.",
      correct: "can",
      dist: ["shall", "must", "should"],
      trig: "Chameleons (동물 주어) + 생체 능력",
      hint: "켈리 찐팁 2: 동물이 주어이고 고유한 신체/생체 능력을 나타낼 때는 'can'이 정답!",
      gp: "G-POINT 27: 동물/생물의 선천적 신체 능력 = can",
      exp: "주어가 동물(Chameleons)이고 주변 환경에 맞춰 피부색을 바꾸는 생체적 능력을 설명하므로 'can'이 정답입니다. 켈리쌤의 찐팁 1대로 shall은 오답 1순위로 즉시 소거됩니다."
    },
    {
      sub: "동물 주어의 고유한 감각 능력 (can)",
      q: "Bats emit ultrasonic echolocation signals in rapid bursts, so they ___________ effortlessly navigate obstacle-filled caves and capture small insects in total darkness.",
      correct: "can",
      dist: ["shall", "should", "would"],
      trig: "Bats (동물 주어) + 초음파 탐지 능력",
      hint: "켈리 찐팁 2: 동물 주어의 초음파 야간 비행 및 사냥 능력 -> can",
      gp: "G-POINT 27: 생체적 능력/가능성 = can",
      exp: "박쥐(Bats)가 초음파를 쏘아 어둠 속에서 장애물을 피하고 곤충을 잡을 수 있는 '생물학적 능력'을 나타내므로 can이 정답입니다. shall은 대표적 오답 보기입니다."
    },
    {
      sub: "동물 주어의 본능적 항해 능력 (can)",
      q: "Arctic terns are equipped with remarkable magnetic sensors in their eyes, allowing them to migrate thousands of miles, where they ___________ complete journeys from the Arctic to Antarctica.",
      correct: "can",
      dist: ["shall", "must", "might"],
      trig: "Arctic terns (새/동물 주어) + 이동 능력",
      hint: "켈리 찐팁 2: 동물의 본능적 장거리 비행 능력 -> can",
      gp: "G-POINT 27: 동물 주어의 신체 능력 = can",
      exp: "극제비갈매기(Arctic terns)의 경이로운 장거리 비행 및 이동 능력을 설명하는 문맥이므로 능력을 나타내는 can이 정답입니다."
    },
    {
      sub: "보안 규정 준수 필수 의무 (in order to V + must)",
      q: "In order to safeguard classified laboratory records from cyber intrusions, all research staff members ___________ change their system security credentials every thirty days.",
      correct: "must",
      dist: ["shall", "would", "could"],
      trig: "In order to safeguard (목적) + 회사 보안 규정",
      hint: "켈리 찐팁 3: 'In order to V' 목적 구문 + 사내 규정의 외부 강제성 -> must",
      gp: "G-POINT 29: 무조건 해야 하는 의무 (의지 개입 불가, 외부 강제성) = must",
      exp: "보안 침해를 막기 위하여(In order to safeguard) 연구원들이 반드시 따라야 하는 강제적 사내 규정이므로 must가 정답입니다. 개인의 의지가 개입될 수 없는 외부 강제 규정입니다."
    },
    {
      sub: "건강 증진 권고 (To V + should)",
      q: "To prevent chronic repetitive eye strain while working on digital displays, ergonomic consultants recommend that office workers ___________ look at distant objects for twenty seconds every twenty minutes.",
      correct: "should",
      dist: ["shall", "would", "can"],
      trig: "To prevent eye strain (목적) + consultants recommend (권고)",
      hint: "켈리 찐팁 3: 'To V' 목적 + 전문가의 충고/권고 -> should",
      gp: "G-POINT 28: 충고, 권유, 도덕성 = should",
      exp: "눈의 피로를 예방하기 위하여(To prevent...) 전문가가 권고하는 바람직한 행동 지침이므로 충고/권유의 조동사 should가 정답입니다."
    },
    {
      sub: "공식 지원 필수 자격 요건 (To V + must)",
      q: "To qualify for the prestigious doctoral fellowship in quantum physics, prospective applicants ___________ submit three verified faculty recommendation letters by Friday.",
      correct: "must",
      dist: ["shall", "could", "might"],
      trig: "To qualify for fellowship (목적) + 제출 필수 요건",
      hint: "켈리 찐팁 3: 'To qualify' 목적 구문 + 장학금 심사 필수 요건 -> must",
      gp: "G-POINT 29: 필수적 자격 요건 = must",
      exp: "펠로우십 장학 자격을 얻기 위해 지원자가 반드시 제출해야만 하는 필수 의무 조건이므로 must가 정답입니다. shall은 오답으로 소거됩니다."
    },
    {
      sub: "교통 법규 준수 절대 의무 (must)",
      q: "According to national highway safety statutes, automobile operators ___________ yield the right-of-way immediately when an emergency siren approaches.",
      correct: "must",
      dist: ["shall", "may", "would"],
      trig: "According to statutes (법률/규정)",
      hint: "단서: 교통 법규에 따른 외부 강제성 (개인 의지 개입 불가능) -> must",
      gp: "G-POINT 29: 법률/규정에 의한 절대 의무 = must",
      exp: "교통 안전 법규에 명시된 법적 의무이므로 개인의 선택이나 의지가 개입될 수 없는 강제 규정입니다. 따라서 must가 정답입니다."
    },
    {
      sub: "산업 현장 필수 안전 규정 (must)",
      q: "Under municipal construction safety protocols, all heavy equipment technicians ___________ wear certified protective helmets at all times within the hazardous zone.",
      correct: "must",
      dist: ["shall", "could", "would"],
      trig: "Under safety protocols (안전 규정)",
      hint: "단서: 공사 현장 안전 규정의 절대적 강제성 -> must",
      gp: "G-POINT 29: 안전 수칙 준수 의무 = must",
      exp: "위험 구역 내 헬멧 착용은 선택이 아닌 엄격한 규정 준수 의무이므로 must가 정답입니다."
    },
    {
      sub: "계약 체결 전 전문가 자문 권유 (should)",
      q: "Before signing an exclusive commercial partnership agreement, prospective enterprise owners ___________ review the liability provisions thoroughly with a licensed attorney.",
      correct: "should",
      dist: ["shall", "may", "can"],
      trig: "Before signing agreement (권유 문맥)",
      hint: "단서: 법적 분쟁 예방을 위해 변호사와 검토하는 것이 바람직하다는 충고/권고",
      gp: "G-POINT 28: 충고, 권유, 도덕성 = should",
      exp: "계약서에 서명하기 전 변호사와 조항을 면밀히 검토하는 것이 바람직하다는 권유이므로 should가 정답입니다."
    },
    {
      sub: "기상 악화 대비 안전 권고 (should)",
      q: "Because mountain summit temperatures drop drastically after sunset, alpine hikers ___________ pack thermal emergency garments before beginning their ascent.",
      correct: "should",
      dist: ["shall", "will", "could"],
      trig: "temperatures drop drastically (안전 권유)",
      hint: "단서: 급격한 기온 저하에 대비해 방한복을 챙길 것을 권고하는 문맥",
      gp: "G-POINT 28: 권유 및 충고 = should",
      exp: "급격한 기온 하강에 대비해 등산객이 방한복을 챙겨가는 것이 매우 바람직하다는 안전 권유이므로 should가 정답입니다."
    },
    {
      sub: "공식 시설 이용 허가 (can)",
      q: "Visitors who present a valid identification pass at the reception desk ___________ access the university's rare historical archives between 9 AM and 4 PM.",
      correct: "can",
      dist: ["shall", "must", "should"],
      trig: "Visitors who present a pass (허가 조건)",
      hint: "손글씨 메모: can의 허가 용법 (~해도 좋다, 이용할 수 있다)",
      gp: "G-POINT 27: 가능 및 허가 = can",
      exp: "신분증을 제시한 방문객은 희귀 기록물 보관실을 이용할 수 있다는 '허가'의 의미이므로 can이 정답입니다."
    },
    {
      sub: "과거 시점의 탁월한 수작업 능력 (could)",
      q: "Long before modern automated navigational radar was engineered, experienced oceanic navigators ___________ pinpoint their vessel coordinates using only celestial constellations.",
      correct: "could",
      dist: ["shall", "should", "must"],
      trig: "Long before was engineered (과거 시점)",
      hint: "손글씨 메모: can의 과거 표현 (~할 수 있었다) -> could",
      gp: "G-POINT 27: 과거의 능력 = could",
      exp: "현대식 레이더가 발명되기 훨씬 전(과거 시점) 항해사들이 별자리를 보고 배의 위치를 정확히 파악할 수 있었다는 과거의 능력을 나타내므로 could가 정답입니다."
    },
    {
      sub: "낮은 가능성 및 불확실한 상황 (could)",
      q: "Although the regional economy currently seems stable, sudden fluctuations in global commodity prices ___________ trigger temporary inflation in domestic markets.",
      correct: "could",
      dist: ["shall", "must", "should"],
      trig: "sudden fluctuations (불확실하지만 가능한 일)",
      hint: "손글씨 메모: can보다 가능성이 떨어질 때의 추측/가능성 -> could",
      gp: "G-POINT 27: can보다 낮은 가능성 = could",
      exp: "원자재 가격 변동으로 인해 일시적 인플레이션이 촉발될 수도 있다는 낮은 가능성을 나타내므로 could가 정답입니다."
    },
    {
      sub: "공식 발표된 확실한 미래 일정 및 환불 약속 (will)",
      q: "The railway management officially announced that passengers whose departures were canceled due to electrical malfunction ___________ receive a full voucher reimbursement next Tuesday.",
      correct: "will",
      dist: ["shall", "must", "could"],
      trig: "next Tuesday (확실한 미래 일정) + 공식 약속",
      hint: "단서: 철도청 공식 발표에 따른 확정적 미래 일정 및 보상 약속 -> will",
      gp: "G-POINT 30: 미래에 있을 확실한 일, 의지 = will",
      exp: "공식 발표에 의해 다음 주 화요일에 환불 바우처를 지급하겠다는 확실한 미래 일정과 약속을 나타내므로 will이 정답입니다."
    },
    {
      sub: "물질의 고유한 물리적 속성 (will)",
      q: "Due to chemical surface tension differences, untreated refined mineral oil ___________ invariably remain separated when poured into distilled water.",
      correct: "will",
      dist: ["shall", "should", "could"],
      trig: "chemical differences (물질의 고유 속성) + invariably",
      hint: "손글씨 메모: 사물/자연의 고유한 속성 및 법칙 -> will",
      gp: "G-POINT 30: 고유한 속성/법칙 = will",
      exp: "물과 기름의 화학적 특성상 언제나 분리된 상태를 유지한다는 '물질의 고유한 속성'을 나타내므로 will이 정답입니다."
    },
    {
      sub: "과거의 정기적인 습관 (would)",
      q: "During his retirement years by the scenic lake, the elderly painter ___________ set up his wooden easel at sunrise and sketch the misty shoreline for hours.",
      correct: "would",
      dist: ["shall", "can", "must"],
      trig: "During his retirement years (과거 시점) + 과거의 규칙적 습관",
      hint: "손글씨 메모: would의 과거의 습관 (~하곤 했다)",
      gp: "G-POINT 30: 과거의 습관 = would",
      exp: "은퇴 시절 호숫가에서 아침마다 이젤을 펴고 스케치를 하곤 했다는 '과거의 규칙적인 습관'을 나타내므로 would가 정답입니다."
    },
    {
      sub: "경기 분석에 근거한 약한 추측 (may)",
      q: "Financial analysts speculate that while consumer spending increased slightly last quarter, the monetary board ___________ keep the base interest rate unchanged next month.",
      correct: "may",
      dist: ["shall", "must", "should"],
      trig: "analysts speculate (불확실한 추측)",
      hint: "손글씨 메모: 불확실한 가능성 / 약한 추측 -> may",
      gp: "G-POINT 31: 약한 추측 = may",
      exp: "금융 분석가들의 불확실한 전망에 따라 기준금리를 동결할지도 모른다는 개연성 있는 약한 추측이므로 may가 정답입니다."
    },
    {
      sub: "미지의 생명체에 대한 과학적 약한 추측 (might)",
      q: "Astrobiologists studying frozen oceanic crusts on Europa suggest that subsurface thermal vents ___________ harbor microscopic primitive organisms.",
      correct: "might",
      dist: ["shall", "must", "will"],
      trig: "suggest that (불확실한 가설/추측)",
      hint: "손글씨 메모: 매우 불확실한 가능성에 대한 조심스러운 추측 -> might",
      gp: "G-POINT 31: 약한 추측 = might",
      exp: "목성의 위성 유로파의 얼음 지각 아래에 미생물이 존재할지도 모른다는 매우 조심스럽고 불확실한 과학적 가설을 제시하므로 might가 정답입니다."
    }
  ],

  // =========================================================================
  // 7. 연결어 (Conjunctions & Connectors) - 10종 고유 실전 문제
  // =========================================================================
  // 7. 연결어 풀 (접속사 vs 접속부사 vs 전치사 - 18문항 엄선)
  // G-POINT 32 (접속부사의 자리), G-POINT 33 (접속사의 자리), 전치사 구분
  // =========================================================================
  conjunctionPool: [
    {
      sub: "역접 접속부사 (However)",
      q: "The aerospace startup encountered severe funding shortages and technical setbacks during its first two years. ___________, the engineering team persevered and finally launched the satellite into orbit.",
      correct: "However",
      dist: ["Therefore", "Furthermore", "Consequently"],
      trig: "funding shortages vs launched satellite (반전 대조)",
      hint: "단서: 앞문장(시련/자금난)과 뒷문장(위성 발사 성공)의 역접 대조. 마침표 뒤 콤마 앞 자리.",
      gp: "G-POINT 32: 접속부사의 자리 (S+V. [접속부사], S+V.) -> 역접 However (그러나)",
      exp: "자금난과 실패를 겪었으나 마침내 성공시켰다는 상반된 두 문장을 대등하게 이어주므로 역접 접속부사 However가 정답입니다."
    },
    {
      sub: "인과 접속부사 (Therefore)",
      q: "Severe freezing blizzards grounded all regional cargo aircraft throughout the night. ___________, express delivery packages will be delayed by at least one business day.",
      correct: "Therefore",
      dist: ["However", "Nevertheless", "Otherwise"],
      trig: "grounded aircraft -> delayed packages (인과)",
      hint: "단서: 앞문장(항공기 결항 원인)과 뒷문장(배송 지연 결과)의 필연적 인과관계",
      gp: "G-POINT 32: 접속부사의 자리 (S+V. [접속부사], S+V.) -> 인과 Therefore (따라서, 그러므로)",
      exp: "폭설 결항이라는 원인으로 인해 배송이 지연된다는 당연한 귀결이 이어지므로 인과 접속부사 Therefore가 정답입니다."
    },
    {
      sub: "첨가 접속부사 (Furthermore)",
      q: "The redesigned mobile banking application offers streamlined biometric authentication for faster logins. ___________, it reduces smartphone battery consumption by twenty percent.",
      correct: "Furthermore",
      dist: ["However", "Instead", "Nonetheless"],
      trig: "biometric login + reduced battery (장점 나열)",
      hint: "단서: 앞문장의 장점(간편인증)에 이어 또 다른 긍정적 이점(배터리 절감)을 추가하는 순접 첨가",
      gp: "G-POINT 32: 접속부사의 자리 (S+V. [접속부사], S+V.) -> 순접/첨가 Furthermore / Moreover (게다가, 더욱이)",
      exp: "로그인 간소화에 이어 배터리 절약이라는 추가적 장점을 나열하고 있으므로 첨가 접속부사 Furthermore가 정답입니다."
    },
    {
      sub: "양보 접속부사 (Nevertheless)",
      q: "The chief violinist was suffering from high fever and severe throat inflammation. ___________, she gave an unforgettable solo performance that received a standing ovation.",
      correct: "Nevertheless",
      dist: ["Therefore", "Moreover", "As a result"],
      trig: "severe fever vs standing ovation (양보 반전)",
      hint: "단서: 고열과 인후염(악조건)에도 불구하고 감동적인 연주로 기립박수(호조건)를 받았다는 양보 흐름",
      gp: "G-POINT 32: 접속부사의 자리 (S+V. [접속부사], S+V.) -> 양보 Nevertheless / Nonetheless (그럼에도 불구하고)",
      exp: "건강 이상에도 불구하고 훌륭한 연주를 완수했다는 문맥이므로 '그럼에도 불구하고'를 뜻하는 접속부사 Nevertheless가 정답입니다."
    },
    {
      sub: "조건 접속부사 (Otherwise)",
      q: "All conference participants must complete the online badge registration before 5:00 PM. ___________, they will be required to pay an additional on-site administrative fee.",
      correct: "Otherwise",
      dist: ["In addition", "Consequently", "Meanwhile"],
      trig: "register before 5 PM or pay fee (조건/경고)",
      hint: "단서: 앞의 마감 시한을 지켜야 하며, '그렇지 않으면' 추가 요금을 지불해야 한다는 반대 조건",
      gp: "G-POINT 32: 접속부사의 자리 (S+V. [접속부사], S+V.) -> 조건 Otherwise (그렇지 않으면)",
      exp: "명령·당위 표현 뒤에서 '그렇지 않으면 다른 불이익이 따른다'는 조건적 반전 경고를 나타내므로 Otherwise가 정답입니다."
    },
    {
      sub: "대조 접속부사 (In contrast)",
      q: "Sales of traditional desktop computers declined steadily across all domestic retail stores last quarter. ___________, demand for portable lightweight tablets surged by nearly forty percent.",
      correct: "In contrast",
      dist: ["Similarly", "Therefore", "Furthermore"],
      trig: "sales declined vs demand surged (상반 대조)",
      hint: "단서: 데스크톱 판매 감소와 태블릿 수요 40% 급증이라는 두 통계적 사실의 뚜렷한 대조",
      gp: "G-POINT 32: 접속부사의 자리 (S+V. [접속부사], S+V.) -> 대조 In contrast / On the contrary (반면에, 대조적으로)",
      exp: "한쪽의 하락과 다른 쪽의 급증을 정면으로 대비시키고 있으므로 대조 접속부사 In contrast가 정답입니다."
    },
    {
      sub: "예시 접속부사 (For example)",
      q: "Many nocturnal animals have developed specialized biological adaptations to survive pitch darkness. ___________, owls possess oversized eyes and asymmetric ears to locate prey with pinpoint accuracy.",
      correct: "For example",
      dist: ["However", "Therefore", "Instead"],
      trig: "nocturnal animals -> owls (일반 -> 구체)",
      hint: "단서: 일반적 진술(야행성 동물의 적응)에 이어 구체적 종(올빼미의 감각 기관)을 예로 듦",
      gp: "G-POINT 32: 접속부사의 자리 (S+V. [접속부사], S+V.) -> 예시 For example / For instance (예를 들어)",
      exp: "포괄적 진술에 대한 구체적인 대표 사례를 소개하고 있으므로 예시 접속부사 For example이 정답입니다."
    },
    {
      sub: "대체 접속부사 (Instead)",
      q: "The board of directors did not approve the risky overseas acquisition plan proposed by management. ___________, they instructed the executive team to focus on expanding domestic market share.",
      correct: "Instead",
      dist: ["Moreover", "Therefore", "In spite of"],
      trig: "did not approve A -> instructed B (부정 후 대안)",
      hint: "단서: 앞문장의 부정(A안 미승인) 후 대안적 행동(국내 점유율 확대 지시) 제시",
      gp: "G-POINT 32: 접속부사의 자리 (S+V. [접속부사], S+V.) -> 대체 Instead (대신에)",
      exp: "앞선 제안을 거부하고 대신 다른 방향을 취했다는 대체 관계이므로 접속부사 Instead가 정답입니다."
    },
    {
      sub: "결과 접속부사 (Consequently)",
      q: "The pharmaceutical researcher repeatedly failed to follow standard sterilization procedures in the laboratory. ___________, the entire experimental batch was contaminated and had to be discarded.",
      correct: "Consequently",
      dist: ["However", "Nevertheless", "On the other hand"],
      trig: "failed sterilization -> batch contaminated (인과 결과)",
      hint: "단서: 소독 절차 위반(원인)으로 인해 시료가 오염 폐기되었다는 직접적 결과",
      gp: "G-POINT 32: 접속부사의 자리 (S+V. [접속부사], S+V.) -> 결과 Consequently / As a result (그 결과, 따라서)",
      exp: "원인에 뒤따르는 최종 결과를 나타내므로 결과 접속부사 Consequently가 정답입니다."
    },
    {
      sub: "양보 접속사 (Although + 절)",
      q: "___________ the regional sales division faced intense competition from discount retailers throughout the year, it managed to achieve a ten percent profit margin.",
      correct: "Although",
      dist: ["Despite", "Because of", "However"],
      trig: "Although + S + V (양보 절)",
      hint: "단서: 뒤에 주어(the division) + 동사(faced) 절이 연결되고 역접/양보 문맥. 문두 빈칸.",
      gp: "G-POINT 33: 접속사의 자리 ([접속사] S+V, S+V.) -> 양보 Although (비록 ~이지만)",
      exp: "뒤에 주어+동사를 갖춘 완전한 부사절이 오고 역접의 의미이므로 양보 접속사 Although가 정답입니다. (Despite는 전치사이므로 탈락)"
    },
    {
      sub: "이유 접속사 (Because + 절)",
      q: "___________ the raw electronic components were held up in international customs for over two weeks, the automobile assembly plant had to suspend operations temporarily.",
      correct: "Because",
      dist: ["Because of", "Due to", "Owing to"],
      trig: "Because + S + V (이유 절)",
      hint: "단서: 뒤에 주어(the components) + 동사(were held up) 절이 이어짐. 전치사(Due to 등) 소거.",
      gp: "G-POINT 33: 접속사의 자리 ([접속사] S+V, S+V.) -> 이유 Because / Since (~때문에)",
      exp: "부품이 세관에 묶였다는 원인을 절(S+V)로 이끌고 있으므로 접속사 Because가 정답입니다. (보기의 Because of, Due to, Owing to는 전치사)"
    },
    {
      sub: "대조 접속사 (While + 절)",
      q: "___________ lightweight solar panels generate clean electricity efficiently during sunny daylight hours, wind turbines produce reliable renewable energy day and night.",
      correct: "While",
      dist: ["During", "Despite", "Unlike"],
      trig: "solar panels generate vs wind turbines produce (대조 절)",
      hint: "단서: 뒤에 주어+동사 절(solar panels generate...)이 오며 태양광과 풍력 발전의 특징을 상호 대조",
      gp: "G-POINT 33: 접속사의 자리 ([접속사] S+V, S+V.) -> 대조 While (~인 반면에, ~함에 반해)",
      exp: "절과 절을 연결하며 두 사실의 대조를 나타내므로 접속사 While이 정답입니다. (During은 명사구 전치사)"
    },
    {
      sub: "조건 접속사 (Unless = If not)",
      q: "___________ all building visitors present an authorized security identification badge at the front desk, security officers will deny them entry to the main research facility.",
      correct: "Unless",
      dist: ["If", "Because", "Although"],
      trig: "Unless + 긍정문 -> 부정 주절 (부정 조건)",
      hint: "단서: '신분증을 제시하지 않는다면(Unless), 출입이 불허될 것이다'라는 부정 조건",
      gp: "G-POINT 33: 접속사의 자리 ([접속사] S+V, S+V.) -> 부정 조건 Unless (만약 ~하지 않는다면)",
      exp: "문맥상 신분증을 보여주지 않을 경우 입장이 금지된다는 조건이므로 Unless(= If ... not)가 정답입니다."
    },
    {
      sub: "시간 접속사 (As soon as + 절)",
      q: "___________ the renowned keynote speaker stepped onto the stage, the thousands of eager attendees erupted into thunderous applause.",
      correct: "As soon as",
      dist: ["During", "Despite", "However"],
      trig: "stepped onto stage -> erupted applause (즉각 동작)",
      hint: "단서: 연사가 무대에 오르자마자 환호성이 터져 나왔다는 즉각적 선후 관계를 잇는 접속사",
      gp: "G-POINT 33: 접속사의 자리 ([접속사] S+V, S+V.) -> 시간 As soon as (~하자마자)",
      exp: "두 개의 절을 연결하며 한 동작이 일어나자마자 다음 동작이 일어남을 나타내므로 As soon as가 정답입니다."
    },
    {
      sub: "조건 접속사 (Provided that + 절)",
      q: "The municipal government will grant the commercial construction permit ___________ the developer implements comprehensive environmental protection measures.",
      correct: "provided that",
      dist: ["despite", "in spite of", "because of"],
      trig: "permit granted provided that S + V (조건 절)",
      hint: "단서: 뒤에 주어(the developer) + 동사(implements) 절이 이어지며 허가의 조건을 제시",
      gp: "G-POINT 33: 접속사의 자리 (S+V [접속사] S+V.) -> 조건 Provided that / Providing (만약 ~라면)",
      exp: "뒤에 완전한 절이 오고 '~라는 조건으로/만약 ~라면'의 의미이므로 조건 접속사 provided that이 정답입니다."
    },
    {
      sub: "양보 전치사 (Despite + 명사구)",
      q: "___________ torrential monsoon rainstorms and severe flood warnings across the metropolitan area, all high-speed commuter trains operated right on schedule.",
      correct: "Despite",
      dist: ["Although", "Even though", "Whereas"],
      trig: "torrential monsoon rainstorms (명사구)",
      hint: "단서: 빈칸 뒤에 동사 없이 순수 명사구(rainstorms and warnings)만 연결됨 -> 1초 컷 전치사 자리!",
      gp: "G-POINT 32/33 소거 공식: 뒤에 동사가 없는 명사구 -> 전치사 Despite / In spite of",
      exp: "빈칸 뒤에 주어+동사 절이 아닌 명사구만 이어지므로 접속사(Although 등)가 아닌 전치사 Despite가 정답입니다."
    },
    {
      sub: "이유 전치사 (Due to + 명사구)",
      q: "___________ unforeseen logistical bottlenecks at the overseas shipping port, shipment dates for retail orders have been delayed by ten days.",
      correct: "Due to",
      dist: ["Because", "Since", "As"],
      trig: "unforeseen logistical bottlenecks (명사구)",
      hint: "단서: 빈칸 뒤에 주어+동사 절이 없고 명사구(bottlenecks)만 존재 -> 전치사 자리!",
      gp: "G-POINT 32/33 소거 공식: 명사구 앞 이유 표현 -> 전치사 Due to / Because of",
      exp: "뒤에 절이 아닌 명사구만 있으므로 이유 접속사(Because 등)가 아닌 이유 전치사 Due to가 정답입니다."
    },
    {
      sub: "기간 전치사 (During + 특정 기간)",
      q: "The head of corporate strategy did not answer any telephone calls or urgent text messages ___________ the intensive three-hour board meeting yesterday.",
      correct: "during",
      dist: ["while", "although", "whereas"],
      trig: "the three-hour board meeting (특정 기간 명사구)",
      hint: "단서: 뒤에 절(S+V)이 아닌 특정 사건/기간을 가리키는 명사구(meeting)가 연결됨",
      gp: "G-POINT 32/33 소거 공식: 특정 기간 명사구 앞 = 전치사 During vs 절 앞 = 접속사 While",
      exp: "3시간 회의라는 특정 기간 명사구가 목적어로 이어지므로 기간 전치사 during이 정답입니다. (while은 접속사)"
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
        hint: item.customHint || `단서: 동사 '${item.v}' 뒤 목적어 자리 (암기표: ${item.v} + 동명사)`,
        gPoint: item.customGp || `G-POINT 13: ${item.v} + 동명사(-ing)`,
        explanation: item.customExp || `동사 '${item.v}'는 동명사만을 목적어로 취하는 지텔프 빈출 대표 동사이므로 '${item.obj}'가 정답입니다.`
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
        hint: item.customHint || `단서: 동사 '${item.v}' 뒤 목적어 자리 (암기표: ${item.v} + to부정사)`,
        gPoint: item.customGp || `G-POINT 14: ${item.v} + to부정사(to V)`,
        explanation: item.customExp || `동사 '${item.v}'는 미래지향적인 to부정사만을 목적어로 취하므로 '${item.obj}'가 정답입니다.`
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