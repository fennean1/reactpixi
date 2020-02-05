import React from 'react';
import './App.css';
import Arena from "./components/Arena"
import Panels from "./components/Panels"
import * as Pixi from "pixi.js";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import * as HundredsArrayScript from "./js/hundredsarray.js"
import * as NumberLineStripsScript from "./js/numberlinestrips.js"
//import * as FractionWallScript from "./js/fractionwall.js";
import * as FractionLineScript from "./js/numberlinetool.js";
//import * as GridToolScript from "./js/gridtool.js";
import * as OrderingToolScript from "./js/orderingtool.js";
//import * as SharingToolScript from "./js/sharingtool.js";
//import * as NumberStripsScript from "./js/numberlinestrips.js";
//import * as CuisenaireToolScript from "./js/cuisenairetool.js";
import * as FractionBarToolScript from "./js/fractionbar.js";
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
import * as PlacingNumbersScript from "./js/placingnumbers.js";
import * as BeakerGameScript from "./js/beakergame.js";
import ActivityList from './components/ActivityList'
import FactorBlocks from './components/FactorBlocks'
import ManipulativeCarousel from "./components/ManipulativeCarousel"
import StudentDashboard from "./components/StudentDashboard"
//import TeacherDashboard from "./components/TeacherDashboard"
import SignIn from "./components/SignIn"
import Test from "./components/ResizeTest"
import testCSS from "./components/testCSS"
import StudentLandingPage from "./components/StudentLandingPage"
import TeacherLandingPage from "./components/TeacherLandingPage"
import LessonPage from "./components/LessonPage"
import WordProblemPortal from "./components/WordProblemPortal"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import EquivalenceList from './components/EquivalenceActvitities';
import ConceptsLanding from './components/ConceptsLanding';
import ConceptsWordProblems from './components/ConceptsWordProblems';
import ConceptsCarousel from './components/ConceptsCarousel';
import NumberLineLanding from './components/NumberLineLanding';
import EquivalenceLanding from './components/EquivalenceLanding';
import ConceptsList from './components/ConceptsActivities';
import NumberLineList from './components/NumberLineActivities';
import LandingPage from './components/LandingPage'
import DualArena from './components/DualArena';
import Overview from './components/Overview';

Pixi.settings.RESOLUTION = 3
let app = new Pixi.Application(0,0,{backgroundColor: 0xffffff,antialias: true});
app.static = false
app.loaded = false
console.log("texture cache",Object.keys(Pixi.utils.TextureCache).length)
Object.keys(Pixi.utils.TextureCache).forEach(function(texture) {  Pixi.utils.TextureCache[texture].destroy(true);});

// Or Create your Own theme:
const theme = createMuiTheme({
  palette: {
    primary: {
        main: "#57a5ff"
      }
    }
  },
)

