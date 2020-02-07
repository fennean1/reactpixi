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

export default function PortraitPortal(props) {


  return (
    <div style={{ display: "flex", flexDirection: "row"}} ref={me => wholeArea = me}>
     <div style={{ display: "flex", justifyContent: 'center', flex: 1 }} ref={me => panel = me}>
        <Document file={data.PDF} onLoadSuccess = {onLoadSuccess}>
         <Page loading = {<div style = {{height: window.innerHeight*0.3,width: 300}}/>}  height={promptHeight} width={promptWidth} pageNumber={panelNumber} />
        </Document>
      </div>
      <div style={{ flex: 1 }}>
        <Arena key={key} tipsOpen = {tipsOpen} currentPanel = {data.SEQUENCE[(panelNumber-1)%numPanels]} panelNumber = {panelNumber} features={data.FEATURES} fullscreen={false} screenstate={{ width: arenaWidth, height: arenaHeight }} app={App} script={SCRIPTS[data.SCRIPT]} />
      </div>
    </div>
  );
}  

