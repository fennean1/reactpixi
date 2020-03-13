
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/NumberLineEquivalenceIcon.png'


const sequence = 
    [{
      slideNumber: 1,
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["Follow the prompt."],
    },
    {
      slideNumber: 2,
      tips: ["What do the plus (+) and minus (–) buttons do?",
        "Describe what changes on the number line and rectangle models when you increase or decrease the denominator?",
        "Did students notice that the fraction is hidden when it drags?"       
        ],
      screenType: SCREEN_TYPES.PANORAMIC,
    },
    {
      slideNumber: 3,
      tips: ["What do you notice about these circles?",
      "How can you change the number of orange parts and still have both circles show the same amount?",
      "What patterns do you notice?",
        ],
        screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_ONE_TEACHER"
    },
    {
      slideNumber: 4,
      tips: ["What does it mean when two fractions are equivalent?",
      "How does the number line show these two fractions are equivalent?",
      "How does the circle model show these two fractions are equivalent?",
      "What pattern do you see in both models?"
        ],
        screenType: SCREEN_TYPES.PANORAMIC,
      puzzle: "BUILDING_ACTIVITY_ONE_TEACHER"
    },
    {
      slideNumber: 5,
      tips: ["How can you divide the number line to show thirds?",
      "Does dividing number line by thirds help you sketch sixths? How so?",
      "What patterns do you see?"
      ],
        screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_TWO"
    },
    {
      slideNumber: 6,
      tips: ["What equivalent fractions do you see?",
      "What if the number line went to 2? Where would we see equivalent thirds and sixths?",
      "How many sixths would be equivalent to 7 thirds?",
      "How many thirds would be equivalent to 12 sixths?"
        ],
        screenType: SCREEN_TYPES.PANORAMIC,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
    {
      slideNumber: 7,
      tips: ["How can you divide the number line to show fourths?",
      "Does dividing number line by fourths help you sketch eighths? How so?",
      "What patterns do you see?"
        ],
        screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
    {
      slideNumber: 8,
      tips: ["What equivalent fractions do you see?",
      "What if the number line went to 2? Where would we see equivalent fourths and eighths?",
      "How many eighths would be equivalent to 7 fourths?",
      "How many fourths would be equivalent to 16 eighths?"],
        screenType: SCREEN_TYPES.PANORAMIC,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
    {
      slideNumber: 9,
      tips: ["What equivalent pairs did you find?",
      "What patterns do you see with each equivalent pair?",
    ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 10,
      tips: ["What equivalent pairs did you find?",
      "What patterns do you see with each equivalent pair?",
      ],
        screenType: SCREEN_TYPES.PANORAMIC,
    },
]


export const ACTIVITY = {
    ID: "number_line_equivalence",
    TITLE : "Number Line Equivalence",
    SCREEN_TYPE: SCREEN_TYPES.PANORAMIC,
    ICON: ICON,
    TIME: 45,
    PAGES: 4,
    TOOL: "/placingnumbers",
    SCRIPT: "FRACTION_NUMBER_LINE_DESCRIPTOR",
    FEATURES: {blocks: true,open: true},
    MENU: ['Link One',"Link Two"],
    SEQUENCE: sequence,
    LONG_DESCRIPTION: "Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think?",
    INSTRUCTIONS: 'Students should...',
    STANDARD_ID: "3.NF.A.3.A",
    STANDARD_DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    TAGS: ["Place Value","Addition","First Grade"],
    LEARNING_GOAL: "goal for learning",
    PDF: "/pdfs/slides/NumberLineEquivalence.pdf",
    ORGANIZER: "pdfs/organizers/NumberLineEquivalenceOrganizer.pdf",
    STUDENT_LINKS: [{title: 'Tool',link: '/fractionnumberlinedescriptor'}],
    DESCRIPTION: "Students will explore the meaning of number line equivalence beginning with an area model example. They’ll then use a number line manipulative to create patterns and extend their understanding. Students will use the tool to construct their own written models and compare them in groups. They’ll conclude by continuing to explore the tool to find as many equivalent fractions as possible. ",
    OBJECTIVES: ["Students understand that fractions with equivalent value occupy the same location on the number line when they refer to the same whole.","Students can reason about denominators in terms of whether or not they can produce equivalent fractions. For example, you can make more equivalent fractions with 6ths and 3rds than you can with 3rds and 4ths."],
    OVERVIEW: [{anchor: "Play",slides: [1,4], description: ['Bullet One','Bullet Two','Bullet Three']},
    {anchor: "Discuss",slides: [5,6],description: ['Bullet One','Bullet Two','Bullet Three']}]
  }
