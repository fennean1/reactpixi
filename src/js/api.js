import * as PIXI from "pixi.js";
import * as CONST from "./const.js";
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite, TimelineMax } from "gsap/TweenMax";
import { thisExpression } from "@babel/types";



export class Row extends PIXI.Container{
  constructor(){
    super()
  }
}


export class FractionFrame extends PIXI.Container {
  constructor(width,height,den,app,vertical,secondColor,descriptor){

   super()
     // State
     this.value = 0
     // Placeholders
     this.BAR_HEIGHT = 200
     this.LINE_WIDTH = 4
     this.BTN_WIDTH = width/4
     this.DESCRIPTOR_WIDTH = width/3

     // Default values
     this.numerator = 0
     this.denominator = den
     this._width = width
     this._height = height
     this.app = app
     this.sprites = []
     this.vertical = vertical
     this.blockDim = this.vertical ?  height / this.denominator :  width / this.denominator
     this.activated = true
     this.interactive = true
     this.color = secondColor ? secondColor : 0xFFFFFF

     this.descriptor = new Fraction(1,2,this.DESCRIPTOR_WIDTH)
     this.descriptor.interactive = false
     this.descriptor.x = this._width/2 - this.descriptor.width/2
     this.descriptor.y = -1.2*this.descriptor.height
     this.descriptor.on('pointerdown', this.grabberPointerDown)
     this.descriptor.on('pointermove', this.grabberPointerMove)
     this.descriptor.on('pointerup', this.grabberPointerUp)
     this.descriptor.on('pointerupoutside', this.grabberPointerUp)
     this.descriptor.draw(this.numerator,this.denominator,this.DESCRIPTOR_WIDTH)

    if (descriptor){
      this.addChild(this.descriptor)
    }

 
     this.plusBtn = new PIXI.Sprite.from(CONST.ASSETS.PLUS_SQUARE)
     this.plusBtn.anchor.set(0.5)
     this.plusBtn.interactive = true
     this.plusBtn.width = this.BTN_WIDTH
     this.plusBtn.height = this.plusBtn.width
     this.plusBtn.x = 3 / 4 * this._width
     this.plusBtn.y = this._height + 1.5 * this.plusBtn.width / 2
     this.plusBtn.on('pointerdown', () => {
       console.log("hello")
       this.incDenominator(1)
     })
     this.addChild(this.plusBtn)
 
  
 
     this.minusBtn = new PIXI.Sprite.from(CONST.ASSETS.MINUS_SQUARE)
     this.minusBtn.anchor.set(0.5)
     this.minusBtn.interactive = true
     this.minusBtn.width = this.BTN_WIDTH
     this.minusBtn.height = this.minusBtn.width
     this.minusBtn.x = 1 / 4 * this._width
     this.minusBtn.y = this._height + 1.5 * this.minusBtn.width / 2
     this.minusBtn.anchor.set(0.5)
     this.minusBtn.on('pointerdown', () => {
       this.incDenominator(-1)
      })
     this.addChild(this.minusBtn)

     let w = this.vertical ? this._width : this.blockDim
     let h = this.vertical ? this.blockDim : this._height

     this.blockA = new PIXI.Graphics()
     this.blockA.lineStyle(3,0x000000) 
     this.blockA.drawRoundedRect(0,0,w,h,1)
     this.myA = this.app.renderer.generateTexture(this.blockA)
   
     this.blockB = new PIXI.Graphics()
     this.blockB.beginFill(this.color)
     this.blockB.lineStyle(3,0x000000) 
     this.blockB.drawRoundedRect(0,0,w,h,1)
     this.myB = this.app.renderer.generateTexture(this.blockB)
   
     this.g = new PIXI.Graphics()
     
       //  Attached methods
    this.on('pointerdown',this.containerPointerDown)
    this.on('pointerup',this.containerPointerUp)
    this.on('pointerupoutside',this.containerPointerUp)
    this.on('pointermove',this.containerPointerMove)
  
    for (let i = 0;i<this.denominator;i++) {
      let s = new PIXI.Sprite.from(this.myA)
      s.on('pointerdown',this.spritePointerDown)
      s.on('pointerup',this.spritePointerUp)
      s.on('pointermove',this.spritePointerMoved)
      s.interactive = true
      s.active = false
      s.x = i*this.LINE_WIDTH/this.denominator
      this.sprites.push(s)
      this.addChild(s)
    }
      
      this.draw()
  } 
  
    incDenominator = (inc) => {
    if (this.denominator + inc >= 1) {
      this.g.clear()
      this.g.lineStyle(3,0x000000) 
      this.g.drawRoundedRect(0,0,this._width,this._height,1)
      let R = this.app.renderer.generateTexture(this.g)
      let s = new PIXI.Sprite()
      this.addChild(s)
      s.texture = R
      s.x  = 0
      this.plusBtn.interactive = false
      this.minusBtn.interactive = false
  
      if (inc > 0){
        const onComplete = ()=>{
          s.on('pointerdown',this.spritePointerDown)
          s.on('pointerup',this.spritePointerUp)
          s.on('pointermove',this.spritePointerMoved)
          s.interactive = true
          this.sprites.push(s)
          this.draw()
          this.plusBtn.interactive = true
          this.minusBtn.interactive = true
        }
        TweenMax.to(this, 0.25, {denominator: this.denominator+1,onUpdate: this.draw,onComplete: onComplete})
      } else if (inc < 0) {
        let removeme  = this.sprites.pop()
        this.removeChild(removeme)
        const onComplete = ()=>{
          this.draw()
          this.removeChild(s)
          this.plusBtn.interactive = true
          this.minusBtn.interactive = true
        }
        TweenMax.to(this, 0.25, {denominator: this.denominator-1,onUpdate: this.draw,onComplete: onComplete})
      }
     }
     setTimeout(()=>{
       this.numerator = this.sprites.reduce((acc,s)=>{
      console.log("active?",s)
     let count = s.active ? 1 : 0 
     console.log("count",count)
     return count+acc},0)
    this.denominator = Math.round(this.denominator)
    this.descriptor.draw(this.numerator,this.denominator,this.DESCRIPTOR_WIDTH)
    },300)

    }
  
