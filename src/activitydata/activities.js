import * as BuildingNumbersActivity from './hundredsgrid/buildingnumbers/building_numbers_data.js'
import * as NumberLineOrderingBlocks from './orderingblocks/numberline_ordering_blocks'
import * as JijiSharingPizzaActivity from './cuttingtool/jiji_sharing_pizza_data.js'
import * as OpenNumberLine from './fractionnumberline/open_number_line.js'
import * as TileGreaterThanOne from './walltool/tile_greater_than_one.js'
import * as TileLessThanOne from './walltool/tile_less_than_one.js'
import * as PartitioningNumberLines from './placingnumbers/partitioning_number_lines.js'
import * as BuildingNonUnitFractions from './gridnodes/building_non_unit_fractions.js'



export const ACTIVITIES = {
    hundred_grid_building_numbers: BuildingNumbersActivity.ACTIVITY,
    numberline_ordering_blocks: NumberLineOrderingBlocks.ACTIVITY,
    jiji_sharing_pizza: JijiSharingPizzaActivity.ACTIVITY,
    open_number_line: OpenNumberLine.ACTIVITY,
    tile_greater_than_one: TileGreaterThanOne.ACTIVITY,
    tile_less_than_one: TileLessThanOne.ACTIVITY,
    partitioning_number_lines: PartitioningNumberLines.ACTIVITY,
    building_non_unit_fractions: BuildingNonUnitFractions.ACTIVITY,

}