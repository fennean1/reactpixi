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


export default function LessonPanel(props) {


  const { activity } = props.match.params
  const data = ACTIVITIES[activity]
  const [imgStyle,setImgStyle] = React.useState({height: "100%",width: "auto",margin: "1%"})
  const [imgContainerStyle,setImgContainerStyle] = React.useState({height: "93%",display: 'flex',flexDirection: "row",justifyContent: 'center'})
  const [tipsOpen, setTipsOpen] = React.useState(false)

  function printList(items) {
    if (items) { return items.map((q, i) => { return <p key={i}>{q}<br /><br /></p> }) }
  }

  useEffect(()=>{

    const windowListener = ()=>{
      if (window.innerHeight < 9/16*window.innerWidth){
        console.log("balls")
        setImgStyle({height: "100%",width: "auto",margin: "1%"})
        setImgContainerStyle({height: "93%",display: 'flex',flexDirection: "row",justifyContent: 'center'})
      } else {
        console.log("sack")
        setImgStyle({height: "auto",width: "100%",margin: "1%"})
        setImgContainerStyle({height: "93%",display: 'flex',flexDirection: "column"})
      }
    }
    window.addEventListener('resize',windowListener)

    return ()=>window.removeEventListener('resize',windowListener)
  },[])

  const toolLink  = (!data.NO_TOOL && <Link target="_blank" to = {{pathname: data.TOOL}}>
  <a  className="btn orange left"><i className="material-icons">build</i></a>
  </Link>)

  return (
    <div style={{ height: "100vh", flexDirection: "column" }}>
    <Drawer anchor="right" open={tipsOpen} onClose={() => setTipsOpen(false)}>
      <div className="flow-text" style={{ margin: 10, width: window.innerWidth / 3 }}>
        {printList(data.SEQUENCE[0].tips)}
      </div>
    </Drawer>
     <div style = {imgContainerStyle}>
      <img  className = "boxShadow" style = {imgStyle} src={data.ICON}/>
      </div>
      <div style={{display: 'flex', width: '100%' }} >
      <div style={{ flex: 1, margin: 3 }}>
        {toolLink}
      </div>
      <div style={{ flex: 1, float: 'right' }}>
        <a onClick={() => setTipsOpen(true)} className="btn orange right"><i className="material-icons">forum</i></a>
      </div>
    </div>
    </div >
  );
}  

