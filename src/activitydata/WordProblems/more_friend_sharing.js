
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/MoreFriendSharingIcon.png'


const sequence = 
    [{
      slideNumber: 1,
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["Will the JiJi’s get more than one block each?",
             "How much more than one?",
        ],
    },
]


export const ACTIVITY = {
    ID: "more_friend_sharing",
    TITLE : "More Friend Sharing",
    WORD_PROBLEM: true,
    ICON: ICON,
    TIME: 15,
    PAGES: 4,
    TOOL: "/sharingtool",
    SCRIPT: "FRACTION_NUMBER_LINE",
    FEATURES: {blocks: true,open: true},
    MENU: ['Link One',"Link Two"],
    SEQUENCE: sequence,
    LONG_DESCRIPTION: "Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think?",
    INSTRUCTIONS: 'Students should...',
    STANDARD_ID: "3.NF.A.3.A",
    STANDARD_DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    TAGS: ["Place Value","Addition","First Grade"],
    LEARNING_GOAL: "goal for learning",
    PDF: "/pdfs/wordproblems/MoreFriendSharing.pdf",
    STUDENT_LINKS: [{title: 'Tool',link: "/sharingtool"}],
    OBJECTIVES: ["students can do this","students can also do this"],
    DESCRIPTION: "Student see the motivation behind decomposing whole numbers in a sharing context.",
    OVERVIEW: [{anchor: "Play",slides: [1,4], description: ['Bullet One','Bullet Two','Bullet Three']},
    {anchor: "Discuss",slides: [5,6],description: ['Bullet One','Bullet Two','Bullet Three']}]
  }
