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
App.static = false
App.loaded = false
App.multilayoutenabled = true

export default function LessonPanel(props) {


  const classes = useStyles();
  const { activity } = props.match.params
  const data = ACTIVITIES[activity]
  const [panelNumber, setPanel] = React.useState(1)
  let panel;
  let wholeArea;
  let menuBar;
  const [tipsOpen, setTipsOpen] = React.useState(false)
  const [showPrompt, setShowPrompt] = React.useState(false)
  const [arenaWidth, setArenaWidth] = React.useState('60vw')
  const [arenaHeight, setArenaHeight] = React.useState('90vh')
  const [promptHeight, setPromptHeight] = React.useState(null)
  const [promptWidth, setPromptWidth] = React.useState(0.35 * window.innerWidth)
  const [numPanels,setNumPanels] = React.useState(1)
  const [key, switchKey] = React.useState(0)
  const [flexDirect, setFlexDirect] = React.useState("row")

  function printList(items) {
    console.log("printlistcalled")
    if (items) { return items.map((q, i) => { return <p key={i}>{q}<br /><br /></p> }) }
  }

  // So that the correct panel is highlighted on startup
  useEffect(() => {
  
  })


  function onLoadSuccess({numPages}){
    setNumPanels(numPages)
  }

  function toggleFullscreen(){
    console.log("show prompt going in",showPrompt)
    var tl = new TimelineMax()
    tl.to(wholeArea,0,{alpha: 0})
      .to(wholeArea,0.3,{alpha: 0})
      .to(wholeArea,0.2,{alpha: 1})
    if (showPrompt){
      console.log("showing prompt")
      setArenaWidth("60vw")
      setPromptWidth(window.innerWidth*0.35)
    } else {
      console.log("hiding prompt")
      setArenaWidth("100vw")
      setPromptWidth(1)
      setPromptHeight(null)
    }
    setTimeout(()=>{setShowPrompt(!showPrompt)},50)
  }
  


  function animate(k) {
    var tl = new TimelineMax()
    if (k == -1) {
      tl.to(panel, 0.5, { alpha: 0, y: window.innerHeight / 3 })
        .to(panel, 0, { y: -window.innerHeight / 3 })
        .to(panel, 1, { alpha: 1, y: 0 })
      setTimeout(() => setPanel((panelNumber > 1 ? panelNumber - 1 : numPanels)), 500)
    } else if (k == 1) {
      tl.to(panel, 0.5, { alpha: 0, y: -window.innerHeight / 3 })
        .to(panel, 0, { y: window.innerHeight / 3 })
        .to(panel, 1, { alpha: 1, y: 0 })
      setTimeout(() => setPanel(panelNumber % numPanels+1), 500)
    }
  }


  return (
    <div style={{ height: "100vh", flexDirection: "column", display: "flex" }}>
    <Drawer anchor="right" open={tipsOpen} onClose={() => setTipsOpen(false)}>
      <div className="flow-text" style={{ margin: 10, width: window.innerWidth / 3 }}>
        {printList(data.SEQUENCE[panelNumber-1])}
      </div>
    </Drawer>
    <div ref={me => menuBar = me} style={{display: 'flex', width: '100%' }} >
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
    <div style={{ display: "flex", flexDirection: flexDirect}} ref={me => wholeArea = me}>
     <div style={{ display: "flex", justifyContent: 'center', flex: 1 }} ref={me => panel = me}>
        <Document file={data.PDF} onLoadSuccess = {onLoadSuccess}>
         <Page height={promptHeight} width={promptWidth} pageNumber={panelNumber} />
        </Document>
      </div>
      <div style={{ flex: 1 }}>
        <Arena key={key} panelNumber = {panelNumber} features={data.FEATURES} fullscreen={false} screenstate={{ width: arenaWidth, height: arenaHeight }} app={App} script={SCRIPTS[data.SCRIPT]} />
      </div>
    </div>
    </div >
  );
} 
