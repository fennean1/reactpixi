import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweenLite, TimelineMax } from "gsap/TweenMax";

import * as Pixi from "pixi.js";

class Arena extends Component {
  constructor() {
    super();
  }

  componentWillUnmount(){
    // Static apps are not dismantlced upon unmounting.
    this.props.app.active = false
    // If the app is static, don't deconstruct.
    if (this.props.app.static == false){
      // Remove assigned app items.
      this.props.app.resizable = false
      this.props.app.active = false
      this.props.app.loaded = false
      let children = this.props.app.stage.children
      for (var i = children.length - 1; i >= 0; i--) {	this.props.app.stage.removeChild(children[i]);};
      for (var i = children.length - 1; i >= 0; i--) {	children[i].destroy(true);};
    } else {
      this.props.app.active = false
    }
  }

  // Resizes the view it it's mounted and resizable. (Old versions don't always have a resize function)
  resize(){
    // Active means the app is mounted and currently being use (Not in the background)
    if (this.props.app.active){
      // Does this have a resize option?
      if (this.props.app.resizable){
        this.props.app.resize({width: this.gameCanvas.clientWidth,height: this.gameCanvas.clientHeight})
      } else {
        // Unless the app has an assign resizable function, we just redraw but we reload the script. (This erases everything)
        this.redraw()
      }
   }
  }

  redraw(){
    // IDEA: Extend your own "Pixi.Application and put these methods inside of it.
    // Removes all children and destroys them.
    let children = this.props.app.stage.children
    this.props.app.stage.y = 0
    for (var i = children.length - 1; i >= 0; i--) {	this.props.app.stage.removeChild(children[i]);};
    for (var i = children.length - 1; i >= 0; i--) {	children[i].destroy(true);};

    // Recalculate setup
    const setup = {
      height: this.gameCanvas.clientHeight,
      width: this.props.width != null ? this.props.width : this.gameCanvas.clientWidth,
      props: this.props
    };

    this.props.app.renderer.resize(this.gameCanvas.clientWidth,this.gameCanvas.clientHeight)
    this.props.script(this.props.app, setup);
  }


  componentDidMount() {

      window.onresize = () => this.resize()

      console.log("game canvas height and width",this.gameCanvas.clientHeight,this.gameCanvas.clientWidth)
      
      this.props.app.active = true
      this.props.app.renderer.backgroundColor = 0xffffff;
      this.props.app.renderer.resolution = 3
      this.props.app.renderer.autoDensity = true
      this.props.app.renderer.resize(this.gameCanvas.clientWidth,this.gameCanvas.clientHeight)
      this.gameCanvas.appendChild(this.props.app.view);

      const setup = {
        height: this.gameCanvas.clientHeight,
        width: this.props.width != null ? this.props.width : this.gameCanvas.clientWidth,
        props: this.props
      };
      
      if (!this.props.app.loaded){        
        // One of the scripts offsets y so we have to reset this. (was that the fraction wall?)
        this.props.app.stage.y = 0
        this.props.app.loaded = true
        this.props.script(this.props.app, setup);
      } else {
        if (this.props.app.resizable == true){
          this.redraw()
        }
      }
  }

  render() { 
    let styleType = this.props.fullscreen ? { height: "100vh",marginTop: 0 } : {height: "50vh"};
    return (
        <div style = {styleType}
          ref={me => this.gameCanvas = me }
        />
    );
  }
}

export default Arena;
