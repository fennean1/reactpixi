
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/BeakerEstimationIcon.png'

const sequence = 
    [{
      slideNumber: 1,
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["Follow the prompt."],
      puzzle: "ACTIVITY_ONE"
    },
    {
      slideNumber: 2,
      tips: ["How does this fraction help you figure out how much of the beaker to fill?",
        "Explain your strategy.",
        "Do you have to have an exact answer? Why or why not?"
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "ACTIVITY_ONE"
    },
    {
      slideNumber: 3,
      tips: ["How does this fraction help you figure out how much of the beaker to fill?",
      "Explain your strategy.",
      "Do you have to have an exact answer? Why or why not?"
      ],
      screenType: SCREEN_TYPES.PORTRAIT,
      puzzle: "ACTIVITY_ONE_TEACHER"
    },
    {
      slideNumber: 4,
      tips: ["Record the solution on your paper",
        "Check with your partner, does their work match this example?",
        "Work together to make any corrections needed.",
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "ACTIVITY_ONE_TEACHER"
    },
    {
      slideNumber: 5,
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["Compare your solutions with your partner’s",
        "Is there more than one reasonable answer? Why or why not.",
        "What would be another reasonable answer to this problem? What would be unreasonable?"
        ],
        puzzle: "ACTIVITY_ONE_TEACHER"
    },
    {
      slideNumber: 6,
      screenType: SCREEN_TYPES.PORTRAIT,
      tips: ["Which estimate(s) seem reasonable? Explain.",
        "Which of these fractions would not be reasonable? Explain.",
        "Are there other fractions not on the list that would be reasonable? Explain."
        ],
      puzzle: "ACTIVITY_TWO_TEACHER"
    },
    {
      slideNumber: 7,
      screenType: SCREEN_TYPES.PORTRAIT,
      tips: ["Which estimate(s) seem reasonable? Explain.",
        "Which of these fractions would not be reasonable? Explain.",
        "Are there other fractions not on the list that would be reasonable? Explain.",
        ],
      puzzle: "ACTIVITY_TWO_TEACHER"
    },
  ]


export const ACTIVITY = {
    ID: "beaker_estimation",
    TITLE : "Beaker Estimation",
    SCREEN_TYPE: SCREEN_TYPES.PORTRAIT,
    ICON: ICON,
    TIME: 30,
    PAGES: 4,
    TOOL: "/placingnumbers",
    SCRIPT: "BEAKER_ESTIMATION",
    FEATURES: {x: 5,y: 5},
    MENU: ['Link One',"Link Two"],
    SEQUENCE: sequence,
    DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    LONG_DESCRIPTION: "Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think?",
    INSTRUCTIONS: 'Students should...',
    STANDARD_ID: "3.NF.A.3.A",
    STANDARD_DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    TAGS: ["Place Value","Addition","First Grade"],
    LEARNING_GOAL: "goal for learning",
    PDF: "/pdfs/BeakerEstimation.pdf",
    STUDENT_LINKS: [{title: 'Game',link: '/estimation-game-one'}]
  }
