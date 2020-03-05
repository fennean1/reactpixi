
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/JijiPieIcon.png'


const sequence = 
    [{
      slideNumber: 1,
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["Does JiJi need more measuring cups?",
      "How can JiJi do it with one?",
      "What’s another way of saying 8/3 of a cup?"
        ],
    },
]

export const ACTIVITY = {
    ID: "jiji_pie",
    TITLE : "JiJi's Pie",
    WORD_PROBLEM: true,
    ICON: ICON,
    TIME: 15,
    PAGES: 4,
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
    PDF: "/pdfs/wordproblems/JijiResting.pdf",
    STUDENT_LINKS: [{title: 'Tool',link: "/greaterthanoneblocks"}],
    OBJECTIVES: ["students can do this","students can also do this"],
    DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    OVERVIEW: [{anchor: "Play",slides: [1,4], description: ['Bullet One','Bullet Two','Bullet Three']},
    {anchor: "Discuss",slides: [5,6],description: ['Bullet One','Bullet Two','Bullet Three']}]
  }
