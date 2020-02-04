
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
        "How can you figure out the fraction of the square this shape represents?",
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 3,
      tips: ["Record solutions on the board or chart paper for students to see.",
      "What shapes were harder to use? Why?",
      "How did you find the fraction of the whole each shape represents?"      
        ],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 4,
      tips: ["Compare your paper with your partner.",
      "Does the work match this example?",
      "Work together to make any corrections needed."
       ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 5,
      tips: ["Compare your paper with your partner.",
      "Does the work match this example?",
      "Work together to make any corrections needed."
       ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 6,
      tips: ["How many thirds (eighths) will you need to fill the whole square?",
        "Which unit fraction covers more of the square,  a third or an eighth? Explain.",
        "Is there more than one solution to this problem? Explain.",
      ],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 7,
      tips: ["Which shapes did you try? Why those shapes?",
      "Which unit fractions will cover 3-fourths of the square? How do you know?",
      "How much is left empty if ¾ is covered? How do you know?"
      
        ],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 8,
      tips: ["Compare your paper with your partner.",
        "Does the work match this example?",
        "Work together to make any corrections needed.",
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 9,
      tips: ["Compare your paper with your partner.",
        "Does the work match this example?",
        "Work together to make any corrections needed.",
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 10,
      tips: ["Use your tool to solve the problem.",
        "How did you solve this problem?",
        "What is the fraction each small rectangle represents of the whole square?"        
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
]



export const ACTIVITY = {
    ID: "tile_less_than_one",
    TITLE : "Building with Unit Fractions",
    SCREEN_TYPE: SCREEN_TYPES.PORTRAIT,
    ICON: ICON,
    TIME: 45,
    PAGES: 14,
    TOOL: "/walltool",
    SCRIPT: "WALL_TOOL",
    FEATURES: {x: 5,y: 5,single: true},
    MENU: ['Link One',"Link Two"],
    SEQUENCE: sequence,
    LONG_DESCRIPTION: "Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think?",
    INSTRUCTIONS: 'Students should...',
    STANDARD_ID: "3.NF.A.3.A",
    STANDARD_DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    TAGS: ["Place Value","Addition","First Grade"],
    LEARNING_GOAL: "goal for learning",
    PDF: "/pdfs/slides/TileLessThanOne.pdf",
    ORGANIZER: "/pdfs/organizers/TileLessThanOneOrganizer.pdf",
    STUDENT_LINKS: [{title: 'Tool',link: '/walltoolsingle'}],
    DESCRIPTION: "Students fill in a square area (1 whole) using shapes that represent unit fractions (⅓, ¼, ⅙,and ⅛) of the square. By making copies and covering the whole square with a given shape, students identify the unit fraction represented by the given shape. Students use unit fractions (fourths) to represent ¾ in more than one way. Challenge students to represent ¾ using more than one shape (i.e. using equivalent pieces).",
    OBJECTIVES: ["Identify unit fractions using part to whole reasoning","Compose fractions using unit fractions (e.g. ¾ = ¼+¼+¼)"],
    OVERVIEW: [{anchor: "Play",slides: [1,4], description: ['Bullet One','Bullet Two','Bullet Three']},
    {anchor: "Discuss",slides: [5,6],description: ['Bullet One','Bullet Two','Bullet Three']}]
  }

