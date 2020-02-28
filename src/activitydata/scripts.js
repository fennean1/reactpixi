import * as GridCuttingScript from "../js/gridcutting.js";
import * as GridNodeScript from "../js/gridnodes.js";
import * as FractionNumberLineScript from "../js/fractionnumberline.js";
import * as WallToolScript from "../js/walltool.js"
import * as PlacingNumbersScript from "../js/placingnumbers"
import * as BeakerEstimationScript from "../js/beakergame.js"
import * as OrderingBlocksScript from "../js/orderingtool.js"
import * as FractionBarsScript from "../js/fractionbar.js"
import * as FractionStacksScript from "../js/fractionstacks.js"
import * as FractionWallScript from "../js/newfractionwall.js"
import * as BuildingBlocksScript from "../js/buildingblocks.js"

export const SCRIPTS = {
    CUTTING_GRID: GridCuttingScript.init,
    NODES_GRID: GridNodeScript.init,
    FRACTION_NUMBER_LINE: FractionNumberLineScript.init,
    WALL_TOOL: WallToolScript.init,
    PLACING_NUMBERS: PlacingNumbersScript.init,
    BEAKER_ESTIMATION: BeakerEstimationScript.init,
    ORDERING_BLOCKS: OrderingBlocksScript.init,
    FRACTION_BARS: FractionBarsScript.init,
    FRACTION_STACKS: FractionStacksScript.init,
    FRACTION_WALL: FractionWallScript.init,
    BUILDING_BLOCKS: BuildingBlocksScript.init
}

