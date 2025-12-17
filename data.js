const bookData = {
    "Level C Book 2": [
        // Pattern 21: Do you know how to ...?
        { "Pattern #": 21, "Pattern Name": "Do you know how to ...?", "Section": "Speaking I", "Question #": 1, "Korean/Question": "Do you know how?", "English/Answer": "", "Scrambled": "" },
        { "Pattern #": 21, "Pattern Name": "Do you know how to ...?", "Section": "Speaking II", "Question #": 1, "Korean/Question": "너는 스케이트보드 타는 법을 아니?", "English/Answer": "Do you know how to skateboard?", "Scrambled": "skateboard" },
        { "Pattern #": 21, "Pattern Name": "Do you know how to ...?", "Section": "Unscramble", "Question #": 1, "Korean/Question": "너는 스케이트보드 타는 법을 아니?", "English/Answer": "Do you know how to skateboard?", "Scrambled": "how / you / skateboard / know / Do / to" },
        { "Pattern #": 21, "Pattern Name": "Do you know how to ...?", "Section": "Speaking II", "Question #": 2, "Korean/Question": "너는 컴퓨터 고치는 법을 아니?", "English/Answer": "Do you know how to fix a computer?", "Scrambled": "fix a computer" },
        { "Pattern #": 21, "Pattern Name": "Do you know how to ...?", "Section": "Unscramble", "Question #": 2, "Korean/Question": "너는 컴퓨터 고치는 법을 아니?", "English/Answer": "Do you know how to fix a computer?", "Scrambled": "computer / fix / you / know / to / how / Do / a" },
        // ... (이하 패턴 21의 나머지 문항들)
        { "Pattern #": 21, "Pattern Name": "Do you know how to ...?", "Section": "Speaking II", "Question #": 3, "Korean/Question": "너는 요거트 만드는 법을 아니?", "English/Answer": "Do you know how to make yogurt?", "Scrambled": "make yogurt" },
        { "Pattern #": 21, "Pattern Name": "Do you know how to ...?", "Section": "Unscramble", "Question #": 3, "Korean/Question": "너는 요거트 만드는 법을 아니?", "English/Answer": "Do you know how to make yogurt?", "Scrambled": "make / know / Do / yogurt / to / you / how" },

        // Pattern 22: Do you remember ...?
        { "Pattern #": 22, "Pattern Name": "Do you remember ...?", "Section": "Speaking I", "Question #": 1, "Korean/Question": "Do you remember?", "English/Answer": "", "Scrambled": "" },
        { "Pattern #": 22, "Pattern Name": "Do you remember ...?", "Section": "Speaking II", "Question #": 1, "Korean/Question": "너는 그를 기억하니?", "English/Answer": "Do you remember him?", "Scrambled": "him" },
        { "Pattern #": 22, "Pattern Name": "Do you remember ...?", "Section": "Unscramble", "Question #": 1, "Korean/Question": "너는 그를 기억하니?", "English/Answer": "Do you remember him?", "Scrambled": "Do / him / remember / you" },
        { "Pattern #": 22, "Pattern Name": "Do you remember ...?", "Section": "Speaking II", "Question #": 2, "Korean/Question": "너는 이 스웨터를 기억하니?", "English/Answer": "Do you remember this sweater?", "Scrambled": "this sweater" },
        { "Pattern #": 22, "Pattern Name": "Do you remember ...?", "Section": "Unscramble", "Question #": 2, "Korean/Question": "너는 이 스웨터를 기억하니?", "English/Answer": "Do you remember this sweater?", "Scrambled": "sweater / Do / remember / you / this" },

        // Pattern 23: What do you think of ...?
        { "Pattern #": 23, "Pattern Name": "What do you think of ...?", "Section": "Speaking I", "Question #": 1, "Korean/Question": "What do you think?", "English/Answer": "", "Scrambled": "" },
        { "Pattern #": 23, "Pattern Name": "What do you think of ...?", "Section": "Speaking II", "Question #": 1, "Korean/Question": "너는 내 머리에 대해 어떻게 생각하니?", "English/Answer": "What do you think of my hair?", "Scrambled": "my hair" },
        { "Pattern #": 23, "Pattern Name": "What do you think of ...?", "Section": "Unscramble", "Question #": 1, "Korean/Question": "너는 내 머리에 대해 어떻게 생각하니?", "English/Answer": "What do you think of my hair?", "Scrambled": "my / hair / think / What / you / of / do" },

        // Pattern 24: What else ...?
        { "Pattern #": 24, "Pattern Name": "What else ...?", "Section": "Speaking I", "Question #": 1, "Korean/Question": "What else?", "English/Answer": "", "Scrambled": "" },
        { "Pattern #": 24, "Pattern Name": "What else ...?", "Section": "Speaking II", "Question #": 1, "Korean/Question": "그 밖에 무엇이 있니?", "English/Answer": "What else is there?", "Scrambled": "is there" },
        { "Pattern #": 24, "Pattern Name": "What else ...?", "Section": "Unscramble", "Question #": 1, "Korean/Question": "그 밖에 무엇이 있니?", "English/Answer": "What else is there?", "Scrambled": "there / What / else / is" },

        // Pattern 25: How do you like ...?
        { "Pattern #": 25, "Pattern Name": "How do you like ...?", "Section": "Speaking I", "Question #": 1, "Korean/Question": "How do you like it?", "English/Answer": "", "Scrambled": "" },
        { "Pattern #": 25, "Pattern Name": "How do you like ...?", "Section": "Speaking II", "Question #": 1, "Korean/Question": "그 팔찌는 어떠니?", "English/Answer": "How do you like the bracelet?", "Scrambled": "the bracelet" },
        { "Pattern #": 25, "Pattern Name": "How do you like ...?", "Section": "Unscramble", "Question #": 1, "Korean/Question": "그 팔찌는 어떠니?", "English/Answer": "How do you like the bracelet?", "Scrambled": "do / like / the / bracelet / you / How" },

        // Pattern 26: How often do you ...?
        { "Pattern #": 26, "Pattern Name": "How often do you ...?", "Section": "Speaking I", "Question #": 1, "Korean/Question": "How often?", "English/Answer": "", "Scrambled": "" },
        { "Pattern #": 26, "Pattern Name": "How often do you ...?", "Section": "Speaking II", "Question #": 1, "Korean/Question": "너는 얼마나 자주 운동하니?", "English/Answer": "How often do you exercise?", "Scrambled": "exercise" },
        { "Pattern #": 26, "Pattern Name": "How often do you ...?", "Section": "Unscramble", "Question #": 1, "Korean/Question": "너는 얼마나 자주 운동하니?", "English/Answer": "How often do you exercise?", "Scrambled": "do / How / exercise / you / often" },

        // Pattern 27: I'll have ....
        { "Pattern #": 27, "Pattern Name": "I'll have ....", "Section": "Speaking I", "Question #": 1, "Korean/Question": "What will you have?", "English/Answer": "", "Scrambled": "" },
        { "Pattern #": 27, "Pattern Name": "I'll have ....", "Section": "Speaking II", "Question #": 1, "Korean/Question": "나는 치킨 샐러드로 할게요.", "English/Answer": "I'll have a chicken salad.", "Scrambled": "a chicken salad" },
        { "Pattern #": 27, "Pattern Name": "I'll have ....", "Section": "Unscramble", "Question #": 1, "Korean/Question": "나는 치킨 샐러드로 할게요.", "English/Answer": "I'll have a chicken salad.", "Scrambled": "have / salad / chicken / I'll / a" },

        // Pattern 28: I can't wait ....
        { "Pattern #": 28, "Pattern Name": "I can't wait ....", "Section": "Speaking I", "Question #": 1, "Korean/Question": "Can you wait?", "English/Answer": "", "Scrambled": "" },
        { "Pattern #": 28, "Pattern Name": "I can't wait ....", "Section": "Speaking II", "Question #": 1, "Korean/Question": "나는 여행이 너무 기대돼.", "English/Answer": "I can't wait for the trip.", "Scrambled": "for the trip" },
        { "Pattern #": 28, "Pattern Name": "I can't wait ....", "Section": "Unscramble", "Question #": 1, "Korean/Question": "나는 여행이 너무 기대돼.", "English/Answer": "I can't wait for the trip.", "Scrambled": "wait / can't / trip / I / for / the" },

        // Pattern 29: You must ....
        { "Pattern #": 29, "Pattern Name": "You must ....", "Section": "Speaking I", "Question #": 1, "Korean/Question": "What must I do?", "English/Answer": "", "Scrambled": "" },
        { "Pattern #": 29, "Pattern Name": "You must ....", "Section": "Speaking II", "Question #": 1, "Korean/Question": "너는 속도를 줄여야 해.", "English/Answer": "You must slow down.", "Scrambled": "slow down" },
        { "Pattern #": 29, "Pattern Name": "You must ....", "Section": "Unscramble", "Question #": 1, "Korean/Question": "너는 속도를 줄여야 해.", "English/Answer": "You must slow down.", "Scrambled": "slow / must / down / You" },

        // Pattern 30: I think you should ....
        { "Pattern #": 30, "Pattern Name": "I think you should ....", "Section": "Speaking I", "Question #": 1, "Korean/Question": "What should I do?", "English/Answer": "", "Scrambled": "" },
        { "Pattern #": 30, "Pattern Name": "I think you should ....", "Section": "Speaking II", "Question #": 1, "Korean/Question": "나는 네가 목록을 만들어야 한다고 생각해.", "English/Answer": "I think you should make a list.", "Scrambled": "make a list" },
        { "Pattern #": 30, "Pattern Name": "I think you should ....", "Section": "Unscramble", "Question #": 1, "Korean/Question": "나는 네가 목록을 만들어야 한다고 생각해.", "English/Answer": "I think you should make a list.", "Scrambled": "list / make / think / a / I / should / you" },

        // Pattern 31: You'd better ....
        { "Pattern #": 31, "Pattern Name": "You'd better ....", "Section": "Speaking I", "Question #": 1, "Korean/Question": "What should I do?", "English/Answer": "", "Scrambled": "" },
        { "Pattern #": 31, "Pattern Name": "You'd better ....", "Section": "Speaking II", "Question #": 1, "Korean/Question": "너는 매일 운동하는 게 좋겠어.", "English/Answer": "You'd better exercise daily.", "Scrambled": "exercise daily" },
        { "Pattern #": 31, "Pattern Name": "You'd better ....", "Section": "Unscramble", "Question #": 1, "Korean/Question": "너는 매일 운동하는 게 좋겠어.", "English/Answer": "You'd better exercise daily.", "Scrambled": "better / exercise / daily / You'd" },

        // Pattern 32: Do I need to ...?
        { "Pattern #": 32, "Pattern Name": "Do I need to ...?", "Section": "Speaking I", "Question #": 1, "Korean/Question": "Do I need to?", "English/Answer": "", "Scrambled": "" },
        { "Pattern #": 32, "Pattern Name": "Do I need to ...?", "Section": "Speaking II", "Question #": 1, "Korean/Question": "내가 여기서 기다려야 하니?", "English/Answer": "Do I need to wait here?", "Scrambled": "wait here" },
        { "Pattern #": 32, "Pattern Name": "Do I need to ...?", "Section": "Unscramble", "Question #": 1, "Korean/Question": "내가 여기서 기다려야 하니?", "English/Answer": "Do I need to wait here?", "Scrambled": "to / I / wait / Do / need / here" },

        // Pattern 33: Can you help me ...?
        { "Pattern #": 33, "Pattern Name": "Can you help me ...?", "Section": "Speaking I", "Question #": 1, "Korean/Question": "Can you help me?", "English/Answer": "", "Scrambled": "" },
        { "Pattern #": 33, "Pattern Name": "Can you help me ...?", "Section": "Speaking II", "Question #": 1, "Korean/Question": "내가 설거지하는 것을 도와줄 수 있니?", "English/Answer": "Can you help me with the dishes?", "Scrambled": "with the dishes" },
        { "Pattern #": 33, "Pattern Name": "Can you help me ...?", "Section": "Unscramble", "Question #": 1, "Korean/Question": "내가 설거지하는 것을 도와줄 수 있니?", "English/Answer": "Can you help me with the dishes?", "Scrambled": "the / dishes / help / Can / with / me / you" },

        // Pattern 34: Can you tell me ...?
        { "Pattern #": 34, "Pattern Name": "Can you tell me ...?", "Section": "Speaking I", "Question #": 1, "Korean/Question": "Can you tell me?", "English/Answer": "", "Scrambled": "" },
        { "Pattern #": 34, "Pattern Name": "Can you tell me ...?", "Section": "Speaking II", "Question #": 1, "Korean/Question": "이유를 말해 줄 수 있니?", "English/Answer": "Can you tell me the reason?", "Scrambled": "the reason" },
        { "Pattern #": 34, "Pattern Name": "Can you tell me ...?", "Section": "Unscramble", "Question #": 1, "Korean/Question": "이유를 말해 줄 수 있니?", "English/Answer": "Can you tell me the reason?", "Scrambled": "reason / you / the / Can / tell / me" },

        // Pattern 35: I've never ....
        { "Pattern #": 35, "Pattern Name": "I've never ....", "Section": "Speaking I", "Question #": 1, "Korean/Question": "Have you done it?", "English/Answer": "", "Scrambled": "" },
        { "Pattern #": 35, "Pattern Name": "I've never ....", "Section": "Speaking II", "Question #": 1, "Korean/Question": "나는 제주도에 가본 적이 없어.", "English/Answer": "I've never been to Jeju-do.", "Scrambled": "been to Jeju-do" },
        { "Pattern #": 35, "Pattern Name": "I've never ....", "Section": "Unscramble", "Question #": 1, "Korean/Question": "나는 제주도에 가본 적이 없어.", "English/Answer": "I've never been to Jeju-do.", "Scrambled": "Jeju-do / I've / been / never / to" },

        // Pattern 36: Have you ever ...?
        { "Pattern #": 36, "Pattern Name": "Have you ever ...?", "Section": "Speaking I", "Question #": 1, "Korean/Question": "Have you ever done it?", "English/Answer": "", "Scrambled": "" },
        { "Pattern #": 36, "Pattern Name": "Have you ever ...?", "Section": "Speaking II", "Question #": 1, "Korean/Question": "너는 김치를 먹어본 적이 있니?", "English/Answer": "Have you ever tried kimchi?", "Scrambled": "tried kimchi" },
        { "Pattern #": 36, "Pattern Name": "Have you ever ...?", "Section": "Unscramble", "Question #": 1, "Korean/Question": "너는 김치를 먹어본 적이 있니?", "English/Answer": "Have you ever tried kimchi?", "Scrambled": "ever / you / kimchi / Have / tried" },

        // Pattern 37: I wish I could ....
        { "Pattern #": 37, "Pattern Name": "I wish I could ....", "Section": "Speaking I", "Question #": 1, "Korean/Question": "What do you wish?", "English/Answer": "", "Scrambled": "" },
        { "Pattern #": 37, "Pattern Name": "I wish I could ....", "Section": "Speaking II", "Question #": 1, "Korean/Question": "나는 내가 강해질 수 있으면 좋겠어.", "English/Answer": "I wish I could be strong.", "Scrambled": "be strong" },
        { "Pattern #": 37, "Pattern Name": "I wish I could ....", "Section": "Unscramble", "Question #": 1, "Korean/Question": "나는 내가 강해질 수 있으면 좋겠어.", "English/Answer": "I wish I could be strong.", "Scrambled": "strong / be / could / I / wish / I" },

        // Pattern 38: Thank you for ....
        { "Pattern #": 38, "Pattern Name": "Thank you for ....", "Section": "Speaking I", "Question #": 1, "Korean/Question": "What do you say?", "English/Answer": "", "Scrambled": "" },
        { "Pattern #": 38, "Pattern Name": "Thank you for ....", "Section": "Speaking II", "Question #": 1, "Korean/Question": "선물 고마워.", "English/Answer": "Thank you for the gift.", "Scrambled": "the gift" },
        { "Pattern #": 38, "Pattern Name": "Thank you for ....", "Section": "Unscramble", "Question #": 1, "Korean/Question": "선물 고마워.", "English/Answer": "Thank you for the gift.", "Scrambled": "gift / for / you / the / Thank" },

        // Pattern 39: Make sure ....
        { "Pattern #": 39, "Pattern Name": "Make sure ....", "Section": "Speaking I", "Question #": 1, "Korean/Question": "Don't forget.", "English/Answer": "", "Scrambled": "" },
        { "Pattern #": 39, "Pattern Name": "Make sure ....", "Section": "Speaking II", "Question #": 1, "Korean/Question": "꼭 문을 잠가.", "English/Answer": "Make sure to lock the door.", "Scrambled": "lock the door" },
        { "Pattern #": 39, "Pattern Name": "Make sure ....", "Section": "Unscramble", "Question #": 1, "Korean/Question": "꼭 문을 잠가.", "English/Answer": "Make sure to lock the door.", "Scrambled": "to / door / lock / Make / the / sure" },

        // Pattern 40: Let me ....
        { "Pattern #": 40, "Pattern Name": "Let me ....", "Section": "Speaking I", "Question #": 1, "Korean/Question": "Let me do it.", "English/Answer": "", "Scrambled": "" },
        { "Pattern #": 40, "Pattern Name": "Let me ....", "Section": "Speaking II", "Question #": 1, "Korean/Question": "내가 생각해 볼게.", "English/Answer": "Let me think.", "Scrambled": "think" },
        { "Pattern #": 40, "Pattern Name": "Let me ....", "Section": "Unscramble", "Question #": 1, "Korean/Question": "내가 생각해 볼게.", "English/Answer": "Let me think.", "Scrambled": "me / think / Let" }
    ]
};