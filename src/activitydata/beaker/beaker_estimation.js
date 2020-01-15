
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/BeakerEstimationIcon.png'

const sequence = 
    [{
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["Follow the prompt."],
      puzzle: "ACTIVITY_ONE"
    },
    {
      tips: ["Follow the prompt."],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "ACTIVITY_ONE"
    },
    {
      tips: ["Follow the prompt."],
      screenType: SCREEN_TYPES.PORTRAIT,
      puzzle: "ACTIVITY_ONE_TEACHER"
    },
    {
      tips: ["Follow the prompt."],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "ACTIVITY_ONE"
    },
    {
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["Follow the prompt."],
      puzzle: "ACTIVITY_ONE"
    },
    {
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["Follow the prompt."],
      puzzle: "ACTIVITY_ONE"
    },
    {
      screenType: SCREEN_TYPES.PORTRAIT,
      tips: ["Follow the prompt."],
      puzzle: "ACTIVITY_TWO_TEACHER"
    },
  ]


export const ACTIVITY = {
    ID: "beaker_estimation",
    TITLE : "Beaker Estimation",
    SCREEN_TYPE: SCREEN_TYPES.PORTRAIT,
    ICON: ICON,
    TIME: 30,
    PAGES: 4,
    TOOL: "/placingnumbers",
    SCRIPT: "BEAKER_ESTIMATION",
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
    PDF: "/pdfs/BeakerEstimation.pdf",
    STUDENT_LINKS: [{title: 'Game',link: '/estimation-game-one'}]
  }
