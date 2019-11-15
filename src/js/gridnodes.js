import * as PIXI from "pixi.js";
import blueGradient from "../assets/blue-gradient.png";
import * as CONST from "./const.js";
import QuestionMark from '../assets/QuestionMark.png'
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite, TimelineMax } from "gsap/TweenMax";
import {Fraction, Draggable} from "./api.js"
import { isObject } from "util";
const ASSETS = CONST.ASSETS


export const init = (app, setup) => {
 

  // Constants
  const BLUE_TEXTURE = new PIXI.Texture.from(CONST.ASSETS.GLASS_CIRCLE)
  const PIN_TEXTURE = new PIXI.Texture.from(ASSETS.GLASS_CIRCLE)
  const LINE_PERCENTAGE = 0.8

  // Layout Parameters
  let WINDOW_WIDTH = setup.width
  let BAR_HEIGHT = setup.height/15
  let WINDOW_HEIGHT = setup.height
  let H_W_RATIO = setup.height/setup.width
  let LANDSCAPE = H_W_RATIO < 3/4
  let ARENA_WIDTH = LANDSCAPE ? 4/3*setup.height : setup.width
  let ARENA_HEIGHT = LANDSCAPE ? setup.height : 3/4*setup.width
  let SQUARE_DIM = ARENA_HEIGHT*0.6
  

  let Nodes = []
  let CurrenPolygon = []

  class Node extends PIXI.Sprite {
    constructor(){
      super()
      this.on('pointerdown',this.pointerDown)
      this.on('pointerup',this.pointerUp)
      this.on('pointerupoutside',this.generatePolygon)
      this.anchor.set(0.5)
      this.activated = false
      this.texture = PIN_TEXTURE
      this.interactive = true
    }

    pointerDown(){
      if (this.first){
        this.generatePolygon()
      } else {
        this.activated = true
        if (CurrenPolygon.length == 0){
          this.first = true
        }
        CurrenPolygon.push([this.x,this.y])
        this.alpha = 0.5
        this.scale.x = this.scale.x*1.2
        this.scale.y = this.scale.y*1.2
      }
    }

    pointerUp(){
      
    }

    generatePolygon(){
      Nodes.forEach(n=>{
        if (n.activated){
          n.scale.x = n.scale.x/1.2
          n.scale.y = n.scale.y/1.2
          n.alpha = 1
          n.activated = false
        }
      })
      let xS = CurrenPolygon.map(p=> p[0])
      let yS = CurrenPolygon.map(p=> p[1])
      let minX = Math.min(...xS)
      let minY = Math.min(...yS)

      let flatPolygon = []
      CurrenPolygon.forEach(p=>{
        flatPolygon.push(p[0]-minX)
        flatPolygon.push(p[1]-minY)
      })

      var graphics = new PIXI.Graphics();
    
      graphics.beginFill(0xd7d7d7);
      graphics.drawPolygon(flatPolygon);
      graphics.endFill();
      app.stage.addChild(graphics)
  

      app.stage.removeChild(graphics)
      console.log("setat",CurrenPolygon)
      let d = new Draggable()
      d.hitArea = new PIXI.Polygon(flatPolygon)
      let t = app.renderer.generateTexture(graphics)
      d.texture = t
      d.x = minX
      d.y = minY
      app.stage.addChild(d)
      CurrenPolygon = []
    }
  }

  function set(a,b){
    let dx = SQUARE_DIM/(a-1)
    let dy = SQUARE_DIM/(b-1)
    let dim = SQUARE_DIM/15
    for (let i=0;i<a;i++){
      for (let j=0;j<a;j++){
        let n = new Node()
        Nodes.push(n)
        n.x = WINDOW_WIDTH/2 - SQUARE_DIM/2 + i*dx 
        n.y = WINDOW_HEIGHT/2 - SQUARE_DIM/2+j*dy
        n.w = dx/10
        n.height = dim
        n.width = dim
        app.stage.addChild(n)
      }
    }
  }

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
    let features = {}
    if (setup.props.features){
      features = setup.props.features
    }

    set(4,4)

  }

  // Call load script
  load()
  // Not sure where else to put this.
  app.resize = (frame) => resize(frame)
  app.resizable = true
};
