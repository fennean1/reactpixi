
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/TilingLessThanOneIcon.png'



const sequence = 
    [{
      slideNumber: 1,
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["Follow the prompt."],
    },
    {
      slideNumber: 2,
      tips: ["Predict which shapes might work and which might not.",
        "Use a different shape for each whole square.",
        "How many fourths will you need to fill in one whole?",
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 3,
      tips: ["How did you fill the square with fourths? Explain.",
        "Are there other shapes that are one-fourth of the large square? Explain",
        "Record your work on your paper. Name the unit fraction modeled. See example.",
        ],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 4,
      tips: ["Compare your paper with your partner.",
        "Does the work match this example?",
        "Work together to make any corrections needed.",
       ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 5,
      tips: ["How many thirds (eighths) will you need to fill the whole square?",
          "Which unit fraction covers more of the square,  a third or an eighth? Explain.",
          "Is there more than one solution to this problem? Explain.",
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 6,
      tips: ["Which shapes are ‘thirds’, ‘eighths’ of the whole square? Explain.",
      "Which unit fraction covers more of the square,  a third or an eighth? Explain.",
      "If 8 is greater than 3, why is ⅛ less than ⅓?",
      "Record your work on your paper. Name the unit fraction modeled.",
      ],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 7,
      tips: ["Compare your paper with your partner.",
      "Does the work match this example?",
      "Work together to make any corrections needed."
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 8,
      tips: ["Use your tool to solve the problem.",
      "5 shapes cover the whole square. Does that mean the pieces are fifths? Explain."
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
]



export const ACTIVITY = {
    ID: "tile_less_than_one",
    TITLE : "Tile Less Than One",
    SCREEN_TYPE: SCREEN_TYPES.PORTRAIT,
    ICON: ICON,
    TIME: 45,
    PAGES: 14,
    TOOL: "/walltool",
    SCRIPT: "WALL_TOOL",
    FEATURES: {x: 5,y: 5},
    MENU: ['Link One',"Link Two"],
    SEQUENCE: sequence,
    DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    LONG_DESCRIPTION: "Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think?",
    INSTRUCTIONS: 'Students should...',
    STANDARD_ID: "3.NF.A.3.A",
    STANDARD_DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    TAGS: ["Place Value","Addition","First Grade"],
    LEARNING_GOAL: "goal for learning",
    PDF: "/pdfs/slides/TileLessThanOne.pdf",
    ORGANIZER: "/pdfs/organizers/TileLessThanOneOrganizer.pdf",
    STUDENT_LINKS: [{title: 'Tool',link: '/walltool'}]
  }

