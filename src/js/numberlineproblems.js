const WHOLE_BLOCK = {
  num: 1,
  den: 1
}

const HALF_BLOCK = {
  num: 1,
  den: 2
}

const THIRD_BLOCK = {
  num: 1,
  den: 3
}

const FOURTH_BLOCK = {
  num: 1,
  den: 4
}

const SIXTH_BLOCK = {
  num: 1,
  den: 6
}

const EIGHTH_BLOCK = {
  num: 1,
  den: 8
}

// Active Stuff

const DAY1_WARM_UP_P1 = {
  prompt: "Divide the line segment into equal lengths",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 1, 0],
  presetPinKeys: [1, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 2,
  max: 1,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 2,
  presetLabels: [],
  labels: [],
  unique: true,
  endPins: true,
  noFeedBlockLabel: true,
}

const DAY1_WARM_UP_P2 = {
  prompt: "Divide the line segment into equal lengths",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 1, 0, 1, 0],
  presetPinKeys: [1, 0, 1, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 4,
  max: 1,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 4,
  presetLabels: [],
  labels: [],
  unique: true,
  endPins: true,
  noFeedBlockLabel: true,
}

const DAY1_WARM_UP_P3 = {
  prompt: "Divide the line segment into equal lengths",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 1, 1, 1, 0],
  presetPinKeys: [1, 0, 0, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 4,
  max: 1,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 4,
  presetLabels: [],
  labels: [],
  unique: true,
  endPins: true,
  discussionQuestion: true,
  noFeedBlockLabel: true,
}

const DAY1_WARM_UP_P4 = {
  prompt: "Divide the line segment into equal lengths",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 1, 1, 0, 1, 1, 0],
  presetPinKeys: [1, 0, 0, 1, 0, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 6,
  max: 1,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 6,
  presetLabels: [],
  labels: [],
  unique: true,
  endPins: true,
  discussionQuestion: true,
  noFeedBlockLabel: true,
}

const DAY1_WARM_UP_P5 = {
  prompt: "Divide the line segment into equal lengths",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 1, 0, 1, 0, 1, 0],
  presetPinKeys: [1, 0, 1, 0, 1, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 6,
  max: 1,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 6,
  presetLabels: [],
  labels: [],
  unique: true,
  endPins: true,
  discussionQuestion: true,
  noFeedBlockLabel: true,
}

const DAY1_WARM_UP_P6 = {
  prompt: "Divide the line segment into equal lengths",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 1, 1, 0],
  presetPinKeys: [1, 0, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 3,
  max: 1,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 3,
  presetLabels: [],
  labels: [],
  unique: true,
  endPins: true,
  discussionQuestion: true,
  noFeedBlockLabel: true,
}

const DAY1_WARM_UP_P7 = {
  prompt: "Divide the line segment into equal lengths",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 1, 0, 1, 0, 1, 0],
  presetPinKeys: [1, 0, 1, 0, 1, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 6,
  max: 1,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 6,
  presetLabels: [],
  labels: [],
  unique: true,
  endPins: true,
  discussionQuestion: true,
  noFeedBlockLabel: true,
}

const DAY1_WARM_UP_P8 = {
  prompt: "Divide the line segment into equal lengths",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 1, 1, 1, 1, 1, 0],
  presetPinKeys: [1, 0, 0, 0, 0, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 6,
  max: 1,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 6,
  presetLabels: [],
  labels: [],
  unique: true,
  endPins: true,
  discussionQuestion: true,
  noFeedBlockLabel: true,
}

const DAY1_WARM_UP_P9 = {
  prompt: "Divide the line segment into equal lengths",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 1, 0, 1, 0, 1, 0, 1, 0],
  presetPinKeys: [1, 0, 1, 0, 1, 0, 1, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 8,
  max: 1,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 8,
  presetLabels: [],
  labels: [],
  unique: true,
  endPins: true,
  discussionQuestion: true,
  noFeedBlockLabel: true,
}

const DAY1_WARM_UP_P10 = {
  prompt: "Divide the line segment into equal lengths",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 1, 1, 1, 0, 1, 1, 1, 0],
  presetPinKeys: [1, 0, 0, 0, 1, 0, 0, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 8,
  max: 1,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 8,
  presetLabels: [],
  labels: [],
  unique: true,
  endPins: true,
  discussionQuestion: true,
  noFeedBlockLabel: true,
}

const DAY1_WARM_UP_P11 = {
  prompt: "Divide the line segment into equal lengths",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 1, 1, 1, 1, 1, 1, 1, 0],
  presetPinKeys: [1, 0, 0, 0, 0, 0, 0, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 8,
  max: 1,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 8,
  presetLabels: [],
  labels: [],
  unique: true,
  endPins: true,
  discussionQuestion: true,
  noFeedBlockLabel: true,
}

const DAY1_POSTWARMUP_P1 = {
  prompt: "",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0, 0, 0],
  pinWidget: false,
  numberOfTicks: 5,
  partitionsPerWhole: 4,
  max: 1,
  min: 0,
  ticksEvery: null,
  tolerance: 0.1,
  presetPinKeys: [],
  partitionsPerLine: 4,
  presetLabels: [
    [0, 1],
    [1, 1]
  ],
  labels: [
    [3, 4],
    [2, 4]
  ],
  unique: true,
  endPins: true,
}

const DAY1_POSTWARMUP_P2 = {
  prompt: "Go!",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0, 0, 0, 0, 0],
  pinWidget: false,
  numberOfTicks: 7,
  partitionsPerWhole: 6,
  max: 1,
  min: 0,
  ticksEvery: null,
  tolerance: 0.1,
  presetPinKeys: [],
  partitionsPerLine: 6,
  presetLabels: [
    [0, 1],
    [1, 1]
  ],
  labels: [
    [2, 6],
    [5, 6],
    [4, 6]
  ],
  unique: true,
  endPins: true,
  discussionQuestion: true
}

