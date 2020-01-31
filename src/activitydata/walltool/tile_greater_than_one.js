
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
      tips: ["Can there be more than 1 solution? Explain.",
            "Which shapes did you try? Explain."
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 3,
      tips: ["Can there be more than 1 solution? Explain.",
        "Which shapes did you use? Let’s try it!",
        "What is the value of each shape?", 
        "How much of the squares is covered?"
        ],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 4,
      tips: ["Record the solution on your paper",
        "Check with your partner, does their work match this example?",
        "Work together to make any corrections needed."        
       ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 5,
      tips: ["Which piece(s) do you think will work?",
        "How many fourths cover 1 whole square?",
        "How many more fourths would you need to cover both (2-whole) squares?"        
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 6,
      tips: ["Which piece(s) do you think will work?",
        "How many thirds cover 1 whole square?",
        "How many more thirds would you need to cover both (2-whole) squares?"
        ],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 7,
      tips: ["Record the solution on your paper.",
        "Check with your partner, does their work match this example?",        
        "Work together to make any corrections needed."
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 8,
      tips: ["Use your tool to solve the problem.",
        "There may not be a ‘correct’ answer, but what are some reasonable estimates.",
        "What is an unreasonable estimate?"
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
]



export const ACTIVITY = {
    ID: "tile_greater_than_one",
    TITLE : "Tile Greater Than One",
    SCREEN_TYPE: SCREEN_TYPES.PORTRAIT,
    ICON: ICON,
    TIME: 45,
    PAGES: 14,
    TOOL: "/walltool",
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
    STUDENT_LINKS: [{title: 'Tool',link: '/walltool'}],
    DESCRIPTION: "Description goes here.",
    OBJECTIVES: ["students can do this","students can also do this"],
    OVERVIEW: [{anchor: "Play",slides: [1,4], description: ['Bullet One','Bullet Two','Bullet Three']},
    {anchor: "Discuss",slides: [5,6],description: ['Bullet One','Bullet Two','Bullet Three']}]
  }

