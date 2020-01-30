
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
      "How can the tool help you find equivalent fractions?",   
      "What patterns do you notice?" 
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_ONE"
    },
    {
      slideNumber: 3,
      tips: ["Compare your paper with your partner.",
      "Does the work match this example?",
      "Work together to make any corrections needed."
        ],
        screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_ONE_TEACHER"
    },
    {
      slideNumber: 4,
      tips: ["What is the largest unit fraction that can be used to equal ½?",
      "What other equivalent fractions can we model with this tool?",     
     "What patterns do you notice?",      
      "Can we organize the bar models to help find a pattern?"
        ],
        screenType: SCREEN_TYPES.PORTRAIT,
      puzzle: "BUILDING_ACTIVITY_ONE_TEACHER"
    },
    {
      slideNumber: 5,
      tips: ["Compare your paper with your partner.",
      "Does the work match these examples?",     
      "What other equivalent fraction pairs did you find?",   
      "Work together to make any corrections needed."
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_TWO"
    },
    {
      slideNumber: 6,
      tips: ["Monitor students as they work on their organizer"
        ],
        screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
    {
      slideNumber: 7,
      tips: ["Which fraction did you find had the most equivalent fractions?",
      "What strategies did you use to find equivalent fraction bars?",
      "Can we organize the bar models to help find a pattern?"
        ],
        screenType: SCREEN_TYPES.PORTRAIT,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
    {
      slideNumber: 8,
      tips: ["Can we use the thirds, fifths, sevenths...bars to model one-half ½?",
      "Why or why not?",
      "Could we use twentieths 1/20 or hundredths 1/100 to model ½?",
      "Why or why not?",
    ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
]


export const ACTIVITY = {
    ID: "bar_equivalence",
    TITLE : "Bar Model Equivalence",
    SCREEN_TYPE: SCREEN_TYPES.PORTRAIT,
    ICON: ICON,
    TIME: 45,
    PAGES: 4,
    TOOL: "/placingnumbers",
    SCRIPT: "FRACTION_BARS",
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
    PDF: "/pdfs/slides/BarEquivalence.pdf",
    ORGANIZER: "pdfs/organizers/BarEquivalenceOrganizer.pdf",
    STUDENT_LINKS: [{title: 'Tool',link: '/fractionbars'}]
  }


  /*

[
        ["Follow the prompt."],
        [
        "Tool",
        "What you can do with this tool?",
        "How much of the ‘whole’ square is left after all your cuts?",
        "What part of the ‘whole’ square is this piece…?",
        "How can this tool help us learn about fractions?",
        ],
        ["Follow the prompt"],
        [
          "Use the cutting tool to show JiJi how to cut the pizza for two friends",
          "How do you know the pieces are fair shares?",
          "How many different ways can you find to make 2 equal shares?"
        ],
        [
          "How do you know these pieces are fair shares?",
          "What do we call these equal shares?",
          "Record the different ways we cut the pizza into halves on your paper."
        ],
        ["tipOne","tipTwo"],
        [
          "Use the cutting tool to show JiJi how to cut the pizza for 4 friends.",
          "How do you know the pieces are fair shares?",
          "How many different ways can you find to make 4 equal shares?"],
        [
          "How do you know these pieces are fair shares?",
          "What do we call these equal shares? (fourths)",
          "Record the different ways we cut the pizza into fourths on your paper."
        ],
        ["Follow Prompt"],
        ["Use the cutting tool to show JiJi how to cut the pizza for 8 friends.",
        "How do you know the pieces are fair shares?",
        "How many different ways can you find to make 8 equal shares?",
        ],
        [
          "How do you know these pieces are fair shares?",
          "What do we call these equal shares? (eighths)",
          "Record the different ways we cut the pizza into eighths on your paper."],
        ["Follow the prompt"],
        [
          "What patterns do you see?",
          "What happens to the size of each piece with more cuts?",
          "Record the unit fractions in order from least to greatest.",
          "If 8 > 2, why is 1/8 < 1/2?"
        ],
        [
          "Are these fourths? Why or why not?",
          "Use your cutting tool to figure out how much of the whole each piece represents.",
          "Record your solution on your paper."
        ],
    ],

  */