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
      { name: "🔍 조동사 문제 식별법", desc: "선택지(A, B, C, D)에 can, could, should, must, will, may 등 '조동사'만 존재하면 100% 조동사 해석 문제! (빈칸 뒤는 항상 동사원형)" },
      { name: "G-POINT 27 (능력, 가능성, 허가)", desc: "① can: 현재의 능력(~할 수 있다), 가능성, 허가(~해도 좋다)\n② could: can의 과거 표현(~할 수 있었다), 또는 can보다 가능성이 떨어질 때" },
      { name: "G-POINT 28 (충고, 권유, 도덕성)", desc: "should: ~하는 것이 좋다, 마땅히 ~해야 한다 (도덕적 권유, 건강/업무상 바람직한 행동 권고)" },
      { name: "G-POINT 29 (무조건 해야 하는 의무)", desc: "must: 반드시 ~해야만 한다 (개인의 의지 개입 불가능! 법률, 교통법규, 사내 규정, 안전 수칙 등 외부 강제성 부여)" },
      { name: "G-POINT 30 (확실한 미래, 의지, 고유 속성)", desc: "① will: 미래에 있을 확실한 일, 주어의 강한 의지, 사물/자연의 고유한 속성이나 본능\n② would: will보다 확실성이 떨어질 때, will의 과거 표현, 과거의 습관(~하곤 했다)" },
      { name: "G-POINT 31 (약한 추측, 불확실한 가능성)", desc: "may / might: ~일지도 모른다 (근거가 약하거나 불확실한 가능성/추측)" }
    ],
    traps: [
      { name: "🚨 켈리쌤의 조동사 찐팁 1: shall은 답이 아닐 가능성이 높다!", desc: "선택지에 shall이 보이면 지텔프 실전 시험에서 정답 확률이 극히 낮으므로 1초 만에 오답 1순위 소거!" },
      { name: "🚨 켈리쌤의 조동사 찐팁 2: 동물이 주어면 능력을 나타내는 'can'!", desc: "동물이나 생물이 주어이고 고유한 생체/신체 능력(비행, 잠수, 보호색 변화, 초음파 탐지 등)이 문맥에 나오면 99% 'can'이 정답!" },
      { name: "🚨 켈리쌤의 조동사 찐팁 3: (in order) to V 목적 구문 ➔ 'should' / 'must'!", desc: "'~하기 위하여'를 뜻하는 (in order) to V 목적 표현과 함께 나오면, 목표 달성을 위한 필수 조치/권고이므로 should나 must가 정답일 가능성이 매우 높음!" },
      { name: "🚨 must vs should 핵심 구분 (손글씨 필기 메모)", desc: "must는 개인의 선택권이 없는 '외부 강제성(법규·규정·필수 자격요건)'일 때 쓰이고, should는 '의사의 건강 조언, 전문가 권유, 안전 권고'처럼 따르는 것이 바람직할 때 쓰입니다." }
    ]
  },
  conjunction: {
    title: "7. 연결어 (접속사 vs 접속부사 vs 전치사)",
    rules: [
      { 
        name: "🔍 켈리의 G-POINT 32 (접속부사의 자리)", 
        desc: "• 형태: S + V. [ 접속부사 ], S + V. (마침표 찍고 새 문장 시작, 콤마 앞)\n• 특징: 문법적으로 없어도 문장이 성립함 (단독 부사 수식)\n• 대표어휘: However(그러나), Therefore(그러므로), Furthermore(게다가), Nevertheless(그럼에도 불구하고)" 
      },
      { 
        name: "🔍 켈리의 G-POINT 33 (접속사의 자리)", 
        desc: "• 형태: [ 접속사 ] S + V, S + V.  또는  S + V [ 접속사 ] S + V.\n• 특징: 한 문장 안에서 주어+동사(절) 2개를 연결하기 위해 '문법적으로 반드시 꼭 필요!'\n• 대표어휘: Although/Even though(비록 ~이지만), Because/Since(~ 때문에), While(~하는 반면, ~동안), If/Unless(만약 ~라면/~아니라면)" 
      },
      { 
        name: "🔍 전치사의 자리", 
        desc: "• 형태: [ 전치사 ] + 명사(구), S + V.\n• 특징: 뒤에 주어+동사 절이 오지 못하고 '명사 또는 명사구'만 위치함!\n• 대표어휘: Despite / In spite of (~에도 불구하고), Because of / Due to (~ 때문에), During (~ 동안에)" 
      }
    ],
    traps: [
      { 
        name: "💡 이것만 외우면 끝! 지텔프 초빈출 연결어 핵심 4대 패밀리", 
        desc: "시험에 나오는 수백 개 단어를 다 외울 필요 없습니다! 아래 핵심 4개 군만 알면 90% 이상 해결됩니다:\n" +
              "① 역접/양보(그러나): Although/Even though (접속사) vs However/Nevertheless (접속부사) vs Despite (전치사)\n" +
              "② 이유/인과(따라서, ~때문에): Because/Since (접속사) vs Therefore/Consequently (접속부사) vs Due to/Because of (전치사)\n" +
              "③ 첨가/나열(게다가, 더욱이): Furthermore, Moreover, In addition (접속부사)\n" +
              "④ 대조/반면(~하는 반면에): While, Whereas (접속사) vs In contrast, On the other hand (접속부사)" 
      },
      { 
        name: "🚨 켈리쌤의 2단계 5초 컷 해결 공식 (문장부호 ➔ 부호 논리)", 
        desc: "1단계 [구조 소거]: 마침표(.) 뒤 콤마(,) 앞이면 ➔ 접속사/전치사(Although, Because, Despite) 1초 컷 소거! 접속부사(However, Therefore)만 남김!\n" +
              "반대로 한 문장에 S+V가 2개 연결되면 ➔ 접속부사(However, Therefore) 1초 컷 소거! 접속사(Although, Because)만 남김!\n" +
              "2단계 [플러스/마이너스 부호법]: 앞문장(+) ↔ 뒷문장(-) 반대면 역접(However/Although), 앞문장(+) ➔ 뒷문장(+) 자연스러운 인과면 순접(Therefore/Because)!" 
      },
      {
        name: "🚨 Unless 함정 주의",
        desc: "unless = if ~ not (만약 ~하지 않는다면). 자체에 부정의 의미가 포함되어 있으므로 절 내에 not을 또 쓰지 않음!"
      }
    ]
  }
};
