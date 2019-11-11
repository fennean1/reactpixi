import * as PIXI from "pixi.js";
import * as CONST from "./const.js";
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite, TimelineMax } from "gsap/TweenMax";
const ASSETS = CONST.ASSETS

export const init = (app, setup) => {

  // Constants
  const BLUE_TEXTURE = new PIXI.Texture.from(CONST.ASSETS.BLUE_CIRCLE)
  const LINE_PERCENTAGE = 0.8
  const PIN_TEXTURE = new PIXI.Texture.from(ASSETS.SHARP_PIN)
  const MEASURE_PIN_TEXTURE = new PIXI.Texture.from(ASSETS.MEASURE_PIN)

// Global Vars 
  let Features = setup.props.features ? setup.props.features : null
  let FirstRow;
  let Background;
  let ActiveID;
  let Dragging;
  let ActiveRow;

  const labels = {
    1: "One Whole",
    2: "One Half",
    3: "One Third",
    4: "Fourth",
    5: "5th",
    6: "6th",
    7: "7th",
    8: "8th",
    9: "9th",
    10: "10th",
    11: "11th",
    12: "12th"
  };


  // Layout Parameters
  let WINDOW_WIDTH = setup.width
  let WINDOW_HEIGHT = setup.height
  let BAR_HEIGHT = WINDOW_HEIGHT/15
  let BAR_WIDTH = WINDOW_WIDTH*0.8
  let WALL_START_X = WINDOW_WIDTH/2 - BAR_WIDTH/2
  let WALL_START_Y = 2*BAR_HEIGHT 
  let ANCHORS = []
  let ROWS = []

  function makeBackground(){
    // Setup Background
    this.sprite = new PIXI.Sprite.from(CONST.ASSETS.BLUE_GRADIENT);
    this.sprite.width = WINDOW_WIDTH
    this.sprite.height = WINDOW_HEIGHT
    this.sprite.x = 0;
    this.sprite.y = 0;
    this.sprite.on('pointerup',globalPointerUp)
    this.sprite.interactive = true

    app.stage.addChild(this.sprite)

    this.draw = () => {
        this.sprite.width = WINDOW_WIDTH
        this.sprite.height = WINDOW_HEIGHT
    }
  }

  class Row extends PIXI.Container {

    constructor(num,den,width,ID) {
      super()

      // This
      this.interactive = true

        // Default values
      this.numerator = num
      this.denominator = den
      this.trueWidth = width
      this.id = ID
      this.sprites = []
      this.blockWidth = width / this.denominator


      // Init Graphics A
      this.graphicsA = new PIXI.Graphics()
      this.graphicsA.beginFill(0xffffff)
      this.graphicsA.lineStyle(3,0x000000) 
      this.graphicsA.drawRoundedRect(0,0,this.blockWidth,BAR_HEIGHT,1)
      this.textureA = app.renderer.generateTexture(this.graphicsA)

      // Init Graphics B
      this.graphicsB  = new PIXI.Graphics()
      this.graphicsB.beginFill(0xff4772)
      this.graphicsB.lineStyle(3,0x000000) 
      this.graphicsB.drawRoundedRect(0,0,this.blockWidth,BAR_HEIGHT,1)
      this.textureB = app.renderer.generateTexture(this.graphicsB)

      // Dummy frame for when animating between different fractional parts.
      this.frameGraphics = new PIXI.Graphics()    
  
      // Generate Row
      for (let i = 0;i<this.denominator;i++) {
        let label = new PIXI.Text()
        label.text = labels[this.denominator]
        label.alpha = 0
        label.anchor.set(0.5)
        label.x = this.blockWidth/2
        label.y = BAR_HEIGHT/2
        let s = new PIXI.Sprite.from(this.textureA)
        s.on('pointerdown',this.spritePointerDown)
        s.on('pointerup',this.spritePointerUp)
        s.on('pointermove',this.spritePointerMoved)
        s.interactive = true
        s.buttonMode = true
        s.active = false
        s.x = i*BAR_WIDTH/this.denominator
        s.y = 0
        s.addChild(label)
        s.label = label
        this.sprites.push(s)
        this.addChild(s)
      }
            //  Attached methods
      this.on('pointerdown',this.pointerDown)
      this.on('pointerup',this.pointerUp)
      this.on('pointermove',this.pointerMove)

    }

    reset() {
      this.sprites.forEach(s=>{s.touched = false})
    }

  

    incDenonimator = (inc) => {
      this.frameGraphics.clear()
      this.frameGraphics.lineStyle(3,0x000000) 
      this.frameGraphics.drawRoundedRect(0,0,this.width-3,BAR_HEIGHT,1)
      const frameTexture = app.renderer.generateTexture(this.frameGraphics)
      
      // New sprite starts as frame and then gets animated.
      let s = new PIXI.Sprite(frameTexture)
      this.addChild(s)
      s.x  = 0
      const onUpdate = ()=>{this.draw()}
      if (inc > 0){
        const onComplete = ()=>{
          s.on('pointerdown',this.spritePointerDown)
          s.on('pointerup',this.spritePointerUp)
          s.on('pointermove',this.spritePointerMoved)
          s.interactive = true
          s.active = false
          this.sprites.push(s)
        }
        TweenMax.to(this, 0.25, {denominator: this.denominator+1,onUpdate: onUpdate,onComplete: onComplete})
      } else if (inc < 0) {
        let removeme  = this.sprites.pop()
        this.removeChild(removeme)
        const onComplete = ()=>{
          this.removeChild(s)
          this.sprites.forEach(s=>{
            s.label.x = this.width/this.denominator/2
            s.label.text = labels[this.denominator]})
        }
        TweenMax.to(this, 0.25, {denominator: this.denominator-1,onUpdate: onUpdate,onComplete: onComplete})
      }
    }

    draw(width) {

      if (width) {
        this.trueWidth = width
      }

      console.log(this)

      this.blockWidth = (this.trueWidth)/this.denominator

      this.graphicsA.clear()
      this.graphicsA.beginFill(0xffffff)
      this.graphicsA.lineStyle(3,0x000000) 
      this.graphicsA.drawRoundedRect(0,0,this.blockWidth,BAR_HEIGHT,1)
      this.textureA = app.renderer.generateTexture(this.graphicsA)

      this.graphicsB.clear()
      this.graphicsB.beginFill(0xff4772)
      this.graphicsB.lineStyle(3,0x000000) 
      this.graphicsB.drawRoundedRect(0,0,this.blockWidth,BAR_HEIGHT,1)
      this.textureB = app.renderer.generateTexture(this.graphicsB)

      for (let i = 0;i<this.sprites.length;i++){
        if (this.sprites[i].active){
          this.sprites[i].texture = this.textureA
        } else {
          this.sprites[i].texture = this.textureB
        }

        this.sprites[i].x = this.blockWidth*i
        this.sprites[i].y = 0
      }
    }

    spritePointerDown(event){
      this.touched = true
      this.dragged = false
    }

    spritePointerMoved(event) {
      if (this.touched){
        console.log("pointermove")
        this.dragged = true
      }
    }

    spritePointerUp(event){
      console.log("spritepointerup")
         this.touched = false
         console.log('this.draggeed',this.dragged)
     if (!this.parent.dragged && !Dragging) {
        this.dragged = false
        this.active = !this.active
        this.alpha = 0.2
        this.texture = this.active ? this.parent.textureB : this.parent.textureA
        this.label.alpha = this.active ? 1 : 0
        TweenLite.to(this,0.4,{alpha: 1})
       }
    }

 
   pointerDown(event) {
      app.stage.addChild(this)
      ActiveRow = this
      ActiveID = this.id
      this.data = event.data
      this.startIndex = Math.round((this.y-WALL_START_Y)/BAR_HEIGHT)
      this.startWidth = this.width
      this.dragStartY = event.data.global.y
      this.touching = true
      this.deltaTouch = {
        x: this.x - event.data.global.x,
        y: this.y - event.data.global.y
      }
    }
  
  
 
   pointerUp(event) {
    if (this.dragged){
      let j = this.startIndex
      let i = Math.round((this.y-WALL_START_Y)/BAR_HEIGHT)
      ROWS.splice(j,1)
      ROWS.splice(i,0,this)
      ROWS.forEach((r,i)=> {
        TweenLite.to(r,0.2,{y: ANCHORS[i]+WALL_START_Y})
      })
    } 
      this.reset()
      this.dragged = false
      Dragging = false
      this.touching = false
    }

    pointerMove(event) {
      if (this.touching){
        Dragging = true
        this.y = event.data.global.y + this.deltaTouch.y
        this.dragged = true
      }
    }
  }



  function globalPointerUp(){
    ActiveRow.pointerUp()
    Dragging = false
    ROWS.forEach(r=>{
      r.dragged = false
      r.touched = false
      r.sprites.map(s=>{
        s.dragged = false
        s.touched = false})
    })
  }
  
  // Called on resize
  function resize(newFrame,flex){
    // Make sure all layout parameters are up to date.
    updateLayoutParams(newFrame)
    //Row.draw()
  }

  function updateLayoutParams(newFrame){
    let frame;
    if (newFrame){
      frame = newFrame
    } else {
      frame = {width: WINDOW_WIDTH,height: WINDOW_HEIGHT}
    }
  }


  // Loading Script
  function load(){
    let rows = [1,2,3,4,5,6,7,8,9,10,11,12]
    if (Features){
        rows = Features.values 
    } 


    Background = new makeBackground()
    for (let i = 0;i<rows.length;i++){
      let newRow = new Row(0,rows[i],BAR_WIDTH,0)
      newRow.y = i*BAR_HEIGHT + WALL_START_Y
      newRow.x = WALL_START_X
      ANCHORS.push(i*BAR_HEIGHT)
      console.log("i*barHeight",i*BAR_HEIGHT)
      ROWS.push(newRow)
      app.stage.addChild(newRow)
    }
  }

  // Functions attached to app: (need to be destroyed)
  app.resize = (frame) => resize(frame)
  app.resizable = true

  load()
};
