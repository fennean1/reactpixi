
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/PizzaIcon.png'

const sequence = 
    [{
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["Follow the prompt."],
    },
    {
      tips: ["Follow the prompt."],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      tips: ["Follow the prompt."],
      screenType: SCREEN_TYPES.PORTRAIT,
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
    },
    {
      tips: ["Follow the prompt."],
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      tips: ["Follow the prompt."],
      screenType: SCREEN_TYPES.PORTRAIT,
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
      screenType: SCREEN_TYPES.PORTRAIT,
    },
    {
      tips: ["Follow the prompt."],
      screenType: SCREEN_TYPES.FULL_PROMPT,
    }]



export const ACTIVITY = {
    ID: "open_number_line",
    TITLE : "Open Number Lines",
    SCREEN_TYPE: SCREEN_TYPES.PANORAMIC,
    ICON: ICON,
    TIME: 30,
    PAGES: 11,
    TOOL: "/fractionnumberline",
    SCRIPT: "FRACTION_NUMBER_LINE",
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
    PDF: "/pdfs/OpenNumberLines.pdf"
  }

