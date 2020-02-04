
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/BuildingNumberLinesIcon.png'


const sequence = 
    [{
      slideNumber: 1,
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["Follow the prompt."],
      puzzle: "BUILDING_ACTIVITY_ONE"
    },
    {
      slideNumber: 2,
      tips: ["Monitor students as they work.",
        "How can the bar models help you plot these fractions?",
        "Which bar did you choose? Why?",
        "Could you use a different bar? Explain.",
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_ONE"
    },
    {
      slideNumber: 3,
      tips: ["Compare guess/check strategy with using the bar model to measure.",
      "Which bar length did you use? Why?",
      "Can any of these bars be used? Explain.",
      "What unit fraction is the number line divided into? How do you know?",
        ],
      screenType: SCREEN_TYPES.PANORAMIC,
      puzzle: "BUILDING_ACTIVITY_ONE_TEACHER"
    },
    {
      slideNumber: 4,
      tips: ["Compare your paper with your partner.",
        "Does the work match this example?",
        "Work together to make any corrections needed.",
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_ONE_TEACHER"
    },
    {
      slideNumber: 5,
      tips: ["Which bar do you think will work? Why?",
        "How many bars of this kind will you use? ",
        "What is the unit distance between each fraction? Explain."
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_TWO"
    },
    {
      slideNumber: 6,
      tips: ["Which bar do you think will work? Why?",
        "How many bars of this kind will you use to plot all the numbers?",
        "What is the unit distance between each number on the number line? Explain."   
        ],
      screenType: SCREEN_TYPES.PANORAMIC,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
    {
      slideNumber: 7,
      tips: ["Compare your paper with your partner.",
        "Does the work match this example?",
        "Work together to make any corrections needed.",
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
    {
      slideNumber: 8,
      tips: ["Describe your strategy for plotting fourths. Where did you start?",
        "Describe your strategy for plotting thirds.",
        "Compare strategies for fourths and thirds.",
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
    {
      slideNumber: 9,
      tips: ["Show with your fingers where 4/3 should go (A=1 finger, B=2, C=3)",
        "Describe your strategy for finding 4/3.",
        "What fraction do the other 2 points represent?",
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
]


export const ACTIVITY = {
    ID: "building_number_lines",
    TITLE : "Building Number Lines",
    SCREEN_TYPE: SCREEN_TYPES.PANORAMIC,
    ICON: ICON,
    TIME: 45,
    PAGES: 4,
    TOOL: "/placingnumbers",
    SCRIPT: "PLACING_NUMBERS",
    FEATURES: {x: 5,y: 5},
    MENU: ['Link One',"Link Two"],
    SEQUENCE: sequence,
    LONG_DESCRIPTION: "Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think?",
    INSTRUCTIONS: 'Students should...',
    STANDARD_ID: "3.NF.A.3.A",
    STANDARD_DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    TAGS: ["Place Value","Addition","First Grade"],
    LEARNING_GOAL: "goal for learning",
    PDF: "/pdfs/slides/BuildingNumberLines.pdf",
    ORGANIZER: null,
    STUDENT_LINKS: [{title: 'Game One',link: '/numberline-building-game-one'},{title: 'Game Two',link: '/numberline-building-game-two'}],
    DESCRIPTION: "Students plot fractions on open number lines: number lines with only zero and no units marked. Bar models provide students a way to accurately measure unit fractions to build number lines for the fractions given in the puzzles. Number lines students build may have different scales depending on which bar model they used. Class discussion focuses on identifying a unit length and how that affects where other numbers go on the number line. ",
    OBJECTIVES: ["Build number lines using unit fractions.","Compare differences among number lines with different unit fraction lengths."],
    OVERVIEW: [{anchor: "Play",slides: [1,4], description: ['Bullet One','Bullet Two','Bullet Three']},
    {anchor: "Discuss",slides: [5,6],description: ['Bullet One','Bullet Two','Bullet Three']}]
  }

