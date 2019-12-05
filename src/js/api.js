import * as PIXI from "pixi.js";
import * as CONST from "./const.js";
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite, TimelineMax } from "gsap/TweenMax";
import { thisExpression } from "@babel/types";


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

export class Fraction extends PIXI.Container {
  constructor(n,d,w){
    super()
    console.log("w",w)
    this._width = w
    this.numerator = n+""
    this.denominator = d+""
    this.numDigits = this.numerator.length
    this.denDigits = this.denominator.length 
    this.maxDigits = Math.max(this.numDigits,this.denDigits)
    this.fontSize = w/(this.maxDigits)
    this.compression = 0.9
    this.lineCompression = 20

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

  draw(n,d,w){
    this.numerator = n+""
    this.denominator = d+""
    this.numDigits = this.numerator.length
    this.denDigits = this.denominator.length 
    this.maxDigits = Math.max(this.numDigits,this.denDigits)
    this.fontSize = w/(this.maxDigits)
    this.compression = 0.9

    if (this.maxDigits == 3){
      this.compression = 1.5
      this.lineCompression = 30
    } else if (this.maxDigits == 2){
      this.compression = 1.3
      this.lineCompression = 25
    }

    if (d == 1){
      this.L.alpha = 0
      this.D.alpha = 0
    } else {
      this.L.alpha = 1
      this.D.alpha = 1
    }
    
    // Numerator
    this.N.x = w/2
    this.N.y = 0
    this.N.style.fontSize = this.fontSize*this.compression
    this.N.text = n

    // Denominator
    this.D.x = w/2
    this.D.y = this.N.height
    this.D.style.fontSize = this.fontSize*this.compression
    this.D.text = d

    // Line
    this.L.lineStyle(w/this.lineCompression,0x000000)
    this.L.lineTo(w,0)
    this.L.y = this.N.height

    //this.pivot.set(this.width/2,this.height/2)
  }
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

    yIntersect = Math.trunc(yIntersect*1000)/1000
    xIntersect = Math.trunc(xIntersect*1000)/1000


    // Padding 
    let p = 4
    let inYRange1 = l1.horizontal ? true : (yIntersect > l1.yMin+p) && (yIntersect < l1.yMax-p)
    let inXRange1 = l1.vertical ? true : (xIntersect > l1.xMin+p) && (xIntersect < l1.xMax-p)
    let inYRange2 = l2.horizontal ? true : (yIntersect > l2.yMin+p) && (yIntersect <= l2.yMax-p)
    let inXRange2 = l2.vertical ? true : (xIntersect > l2.xMin+p) && (xIntersect < l2.xMax-p)


    return (inXRange1 && inXRange2 && inYRange1 && inYRange2)
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


// Lines API

class Line {
  constructor(p1,p2){
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

    this.vertical = Math.abs(this.m) > 1000 ? true : false 
    this.horizontal = Math.abs(this.m) < 0.001 ? true : false

    this.b = this.vertical ? null : this.y1 - this.m*this.x1

  }

  yOf(x){
    console.log("this.m,x,this.b,",this.m,x,this.b)
    return this.m*x+this.b
  }

  xOf(y){
    return (y-this.b)/this.m
  }
}

function appxEq(a,b,t){
  return Math.abs(a-b) < t
}



export function getLinesFromPoly(poly){
  let n = poly.length
  let lines = poly.map((p,i)=>{
   // console.log("making a line")
    return new Line(p,poly[(i+1)%n])
  })
  return lines
}

export function splitPolygon(line,poly) {
  let polyA; 
  let polyB;

  let lines = getLinesFromPoly()

  let intersectingLines = []

  lines.forEach((l,i) => {
      if (linesIntersect(l,line)){
         intersectingLines.push(l)
      }
  })

  return [polyA,polyB]
}

export function getIntersectionPoints(line,poly) {

}

export function makeLineArrayFromPoly(poly){

}


// TODO: Change this to extended class.
/*
export class NumberLine extends PIXI.Container {
  constructor(width,height,max){
    super()
    this.max = max 
    this.height = height
    this.width = width

    this.ticks = []
    this.labels = []
    this.line = new PIXI.Graphics()

  }


  init = (n) => {
     this.line.lineStyle(LINE_THICKNESS,0x000000)
     this.line.x = LINE_START
     this.line.y = ARENA_HEIGHT/2
     this.line.lineTo(LINE_WIDTH,0)
     app.stage.addChild(this.line)

     for (let i = 0;i<this.max;i++){
         let newTick = new PIXI.Graphics()
         newTick.lineStyle(LINE_THICKNESS,0x000000)
         newTick.x = this.line.x 
         if(flip){
           newTick.y = this.line.y + LINE_THICKNESS/2
           newTick.lineTo(0,-MINOR_TICK_HEIGHT)
         } else {
           newTick.y = this.line.y - LINE_THICKNESS/2
           newTick.lineTo(0,MINOR_TICK_HEIGHT)
         }
         app.stage.addChild(newTick)
         this.ticks.push(newTick)

         // Setup Labels Here
         let newLabel = new PIXI.Text(i,{
           fontFamily: "Arial",
           fontSize: DX/2,
           fill: "0x000000",
           align: "center"
         })
         newLabel.anchor.x = 0.5
         this.labels.push(newLabel)
         newLabel.x = this.line.x + DX*i
         newLabel.y = this.line.y + MINOR_TICK_HEIGHT
         if (flip){
           newLabel.y = this.line.y - 2*MINOR_TICK_HEIGHT
           newLabel.anchor.y = 1
           newLabel.text.anchor.y = 0.5
         }
         app.stage.addChild(newLabel)
     }
     this.increment(0)
  }

  this.getSetup = ()=> {
      // update tickspan etc. based on line max.
  }

  this.increment = (inc) => {
      // Animation go here
      this.max += inc

      // Update State - (Context Specific)
      state.lineMax = this.max
      updateLayoutParams()

      this.ticks.forEach((e,i)=> {
         if (i > this.max){
             TweenLite.to(e,0.5,{x: LINE_WIDTH + this.line.x })
         } else {
             TweenLite.to(e,0.5,{x: LINE_WIDTH/this.max*i + this.line.x})
         }
      })

      this.labels.forEach((e,i)=> {
       if (i > this.max){
           TweenLite.to(e,0.5,{x: LINE_WIDTH + this.line.x })
           TweenLite.to(e,0.5,{alpha: 0})
       } else {
           TweenLite.to(e,0.5,{x: LINE_WIDTH/this.max*i + this.line.x})
           TweenLite.to(e,0.5,{alpha: 1})
       }
    })
  }

  this.draw = () => {
    let _y;
    if (flip){
     _y = TOP_LINE_Y
    } else {
      _y = BOTTOM_LINE_Y
    }
     this.line.width = LINE_WIDTH
     this.line.height = LINE_THICKNESS
     this.line.x = LINE_START
     this.line.y = _y
     this.ticks.forEach((e,i)=> {
         e.width = TICK_THICKNESS
         e.height = MINOR_TICK_HEIGHT
         e.y = this.line.y - LINE_THICKNESS/2
         if (flip){
           e.y = this.line.y + LINE_THICKNESS/2
         }
         if (i > this.max){
             e.x = LINE_WIDTH + this.line.x 
         } else {
             e.x =  LINE_WIDTH/this.max*i + this.line.x
         }
      })
      this.labels.forEach((e,i)=> {
       e.y = this.line.y + MINOR_TICK_HEIGHT
       if (flip){
         e.y = this.line.y - MINOR_TICK_HEIGHT
       }
       e.style.fontSize = DX/2
       if (i > this.max){
           e.x = LINE_WIDTH + this.line.x 
       } else {
           e.x =  LINE_WIDTH/this.max*i + this.line.x
       }
    })
  }
  this.init()
}

*/