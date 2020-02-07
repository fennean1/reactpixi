
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/FindEquivalentFractionsIcon.png'


export const ACTIVITY = {
    ID: "find_equivalent_fractions",
    TITLE : "Find Equivalent Fractions",
    ICON: ICON,
    TIME: 30,
    LINK: "https://web.stmath.com/entrance/jijiconsole.html",
    OBJECTIVES: ["Represent equivalent fractions through visual models."],
    DESCRIPTION: "Students use bar models to generate equivalent fractions given a fraction in symbolic notation. Students are given a set of bar models representing halves to sixths. They need to decide which unit fractions will work and how many they need to create an equivalent fraction. Students will likely begin by creating the given fraction using the bar model that matches the prompt. Then, they will visually find another fraction that will fill in the same amount of space given by the prompt. Encourage students to begin reasoning abstractly rather than exclusively visually. For example, students should be able to reason that, in the context of this game, only fractions with an even denominator can be equivalent to 1/2. Fractions with an odd denominator, e.g. thirds, cannot be used since you can't select one and a half thirds.",
    OVERVIEW: [{anchor: "Play",slides: [1,4], description: ['Bullet One','Bullet Two','Bullet Three']},
    {anchor: "Discuss",slides: [5,6],description: ['Bullet One','Bullet Two','Bullet Three']}]
  }
