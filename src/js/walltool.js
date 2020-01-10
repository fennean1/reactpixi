import * as PIXI from "pixi.js";
import * as CONST from "./const.js";
import { TweenMax, TimelineLite, TweenLite, TimelineMax } from "gsap/TweenMax";
import {Fraction, Draggable,DraggablePoly,distance} from "./api.js"
import { tsConstructorType } from "@babel/types";
import { shape } from "prop-types";
const ASSETS = CONST.ASSETS


export const init = (app, setup) => {
 

  // Constants
  let fadeAnimation = new TimelineLite({paused: true})
 

  // Layout Parameters
  let WINDOW_WIDTH = setup.width
  let WINDOW_HEIGHT = setup.height
  let SQUARE_DIM = WINDOW_HEIGHT/2.5
  let BTN_DIM = SQUARE_DIM/3
  let H_W_RATIO = setup.height/setup.width
  let d12 = SQUARE_DIM/12
  let LANDSCAPE = H_W_RATIO < 3/4
  let ARENA_WIDTH = LANDSCAPE ? 4/3*setup.height : setup.width
  let ARENA_HEIGHT = LANDSCAPE ? setup.height : 3/4*setup.width

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


  const whole_square = k => {
    return [[0,0],[k,0],[k,k],[0,k]]
  }
  const half_triangle = k=> {
    return [[0,0],[0,k],[k,k]]
  }
  const fourth_eq_triangle = k => {
    return [[0,k/2],[k/2,0],[k,k/2]]
  }
  const eighth_rectangle = k => {
    return [[0,0],[k/4,0],[k/4,k/2],[0,k/2]]
  }

  const fourth_rectangle = k => {
    return [[0,0],[k/4,0],[k/4,k],[0,k]]
  }

  const fourth_right_triangle = k => {
    return [[0,0],[k/2,k],[0,k]]
  }

  const fourth_square = k => {
    return [[0,0],[k/2,0],[k/2,k/2],[0,k/2]]
  }

  const eighth_triangle = k => {
    return [[0,0],[k/2,k/2],[0,k/2]]
  }

  const sixth_triangle = k => {
    return [[0,0],[k/3,k],[0,k]]
  }

  const third_rectangle = k => {
    return [[0,0],[k/3,0],[k/3,k],[0,k]]
  }

  let whole1 
  let whole2
  let rotateLeftBtn;
  let duplicateBtn;
  let trashBtn;
  let flipVerticalBtn
  let activePolygon
  let resetBtn;
  let polygons = []
  let fractionObj;
  
  class Whole extends PIXI.Sprite {
    constructor(points){
      super()
      this.points = points
  
      let flatPolygon = this.transformPointsToPoly(this.points)
  
      this.graphics = new PIXI.Graphics();
      this.graphics.beginFill(0xffffff);
      this.graphics._fillStyle.alpha = 0.85
      this.graphics.lineStyle(2,0x000000)
      this.graphics.drawPolygon(flatPolygon);
      this.graphics.endFill();
  
      let t = app.renderer.generateTexture(this.graphics)
      this.texture = t
    }

    draw(){
      // Redrawing code goes here.
    }

    transformPointsToPoly(points){
      let xS = points.map(p=> p[0])
      let yS = points.map(p=> p[1])
      let minX = Math.min(...xS)
      let minY = Math.min(...yS)
      let flatPolygon = []
      points.forEach(p=>{
        flatPolygon.push(p[0]-minX)
        flatPolygon.push(p[1]-minY)
      })
      return flatPolygon
    }
  }

  function placeButtons(alpha){
    app.stage.addChild(rotateLeftBtn)
    app.stage.addChild(flipVerticalBtn)
    rotateLeftBtn.alpha = alpha 
    flipVerticalBtn.alpha = alpha
    rotateLeftBtn.interactive = alpha == 0 ? false : true
    flipVerticalBtn.interactive = alpha == 0 ? false : true

    if (activePolygon != null){
      let width = activePolygon.rotated ? activePolygon.height : activePolygon.width
      let height = activePolygon.rotated ? activePolygon.width : activePolygon.height  
      rotateLeftBtn.x = activePolygon.x - BTN_DIM/2
      rotateLeftBtn.y = activePolygon.y + height/1.9
      flipVerticalBtn.x = activePolygon.x
      flipVerticalBtn.y = activePolygon.y + height/1.9
    }
  }

  // Called on resize
  function resize(newFrame,flex){
    // Make sure all layout parameters are up to date.
    updateLayoutParams(newFrame)
    // Do I need this here?
    app.renderer.resize(WINDOW_WIDTH,WINDOW_HEIGHT)
  }

  function updateLayoutParams(newFrame){
    let frame;
    if (newFrame){
      frame = newFrame
    } else {
      frame = {width: WINDOW_WIDTH,height: WINDOW_HEIGHT}
    }
  }

  class PolyGenerator extends PIXI.Sprite {
    constructor(points){
    super()
    let xS = points.map(p=> p[0])
    let yS = points.map(p=> p[1])
    let minX = Math.min(...xS)
    let minY = Math.min(...yS)

    let flatPolygon = []
    points.forEach(p=>{
      flatPolygon.push(p[0]-minX)
      flatPolygon.push(p[1]-minY)
    })

    var graphics = new PIXI.Graphics();
    graphics.beginFill(0xff3b55);
    graphics._fillStyle.alpha = 0.85
    graphics.lineStyle(2,0xffffff)
    graphics.drawPolygon(flatPolygon);
    graphics.endFill();

    let t = app.renderer.generateTexture(graphics)
    this.texture = t
    this.on('pointerdown',this.pointerDown)
    this.points = points
    this.interactive = true
    }

    pointerDown(){
      console.log("Addingpoly")
      let p = new DraggablePoly(this.points,app)
      p.on('pointerup',pointerUp)
      p.on('pointerdown',pointerDown)
      p.on('pointermove',pointerMove)
      TweenLite.to(p,0.5,{x: WINDOW_WIDTH/2,y: WINDOW_HEIGHT/2})
      polygons.push(p)
      app.stage.addChild(p)
    }
  }

  function pointerDown(){
    activePolygon = this
    fadeAnimation.stop()
    placeButtons(1)
  }

  function pointerMove(){
    if (this.touching){
      placeButtons(0)
    }
  }

  function pointerUp(){
    round(this,d12)
    placeButtons(1)
    fadeAnimation.restart()
    if (distance([this.x,this.y],[trashBtn.x,trashBtn.y]) < 200) {
      placeButtons(0)
      fadeAnimation.stop()
      let i = polygons.indexOf(this)
      polygons.splice(i,1)
      app.stage.removeChild(this)
      this.destroy(true)
      if (polygons.length != 0){
        activePolygon = polygons[0]
      } else {
        activePolygon = null
      }
    }
  }

  function round(me,dxy){
    let width = me.rotated ? me.height : me.width
    let height = me.rotated ? me.width : me.height  
    let i = Math.round((me.x-width/2)/dxy)*dxy
    let j = Math.round((me.y- height/2)/dxy)*dxy
    me.x = i + width/2
    me.y = j + height/2
  }

  // Loading Script
  function load(){
    let features = {}
    if (setup.props.features){
      features = setup.props.features
    }

    let shapes = []

    let fourthEqTriangle = new PolyGenerator(fourth_eq_triangle(SQUARE_DIM))
    shapes.push(fourthEqTriangle)

    let eighthRectangle = new PolyGenerator(eighth_rectangle(SQUARE_DIM))
    shapes.push(eighthRectangle)

    let fourthSquare = new PolyGenerator(fourth_square(SQUARE_DIM))
    shapes.push(fourthSquare)

    let thirdRectangle = new PolyGenerator(third_rectangle(SQUARE_DIM))
    shapes.push(thirdRectangle)

    let eighthTriangle = new PolyGenerator(eighth_triangle(SQUARE_DIM))
    shapes.push(eighthTriangle)

    let sixthTriangle = new PolyGenerator(sixth_triangle(SQUARE_DIM))
    shapes.push(sixthTriangle)


    let inc = d12
    shapes.forEach(s=>{
      app.stage.addChild(s)
      s.y = 0.95*WINDOW_HEIGHT-s.height
      s.x = inc 
      inc = s.width + inc + d12
    })

    whole1 = new Whole(whole_square(SQUARE_DIM))
    whole1.y = d12 
    whole1.x = WINDOW_WIDTH/2 - SQUARE_DIM - d12
    round(whole1,d12)
    app.stage.addChild(whole1)

    whole2 = new Whole(whole_square(SQUARE_DIM))
    whole2.y = d12 
    whole2.x = WINDOW_WIDTH/2 + d12
    round(whole2,d12)
    app.stage.addChild(whole2)


    rotateLeftBtn = new PIXI.Sprite.from(ASSETS.ROTATE_LEFT)
    rotateLeftBtn.width = BTN_DIM/2
    rotateLeftBtn.height = BTN_DIM/2
    rotateLeftBtn.x = - BTN_DIM
    rotateLeftBtn.interactive = true
    rotateLeftBtn.alpha = 0
    app.stage.addChild(rotateLeftBtn)
    rotateLeftBtn.on('pointerdown',()=>{
      if (activePolygon != null){
        activePolygon.rotated = !activePolygon.rotated
        placeButtons(1)
        TweenLite.to(activePolygon,0.2,{rotation: activePolygon.rotation - Math.PI/2})
      }
    })

    flipVerticalBtn = new PIXI.Sprite.from(ASSETS.FLIP_VERT)
    flipVerticalBtn.x = - BTN_DIM
    flipVerticalBtn.y = BTN_DIM
    flipVerticalBtn.width = BTN_DIM/2
    flipVerticalBtn.height = BTN_DIM/2
    flipVerticalBtn.interactive = true
    app.stage.addChild(flipVerticalBtn)
    flipVerticalBtn.on('pointerdown',()=>{
      if (activePolygon != null){
        if (!activePolygon.rotated){
          TweenLite.to(activePolygon.scale,0.2,{y: activePolygon.scale.y*(-1)})
        } else {
          TweenLite.to(activePolygon.scale,0.2,{x: activePolygon.scale.x*(-1)})
        }

      }
    })

    resetBtn = new PIXI.Sprite.from(ASSETS.RESET)
    resetBtn.y = 0*BTN_DIM
    resetBtn.width = BTN_DIM
    resetBtn.height = BTN_DIM
    resetBtn.interactive = true
    app.stage.addChild(resetBtn)
    resetBtn.on('pointerdown',()=>{
      polygons.forEach(p=>{
        app.stage.removeChild(p)
        p.destroy(true)
      })
      polygons = []
      activePolygon = null 
    })


    trashBtn = new PIXI.Sprite.from(ASSETS.TRASH)
    trashBtn.width = BTN_DIM*0.8
    trashBtn.height = BTN_DIM*0.8
    trashBtn.x = WINDOW_WIDTH - trashBtn.width*1.1
    trashBtn.y = trashBtn.width*0.1
    trashBtn.interactive = true
    app.stage.addChild(trashBtn)

    const onComplete = () => {
      rotateLeftBtn.interactive = false
      flipVerticalBtn.interactive = false
    }
    fadeAnimation.to([rotateLeftBtn,flipVerticalBtn],1,{alpha: 0,onComplete: onComplete},"+=2")
  }

  // Call load script
  load()
  // Not sure where else to put this.
  app.resize = (frame) => resize(frame)
  app.resizable = false
};