    draw = (width) => {
      if (width) {
        this._width = width
      }
      this.blockDim =  this.vertical ?  this._height / this.denominator :  this._width / this.denominator

      let w = this.vertical ? this._width : this.blockDim
      let h = this.vertical ? this.blockDim : this._height

      this.blockA.clear()
      this.blockA.lineStyle(3,0x000000) 
      this.blockA.drawRoundedRect(0,0,w,h,1)
      this.myA = this.app.renderer.generateTexture(this.blockA)
    
      this.blockB.clear()
      this.blockB.beginFill(this.color)
      this.blockB.lineStyle(3,0x000000) 
      this.blockB.drawRoundedRect(0,0,w,h,1)
      this.myB = this.app.renderer.generateTexture(this.blockB)

  
      for (let i = 0;i<this.sprites.length;i++){
        this.sprites[i].myA = this.myA
        this.sprites[i].myB = this.myB
        if (this.sprites[i].active){
          this.blockB.clear()
          this.blockB.beginFill(this.sprites[i].myColor)
          this.blockB.lineStyle(3,0x000000) 
          this.blockB.drawRoundedRect(0,0,w,h,1)
          let thisB = this.app.renderer.generateTexture(this.blockB)
          this.sprites[i].texture = thisB
        } else {
          this.sprites[i].myColor = this.color
          this.sprites[i].texture = this.myA
        }
  
        if (this.vertical){
          this.sprites[i].x = 0
          this.sprites[i].y = this._height - this.blockDim*(i+1)
        } else {
          this.sprites[i].x = this.blockDim*i
          this.sprites[i].y = 0
        }

      }
    }

    grabberPointerDown(){

    }
  
    grabberPointerMove(){
      
    }
  
    grabberPointerUp(){
      
    }
  
  
    spritePointerDown(event){
      this.touched = true
      this.dragged = false
    }
  
    spritePointerMoved(event) {
  
      if (this.touched){
        this.dragged = true
      }
    }
  
    spritePointerUp(event){
      // previously "activated"
      console.log("even.parent",this.parent.activated)
     if (!this.dragged && this.touched && this.parent.activated) {
        this.dragged = false
        this.active = !this.active
        this.alpha = 0.2
        this.texture = this.active ? this.myB : this.myA
        this.myColor = this.parent.color
        TweenLite.to(this,0.1,{alpha: 1})
        if (this.active){
          this.parent.numerator +=1
        } else {
          this.parent.numerator -=1
        }
       }
       this.parent.descriptor.draw(this.parent.numerator,this.parent.denominator,this.parent.DESCRIPTOR_WIDTH)
       this.touched = false
    }
  
  
    containerPointerDown(event) {
      this.data = event.data
      this.startWidth = this.width
      this.dragStartY = event.data.global.y
      this.touching = true
      this.deltaTouch = {
        x: this.x - event.data.global.x,
        y: this.y - event.data.global.y
      }
    }
  
    containerPointerUp(event) {
      this.touching = false
      this.activated = true
    }
  
    containerPointerMove(event) {
  
      if (this.touching){
        this.y = this.lockY ? this.y : event.data.global.y + this.deltaTouch.y
        this.x = event.data.global.x + this.deltaTouch.x
        this.dragged = true
      }
    }
  }
  
  
  
 
