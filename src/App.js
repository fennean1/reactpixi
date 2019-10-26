import React from 'react';
import logo from './logo.svg';
import './App.css';
import Arena from "./components/Arena"
import Panels from "./components/Panels"
import * as Pixi from "pixi.js";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import * as HundredsArrayScript from "./js/hundredsarray.js"
import * as NumberLineStripsScript from "./js/numberlinestrips.js"
import * as CapacityTalkData from "./activitydata/CapacityTalk.json";
import TeacherSlides from './components/TeacherSlides'
import { Document } from 'react-pdf'

Pixi.settings.RESOLUTION = 3
let app = new Pixi.Application(0,0,{backgroundColor: 0xffffff,antialias: true});

const Main = () => (
  <div>
    <Route exact path="/" component={() => <Arena app = {app} features = {{'lock': true}}fullscreen = {true} lesson = {CapacityTalkData.default} script = {HundredsArrayScript.init}/>} />
    <Route exact path="/strips" component={() => <Arena app = {app} fullscreen = {true} lesson = {CapacityTalkData.default} script = {NumberLineStripsScript.init}/>} />
    <Route exact path="/teacherslides" component={() => <TeacherSlides/>} />
  </div>
);

function App() {
  return (
       <BrowserRouter className = "container">
          <Main />
        </BrowserRouter>
  );
}

export default App;
