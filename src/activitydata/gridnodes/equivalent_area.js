
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/EquivalentAreaIcon.png'

const sequence = 
    [{
      slideNumber: 1,
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["Follow the prompt."],
    },
    {
      slideNumber: 2,
      tips: ["Predict if the triangles cover the same area as the rectangle. Explain.",
      "How can the tool help you prove if the two shapes are equivalent, cover the same area?",      
      "What unit fraction does each of the red shapes represent?"
    ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 3,
      tips: ["Compare your paper with your partner.",
      "Find this solution on you organizer. You will record your work like this example."
      ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 4,
      tips: ["What can we do to see if the triangles on each square are equivalent? Explain.",
      "What unit fraction does each small triangle represent? Explain",
      "What equation can we write to show both squares represent equivalent fractions?"],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 5,
      tips: [""],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 6,
      tips: ["Monitor students as they work.",
      "How can you cover ½ the square using different pieces?",
      "What have you tried? What other shapes can you try?",
      "Record two solutions in your organizer."],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 7,
      tips: ["What shapes can we use to cover ½ the square? Explain.",
      "What shapes can we use to cover ½ the square? What unit fraction do they represent?",
      "What equation can we write to represent this solution? Explain."],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 8,
      tips: ["Compare your paper with your partner.",
      "Do any of your solutions look like this example?",
      "Work together to make any changes needed."],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 9,
      tips: ["Compare your paper with your partner.",
      "Do any of your solutions look like this example?",
      "Work together to make any changes needed."],
      screenType: SCREEN_TYPES.FULL_PROMPT
    },
    {
      slideNumber: 10,
      tips: ["Create these shapes with your tool.",
      "How much of the shape is covered? Explain.",
      "Are all the shapes an equal share of the whole? Explain.",
      "How can you prove how much of the whole each piece represents?"],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
]

export const ACTIVITY = {
    ID: "equivalent_area",
    TITLE : "Equivalent Area",
    SCREEN_TYPE: SCREEN_TYPES.PORTRAIT,
    ICON: ICON,
    TIME: 45,
    PAGES: 14,
    TOOL: "/gridnodes2x2",
    SCRIPT: "NODES_GRID",
    FEATURES: {x: 10,y: 5,double: true},
    MENU: ['Link One',"Link Two"],
    SEQUENCE: sequence,
    LONG_DESCRIPTION: "Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think?",
    INSTRUCTIONS: 'Students should...',
    STANDARD_ID: "3.NF.A.3.A",
    STANDARD_DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    TAGS: ["Place Value","Addition","First Grade"],
    LEARNING_GOAL: "goal for learning",
    PDF: "/pdfs/slides/EquivalentArea.pdf",
    ORGANIZER: "/pdfs/organizers/EquivalentAreaOrganizer.pdf",
    STUDENT_LINKS: [{title: 'Tool',link: '/gridnodes4x4double'}],
    DESCRIPTION: "Students build unit fractions on a ‘whole’ square to model and prove equivalence. Students are asked to prove (or disprove) equivalent areas with visual models that look very different before being asked to model equivalent fractions using an area model (a ‘whole’ square.) Students develop visual strategies and language to prove equivalence. Students represent visual models of equivalent fractions with equations",
    OBJECTIVES: ["Understand that equivalent fractions can be represented by equal areas using different unit fractions.",
    "Model equivalent fractions for ½ and ¼.",
    "Write equations for visual models of equivalent fractions."],
    OVERVIEW: [{anchor: "Play",slides: [1,4], description: ['Bullet One','Bullet Two','Bullet Three']},
    {anchor: "Discuss",slides: [5,6],description: ['Bullet One','Bullet Two','Bullet Three']}]
  }

