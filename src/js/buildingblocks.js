import * as PIXI from "pixi.js";
import * as CONST from "./const.js";
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite, TimelineMax } from "gsap/TweenMax";
import {FractionFrame,distance} from "./api.js"

const ASSETS = CONST.ASSETS

export const init = (app, setup) => {

  // Constanct 

  const BLUE_RING_TEXTURE = new PIXI.Texture.from(CONST.ASSETS.BLUE_RING)
  const PINK_RING_TEXTURE = new PIXI.Texture.from(CONST.ASSETS.PINK_RING)
  const BLUE_CIRCLE_TEXTURE= new PIXI.Texture.from(CONST.ASSETS.BLUE_CIRCLE)
  const PINK_CIRCLE_TEXTURE = new PIXI.Texture.from(CONST.ASSETS.RED_CIRCLE)
  const PINK_COLOR = 0xff4772
  const BLUE_COLOR = 0x579aff


  // Layout Paramters
  let WINDOW_WIDTH;
  let WINDOW_HEIGHT;
  let H_W_RATIO;
  let LANDSCAPE;
  let ARENA_WIDTH;
  let ARENA_HEIGHT;
  let BLOCK_DIM;
  let BTN_DIM;


    
 // State Variables
  let features; // Need default features for every tool.
  let cuttingMode = false
  let activelyCutting = false
  let currentColor = BLUE_COLOR


  // State Objects
  let verticalRow;
  let backGround;
  let plusButton;
  let minusButton;
  let activeFrame; 
  let trashBtn; 
  let generatorBtn;
  let frames = []
  let blueBtn;
  let pinkBtn;


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
    BLOCK_DIM = WINDOW_WIDTH/8
    BTN_DIM = BLOCK_DIM/2

  }

  function blockPointerMove(){
    if (this.touching){
      plusButton.alpha = 0
      minusButton.alpha = 0
    } 
  }

  function blockPointerUp(){
    if (distance([this.x,this.y],[trashBtn.x,trashBtn.y])<100){
      app.stage.removeChild(this)
      let i = frames.indexOf(this)
      frames.splice(i,1)
      this.destroy(true)
      activeFrame = null
    } else {
      frames.forEach(f=>f.activated = false)
      app.stage.addChild(plusButton)
      app.stage.addChild(minusButton)
      activeFrame = this
      this.activated = true
      plusButton.alpha = 1
      minusButton.alpha = 1
      plusButton.x = this.x + this.width + this.width/8
      plusButton.y = this.y + this.height/2
      minusButton.x = this.x - this.width/8
      minusButton.y = this.y + this.height/2
    }
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

  function newFrame(){
    // #579aff
    //0xff4772
    let denominator = activeFrame ? activeFrame.denominator : 2
    let _newFrame = new FractionFrame(BLOCK_DIM,1.5*BLOCK_DIM,denominator,app,true,currentColor)
    _newFrame.on('pointermove',blockPointerMove)
    _newFrame.on('pointerup',blockPointerUp)
    _newFrame.interactive = false
    frames.push(_newFrame)
    app.stage.addChild(_newFrame)
    const onComplete = ()=>{_newFrame.interactive = true}
    TweenLite.to(_newFrame,1,{x: WINDOW_WIDTH/2,y: WINDOW_HEIGHT/2,onComplete: onComplete})
    return _newFrame
  }

  function switchColors(newColor){
    currentColor = newColor
    frames.forEach(f=>{
      f.color = newColor
      f.draw()
    })
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
      activeFrame.incDenominator(1)
      setTimeout(()=>{plusButton.interactive = true},300)
    })
    plusButton.width = BLOCK_DIM/5
    plusButton.height = BLOCK_DIM/5
    plusButton.x = 0
    plusButton.y = 0
    plusButton.alpha = 0
    app.stage.addChild(plusButton)

    minusButton = new PIXI.Sprite.from(ASSETS.MINUS_SQUARE)
    minusButton.interactive = true
    minusButton.anchor.set(0.5)
    minusButton.on('pointerdown',()=>{
      minusButton.interactive = false
      activeFrame.incDenominator(-1)
      setTimeout(()=>{minusButton.interactive = true},300)
    })
    minusButton.width = BLOCK_DIM/5
    minusButton.height = BLOCK_DIM/5
    minusButton.x = 0
    minusButton.y = 0
    minusButton.alpha = 0
    app.stage.addChild(minusButton)
  

    activeFrame = newFrame()


    trashBtn = new PIXI.Sprite.from(ASSETS.TRASH)
    trashBtn.width = BLOCK_DIM*0.5
    trashBtn.height = BLOCK_DIM*0.5
    trashBtn.x = WINDOW_WIDTH - trashBtn.width*1.1
    trashBtn.y = trashBtn.width*0.1
    trashBtn.interactive = true
    app.stage.addChild(trashBtn)

    generatorBtn = new PIXI.Sprite.from(ASSETS.NEW_SQUARE)
    generatorBtn.width = BLOCK_DIM/3
    generatorBtn.height = BLOCK_DIM/3
    generatorBtn.x = BLOCK_DIM/10
    generatorBtn.y = BLOCK_DIM/10
    generatorBtn.interactive = true
    generatorBtn.on('pointerdown',newFrame)
    app.stage.addChild(generatorBtn)



    blueBtn = new PIXI.Sprite.from(ASSETS.BLUE_CIRCLE)
    blueBtn.width = BLOCK_DIM/3
    blueBtn.height = BLOCK_DIM/3
    blueBtn.x = BLOCK_DIM/10
    blueBtn.y = 1.5*blueBtn.height
    blueBtn.interactive = true
    blueBtn.on('pointerdown',()=>{
      switchColors(BLUE_COLOR)
      blueBtn.texture = BLUE_CIRCLE_TEXTURE
      pinkBtn.texture = PINK_RING_TEXTURE
    })
    app.stage.addChild(blueBtn)


    pinkBtn = new PIXI.Sprite.from(ASSETS.PINK_RING)
    pinkBtn.width = BLOCK_DIM/3
    pinkBtn.height = BLOCK_DIM/3
    pinkBtn.y = blueBtn.y + 1.1*pinkBtn.height
    pinkBtn.x = BLOCK_DIM/10
    pinkBtn.on('pointerdown',()=>{
      switchColors(PINK_COLOR)
      blueBtn.texture = BLUE_RING_TEXTURE
      pinkBtn.texture = PINK_CIRCLE_TEXTURE
    })
    pinkBtn.interactive = true
    app.stage.addChild(pinkBtn)

  }

  // Call load script
  load()
  // Not sure where else to put this.
  app.resizable = false
};
