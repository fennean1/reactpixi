
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/BuildingIcon.png'

const sequence = 
    [{
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["Follow the prompt."],
    },
    {
      tips: ["Follow the prompt."],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      tips: ["Follow the prompt."],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      tips: ["Follow the prompt."],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      tips: ["Follow the prompt."],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["Follow the prompt."],
      banner: "this is short text for the top"
    },
    {
      tips: ["Follow the prompt."],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      tips: ["Follow the prompt."],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      tips: ["Follow the prompt."],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
]


export const ACTIVITY = {
    ID: "building_non_unit_fractions",
    TITLE : "Building Fractions",
    SCREEN_TYPE: SCREEN_TYPES.PORTRAIT,
    ICON: ICON,
    TIME: 30,
    PAGES: 14,
    TOOL: "/gridnodes2x2",
    SCRIPT: "NODES_GRID",
    FEATURES: {x: 3,y: 3},
    MENU: ['Link One',"Link Two"],
    SEQUENCE: sequence,
    DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    LONG_DESCRIPTION: "Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think?",
    INSTRUCTIONS: 'Students should...',
    STANDARD_ID: "3.NF.A.3.A",
    STANDARD_DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    TAGS: ["Place Value","Addition","First Grade"],
    LEARNING_GOAL: "goal for learning",
    PDF: "/pdfs/BuildingNonUnitFractions.pdf",
    PRINTOUTS: "/pdfs/BuildingNonUnitFractions.pdf",
    STUDENT_LINKS: [{title: 'Tool',link: '/gridnodes2x2'}]
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