const DAY1_CLASSWORK_NEW_1_T = {
  prompt: "Place the fractions on the number line. Use the pins and bar models to accurately find the point for each fraction.",
  blocks: [],
  indexOfMarkedBlock: null, // DON'T KNOW THAT THIS IS OR WAS SUPPOSED TO BE FOR
  pinKeys: [0, 0, 1, 1, 1, 1, 0],
  presetPinKeys: [1, 0, 0, 1, 0, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 3,
  max: 2,
  min: 0,
  ticks: null,
  tolerance: 0.1,
  partitionsPerLine: 6,
  presetLabels: [
    [0, 1],
    [1, 1],
    [2, 1]
  ],
  labels: [
    [1, 3],
    [5, 3]
  ],
  unique: true,
  endPins: true,
}

const DAY1_CLASSWORK_NEW_2 = {
  prompt: "Place the fractions on the number line. Use the pins and bar models to accurately find the point for each fraction.",
  blocks: [],
  indexOfMarkedBlock: null, // DON'T KNOW THAT THIS IS OR WAS SUPPOSED TO BE FOR
  pinKeys: [0, 0, 0, 1, 1, 1, 1, 1, 1],
  presetPinKeys: [1, 0, 0, 0, 1, 0, 0, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 4,
  max: 2,
  min: 0,
  ticks: null,
  tolerance: 0.1,
  partitionsPerLine: 8,
  presetLabels: [
    [0, 1],
    [1, 1],
    [2, 1]
  ],
  labels: [
    [1, 4],
    [5, 4],
    [7, 4]
  ],
  unique: true,
  endPins: true,
}

const DAY1_CLASSWORK_P1 = {
  prompt: "Place the fractions on the number line. Use the pins and bar models to accurately find the point for each fraction.",
  blocks: [],
  indexOfMarkedBlock: null, // DON'T KNOW THAT THIS IS OR WAS SUPPOSED TO BE FOR
  pinKeys: [0, 0, 0],
  presetPinKeys: [1, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 2,
  max: 1,
  min: 0,
  ticks: null,
  tolerance: 0.1,
  partitionsPerLine: 2,
  presetLabels: [
    [0, 1],
    [1, 1]
  ],
  labels: [
    [1, 2]
  ],
  unique: true,
  endPins: true,
  dontScorePins: true,
}

const DAY1_CLASSWORK_P2 = {
  prompt: "Place the fractions on the number line. Use the pins and bar models to accurately find the point for each fraction.",
  blocks: [],
  indexOfMarkedBlock: null, // DON'T KNOW THAT THIS IS OR WAS SUPPOSED TO BE FOR
  pinKeys: [0, 1, 1, 1, 0],
  presetPinKeys: [1, 0, 0, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 4,
  max: 1,
  min: 0,
  ticks: null,
  tolerance: 0.1,
  partitionsPerLine: 4,
  presetLabels: [
    [0, 1],
    [1, 1]
  ],
  labels: [
    [3, 4],
    [1, 4]
  ],
  unique: true,
  endPins: true,
  discussionQuestion: true,
  dontScorePins: true
}

const DAY1_CLASSWORK_P3 = {
  prompt: "Place the fractions on the number line. Use the pins and bar models to accurately find the point for each fraction.",
  blocks: [],
  indexOfMarkedBlock: null, // DON'T KNOW THAT THIS IS OR WAS SUPPOSED TO BE FOR
  pinKeys: [0, 1, 1, 0],
  presetPinKeys: [1, 0, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 3,
  max: 1,
  min: 0,
  ticks: null,
  tolerance: 0.1,
  partitionsPerLine: 3,
  presetLabels: [
    [0, 1],
    [1, 1]
  ],
  labels: [
    [2, 3]
  ],
  unique: true,
  endPins: true,
  //dontScorePins: true, // If there is a pin widget we don't score the pins by default
}

const DAY1_CLASSWORK_P4 = {
  prompt: "Place the fractions on the number line. Use the pins and bar models to accurately find the point for each fraction.",
  blocks: [],
  indexOfMarkedBlock: null, // DON'T KNOW THAT THIS IS OR WAS SUPPOSED TO BE FOR
  pinKeys: [0, 1, 1, 1, 1, 1, 0],
  presetPinKeys: [1, 0, 0, 0, 0, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 6,
  max: 1,
  min: 0,
  ticks: null,
  tolerance: 0.1,
  partitionsPerLine: 6,
  presetLabels: [
    [0, 1],
    [1, 1]
  ],
  labels: [
    [4, 6],
    [2, 6]
  ],
  unique: true,
  endPins: true,
}


const DAY1_CLASSWORK_P5 = {
  prompt: "Place the fractions on the number line. Use the pins and bar models to accurately find the point for each fraction.",
  blocks: [HALF_BLOCK, FOURTH_BLOCK, EIGHTH_BLOCK],
  indexOfMarkedBlock: null, // DON'T KNOW THAT THIS IS OR WAS SUPPOSED TO BE FOR
  pinKeys: [0, 0, 0, 0, 0],
  presetPinKeys: [1, 0, 0, 0, 1],
  pinWidget: true,
  partitionsPerWhole: 4,
  max: 1,
  min: 0,
  ticks: null,
  tolerance: 0.1,
  partitionsPerLine: 4,
  presetLabels: [
    [0, 1],
    [1, 1]
  ],
  labels: [
    [3, 4]
  ],
  unique: true,
  endPins: true,
  dontScorePins: true,
  discussionQuestion: true
}

const DAY1_CLASSWORK_NEW2_1 = {
  prompt: "Place the fractions on the number line. Use the pins and bar models to accurately find the point for each fraction.",
  blocks: [HALF_BLOCK, FOURTH_BLOCK, EIGHTH_BLOCK],
  indexOfMarkedBlock: null, // DON'T KNOW THAT THIS IS OR WAS SUPPOSED TO BE FOR
  pinKeys: [0, 0, 0, 0, 0],
  presetPinKeys: [1, 0, 1, 0, 1],
  pinWidget: true,
  partitionsPerWhole: 2,
  max: 2,
  min: 0,
  ticks: null,
  tolerance: 0.1,
  partitionsPerLine: 4,
  presetLabels: [
    [0, 1],
    [1, 1],
    [2, 1]
  ],
  labels: [
    [1, 2],
    [3, 2],
  ],
  unique: true,
  endPins: true,
  dontScorePins: true,
  discussionQuestion: true
}

const DAY1_CLASSWORK_NEW2_2_T = {
  prompt: "Place the fractions on the number line. Use the pins and bar models to accurately find the point for each fraction.",
  blocks: [HALF_BLOCK, THIRD_BLOCK, SIXTH_BLOCK],
  indexOfMarkedBlock: null, // DON'T KNOW THAT THIS IS OR WAS SUPPOSED TO BE FOR
  pinKeys: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  presetPinKeys: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  pinWidget: true,
  partitionsPerWhole: 6,
  max: 2,
  min: 0,
  ticks: null,
  tolerance: 0.25,
  partitionsPerLine: 12,
  presetLabels: [
    [0, 1],
    [1, 1],
    [2, 1]
  ],
  labels: [
    [4, 6],
    [7, 6],
    [9, 6],
  ],
  unique: true,
  endPins: true,
  dontScorePins: true,
  discussionQuestion: true
}



const DAY1_CLASSWORK_P6 = {
  prompt: "Place the fractions on the number line. Use the pins and bar models to accurately find the point for each fraction.",
  blocks: [HALF_BLOCK, THIRD_BLOCK, SIXTH_BLOCK],
  indexOfMarkedBlock: null, // DON'T KNOW THAT THIS IS OR WAS SUPPOSED TO BE FOR
  pinKeys: [0, 0, 0, 0, 0, 0, 0],
  presetPinKeys: [1, 0, 0, 0, 0, 0, 1],
  pinWidget: true,
  partitionsPerWhole: 6,
  max: 1,
  min: 0,
  ticks: null,
  tolerance: 0.15,
  partitionsPerLine: 6,
  presetLabels: [
    [0, 1],
    [1, 1]
  ],
  labels: [
    [4, 6],
    [2, 6],
    [5, 6]
  ],
  unique: true,
  endPins: true,
  dontScorePins: true,
  discussionQuestion: true
}


const DAY1_CLASSWORK_P7 = {
  prompt: "Place the fractions on the number line. Use the pins and bar models to accurately find the point for each fraction.",
  blocks: [HALF_BLOCK, FOURTH_BLOCK, EIGHTH_BLOCK],
  indexOfMarkedBlock: null, // DON'T KNOW THAT THIS IS OR WAS SUPPOSED TO BE FOR
  pinKeys: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  presetPinKeys: [1, 0, 0, 0, 0, 0, 0, 0, 1],
  pinWidget: true,
  partitionsPerWhole: 8,
  max: 1,
  min: 0,
  ticks: null,
  tolerance: 0.18,
  partitionsPerLine: 8,
  presetLabels: [
    [0, 1],
    [1, 1]
  ],
  labels: [
    [4, 8],
    [3, 8],
    [7, 8]
  ],
  unique: true,
  endPins: true,
  dontScorePins: true,
  discussionQuestion: true
}

const DAY2_CLASSWORK_P1 = {
  prompt: "Use the measuring tools to place and label the tick-marks with the given fractions.",
  blocks: [HALF_BLOCK, THIRD_BLOCK, FOURTH_BLOCK, SIXTH_BLOCK],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0, 0, 0],
  presetPinKeys: [0, 0, 0, 0, 0],
  pinWidget: false,
  partitionsPerWhole: 2,
  max: 2,
  min: 0,
  ticksEvery: null,
  tolerance: 0.15,
  partitionsPerLine: 4,
  presetLabels: [
    [0, 1]
  ],
  labels: [
    [3, 2],
    [2, 1],
    [1, 1],
    [1, 2]
  ],
  unique: false,
  endPins: true,
  dontScorePins: true
}


const DAY2_CLASSWORK_P2 = {
  prompt: "Use the measuring tools to place and label the tick-marks with the given fractions.",
  blocks: [HALF_BLOCK, THIRD_BLOCK, FOURTH_BLOCK],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0, 0, 0, 0, 0, 0],
  presetPinKeys: [0, 0, 0, 0, 0, 0, 0, 0],
  pinWidget: false,
  partitionsPerWhole: 4,
  max: 7 / 4,
  min: 0,
  ticksEvery: null,
  tolerance: 0.15,
  partitionsPerLine: 7,
  presetLabels: [
    [0, 1]
  ],
  labels: [
    [5, 4],
    [6, 4],
    [3, 4],
    [7, 4],
    [2, 4]
  ],
  unique: false,
  endPins: true,
  dontScorePins: true,
  discussionQuestion: true,
}

const DAY2_CLASSWORK_P3 = {
  prompt: "Use the measuring tools to place and label the tick-marks with the given fractions.",
  blocks: [HALF_BLOCK, THIRD_BLOCK, FOURTH_BLOCK, SIXTH_BLOCK],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0, 0, 0, 0, 0],
  presetPinKeys: [0, 0, 0, 0, 0, 0, 0],
  pinWidget: false,
  partitionsPerWhole: 3,
  max: 2,
  min: 0,
  ticksEvery: null,
  tolerance: 0.15,
  partitionsPerLine: 6,
  presetLabels: [
    [0, 1]
  ],
  labels: [
    [2, 1],
    [2, 3],
    [4, 3],
    [5, 3]
  ],
  unique: false,
  endPins: true,
  dontScorePins: true
}

const DAY2_CLASSWORK_P4 = {
  prompt: "Use the pins to create equal parts and then label them",
  blocks: [HALF_BLOCK, THIRD_BLOCK, FOURTH_BLOCK, SIXTH_BLOCK],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  presetPinKeys: [0, 0, 0, 0, 0],
  pinWidget: false,
  partitionsPerWhole: 6,
  max: 9 / 6,
  min: 0,
  ticksEvery: null,
  tolerance: 0.15,
  partitionsPerLine: 9,
  presetLabels: [
    [0, 1]
  ],
  labels: [
    [9, 6],
    [2, 6],
    [4, 6],
    [5, 6],
    [7, 6]
  ],
  unique: false,
  endPins: true,
  dontScorePins: true,
  discussionQuestion: true,
}

const DAY3_CLASSWORK_P1 = {
  prompt: "Plot these fractions on the number line.",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0, 0, 0],
  pinWidget: false,
  numberOfTicks: 9,
  partitionsPerWhole: 2,
  max: 2,
  min: 0,
  ticksEvery: null,
  tolerance: 0.1,
  presetPinKeys: [],
  partitionsPerLine: 4,
  presetLabels: [
    [0, 1],
    [1, 1],
    [2, 1]
  ],
  labels: [
    [3, 2],
    [1, 2]
  ],
  unique: true,
  endPins: true,
}

const DAY3_CLASSWORK_P2 = {
  prompt: "Plot these fractions on the number line.",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  pinWidget: false,
  numberOfTicks: 5,
  partitionsPerWhole: 4,
  max: 2,
  min: 0,
  ticksEvery: null,
  tolerance: 0.1,
  presetPinKeys: [],
  partitionsPerLine: 8,
  presetLabels: [
    [0, 1],
    [1, 1],
    [2, 1]
  ],
  labels: [
    [3, 4],
    [7, 4],
    [5, 4]
  ],
  unique: true,
  endPins: true,
  discussionQuestion: true
}


const DAY3_CLASSWORK_P3 = {
  prompt: "Plot these fractions on the number line.",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0, 0, 0, 0, 0],
  pinWidget: false,
  numberOfTicks: 13,
  partitionsPerWhole: 3,
  max: 2,
  min: 0,
  ticksEvery: null,
  tolerance: 0.1,
  presetPinKeys: [],
  partitionsPerLine: 6,
  presetLabels: [
    [0, 1],
    [1, 1],
    [2, 1]
  ],
  labels: [
    [2, 3],
    [5, 3]
  ],
  unique: true,
  endPins: true,
}

const DAY3_CLASSWORK_P4 = {
  prompt: "Plot these fractions on the number line.",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  pinWidget: false,
  numberOfTicks: 8,
  partitionsPerWhole: 6,
  max: 7 / 3,
  min: 0,
  ticksEvery: null,
  tolerance: 0.1,
  presetPinKeys: [],
  partitionsPerLine: 14,
  presetLabels: [
    [0, 1],
    [1, 1],
    [2, 1]
  ],
  labels: [
    [7, 6],
    [5, 6],
    [3, 6],
    [2, 6]
  ],
  unique: true,
  endPins: true,
  discussionQuestion: true
}


const DAY3_CLASSWORK_P5 = {
  prompt: "Plot these fractions on the number line.",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  pinWidget: false,
  numberOfTicks: 9,
  partitionsPerWhole: 8,
  max: 2,
  min: 0,
  ticksEvery: null,
  tolerance: 0.1,
  presetPinKeys: [],
  partitionsPerLine: 16,
  presetLabels: [
    [0, 1],
    [1, 1],
    [2, 1]
  ],
  labels: [
    [1, 8],
    [7, 8],
    [15, 8],
    [9, 8]
  ],
  unique: true,
  endPins: true,
}


const DAY3_CLASSWORK_TWO_P1 = {
  prompt: "Plot these fractions on the number line.",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0, 0, 0],
  pinWidget: false,
  numberOfTicks: 9,
  partitionsPerWhole: 2,
  max: 2,
  min: 0,
  ticksEvery: null,
  tolerance: 0.1,
  presetPinKeys: [],
  partitionsPerLine: 4,
  presetLabels: [
    [0, 1],
    [1, 1],
    [2, 1]
  ],
  labels: [
    [3, 2],
    [1, 2]
  ],
  unique: true,
  endPins: true,
}

