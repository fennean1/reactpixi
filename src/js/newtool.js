import * as PIXI from "pixi.js";
import * as CONST from "./const.js";
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite, TimelineMax } from "gsap/TweenMax";
import {VerticalRowClass} from "./api.js"

const ASSETS = CONST.ASSETS

export const init = (app, setup) => {

  // Constanct 

  const GLASS_CIRCLE_TEXTURE = new PIXI.Texture.from(CONST.ASSETS.GLASS_CIRCLE)
    

  // Layout Paramters
  let WINDOW_WIDTH;
  let WINDOW_HEIGHT;
  let H_W_RATIO;
  let LANDSCAPE;
  let ARENA_WIDTH;
  let ARENA_HEIGHT;

  

    
 // State Variables
  let features; // Need default features for every tool.
  let cuttingMode = false
  let activelyCutting = false
  let activeFrame; 
  let frames = []

  // State Objects
  let verticalRow;
  let backGround;
  let plusButton;
  let minusButton;



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

  function placeButtons(){

  }

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

  // Loading Scriptd
  function load(){
    
    app.loaded = true
    if (setup.props.features){
      features = setup.props.features
    }

    /// FIRST 
    let initialFrame = {width: setup.width,height: setup.height}
    updateLayoutParams(initialFrame)
    backGround = new makeBackground()
    backGround.draw()
   
   
    // SETUP

    plusButton = new PIXI.Sprite.from(ASSETS.PLUS_SQUARE)
  
    plusButton.interactive = true
    plusButton.anchor.set(0.5)
    plusButton.on('pointerdown',()=>{
      plusButton.interactive = false
      verticalRow.incDenominator(1)
      setTimeout(()=>{plusButton.interactive = true},300)
    })
    plusButton.width = 50
    plusButton.height = 50
    plusButton.x = 100 
    plusButton.y = 100
    app.stage.addChild(plusButton)
  

    verticalRow  =  new VerticalRowClass(300,400,5,app,false)
    app.stage.addChild(verticalRow)

    let nverticalRow  = new VerticalRowClass(300,400,5,app,false)
    app.stage.addChild(nverticalRow)

    activeFrame = verticalRow

    frames.push(verticalRow)
    frames.push(nverticalRow)


  }

  // Call load script
  load()
  // Not sure where else to put this.
  app.resizable = false
};
