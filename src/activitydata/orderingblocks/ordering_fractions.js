
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/OrderingFractionsIcon.png'


const sequence = 
    [{
      slideNumber: 1,
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["Follow the prompt."],
    },
    {
      slideNumber: 2,
      tips: ["What strategy did you use to order these fractions?",
        "Who used a different strategy?"
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 3,
      tips: ["Monitor students as they work.",
      "What do you notice when you use this tool?",
      "What patterns do you see with this tool that help order these fractions?",
      ],
        screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 4,
      tips: ["What do you notice when you use this tool?",
        "What patterns do you see with this tool that help order these fractions?",        
        ],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 5,
      tips: ["Monitor students as they work.",
        "What strategy are you using to draw the fractions on the rectangles?",
        "What do you notice that can help order the fractions from least to greatest?"
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 6,
      tips: ["Monitor students as they work.",
        "What do you notice when you use this tool?",
        "What patterns do you see with this tool that help order these fractions?"
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 7,
      tips: ["What do you notice when you use this tool to order these fractions?",
      "What patterns do you see with this tool that help order these fractions?"
        ],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 8,
      tips: ["Is there a mistake in this sentence? Explain.",
      "Can you find more than one mistake?"],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
]


export const ACTIVITY = {
    ID: "ordering_fractions",
    TITLE : "Ordering Fractions",
    SCREEN_TYPE: SCREEN_TYPES.PORTRAIT,
    ICON: ICON,
    TIME: 45,
    PAGES: 4,
    TOOL: "/placingnumbers",
    SCRIPT: "ORDERING_BLOCKS",
    FEATURES: {numberOfBlocks: 5},
    MENU: ['Link One',"Link Two"],
    SEQUENCE: sequence,
    LONG_DESCRIPTION: "Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think?",
    INSTRUCTIONS: 'Students should...',
    STANDARD_ID: "3.NF.A.3.A",
    STANDARD_DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    TAGS: ["Place Value","Addition","First Grade"],
    LEARNING_GOAL: "goal for learning",
    PDF: "/pdfs/slides/OrderingFractions.pdf",
    ORGANIZER: "/pdfs/organizers/OrderingFractionsOrganizer.pdf",
    STUDENT_LINKS: [{title: 'Tool',link: '/orderingblocksx5'}],
    DESCRIPTION: "Students compare and order fractions by applying strategies developed in the Comparing Fractions lesson, then use a visual model (ordering tool) to confirm or refute their initial answer. Sets of 5 fractions include fractions with like numerators and fractions near 0 and ½. Students develop a variety of strategies to predict, model and record the correct order of fractions.",
    OBJECTIVES: ["Fractions with like numerators can be compared using their denominators and reasoning about their relative sizes. (¾ > ⅜ because fourths are larger than eighths).",
    "½ can be used as a benchmark for comparing fractions: ⅜ < 4/6 because ⅜ is ⅛ less than a half and 4/6 is ⅙ more than a half."],
    OVERVIEW: [{anchor: "Play",slides: [1,4], description: ['Bullet One','Bullet Two','Bullet Three']},
    {anchor: "Discuss",slides: [5,6],description: ['Bullet One','Bullet Two','Bullet Three']}]
  }

