import React, { Component, Text, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Arena from "./Arena";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import * as Pixi from "pixi.js";
import Drawer from "@material-ui/core/Drawer";
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite, TimelineMax } from "gsap/TweenMax";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { ACTIVITIES } from "../activitydata/activities.js"
import { SCRIPTS } from "../activitydata/scripts.js"
import {SCREEN_STATES, SCREEN_TYPES} from '../js/states.js'


import { Document, Page, pdfjs } from 'react-pdf';
import { init } from "../js/gridcutting";
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
App.static = false
App.loaded = false
App.multilayoutenabled = true

export default function LessonPanel(props) {


  const classes = useStyles();
  const { activity } = props.match.params
  const data = ACTIVITIES[activity]
  const initialScreenState = SCREEN_STATES.FULL_PROMPT
  const [panelNumber, setPanel] = React.useState(1)
  const [promptOnly,setPromptState] = React.useState(false)
  const [curtainWidth,setCurtainWidth] = React.useState(window.innerHeight*0.9)
  let panel;
  let arena;
  let curtain;
  let wholeArea;
  const [tipsOpen, setTipsOpen] = React.useState(false)
  const [showPrompt, setShowPrompt] = React.useState(false)
  const [arenaWidth, setArenaWidth] = React.useState(initialScreenState.arenaWidth)
  const [arenaHeight, setArenaHeight] = React.useState(initialScreenState.arenaHeight)
  const [promptHeight, setPromptHeight] = React.useState(initialScreenState.promptHeightPercentage*window.innerHeight)
  const [promptWidth, setPromptWidth] = React.useState(initialScreenState.promptWidthPercentage*window.innerWidth)
  const [numPanels,setNumPanels] = React.useState(1)
  const [key, switchKey] = React.useState(1)
  const [flexDirect, setFlexDirect] = React.useState(initialScreenState.direction)
  const [dummy,setDummy] = React.useState(false)
  function printList(items) {
    if (items) { return items.map((q, i) => { return <p key={i}>{q}<br /><br /></p> }) }
  }

  function onLoadSuccess({numPages}){
    setNumPanels(numPages)
  }

  function setLayout(type){

    let layoutProps = SCREEN_STATES[type]

    if (type == SCREEN_TYPES.FULL_PROMPT){
      TweenLite.to(arena,0,{x: -window.innerWidth,y: -2*window.innerWidth})
    } else {
      TweenLite.to(arena,0,{x: 0,y: 0})
    }
    let promptWidthPercentage = null 
    let promptHeightPercentage = null
  
    if (type == SCREEN_TYPES.FULL_PROMPT){
      if (data.SCREEN_TYPE == SCREEN_TYPES.PANORAMIC){
        promptWidthPercentage = 1
        console.log("panel y", window.innerHeight/2 - window.innerWidth*-0.27/2)
        TweenLite.to(panel,0,{y: window.innerHeight/2 - window.innerWidth*.27/2-50})
      } else {
        promptHeightPercentage = 0.93
        TweenLite.to(panel,0,{x: window.innerWidth/2 - window.innerHeight/2})
      }
    } else {
      promptHeightPercentage = layoutProps.promptHeightPercentage
      promptWidthPercentage = layoutProps.promptWidthPercentage
      TweenLite.to(panel,0,{x: 0})
      if (data.SCREEN_TYPE == SCREEN_TYPES.PANORAMIC){
        TweenLite.to(panel,0,{y: 0})
      } else {
        TweenLite.to(panel,0,{y: 0})
      }

    }
  

    setArenaWidth(layoutProps.arenaWidth)
    setArenaHeight(layoutProps.arenaHeight)
    setPromptHeight(promptHeightPercentage*window.innerHeight)
    setPromptWidth(promptWidthPercentage*window.innerWidth)
    setFlexDirect(layoutProps.direction)

    setTimeout(()=>{setDummy(!dummy)},50)
  }

  useEffect(()=>{
    setLayout(SCREEN_TYPES.FULL_PROMPT)
  },[])

  function toggleFullscreen(){
    var tl = new TimelineMax()
    tl.to(wholeArea,0,{alpha: 0})
      .to(wholeArea,0.3,{alpha: 0})
      .to(wholeArea,0.3,{alpha: 1})
      
    if (showPrompt){
      const TYPE = data.SEQUENCE[(panelNumber-1)%numPanels].screenType
      setLayout(TYPE)
    } else {
      setLayout(SCREEN_TYPES.FULL_TOOL)
    }
    setTimeout(()=>{setShowPrompt(!showPrompt)},50)
  }
  


  function animate(k) {

    let backwardPortrait = new TimelineMax({paused: true})   
    backwardPortrait.to(panel, 0.5, { alpha: 0, y: window.innerHeight / 3 })
                   .to(panel, 0, { y: -window.innerHeight / 3 })
                   .to(panel, 1, { alpha: 1, y: 0 })
    
    let forwardPortrait  = new TimelineMax({paused: true})
    forwardPortrait .to(panel, 0.5, { alpha: 0, y: -window.innerHeight / 3 })
                    .to(panel, 0, { y: window.innerHeight / 3 })
                    .to(panel, 1, { alpha: 1, y: 0 })

    let forwardPanoramic = new TimelineMax({paused: true})   
    forwardPanoramic.to(panel, 0.5, { alpha: 0, x: window.innerWidth/3 })
                   .to(panel, 0, { x: -window.innerWidth / 3 })
                   .to(panel, 1, { alpha: 1, x: 0 })
    
    let backwardPanoramic = new TimelineMax({paused: true})
    backwardPanoramic.to(panel, 0.5, { alpha: 0, x: -window.innerHeight / 3 })
                    .to(panel, 0, { x: window.innerWidth / 3 })
                    .to(panel, 1, { alpha: 1,x: 0 })

    let flash = new TimelineMax({paused: true})
               flash.to(panel, 0, { alpha: 0 })
                    .to(panel, 0.5, { alpha: 1})




      let currentPanel;
      let previousPanel;
      if (k == -1){
        currentPanel =  panelNumber > 1 ? panelNumber + k : numPanels
      } else {
        currentPanel = panelNumber % numPanels+1
      }


      const OLD_TYPE = data.SEQUENCE[(panelNumber-1)%numPanels].screenType
      const NEW_TYPE = data.SEQUENCE[(currentPanel-1)%numPanels].screenType

      if (OLD_TYPE != NEW_TYPE){
        var tl = new TimelineMax()
        tl.to(wholeArea,0,{alpha: 0})
          .to(wholeArea,0.3,{alpha: 0})
          .to(wholeArea,0.3,{alpha: 1})
        setLayout(NEW_TYPE)
      }

    if (k == -1) {
      if (NEW_TYPE == SCREEN_TYPES.PANORAMIC){
        //backwardPanoramic.play()
        flash.play()
      } else {
        //backwardPortrait.play()
        flash.play()
      }
      setTimeout(() =>{
        setPanel((panelNumber > 1 ? panelNumber + k : numPanels))
        setShowPrompt(false)
      }, 0)
    } else if (k == 1) {
         
      if (NEW_TYPE == SCREEN_TYPES.PANORAMIC){
        //forwardPanoramic.play()
        flash.play()
      } else {
        //forwardPortrait.play()
        flash.play()
      }
      setTimeout(() => {
        setPanel(panelNumber % numPanels+1)
        setShowPrompt(false)
      }, 0)
    }
  }


  return (
    <div style={{ height: "100vh", flexDirection: "column", display: "flex" }}>
    <Drawer anchor="right" open={tipsOpen} onClose={() => setTipsOpen(false)}>
      <div className="flow-text" style={{ margin: 10, width: window.innerWidth / 3 }}>
        {printList(data.SEQUENCE[panelNumber-1].tips)}
      </div>
    </Drawer>
    <div style={{ display: "flex", flexDirection: flexDirect}} ref={me => wholeArea = me}>
     <div style={{ display: "flex", justifyContent: 'center', flex: 1 }} ref={me => panel = me}>
        <Document file={data.PDF} onLoadSuccess = {onLoadSuccess}>
         <Page loading = {<div style = {{height: window.innerHeight*0.3,width: 300}}/>}  height={promptHeight} width={promptWidth} pageNumber={panelNumber} />
        </Document>
      </div>
      <div ref = {me=>{arena = me}} style={{ flex: 1 }}>
        <Arena key={key} tipsOpen = {tipsOpen} currentPanel = {data.SEQUENCE[(panelNumber-1)%numPanels]} panelNumber = {panelNumber} features={data.FEATURES} fullscreen={false} screenstate={{ width: arenaWidth, height: arenaHeight }} app={App} script={SCRIPTS[data.SCRIPT]} />
      </div>
    </div>
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

