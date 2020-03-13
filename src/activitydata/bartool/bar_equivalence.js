
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/BarEquivalenceIcon.png'


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
      "What can you do with this tool?",
      "What patterns do you notice?",
      "How do you delete bars?"      
        ],
      screenType: SCREEN_TYPES.PORTRAIT,
      puzzle: "BUILDING_ACTIVITY_ONE"
    },
    {
      slideNumber: 3,
      tips: ["Monitor students as they work.",
      "How can the tool help you find equivalent fractions?",
      "What patterns do you notice?",
      "Have you tried finding an equivalent fraction for all the unit fractions?"      
        ],
        screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_ONE_TEACHER"
    },
    {
      slideNumber: 4,
      tips: ["What strategy did you use to find an equivalent fraction pair?",
      "What patterns do you notice?",
      "Is there an equivalent fraction for all the unit fractions in this tool?",
        ],
        screenType: SCREEN_TYPES.PORTRAIT,
      puzzle: "BUILDING_ACTIVITY_ONE_TEACHER"
    },
    {
      slideNumber: 5,
      tips: ["Monitor students as they work.",
      "How can the tool help you find equivalent fractions?",
      "Will any of the unit fraction bars work? Why or why not?"
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_TWO"
    },
    {
      slideNumber: 6,
      tips: ["How can the tool help you find equivalent fractions?",
      "What strategy did you use to find an equivalent fraction for ½?",
      "Will any unit fraction bar work?",
        ],
        screenType: SCREEN_TYPES.PORTRAIT,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
    {
      slideNumber: 7,
      tips: ["Monitor students as they work.",
      "How much of the whole gap does JiJi need to fill?",
      "What fractions did you try? Which ones worked? Which ones did not work?"],
        screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
    {
      slideNumber: 8,
      tips: ["Which fractions did you find that worked?",
      "How do you know those fractions will work?",
      "How much would you need if JiJi only had 1 third instead of 2 thirds?",
        ],
        screenType: SCREEN_TYPES.PORTRAIT,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
    {
      slideNumber: 9,
      tips: ["Can we use the thirds, fifths, sevenths...bars to model one-half ½?",
      "Why or why not?",
      "Could we use twentieths 1/20 or hundredths 1/100 to model ½?",
      "Why or why not?"],
        screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },

]


export const ACTIVITY = {
    ID: "bar_equivalence",
    TITLE : "Equivalent Fractions with Bar Model",
    SCREEN_TYPE: SCREEN_TYPES.PORTRAIT,
    ICON: ICON,
    TIME: 45,
    PAGES: 4,
    TOOL: "/placingnumbers",
    SCRIPT: "FRACTION_BARS",
    FEATURES: null,
    MENU: ['Link One',"Link Two"],
    SEQUENCE: sequence,
    LONG_DESCRIPTION: "Here is a very long description of what is happening in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think?",
    INSTRUCTIONS: 'Students should...',
    STANDARD_ID: "3.NF.A.3.A",
    STANDARD_DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    TAGS: ["Place Value","Addition","First Grade"],
    LEARNING_GOAL: "goal for learning",
    PDF: "/pdfs/slides/BarEquivalence.pdf",
    ORGANIZER: "pdfs/organizers/BarEquivalenceOrganizer.pdf",
    STUDENT_LINKS: [{title: 'Tool',link: '/fractionbars'}],
    DESCRIPTION: "Students use bar models to model and explain equivalent fractions. They find all equivalent pairs for ½ given a set of virtual fraction bars, then solve for other equivalent pairs. Students transfer their work on the virtual fraction bars to a handout by drawing equivalent fractions and writing equations. Students discuss patterns for fractions equivalent to ½ (clue: all have even denominators).",
    OBJECTIVES: ["Equivalent fractions can be represented as equal lengths using bars of different sizes.","Model equivalent fractions and write equations representing them."],
    OVERVIEW: [{anchor: "Play",slides: [1,4], description: ['Bullet One','Bullet Two','Bullet Three']},
    {anchor: "Discuss",slides: [5,6],description: ['Bullet One','Bullet Two','Bullet Three']}]
  }