export function VerticalRow(num,den,width,app){

  // Internal Params
  let touching = true   
  let containerMoving = false
  let activated = true
  this.value = 0

  // Placeholders
  let BAR_HEIGHT = 50
  let LINE_WIDTH = 4
  let LINE_MAX = 20
  let LINE_START = 0

  // Default values
  this.numerator = num
  this.denominator = den
  this.width = width

  this.container = new PIXI.Container()
  this.container.width = width
  this.container.interactive = true
  this.container.y = 0
  this.container.x = 0
  this.sprites = []


  this.blockWidth = width / this.denominator

  this.blockA = new PIXI.Graphics()
  this.blockA.lineStyle(3,0x000000) 
  this.blockA.drawRoundedRect(0,0,this.blockWidth,BAR_HEIGHT,1)
  let myA = app.renderer.generateTexture(this.blockA)

  this.blockB = new PIXI.Graphics()
  this.blockB.beginFill(0xff4772)
  this.blockB.lineStyle(3,0x000000) 
  this.blockB.drawRoundedRect(0,0,this.blockWidth,BAR_HEIGHT,1)
  let myB = app.renderer.generateTexture(this.blockB)

  let g = new PIXI.Graphics()    

  this.incDenonimator = (inc) => {
  if (this.denominator + inc >= 1) {
    console.log("shouldn't exectuve if this.denominator is equal to 1",this.denominator)
    g.clear()
    g.lineStyle(3,0x000000) 
    g.drawRoundedRect(0,0,this.width,BAR_HEIGHT,1)
    let R = app.renderer.generateTexture(g)
    let s = new PIXI.Sprite()
    this.container.addChild(s)
    s.texture = R
    s.x  = 0

    if (inc > 0){
      const onComplete = ()=>{
        s.on('pointerdown',spritePointerDown)
        s.on('pointerup',spritePointerUp)
        s.on('pointermove',spritePointerMoved)
        s.interactive = true
        s.active = false
        this.sprites.push(s)
        this.draw()
      }
      TweenMax.to(this, 0.25, {denominator: this.denominator+1,onUpdate: this.draw,onComplete: onComplete})
    } else if (inc < 0) {
      let removeme  = this.sprites.pop()
      this.container.removeChild(removeme)
      const onComplete = ()=>{
        this.draw()
        this.container.removeChild(s)
      }
      TweenMax.to(this, 0.25, {denominator: this.denominator-1,onUpdate: this.draw,onComplete: onComplete})
    }
   }
  }

  this.setValue = ()=> {
    //this.value = Math.round(this.width/LINE_WIDTH*state.lineMax)
    console.log("this.value",this.value)
  }

  this.draw = (width) => {

    if (width) {
      this.width = width
    }
    this.blockWidth = this.width/this.denominator

    this.blockA.clear()
    this.blockA.lineStyle(3,0x000000) 
    this.blockA.drawRoundedRect(0,0,this.blockWidth,BAR_HEIGHT,1)
    myA = app.renderer.generateTexture(this.blockA)

    this.blockB.clear()
    this.blockB.beginFill(0xff4772)
    this.blockB.lineStyle(3,0x000000) 
    this.blockB.drawRoundedRect(0,0,this.blockWidth,BAR_HEIGHT,1)
    myB = app.renderer.generateTexture(this.blockB)

    for (let i = 0;i<this.sprites.length;i++){
      if (this.sprites[i].active){
        this.sprites[i].texture = myB
      } else {
        this.sprites[i].texture = myA
      }

      this.sprites[i].x = this.blockWidth*i
      this.sprites[i].y = 0
    }
  }

  for (let i = 0;i<this.denominator;i++) {
    let s = new PIXI.Sprite.from(myA)
    s.on('pointerdown',spritePointerDown)
    s.on('pointerup',spritePointerUp)
    s.on('pointermove',spritePointerMoved)
    s.interactive = true
    s.active = false
    s.x = i*LINE_WIDTH/this.denominator
    this.sprites.push(s)
    this.container.addChild(s)
  }
    

  //  Attached methods
  this.container.on('pointerdown',containerPointerDown)
  this.container.on('pointerup',containerPointerUp)
  this.container.on('pointermove',containerPointerMove)

  // Add children
  app.stage.addChild(this.container)
  this.width = this.container.width


  function spritePointerDown(event){
    this.touched = true
    this.dragged = false
  }

  function spritePointerMoved(event) {

    if (this.touched){
      this.dragged = true
    }
  }

  function spritePointerUp(event){
   if (!this.dragged && activated && this.touched) {
      this.dragged = false
      this.active = !this.active
      this.alpha = 0.2
      this.texture = this.active ? myB : myA
      TweenLite.to(this,0.1,{alpha: 1})
     }
     this.touched = false
  }


 function containerPointerDown(event) {
    app.stage.addChild(this)
    this.data = event.data
    this.startWidth = this.width
    this.dragStartY = event.data.global.y
    this.touching = true
    touching = true
    this.deltaTouch = {
      x: this.x - event.data.global.x,
      y: this.y - event.data.global.y
    }
  }

 function containerPointerUp(event) {
    this.touching = false
    touching = false
  }

  function containerPointerMove(event) {

    if (this.touching){
      this.y = event.data.global.y + this.deltaTouch.y
      this.x = event.data.global.x + this.deltaTouch.y
      this.dragged = true
    }
  }
  this.draw(width)
}


export class FeedBlocks extends PIXI.Container {
  constructor(app,width){
    super()
    this.blocks = []
    this.width = width
    this.height = width/30
    this.app = app
    this.denominator = 1
    this.feedBlockTimeline = new TimelineLite({paused: true})
    this.init()
  }

  init(){
    for (let i = 0;i<100;i++){
      let newFeedBlock = new PIXI.Graphics()
      newFeedBlock.lineStyle(2,0x000000)
      newFeedBlock.beginFill(CONST.COLORS.BLUE)
      newFeedBlock.drawRoundedRect(0,0,100,30,0)

      let newTexture = this.app.renderer.generateTexture(newFeedBlock)
      let newFeedBlockSprite = new PIXI.Sprite.from(newTexture)
      newFeedBlockSprite.alpha = 0
      this.addChild(newFeedBlockSprite)
      this.blocks.push(newFeedBlockSprite)
      newFeedBlock.destroy(true)
    }
  }

  showTo(n){
    this.blocks.forEach((b,i)=>{
      if (i<n){
        b.alpha = 1
      } else {
        b.alpha = 0
      }
    })
  }

  resize(whole,den) {
    let _width
    if (den){
      _width = whole/den
      this.denominator = den
    } else {
      _width = whole/this.denominator
    }
    this.blocks.forEach((b,i)=>{
      b.width = _width
      b.x = i*_width
    })
  }

  flash(num,den,whole,duration){ 
    this.hide()
    let width = whole/den
    this.denominator = den
    for (let i = 0;i<num;i++){
      let block = this.blocks[i]
      block.width = width 
      block.x = i*width
      TweenLite.to(block,1,{alpha: 1})
      setTimeout(()=>{TweenLite.to(block,1,{alpha: 0})},duration)
    }
  }

  hide(){
    this.blocks.map(b=>{b.alpha = 0})
  }

}

