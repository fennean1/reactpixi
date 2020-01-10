import * as PIXI from "pixi.js";
import blueGradient from "../assets/blue-gradient.png";
import * as CONST from "./const.js";
import QuestionMark from '../assets/QuestionMark.png'
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite, TimelineMax } from "gsap/TweenMax";
import {Fraction, Draggable,NumberLine,FractionTag} from "./api.js"
import { number } from "prop-types";
const ASSETS = CONST.ASSETS


export const init = (app, setup) => {
 
  const PIN_TEXTURE = new PIXI.Texture.from(ASSETS.GLASS_SQUARE)

  // UI Elements
  let numberline;
  let background;
  let draggableItem;
  let tags = []
  let hideBtn;
  let activeTag
  
 

  // Global Variables
  let features;
  let hidden = false


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
  function resize(newFrame){

    // Make sure all layout parameters are up to date.
    updateLayoutParams(newFrame)

    // Resize renderer.
    app.renderer.resize(WINDOW_WIDTH,WINDOW_HEIGHT)
    
    // Resize Number Line
    numberline.redraw(newFrame.width*0.7,newFrame.height/20)
    numberline.x = WINDOW_WIDTH/2 - LINE_WIDTH/2
    numberline.y = WINDOW_HEIGHT/2

    // Resize Background
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

  function tagPointerMove(){
    if (this.touching){
      this.whiskerTo(Math.abs(this.y-numberline.y),numberline.y)
      this.fraction.N.alpha = 0
      this.fraction.D.alpha = 0
    }
  }

  function tagPointerDown(){
    activeTag = this
  }

  function tagPointerUp(){
    this.fraction.N.alpha = 1
    this.fraction.D.alpha = 1
    let n = Math.round((this.x+this.width/2 - numberline.x) / numberline.dx)
    console.log("DRAWING")
    this.fraction.draw(n,numberline.denominator,numberline.width/20)
    console.log("N,D,text",this.fraction.N.text,this.fraction.D.text)
    let _x = numberline.dx*n
    this.x = numberline.x + _x - this.width/2
    this.whiskerTo(Math.abs(this.y-numberline.y),numberline.y)
  }


  // Loading Script
  function load(){
    if (setup.props.features){
      features = setup.props.features
    }

    // Background
    background = new makeBackground()


    hideBtn = new PIXI.Sprite.from(ASSETS.HIDE)
    hideBtn.width = 70
    hideBtn.height = 50
    hideBtn.interactive = true
    //app.stage.addChild(hideBtn)
    hideBtn.on('pointerdown',()=>{
      for (let t of tags){
        if (hidden){
          t.fraction.draw(t.fraction.numerator,t.fraction.denominator,numberline.width/20)
        } else {
          t.fraction.hide(t.label)
        }
      }
      hidden = !hidden
    })


    // Number Line
    numberline = new NumberLine(LINE_WIDTH,WINDOW_HEIGHT/20,20,4)
    numberline.hideFractions = true
    numberline.init()
    numberline.x = WINDOW_WIDTH/2 - LINE_WIDTH/2
    numberline.y = WINDOW_HEIGHT/2
    numberline.onPinDrag = ()=>{
      for (let t of tags){
        let _x = t.fraction.numerator/t.fraction.denominator*numberline.whole
        t.x = numberline.x + _x - t.width/2
        t.whiskerTo(Math.abs(t.y-numberline.y),numberline.y)
      }
    }
    app.stage.addChild(numberline)
    let labels = ['?','?','?']
    for (let i = 0;i<3;i++){
      let newTag = new FractionTag(1,2,2*numberline.dx)
      newTag.x = numberline.x + newTag.width/2
      newTag.y = numberline.y - 50
      newTag.on('pointermove',tagPointerMove)
      newTag.on('pointerdown',tagPointerDown)
      newTag.on('pointerup',tagPointerUp)
      newTag.on('pointerupoutside',tagPointerUp)
      newTag.label = labels[i]
      app.stage.addChild(newTag)
      tags.push(newTag)
    }

    activeTag = tags[0]

  }
  
  // Call load script
  load()
  // Not sure where else to put this.
  app.resize = (frame) => resize(frame)
  app.resizable = true
};
