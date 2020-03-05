//import * as BuildingNumbersActivity from './hundredsgrid/buildingnumbers/building_numbers_data.js'
//import * as NumberLineOrderingBlocks from './orderingblocks/numberline_ordering_blocks'
import * as JijiSharingPizzaActivity from './cuttingtool/jiji_sharing_pizza_data.js'
import * as TileGreaterThanOne from './walltool/tile_greater_than_one.js'
import * as TileLessThanOne from './walltool/tile_less_than_one.js'
import * as BuildGreaterThanOne from './walltool/build_greater_than_one'
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
import * as Wallpaper from "./WordProblems/wallpaper.js"
import * as FriendSharing from "./WordProblems/friend_sharing.js"
import * as JijiPond from "./WordProblems/jiji_pond.js"
import * as SeaWater from "./WordProblems/sea_water.js"
import * as CarGasTank from "./WordProblems/car_gas_tank.js"
import * as MoreFriendSharing from "./WordProblems/more_friend_sharing"
import * as MoreSeaWater from "./WordProblems/more_sea_water.js"
import * as SandPit from "./WordProblems/sand_pit.js"
import * as SnowPlow from "./WordProblems/snow_plow.js"
import * as ComparingWater from "./WordProblems/comparing_water.js"
import * as PartsOfParts from "./WordProblems/parts_of_parts.js"
import * as HelicopterGasTank from "./WordProblems/helicopter_gas_tank.js"
import * as CarBatteries from "./WordProblems/car_batteries.js"
import * as IceBlocks from "./WordProblems/ice_blocks.js"
import * as JijiStairs from "./WordProblems/jiji_stairs.js"
import * as SnowmenLine from "./WordProblems/snowmen_line.js"
import * as MeasuringCups from "./WordProblems/measuring_cups.js"
import * as JijiCookie from "./WordProblems/jiji_cookie.js"
import * as JijiPie from "./WordProblems/jiji_pie.js"
import * as JijiCake from "./WordProblems/jiji_cake.js"


// Games
import * as BalloonJiji from "./Games/balloon_jiji.js"

// Chats
import * as BuildUnitFractions from "./Chats/build_unit_fractions.js"
import * as BuildFractionsGreaterThanOne from "./Chats/build_fractions_greater_than_one.js"
import * as UnitFractionsOnANumberLine from "./Chats/unit_fractions_on_a_number_line.js"
import * as EstimateFractionsOnANumberLine from "./Chats/estimate_fractions_on_a_number_line.js"
import * as FindEquivalentFractions from "./Chats/find_equivalent_fractions.js"
import * as CompareFractions from "./Chats/compare_fractions.js"



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
    jiji_igloos: JijiIgloos.ACTIVITY,
    jiji_pond: JijiPond.ACTIVITY,
    wallpaper: Wallpaper.ACTIVITY,
    friend_sharing: FriendSharing.ACTIVITY,
    sea_water: SeaWater.ACTIVITY,
    build_fractions_greater_than_one: BuildFractionsGreaterThanOne.ACTIVITY,
    unit_fractions_on_a_number_line: UnitFractionsOnANumberLine.ACTIVITY,
    estimate_fractions_on_a_number_line: EstimateFractionsOnANumberLine.ACTIVITY,
    find_equivalent_fractions: FindEquivalentFractions.ACTIVITY,
    compare_fractions: CompareFractions.ACTIVITY,
    more_sea_water: MoreSeaWater.ACTIVITY,
    more_friend_sharing: MoreFriendSharing.ACTIVITY,
    sand_pit: SandPit.ACTIVITY,
    snow_plow: SnowPlow.ACTIVITY,
    comparing_water: ComparingWater.ACTIVITY,
    parts_of_parts: PartsOfParts.ACTIVITY,
    build_greater_than_one: BuildGreaterThanOne.ACTIVITY,
    car_gas_tank: CarGasTank.ACTIVITY,
    helicopter_gas_tank: HelicopterGasTank.ACTIVITY,
    car_batteries: CarBatteries.ACTIVITY,
    ice_blocks: IceBlocks.ACTIVITY,
    jiji_stairs: JijiStairs.ACTIVITY,
    snowmen_line: SnowmenLine.ACTIVITY,
    measuring_cups: MeasuringCups.ACTIVITY,
    jiji_cookie: JijiCookie.ACTIVITY,
    jiji_pie: JijiPie.ACTIVITY,
    jiji_cake: JijiCake.ACTIVITY
}
