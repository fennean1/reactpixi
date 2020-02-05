
import {SCREEN_STATES,SCREEN_TYPES} from '../../js/states.js'
import ICON from '../../assets/BuildUnitFractionsIcon.png'


export const ACTIVITY = {
    ID: "build_unit_fractions",
    TITLE : "Building Unit Fractions",
    ICON: ICON,
    TIME: 45,
    LINK: "https://web.stmath.com/entrance/jijiconsole.html",
    OBJECTIVES: ["Develop a conceptual and visual understanding of how to build fractions.","Explain the role that the numerator and denominator play in constructing a fraction."],
    DESCRIPTION: "Students use symbolic or word prompts (e.g. 1/3 or one third) to model the corresponding fraction in visual form. They first partition the whole into the appropriate parts, then select the number of parts needed.    During the discussion, students should articulate that the denominator names the size of the fraction by partitioning it into that many pieces. After the size of the pieces has been created, the numerator specifies how many of those pieces to select. Students do not need to know the terms, but identify the roles each plays in creating a visual model. Students should notice that the more pieces a whole is partitioned into, the smaller the parts become. Thus, the larger the denominator, the smaller the fraction. They should be able to articulate that halves are larger than eights because halves only cut the whole in two equal pieces while eights cut it up into eight smaller parts.",
    OVERVIEW: [{anchor: "Play",slides: [1,4], description: ['Bullet One','Bullet Two','Bullet Three']},
    {anchor: "Discuss",slides: [5,6],description: ['Bullet One','Bullet Two','Bullet Three']}]
  }
