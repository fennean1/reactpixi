
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/DefaultIcon.png'

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
      tips: ["Describe what you can do with this tool.",
      "What can you do to a shape after building it?",
      "Who found something else you can do after building a shape?"],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 4,
      tips: ["How many fourths do you need to cover the whole?",
      "Describe your strategy for building fourths.",
      "What other shapes represent a fourth ¼ of the large square?"],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 5,
      tips: ["How do you know if the shape you made is ¼ of the large square?",
      "What other shapes represent a fourth ¼ of the large square?",
      "Record the different ways you used fourths to cover the square. See example."],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 6,
      tips: ["Check with your partner, does their work match this example?",
      "Work together to make any corrections needed."],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 7,
      tips: ["What unit fraction will we need to build 3 fourths?",
      "Describe your strategy making ¾.",
      "Is there another way to build ¾ ? Explain."],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      slideNumber: 8,
      tips: ["What unit fraction will we need to build 3 fourths?",
      "Describe your strategy making ¾.",
      "Is there another way to build ¾ ? Explain."],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    },
    {
      slideNumber: 9,
      tips: ["Check with your partner, does their work match this example?",
      "Work together to make any corrections needed."],
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
    DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    LONG_DESCRIPTION: "Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think?",
    INSTRUCTIONS: 'Students should...',
    STANDARD_ID: "3.NF.A.3.A",
    STANDARD_DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    TAGS: ["Place Value","Addition","First Grade"],
    LEARNING_GOAL: "goal for learning",
    PDF: "/pdfs/slides/EquivalentArea.pdf",
    ORGANIZER: "/pdfs/organizers/EquivalentAreaOrganizer.pdf",
    STUDENT_LINKS: [{title: 'Tool',link: '/gridnodes2x2'}]
  }

