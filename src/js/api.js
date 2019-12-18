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

  draw(n,d,_w){

    this.numerator = n+""
    this.denominator = d+""

    if (this.numerator%this.denominator == 0 && this.makeWhole){
      console.log("making whole")
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
      console.log("maxDigits == 1")
      this.compression = 1.3
      this.lineCompression = 15
      _w = _w/1.5
    }

    if (this.denominator == 1){
      console.log("setting alphas")
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
    let originX = this.x - this.width/2
    let originY = this.y - this.height/2
    let xS = []
    let yS = []
    console.log("original points",this.hitArea.points)
    this.hitArea.points.forEach((e,i)=>{
    if (i%2 == 1){
        yS.push(e)
      } else {
        xS.push(e)
      }
    })
    let polyPoints = xS.map((x,i) =>{
      return [x,yS[i]]
    })

    console.log("massaged points",polyPoints)
    console.log("this rotation",this.rotation)
    polyPoints = polyPoints.map(p=>{return rotatePoint(p[0]-this.width/2,p[1]-this.height/2,this.rotation)})
    console.log("rotatedpoints",polyPoints)

    polyPoints = polyPoints.map(p=>{return [p[0]+originX+this.width/2,p[1]+originY+this.height/2]})

    return polyPoints
  }

  polyPointerUp(){
    console.log("hit area",this.hitArea.points)
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
  console.log("intersectinglines count",intersectionPoints)
  let filtered = intersectionPoints.filter(e=> e != false)
  let deduped = removeDuplicatePoints(filtered,5)
  
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
           console.log("POINTS APPROXIMATELY EQUAL")
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

// Number Line

export class NumberLine extends PIXI.Container {
  constructor(width,height,max){
    super()
    console.log("thiswidth,thisheight",width,height)
    this.max = max 
    this._height = height
    this._width = width
    this.showFractions = false 
    this.flipped = false
    this.lineThickness = height/10
    this.minorTickHeight = height/2
    this.majorTickHeight = height
    this.dx = this._width/max
    this.everyOther = false
    this.denominator = 1
    console.log("this.width,this.height",this.width,this.height)

    this.ticks = []
    this.labels = []
    this.line = new PIXI.Graphics()
  }

  init = () => {
    console.log('thislinethickness',this.lineThickness)
     this.line.lineStyle(this.lineThickness,0x000000)
     this.line.x = 0
     this.line.y = 0
     this.line.lineTo(this._width,0)
     this.addChild(this.line)

    console.log("this.max",this.max)
     for (let i = 0;i<100;i++){
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

         this.labels.push(newLabel)
         newLabel.x = _x - newLabel.width/2
        
         newLabel.y = this.line.y + this.minorTickHeight
         if (this.flipped){
           newLabel.y = this.line.y - 2*this.minorTickHeight
           newLabel.anchor.y = 1
           newLabel.text.anchor.y = 0.5
         }
         this.addChild(newLabel)
        
     }
     this.increment(0)
  
  }


  increment(inc) {
      console.log("width,height,x,y",this.width,this.height,this.x,this.y)
      // Animation go here
      this.max += inc
      this.dx = this._width/this.max
      console.log("this.max",this.max)
      this.ticks.forEach((e,i)=> {
         if (i > this.max){
             TweenLite.to(e,0.5,{x: this._width})
         } else {
             TweenLite.to(e,0.5,{x: this.dx*i})
         }
      })

      this.labels.forEach((e,i)=> {
       e.alpha = 0
       e.draw(i,this.denominator,this.dx/2)
       console.log('e.width',e.width)
       if (i > this.max){
           TweenLite.to(e,0.5,{x: this._width})
           TweenLite.to(e,0.5,{alpha: 0})
       } else {
         console.log('setting to one')
           TweenLite.to(e,0.5,{x: this.dx*i-e.width/2})
           TweenLite.to(e,0.5,{alpha: 1})
       }
    })
  }
}
