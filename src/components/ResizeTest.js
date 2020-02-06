import React, {useEffect, useState} from 'react';
import Arena from "./Arena"
import * as Pixi from "pixi.js";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import * as HundredsArrayScript from "../js/hundredsarray.js"
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite, TimelineMax } from "gsap/TweenMax";


Pixi.settings.RESOLUTION = 3
let app = new Pixi.Application(0,0,{backgroundColor: 0xffffff,antialias: true});


function Test() {

  let arena
  let arenaWidth = 0
  let arenaHeight = 0
  const [key, switchKey] = useState(true);

  function onResize(){
    console.log("onresizecalled")
    app.resize({width: arena.clientWidth,height: arena.clientHeight})
  }

  function onClick(){
    let original = [arena.clientWidth,arena.clientHeight]
    console.log("arenahw",arena.clientHeight,arena.clientWidth)
    console.log("arena",arena)
    let animateMe = {width: 500,height: 500}
    const onComplete = ()=>{
      console.log("oncomplete")
      app.stage.width = original[0]
      app.stage.height = original[1]
      app.resize({width: arena.clientWidth,height: arena.clientHeight})
      app.renderer.resize(arena.clientWidth,arena.clientHeight)
      switchKey(!key)
    }
    const onUpdate = ()=>{
      console.log("onupdate")
      app.stage.width = arena.clientWidth
      app.stage.height = arena.clientHeight
    }
    
    TweenLite.to(arena,1,{width: 300,height: 300,onUpdate: onUpdate,onComplete: onComplete})
  }

  return (
    <div>
    <a href = "pdfs/test.pdf" >resize</a>
      <div ref = {me => { arena = me} }>
      <iframe
        src="pdfs/test.pdf"
        width="100%"
        height="1000"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading...
      </iframe>
      </div>
    </div>
  );
}

export default Test