const DAY3_CLASSWORK_TWO_P2 = {
  prompt: "Plot these fractions on the number line.",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  pinWidget: false,
  numberOfTicks: 5,
  partitionsPerWhole: 4,
  max: 2,
  min: 0,
  ticksEvery: null,
  tolerance: 0.1,
  presetPinKeys: [],
  partitionsPerLine: 8,
  presetLabels: [
    [0, 1],
    [1, 1],
    [2, 1]
  ],
  labels: [
    [3, 4],
    [7, 4],
    [5, 4]
  ],
  unique: true,
  endPins: true,
  discussionQuestion: true
}


const DAY3_CLASSWORK_TWO_P3 = {
  prompt: "Plot these fractions on the number line.",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0, 0, 0, 0, 0],
  pinWidget: false,
  numberOfTicks: 13,
  partitionsPerWhole: 3,
  max: 2,
  min: 0,
  ticksEvery: null,
  tolerance: 0.1,
  presetPinKeys: [],
  partitionsPerLine: 6,
  presetLabels: [
    [0, 1],
    [1, 1],
    [2, 1]
  ],
  labels: [
    [2, 3],
    [5, 3]
  ],
  unique: true,
  endPins: true,
}

const DAY3_CLASSWORK_TWO_P4 = {
  prompt: "Plot these fractions on the number line.",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  pinWidget: false,
  numberOfTicks: 8,
  partitionsPerWhole: 6,
  max: 7 / 3,
  min: 0,
  ticksEvery: null,
  tolerance: 0.1,
  presetPinKeys: [],
  partitionsPerLine: 14,
  presetLabels: [
    [0, 1],
    [1, 1],
    [2, 1]
  ],
  labels: [
    [7, 6],
    [5, 6],
    [3, 6],
    [2, 6]
  ],
  unique: true,
  endPins: true,
  discussionQuestion: true
}


