//import * as BuildingNumbersActivity from './hundredsgrid/buildingnumbers/building_numbers_data.js'
//import * as NumberLineOrderingBlocks from './orderingblocks/numberline_ordering_blocks'
import * as JijiSharingPizzaActivity from './cuttingtool/jiji_sharing_pizza_data.js'
import * as TileGreaterThanOne from './walltool/tile_greater_than_one.js'
import * as TileLessThanOne from './walltool/tile_less_than_one.js'
import * as PartitioningNumberLines from './placingnumbers/partitioning_number_lines.js'
import * as BuildingNonUnitFractions from './gridnodes/building_non_unit_fractions.js'
import * as BeakerEstimation from './beaker/beaker_estimation.js'
import * as BuildingNumberLines from './placingnumbers/building_number_lines.js'
import * as BarEquivalence from './bartool/bar_equivalence.js'
import * as NumberLineEquivalence from './fractionnumberline/number_line_equivalence.js'
import * as PlacingFractions from './fractionnumberline/placing_fractions.js'
import * as EquivalentArea from './gridnodes/equivalent_area.js'
import * as OrderingFractions from './orderingblocks/ordering_fractions.js'
import * as ComparingFractions from './orderingblocks/comparing_fractions.js'

// Word Problems
import * as PizzaCrust from "./WordProblems/pizza_crust.js"
import * as JijiIgloos from "./WordProblems/jiji_igloos.js"

// Games
import * as BalloonJiji from "./Games/balloon_jiji.js"

// Chats
import * as BuildUnitFractions from "./Chats/build_unit_fractions.js"


export const ACTIVITIES = {
    jiji_sharing_pizza: JijiSharingPizzaActivity.ACTIVITY,
    tile_greater_than_one: TileGreaterThanOne.ACTIVITY,
    tile_less_than_one: TileLessThanOne.ACTIVITY,
    partitioning_number_lines: PartitioningNumberLines.ACTIVITY,
    building_non_unit_fractions: BuildingNonUnitFractions.ACTIVITY,
    beaker_estimation: BeakerEstimation.ACTIVITY,
    building_number_lines: BuildingNumberLines.ACTIVITY,
    bar_equivalence: BarEquivalence.ACTIVITY,
    number_line_equivalence: NumberLineEquivalence.ACTIVITY,
    placing_fractions: PlacingFractions.ACTIVITY,
    equivalent_area: EquivalentArea.ACTIVITY,
    ordering_fractions: OrderingFractions.ACTIVITY,
    comparing_fractions: ComparingFractions.ACTIVITY,
    pizza_crust: PizzaCrust.ACTIVITY,
    balloon_jiji: BalloonJiji.ACTIVITY,
    build_unit_fractions: BuildUnitFractions.ACTIVITY,
    jiji_igloos: JijiIgloos.ACTIVITY
}
