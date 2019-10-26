import React , {Component, Text,useEffect} from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
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
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
//import {Page,Document,pdfjs} from "react-pdf"
import Panels from "./Panels"

//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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

export default class LessonPanel extends Component{
    constructor() {
        super();
        this.app = {};
        this.state = {
          open: false,
          loaded: false,
        }
      }
      
loadInstructions(){
    this.setState({open: true})
}


handleClose() {
    this.setState({open: false})
    };

// So that the correct panel is highlighted on startup

render(){
    return (
      <div>
        <Drawer anchor="left"  open={this.state.open} onClose={this.handleClose.bind(this)}>
            <p className = "flow-text" style = {{margin: 10,width: window.innerWidth/3}}>Here is where your teacher tips would
             go. <Link to="/strips" target="_blank">Here's a link to the manipulative.</Link></p>
        </Drawer>
            <a style = {{position: 'absolute', margin: 5}} onClick = {()=>this.loadInstructions()}className ="btn-floating red"><i className="material-icons">forum</i></a>
        <Panels/>
      </div>
    );
}
}