const DAY3_CLASSWORK_TWO_P5 = {
  prompt: "Plot these fractions on the number line.",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  pinWidget: false,
  numberOfTicks: 9,
  partitionsPerWhole: 8,
  max: 2,
  min: 0,
  ticksEvery: null,
  tolerance: 0.1,
  presetPinKeys: [],
  partitionsPerLine: 16,
  presetLabels: [
    [0, 1],
    [1, 1],
    [2, 1]
  ],
  labels: [
    [1, 8],
    [7, 8],
    [15, 8],
    [9, 8]
  ],
  unique: true,
  endPins: true,
}



const DAY4_CLASSWORK_P1 = {
  prompt: "Space pins evenly and then label them",
  blocks: [HALF_BLOCK, FOURTH_BLOCK, EIGHTH_BLOCK],
  indexOfMarkedBlock: null,
  pinKeys: [0, 1, 1, 1, 0],
  presetPinKeys: [1, 0, 0, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 4,
  max: 1,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 4,
  presetLabels: [
    [0, 1],
    [1, 1]
  ],
  labels: [
    [1, 2]
  ],
  unique: true,
}

const DAY4_CLASSWORK_P2 = {
  prompt: "Go!",
  blocks: [THIRD_BLOCK, SIXTH_BLOCK],
  indexOfMarkedBlock: null,
  pinKeys: [0, 1, 1, 0],
  presetPinKeys: [1, 0, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 3,
  max: 1,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 3,
  presetLabels: [
    [0, 1],
    [1, 1]
  ],
  labels: [
    [2, 3]
  ],
  unique: true,
}

const DAY4_CLASSWORK_P3 = {
  prompt: "Go!",
  blocks: [WHOLE_BLOCK, HALF_BLOCK, FOURTH_BLOCK],
  indexOfMarkedBlock: null,
  pinKeys: [0, 1, 1, 1, 1, 1, 1, 1, 0],
  presetPinKeys: [1, 0, 0, 0, 0, 0, 0, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 4,
  max: 2,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 8,
  presetLabels: [
    [0, 1],
    [2, 1]
  ],
  labels: [
    [1, 1],
    [3, 2],
    [1, 2]
  ],
  unique: true,
  dontReset: true
}

const DAY4_CLASSWORK_P4 = {
  prompt: "Go!",
  blocks: [THIRD_BLOCK, SIXTH_BLOCK],
  indexOfMarkedBlock: null,
  pinKeys: [0, 1, 1, 1, 1, 1, 0],
  presetPinKeys: [1, 0, 0, 0, 0, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 3,
  max: 2,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 6,
  presetLabels: [
    [0, 1],
    [2, 1]
  ],
  labels: [
    [1, 3],
    [4, 3],
    [3, 3]
  ],
  unique: true,
}

const DAY4_CLASSWORK_P5 = {
  prompt: "Go!",
  blocks: [THIRD_BLOCK, EIGHTH_BLOCK],
  indexOfMarkedBlock: null,
  pinKeys: [0, 1, 1, 1, 1, 1, 1, 1, 0],
  presetPinKeys: [1, 0, 0, 0, 0, 0, 0, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 3,
  max: 1,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 8,
  presetLabels: [
    [0, 1],
    [1, 1]
  ],
  labels: [
    [1, 3],
    [4, 3],
    [3, 3]
  ],
  unique: true,
}


const DAY_ONE_WARM_UP = [DAY1_WARM_UP_P1, DAY1_WARM_UP_P2, DAY1_WARM_UP_P3, DAY1_WARM_UP_P4, DAY1_WARM_UP_P5, DAY1_WARM_UP_P6, DAY1_WARM_UP_P7, DAY1_WARM_UP_P8, DAY1_WARM_UP_P9, DAY1_WARM_UP_P10, DAY1_WARM_UP_P11]

const DAY_ONE_TEACHER_WARM_UP = [DAY1_WARM_UP_P3]

const DAY_ONE_CLASSWORK = [DAY1_CLASSWORK_P1, DAY1_CLASSWORK_P2, DAY1_CLASSWORK_P3, DAY1_CLASSWORK_NEW_1_T, DAY1_CLASSWORK_P4, DAY1_CLASSWORK_NEW_2]

const DAY_ONE_TEACHER_CLASSWORK = [DAY1_CLASSWORK_P2, DAY1_CLASSWORK_NEW_1_T]

const DAY_ONE_CLASSWORK_2 = [DAY1_CLASSWORK_P5, DAY1_CLASSWORK_P6, DAY1_CLASSWORK_NEW2_1, DAY1_CLASSWORK_P7, DAY1_CLASSWORK_NEW2_2_T]

const DAY_ONE_TEACHER_CLASSWORK_2 = [DAY1_CLASSWORK_P6, DAY1_CLASSWORK_NEW2_2_T]

const DAY_TWO_CLASSWORK = [DAY2_CLASSWORK_P1, DAY2_CLASSWORK_P2, DAY2_CLASSWORK_P3, DAY2_CLASSWORK_P4]

const DAY_TWO_TEACHER_CLASSWORK = [DAY2_CLASSWORK_P4]

const DAY_THREE_CLASSWORK = [DAY3_CLASSWORK_P1, DAY3_CLASSWORK_P2, DAY3_CLASSWORK_P3, DAY3_CLASSWORK_P4, DAY3_CLASSWORK_P5]

const DAY_THREE_TEACHER_CLASSWORK = [DAY3_CLASSWORK_P3]

const DAY_THREE_CLASSWORK_TWO = [DAY3_CLASSWORK_TWO_P1, DAY3_CLASSWORK_TWO_P2, DAY3_CLASSWORK_TWO_P3, DAY3_CLASSWORK_TWO_P4, DAY3_CLASSWORK_TWO_P5]

const DAY_THREE_TEACHER_CLASSWORK_TWO = [DAY3_CLASSWORK_TWO_P3]

/// Fractions unit 2.0

// PLACING

const PLACING_FOURTHS = {
  prompt: "Place the fractions on the number line. Use the pins and bar models to accurately find the point for each fraction.",
  blocks: [],
  indexOfMarkedBlock: null, // DON'T KNOW THAT THIS IS OR WAS SUPPOSED TO BE FOR
  pinKeys: [0, 0, 0, 0, 0],
  presetPinKeys: [1, 0, 0, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 4,
  max: 1,
  min: 0,
  ticks: null,
  tolerance: 0.1,
  partitionsPerLine: 4,
  presetLabels: [
    [0, 1],
    [1, 1]
  ],
  labels: [
    [3, 4],
    [2, 4],
    [1, 4]
  ],
  unique: true,
  endPins: true,
  discussionQuestion: true,
  dontScorePins: true
}

const PLACING_HALVES = {
  prompt: "Place the fractions on the number line. Use the pins and bar models to accurately find the point for each fraction.",
  blocks: [],
  indexOfMarkedBlock: null, // DON'T KNOW THAT THIS IS OR WAS SUPPOSED TO BE FOR
  pinKeys: [0, 0, 0],
  presetPinKeys: [1, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 2,
  max: 1,
  min: 0,
  ticks: null,
  tolerance: 0.1,
  partitionsPerLine: 2,
  presetLabels: [
    [0, 1],
    [1, 1]
  ],
  labels: [
    [1, 2],
  ],
  unique: true,
  endPins: true,
  discussionQuestion: true,
  dontScorePins: true
}


const PLACING_THIRDS = {
  prompt: "Place the fractions on the number line. Use the pins and bar models to accurately find the point for each fraction.",
  blocks: [],
  indexOfMarkedBlock: null, // DON'T KNOW THAT THIS IS OR WAS SUPPOSED TO BE FOR
  pinKeys: [0,0,0,0],
  presetPinKeys: [1, 0, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 3,
  max: 1,
  min: 0,
  ticks: null,
  tolerance: 0.1,
  partitionsPerLine: 3,
  presetLabels: [
    [0, 1],
    [1, 1]
  ],
  labels: [
    [1, 3],
    [2,3],
  ],
  unique: true,
  endPins: true,
  discussionQuestion: true,
  dontScorePins: true
}

const PLACING_SIXTHS = {
  prompt: "Divide the line segment into equal lengths",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0,0,0,0,0,0,0],
  presetPinKeys: [1,0,0,0,0,0,1],
  pinWidget: false,
  partitionsPerWhole: 6,
  max: 1,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 6,
  presetLabels: [
    [0, 1],
    [1, 1]
  ],
  labels: [
    [1,6],
    [2,6],
    [3,6],
    [4,6],
    [5,6],
  ],
  unique: true,
  endPins: true,
  discussionQuestion: true,
  dontScorePins: true,
}

// PARTITIONING

const PARTITIONING_HALVES = {
  prompt: "Divide the line segment into equal lengths",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 1, 0],
  presetPinKeys: [1, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 2,
  max: 1,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 2,
  presetLabels: [],
  labels: [],
  unique: true,
  endPins: true,
  discussionQuestion: true,
  noFeedBlockLabel: true,
}

const PARTITIONING_FOURTHS = {
  prompt: "Divide the line segment into equal lengths",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 1, 1, 1, 0],
  presetPinKeys: [1, 0, 0, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 4,
  max: 1,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 4,
  presetLabels: [],
  labels: [],
  unique: true,
  endPins: true,
  discussionQuestion: true,
  noFeedBlockLabel: true,
}

const PARTITIONING_FOURTHS_WITH_PIN = {
  prompt: "Divide the line segment into equal lengths",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 1, 0, 1, 0],
  presetPinKeys: [1, 0, 1, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 4,
  max: 1,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 4,
  presetLabels: [],
  labels: [],
  unique: true,
  endPins: true,
  discussionQuestion: true,
  noFeedBlockLabel: true,
}

const PARTITIONING_THIRDS = {
  prompt: "Divide the line segment into equal lengths",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0, 1 ,1, 0],
  presetPinKeys: [1, 0, 0, 1],
  pinWidget: false,
  partitionsPerWhole: 3,
  max: 1,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 3,
  presetLabels: [],
  labels: [],
  unique: true,
  endPins: true,
  discussionQuestion: true,
  noFeedBlockLabel: true,
}

const PARTITIONING_SIXTHS = {
  prompt: "Divide the line segment into equal lengths",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0,1,1,1,1,1,0],
  presetPinKeys: [1, 0,0,0,0,0, 1],
  pinWidget: false,
  partitionsPerWhole: 6,
  max: 1,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 6,
  presetLabels: [],
  labels: [],
  unique: true,
  endPins: true,
  discussionQuestion: true,
  noFeedBlockLabel: true,
}

const PARTITIONING_SIXTHS_WITH_PIN = {
  prompt: "Divide the line segment into equal lengths",
  blocks: [],
  indexOfMarkedBlock: null,
  pinKeys: [0,1,1,0,1,1, 0],
  presetPinKeys: [1,0,0,1,0,0,1],
  pinWidget: false,
  partitionsPerWhole: 6,
  max: 1,
  min: 0,
  tolerance: 0.1,
  partitionsPerLine: 6,
  presetLabels: [],
  labels: [],
  unique: true,
  endPins: true,
  discussionQuestion: true,
  noFeedBlockLabel: true,
}


// Building Number Lines 

const BUILDING_HALVES = {
  prompt: "Use the measuring tools to place and label the tick-marks with the given fractions.",
  blocks: [HALF_BLOCK, FOURTH_BLOCK],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0],
  presetPinKeys: [0, 0, 0],
  pinWidget: false,
  partitionsPerWhole: 2,
  max: 2,
  min: 0,
  ticksEvery: null,
  tolerance: 0.15,
  partitionsPerLine: 2,
  presetLabels: [
    [0, 1]
  ],
  labels: [
    [1, 1],
    [1,2]
  ],
  unique: false,
  endPins: true,
  dontScorePins: true,
  discussionQuestion: true,
}

const BUILDING_FOURTHS = {
  prompt: "Use the measuring tools to place and label the tick-marks with the given fractions.",
  blocks: [HALF_BLOCK, FOURTH_BLOCK],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0, 0, 0],
  presetPinKeys: [0, 0, 0, 0, 0],
  pinWidget: false,
  partitionsPerWhole: 4,
  max: 2,
  min: 0,
  ticksEvery: null,
  tolerance: 0.15,
  partitionsPerLine: 4,
  presetLabels: [
    [0, 1]
  ],
  labels: [
    [1, 1],
    [2,4],
    [3,4],
    [1,4]
  ],
  unique: false,
  endPins: true,
  dontScorePins: true,
  discussionQuestion: true,
}

const BUILDING_THIRDS = {
  prompt: "Use the measuring tools to place and label the tick-marks with the given fractions.",
  blocks: [HALF_BLOCK, FOURTH_BLOCK],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0,0],
  presetPinKeys: [0, 0, 0,0],
  pinWidget: false,
  partitionsPerWhole: 3,
  max: 2,
  min: 0,
  ticksEvery: null,
  tolerance: 0.15,
  partitionsPerLine: 3,
  presetLabels: [
    [0, 1]
  ],
  labels: [
    [1, 1],
    [1,3],
    [2,3] 
   ],
  unique: false,
  endPins: true,
  dontScorePins: true,
  discussionQuestion: true,
}


const BUILDING_SIXTHS = {
  prompt: "Use the measuring tools to place and label the tick-marks with the given fractions.",
  blocks: [HALF_BLOCK, FOURTH_BLOCK],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0,0,0,0,0],
  presetPinKeys: [0, 0, 0,0,0,0],
  pinWidget: false,
  partitionsPerWhole: 6,
  max: 2,
  min: 0,
  ticksEvery: null,
  tolerance: 0.15,
  partitionsPerLine: 6,
  presetLabels: [
    [0, 1]
  ],
  labels: [
    [1, 1],
    [2,6],
    [1, 6],
    [5,6],
    [4, 6],
  ],
  unique: false,
  endPins: true,
  dontScorePins: true,
  discussionQuestion: true,
}

// Over One


const BUILDING_HALVES_OVER_ONE = {
  prompt: "Use the measuring tools to place and label the tick-marks with the given fractions.",
  blocks: [FOURTH_BLOCK, EIGHTH_BLOCK],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0,0,0],
  presetPinKeys: [0,0,0, 0, 0],
  pinWidget: false,
  partitionsPerWhole: 2,
  max: 2,
  min: 0,
  ticksEvery: null,
  tolerance: 0.15,
  partitionsPerLine: 4,
  presetLabels: [
    [0, 1]
  ],
  labels: [
    [1, 1],
    [2,1],
    [1, 2],
    [3,2]
  ],
  unique: false,
  endPins: true,
  dontScorePins: true,
  discussionQuestion: true,
}

