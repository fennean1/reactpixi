import * as PIXI from "pixi.js";
import blueGradient from "../assets/blue-gradient.png";
import * as CONST from "./const.js";
import QuestionMark from '../assets/QuestionMark.png'
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite, TimelineMax } from "gsap/TweenMax";
import {Fraction, Draggable,NumberLine} from "./api.js"
import { number } from "prop-types";
const ASSETS = CONST.ASSETS


export const init = (app, setup) => {
 

  // Layout Parameters
  let WINDOW_WIDTH = setup.width
  let WINDOW_HEIGHT = setup.height
  let H_W_RATIO = setup.height/setup.width
  let LANDSCAPE = H_W_RATIO < 3/4
  let ARENA_WIDTH = LANDSCAPE ? 4/3*setup.height : setup.width
  let ARENA_HEIGHT = LANDSCAPE ? setup.height : 3/4*setup.width
  

  function makeBackground(){
    // Setup Background
    this.sprite = new PIXI.Sprite.from(CONST.ASSETS.BLUE_GRADIENT);
    this.sprite.width = WINDOW_WIDTH
    this.sprite.height = WINDOW_HEIGHT
    this.sprite.x = 0;
    this.sprite.y = 0;
    this.sprite.interactive = true

    app.stage.addChild(this.sprite)

    this.draw = () => {
        this.sprite.width = WINDOW_WIDTH
        this.sprite.height = WINDOW_HEIGHT
    }
  }

  // Called on resize
  function resize(newFrame,flex){
    // Make sure all layout parameters are up to date.
    updateLayoutParams(newFrame)
    app.renderer.resize(WINDOW_WIDTH,WINDOW_HEIGHT)
  }

  function updateLayoutParams(newFrame){
    let frame;
    if (newFrame){
      frame = newFrame
    } else {
      frame = {width: WINDOW_WIDTH,height: WINDOW_HEIGHT}
    }
    WINDOW_WIDTH = frame.width
    WINDOW_HEIGHT = frame.height
    H_W_RATIO = frame.height/frame.width
    LANDSCAPE = H_W_RATIO < 3/4
    ARENA_WIDTH = LANDSCAPE ? 4/3*frame.height : frame.width
    ARENA_HEIGHT = LANDSCAPE ? frame.height : 3/4*frame.width
  }

  // Loading Script
  function load(){
    let features = {}
    if (setup.props.features){
      features = setup.props.features
    }

    let x = new makeBackground()

    let numberline = new NumberLine(WINDOW_WIDTH*0.7,20,30)
    numberline.denominator = 2
    numberline.init(30)
    numberline.x = 200 
    numberline.y = 200
    app.stage.addChild(numberline)

    app.stage.interactive = true
  
    app.stage.on('pointerdown',()=>{
      numberline.denominator = 4
      numberline.increment(0)})
  
  }


  // Call load script
  load()
  // Not sure where else to put this.
  app.resize = (frame) => resize(frame)
  app.resizable = true
};
