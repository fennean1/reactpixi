import * as PIXI from "pixi.js";
import * as CONST from "./const.js";
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite, TimelineMax } from "gsap/TweenMax";
import {Fraction, FeedBlocks, Draggable,NumberLine,FractionTag, FractionFrame} from "./api.js"
import { number } from "prop-types";
const ASSETS = CONST.ASSETS


export const init = (app, setup) => {
 
  // UI Elements
  let numberline;
  let background;
  let draggableItem;
  let tags = []
  let hideBtn;
  let activeTag;
  let generatorTag;
  let tagOnDeck;
  let feedBlocks;
  let feedBlocks2;
  let trashBtn;
  let resetBtn;
  let descriptorBlocks = []
 

  // Global Variables
  let features;
  let hidden = false
  let currentDenominator = 2
  let tagIncAnimation = new TimelineLite()
  let tagDecAnimation = new TimelineLite()
  let incrementing = false


  // Layout Parameters
  let WINDOW_WIDTH = setup.width
  let WINDOW_HEIGHT = setup.height
  let H_W_RATIO = setup.height/setup.width
  let LINE_WIDTH = WINDOW_WIDTH*0.7
  let LANDSCAPE = H_W_RATIO < 3/4
  let ARENA_WIDTH = LANDSCAPE ? 4/3*setup.height : setup.width
  let ARENA_HEIGHT = LANDSCAPE ? setup.height : 3/4*setup.width
  let DX = LINE_WIDTH/15
  let NUMBERLINE_START_X = WINDOW_WIDTH/2 - LINE_WIDTH/2
  let NUMBERLINE_Y = WINDOW_HEIGHT*3/4



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
    DX = LINE_WIDTH/15
    NUMBERLINE_START_X = WINDOW_WIDTH/2 - LINE_WIDTH/2
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
    numberline.y = NUMBERLINE_Y

    generatorTag.x = numberline.x - generatorTag.width/2 
    generatorTag.y = numberline.y - 3*numberline._height
    generatorTag.fraction.draw(0,currentDenominator,DX*2/3)
    generatorTag.whiskerTo(Math.abs(generatorTag.y-numberline.y),numberline.y,false)
    tagOnDeck.x = numberline.x - tagOnDeck.width/2 
    tagOnDeck.y = numberline.y - 3*numberline._height
    tagOnDeck.fraction.draw(0,currentDenominator,DX*2/3)
    tagOnDeck.whiskerTo(Math.abs(tagOnDeck.y-numberline.y),numberline.y,false)

    // Resize Background
    background.draw()

    for (let t of tags){
      let _x = t.fraction.numerator/t.fraction.denominator*numberline.whole
      t.y = 3*DX
      t.x = numberline.x + _x - t.width/2
      t.whiskerTo(Math.abs(t.y-numberline.y),numberline.y)
    }
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
      let denominator
      if (features.open){
        denominator = this.fraction.denominator
      } else {
        denominator = currentDenominator
      }

      let dx = numberline.whole/denominator
      this.fraction.N.alpha = 0
      
      if (this.y <=  0){
        this.y = 0
      } else if (this.x <= NUMBERLINE_START_X ) {
        this.x = NUMBERLINE_START_X - this.width/2
      } 

      this.whiskerTo(Math.abs(this.y-numberline.y),numberline.y)
  }
}

  function tagPointerDown(){
    descriptorBlocks.forEach(b=>{
      b.color = CONST.FRACTION_TAG_COLORS[this.fraction.denominator]
      let inc = this.fraction.denominator - b.denominator
      b.colorTo(0)
      b.incDenominator(inc)
    })
    let denominator
    if (features.open){
      denominator = this.fraction.denominator
    } else {
      denominator = currentDenominator
    }
    activeTag = this
    this.zIndex = 2
    let dx = numberline.whole/denominator
    let n = Math.round((this.x+this.width/2 - numberline.x) / dx)
    // FEATURE
    if (features.blocks){
      feedBlocks.resize(numberline.whole,denominator,CONST.FRACTION_TAG_COLORS[denominator])
      feedBlocks.hide()
    }
  }

  function tagPointerUp(){
    let denominator
    if (features.open){
      denominator = this.fraction.denominator
    } else {
      denominator = currentDenominator
    }

    if (this.onDeck == true){
      newTagOnDeck()
      this.onDeck = false
      tags.push(this)
    }
    let floatX = this.x
    let dx = numberline.whole/denominator
    this.fraction.N.alpha = 1
    this.fraction.D.alpha = 1
    let n = Math.round((this.x+this.width/2 - numberline.x) / dx)

    if (!features.open){
      this.fraction.draw(n,currentDenominator,DX*2/3)
    } else {
      this.fraction.draw(n,this.fraction.denominator,DX*2/3)
    }

    if (n == this.fraction.denominator){
      this.zIndex = 0
    } else {
      this.zIndex = 2
      app.stage.addChild(this)
    }

    let _x = dx*n
    this.x = numberline.x + _x - this.width/2
    this.whiskerTo(Math.abs(this.y-numberline.y),numberline.y,hidden)
  
    if (floatX > numberline.x + LINE_WIDTH){
      let i = tags.indexOf(this)
      tags.splice(i,1)
      app.stage.removeChild(this)
      n = 0
    } else if (n == 0 && this.y < numberline.y) {
      let i = tags.indexOf(this)
      tags.splice(i,1)
      app.stage.removeChild(this)
      n = 0
    }

    if (this.y+this.height > app.stage.height){
      this.y = numberline.y + 3*this.width
      this.whiskerTo(Math.abs(this.y-numberline.y),numberline.y,hidden)
    }

    feedBlocks.showTo(n)

    setTimeout(()=>{
      let k = n 
      descriptorBlocks.forEach(b=>{
        b.color = CONST.FRACTION_TAG_COLORS[this.fraction.denominator]
        if (k > this.fraction.denominator){
          b.colorTo(this.fraction.denominator)
        } else {
          b.colorTo(k)
        }
        k -= this.fraction.denominator
      })
    },250)


  }

  function newTagOnDeck(){
    tagOnDeck = new FractionTag(0,numberline.denominator,DX)
    // FEATURE
    if (features.open){
      tagOnDeck.setTip(true)
    } else {
      tagOnDeck.setTip(false)
    }
    tagOnDeck.fraction.draw(0,currentDenominator,DX*2/3)
    tagOnDeck.x = numberline.x - tagOnDeck.width/2
    tagOnDeck.y = generatorTag.y
    tagOnDeck.on('pointermove',tagPointerMove)
    tagOnDeck.on('pointerdown',tagPointerDown)
    tagOnDeck.on('pointerup',tagPointerUp)
    tagOnDeck.on('pointerupoutside',tagPointerUp)
    tagOnDeck.onDeck = true
    tagOnDeck.whiskerTo(Math.abs(tagOnDeck.y-numberline.y),numberline.y,hidden)
    app.stage.addChild(tagOnDeck)
  }

  // Loading Script
  function load(){
    if (setup.props.features){
      features = setup.props.features
    }

    // Background
    background = new makeBackground()

    app.stage.sortableChildren = true

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


    for (let i = 0;i<1;i++){
      let newBlock = new FractionFrame(LINE_WIDTH/10,LINE_WIDTH/5,2,app,true,CONST.FRACTION_TAG_COLORS[currentDenominator],false)
      newBlock.hideButtons()
      newBlock.autoRecolor = true
      newBlock.interactive = false 
      newBlock.children.forEach(c=>c.interactive = false)
      newBlock.colorTo(0)
      descriptorBlocks.push(newBlock)
      app.stage.addChild(newBlock)
      newBlock.x = WINDOW_WIDTH/2 - 1/2*newBlock.width
      newBlock.y = LINE_WIDTH/20
    }

    // Number Line
    numberline = new NumberLine(LINE_WIDTH,LINE_WIDTH/20,2,2)
    numberline.cap = 3
    numberline.hideFractions = true
    numberline.init()
    if (features.open){
      numberline.incDenominator(-1)
      numberline.open = true 
    } 
    //numberline.hideButtons()
    numberline.x = WINDOW_WIDTH/2 - LINE_WIDTH/2
    numberline.y = NUMBERLINE_Y
    numberline.onPinDrag = ()=>{
      for (let t of tags){
        let _x = t.fraction.numerator/t.fraction.denominator*numberline.whole
        t.x = numberline.x + _x - t.width/2
        t.whiskerTo(Math.abs(t.y-numberline.y),numberline.y)
      }
      feedBlocks.resize(numberline.whole)
    }
    numberline.onIncrement = ()=>{
      currentDenominator = currentDenominator > 12 ? 12 : currentDenominator + 1
      generatorTag.fraction.draw(0,currentDenominator,DX*2/3)
      generatorTag.whiskerTo(Math.abs(generatorTag.y-numberline.y),numberline.y,hidden)
      generatorTag.x = numberline.x -  generatorTag.width/2
      tagOnDeck.fraction.draw(0,currentDenominator,DX*2/3)
      tagOnDeck.whiskerTo(Math.abs(tagOnDeck.y-numberline.y),numberline.y,hidden)
      tagOnDeck.x = generatorTag.x
    }
    numberline.onDecrement = ()=>{
      currentDenominator = currentDenominator <= 1 ? 1 : currentDenominator - 1
      generatorTag.fraction.draw(0,currentDenominator,DX*2/3)
      generatorTag.whiskerTo(Math.abs(generatorTag.y-numberline.y),numberline.y,hidden)
      generatorTag.x = numberline.x -  generatorTag.width/2
      tagOnDeck.fraction.draw(0,currentDenominator,DX*2/3)
      tagOnDeck.whiskerTo(Math.abs(tagOnDeck.y-numberline.y),numberline.y,hidden)
      tagOnDeck.x = generatorTag.x
    }

    generatorTag = new FractionTag(0,numberline.denominator,DX)
    generatorTag.interactive = false
    generatorTag.fraction.draw(0,currentDenominator,DX*2/3)
    generatorTag.x = numberline.x -  generatorTag.width/2
    generatorTag.y = numberline.y - 4*numberline._height
    generatorTag.whiskerTo(Math.abs(generatorTag.y-numberline.y),numberline.y,hidden)
    generatorTag.hasTag = true
    app.stage.addChild(generatorTag)

    app.stage.addChild(numberline)

    numberline.removeChild(numberline.pin)

    newTagOnDeck()

    trashBtn = new PIXI.Sprite.from(ASSETS.TRASH)
    trashBtn.anchor.set(0.5)
    trashBtn.width = LINE_WIDTH/15
    trashBtn.height = LINE_WIDTH/15
    trashBtn.x = 1.5*NUMBERLINE_START_X + LINE_WIDTH
    trashBtn.y = WINDOW_HEIGHT/2
    app.stage.addChild(trashBtn)

       
    resetBtn = new PIXI.Sprite.from(ASSETS.RESET)
    resetBtn.y = 0
    resetBtn.x = 0
    resetBtn.width = LINE_WIDTH/10
    resetBtn.height = LINE_WIDTH/10
    resetBtn.interactive = true
    app.stage.addChild(resetBtn)
    resetBtn.on('pointerdown',()=>{
      tags.forEach(t=>{
        t.destroy(true)
        app.stage.removeChild(t)
      })
      tags = []
      feedBlocks.hide()
    })


    background.zIndex = -1
    numberline.zIndex = 1

    feedBlocks = new FeedBlocks(app,numberline._width)
    app.stage.addChild(feedBlocks)
    feedBlocks.x = numberline.x 
    feedBlocks.y = numberline.y - feedBlocks.height
    feedBlocks.hide()

    feedBlocks2 = new FeedBlocks(app,numberline._width)
    app.stage.addChild(feedBlocks)
    feedBlocks2.x = numberline.x 
    feedBlocks2.y = numberline.y - feedBlocks.height
    feedBlocks2.hide()
  }
  
  // Call load script
  load()
  // Not sure where else to put this.
  app.resize = (frame) => resize(frame)
  app.resizable = false
};
