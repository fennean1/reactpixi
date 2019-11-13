import * as PIXI from "pixi.js";
import * as CONST from "./const.js";
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite, TimelineMax } from "gsap/TweenMax";
const ASSETS = CONST.ASSETS



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