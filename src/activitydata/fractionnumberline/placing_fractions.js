
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
      tips: ["Did students notice that the fraction is hidden when it drags?",
      "Did they notice that the “1” was draggable?",
      "Did they notice that you can only show one set of blocks at a time?"
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_ONE"
    },
    {
      slideNumber: 3,
      tips: ["Share out answers.",
      "What do you think the distance between A and 1 is?",
        ],
        screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_ONE_TEACHER"
    },
    {
      slideNumber: 4,
      tips: ["How do the ticks on the number line help you?",
      "How far is A from zero?",
      "How far is it from one?",
        ],
        screenType: SCREEN_TYPES.PANORAMIC,
      puzzle: "BUILDING_ACTIVITY_ONE_TEACHER"
    },
    {
      slideNumber: 5,
      tips: ["This is a preparation for the next sketching activity."
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_TWO"
    },
    {
      slideNumber: 6,
      tips: ["Students may use the tool to help them."],
        screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
    {
      slideNumber: 7,
      tips: ["What are the units shown?",
      "What comes after five thirds?",
      "What comes after two thirds?"
        ],
        screenType: SCREEN_TYPES.PANORAMIC,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
    {
      slideNumber: 8,
      tips: ["Students should use their organizer instead of the tool.",
      "What’s the distance from B to 1?",      
      "What’s the distance from 0 to A?",
      ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
    {
      slideNumber: 9,
      tips: ["Construct the diagram shown.",
      "Take suggestions from the class and use to tool to show if they're reasonable or not."],
      screenType: SCREEN_TYPES.PANORAMIC,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
    {
      slideNumber: 10,
      tips: ["Have students discuss for one minute",
      "Then share out.",
      "Model with tool to confirm."],
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
    STUDENT_LINKS: [{title: 'Tool',link: '/fractionnumberlineopenblocks'}],
    OBJECTIVES: ["Place a given fraction on a number line with matching ticks.",
    "Interpret how the location of the number 1 affects the location of a given fraction.",
    "Given a point on a ticked number line, state the value of the fraction corresponding to that point in terms of the ticks provided."],
    OVERVIEW: [{anchor: "Play",slides: [1,4], description: ['Bullet One','Bullet Two','Bullet Three']},
    {anchor: "Discuss",slides: [5,6],description: ['Bullet One','Bullet Two','Bullet Three']}]
  }
