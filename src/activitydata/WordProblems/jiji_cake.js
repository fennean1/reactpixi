
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/JijiCakeIcon.png'


const sequence = 
    [{
      slideNumber: 1,
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["How much would JiJi eat on day 1?",
      "How much cake is left after day 1?",
      "How much cake does JiJi eat on day 2?"
      ],
    },
]

export const ACTIVITY = {
    ID: "jiji_cake",
    TITLE : "JiJi's Cake",
    WORD_PROBLEM: true,
    ICON: ICON,
    TIME: 15,
    PAGES: 4,
    TOOL: "/gridcuttingsnap4x4",
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
    PDF: "/pdfs/wordproblems/JijiResting.pdf",
    STUDENT_LINKS: [{title: 'Tool',link: "/greaterthanoneblocks"}],
    OBJECTIVES: ["students can do this","students can also do this"],
    DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    OVERVIEW: [{anchor: "Play",slides: [1,4], description: ['Bullet One','Bullet Two','Bullet Three']},
    {anchor: "Discuss",slides: [5,6],description: ['Bullet One','Bullet Two','Bullet Three']}]
  }
