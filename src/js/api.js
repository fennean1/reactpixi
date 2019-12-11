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

    let t = app.renderer.generateTexture(graphics)

    // Construct Super
    super(t)

    this.hitArea = new PIXI.Polygon(flatPolygon)
    this.points = points

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

  getPolyPoints(){
    let w = this.width 
    let h = this.height
    console.log("this.x,this.y",this.x,this.y)
    let originX = this.x - this.width/2
    let originY = this.y - this.height/2
    console.log("originX, originY",originX,originY)
    
    let xS = []
    let yS = []
    this.hitArea.points.forEach((e,i)=>{
    if (i%2 == 1){
        yS.push(e+originY)
      } else {
        xS.push(e+originX)
      }
    })
    console.log("xS,yS",xS,yS)
    let polyPoints = xS.map((x,i) =>{
      return [x,yS[i]]
    })
    console.log("polyPoints",polyPoints)
    return polyPoints
  }

  polyPointerUp(){
    console.log("hit area",this.hitArea.points)
    this.getPolyPoints()
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

    // Chopping off decimals.
    yIntersect = Math.trunc(yIntersect*1000)/1000
    xIntersect = Math.trunc(xIntersect*1000)/1000


    // Padding 
    let p = -20
    let inYRange1 = l1.horizontal ? true : (yIntersect > l1.yMin+p) && (yIntersect < l1.yMax-p)
    let inXRange1 = l1.vertical ? true : (xIntersect > l1.xMin+p) && (xIntersect < l1.xMax-p)
    let inYRange2 = l2.horizontal ? true : (yIntersect > l2.yMin+p) && (yIntersect <= l2.yMax-p)
    let inXRange2 = l2.vertical ? true : (xIntersect > l2.xMin+p) && (xIntersect < l2.xMax-p)

    console.log("inYRange1,inXRange1,inYRange2,inXRange2",inYRange1,inXRange1,inYRange2,inXRange2)

    return (inXRange1 && inXRange2 && inYRange1 && inYRange2) && [xIntersect, yIntersect]
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

function appxEq(a,b,t){
  return Math.abs(a-b) < t
}



export function getIntersectionPoints(lineEndPoints,polyPoints){
  let line = new Line(lineEndPoints[0],lineEndPoints[1]) // Line
  let lines = getLinesFromPoly(polyPoints) // Array of Lines

  let intersectionPoints = []

  lines.forEach((l,i) => {
      let intersectionPoint = linesIntersect(l,line)
      intersectionPoints.push(intersectionPoint)
  })
  console.log("intersectinglines count",intersectionPoints)
  
  return intersectionPoints.filter(e=> e != false)
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
         if (pointsApproximatelyEqual([intersect,l.start],10)){
           console.log("POINTS APPROXIMATELY EQUAL")
         } else {
           primaryPoly.push(intersect)
           secondaryPoly.push(intersect)
           primary = !primary
         }
       }
  })
  return [primaryPoly,secondaryPoly]
}


export function makeLineArrayFromPoly(poly){

}




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