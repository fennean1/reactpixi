import React from 'react';
import logo from './logo.svg';
import './App.css';
import Arena from "./Arena"
import * as Pixi from "pixi.js";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import * as HundredsArrayScript from "./js/hundredsarray.js"
import * as NumberLineStripsScript from "./js/numberlinestrips.js"
import * as CapacityTalkData from "./Activities/CapacityTalk.json";

Pixi.settings.RESOLUTION = 3
let app = new Pixi.Application(0,0,{backgroundColor: 0xffffff,antialias: true});

const Main = () => (
  <div>
    <Route exact path="/" component={() => <Arena app = {app} fullscreen = {true} lesson = {CapacityTalkData.default} script = {HundredsArrayScript.init}/>} />
    <Route exact path="/strips" component={() => <Arena app = {app} fullscreen = {true} lesson = {CapacityTalkData.default} script = {NumberLineStripsScript.init}/>} />
  </div>
);

function App() {
  return (
    <div >
       <BrowserRouter className="App-container">
          <Main />
        </BrowserRouter>
    </div>
  );
}

export default App;