export class Draggable extends PIXI.Sprite {
  constructor(texture){
    super()
    this.dragged = false
    this.touching = false
    this.interactive = true
    this.lockX = false 
    this.lockY = false
    this.texture = texture
    this.on('pointerdown',this.pointerDown)
    this.on('pointermove',this.pointerMove)
    this.on('pointerup',this.pointerUp)
    this.on('pointerupoutside',this.pointerUpOutside)
  }

  pointerDown(event){
    console.log("Draggable Pointer Down")
    this.touching = true
    this.dragged = false
    this.deltaTouch = {
      x: this.x - event.data.global.x,
      y: this.y - event.data.global.y
    }
  }

  
  pointerMove(event){
    if (this.touching){
      if (!this.lockX){
        this.x = event.data.global.x + this.deltaTouch.x
      } 
      if (!this.lockY){
        this.y = event.data.global.y + this.deltaTouch.y
      }
      this.dragged = true
    }
  }

  pointerUp(event){
    this.touching = false
  }
  
  pointerUpOutside(event){
    this.touching = false
  }
}

export function distance(a,b){
  let dx = a[0] - b[0]
  let dy = a[1] - b[1]
  let dx2 = dx*dx 
  let dy2 = dy*dy
  return Math.sqrt(dx2+dy2)
}


export class FractionTag extends PIXI.Container{

  constructor(num,den,width){
    super()
    this.dragged = false
    this.touching = false
    this.tipped = true
    this.interactive = true
    this.lockX = false 
    this.lockY = false
    this.fraction = new Fraction(num,den,width)
    this.fraction.includeTag()
    this.whisker = new PIXI.Graphics()
    this.whisker.lineStyle(2,0x000000)
    this.whisker.lineTo(0,20)
    this.partitionIndicator = new PIXI.Graphics()
    this.partitionIndicator.beginFill(0x000000)
    this.partitionIndicator.drawRoundedRect(0,0,width/15,width/2,0)
    this.addChild(this.partitionIndicator)
    this.addChild(this.whisker)
    this.addChild(this.fraction)

    this.on('pointerdown',this.pointerDown)
    this.on('pointermove',this.pointerMove)
    this.on('pointerup',this.pointerUp)
    this.on('pointerupoutside',this.pointerUpOutside)

    this.partitionIndicator.x = this.width/2 - 1.5

  }

  redraw(width,height){
    this.partitionIndicator.clear()
    this.partitionIndicator.beginFill(0x000000)
    this.partitionIndicator.drawRoundedRect(0,0,width/10,height,0)
  }



  setTip(tip){
    
    if (tip){
      this.partitionIndicator.alpha = 1
    } else {
      this.partitionIndicator.alpha = 0
    }
    this.tipped = tip
  }

  pointerDown(event){
    console.log("pointerdown")
    this.touching = true
    this.dragged = false
    this.deltaTouch = {
      x: this.x - event.data.global.x,
      y: this.y - event.data.global.y
    }
  }

  whiskerTo(length,numberlineY,hide){
    this.partitionIndicator.x = this.width/2

    // FEATURE
    if (this.y < numberlineY){
      this.whisker.x = this.width/2
      this.whisker.y = this.fraction.height
      this.whisker.height = length - this.fraction.height
      this.partitionIndicator.x = this.width/2-this.partitionIndicator.width/2
      this.partitionIndicator.y = length - this.partitionIndicator.height/2
    } else {
      if (hide) {
        this.fraction.hide("")
      }
      this.partitionIndicator.y = -length - this.partitionIndicator.height/2
      this.partitionIndicator.x = this.width/2-this.partitionIndicator.width/2
      this.whisker.height = -length
      this.whisker.x = this.width/2
      this.whisker.y = 0
    }
  }

  
  pointerMove(event){
    if (this.touching){
      if (!this.lockX){
        this.x = event.data.global.x + this.deltaTouch.x
      } 
      if (!this.lockY){
        this.y = event.data.global.y + this.deltaTouch.y
      }
      this.dragged = true
    }
  }

  pointerUp(event){
    this.touching = false
  }
  
  pointerUpOutside(event){
    this.touching = false
  }
}

export class Fraction extends PIXI.Container {
  constructor(n,d,w,color){
    super()
    this._width = w
    this.numerator = n+""
    this.denominator = d+""
    this.makeWhole = false
    this.numDigits = this.numerator.length
    this.denDigits = this.denominator.length 
    this.maxDigits = 2
    this.fontSize = w/(this.maxDigits)
    this.compression = 0.9
    this.lineCompression = 20
    this.dragged = false
    this.touching = false
    this.interactive = true
    this.lockX = false 
    this.lockY = false
    this.tagColor = color ? color : "0xffffff"
    this.tag = new PIXI.Graphics()
    this.tag.beginFill(color)
    this.tag.drawRoundedRect(0,0,w,2*w,1)

    if (this.maxDigits == 3){
      this.compression = 1.5
      this.lineCompression = 30
    } else if (this.maxDigits == 2){
      this.compression = 1.3
      this.lineCompression = 25
    }

    // Numerator
    this.N = new PIXI.Text()
    this.N.anchor.x = 0.5
    this.N.x = this._width/2
    this.N.y = 0
    this.N.text = n
    this.N.style.fontSize = this.fontSize
    this.addChild(this.N)

    // Denominator
    this.D = new PIXI.Text()
    this.D.anchor.x = 0.5
    this.D.x = this._width/2
    this.D.y = this.height
    this.D.text = d
    this.D.style.fontSize = this.fontSize
    this.addChild(this.D)

    // Mid Line
    this.L = new PIXI.Graphics()
    this.L.lineStyle(this._width/this.lineCompression,0x000000)
    this.L.lineTo(this._width,0)
    this.L.y = this.height/2
    this.addChild(this.L)

    this.draw(n,d,w)
  }

