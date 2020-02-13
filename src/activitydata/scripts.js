import * as GridCuttingScript from "../js/gridcutting.js";
import * as GridNodeScript from "../js/gridnodes.js";
import * as FractionNumberLineScript from "../js/fractionnumberline.js";
import * as WallToolScript from "../js/walltool.js"
import * as PlacingNumbersScript from "../js/placingnumbers"
import * as BeakerEstimationScript from "../js/beakergame.js"
import * as OrderingBlocksScript from "../js/orderingtool.js"
import * as FractionBarsScript from "../js/fractionbar.js"
import * as FractionStacksScript from "../js/fractionstacks.js"
import * as FractionWallScript from "../js/newfractionwall.js"

export const SCRIPTS = {
    CUTTING_GRID: GridCuttingScript.init,
    NODES_GRID: GridNodeScript.init,
    FRACTION_NUMBER_LINE: FractionNumberLineScript.init,
    WALL_TOOL: WallToolScript.init,
    PLACING_NUMBERS: PlacingNumbersScript.init,
    BEAKER_ESTIMATION: BeakerEstimationScript.init,
    ORDERING_BLOCKS: OrderingBlocksScript.init,
    FRACTION_BARS: FractionBarsScript.init,
    FRACTION_STACKS: FractionStacksScript.init,
    FRACTION_WALL: FractionWallScript.init
}