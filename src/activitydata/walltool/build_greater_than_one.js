
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/GreaterThanOneIcon.png'


const sequence = 
    [{
      slideNumber: 1,
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["Follow the prompt."],
    },
    {
      slideNumber: 2,
      tips: ["Describe how these models can represent fractions?",
      "What fractions can you represent?",
      "Can you use wholes and parts to name the fraction?",      
        ],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 3,
      tips: ["What represents a whole?",
      "Why does it matter?",
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 4,
      tips: ["How many halves are represented?",
      "What is another name for 2 halves?",      
       ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 5,
      tips: ["How many halves are represented?",
      "How many more halves make 2 wholes?", 
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 6,
      tips: ["How many halves are represented?",
      "How many more halves make 2 wholes?",      
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 7,
      tips: ["How full is each pit?",
      "How much more sand do you need for each pit?"
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 8,
      tips: ["How full is each pit?",
      "How much more sand do you need for each pit?",      
      "How much sand has JiJi used already?",
        ],
        screenType: SCREEN_TYPES.PORTRAIT
    },
    {
      slideNumber: 9,
      tips: ["JiJi uses 4/3 or 1 and ⅓ buckets of sand.",
      "How much sand will be left over?",
      ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 10,
      tips: ["How much is already filled?",
      "How many buckets make one fourth?",
      "How many fourths are needed to fill one pit?",
      "How many buckets are needed to fill one pit?"
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 11,
      tips: ["Use different colors to model the situation with the tool.",
        ],
        screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 12,
      tips: ["How many buckets make one fourth?",
      "How many fourths are needed to fill one pit?",
      "How many buckets are needed to fill one pit?",
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 13,
      tips: ["What part of a pit does each bucket fill?",
      "How many buckets fill 1 pit?",
      "How many more buckets does JiJi need one more whole pit?",
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
]

export const ACTIVITY = {
    ID: "build_greater_than_one",
    TITLE : "Building Fractions Greater Than 1",
    SCREEN_TYPE: SCREEN_TYPES.PORTRAIT,
    ICON: ICON,
    TIME: 45,
    PAGES: 14,
    TOOL: "/greaterthanoneblocks",
    SCRIPT: "BUILDING_BLOCKS",
    FEATURES: {greaterThanOne: true},
    MENU: ['Link One',"Link Two"],
    SEQUENCE: sequence,
    LONG_DESCRIPTION: "Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think?",
    INSTRUCTIONS: 'Students should...',
    STANDARD_ID: "3.NF.A.3.A",
    STANDARD_DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    TAGS: ["Place Value","Addition","First Grade"],
    LEARNING_GOAL: "goal for learning",
    PDF: "/pdfs/slides/BuildingFractionsGreaterThanOne.pdf",
    ORGANIZER: "/pdfs/organizers/BuildingGreaterThanOneOrganizer.pdf",
    STUDENT_LINKS: [{title: 'Tool',link: '/greaterthanoneblocks'}],
    DESCRIPTION: "Students use an area model to answer the question ‘How many wholes can you make with 5 fourths and how many whole...with 3 halves?’. The discussion introduces students to the idea of fractions greater than one: 3 halves is 1 whole and ½ of another . They apply this model to fill holes in JiJi’s path using buckets and then piles of sand. This situation gives a context for describing fractions greater than 1. The conclusion question asks students to identify and discuss fractions greater than one. Students generalize about why a fraction with a numerator greater than the denominator is always greater than 1 whole.",
    OBJECTIVES: ["Model and name fractions greater than 1.","Compose and decompose whole numbers into fractions."],
    OVERVIEW: [{anchor: "Play",slides: [1,4], description: ['Bullet One','Bullet Two','Bullet Three']},
    {anchor: "Discuss",slides: [5,6],description: ['Bullet One','Bullet Two','Bullet Three']}]
  }

