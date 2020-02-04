
import {SCRIPTS} from "./scripts.js"

/* For Reference (from scripts.js)
SCRIPTS = {
    CUTTING_GRID: GridCuttingScript.init,
    NODES_GRID: GridNodeScript.init,
    FRACTION_NUMBER_LINE: FractionNumberLineScript.init,
    WALL_TOOL: WallToolScript.init,
    PLACING_NUMBERS: PlacingNumbersScript.init,
    BEAKER_ESTIMATION: BeakerEstimationScript.init,
    ORDERING_BLOCKS: OrderingBlocks.init,
    FRACTION_BARS: FractionBars.init
}
*/

const fuck = SCRIPTS["CUTTING_GRID"]

export const DUAL_SCRIPTS = {
    cutting_and_grid: [{
        script: SCRIPTS['CUTTING_GRID'],
        features: {
            x: 5,
            y: 5,
    }},
    {
        script: SCRIPTS['NODES_GRID'],
        features: {
            x: 5,
            y: 5,
    }}],
    something_and_else: [{
        script: SCRIPTS['CUTTING_GRID'],
        features: {
            x: 5,
            y: 5,
    }},
    {
        script: SCRIPTS['CUTTING_GRID'],
        features: {
            x: 5,
            y: 5,
    }}]
}