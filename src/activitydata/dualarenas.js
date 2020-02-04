
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

export const DUAL_SCRIPTS = {
    cuttinggrid_5x5_and_gridnodes_5x5_desc: [{
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
            descriptor: true
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