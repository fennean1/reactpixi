const SET_ONE_P1 = {
    num: 1,
    den: 2,
  }
  const SET_ONE_P2 = {
    num: 1,
    den: 4,
  }
  const SET_ONE_P3 = {
    num: 2,
    den: 4,
  }
  const SET_ONE_P4 = {
    num: 1,
    den: 6,
  }
  const SET_ONE_P5 = {
    num: 2,
    den: 6,
  }
  const SET_ONE_P6 = {
    num: 4,
    den: 8,
  }
  const SET_ONE_P7 = {
    num: 6,
    den: 7,
  }
  const SET_ONE_P8 = {
    num: 2,
    den: 7,
  }
  const SET_ONE_P9 = {
    num: 4,
    den: 5,
  }
  const SET_ONE_P10 = {
    num: 3,
    den: 8,
  }
  
  const SET_TWO_P1 = {
    num: 1,
    den: 4,
  }
  const SET_TWO_P2 = {
    num: 4,
    den: 5,
  }
  const SET_TWO_P3 = {
    num: 5,
    den: 8,
  }
  const SET_TWO_P4 = {
    num: 5,
    den: 11,
  }
  
  // Less than one activities.
  const MC_GAME_P1 = {
    num: 7,
    den: 11,
    multichoice: [
      [5, 11],
      [2, 5],
      [7, 11],
      [8, 9]
    ],
  }
  const MC_GAME_P2 = {
    num: 3,
    den: 12,
    multichoice: [
      [3, 12],
      [1, 10],
      [1, 2],
      [3, 7]
    ],
  }
  const MC_GAME_P3 = {
    num: 5,
    den: 7,
    multichoice: [
      [3, 7],
      [8, 9],
      [4, 10],
      [5, 7]
    ],
  }
  const MC_GAME_P4 = {
    num: 2,
    den: 5,
    multichoice: [
      [5, 9],
      [2, 5],
      [1, 3],
      [3, 5]
    ],
  }
  const MC_GAME_P5 = {
    num: 5,
    den: 9,
    multichoice: [
      [1, 11],
      [2, 5],
      [5, 9],
      [11, 12]
    ],
  }
  
  // Greater than one problems.
  const EST_WARM_UP_2_P1 = {
    num: 3,
    den: 2,
  }
  const EST_WARM_UP_2_P2 = {
    num: 4,
    den: 3,
  }
  const EST_WARM_UP_2_P3 = {
    num: 5,
    den: 4,
  }
  const EST_WARM_UP_2_P4 = {
    num: 5,
    den: 3,
  }
  const EST_WARM_UP_2_P5 = {
    num: 7,
    den: 6,
  }
  const EST_WARM_UP_2_P6 = {
    num: 15,
    den: 10,
  }
  const EST_WARM_UP_2_P7 = {
    num: 4,
    den: 6,
  }
  const EST_WARM_UP_2_P8 = {
    num: 4,
    den: 7,
  }
  const EST_WARM_UP_2_P9 = {
    num: 6,
    den: 5,
  }
  const EST_WARM_UP_2_P10 = {
    num: 5,
    den: 8,
  }
  
  const EST_HANDS_2_P1 = {
    num: 5,
    den: 4,
  }
  const EST_HANDS_2_P2 = {
    num: 9,
    den: 6,
  }
  const EST_HANDS_2_P3 = {
    num: 7,
    den: 5,
  }
  const EST_HANDS_2_P4 = {
    num: 13,
    den: 11,
  }
  
  const EST_MULTICHOICE_2_P1 = {
    num: 15,
    den: 8,
    multichoice: [
      [15, 8],
      [7, 5],
      [6, 4],
      [8, 9]
    ],
  }
  const EST_MULTICHOICE_2_P2 = {
    num: 13,
    den: 8,
    multichoice: [
      [8, 9],
      [12, 10],
      [9, 8],
      [13, 8]
    ],
  }
  const EST_MULTICHOICE_2_P3 = {
    num: 12,
    den: 8,
    multichoice: [
      [12, 8],
      [7, 6],
      [1, 2],
      [7, 5]
    ],
  }
  const EST_MULTICHOICE_2_P4 = {
    num: 11,
    den: 6,
    multichoice: [
      [5, 9],
      [11, 6],
      [8, 6],
      [5, 4]
    ],
  }
  
  
  const EST_WARM_UP = {
    prompt: null,
    discussion: null,
    mc: false,
    problems: [SET_ONE_P1, SET_ONE_P2, SET_ONE_P3, SET_ONE_P4, SET_ONE_P5, SET_ONE_P6, SET_ONE_P7, SET_ONE_P8, SET_ONE_P9, SET_ONE_P10]
  }
  const EST_HANDS = {
    prompt: "As a class, raise your hand when you \n think the slider is on the correct value.",
    discussion: "You're finished!",
    mc: false,
    problems: [SET_TWO_P1, SET_TWO_P2, SET_TWO_P3]
  }
  
  const EST_MULTICHOICE = {
    prompt: "Answer the question as a class \n by showing the number to \n the answer you chose.",
    discussion: "You're finished!",
    mc: true,
    problems: [MC_GAME_P1, MC_GAME_P2, MC_GAME_P3, MC_GAME_P4]
  }
  
  // Greater than one activities
  const EST_WARM_UP_2 = {
    prompt: null,
    discussion: "You're finished!",
    mc: false,
    problems: [EST_WARM_UP_2_P1, EST_WARM_UP_2_P2, EST_WARM_UP_2_P3, EST_WARM_UP_2_P4, EST_WARM_UP_2_P5, EST_WARM_UP_2_P6, EST_WARM_UP_2_P7, EST_WARM_UP_2_P8, EST_WARM_UP_2_P9, EST_WARM_UP_2_P10]
  }
  
  const EST_HANDS_2 = {
    prompt: "As a class, raise your hand when you \n think the slider is on the correct value.",
    discussion: "You're finished!",
    mc: false,
    problems: [EST_HANDS_2_P1, EST_HANDS_2_P2, EST_HANDS_2_P3, EST_HANDS_2_P4]
  }
  
  const EST_MULTICHOICE_2 = {
    prompt: "Answer the question as a class \n by showing the number to \n the answer you chose.",
    discussion: "You're finished!",
    mc: true,
    problems: [EST_MULTICHOICE_2_P1, EST_MULTICHOICE_2_P2, EST_MULTICHOICE_2_P3, EST_MULTICHOICE_2_P4]
  }


  // Problem Set One
  const BEAKER_ACTIVITY_1_PROBLEM_1 = {
    num: 1,
    den: 2,
  }

  const BEAKER_ACTIVITY_1_PROBLEM_2 = {
    num: 1,
    den: 4,
  }

  const BEAKER_ACTIVITY_1_PROBLEM_3 = {
    num: 1,
    den: 6,
  }

  const BEAKER_ACTIVITY_1_PROBLEM_4 = {
    num: 1,
    den: 3,
  }

  const BEAKER_ACTIVITY_1_PROBLEM_5 = {
    num: 3,
    den: 4,
  }

  const BEAKER_ACTIVITY_1_PROBLEM_6 = {
    num: 5,
    den: 6,
  }

  const BEAKER_ACTIVITY_1_PROBLEM_7 = {
    num: 7,
    den: 8,
  }

  const BEAKER_ACTIVITY_1_PROBLEM_8 = {
    num: 3,
    den: 6,
  }

  const BEAKER_ACTIVITY_1_PROBLEM_9 = {
    num: 2,
    den: 4,
  }

  const BEAKER_ACTIVITY_1_PROBLEM_10 = {
    num: 3,
    den: 8,
  }

  const BEAKER_ACTIVITY_1_PROBLEM_11 = {
    num: 2,
    den: 5,
  }

  const BEAKER_ACTIVITY_1_PROBLEM_12 = {
    num: 4,
    den: 7,
  }

  // Problem Set One Teacher Debrief
  const BEAKER_ACTIVITY_1_TEACHER_1 = {
    num: 1,
    den: 4,
  }
  
  // Problem Set Two
  const BEAKER_ACTIVITY_2_TEACHER_1 = {
    num: 4,
    den: 6,
    multichoice: [
      [3, 4],
      [3, 10],
      [4, 6],
      [1, 3]
    ],
  }

  const BEAKER_ACTIVITY_2_TEACHER_2 = {
    num: 2,
    den: 8,
    multichoice: [
      [1, 2],
      [2, 8],
      [2, 3],
      [5, 6]
    ],
  }
  
  const BEAKER_ACTIVITY_2_TEACHER_3 = {
    num: 3,
    den: 4,
    multichoice: [
      [2, 7],
      [3, 4],
      [8, 9],
      [3, 6]
    ],
  }

  // New Game

  // First SEt
   const ACTIVITY_ONE_PROBLEMS = [BEAKER_ACTIVITY_1_PROBLEM_1,
    BEAKER_ACTIVITY_1_PROBLEM_2,
    BEAKER_ACTIVITY_1_PROBLEM_3,
    BEAKER_ACTIVITY_1_PROBLEM_4,
    BEAKER_ACTIVITY_1_PROBLEM_5,
    BEAKER_ACTIVITY_1_PROBLEM_6,
    BEAKER_ACTIVITY_1_PROBLEM_7,
    BEAKER_ACTIVITY_1_PROBLEM_8,
    BEAKER_ACTIVITY_1_PROBLEM_9,
    BEAKER_ACTIVITY_1_PROBLEM_10,
    BEAKER_ACTIVITY_1_PROBLEM_11,
    BEAKER_ACTIVITY_1_PROBLEM_12]

    const ACTIVITY_ONE = {
      prompt: "Answer the question as a class \n by showing the number to \n the answer you chose.",
      discussion: "You're finished!",
      mc: false,
      problems: ACTIVITY_ONE_PROBLEMS
    }

    // Teacher Debrief

    const ACTIVITY_ONE_TEACHER = {
      prompt: "Answer the question as a class \n by showing the number to \n the answer you chose.",
      discussion: "You're finished!",
      mc: false,
      problems: [BEAKER_ACTIVITY_1_TEACHER_1]
    }

   // Teacher with class estimation.
   const ACTIVITY_TWO_TEACHER = {
    prompt: "Answer the question as a class \n by showing the number to \n the answer you chose.",
    discussion: "You're finished!",
    mc: true,
    problems: [BEAKER_ACTIVITY_2_TEACHER_1,BEAKER_ACTIVITY_2_TEACHER_2,BEAKER_ACTIVITY_2_TEACHER_3]
  }
  export const EST_ACTIVITIES = {
    'ACTIVITY_ONE': ACTIVITY_ONE,
    'ACTIVITY_ONE_TEACHER': ACTIVITY_ONE_TEACHER,
    'ACTIVITY_TWO_TEACHER': ACTIVITY_TWO_TEACHER,
    'estWarmup': EST_WARM_UP,
    'estHands': EST_HANDS,
    'estMultichoice': EST_MULTICHOICE,
    'estWarmupTwo': EST_WARM_UP_2,
    'estHandsTwo': EST_HANDS_2,
    'estMultichoiceTwo': EST_MULTICHOICE_2
  }