const BUILDING_FOURTHS_OVER_ONE = {
  prompt: "Use the measuring tools to place and label the tick-marks with the given fractions.",
  blocks: [FOURTH_BLOCK, EIGHTH_BLOCK],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0, 0, 0,0,0,0,0],
  presetPinKeys: [0, 0, 0, 0, 0,0,0,0,0],
  pinWidget: false,
  partitionsPerWhole: 4,
  max: 3,
  min: 0,
  ticksEvery: null,
  tolerance: 0.15,
  partitionsPerLine: 8,
  presetLabels: [
    [0, 1]
  ],
  labels: [
    [1, 1],
    [2,1],
    [3,4],
    [2,4],
    [1, 4],
    [5,4],
    [7,4],
    [6,4]
  ],
  unique: false,
  endPins: true,
  dontScorePins: true,
  discussionQuestion: true,
}

const BUILDING_THIRDS_OVER_ONE = {
  prompt: "Use the measuring tools to place and label the tick-marks with the given fractions.",
  blocks: [FOURTH_BLOCK, EIGHTH_BLOCK],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0,0,0,0,0],
  presetPinKeys: [0, 0, 0,0,0,0,0],
  pinWidget: false,
  partitionsPerWhole: 3,
  max: 2,
  min: 0,
  ticksEvery: null,
  tolerance: 0.15,
  partitionsPerLine: 6,
  presetLabels: [
    [0, 1]
  ],
  labels: [
    [1, 1],
    [1,3],
    [2,1] ,
    [2, 3],
    [5,3],
    [4,3] 
   ],
  unique: false,
  endPins: true,
  dontScorePins: true,
  discussionQuestion: true,
}


