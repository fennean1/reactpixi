import React, { Component, Text, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import NewArena from "./NewArena";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import * as Pixi from "pixi.js";
import Drawer from "@material-ui/core/Drawer";
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite, TimelineMax } from "gsap/TweenMax";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { ACTIVITIES } from "../activitydata/activities.js"
import { SCRIPTS } from "../activitydata/scripts.js"
import * as OrderingBlocksScript from "../js/orderingtool.js"
import * as CuttingToolScript from "../js/gridcutting.js"
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


export default function LandscapePortal(props) {


  return (
    <div style={{ display: "flex", flexDirection: "column"}} >
     <div style={{ display: "flex", justifyContent: 'center', flex: 1 }}>
        <Document loading = {<div style = {{height: window.innerHeight*0.3,width: 300}}/>} file= {props.pdf} onLoadSuccess = {props.onLoadSuccess}>
         <Page loading = {<div style = {{height: window.innerHeight*0.3,width: 300}}/>} width = {window.innerHeight*0.3} pageNumber = {props.panelNumber} />
        </Document>
      </div>
      <div style={{ flex: 1 }}>
        <NewArena features = {{x: 5,y: 5}} fullscreen={false} screenstate = {{ width: "100vw", height: "60vh" }} app={props.app} script={CuttingToolScript.init} />
      </div>
    </div>
  );
}  

