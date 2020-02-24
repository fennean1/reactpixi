
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/TilingOverOneIcon.png'


const sequence = 
    [{
      slideNumber: 1,
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["Follow the prompt."],
    },
    {
      slideNumber: 2,
      tips: ["What shape should you try first? Why do you think that piece may use the least/most number of pieces?",
      "What fraction of a whole square does this piece represent?",
      "How big is the space we need to cover?"
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 3,
      tips: ["What shape should you try first? Why do you think that piece may use the least/most number of pieces?",
      "What fraction of a whole square does this piece represent?",
      "How big is the space we need to cover?",      
        ],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 4,
      tips: ["Record the solution on your paper.",
      "Check with your partner, does their work match this example?",
      "Work together to make any corrections needed."
       ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 5,
      tips: ["Record the solution on your paper",
      "Check with your partner, does their work match this example?",
      "Work together to make any corrections needed."
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 6,
      tips: ["What shape should you try first? Why do you think that piece can fill the space in the road?",
      "How many pieces will you need?", 
      "How much bigger than 1 block is this shape?",      
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 7,
      tips: ["What shape should you try first? Why do you think that piece can fill the space in the road?",
      "How many pieces will you need?",
      "How much bigger than 1 block is this shape?"
        ],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 8,
      tips: ["Record the solution on your paper.",
      "Check with your partner, does their work match this example?",
      "Work together to make any corrections needed.",
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 9,
      tips: ["Record the solution on your paper.",
      "Check with your partner, does their work match this example?",
      "Work together to make any corrections needed.",
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
]

export const ACTIVITY = {
    ID: "tile_greater_than_one",
    TITLE : "Building Fractions Greater Than 1",
    SCREEN_TYPE: SCREEN_TYPES.PORTRAIT,
    ICON: ICON,
    TIME: 45,
    PAGES: 14,
    TOOL: "/walltooldouble",
    SCRIPT: "WALL_TOOL",
    FEATURES: {x: 5,y: 5},
    MENU: ['Link One',"Link Two"],
    SEQUENCE: sequence,
    LONG_DESCRIPTION: "Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think?",
    INSTRUCTIONS: 'Students should...',
    STANDARD_ID: "3.NF.A.3.A",
    STANDARD_DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    TAGS: ["Place Value","Addition","First Grade"],
    LEARNING_GOAL: "goal for learning",
    PDF: "/pdfs/slides/TileGreaterThanOne.pdf",
    ORGANIZER: "/pdfs/organizers/TileGreaterThanOneOrganizer.pdf",
    STUDENT_LINKS: [{title: 'Tool',link: '/walltooldouble'}],
    DESCRIPTION: "Students select shapes representing unit fractions (⅓, ¼, ⅙,and ⅛) to model and name fractions greater than 1. They continue to develop understanding that different shapes can represent the same unit fraction and expand their concept of fractions by naming fractions greater than 1 whole, e.g., 7/4.",
    OBJECTIVES: ["Model and name fractions greater than 1.","Compose fractions using unit fractions (e.g. 7/4 = ¼+¼+¼+¼+¼+¼+¼)."],
    OVERVIEW: [{anchor: "Play",slides: [1,4], description: ['Bullet One','Bullet Two','Bullet Three']},
    {anchor: "Discuss",slides: [5,6],description: ['Bullet One','Bullet Two','Bullet Three']}]
  }