const BUILDING_SIXTHS_OVER_ONE = {
  prompt: "Use the measuring tools to place and label the tick-marks with the given fractions.",
  blocks: [FOURTH_BLOCK, EIGHTH_BLOCK],
  indexOfMarkedBlock: null,
  pinKeys: [0, 0, 0,0,0,0,0,0,0,0],
  presetPinKeys: [0, 0, 0,0,0,0,0,0,0,0],
  pinWidget: false,
  partitionsPerWhole: 6,
  max: 9/6,
  min: 0,
  ticksEvery: null,
  tolerance: 0.15,
  partitionsPerLine: 9,
  presetLabels: [
    [0, 1]
  ],
  labels: [
    [1, 1],
    [2,6],
    [1, 6],
    [5,6],
    [4, 6],
    [9,6],
    [7, 6],
  ],
  unique: false,
  endPins: true,
  dontScorePins: true,
  discussionQuestion: true,
}

// Partitioning Activities
const PARTITIONING_ACTIVITY_ONE = [PARTITIONING_HALVES, PARTITIONING_THIRDS, PARTITIONING_FOURTHS, PARTITIONING_SIXTHS,PARTITIONING_FOURTHS_WITH_PIN,PARTITIONING_SIXTHS_WITH_PIN]
const PARTITIONING_ACTIVITY_ONE_TEACHER = [PARTITIONING_FOURTHS]
const PARTITIONING_ACTIVITY_TWO = [PLACING_HALVES,PLACING_FOURTHS,PLACING_THIRDS,PLACING_SIXTHS]
const PARTITIONING_ACTIVITY_TWO_TEACHER = [PLACING_SIXTHS]

