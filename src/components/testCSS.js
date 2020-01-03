import React , {Component, Text,useEffect} from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Arena from "./Arena";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import * as FractionWallScript from "../js/fractionwall.js";
import * as NumberLineToolScript from "../js/numberlinetool.js";
import * as GridToolScript from "../js/gridtool.js";
import * as OrderingToolScript from "../js/orderingtool.js";
import * as SharingToolScript from "../js/sharingtool.js";
import * as CuisenaireToolScript from "../js/cuisenairetool.js";
import * as CapacityTalkData from "../activitydata/CapacityTalk.json";
import * as HundredsGridScript from '../js/hundredsarray.js'

import { Grid , TextField} from "@material-ui/core";
import * as Pixi from "pixi.js";
import Drawer from "@material-ui/core/Drawer";
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite, TimelineMax } from "gsap/TweenMax";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { ACTIVITIES } from "../activitydata/activities.js"

import { Document, Page,pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

Pixi.settings.RESOLUTION = 3
var app = new Pixi.Application(0,0,{backgroundColor: 0xffffff,antialias: true});
app.static = false
app.loaded = false

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

export default function testCSS(props) {

    return (
      <div style = {{display: "flex", flexDirection: 'column',height: "100vh"}} >
        <div style = {{marginLeft: 'auto',marginRight:'auto',flex: 1, backgroundColor: "blue"}}>
          <Document file="/pdfs/PanoramicTest.pdf">
              <Page height = {window.innerHeight/2} pageNumber={1} />
          </Document>
        </div>
        <div style = {{flex: 1, backgroundColor: "red"}}>
           <Arena app = {app} script = {NumberLineToolScript.init}/>
        </div>
      </div>
    );
}