  includeTag() {
      this.addChild(this.tag)
      this.addChild(this.L)
    }

  hide(mark){
    this.N.text = "?"
    this.D.text = "?"
  }

  makeDraggable() {
    this.on('pointerdown',this.pointerDown)
    this.on('pointermove',this.pointerMove)
    this.on('pointerup',this.pointerUp)
    this.on('pointerupoutside',this.pointerUpOutside)  
  }


  pointerDown(event){
    this.touching = true
    this.dragged = false
    this.deltaTouch = {
      x: this.x - event.data.global.x,
      y: this.y - event.data.global.y
    }
  }

  
  pointerMove(event){
    if (this.touching){
      if (!this.lockX){
        this.x = event.data.global.x + this.deltaTouch.x
      } 
      if (!this.lockY){
        this.y = event.data.global.y + this.deltaTouch.y
      }
      this.dragged = true
    }
  }

  pointerUp(event){
    this.touching = false
  }
  
  pointerUpOutside(event){
    this.touching = false
  }

  draw(n,d,_w){

    this.numerator = n+""
    this.denominator = d+""

    if (this.numerator%this.denominator == 0 && this.makeWhole){
      this.numerator = this.numerator/this.denominator
      this.denominator = 1
    }

    this.numDigits = this.numerator.length
    this.denDigits = this.denominator.length 
    this.maxDigits = Math.max(this.numDigits,this.denDigits)
    this.minDigits = Math.min(this.numDigits,this.denDigits)
    this.fontSize = _w/2
    this.compression = 0.9

    if (this.maxDigits == 3){
      this.compression = 1.5
      this.lineCompression = 30
    } else if (this.maxDigits == 2){
      this.compression = 1.3
      this.lineCompression = 25
    } else if (this.maxDigits == 1) {
      this.compression = 1.3
      this.lineCompression = 15
      _w = _w/1.5
    }

    if (this.denominator == 1){
      this.L.alpha = 0
      this.D.alpha = 0
      this.fontSize = _w
    } else {
      this.L.alpha = 1
      this.D.alpha = 1
    }
    
    // Numerator
    this.N.x = _w/2
    this.N.y = 0
    this.N.style.fontSize = this.fontSize*this.compression
    this.N.text = this.numerator
    this.addChild(this.N)

    // Denominator
    this.D.x = _w/2
    this.D.y = this.N.height
    this.D.style.fontSize = this.fontSize*this.compression
    this.D.text = this.denominator
    this.addChild(this.D)

    // Line
    this.L.clear()
    this.L.lineStyle(_w/this.lineCompression,0x000000)
    this.L.lineTo(_w,0)
    this.L.y = this.N.height

    this.tag.clear()
    this.tag.beginFill(this.tagColor)
    this.tag.drawRoundedRect(0,0,this.width,this.height,4)

  }
}

export class DraggablePoly extends Draggable {
  constructor(points,app){


    let xS = points.map(p=> p[0])
    let yS = points.map(p=> p[1])
    let minX = Math.min(...xS)
    let minY = Math.min(...yS)

    let flatPolygon = []
    points.forEach(p=>{
      flatPolygon.push(p[0]-minX)
      flatPolygon.push(p[1]-minY)
    })
    let DUMMY = 100
    let a = polygonArea(points)/DUMMY
    let f = decimalToFrac(a)
   
    var graphics = new PIXI.Graphics();
    graphics.beginFill(0xff3b55);
    graphics._fillStyle.alpha = 0.85
    graphics.lineStyle(2,0xffffff)
    graphics.drawPolygon(flatPolygon);
    graphics.endFill();

    var graphicsB = new PIXI.Graphics();
    graphicsB.beginFill(0x1291db);
    graphicsB._fillStyle.alpha = 0.85
    graphicsB.lineStyle(2,0xffffff)
    graphicsB.drawPolygon(flatPolygon);
    graphicsB.endFill();

    let t = app.renderer.generateTexture(graphics)
    let tb = app.renderer.generateTexture(graphicsB)
 
    // Construct Super
    super(t)

    this.hitArea = new PIXI.Polygon(flatPolygon)
    this.points = points
    this.textureA = t
    this.textureB = tb
    this.rotated = false
    this.pivot.x = this.width/2
    this.pivot.y = this.height/2
    this.x = minX + this.width/2
    this.y = minY + this.height/2
    this.interactive = true
    this.on('pointerdown',this.polyPointerDown)
    this.on('pointerup',this.polyPointerUp)
    this.on('pointermove',this.polyPointerMove)
    this.on('pointerleave',this.polyPointerLeave)
  }

  polyPointerLeave(){
  }

  
  polyPointerDown(){
  
  }

  polyPointerMove(){
   
  }

  // Extracts the global location of the points from the hit area.
  getPolyPoints(){
    let w = this.width 
    let h = this.height
    let originX = this.x - this.width/2
    let originY = this.y - this.height/2
    let xS = []
    let yS = []

    // Extract x and y
    this.hitArea.points.forEach((e,i)=>{
    if (i%2 == 1){
        yS.push(e)
      } else {
        xS.push(e)
      }
    })

    // Zip x and y
    let polyPoints = xS.map((x,i) =>{
      return [x,yS[i]]
    })

    // Rotate
    polyPoints = polyPoints.map(p=>{return rotatePoint(p[0]-this.width/2,p[1]-this.height/2,this.rotation)})
    // Offset
    polyPoints = polyPoints.map(p=>{return [p[0]+originX+this.width/2,p[1]+originY+this.height/2]})

    return polyPoints
  }

  // I don't think I need this here.
  polyPointerUp(){
    this.getPolyPoints()
  }
}


