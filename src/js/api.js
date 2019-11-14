import * as PIXI from "pixi.js";
import * as CONST from "./const.js";
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite, TimelineMax } from "gsap/TweenMax";
import { thisExpression } from "@babel/types";
const ASSETS = CONST.ASSETS


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
    this.touching = true
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



export class Fraction extends PIXI.Container {
  constructor(n,d,w){
    super()
    this.numerator = n+""
    this.denominator = d+""
    this.numDigits = this.numerator.length
    this.denDigits = this.denominator.length 
    this.maxDigits = Math.max(this.numDigits,this.denDigits)
    this.fontSize = w/(this.maxDigits)
    this.compression = 0.6
    this.lineCompression = 20

    if (this.maxDigits == 3){
      this.compression = 0.8
      this.lineCompression = 30
    } else if (this.maxDigits == 2){
      this.compression = 0.7
      this.lineCompression = 25
    }

    // Numerator
    this.N = new PIXI.Text()
    this.N.anchor.x = 0.5
    this.N.x = w/2
    this.N.y = 0
    this.N.text = n
    console.log("this.N.width",this.N.width)
    this.N.style.fontSize = this.fontSize
    this.addChild(this.N)

    // Denominator
    this.D = new PIXI.Text()
    this.D.anchor.x = 0.5
    this.D.x = w/2
    this.D.y = this.height
    this.D.text = d
    console.log("this.N.width",this.D.height)
    this.D.style.fontSize = this.fontSize
    this.addChild(this.D)

    // Mid Line
    this.L = new PIXI.Graphics()
    this.L.lineStyle(w/this.lineCompression,0x000000)
    this.L.lineTo(w,0)
    this.L.y = this.height/2
    this.addChild(this.L)

  }

  set(n,d){
    this.numerator = n 
    this.denominator = d
    this.N.text = n
    this.D.text = d
  }
}