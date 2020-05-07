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
import { Fraction, Draggable } from "./api.js";
import { ASSETS } from "./const.js";

export const init = (app, setup) => {
  let features;
  let viewPort = new PIXI.Container();
  let backGround;
  let papers = []

  // Layout Parameters
  let WINDOW_WIDTH = setup.width;
  let WINDOW_HEIGHT = setup.height;
  let H_W_RATIO = setup.height / setup.width;
  let LANDSCAPE = H_W_RATIO < 3 / 4;
  let ARENA_WIDTH = LANDSCAPE ? (4 / 3) * setup.height : setup.width;
  let ARENA_HEIGHT = LANDSCAPE ? setup.height : (3 / 4) * setup.width;

  // Called on resize
  function resize(newFrame, flex) {
    // Make sure all layout parameters are up to date.
    updateLayoutParams(newFrame);
    app.renderer.resize(WINDOW_WIDTH, WINDOW_HEIGHT);
  }

  // Classes

  class Folder extends PIXI.Container {
    constructor(){
      super()
    }
  }

  class PaperStack extends PIXI.Container {
    constructor(){
      super()
      this.top = new Paper()
      this.bottom = new Paper()
    }
    pointerUp(){

    }
  }


  class Paper extends PIXI.Graphics {
    constructor(){
      super()
      this.interactive = true
      this.on('pointerdown',this.onDragStart)
      this.on('pointerup',this.onDragEnd)
      this.on('pointermove',this.onDragMove)
      this.beginFill(0xFFFFFF);
      this.lineStyle(1,0x000000,10)
      this.drawRoundedRect(0,0,100,100,1)
      this.endFill()

      
    }

    onDragStart(event) {
      console.log("TOUCHED")
      let touchedAtX = event.data.getLocalPosition(this.parent).x;
      let touchedAtY = event.data.getLocalPosition(this.parent).y;
      this.deltaTouch = [this.x - touchedAtX, this.y - touchedAtY];
     // app.stage.addChild(this);
      this.data = event.data;
      this.dragging = true;
  
      if (this.isSplat) {
        let newAlpha = this.alpha == 1 ? 0.35 : 1;
        this.alpha = newAlpha;
      }
    }
  
    onDragEnd() {
      this.data = null;
      this.dragging = false;
    }
  
    onDragMove() {
      if (this.dragging) {
        let pointerPosition = this.data.getLocalPosition(this.parent);
        this.y = pointerPosition.y + this.deltaTouch[1];
        this.x = pointerPosition.x + this.deltaTouch[0];
      }
    }
  }


  // Constructors
  function makeBackground() {
    // Setup Background
    this.sprite = new PIXI.Sprite.from(ASSETS.CHALK_BOARD);
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

  function topPointerMove(){

    if (this.dragging){
      let paperLength = papers.length

      // First Page
      let x0 = papers[0].x 
      let y0 = papers[0].y

      // Last Page
      let xN = papers[paperLength - 1].x 
      let yN = papers[paperLength - 1].y

      let dx = (xN - x0)/9 
      let dy = (yN - y0)/9

      papers.forEach((p,i)=>{
        p.x = dx*i + x0
        p.y = dy*i + y0
      })
    }
  }

  function topPointerUp(){
    papers.forEach((p,i)=>{
      if (i != 9){
        TweenLite.to(p,0.25,{ease: Power2.easeIn, x: this.x+2*(i-9),y: this.y+2*(i-9)})
      }
    })
  }

  // Loading Script
  function load() {
    if (setup.props.features) {
      features = setup.props.features;
      backGround = new makeBackground()

      for (let i = 0;i<10;i++){
        let paper = new Paper()
        app.stage.addChild(paper)
        papers.push(paper)
        if (i==9){
          paper.on('pointermove',topPointerMove)
          paper.on('pointerup',topPointerUp)
        }
      }
    }
  }

  // Call load script
  load();
  // Not sure where else to put this.
  app.resize = (frame) => resize(frame);
  // app.resizable = true
};
