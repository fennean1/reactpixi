import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Arena from "./Arena";
import * as FractionWallScript from "../js/fractionwall.js";
import * as NumberLineToolScript from "../js/numberlinetool.js";
import * as GridToolScript from "../js/gridtool.js";
import * as OrderingToolScript from "../js/orderingtool.js";
import * as SharingToolScript from "../js/sharingtool.js";
import * as HundredsArrayScript from "../js/hundredsarray.js";
import * as NumberStripsScript from "../js/numberlinestrips.js";
import * as CuisenaireToolScript from "../js/cuisenairetool.js";
import * as FractionStacksScript from "../js/fractionstacks.js";
import FactorBlocks from "./FactorBlocks";
import * as GridNodeScript from "../js/gridnodes.js";
import * as CapacityTalkData from "../activitydata/CapacityTalk.json";
import * as Pixi from "pixi.js";
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite, TimelineMax } from "gsap/TweenMax";


Pixi.settings.RESOLUTION = 3
var app1 = new Pixi.Application(0,0,{backgroundColor: 0xffffff,antialias: true});
var app2 = new Pixi.Application(0,0,{backgroundColor: 0xffffff,antialias: true});
app1.static = true 
app2.static = true
app1.loaded = false
app2.loaded = false


function TabContainer({ children, dir }) {
  return (
    <div component="div" dir={dir}>
      {children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  }
}));

var arenaOne

export default function ManipulativeCarousel(props) {

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

 
  app1.help = ()=> {    
    console.log("animating",arenaOne.style)
    var tl = new TimelineMax()
    tl.to(arenaOne, 0.5, {x: arenaOne.clientWidth,alpha: 0})
      .to(arenaOne,0, {x: -arenaOne.clientWidth,alpha: 1})
      .to(arenaOne,1,{x: 0})
    }

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant = "fullWidth"
        centered
      >
        <Tab className = "white" label="Tool One" />
        <Tab className = "white" label="Tool Two" />
      </Tabs>

      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>
          {value == 0 && (
            <div ref = {me=> arenaOne = me}>
            <Arena
              app = {app1}
              lesson = {CapacityTalkData.default}
              setup={false}
              fullscreen={true}
              features = {{x: 3,y: 3,descriptor: false}}
              script={GridNodeScript.init}
            />
            </div>
          )}
        </TabContainer>
        <TabContainer dir={theme.direction}>
          {value == 1 && (
            <Arena
             app = {app2}
              lesson = {CapacityTalkData.default}
              setup={false}
              fullscreen={true}
              features = {{x: 5,y: 5,descriptor: true}}
              script={GridNodeScript.init}
            />
           )}
        </TabContainer>
      </SwipeableViews>
    </div>
  );
}