// Helpers

function appxEq(a,b,t){
  return Math.abs(a-b) < t
}

export function decimalToFrac(dec) {
  for (let i=1;i<100;i++){
    for (let j=0;j<=i;j++){
      if (Math.abs(j/i - dec) < 0.001) {
        return [j,i]
      }
    }
  }
}

export function polygonArea(poly) {
  let xS = poly.map(p => p[0])
  let yS = poly.map(p => p[1])

   // Calculate value of shoelace formula 
   let n = poly.length
   let j = n - 1 
   let area = 0
   for (let i = 0; i < n; i++) { 
       area = area + (xS[j] + xS[i]) * (yS[j] - yS[i]);
       j = i;  // j is previous vertex to i 
   } 
 
   // Return absolute value (why over 2?)
   return Math.abs(area / 2)
} 

// Lines & Polygons

export function linesIntersect(l1,l2){
  let m1 = l1.m
  let m2 = l2.m 
  let b1 = l1.b
  let b2 = l2.b

  if (l1.vertical && l2.vertical){
    return false
  } else if (l1.horizontal && l2.horizontal){
    return false
  } else {

    let xIntersect = (b1 - b2)/(m2-m1)
    let yIntersect = null

    if (l1.vertical){ 
      yIntersect = l2.yOf(l1.x1)
      xIntersect = l1.x1
    } else if (l2.vertical){

      yIntersect = l1.yOf(l2.x1)
      xIntersect = l2.x1
    } else {
      yIntersect = l1.yOf(xIntersect)
    }

    // Chopping off decimals.
    yIntersect = Math.trunc(yIntersect*1000)/1000
    xIntersect = Math.trunc(xIntersect*1000)/1000


    // Padding 
    let p = -5
    let inYRange1 = l1.horizontal ? true : (yIntersect > l1.yMin+p) && (yIntersect < l1.yMax-p)
    let inXRange1 = l1.vertical ? true : (xIntersect > l1.xMin+p) && (xIntersect < l1.xMax-p)
    let inYRange2 = l2.horizontal ? true : (yIntersect > l2.yMin+p) && (yIntersect <= l2.yMax-p)
    let inXRange2 = l2.vertical ? true : (xIntersect > l2.xMin+p) && (xIntersect < l2.xMax-p)

    console.log("inYRange1,inXRange1,inYRange2,inXRange2",inYRange1,inXRange1,inYRange2,inXRange2)

    return (inXRange1 && inXRange2 && inYRange1 && inYRange2) && [xIntersect, yIntersect]
  } 
}

class Line {
  constructor(p1,p2){
    this.start = p1 
    this.end = p2
    this.x1  = p1[0]
    this.y1 = p1[1]
    this.x2  = p2[0]
    this.y2 = p2[1]

    this.yMax = Math.max(this.y1,this.y2)
    this.yMin = Math.min(this.y1,this.y2)
    this.xMax = Math.max(this.x1,this.x2)
    this.xMin = Math.min(this.x1,this.x2)

    this.p1 = p1
    this.p2 = p2

    this.m = (this.y2-this.y1)/(this.x2-this.x1)

    // Relaxed this criteria because its need for really steep lines (the ones for grid nodees were almost perfect so it didn't matter)
    this.vertical = Math.abs(this.m) > 100 ? true : false 
    this.horizontal = Math.abs(this.m) < 0.01 ? true : false

    this.b = this.vertical ? null : this.y1 - this.m*this.x1

  }

  yOf(x){
    return this.m*x+this.b
  }

  xOf(y){
    return (y-this.b)/this.m
  }
}

function lineContains(line,p){
  // Tolerance
  let x = p[0]
  let y = p[1]
  let t = 0.001
  if (line.vertical){
    if (appxEq(line.x1,x,t)){
      if (y>line.yMin && y < line.yMax) {
        return true
      }
    }
  } else if (line.horizontal){
    if (appxEq(line.y1,y,t)){
      if (x>line.xMin && x < line.xMax) {
        return true
      }
    }
  } else if (appxEq(line.yOf(x),y,t)) {
      console.log("calculating ranges")
      let inXRange = x > line.xMin && x < line.xMax
      let inYRange = y > line.yMin && y < line.yMax
      console.log("ranges",inXRange,inYRange)
      if (inXRange && inYRange){
        return true
      }
  } else {
    return false
  }
}

export function getIntersectionPoints(lineEndPoints,polyPoints){
  let line = new Line(lineEndPoints[0],lineEndPoints[1]) // Line
  let lines = getLinesFromPoly(polyPoints) // Array of Lines

  let intersectionPoints = []

  lines.forEach((l,i) => {
      let intersectionPoint = linesIntersect(l,line)
      intersectionPoints.push(intersectionPoint)
  })

  let filtered = intersectionPoints.filter(e=> e != false)
  console.log("intersecting points",filtered.length)
  let deduped = removeDuplicatePoints(filtered,5)
  console.log("deduped count",deduped.length)
  
  return deduped
}

export function getLinesFromPoly(poly){
  let n = poly.length
  let lines = poly.map((p,i)=>{
   // console.log("making a line")
    return new Line(p,poly[(i+1)%n])
  })
  return lines
}

export function splitMultiplePolygons(line,polys){
  let newPolys  = []
  polys.forEach(p=>{
    // Returns original polygon if it can't be split.
    let splitPoly = splitPolygon(line,p)
    newPolys.push(...splitPoly)
  })
  return newPolys
}


export function pointsApproximatelyEqual(points,tolerance){
  return distance(points[0],points[1]) < tolerance
}

