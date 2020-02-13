import React, { Component, Text, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Arena from "./Arena";
import * as Pixi from "pixi.js";
import Drawer from "@material-ui/core/Drawer";
import { TweenLite, TimelineMax } from "gsap/TweenMax";
import { ACTIVITIES } from "../activitydata/activities.js"
import { SCRIPTS } from "../activitydata/scripts.js"
import {SCREEN_STATES, SCREEN_TYPES} from '../js/states.js'
import PortraitPortal from "./PortraitPortal"
import LandscapePortal from "./LandscapePortal"
import FullPortraitScreen from "./FullPortraitScreen"
import FullLandscapeScreen from "./FullLandscapeScreen"
import FullToolPortal from "./FullToolPortal"

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const useStyles = makeStyles(theme => ({
  container: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

Pixi.settings.RESOLUTION = 3
var App = new Pixi.Application(0, 0, { backgroundColor: 0xffffff, antialias: true });
App.static = true
App.loaded = false
App.multilayoutenabled = true

export default function LessonPanel(props) {

  const { activity } = props.match.params
  const data = ACTIVITIES[activity]
  const fullKey = data.SCREEN_TYPE == SCREEN_TYPES.PANORAMIC ? 3 : 2
  const [panelNumber, setPanel] = React.useState(1)
  const [tipsOpen, setTipsOpen] = React.useState(false)
  const [numPanels,setNumPanels] = React.useState(1)
  const [key, switchKey] = React.useState(fullKey)
  const [refresh, setRefresh] = React.useState(false)
  const [newLayout,setNewLayout] = React.useState(true) // Initialization is always a new layout right?

  function printList(items) {
    if (items) { return items.map((q, i) => { return <p key={i}>{q}<br /><br /></p> }) }
  }

  function onLoadSuccess({numPages}){
    setNumPanels(numPages)
  }


  function toggleFullscreen(){
    //setNewLayout(true)
    if (key == 4){
       let k = getKeyFromPanel(panelNumber)
       switchKey(k)
    } else {
       switchKey(4)
    }
    //setTimeout(()=>setNewLayout(false),1000)
  }
  

  function getKeyFromPanel(num){

    switch (data.SEQUENCE[(num-1)%numPanels].screenType){
      case SCREEN_TYPES.PORTRAIT:
        return 0
      case SCREEN_TYPES.PANORAMIC:
        return 1
      case SCREEN_TYPES.FULL_PROMPT:
        return data.SCREEN_TYPE == SCREEN_TYPES.PANORAMIC ? 3 : 2
      default:
        return 0
    }
  }


  function animate(k) {
    let newPanelNumber = 0
    if (data.GAME){
      setRefresh(!refresh)
    }

    if (k == -1) {
      newPanelNumber = panelNumber > 1 ? panelNumber + k : numPanels
      setPanel(newPanelNumber)
    } else if (k == 1) {
      newPanelNumber = panelNumber % numPanels+1
      setPanel(panelNumber % numPanels+1)
    }

    let newKey = getKeyFromPanel(newPanelNumber)
    switchKey(newKey)
  }


  return (
    <div style={{ height: "100vh", flexDirection: "column", display: "flex" }}>
    <Drawer anchor="right" open={tipsOpen} onClose={() => setTipsOpen(false)}>
      <div className="flow-text" style={{ margin: 10, width: window.innerWidth / 3 }}>
        {printList(data.SEQUENCE[panelNumber-1].tips)}
      </div>
    </Drawer>
    {(key == 0 && (<PortraitPortal newLayout = {newLayout} key = {refresh} app = {App} onLoadSuccess = {onLoadSuccess} panelNumber = {panelNumber} data = {data} />))}
    {(key == 1 && (<LandscapePortal newLayout = {newLayout} key = {refresh} app = {App} onLoadSuccess = {onLoadSuccess} panelNumber = {panelNumber} data = {data}/>))}
    {(key == 2 && (<FullPortraitScreen data = {data} onLoadSuccess = {onLoadSuccess}  panelNumber = {panelNumber} />))}
    {(key == 3 && (<FullLandscapeScreen data = {data} onLoadSuccess = {onLoadSuccess}  panelNumber = {panelNumber} />))}
    {(key == 4 && (<FullToolPortal newLayout = {newLayout} key = {refresh} app = {App} onLoadSuccess = {onLoadSuccess} panelNumber = {panelNumber} data = {data}/>))}
    <div style={{display: 'flex', width: '100%' }} >
      <div style={{ flex: 1, margin: 3 }}>
        <a onClick={() => toggleFullscreen()} className="btn orange left"><i className="material-icons">view_quilt</i></a>
      </div>
      <div className="center" style={{ display: 'flex', flexDirection: 'row' }}>
        <a className="waves-effect grey waves-light btn" style={{ margin: 5 }} onClick={() => animate(-1)}><i className="material-icons">chevron_left</i></a>
          <h6 style = {{marginLeft: 3,marginRight: 3}} >{panelNumber} of {numPanels}</h6>
        <a className="waves-effect grey waves-light btn" style={{ margin: 5 }} onClick={() => animate(1)}><i className="material-icons">chevron_right</i></a>
      </div>
      <div style={{ flex: 1, float: 'right' }}>
        <a onClick={() => setTipsOpen(true)} className="btn orange right"><i className="material-icons">forum</i></a>
      </div>
    </div>
    </div >
  );
}  