const Main = () => (
  <div>
    <Route exact path="/calculator" component={() => <Arena app = {app} features = {{'lock': false}} fullscreen = {true}  script = {CalculatorScript.init}/>} />
    <Route exact path="/hundreds" component={() => <Arena app = {app} features = {{'lock': false}} fullscreen = {true}  script = {HundredsArrayScript.init}/>} />
    <Route exact path="/hundredslock" component={() => <Arena app = {app} features = {{'lock': true}} fullscreen = {true}  script = {HundredsArrayScript.init}/>} />
    <Route exact path="/hundredsregroup" component={() => <Arena app = {app} features = {{'lock': true,'regroup': true}} fullscreen = {true}  script = {HundredsArrayScript.init}/>} />
    <Route exact path="/fractionwall" component={() => <Arena app = {app} fullscreen = {true}  script = {NewFractionStacksScript.init}/>} />
    <Route exact path="/fractionbars" component={() => <Arena app = {app} fullscreen = {true}  script = {FractionBarToolScript.init}/>} />
    <Route exact path="/fractionwallodd" component={() => <Arena app = {app} features = {{'values': [1,3,5,7,9,11]}} fullscreen = {true}  script = {NewFractionStacksScript.init}/>} />
    <Route exact path="/fractionwalladjustable" component={() => <Arena app = {app} features = {{'values': [1,2,3,4,5,6,7,8,9,10,11,12],'adjustable': true}} fullscreen = {true}  script = {NewFractionStacksScript.init}/>} />
    <Route exact path="/fractionwalleven" component={() => <Arena app = {app} features = {{'values': [2,4,6,8,10,12]}} fullscreen = {true}  script = {NewFractionStacksScript.init}/>} />
    <Route exact path="/oldfractionwall" component={() => <Arena app = {app} features = {{'lock': true,'regroup': true}} fullscreen = {true}  script = {OldFractionWallScript.init}/>} />
    <Route exact path="/activities/:activity" component={Panels}/>
    <Route exact path="/landing/:activity" component={StudentLandingPage}/>
    <Route exact path="/fractionline" component={() => <Arena app = {app} fullscreen = {true}  script = {FractionLineScript.init}/>} />
    <Route exact path="/apitest" component={() => <Arena app = {app} fullscreen = {true}  script = {ApiTestScript.init}/>} />
    <Route exact path="/fractionnumberlineopen" component={() => <Arena app = {app} fullscreen = {true} features = {{open: true}} script = {FractionNumberLineScript.init}/>} />
    <Route exact path="/fractionnumberlineopenblocks" component={() => <Arena app = {app} fullscreen = {true} features = {{open: true,blocks: true}} script = {FractionNumberLineScript.init}/>} />
    <Route exact path="/fractionnumberline" component={() => <Arena app = {app} fullscreen = {true} features = {{open: false}}  script = {FractionNumberLineScript.init}/>} />
    <Route exact path="/fractionnumberlineblocks" component={() => <Arena app = {app} fullscreen = {true} features = {{open: false,blocks: true}} script = {FractionNumberLineScript.init}/>} />
    <Route exact path="/fractionstacks" component={() => <Arena app = {app} fullscreen = {true}  script = {FractionStacksScript.init}/>} />
    <Route exact path="/orderingblocksx2" component={() => <Arena app = {app} features = {{numberOfBlocks: 2}} fullscreen = {true} script = {OrderingToolScript.init}/>} />
    <Route exact path="/orderingblocksx4" component={() => <Arena app = {app} features = {{numberOfBlocks: 4}} fullscreen = {true} script = {OrderingToolScript.init}/>} />
    <Route exact path="/strips" component={() => <Arena app = {app} fullscreen = {true}  script = {NumberLineStripsScript.init}/>} />
    <Route exact path="/gridnodes" component={() => <Arena app = {app} features = {{x: 3,y: 3}} fullscreen = {true}  script = {GridNodeScript.init}/>} />
    <Route exact path="/stripsopen" component={() => <Arena app = {app} fullscreen = {true} features  = {{'open': true}}  script = {NumberLineStripsScript.init}/>} />
    <Route exact path="/" component={ActivityList} />
    <Route exact path="/gridnodes4x4" component={() => <Arena app = {app} fullscreen = {true} features = {{x: 5,y: 5,descriptor: true}} script = {GridNodeScript.init}/>} />
    <Route exact path="/gridnodes4x4double" component={() => <Arena app = {app} fullscreen = {true} features = {{x: 10,y: 5,double: true,descriptor: false}} script = {GridNodeScript.init}/>} />
    <Route exact path="/gridnodes2x2" component={() => <Arena app = {app} fullscreen = {true} features = {{x: 3,y: 3,descriptor: false}} script = {GridNodeScript.init}/>} />
    <Route exact path="/gridnodes3x3" component={() => <Arena app = {app} fullscreen = {true} features = {{x: 4,y: 4,descriptor: false}} script = {GridNodeScript.init}/>} />
    <Route exact path="/gridnodes12x12" component={() => <Arena app = {app} fullscreen = {true} features = {{x: 13,y: 13,descriptor: true}} script = {GridNodeScript.init}/>} />
    <Route exact path="/cutter" component={() => <Arena app = {app} fullscreen = {true}  script = {CutterTestScript.init}/>} />
    <Route exact path="/gridcutting" component={() => <Arena app = {app} fullscreen = {true} features = {{x: 5,y: 5,descriptor: false}} script = {GridCuttingScript.init}/>} />
    <Route exact path="/gridcuttingsnap" component={() => <Arena app = {app} fullscreen = {true} features = {{x: 4,y: 4,descriptor: false,snapping: true}} script = {GridCuttingScript.init}/>} />
    <Route exact path="/placingnumbers" component={() => <Arena app = {app} fullscreen = {true} features = {{x: 4,y: 4,descriptor: false,snapping: true}} script = {PlacingNumbersScript.init}/>} />
    <Route exact path="/estimation-game-one" component={() => <Arena app = {app} activity = {"ACTIVITY_ONE"} fullscreen = {true} features = {{x: 4,y: 4,descriptor: false,snapping: true}} script = {BeakerGameScript.init}/>} />
    <Route exact path="/walltooldouble" component={() => <Arena app = {app} fullscreen = {true} features = {{x: 4,y: 4,descriptor: false,snapping: true}} script = {WallToolScript.init}/>} />
    <Route exact path="/walltoolsingle" component={() => <Arena app = {app} fullscreen = {true} features = {{x: 4,y: 4,descriptor: false,snapping: true,single: true}} script = {WallToolScript.init}/>} />
    <Route exact path="/gridcuttingsnap4x4" component={() => <Arena app = {app} fullscreen = {true} features = {{x: 5,y: 5,descriptor: false,snapping: true}} script = {GridCuttingScript.init}/>} />
    <Route exact path="/numberline-partitioning-game-one" component={() => <Arena activity = {"PARTITIONING_ACTIVITY_ONE"} app = {app} fullscreen = {true}  script = {PlacingNumbersScript.init}/>} />
    <Route exact path="/numberline-partitioning-game-two" component={() => <Arena activity = {"PARTITIONING_ACTIVITY_TWO"} app = {app} fullscreen = {true}  script = {PlacingNumbersScript.init}/>} />
    <Route exact path="/numberline-building-game-one" component={() => <Arena activity = {"BUILDING_ACTIVITY_ONE"} app = {app} fullscreen = {true}  script = {PlacingNumbersScript.init}/>} />
    <Route exact path="/numberline-building-game-two" component={() => <Arena activity = {"BUILDING_ACTIVITY_TWO"} app = {app} fullscreen = {true}  script = {PlacingNumbersScript.init}/>} />
    <Route exact path="/login" component={SignIn} />
    <Route exact path="/testCSS" component={testCSS} />
    <Route exact path="/factorblocks" component={FactorBlocks} />
    <Route exact path="/concepts" component={ConceptsCarousel} />
    <Route exact path="/numberlines" component={NumberLineLanding} />
    <Route exact path="/orderequivalence" component={EquivalenceLanding} />
    <Route exact path="/manipulatives" component={ManipulativeCarousel} />
    <Route exact path="/lessons/:lesson" component={LessonPage} />
    <Route exact path="/studentlandingpage" component={StudentLandingPage} />
    <Route exact path="/overview/:activity" component={TeacherLandingPage} />
    <Route exact path="/dualarena/:key" component={DualArena} />
    <Route exact path="/studentdashboard" component={StudentDashboard} />
    <Route exact path="/resizetest" component={Test} />
    <Route exact path="/equivalencelessons" component={EquivalenceList} />
    <Route exact path="/conceptslessons" component={ConceptsList} />
    <Route exact path="/conceptswordproblems" component={ConceptsWordProblems} />
    <Route exact path="/numberlinelessons" component={NumberLineList} />
    <Route exact path="/wordproblems/:activity" component={WordProblemPortal} />
    <Route exact path="/landingpage" component={LandingPage} />
    <Route exact path="/overview" component={Overview} />
  </div>
);



function App() {
  return (
      <MuiThemeProvider theme = {theme}>
          <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}  className = "container">
           <Main/>
          </BrowserRouter>
       </MuiThemeProvider>
  );
}

export default App;
