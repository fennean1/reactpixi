import React,{useEffect} from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Arena from "./Arena";
import * as Pixi from "pixi.js";
import { DUAL_SCRIPTS } from "../activitydata/dualarenas.js";


Pixi.settings.RESOLUTION = 3
var app1 = new Pixi.Application(0,0,{backgroundColor: 0xffffff,antialias: true});
var app2 = new Pixi.Application(0,0,{backgroundColor: 0xffffff,antialias: true});
app1.static = true
app2.static = true
app1.loaded = false
app2.loaded = false
app1.active = false 
app2.active = false



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


export default function DualArena(props) {

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const {key} = props.match.params
  const [arenaA,setArenaA] = React.useState(DUAL_SCRIPTS[key][0])
  const [arenaB,setArenaB] = React.useState(DUAL_SCRIPTS[key][1])

  console.log("arenas",arenaA,arenaB)

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  useEffect(()=>{
    console.log("USE EFFECT")
    const {key} = props.match.params
    const arenas = DUAL_SCRIPTS[key]
    setArenaA(arenas[0])
    setArenaB(arenas[1])
  })

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
        <Tab className = "white" label="Tool A" />
        <Tab className = "white" label="Tool B" />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>
          {value == 0 && (
            <Arena
              app = {app1}
              setup={false}
              fullscreen={true}
              features = {DUAL_SCRIPTS[key][0].features}
              script={DUAL_SCRIPTS[key][0].script}
            />
          )}
        </TabContainer>
        <TabContainer dir={theme.direction}>
          {value == 1 && (
            <Arena
             app = {app2}
              setup={false}
              fullscreen={true}
              features = {DUAL_SCRIPTS[key][1].features}
              script={DUAL_SCRIPTS[key][1].script}
            />
           )}
        </TabContainer>
      </SwipeableViews>
    </div>
  );
}