/*

export class FractionFrame extends PIXI.Container {
  constructor(width, height, den, app, vertical,color, multiColored, descriptor) {

    super()
    // State
    this.value = 0
    // Placeholders
    this.BAR_HEIGHT = 200
    this.LINE_WIDTH = 4
    this.BTN_WIDTH = width / 3
    let LINE_MAX = 20
    let LINE_START = 0
    this.color = color
    this.grabber = descriptor ? new PIXI.Sprite.from(CONST.ASSETS.MOVER_DOT) : new FractionTag(1,2,width)

    // Default values
    this.numerator = 1
    this.denominator = den
    this._width = width
    this._height = height
    this.app = app
    this.sprites = []
    this.vertical = vertical
    this.blockDim = this.vertical ? height / this.denominator : width / this.denominator
    this.activated = false
    this.interactive = true

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

    this.grabber.x = this._width/2 - this.grabber.width/2
    this.grabber.on('pointerdown', this.grabberPointerDown)
    this.grabber.on('pointermove', this.grabberPointerMove)
    this.grabber.on('pointerup', this.grabberPointerUp)
    this.grabber.on('pointerupoutside', this.grabberPointerUp)

    let w = this.vertical ? this._width : this.blockDim
    let h = this.vertical ? this.blockDim : this._height

    this.blockA = new PIXI.Graphics()
    this.blockA.lineStyle(3, 0x000000)
    this.blockA.drawRoundedRect(0, 0, w, h, 1)
    this.myA = this.app.renderer.generateTexture(this.blockA)

    this.blockB = new PIXI.Graphics()
    this.blockB.beginFill(this.color)
    this.blockB.lineStyle(3, 0x000000)
    this.blockB.drawRoundedRect(0, 0, w, h, 1)
    this.myB = this.app.renderer.generateTexture(this.blockB)

    this.g = new PIXI.Graphics()

    //  Attached methods
    this.on('pointerdown', this.containerPointerDown)
    this.on('pointerup', this.containerPointerUp)
    this.on('pointermove', this.containerPointerMove)

    for (let i = 0; i < this.denominator; i++) {
      let s = new PIXI.Sprite.from(this.myA)
      s.on('pointerdown', this.spritePointerDown)
      s.on('pointerup', this.spritePointerUp)
      s.on('pointermove', this.spritePointerMoved)
      s.interactive = true
      s.active = false
      s.x = i * this.LINE_WIDTH / this.denominator
      this.sprites.push(s)
      this.addChild(s)
    }
    this.draw()
  }

  incDenominator = (inc) => {
    if (this.denominator + inc >= 1) {
      this.g.clear()
      this.g.lineStyle(3, 0x000000)
      this.g.drawRoundedRect(0, 0, this._width, this._height, 1)
      let R = this.app.renderer.generateTexture(this.g)
      let s = new PIXI.Sprite()
      this.addChild(s)
      s.texture = R
      s.x = 0

      if (inc > 0) {
        const onComplete = () => {
          s.on('pointerdown', this.spritePointerDown)
          s.on('pointerup', this.spritePointerUp)
          s.on('pointermove', this.spritePointerMoved)
          s.interactive = true
          s.active = false
          this.sprites.push(s)
          this.draw()
        }
        TweenMax.to(this, 0.25, { denominator: this.denominator + 1, onUpdate: this.draw, onComplete: onComplete })
      } else if (inc < 0) {
        let removeme = this.sprites.pop()
        this.removeChild(removeme)
        const onComplete = () => {
          this.draw()
          this.removeChild(s)
        }
        TweenMax.to(this, 0.25, { denominator: this.denominator - 1, onUpdate: this.draw, onComplete: onComplete })
      }
    }
  }

  draw = (width) => {
    if (width) {
      this._width = width
    }
    this.blockDim = this.vertical ? this._height / this.denominator : this._width / this.denominator

    let w = this.vertical ? this._width : this.blockDim
    let h = this.vertical ? this.blockDim : this._height

    this.blockA.clear()
    this.blockA.lineStyle(3, 0x000000)
    this.blockA.drawRoundedRect(0, 0, w, h, 1)
    this.myA = this.app.renderer.generateTexture(this.blockA)

    this.blockB.clear()
    this.blockB.beginFill(this.color)
    this.blockB.lineStyle(3, 0x000000)
    this.blockB.drawRoundedRect(0, 0, w, h, 1)
    this.myB = this.app.renderer.generateTexture(this.blockB)


    for (let i = 0; i < this.sprites.length; i++) {
      this.sprites[i].myA = this.myA
      this.sprites[i].myB = this.myB
      if (this.sprites[i].active) {
        this.blockB.clear()
        this.blockB.beginFill(this.sprites[i].myColor)
        this.blockB.lineStyle(3, 0x000000)
        this.blockB.drawRoundedRect(0, 0, w, h, 1)
        let thisB = this.app.renderer.generateTexture(this.blockB)
        this.sprites[i].texture = thisB
      } else {
        this.sprites[i].myColor = this.color
        this.sprites[i].texture = this.myA
      }

      if (this.vertical) {
        this.sprites[i].x = 0
        this.sprites[i].y = this.blockDim * i
      } else {
        this.sprites[i].x = this.blockDim * i
        this.sprites[i].y = 0
      }

    }
  }

  grabberPointerDown() {

  }

  grabberPointerMove() {

  }

  grabberPointerUp() {

  }

  spritePointerDown(event) {
    this.touched = true
    this.dragged = false
  }

  spritePointerMoved(event) {

    if (this.touched) {
      this.dragged = true
    }
  }

  spritePointerUp(event) {
    // previously "activated"
    console.log("even.parent", this.parent.activated)
    if (!this.dragged && this.touched && this.parent.activated) {
      this.dragged = false
      this.active = !this.active
      this.alpha = 0.2
      this.texture = this.active ? this.myB : this.myA
      this.myColor = this.parent.color
      TweenLite.to(this, 0.1, { alpha: 1 })
    }
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

    if (this.touching) {
      this.y = event.data.global.y + this.deltaTouch.y
      this.x = event.data.global.x + this.deltaTouch.x
      this.dragged = true
    }
  }
}


*/