// Building Activities
const BUILDING_ACTIVITY_ONE = [BUILDING_HALVES,BUILDING_FOURTHS,BUILDING_THIRDS,BUILDING_SIXTHS]
const BUILDING_ACTIVITY_ONE_TEACHER = [BUILDING_FOURTHS]
const BUILDING_ACTIVITY_TWO = [BUILDING_HALVES_OVER_ONE,BUILDING_FOURTHS_OVER_ONE,BUILDING_THIRDS_OVER_ONE,BUILDING_SIXTHS_OVER_ONE]
const BUILDING_ACTIVITY_TWO_TEACHER = [BUILDING_THIRDS_OVER_ONE]

// Test Sequences
const TEST = [PARTITIONING_SIXTHS_WITH_PIN,PARTITIONING_FOURTHS_WITH_PIN]


export const NUMBERLINE_ACTIVITIES = {
  'TEST': TEST,
  'BUILDING_ACTIVITY_ONE': BUILDING_ACTIVITY_ONE,
  'BUILDING_ACTIVITY_ONE_TEACHER': BUILDING_ACTIVITY_ONE_TEACHER,
  'BUILDING_ACTIVITY_TWO': BUILDING_ACTIVITY_TWO,
  'BUILDING_ACTIVITY_TWO_TEACHER': BUILDING_ACTIVITY_TWO_TEACHER,
  'PARTITIONING_ACTIVITY_ONE': PARTITIONING_ACTIVITY_ONE,
  'PARTITIONING_ACTIVITY_TWO': PARTITIONING_ACTIVITY_TWO,
  'PARTITIONING_ACTIVITY_ONE_TEACHER': PARTITIONING_ACTIVITY_ONE_TEACHER,
  'PARTITIONING_ACTIVITY_TWO_TEACHER': PARTITIONING_ACTIVITY_TWO_TEACHER,
  'DEFAULT': DAY_ONE_TEACHER_WARM_UP,
  'DAY_ONE_WARM_UP': DAY_ONE_WARM_UP,
  'DAY_ONE_TEACHER_WARM_UP': DAY_ONE_TEACHER_WARM_UP,
  'DAY_ONE_CLASSWORK': DAY_ONE_CLASSWORK,
  'DAY_ONE_TEACHER_CLASSWORK': DAY_ONE_TEACHER_CLASSWORK,
  'DAY_ONE_CLASSWORK_2': DAY_ONE_CLASSWORK_2,
  'DAY_ONE_TEACHER_CLASSWORK_2': DAY_ONE_TEACHER_CLASSWORK_2,
  'DAY_TWO_CLASSWORK': DAY_TWO_CLASSWORK,
  'DAY_TWO_TEACHER_CLASSWORK': DAY_TWO_TEACHER_CLASSWORK,
  'DAY_THREE_CLASSWORK': DAY_THREE_CLASSWORK,
  'DAY_THREE_TEACHER_CLASSWORK': DAY_THREE_TEACHER_CLASSWORK,
  'DAY_THREE_CLASSWORK_TWO': DAY_THREE_CLASSWORK_TWO,
  'DAY_THREE_TEACHER_CLASSWORK_TWO': DAY_THREE_TEACHER_CLASSWORK_TWO,
}
