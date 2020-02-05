
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/PartitioningIcon.png'


const sequence = 
    [{
      slideNumber: 1,
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["Follow the prompt."],
      puzzle: "PARTITIONING_ACTIVITY_ONE"
    },
    {
      slideNumber: 2,
      tips: ["How are you figuring out where to put the pins?",
        "Can you use ½ to help you place the other pins?",
        "What strategies have you tried?" 
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "PARTITIONING_ACTIVITY_ONE"
    },
    {
      slideNumber: 3,
      tips: ["Compare guess/check strategy with repeated halving.",
        "How far is the first pin from zero? ¼ of the whole (0 to 1)",
        "How far are the second/third pins?",
        "What unit fraction is the number line divided into? How do you know?",
        ],
      screenType: SCREEN_TYPES.PANORAMIC,
      puzzle: "PARTITIONING_ACTIVITY_ONE_TEACHER"
    },
    {
      slideNumber: 4,
      tips: ["Record the solution on your paper",
        "Check with your partner, does their work match this example?",
        "Work together to make any corrections needed."
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "PARTITIONING_ACTIVITY_ONE_TEACHER"
    },
    {
      slideNumber: 5,
      tips: ["How are you figuring out where to put these fractions?",
        "Why should these fractions be spaced equally between 0 and 1?",
        "What is the distance from 2/n to 3/n?"
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "PARTITIONING_ACTIVITY_TWO"
    },
    {
      slideNumber: 6,
      tips: ["Compare guess/check strategy with finding ½ (3/6) then placing remaining fractions on NL.",
        "How far is the ⅚  from zero? Prove it.",
        "What is the distance between each point on the number line?"
        ],
      screenType: SCREEN_TYPES.PANORAMIC,
      puzzle: "PARTITIONING_ACTIVITY_TWO_TEACHER"
    },
    {
      slideNumber: 7,
      tips: ["Record the solution on your paper",
        "Check with your partner, does their work match this example?",
        "Work together to make any corrections needed."
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "PARTITIONING_ACTIVITY_TWO_TEACHER"
    },
    {
      slideNumber: 8,
      tips: ["What do you notice about these two number lines? Compare/Contrast",
        "Why do you think this number line shows fourths but not the other?",
        "Both number lines are divided into 4 distances, why aren’t they both fourths?"],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "PARTITIONING_ACTIVITY_TWO_TEACHER"
    },
]


export const ACTIVITY = {
    ID: "partitioning_number_lines",
    TITLE : "Partitioning Number Lines",
    SCREEN_TYPE: SCREEN_TYPES.PANORAMIC,
    ICON: ICON,
    TIME: 45,
    PAGES: 4,
    TOOL: "/placingnumbers",
    SCRIPT: "PLACING_NUMBERS",
    FEATURES: {x: 5,y: 5},
    MENU: ['Link One',"Link Two"],
    SEQUENCE: sequence,
    LONG_DESCRIPTION: "Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think?",
    INSTRUCTIONS: 'Students should...',
    STANDARD_ID: "3.NF.A.3.A",
    STANDARD_DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    TAGS: ["Place Value","Addition","First Grade"],
    LEARNING_GOAL: "goal for learning",
    PDF: "/pdfs/slides/PartitioningNumberLines.pdf",
    ORGANIZER: null,
    STUDENT_LINKS: [{title: 'Game One',link: '/numberline-partitioning-game-one'},{title: 'Game Two',link: '/numberline-partitioning-game-two'}],
    DESCRIPTION: "Students practice partitioning number lines into equal distances, then apply concepts to estimating and plotting fractions. Students plot fractions less than 1 before extending strategies for fractions greater than 1. ",
    OBJECTIVES: ["Plot fractions on a number line from 0 to 1.","Develop strategies for plotting halves, thirds, fourths, sixths and eighths."],
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