
import {SCRIPTS} from "./scripts.js"


export const DUAL_SCRIPTS = {
    cuttinggrid_5x5_and_gridnodes_5x5_desc: [{
        script: SCRIPTS.CUTTING_GRID,
        features: {
            x: 5,
            y: 5,
    }},
    {
        script: SCRIPTS.NODES_GRID,
        features: {
            x: 5,
            y: 5,
            descriptor: true
    }}],
    stacks_x2_and_blocks_x2: [{
        script: SCRIPTS.FRACTION_STACKS,
        features: {
            double: true,
            numberOfBlocks: 2,
            lineMax: 12
    }},
    {
        script: SCRIPTS.ORDERING_BLOCKS,
        features: {
            numberOfBlocks: 2,
    }}],
    fractionwall_and_orderingblocks_x2: [{
        script: SCRIPTS.FRACTION_WALL,
        features: null},
    {
        script: SCRIPTS.ORDERING_BLOCKS,
        features: {
            numberOfBlocks: 2,
    }}],
    fractionwall_and_cuttinggrid_4x4: [{
        script: SCRIPTS.FRACTION_WALL,
        features: null
    },
    {
        script: SCRIPTS.CUTTING_GRID,
        features: {
            x: 5,
            y: 5,
    }}]
}