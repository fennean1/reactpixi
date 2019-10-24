import React from 'react';
import logo from './logo.svg';
import './App.css';
import Arena from "./Arena"
import * as Pixi from "pixi.js";
//import * as HundredsArrayScript from "./js/hundredsarray.js"
import * as NumberLineStripsScript from "./js/numberlinestrips.js"
import * as CapacityTalkData from "./Activities/CapacityTalk.json";

Pixi.settings.RESOLUTION = 3
let app = new Pixi.Application(0,0,{backgroundColor: 0xffffff,antialias: true});


function App() {
  return (
    <div >
      <Arena app = {app} fullscreen = {true} lesson = {CapacityTalkData.default} script = {NumberLineStripsScript.init}/>
    </div>
  );
}

export default App;
