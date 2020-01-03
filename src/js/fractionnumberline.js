import * as PIXI from "pixi.js";
import blueGradient from "../assets/blue-gradient.png";
import * as CONST from "./const.js";
import QuestionMark from '../assets/QuestionMark.png'
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite, TimelineMax } from "gsap/TweenMax";
import {Fraction, Draggable,NumberLine} from "./api.js"
import { number } from "prop-types";
const ASSETS = CONST.ASSETS


export const init = (app, setup) => {
 

  // UI Elements
  let numberline;
  let background;

  // Global Variables
  let features;


  // Layout Parameters
  let WINDOW_WIDTH = setup.width
  let WINDOW_HEIGHT = setup.height
  let H_W_RATIO = setup.height/setup.width
  let LINE_WIDTH = WINDOW_WIDTH*0.7
  let LANDSCAPE = H_W_RATIO < 3/4
  let ARENA_WIDTH = LANDSCAPE ? 4/3*setup.height : setup.width
  let ARENA_HEIGHT = LANDSCAPE ? setup.height : 3/4*setup.width

  // Updates the layout parameters used to position elements.
  function updateLayoutParams(newFrame){
    let frame;
    if (newFrame){
      frame = newFrame
    } else {
      frame = {width: WINDOW_WIDTH,height: WINDOW_HEIGHT}
    }
    WINDOW_WIDTH = frame.width
    WINDOW_HEIGHT = frame.height
    LINE_WIDTH = WINDOW_WIDTH*0.7
    H_W_RATIO = frame.height/frame.width
    LANDSCAPE = H_W_RATIO < 3/4
    ARENA_WIDTH = LANDSCAPE ? 4/3*frame.height : frame.width
    ARENA_HEIGHT = LANDSCAPE ? frame.height : 3/4*frame.width
  }


  // Called on resize
  function resize(newFrame,flex){

    // Make sure all layout parameters are up to date.
    updateLayoutParams(newFrame)
    app.renderer.resize(WINDOW_WIDTH,WINDOW_HEIGHT)
    numberline.redraw(newFrame.width*0.7,newFrame.height/20)
    numberline.x = WINDOW_WIDTH/2 - LINE_WIDTH/2
    numberline.y = WINDOW_HEIGHT/2
    background.draw()
  }


  // Constructors

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



  // Loading Script
  function load(){
    if (setup.props.features){
      features = setup.props.features
    }

    // Background
    background = new makeBackground()

    // Number Line
    numberline = new NumberLine(LINE_WIDTH,WINDOW_HEIGHT/20,20)
    numberline.denominator = 2
    numberline.init(20)
    numberline.x = WINDOW_WIDTH/2 - LINE_WIDTH/2
    numberline.y = WINDOW_HEIGHT/2
    app.stage.addChild(numberline)

    // Stage
    app.stage.interactive = true  
    app.stage.on('pointerdown',()=>{
      numberline.denominator = 1
      numberline.increment(-5)})
  }
  
  // Call load script
  load()
  // Not sure where else to put this.
  app.resize = (frame) => resize(frame)
  app.resizable = true
};
