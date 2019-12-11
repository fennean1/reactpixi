import * as PIXI from "pixi.js";
import blueGradient from "../assets/blue-gradient.png";
import * as CONST from "./const.js";
import {Line, polygonArea,distance,DraggablePoly,getIntersectionPoints,splitPolygon, splitMultiplePolygons} from "./api.js";
import { TweenLite, Power0 } from "gsap/TweenMax";


export const init = (app, setup) => {
 
  // Constants
  const MARKER = new PIXI.Texture.from(CONST.ASSETS.BLUE_CIRCLE)

  // Layout Parameters
  let WINDOW_WIDTH = setup.width
  let BAR_HEIGHT = setup.height/15
  let WINDOW_HEIGHT = setup.height
  let H_W_RATIO = setup.height/setup.width
  let LANDSCAPE = H_W_RATIO < 3/4
  let ARENA_WIDTH = LANDSCAPE ? 4/3*setup.height : setup.width
  let ARENA_HEIGHT = LANDSCAPE ? setup.height : 3/4*setup.width
  
  // State 
  let drawing = false
  let cutting = true
  let dragging = false

  let lineOne = []
  let lineTwo = []
  let testPolygon = []
  let testPolygonObject;
  let testLine = []
  let testLineObject;
  let features = {}

  let polygons  =  []
  let polygonObjects  =  []


  const square  = [[0,0],[0,300],[300,300],[300,0]]


  // Create Marker

  function makeBackground(){
    // Setup Background
    this.sprite = new PIXI.Sprite.from(CONST.ASSETS.BLUE_GRADIENT);
    this.sprite.width = WINDOW_WIDTH
    this.sprite.height = WINDOW_HEIGHT
    this.sprite.x = 0;
    this.sprite.y = 0;
    app.stage.addChild(this.sprite)

    this.draw = () => {
        this.sprite.width = WINDOW_WIDTH
        this.sprite.height = WINDOW_HEIGHT
    }
  }
  let backGround = new makeBackground()

 const SQUARE = [[0,0],[0,300],[300,300],[300,0]]
 let initialPolygon = new DraggablePoly(square,app)
 app.stage.addChild(initialPolygon)
 polygonObjects.push(initialPolygon)

 // Create Stencil
 let stencil = new PIXI.Graphics()
 stencil.lineStyle(5,0x000000)
 app.stage.addChild(stencil)


  let marker = new PIXI.Sprite(MARKER)
  app.stage.addChild(marker)
  marker.width = 20
  marker.height = 20
  marker.anchor.set(0.5)
  marker.x = 50
  marker.y = 50


  let marker2 = new PIXI.Sprite(MARKER)
  app.stage.addChild(marker2)
  marker2.width = 20
  marker2.height = 20
  marker2.anchor.set(0.5)
  marker2.x = 50
  marker2.y = 50


  function drawLine(from,to,thickness,color){
    let g = new PIXI.Graphics()
    g.lineStyle(thickness,color)
    let fromX = from[0]
    let fromY = from[1]
    let toX = to[0]
    let toY = to[1]
    g.lineTo(toX-fromX,toY-fromY)
    g.x = fromX 
    g.y = fromY
    app.stage.addChild(g)
    return g
  }
  let i = 0

  function globalPointerDown(event){
    let newPoint = [event.data.global.x,event.data.global.y]
    let newX = newPoint[0]
    let newY = newPoint[1]
    console.log("dragging",dragging)
    if (cutting && !dragging){
      console.log("Were in!!!!")
      marker.x = newX
      marker.y = newY
      testLine.push([newX,newY])
      if (testLine.length == 2){
        console.log("draing the line")
        let a = testLine[0]
        let b = testLine[1]
        testLineObject = drawLine(a,b,5,0x000000)
        // Copy of just the vertices that we'll use to reconstruct.
        let rawCopyOfPolygons = polygonObjects.map(pObj=>{
          return pObj.getPolyPoints()})
        // Destroy old ones.
        polygonObjects.forEach(pObj=>{
          pObj.destroy(true)
          app.stage.removeChild(pObj)
        })
        polygonObjects = []

        let newPolygons = splitMultiplePolygons(testLine,rawCopyOfPolygons)
        newPolygons.forEach(p=>{
          let pObj = new DraggablePoly(p,app)
          app.stage.addChild(pObj)
          polygonObjects.push(pObj)
          pObj.on("pointerdown",()=> {dragging = true})
          pObj.on("pointerup",()=> {dragging = false})
        })

        let copyOfPolygons = polygonObjects.map(pObj=>{
          return pObj.getPolyPoints()})
          console.log("copy of polygons!!!!!",copyOfPolygons)
        setTimeout(()=>{
          testLineObject.clear()
        },1500)
        testLine = []
      }
    } else if (drawing) {
        
      testPolygon.push(newPoint)
      marker.x = newX
      marker.y = newY

      if (testPolygon.length != 1) {
        let firstPoint = testPolygon.length != 0 && testPolygon[0]
        let lastX = firstPoint && testPolygon[testPolygon.length-2][0]
        let lastY = firstPoint && testPolygon[testPolygon.length-2][1]
        if (distance(newPoint,firstPoint)<10){
          console.log("distance issue")
          testPolygon.pop()
          testPolygonObject = new DraggablePoly(testPolygon,app)
          app.stage.addChild(testPolygonObject)
          stencil.clear()
          drawing = false
          polygons.push(testPolygon)
          polygonObjects.push(testPolygonObject)
          console.log("polygon right after push",testPolygon)
        } else {
            stencil.moveTo(lastX,lastY)
            stencil.lineTo(newX,newY)
        }
      }
    }
  }

  app.stage.on('pointerdown',globalPointerDown)
  app.stage.interactive = true


  // Called on resize
  function resize(newFrame,flex){
    // Make sure all layout parameters are up to date.
    updateLayoutParams(newFrame)
    app.renderer.resize(WINDOW_WIDTH,WINDOW_HEIGHT)
  }

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

  // Loading Script
  function load(){
    if (setup.props.features){
      features = setup.props.features
    }
  }

  // Call load script
  load()
  // Not sure where else to put this.
  app.resize = (frame) => resize(frame)
  app.resizable = true
};
