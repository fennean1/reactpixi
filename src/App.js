import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Arena from "./components/Arena"
import Panels from "./components/Panels"
import * as Pixi from "pixi.js";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import * as HundredsArrayScript from "./js/hundredsarray.js"
import * as NumberLineStripsScript from "./js/numberlinestrips.js"
import * as FractionWallScript from "./js/fractionwall.js";
import * as FractionLineScript from "./js/numberlinetool.js";
import * as GridToolScript from "./js/gridtool.js";
import * as OrderingToolScript from "./js/orderingtool.js";
import * as SharingToolScript from "./js/sharingtool.js";
import * as NumberStripsScript from "./js/numberlinestrips.js";
import * as CuisenaireToolScript from "./js/cuisenairetool.js";
import * as FractionStacksScript from "./js/fractionstacks.js";
import * as CapacityTalkData from "./activitydata/CapacityTalk.json";
import ActivityList from './components/ActivityList'
import ManipulativeCarousel from "./components/ManipulativeCarousel"
import SignIn from "./components/SignIn"

Pixi.settings.RESOLUTION = 3
let app = new Pixi.Application(0,0,{backgroundColor: 0xffffff,antialias: true});

const Main = () => (
  <div>
    <Route exact path="/hundredslock" component={() => <Arena app = {app} features = {{'lock': true}} fullscreen = {true} lesson = {CapacityTalkData.default} script = {HundredsArrayScript.init}/>} />
    <Route exact path="/activities/:activity" component={Panels}/>
    <Route exact path="/fractionline" component={() => <Arena app = {app} fullscreen = {true} lesson = {CapacityTalkData.default} script = {FractionLineScript.init}/>} />
    <Route exact path="/fractionstacks" component={() => <Arena app = {app} fullscreen = {true} lesson = {CapacityTalkData.default} script = {FractionStacksScript.init}/>} />
    <Route exact path="/orderingblocks" component={() => <Arena app = {app} fullscreen = {true} lesson = {CapacityTalkData.default} script = {OrderingToolScript.init}/>} />
    <Route exact path="/strips" component={() => <Arena app = {app} fullscreen = {true} lesson = {CapacityTalkData.default} script = {NumberLineStripsScript.init}/>} />
    <Route exact path="/" component={() => <ActivityList/>} />
    <Route exact path="/login" component={SignIn} />
    <Route exact path="/panels" component={Panels} />
    <Route exact path="/manipulatives" component={ManipulativeCarousel} />
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
