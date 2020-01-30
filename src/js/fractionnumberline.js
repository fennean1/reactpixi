import * as PIXI from "pixi.js";
import * as CONST from "./const.js";
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite, TimelineMax } from "gsap/TweenMax";
import {Fraction, FeedBlocks, Draggable,NumberLine,FractionTag} from "./api.js"
import { number } from "prop-types";
const ASSETS = CONST.ASSETS


export const init = (app, setup) => {
 
  const PIN_TEXTURE = new PIXI.Texture.from(ASSETS.GLASS_CIRCLE)

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
 

  // Global Variables
  let features;
  let hidden = false
  let currentDenominator = 2


  // Layout Parameters
  let WINDOW_WIDTH = setup.width
  let WINDOW_HEIGHT = setup.height
  let H_W_RATIO = setup.height/setup.width
  let LINE_WIDTH = WINDOW_WIDTH*0.7
  let LANDSCAPE = H_W_RATIO < 3/4
  let ARENA_WIDTH = LANDSCAPE ? 4/3*setup.height : setup.width
  let ARENA_HEIGHT = LANDSCAPE ? setup.height : 3/4*setup.width
  let DX = LINE_WIDTH/15


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
      let n = Math.round((this.x+this.width/2 - numberline.x) / dx)
      this.whiskerTo(Math.abs(this.y-numberline.y),numberline.y)
      this.fraction.N.alpha = 0
      //this.fraction.D.alpha = 0

      // FEATURE
      //if (features.blocks){feedBlocks.showTo(n)}
    }
  }

  function tagPointerDown(){
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
      feedBlocks.resize(numberline.whole,denominator)
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
  
    //app.stage.addChild(numberline)

    if (floatX < numberline.x-dx/4){
      let i = tags.indexOf(this)
      tags.splice(i,1)
      app.stage.removeChild(this)
    }
    feedBlocks.showTo(n)
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
    tagOnDeck.x = generatorTag.x
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


    // Number Line
    numberline = new NumberLine(LINE_WIDTH,WINDOW_HEIGHT/20,3,2)
    numberline.hideFractions = true
    numberline.init()
    if (features.open){
      numberline.incDenominator(-1)
      numberline.open = true 
    } 
    //numberline.hideButtons()
    numberline.x = WINDOW_WIDTH/2 - LINE_WIDTH/2
    numberline.y = WINDOW_HEIGHT/2
    numberline.onPinDrag = ()=>{
      for (let t of tags){
        let _x = t.fraction.numerator/t.fraction.denominator*numberline.whole
        t.x = numberline.x + _x - t.width/2
        t.whiskerTo(Math.abs(t.y-numberline.y),numberline.y)
        feedBlocks.resize(numberline.whole)
      }
    }
    numberline.onIncrement = ()=>{
      currentDenominator += 1
      generatorTag.fraction.draw(0,currentDenominator,DX*2/3)
      tagOnDeck.fraction.draw(0,currentDenominator,DX*2/3)
    }
    numberline.onDecrement = ()=>{
      currentDenominator = currentDenominator - 1
      generatorTag.fraction.draw(0,currentDenominator,DX*2/3)
      tagOnDeck.fraction.draw(0,currentDenominator,DX*2/3)
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

    newTagOnDeck()

    /*
    let labels = ['?','?','?']
    for (let i = 0;i<5;i++){
      let newTag = new FractionTag(0,numberline.denominator,dx)
      newTag.fraction.draw(0,4,dx*2/3)
      newTag.x = numberline.x - newTag.width/2
      newTag.y = numberline.y - 2*newTag.height
      newTag.on('pointermove',tagPointerMove)
      newTag.on('pointerdown',tagPointerDown)
      newTag.on('pointerup',tagPointerUp)
      newTag.on('pointerupoutside',tagPointerUp)
      newTag.label = labels[i]
      newTag.whiskerTo(Math.abs(newTag.y-numberline.y),numberline.y,hidden)
      app.stage.addChild(newTag)
      tags.push(newTag)
    }

    activeTag = tags[0]
    */

    numberline.addChild(numberline.pin)
    background.zIndex = -1
    numberline.zIndex = 1

    feedBlocks = new FeedBlocks(app,numberline._width)
    app.stage.addChild(feedBlocks)
    feedBlocks.x = numberline.x 
    feedBlocks.y = numberline.y - feedBlocks.height
    feedBlocks.hide()
    console.log("numberline wh9ole",numberline.whole)
    //feedBlocks.flash(4,3,numberline.whole,4000)

  }
  
  // Call load script
  load()
  // Not sure where else to put this.
  app.resize = (frame) => resize(frame)
  app.resizable = false
};
