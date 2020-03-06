
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/PlacingFractionsIcon.png'


const sequence = 
    [{
      slideNumber: 1,
      screenType: SCREEN_TYPES.FULL_PROMPT,
      tips: ["Follow the prompt."],
      puzzle: "BUILDING_ACTIVITY_ONE"
    },
    {
      slideNumber: 2,
      tips: ["Did students notice that the fraction is hidden when it drags?",
      "Did they notice that the “1” was draggable?",
      "Did they notice that you can only show one set of blocks at a time?"
        ],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_ONE"
    },
    {
      slideNumber: 3,
      tips: ["Use the tool to hover over the line while holding a fraction.",
      "Have the students raise their hands when the fraction is close."
      ],
      screenType: SCREEN_TYPES.PANORAMIC,
      puzzle: "BUILDING_ACTIVITY_ONE"
    },
    {
      slideNumber: 4,
      tips: [
      "Draw on your own where the gauge should be.",
        ],
        screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_ONE_TEACHER"
    },
    {
      slideNumber: 5,
      tips: [
        "Draw on your own where the gauge should be.",
          ],
          screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_ONE_TEACHER"
    },
    {
      slideNumber: 6,
      tips: [""],
      screenType: SCREEN_TYPES.FULL_PROMPT,
      puzzle: "BUILDING_ACTIVITY_TWO"
    },
    {
      slideNumber: 7,
      tips: ["Model solving the problem.",
      "Then share out.",
      "Model with tool to confirm."],
      screenType: SCREEN_TYPES.PANORAMIC,
      puzzle: "BUILDING_ACTIVITY_TWO_TEACHER"
    },
]


export const ACTIVITY = {
    ID: "labeling_number_lines",
    TITLE : "Plot and Label Fractions",
    SCREEN_TYPE: SCREEN_TYPES.PANORAMIC,
    ICON: ICON,
    TIME: 45,
    PAGES: 4,
    TOOL: "/fractionnumberlinedescriptor",
    SCRIPT: "FRACTION_NUMBER_LINE_DESCRIPTOR",
    FEATURES: {blocks: true,open: true},
    MENU: ['Link One',"Link Two"],
    SEQUENCE: sequence,
    LONG_DESCRIPTION: "Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think? Here is a very long description of what is happeneing in the activity I mean it's so long don't you think?",
    INSTRUCTIONS: 'Students should...',
    STANDARD_ID: "3.NF.A.3.A",
    STANDARD_DESCRIPTION: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line.",
    TAGS: ["Place Value","Addition","First Grade"],
    LEARNING_GOAL: "goal for learning",
    PDF: "/pdfs/slides/LabelingNumberLines.pdf",
    ORGANIZER: "pdfs/organizers/LabelingNumberLinesOrganizer.pdf",
    STUDENT_LINKS: [{title: 'Tool',link: '/fractionnumberlinedescriptor'}],
    DESCRIPTION: "Students use a virtual manipulative to place fractions on a number line. They’ll make predictions and test hypothesis about where fractions are placed and why. Students will also record their thinking in a graphic organizer and use it to reflect on patterns in the data. The activity will conclude with a short knowledge check to summarize the learning outcomes.",
    OBJECTIVES: ["Place a given fraction on a number line with matching ticks.","Interpret how the location of the number 1 affects the location of a given fraction.","Given a point on a ticked number line, state the value of the fraction corresponding to that point in terms of the ticks provided."],
    OVERVIEW: [{anchor: "Play",slides: [1,4], description: ['Bullet One','Bullet Two','Bullet Three']},
    {anchor: "Discuss",slides: [5,6],description: ['Bullet One','Bullet Two','Bullet Three']}]
  }