export function removeDuplicatePoints(points,tolerance){
  console.log("before removal",points.length)
  let removed = []
  points.forEach(p=>{
    let addMe = true
    removed.forEach(r=>{
      if (pointsApproximatelyEqual([p,r],tolerance)){
        addMe = false
      }
    })
    if (addMe){
      removed.push(p)
    }
  })
  console.log("after removal",removed.length)
  return removed
}


export function splitPolygon(line,poly) {
  console.log("calling split polygon")

  // Make the array of lines.
  let lines = getLinesFromPoly(poly)

  // Check to make sure it was a valid cut.
  let points = getIntersectionPoints(line,poly)
  if (points.length < 2){
    return [poly]
  }

  let primaryPoly = []
  let secondaryPoly = []
  let primary = true
  let cutter = new Line(line[0],line[1])

  lines.forEach((l,i) => {
      let intersect = linesIntersect(l,cutter)
       if (primary){
         primaryPoly.push(l.start)
       } else {
         secondaryPoly.push(l.start)
       }

       if (intersect){
         if (pointsApproximatelyEqual([intersect,l.end],5)){
         } else {
           primaryPoly.push(intersect)
           secondaryPoly.push(intersect)
           primary = !primary
         }
       }
  })
  let primaryPolyDeduped = removeDuplicatePoints(primaryPoly,5)
  let secondaryPolyDeduped = removeDuplicatePoints(secondaryPoly,5)

  return [primaryPolyDeduped,secondaryPolyDeduped]
}

export function distanceFromNearestNode(x,y,dxy){
  let deltaX = Math.abs(Math.round(x/dxy)*dxy-x)
  let deltaY = Math.abs(Math.round(y/dxy)*dxy-y)
  let distance = Math.sqrt(deltaX*deltaX+deltaY*deltaY)
  console.log("distance",distance)
  return distance
}

export function rotatePoint(x,y,theta){
  let _x = x*Math.cos(theta) - y*Math.sin(theta)
  let _y = y*Math.cos(theta) + x*Math.sin(theta)
  return [_x,_y]
}

export function getIndexOfNearestVertice(vertices,dxy){
  console.log("verices",vertices)
  let distance = 100000
  let index = null
  vertices.forEach((v,i)=>{
    let x = v[0]
    let y = v[1]
    let newDistance = distanceFromNearestNode(x,y,dxy)
    if (newDistance <  distance){
      index = i
      distance = newDistance
    }
  })
  return index
}

export function getNearestNodeMetadata(nodes,point){
  let d = 1000000
  let nearestMetadata = {}
  nodes.forEach((n,i)=>{
    let x = n.x
    let y = n.y
    let newDistance = distance([x,y],point)
    //console.log("points",n.x,n.y,point[0],point[1])
    if (newDistance <  d){
      d = newDistance
      nearestMetadata.dx = point[0] - x 
      nearestMetadata.dy = point[1] - y
      nearestMetadata.distance = newDistance
    }
  })
  return nearestMetadata
}

// Number Line

export class NumberLine extends PIXI.Container {
  constructor(width,height,max,denominator){
    super()

    this.onPinDrag = ()=>{}
    this.onIncrement = () => {}
    this.onDecrement = () => {}

    this.max = max 
    this.hideFractions = false
    this.flipped = false
    this.everyOther = false
    this.denominator = denominator
    this.open = false

    // Layout parameters
    this._height = height
    this._width = width
    this.lineThickness = height/10
    this.minorTickHeight = height/1.25
    this.majorTickHeight = height
    this.dx = this._width/max
    this.whole = this.dx*this.denominator


    // Elements
    this.ticks = []
    this.labels = []

    this.line = new PIXI.Graphics()
    this.incDenominatorBtn = new PIXI.Sprite.from(CONST.ASSETS.PLUS)
    this.decDenominatorBtn = new PIXI.Sprite.from(CONST.ASSETS.MINUS)
    
    this.incDenominatorBtn.interactive = true
    this.incDenominatorBtn.on('pointerdown',()=>{this.incDenominator(1)})
    this.decDenominatorBtn.interactive = true
    this.decDenominatorBtn.on('pointerdown',()=>{this.incDenominator(-1)})

    const PIN_TEXTURE = new PIXI.Texture.from(CONST.ASSETS.MOVER_DOT)
    this.pin = new Draggable(PIN_TEXTURE)
    this.pin.lockY = true
    this.pin.anchor.set(0.5,0.5)
    this.pin.width = this._height
    this.pin.height = this._height
    this.pin.on('pointermove',()=>{
      if (this.pin.touching){
        this.onPinDrag()
        if (this.pin.x > this._width/12){
          this.set(this.pin.x)
        } else {
          this.pin.x = this._width/12
        }
      }
    })
    this.pin.on('pointerup',()=>{
      this.incDenominator(0)
      this.set(this.pin.x)
      this.addChild(this.pin)
    })
    this.pin.on('pointerupoutside',()=>{
      this.incDenominator(0)
      this.set(this.pin.x)
      this.addChild(this.pin)
    })

    /*
    this.feedBlocks = new FeedBlocks(app,this._width)
    this.addChild(feedBlocks)
    this.feedBlocks.x = this.x 
    this.feedBlocks.y = this.y - this.feedBlocks.height
    this.feedBlocks.hide()
    */


   this.addChild(this.pin)
   this.init()
  }

  hideButtons(){
    this.incDenominatorBtn.alpha = 0
    this.decDenominatorBtn.alpha = 0
  }

