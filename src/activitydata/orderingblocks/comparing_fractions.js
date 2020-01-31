
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/ComparingFractionsIcon.png'


const sequence = 
    [{
      slideNumber: 1,
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["Follow the prompt."],
    },
    {
      slideNumber: 2,
      tips: ["Students share out for each pair, explaining their thinking.",
      "Who has a different response? How did you think about this comparison?"
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 3,
      tips: ["What surprised you after using this tool?",
        "What did the tool help you see that was hard without a visual model?",
        "What strategies do you think will work for comparing fractions if you don’t have this tool?"
        ],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 4,
      tips: ["Monitor students as they work with a partner but without using the tool.",
      "Ask students to explain their thinking to each other."
        ],
        screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 5,
      tips: ["Monitor students as they work with a partner using the tool this time.",
      "Ask students to explain to each other how the tool helps them compare fractions.",      
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 6,
      tips: ["What symbols solves this sentence?",
      "What strategy did you use?",
      "Would that strategy work if these fractions were sixths? Explain."
        ],
        screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 7,
      tips: ["What symbols solves this sentence?",
       "What strategy did you use?",
       "Would that strategy work if these fractions were ⅚ and 5/3? Explain.",
        ],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 8,
      tips: ["What strategy did you use?"],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
]


export const ACTIVITY = {
    ID: "comparing_fractions",
    TITLE : "Comparing Fractions",
    SCREEN_TYPE: SCREEN_TYPES.PORTRAIT,
    ICON: ICON,
    TIME: 45,
    PAGES: 4,
    TOOL: "/placingnumbers",
    SCRIPT: "ORDERING_BLOCKS",
    FEATURES: {numberOfBlocks: 2},
    MENU: ['Link One',"Link Two"],
    SEQUENCE: sequence,
    LONG_DESCRIPTION: "Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think?",
    INSTRUCTIONS: 'Students should...',
    STANDARD_ID: "3.NF.A.3.A",
    STANDARD_DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    TAGS: ["Place Value","Addition","First Grade"],
    LEARNING_GOAL: "goal for learning",
    PDF: "/pdfs/slides/ComparingFractions.pdf",
    ORGANIZER: null,
    STUDENT_LINKS: [{title: 'Tool',link: '/orderingblocksx2'}],
    DESCRIPTION: "Description goes here.",
    OBJECTIVES: ["students can do this","students can also do this"],
    OVERVIEW: [{anchor: "Play",slides: [1,4], description: ['Bullet One','Bullet Two','Bullet Three']},
    {anchor: "Discuss",slides: [5,6],description: ['Bullet One','Bullet Two','Bullet Three']}]
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