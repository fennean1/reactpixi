import React , {Component, Text,useEffect} from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Arena from "./Arena";
import * as FractionWallScript from "../js/fractionwall.js";
import * as NumberLineToolScript from "../js/numberlinetool.js";
import * as GridToolScript from "../js/gridtool.js";
import * as OrderingToolScript from "../js/orderingtool.js";
import * as SharingToolScript from "../js/sharingtool.js";
import * as CuisenaireToolScript from "../js/cuisenairetool.js";
import * as CapacityTalkData from "../activitydata/CapacityTalk.json";
import { Grid , TextField} from "@material-ui/core";
import * as Pixi from "pixi.js";
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite, TimelineMax } from "gsap/TweenMax";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
//import { Document } from '@react-pdf/renderer'
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

/* <Document
file="pdf/NumberLineLesson.pdf"
>
  <Page pageNumber={1} />
</Document>

*/

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

export default function LessonPanel(props) {


  const classes = useStyles();
  const [panelNumber,setPanel] = React.useState(1)
  const [label,setLabel] = React.useState("Problem 1")
  const keys = [0,1,2]
  var panel;
  let page1;
  let width;


// So that the correct panel is highlighted on startup
useEffect(()=> {

})
  function animate(k){
    var tl = new TimelineMax()
    if (k == -1) {
      tl.to(panel, 0.5, {x: panel.clientWidth,alpha: 0})
        .to(panel,0, {x: -panel.clientWidth,alpha: 1})
        .to(panel,1,{x: 0})
        setTimeout(()=>setPanel(panelNumber-1),500)
    } else if (k == 1) {
      tl.to(panel, 0.5, {x: -panel.clientWidth,alpha: 0})
        .to(panel,0, {x: panel.clientWidth,alpha: 1})
        .to(panel,1,{x: 0})
        setTimeout(()=>setPanel(panelNumber+1),500)
    }
  }

  function initButtons(){
    let buttons = [ <a className ="waves-effect blue waves-light btn" onClick = {()=>animate(-1)}>Previous</a>,<a className ="waves-effect blue waves-light btn" style = {{margin: 5}}onClick = {()=>animate(1)}>Next</a>]
    return buttons;
  }


    return (
      <div>
      <div className = 'center' >
        {initButtons()}
      </div>
        <div ref = {me => panel = me } > 
       
        </div>
      </div>
    );
}
