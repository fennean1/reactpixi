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
  let panel;
  let arena;
  let wholeArea;
  const [tipsOpen, setTipsOpen] = React.useState(false)
  const [promptHeight, setPromptHeight] = React.useState(0.90*window.innerHeight)
  const [promptWidth, setPromptWidth] = React.useState(null)
  const [numPanels,setNumPanels] = React.useState(1)
  const [key, switchKey] = React.useState(1)
  const [flexDirect, setFlexDirect] = React.useState(initialScreenState.direction)
  const [dummy,setDummy] = React.useState(false)


  function printList(items) {
    if (items) { return items.map((q, i) => { return <p key={i}>{q}<br /><br /></p> }) }
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
        <Document file={data.PDF}>
         <Page loading = {<div style = {{height: window.innerHeight*0.3,width: 300}}/>}  height={promptHeight} width={promptWidth} pageNumber={panelNumber} />
        </Document>
      </div>
    </div>
    <div style={{display: 'flex', width: '100%' }} >
      <div style={{ flex: 1, margin: 3 }}>
        <Link target="_blank" to = {{pathname: data.TOOL}}>
        <a  className="btn orange left"><i className="material-icons">build</i></a>
        </Link>
      </div>
      <div style={{ flex: 1, float: 'right' }}>
        <a onClick={() => setTipsOpen(true)} className="btn orange right"><i className="material-icons">forum</i></a>
      </div>
    </div>
    </div >
  );
}  

