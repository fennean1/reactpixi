
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
    FEATURES: {numberOfBlocks: 4},
    MENU: ['Link One',"Link Two"],
    SEQUENCE: sequence,
    LONG_DESCRIPTION: "Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think?",
    INSTRUCTIONS: 'Students should...',
    STANDARD_ID: "3.NF.A.3.A",
    STANDARD_DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    TAGS: ["Place Value","Addition","First Grade"],
    LEARNING_GOAL: "goal for learning",
    PDF: "/pdfs/slides/OrderingFractions.pdf",
    ORGANIZER: null,
    STUDENT_LINKS: [{title: 'Tool',link: '/orderingblocksx4'}],
    DESCRIPTION: "Description goes here.",
    OBJECTIVES: ["students can do this","students can also do this"],
    OVERVIEW: [{anchor: "Play",slides: [1,4], description: ['Bullet One','Bullet Two','Bullet Three']},
    {anchor: "Discuss",slides: [5,6],description: ['Bullet One','Bullet Two','Bullet Three']}]
  }

