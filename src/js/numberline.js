import * as PIXI from "pixi.js";
import blueGradient from "../assets/blue-gradient.png";
import * as CONST from "./const.js";
import QuestionMark from "../assets/QuestionMark.png";
import {
  TweenMax,
  TimelineLite,
  Power2,
  Elastic,
  CSSPlugin,
  TweenLite,
  TimelineMax,
  Power4,
} from "gsap/TweenMax";
import { Fraction, Draggable} from "./api.js";
import { ASSETS } from "./const.js";

export const init = (app, setup) => {
  let features;
  let viewPort = new PIXI.Container();
  let backGround;
  let papers = [];


  
  // Layout Parameters
  let WINDOW_WIDTH = setup.width;
  let WINDOW_HEIGHT = setup.height;
  let H_W_RATIO = setup.height / setup.width;
  let LANDSCAPE = H_W_RATIO < 3 / 4;
  let ARENA_WIDTH = LANDSCAPE ? (4 / 3) * setup.height : setup.width;
  let ARENA_HEIGHT = LANDSCAPE ? setup.height : (3 / 4) * setup.width;
  let NUMBER_LINE_WIDTH = WINDOW_WIDTH*0.8

  backGround = new makeBackground();
  let numberline;

  // Called on resize
  function resize(newFrame, flex) {
    // Make sure all layout parameters are up to date.
    updateLayoutParams(newFrame);
    app.renderer.resize(WINDOW_WIDTH, WINDOW_HEIGHT);
  }    
  
  let sliderLine = new PIXI.Graphics()
  sliderLine.lineStyle(NUMBER_LINE_WIDTH/300,0xFFFFFF)
  sliderLine.lineTo(NUMBER_LINE_WIDTH,0)
  sliderLine.x = WINDOW_WIDTH/2 - NUMBER_LINE_WIDTH/2
  sliderLine.y = WINDOW_HEIGHT/2
  app.stage.addChild(sliderLine)

  const PIN_TEXTURE = new PIXI.Texture.from(CONST.ASSETS.MOVER_DOT)
  let dragger = new Draggable(PIN_TEXTURE)
  dragger.lockY = true
  dragger.interactive = true 
  dragger.anchor.set(0.5)
  app.stage.addChild(dragger)
  dragger.width = 50
  dragger.height = 50
  dragger.x = WINDOW_WIDTH/2 + NUMBER_LINE_WIDTH/2
  dragger.y = WINDOW_HEIGHT/2

  let draggerMin = new Draggable(PIN_TEXTURE)
  draggerMin.interactive = true 
  draggerMin.lockY = true
  draggerMin.anchor.set(0.5)
  app.stage.addChild(draggerMin)
  draggerMin.width = 50
  draggerMin.height = 50
  draggerMin.x = WINDOW_WIDTH/2 - NUMBER_LINE_WIDTH/2
  draggerMin.y = WINDOW_HEIGHT/2


  dragger.on('pointermove',draggerPointerMove)
  dragger.on('pointerdown',draggerPointerDown)
  dragger.on('pointerup',draggerPointerUp)

  draggerMin.on('pointermove',draggerMinPointerMove)
  draggerMin.on('pointerdown',draggerMinPointerDown)
  draggerMin.on('pointerup',draggerMinPointerUp)
  
  function draggerPointerUp(){
    this.initialX = 0
  }  
  function draggerPointerMove(){
    if (this.touching){
      let n = Math.round((this.x - numberline.x)/NUMBER_LINE_WIDTH*100)
      numberline.max = n 
      numberline.draw(numberline.min,numberline.max)
    }
  }  
  function draggerPointerDown(){
   this.initialX = this.x
  }

  function draggerMinPointerUp(){
    this.initialX = 0
  }  
  function draggerMinPointerMove(){
    if (this.touching){
      let n = Math.round((this.x - numberline.x)/NUMBER_LINE_WIDTH*100)
      numberline.min = n 
      numberline.draw(numberline.min,numberline.max)
    }
  }  
  function draggerMinPointerDown(){
   this.initialX = this.x
  }

  // Classes

  class NumberLine extends PIXI.Container {
    constructor(min,max,width) {
      super();
      this.ticks = [];
      this.labels = [];
      this.min = min 
      this.max = max
      this._width = width
      this.lineThickness = width/300
      
      this.setLayoutParams(min,max)

      this.majorTick = new PIXI.Graphics();
      this.majorTick.lineStyle(this.majorTickThickness, 0x000000);
      this.majorTick.lineTo(0,this.majorTickHeight);
      this.majorTickTexture = app.renderer.generateTexture(this.majorTick)
      
      this.minorTick = new PIXI.Graphics();
      this.minorTick.lineStyle(this.minorTickThickness, 0x000000);
      this.minorTick.lineTo(0,this.minorTickHeight);
      this.minorTickTexture = app.renderer.generateTexture(this.minorTick)

      this.line = new PIXI.Graphics()
      this.line.lineStyle(this.lineThickness,0x00000)
      this.line.lineTo(width,0)
      this.init()

    }

    init() {
      this.addChild(this.line)
      for (let i = 0; i <= 100; i++) {
        let newTick = i%this.majorStep != 0 ? new PIXI.Sprite(this.minorTickTexture) : new PIXI.Sprite(this.majorTickTexture);
        newTick.anchor.set(0.5,0)
        this.ticks.push(newTick);
        let newLabel = new PIXI.Text()
        newLabel.style.fontSize = this.digitHeight
        newLabel.style.fontFamily = "Nunito"
        newLabel.anchor.set(0.5,0)
        newLabel.text = i
        this.labels.push(newLabel);
        console.log("major step",this.majorStep)
        if (i%this.majorStep != 0){
          newLabel.alpha = 0
        } 
        if (i> this.max){
          newLabel.alpha = 0 
          newTick.alpha = 0
        }
        newLabel.x = i*this.minorDX
        newLabel.y = 1.1*this.majorTickHeight
        newTick.x = i*this.minorDX
        newTick.y = -this.majorTickThickness/2
        this.addChild(newTick)
        this.addChild(newLabel)
      }
    }

    setLayoutParams(min,max){
      this.params = numberLineParameters(min,max,this._width)
      this.majorStep = this.params.MAJOR_STEP
      this.minorStep = this.params.MINOR_STEP
      this.digitHeight = this.params.DIGIT_HEIGHT

      this.majorDX = this._width/(max-min)*this.majorStep
      this.minorDX = this._width/(max-min)*this.minorStep

      this.minorTickHeight = this._width/60
      this.majorTickHeight = 1.5*this.minorTickHeight

      this.minorTickThickness = Math.min(this.minorDX/3,this.lineThickness)
      this.majorTickThickness = this.minorTickThickness*1.25
    }

    draw(min,max) {

      this.setLayoutParams(min,max)

      this.majorTick.clear()
      this.majorTick.lineStyle(this.majorTickThickness, 0x000000);
      this.majorTick.lineTo(0,this.majorTickHeight);
      this.majorTickTexture = app.renderer.generateTexture(this.majorTick)
      
      this.minorTick.clear()
      this.minorTick.lineStyle(this.minorTickThickness, 0x000000);
      this.minorTick.lineTo(0,this.minorTickHeight);
      this.minorTickTexture = app.renderer.generateTexture(this.minorTick)

      this.ticks.forEach((t,i)=>{
          if (i>this.max || i < this.min){
            t.alpha = 0
          } else {
            t.alpha = 1
          }

         if (i%this.majorStep != 0){
           t.texture = this.minorTickTexture
         }  else {
           t.texture = this.majorTickTexture
         }
         t.x = this.minorDX*(i-this.min)
         t.y = -this.majorTickThickness/3
      })
      
      this.labels.forEach((l,j)=>{
        l.style.fontSize = this.digitHeight
        l.text = j
        l.x = (j-this.min)*this.minorDX
        l.y = 1.1*this.majorTickHeight

        if (j<=(this.max) && j >= this.min){
          if (j%this.majorStep != 0){
            l.alpha = 0
          } else {
            l.alpha = 1
          }
        } else {
          l.alpha = 0
        }
      })
    }
  }

  function digitCount(n) {
    var count = 0;
    if (n >= 1) ++count;

    while (n / 10 >= 1) {
      n /= 10;
      ++count;
    }

    return count;
  }

  function numberLineParameters(min, max, width) {
    let majorSteps = [1, 2, 5, 10, 20, 50, 100];
    let minorSteps = [1, 2, 5, 10, 20, 50, 100];
    let minorStepIndex = 0;
    let majorStepIndex = 0;
    let digitHeight = 0;

    while (digitHeight < 15) {
      let numberOfIncrements = (max - min) / majorSteps[majorStepIndex];
      //console.log("number of increments", numberOfIncrements);
      let minorTickWidth = width / numberOfIncrements;
      //console.log("minorTickeWidth", minorTickWidth);
      let majorTickWidth = minorTickWidth;
      //console.log("major tick width", majorTickWidth);
      let maxDigits = digitCount(max);
      let numberOfDigitWidths = (maxDigits + 1) * (numberOfIncrements - 1);
      let digitWidth = width / numberOfDigitWidths;
      digitHeight = (6 / 5) * digitWidth;
      //console.log("major step index",majorStepIndex)
      majorStepIndex += 1;
      //console.log("digit height", digitHeight);
    }

    digitHeight = digitHeight < 25 ? digitHeight : 25

    const params = {
      MAJOR_STEP: majorSteps[majorStepIndex-1],
      MINOR_STEP: minorSteps[minorStepIndex],
      DIGIT_HEIGHT: digitHeight,
    };
    return params;
  }

 
  // Constructors
  function makeBackground() {
    // Setup Background
    this.sprite = new PIXI.Sprite.from(blueGradient);
    this.sprite.width = WINDOW_WIDTH;
    this.sprite.height = WINDOW_HEIGHT;
    this.sprite.x = 0;
    this.sprite.y = 0;
    this.sprite.interactive = true;

    app.stage.addChild(this.sprite);

    this.draw = () => {
      this.sprite.width = WINDOW_WIDTH;
      this.sprite.height = WINDOW_HEIGHT;
    };
  }

  function updateLayoutParams(newFrame) {
    let frame;
    if (newFrame) {
      frame = newFrame;
    } else {
      frame = { width: WINDOW_WIDTH, height: WINDOW_HEIGHT };
    }
    WINDOW_WIDTH = frame.width;
    WINDOW_HEIGHT = frame.height;
    H_W_RATIO = frame.height / frame.width;
    LANDSCAPE = H_W_RATIO < 3 / 4;
    ARENA_WIDTH = LANDSCAPE ? (4 / 3) * frame.height : frame.width;
    ARENA_HEIGHT = LANDSCAPE ? frame.height : (3 / 4) * frame.width;
  }

  // Loading Script
  function load() {
    if (setup.props.features) {
      features = setup.props.features;
    }

    numberline = new NumberLine(0,100,NUMBER_LINE_WIDTH)

    app.stage.addChild(numberline)
    numberline.x = WINDOW_WIDTH/2-NUMBER_LINE_WIDTH/2
    numberline.y = 1/4*WINDOW_HEIGHT
  }

  // Call load script
  load();
  // Not sure where else to put this.
  app.resize = (frame) => resize(frame);
  // app.resizable = true
};
