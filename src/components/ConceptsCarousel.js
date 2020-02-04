import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Arena from "./Arena";
import * as FractionWallScript from "../js/newfractionwall.js";
import * as NumberLineToolScript from "../js/numberlinetool.js";
import * as OrderingToolScript from "../js/orderingtool.js";
import * as FractionBarScript from "../js/fractionbar.js";
import * as GridNodeScript from "../js/gridnodes.js";
import * as GridCuttingScript from "../js/gridcutting.js";
import * as FractionStacksScript from "../js/fractionstacks.js";
import ConceptsList from './ConceptsActivities';
import ConceptsWordProblems from "./ConceptsWordProblems";
import ConceptsChats from "./ConceptsChats"
import FactorBlocks from "./FactorBlocks";
import * as Pixi from "pixi.js";
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite, TimelineMax } from "gsap/TweenMax";



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

export default function ConceptsCarousel(props) {

  const classes = useStyles();
  const theme = useTheme();
  const app = globalApp
  const [value, setValue] = React.useState(0);


  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className="container">
        <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <h1 className="header center grey-text">Concepts</h1>
        </div>
      </div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant = "fullWidth"
        centered

      >
        <Tab className = "white" label= "Activities" />
        <Tab className = "white" label= "Word Problems" />
        <Tab className = "white" label= "Chats" />
      </Tabs>

      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>
          {value == 0 && (
            <ConceptsList/>
          )}
        </TabContainer>
        <TabContainer dir={theme.direction}>
          {value == 1 && (
                <ConceptsWordProblems/>
          )}
        </TabContainer>
        <TabContainer dir={theme.direction}>
          {value == 2 && (
               <ConceptsChats/>
           )}
        </TabContainer>
      </SwipeableViews>
    </div>
  );
}
