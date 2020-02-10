import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Arena from "./Arena";

import * as FractionWallScript from "../js/newfractionwall.js";
import * as OrderingToolScript from "../js/orderingtool.js";
import * as FractionBarScript from "../js/fractionbar.js";
import * as GridNodeScript from "../js/gridnodes.js";
import * as GridCuttingScript from "../js/gridcutting.js";
import * as FractionNumberLineScript from "../js/fractionnumberline.js"
import * as Pixi from "pixi.js";
import { TimelineMax } from "gsap/TweenMax";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";

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

Pixi.settings.RESOLUTION = 3
var globalApp = new Pixi.Application(0,0,{backgroundColor: 0xffffff,antialias: true});
globalApp.static = false
globalApp.loaded = false

var arenaOne

export default function ManipulativeCarousel(props) {


  const theme = useTheme();
  const app = globalApp
  const [value, setValue] = React.useState(0);
  const toolData = [{name: "Fraction Wall",link: "/fractionwall",tags: ["Comparing","Ordering","Equivalence"]},
  {name: "Fraction Line",link: "/fractionnumberlineopenblocks",tags: ["Labeling","Equivalence","Length Models"]},
  {name: "Ordering",link: "/orderingblocksx5",tags: ["Comparing","Ordering","Building","Concepts"]},
  {name: "Builder Grid",link: "/gridnodes4x4",tags: ["Building","Concepts","Area","Congruence"]},
  {name: "Cutting Grid",link: "/gridcuttingsnap4x4",tags: ["Partitioning","Equivalence","Concepts"]},
  {name: "Fraction Bars",link: "/fractionbars",tags: ["Comparing","Ordering","Equivalence"]}]

 
  app.help = ()=> {    
    console.log("animating",arenaOne.style)
    var tl = new TimelineMax()
    tl.to(arenaOne, 0.5, {x: arenaOne.clientWidth,alpha: 0})
      .to(arenaOne,0, {x: -arenaOne.clientWidth,alpha: 1})
      .to(arenaOne,1,{x: 0})
    }

  function handleChange(event, newValue) {
    console.log("settingvalue")
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  const chips = toolData[value].tags.map(t=><Chip style = {{margin: 5}} label = {t} />)

  return (
    <div className="container">
        <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <h3 className="header center grey-text">{"Manipulatives: "+toolData[value].name }</h3>
        </div>
      </div>
      <div style = {{display: "flex", flexDirection: "row", margin: 5,justifyContent: "center"}}>
 <Link to = {{pathname: toolData[value].link}}  style = {{margin: 5}}><Button variant = "outlined"> {"Open "+ toolData[value].name}</Button>
              </Link> </div> 
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        variant = "scrollable"

      >
        <Tab className = "white" label="Fraction Wall" />
        <Tab className = "white" label="Fraction Line" />
        <Tab className = "white" label="Ordering" />
        <Tab className = "white" label="Builder Grid" />
        <Tab className = "white" label="Cutting Grid" />
        <Tab className = "white" label="Fraction Bars" />
      </Tabs>

      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>
          {value == 0 && (
            <Arena
              app = {app}
              setup={false}
              fullscreen={true}
              script={FractionWallScript.init}
            />
          )}
        </TabContainer>
        <TabContainer dir={theme.direction}>
          {value == 1 && (
            <Arena
              app = {app}
              fullscreen={true}
              features = {{open: true,blocks: true}}
              script={FractionNumberLineScript.init}
            />
          )}
        </TabContainer>
        <TabContainer dir={theme.direction}>
          {value == 2 && (
            <Arena
             app = {app}
              fullscreen={true}
              features = {{numberOfBlocks: 5}}
              script={OrderingToolScript.init}
            />
           )}
        </TabContainer>
        <TabContainer dir={theme.direction}>
          {value == 3 && (
              <Arena
                app = {app}
                setup={false}
                fullscreen={true}
                features = {{x: 5,y: 5,descriptor: false}}
                script={GridNodeScript.init}
              />
           )}
        </TabContainer>
        <TabContainer dir={theme.direction}>
          {value == 4 && (
              <Arena
                app = {app}
                setup={false}
                fullscreen={true}
                features = {{x: 5,y: 5,descriptor: false,snapping: true}}
                script={GridCuttingScript.init}
              />
           )}
        </TabContainer>
        <TabContainer dir={theme.direction}>
          {value == 5 && (
              <Arena
                app = {app}
                setup={false}
                fullscreen={true}
                script={FractionBarScript.init}
              />
           )}
        </TabContainer>
      </SwipeableViews>
    </div>
  );
}
