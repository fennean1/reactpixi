
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/PizzaIcon.png'

const sequence = 
    [{
      slideNumber: 1,
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["Follow the prompt."],
    },
    {
      slideNumber: 2,
      tips: ["Monitor students as they work.",
      "Share out discoveries as students make them"],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 3,
      tips: ["Describe what you can do with this tool.",
      "How do you start over?",
      "How much of the ‘whole’ square is still left after all your cuts?",
       "What fraction of the ‘whole’ square is this piece?"],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 4,
      tips: ["How do you know these are equal slices?",
      "What fraction of the pizza is this slice?",
      "Is there another way you could cut the pizza into 2/4/8 slices?"],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 5,
      tips: ["Draw the different ways you found  to make 2/4/8 slices on your paper.",
      "Use the grid dots to help you draw the lines accurately.",
      "Use the cutting tool if you need to."],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 6,
      tips: ["How do you know these pieces are fair shares?",
      "What do we call these equal shares? (halves)",  
      "Label your halves with the fraction ½.",
      "What is another way to cut the pizza into halves?"],
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
      tips: ["How do you know these pieces are fair shares?",
        "What do we call these equal shares? (fourths)",
        "Label your fourths with the fraction ¼.",
        "What is another way to cut the pizza into fourths?"
        ],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 9,
      tips: ["Compare your paper with your partner.",
        "Does the work match this example?",
        "Work together to make any corrections needed"
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT
    },
    {
      slideNumber: 10,
      tips: ["How do you know these pieces are fair shares?",
        "What do we call these equal shares? (eighths)",
        "Label your eighths with the fraction ⅛.",
        "What is another way to cut the pizza into eighths?"
        ],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 11,
      tips: ["Compare your paper with your partner.",
        "Does the work match this example?",
        "Work together to make any corrections needed."
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT
    },
    {
      slideNumber: 12,
      tips: ["What patterns do you see?",
        "What happens to the size of each piece with more cuts?",
        "Record the unit fractions in order from least to greatest.",
        "If 8 > 2, why is ⅛ < ½?"
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
]

export const ACTIVITY = {
    ID: "jiji_sharing_pizza",
    TITLE : "Equal Shares",
    SCREEN_TYPE: SCREEN_TYPES.PORTRAIT,
    ICON: ICON,
    TIME: 45,
    PAGES: 14,
    TOOL: "/gridcuttingsnap4x4",
    SCRIPT: "CUTTING_GRID",
    FEATURES: {x: 5,y: 5},
    MENU: ['Link One',"Link Two"],
    SEQUENCE: sequence,
    LONG_DESCRIPTION: "Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think?",
    INSTRUCTIONS: 'Students should...',
    STANDARD_ID: "3.NF.A.3.A",
    STANDARD_DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    TAGS: ["Place Value","Addition","First Grade"],
    LEARNING_GOAL: "goal for learning",
    PDF: "/pdfs/slides/JijiSharingPizza.pdf",
    ORGANIZER: "/pdfs/organizers/JijiSharingPizzaOrganizer.pdf",
    STUDENT_LINKS: [{title: 'Tool',link: '/gridcuttingsnap4x4'}],
    DESCRIPTION: "Students cut a square (pizza) into 2, 4, and 8 equal shares using an interactive, digital tool. Classroom discussion focuses on  different ways to cut the square into equal shares and naming the unit fraction represented by each part of the whole. Students draw, label, and discuss how squares can be cut into halves, fourths and eighths in ways that create different shapes.",
    OBJECTIVES: ["Create and record equal shares","Name and label unit fractions.","Describe that the more pieces a whole is cut into, the smaller the unit fraction (e.g., eighths are smaller than halves)"],
    OVERVIEW: [{anchor: "Play",slides: [1,4], description: ['Bullet One','Bullet Two','Bullet Three']},
    {anchor: "Discuss",slides: [5,6],description: ['Bullet One','Bullet Two','Bullet Three']}]
  }