  init = () => {

    this.drawButtons()
    //this.incDenominatorBtn.anchor.set(0.5)
    this.addChild(this.incDenominatorBtn)

    //this.decDenominatorBtn.anchor.set(0.5)
    this.addChild(this.decDenominatorBtn)

     this.line.lineStyle(this.lineThickness,0x000000)
     this.line.x = 0
     this.line.y = 0
     this.line.lineTo(this._width,0)
     this.addChild(this.line)

     for (let i = 0;i<20;i++){
         let _x = i > this.max ? this.line.width : this.dx*i 
         let newTick = new PIXI.Graphics()
         newTick.lineStyle(this.lineThickness,0x000000)
  
         newTick.x = _x
         newTick.y = -this.minorTickHeight/2
         newTick.lineTo(0,this.minorTickHeight)
    
         this.addChild(newTick)
         this.ticks.push(newTick)

         let newLabel = new Fraction(i,this.denominator,this.dx/2)
         newLabel.makeWhole = true
         newLabel.interactive = false

         this.labels.push(newLabel)
         newLabel.x = _x - newLabel.width/2
        
         newLabel.y = this.line.y + this.minorTickHeight
         this.addChild(newLabel)
     }
     this.pin.x = this.dx*this.denominator
     this.incDenominator(0)
  }

  redraw(width,height){
    // Update layout parameters.
    this.whole = this.whole/this._width*width
    this._height = height
    this._width = width
    this.lineThickness = height/10
    this.minorTickHeight = height/2
    this.majorTickHeight = height
    this.dx = this.whole/this.denominator

    this.line.clear()
    this.line.lineStyle(this.lineThickness,0x000000)
    this.line.x = 0
    this.line.y = 0
    this.line.lineTo(this._width,0)

    this.incDenominator(0)

    /*
    this.labels.forEach((l,i)=>{
      if (this.dx*6 > this._width){
        l.draw(i,this.denominator,this._width/20)
      } else if (!this.hideFractions){
        l.draw(i,this.denominator,this.dx/2)
      } else {
        l.draw(i,this.denominator,this._height)
      }
      let _x = i*this.dx > this._width  ? this.line.width : this.dx*i 
      l.draw(l.numerator,l.denominator,this.dx/2)
      l.x = _x - l.width/2
    })
    */

    this.ticks.forEach((t,j)=>{
      let _x = j*this.dx > this._width ? this.line.width : this.dx*j
      t.clear()
      t.x = _x
      t.y = -this.minorTickHeight/2
      t.lineStyle(this.lineThickness,0x000000)
      t.lineTo(0,this.minorTickHeight)
    })
    

      // Redraw the pin
      this.pin.x = this.whole
      this.pin.y = 0

      // Redraw Inc Button
      /*
      this.incDenominatorBtn.width = this._height
      this.incDenominatorBtn.height = this._height
      this.incDenominatorBtn.x = 1.05*this._width + this.incDenominatorBtn.width
      this.incDenominatorBtn.y = 0
      */

    
      // Redraw Dec Button
      /*
      this.decDenominatorBtn.width = this._height
      this.decDenominatorBtn.height = this._height
      this.decDenominatorBtn.x = 1.05*this._width
      this.decDenominatorBtn.y = 0
      */
     this.drawButtons()

  }

  drawButtons(){
    this.incDenominatorBtn.width = this._height
    this.incDenominatorBtn.height = this._height
    this.incDenominatorBtn.x = -0.1*this._width
    this.incDenominatorBtn.y = -this._height

    this.decDenominatorBtn.width = this._height
    this.decDenominatorBtn.height = this._height
    this.decDenominatorBtn.x = -0.1*this._width
    this.decDenominatorBtn.y = 0
  }

  set(whole){
    this.whole = whole
    this.dx = whole/this.denominator
    let newMax = Math.round(this.line.width/this.dx)
    this.max = newMax
    this.ticks.forEach((e,i)=> {
      let _x = this.dx*i
       if (_x > this._width){
          e.x = this._width
          e.alpha = 0
       } else {
           e.x = _x
           e.alpha = 1
       }
    })

    this.labels.forEach((e,i)=> {
    let _x = this.dx*i
     if (_x>this._width){
         e.x = this._width
         e.alpha = 0
     } else {
         e.x = this.dx*i-e.width/2
         if (e.denominator != 1 && this.hideFractions){
           e.alpha = 0
         } else {
           e.alpha = 1
         }
     }
   })
  }

  incDenominator(inc){
    if (inc > 0){
      this.onIncrement()
    } else if (inc < 0){
      this.onDecrement()
    } 

    if(!this.open){
    
      this.denominator += inc
      this.dx = this.whole/this.denominator
      this.ticks.forEach((e,i)=> {
        let _x = this.dx*i 
        if (_x > this._width){
            TweenLite.to(e,0,{x: this._width,alpha: 0})
        } else {
            TweenLite.to(e,0.5,{x: this.dx*i,alpha: 1})
        }
      })

      this.labels.forEach((e,i)=> {
      
      // HELLO - this is some resizing logic to prevent the numbers from getting too small or two big. Duplicated in "redraw" - consider re
      if (this.dx*10 > this._width){
        e.draw(i,this.denominator,this._width/20)
      } else if (!this.hideFractions){
        console.log("greater than width!!!")
        e.draw(i,this.denominator,this.dx/2)
      } else {
        e.draw(i,this.denominator,this._height)
      }
      let _x = this.dx*i 
      if (_x > this._width){
          TweenLite.to(e,0.5,{x: this._width,alpha: 0})
      } else {
          TweenLite.to(e,0,{x: this.dx*i-e.width/2})
          if (e.denominator != 1 && this.hideFractions){
            e.alpha = 0
          } else {
            e.alpha = 1
          }
      }
    })
    }
  }
}
