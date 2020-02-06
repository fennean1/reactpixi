
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/BuildFractionsGreaterThanOneIcon.png'


export const ACTIVITY = {
    ID: "build_fractions_greater_than_one",
    TITLE : "Building Fractions Greater Than One",
    ICON: ICON,
    TIME: 30,
    LINK: "https://web.stmath.com/entrance/jijiconsole.html",
    OBJECTIVES: ["Build fractions greater than one whole using unit fractions.","Connect visual models to symbolic notation."],
    DESCRIPTION: "Students select the size and number of unit fractions needed to build an equivalent quantity greater than one whole. Students select the size (denominator) of the unit fraction and then the number of unit fractions needed to match the quantity given. The quantity is initially given visually, then as an imporper fraction Using unit fraction names, e.g. halves, thirds, sixths..., students build an understanding that the denominator names the type of fraction being selected. This is to build an initial schema that one interpretation of the denominator is that it names the unit or divides the whole. Students should connect the name to the quantity of parts in the whole: thirds=3, fourths=4, eighths=8.... One exception is halves since they are not called twoths. Students begin by solving puzzles with visual wholes (pie model) that can be solved in multiple ways since any denominator can be used to make wholes. Then, the prompt goes from visual, e.g. two whole pies, to symbolic, e.g. 16/8. Students need to select eighths as the denominator and then 16 eights. This helps reinforce the idea that the numerator counts the number of unit fractions while the denominator names the type of unit being used.",
    OVERVIEW: [{anchor: "Play",slides: [1,4], description: ['Bullet One','Bullet Two','Bullet Three']},
    {anchor: "Discuss",slides: [5,6],description: ['Bullet One','Bullet Two','Bullet Three']}]
  }
