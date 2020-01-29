
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/PlacingFractionsIcon.png'


const sequence = 
    [{
      slideNumber: 1,
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["Follow the prompt."],
      puzzle: "BUILDING_ACTIVITY_ONE"
    },
    {
      slideNumber: 2,
      tips: ["How are you figuring out where to put the pins?",
        "Can you use ½ to help you place the other pins?",
        "What strategies have you tried?" 
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_ONE"
    },
    {
      slideNumber: 3,
      tips: ["Compare guess/check strategy with repeated halving.",
        "How far is the first pin from zero? ¼ of the whole (0 to 1)",
        "How far are the second/third pins?",
        "What unit fraction is the number line divided into? How do you know?",
        ],
        screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_ONE_TEACHER"
    },
    {
      slideNumber: 4,
      tips: ["Record the solution on your paper",
        "Check with your partner, does their work match this example?",
        "Work together to make any corrections needed."
        ],
        screenType: SCREEN_TYPES.PANORAMIC,
      puzzle: "BUILDING_ACTIVITY_ONE_TEACHER"
    },
    {
      slideNumber: 5,
      tips: ["How are you figuring out where to put these fractions?",
        "Why should these fractions be spaced equally between 0 and 1?",
        "What is the distance from 2/n to 3/n?"
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_TWO"
    },
    {
      slideNumber: 6,
      tips: ["Compare guess/check strategy with finding ½ (3/6) then placing remaining fractions on NL.",
        "How far is the ⅚  from zero? Prove it.",
        "What is the distance between each point on the number line?"
        ],
        screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
    {
      slideNumber: 7,
      tips: ["Record the solution on your paper",
        "Check with your partner, does their work match this example?",
        "Work together to make any corrections needed."
        ],
        screenType: SCREEN_TYPES.PANORAMIC,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
    {
      slideNumber: 8,
      tips: ["What do you notice about these two number lines? Compare/Contrast",
        "Why do you think this number line shows fourths but not the other?",
        "Both number lines are divided into 4 distances, why aren’t they both fourths?"],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
    {
      slideNumber: 9,
      tips: ["What do you notice about these two number lines? Compare/Contrast",
        "Why do you think this number line shows fourths but not the other?",
        "Both number lines are divided into 4 distances, why aren’t they both fourths?"],
      screenType: SCREEN_TYPES.PANORAMIC,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
    {
      slideNumber: 10,
      tips: ["What do you notice about these two number lines? Compare/Contrast",
        "Why do you think this number line shows fourths but not the other?",
        "Both number lines are divided into 4 distances, why aren’t they both fourths?"],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
]


export const ACTIVITY = {
    ID: "placing_fractions",
    TITLE : "Placing Fractions on a Number Line",
    SCREEN_TYPE: SCREEN_TYPES.PANORAMIC,
    ICON: ICON,
    TIME: 45,
    PAGES: 4,
    TOOL: "/placingnumbers",
    SCRIPT: "FRACTION_NUMBER_LINE",
    FEATURES: {blocks: true,open: true},
    MENU: ['Link One',"Link Two"],
    SEQUENCE: sequence,
    DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    LONG_DESCRIPTION: "Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think?",
    INSTRUCTIONS: 'Students should...',
    STANDARD_ID: "3.NF.A.3.A",
    STANDARD_DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    TAGS: ["Place Value","Addition","First Grade"],
    LEARNING_GOAL: "goal for learning",
    PDF: "/pdfs/slides/PlacingFractions.pdf",
    ORGANIZER: "pdfs/organizers/PlacingFractionsOrganizer.pdf",
    STUDENT_LINKS: [{title: 'Tool',link: '/fractionnumberlineopenblocks'}]
  }
