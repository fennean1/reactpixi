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
import * as CalculatorScript from "./js/calculator.js";
import * as OldFractionWallScript from "./js/oldfractionwall.js";
import * as GridNodeScript from "./js/gridnodes.js";
import * as ApiTestScript from "./js/testapi.js";
import * as CutterTestScript from "./js/testcutter.js";
import * as NewFractionStacksScript from "./js/newfractionwall.js";
import * as WallToolScript from "./js/walltool.js";
import * as GridCuttingScript from "./js/gridcutting.js";
import * as FractionNumberLineScript from "./js/fractionnumberline.js";
import * as CapacityTalkData from "./activitydata/CapacityTalk.json";
import ActivityList from './components/ActivityList'
import ManipulativeCarousel from "./components/ManipulativeCarousel"
import StudentDashboard from "./components/StudentDashboard"
import TeacherDashboard from "./components/TeacherDashboard"
import SignIn from "./components/SignIn"
import Test from "./components/ResizeTest"
import testCSS from "./components/testCSS"

import { Document, Page,pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

Pixi.settings.RESOLUTION = 3
let app = new Pixi.Application(0,0,{backgroundColor: 0xffffff,antialias: true});

const Main = () => (
  <div>
    <Route exact path="/calculator" component={() => <Arena app = {app} features = {{'lock': false}} fullscreen = {true}  script = {CalculatorScript.init}/>} />
    <Route exact path="/hundreds" component={() => <Arena app = {app} features = {{'lock': false}} fullscreen = {true}  script = {HundredsArrayScript.init}/>} />
    <Route exact path="/hundredslock" component={() => <Arena app = {app} features = {{'lock': true}} fullscreen = {true}  script = {HundredsArrayScript.init}/>} />
    <Route exact path="/hundredsregroup" component={() => <Arena app = {app} features = {{'lock': true,'regroup': true}} fullscreen = {true}  script = {HundredsArrayScript.init}/>} />
    <Route exact path="/fractionwall" component={() => <Arena app = {app} fullscreen = {true}  script = {NewFractionStacksScript.init}/>} />
    <Route exact path="/fractionwallodd" component={() => <Arena app = {app} features = {{'values': [1,3,5,7,9,11]}} fullscreen = {true}  script = {NewFractionStacksScript.init}/>} />
    <Route exact path="/fractionwalladjustable" component={() => <Arena app = {app} features = {{'values': [1,2,3,4,5,6,7,8,9,10,11,12],'adjustable': true}} fullscreen = {true}  script = {NewFractionStacksScript.init}/>} />
    <Route exact path="/fractionwalleven" component={() => <Arena app = {app} features = {{'values': [2,4,6,8,10,12]}} fullscreen = {true}  script = {NewFractionStacksScript.init}/>} />
    <Route exact path="/oldfractionwall" component={() => <Arena app = {app} features = {{'lock': true,'regroup': true}} fullscreen = {true}  script = {OldFractionWallScript.init}/>} />
    <Route exact path="/activities/:activity" component={Panels}/>
    <Route exact path="/fractionline" component={() => <Arena app = {app} fullscreen = {true}  script = {FractionLineScript.init}/>} />
    <Route exact path="/apitest" component={() => <Arena app = {app} fullscreen = {true}  script = {ApiTestScript.init}/>} />
    <Route exact path="/fractionnumberline" component={() => <Arena app = {app} fullscreen = {true}  script = {FractionNumberLineScript.init}/>} />
    <Route exact path="/fractionstacks" component={() => <Arena app = {app} fullscreen = {true}  script = {FractionStacksScript.init}/>} />
    <Route exact path="/orderingblocks" component={() => <Arena app = {app} features = {{numberOfBlocks: 3}} fullscreen = {true} script = {OrderingToolScript.init}/>} />
    <Route exact path="/strips" component={() => <Arena app = {app} fullscreen = {true}  script = {NumberLineStripsScript.init}/>} />
    <Route exact path="/gridnodes" component={() => <Arena app = {app} features = {{x: 3,y: 3}} fullscreen = {true}  script = {GridNodeScript.init}/>} />
    <Route exact path="/stripsopen" component={() => <Arena app = {app} fullscreen = {true} features  = {{'open': true}}  script = {NumberLineStripsScript.init}/>} />
    <Route exact path="/" component={() => <ActivityList/>} />
    <Route exact path="/gridnodes4x4" component={() => <Arena app = {app} fullscreen = {true} features = {{x: 5,y: 5,descriptor: true}} script = {GridNodeScript.init}/>} />
    <Route exact path="/gridnodes3x3" component={() => <Arena app = {app} fullscreen = {true} features = {{x: 4,y: 4,descriptor: false}} script = {GridNodeScript.init}/>} />
    <Route exact path="/gridnodes12x12" component={() => <Arena app = {app} fullscreen = {true} features = {{x: 13,y: 13,descriptor: true}} script = {GridNodeScript.init}/>} />
    <Route exact path="/cutter" component={() => <Arena app = {app} fullscreen = {true}  script = {CutterTestScript.init}/>} />
    <Route exact path="/gridcutting" component={() => <Arena app = {app} fullscreen = {true} features = {{x: 4,y: 4,descriptor: false}} script = {GridCuttingScript.init}/>} />
    <Route exact path="/gridcuttingsnap" component={() => <Arena app = {app} fullscreen = {true} features = {{x: 4,y: 4,descriptor: false,snapping: true}} script = {GridCuttingScript.init}/>} />
    <Route exact path="/walltool" component={() => <Arena app = {app} fullscreen = {true} features = {{x: 4,y: 4,descriptor: false,snapping: true}} script = {WallToolScript.init}/>} />
    <Route exact path="/gridcuttingsnap4x4" component={() => <Arena app = {app} fullscreen = {true} features = {{x: 5,y: 5,descriptor: false,snapping: true}} script = {GridCuttingScript.init}/>} />
    <Route exact path="/login" component={SignIn} />
    <Route exact path="/testCSS" component={testCSS} />
    <Route exact path="/panels" component={Panels} />
    <Route exact path="/manipulatives" component={ManipulativeCarousel} />
    <Route exact path="/studentdashboard" component={StudentDashboard} />
    <Route path="/teacherdashboard" component={TeacherDashboard} />
    <Route exact path="/resizetest" component={Test} />
  </div>
);



function App() {
  return (
       <BrowserRouter className = "container">
         <Main/>
        </BrowserRouter>
  );
}

export default App;
