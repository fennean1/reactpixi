import React from 'react';
import './App.css';
import Arena from "./components/Arena"
//import Panels from "./components/Panels"
import * as Pixi from "pixi.js";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import * as HundredsArrayScript from "./js/hundredsarray.js"
import * as NumberLineStripsScript from "./js/numberlinestrips.js"
//import * as FractionWallScript from "./js/fractionwall.js";
import * as FractionLineScript from "./js/numberlinetool.js";
//import * as GridToolScript from "./js/gridtool.js";
import * as OrderingToolScript from "./js/orderingtool.js";
import * as SharingToolScript from "./js/sharingtool.js";
//import * as NumberStripsScript from "./js/numberlinestrips.js";
//import * as CuisenaireToolScript from "./js/cuisenairetool.js";
import * as FractionBarToolScript from "./js/fractionbar.js";
import * as FractionStacksScript from "./js/fractionstacks.js";
import * as CalculatorScript from "./js/calculator.js";
import * as OldFractionWallScript from "./js/oldfractionwall.js";
import * as GridNodeScript from "./js/gridnodes.js";
import * as ApiTestScript from "./js/testapi.js";
//import * as CutterTestScript from "./js/testcutter.js";
import * as NewFractionStacksScript from "./js/newfractionwall.js";
import * as WallToolScript from "./js/walltool.js";
import * as GridCuttingScript from "./js/gridcutting.js";
import * as FractionNumberLineScript from "./js/fractionnumberline.js";
import * as PlacingNumbersScript from "./js/placingnumbers.js";
import * as BeakerGameScript from "./js/beakergame.js";
import * as VerticalFractionStacksScript from "./js/verticalfractionstacks.js";
import * as BuildAndCutScript from "./js/buildandcut.js";


import ActivityList from './components/ActivityList'
import WordProblemCard from './components/WordProblemCard'
import FactorBlocks from './components/FactorBlocks'
import ManipulativeCarousel from "./components/ManipulativeCarousel"
//import Test from "./components/ResizeTest"
import StudentLandingPage from "./components/StudentLandingPage"
import TeacherLandingPage from "./components/TeacherLandingPage"
import LessonPage from "./components/LessonPage"
import WordProblemPortal from "./components/WordProblemPortal"
import WordProblemPortalImg from "./components/WordProblemPortalImg"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import EquivalenceList from './components/EquivalenceActivities'

// Concepts
import ConceptsWordProblems from './components/ConceptsWordProblems';
import ConceptsList from './components/ConceptsActivities';
import ConceptsCarousel from './components/ConceptsCarousel';
import NumberLineCarousel from './components/NumberLineCarousel';
import EquivalenceCarousel from './components/EquivalenceCarousel';
import NumberLineList from './components/NumberLineActivities';
import LandingPage from './components/LandingPage'
import DualArena from './components/DualArena';
import Overview from './components/Overview';
import WordProblems from './components/WordProblemsList';


import PortraitPortal from './components/PortraitPortal';
import NewPanels from './components/NewPanels';



Pixi.settings.RESOLUTION = 3
let app = new Pixi.Application(0,0,{backgroundColor: 0xffffff,antialias: true});
app.static = false
app.loaded = false
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
    <Route exact path="/calculator" render={() => <Arena app = {app} features = {{'lock': false}} fullscreen = {true}  script = {CalculatorScript.init}/>} />
    <Route exact path="/hundreds" render={() => <Arena app = {app} features = {{'lock': false}} fullscreen = {true}  script = {HundredsArrayScript.init}/>} />
    <Route exact path="/hundredslock" render={() => <Arena app = {app} features = {{'lock': true}} fullscreen = {true}  script = {HundredsArrayScript.init}/>} />
    <Route exact path="/hundredsregroup" render={() => <Arena app = {app} features = {{'lock': true,'regroup': true}} fullscreen = {true}  script = {HundredsArrayScript.init}/>} />
    <Route exact path="/fractionwall" render={() => <Arena app = {app} fullscreen = {true}  script = {NewFractionStacksScript.init}/>} />
    <Route exact path="/fractionbars" render={() => <Arena app = {app} fullscreen = {true}  script = {FractionBarToolScript.init}/>} />
    <Route exact path="/fractionwallodd" render={() => <Arena app = {app} features = {{'values': [1,3,5,7,9,11]}} fullscreen = {true}  script = {NewFractionStacksScript.init}/>} />
    <Route exact path="/fractionwalladjustable" render={() => <Arena app = {app} features = {{'values': [1,2,3,4,5,6,7,8,9,10,11,12],'adjustable': true}} fullscreen = {true}  script = {NewFractionStacksScript.init}/>} />
    <Route exact path="/fractionwalleven" render={() => <Arena app = {app} features = {{'values': [2,4,6,8,10,12]}} fullscreen = {true}  script = {NewFractionStacksScript.init}/>} />
    <Route exact path="/oldfractionwall" render={() => <Arena app = {app} features = {{'lock': true,'regroup': true}} fullscreen = {true}  script = {OldFractionWallScript.init}/>} />
    <Route exact path="/fractionline" render={() => <Arena app = {app} fullscreen = {true}  script = {FractionLineScript.init}/>} />
    <Route exact path="/apitest" render={() => <Arena app = {app} fullscreen = {true}  script = {ApiTestScript.init}/>} />
    <Route exact path="/fractionnumberlineopen" render={() => <Arena app = {app} fullscreen = {true} features = {{open: true}} script = {FractionNumberLineScript.init}/>} />
    <Route exact path="/fractionnumberlineopenblocks" render={() => <Arena app = {app} fullscreen = {true} features = {{open: true,blocks: true}} script = {FractionNumberLineScript.init}/>} />
    <Route exact path="/fractionnumberline" render={() => <Arena app = {app} fullscreen = {true} features = {{open: false}}  script = {FractionNumberLineScript.init}/>} />
    <Route exact path="/fractionnumberlineblocks" render={() => <Arena app = {app} fullscreen = {true} features = {{open: false,blocks: true}} script = {FractionNumberLineScript.init}/>} />
    <Route exact path="/fractionstacks" render={() => <Arena app = {app} fullscreen = {true} features = {{snapping: true,double: true,numberOfBlocks: 4,lineMax: 30}} script = {FractionStacksScript.init}/>} />
    <Route exact path="/verticalfractionstacks" render={() => <Arena app = {app} fullscreen = {true} features = {{snapping: false,double: false,numberOfBlocks: 2,lineMax: 30}} script = {VerticalFractionStacksScript.init}/>} />
    <Route exact path="/fractionstacksx2" render={() => <Arena app = {app} fullscreen = {true} features = {{double: true,numberOfBlocks: 2,lineMax: 20}} script = {FractionStacksScript.init}/>} />
    <Route exact path="/orderingblocksx2" render={() => <Arena app = {app} features = {{numberOfBlocks: 2,descriptor: true}} fullscreen = {true} script = {OrderingToolScript.init}/>} />
    <Route exact path="/orderingblocksx3nodesc" render={() => <Arena app = {app} features = {{numberOfBlocks: 3,descriptor: false}} fullscreen = {true} script = {OrderingToolScript.init}/>} />
    <Route exact path="/orderingblocksx4" render={() => <Arena app = {app} features = {{numberOfBlocks: 4,descriptor: true}} fullscreen = {true} script = {OrderingToolScript.init}/>} />
    <Route exact path="/orderingblocksx5" render={(props) => <Arena app = {app} features = {{numberOfBlocks: 5,descriptor: true}} fullscreen = {true} script = {OrderingToolScript.init}/>} />
    <Route exact path="/strips" render={() => <Arena app = {app} fullscreen = {true}  script = {NumberLineStripsScript.init}/>} />
    <Route exact path="/gridnodes" render={() => <Arena app = {app} features = {{x: 3,y: 3}} fullscreen = {true}  script = {GridNodeScript.init}/>} />
    <Route exact path="/stripsopen" render={() => <Arena app = {app} fullscreen = {true} features  = {{'open': true}}  script = {NumberLineStripsScript.init}/>} />
    <Route exact path="/gridnodes4x4" render={() => <Arena app = {app} fullscreen = {true} features = {{x: 5,y: 5,descriptor: false}} script = {GridNodeScript.init}/>} />
    <Route exact path="/gridnodes4x4desc" render={() => <Arena app = {app} fullscreen = {true} features = {{x: 5,y: 5,descriptor: true}} script = {GridNodeScript.init}/>} />
    <Route exact path="/gridnodes4x4double" render={() => <Arena app = {app} fullscreen = {true} features = {{x: 10,y: 5,double: true,descriptor: false}} script = {GridNodeScript.init}/>} />
    <Route exact path="/gridnodes2x2" render={() => <Arena app = {app} fullscreen = {true} features = {{x: 3,y: 3,descriptor: false}} script = {GridNodeScript.init}/>} />
    <Route exact path="/gridnodes3x3" render={() => <Arena app = {app} fullscreen = {true} features = {{x: 4,y: 4,descriptor: false}} script = {GridNodeScript.init}/>} />
    <Route exact path="/gridnodes12x12" render={() => <Arena app = {app} fullscreen = {true} features = {{x: 13,y: 13,descriptor: true}} script = {GridNodeScript.init}/>} />
    <Route exact path="/gridcutting" render={() => <Arena app = {app} fullscreen = {true} features = {{x: 5,y: 5,descriptor: false}} script = {GridCuttingScript.init}/>} />
    <Route exact path="/gridcuttingsnap" render={() => <Arena app = {app} fullscreen = {true} features = {{x: 4,y: 4,descriptor: false,snapping: true}} script = {GridCuttingScript.init}/>} />
    <Route exact path="/placingnumbers" render={() => <Arena app = {app} fullscreen = {true} features = {{x: 4,y: 4,descriptor: false,snapping: true}} script = {PlacingNumbersScript.init}/>} />
    <Route exact path="/estimation-game-one" render={() => <Arena app = {app} activity = {"ACTIVITY_ONE"} fullscreen = {true} features = {{x: 4,y: 4,descriptor: false,snapping: true}} script = {BeakerGameScript.init}/>} />
    <Route exact path="/walltooldouble" render={() => <Arena app = {app} fullscreen = {true} features = {{x: 4,y: 4,descriptor: false,snapping: true}} script = {WallToolScript.init}/>} />
    <Route exact path="/walltoolsingle" render={() => <Arena app = {app} fullscreen = {true} features = {{x: 4,y: 4,descriptor: false,snapping: true,single: true}} script = {WallToolScript.init}/>} />
    <Route exact path="/gridcuttingsnap4x4" render={() => <Arena app = {app} fullscreen = {true} features = {{x: 5,y: 5,descriptor: false,snapping: true}} script = {GridCuttingScript.init}/>} />
    <Route exact path="/numberline-partitioning-game-one" render={() => <Arena activity = {"PARTITIONING_ACTIVITY_ONE"} app = {app} fullscreen = {true}  script = {PlacingNumbersScript.init}/>} />
    <Route exact path="/numberline-partitioning-game-two" render={() => <Arena activity = {"PARTITIONING_ACTIVITY_TWO"} app = {app} fullscreen = {true}  script = {PlacingNumbersScript.init}/>} />
    <Route exact path="/numberline-building-game-one" render={() => <Arena activity = {"BUILDING_ACTIVITY_ONE"} app = {app} fullscreen = {true}  script = {PlacingNumbersScript.init}/>} />
    <Route exact path="/numberline-building-game-two" render={() => <Arena activity = {"BUILDING_ACTIVITY_TWO"} app = {app} fullscreen = {true}  script = {PlacingNumbersScript.init}/>} />
    <Route exact path="/sharingtool" render={() => <Arena a app = {app} fullscreen = {true} script = {SharingToolScript.init}/>} />
    <Route exact path="/activities/:activity" component={NewPanels}/>
    <Route exact path="/allactivities" component={ActivityList} />
    <Route exact path="/landing/:activity" component={StudentLandingPage}/>
    <Route exact path="/factorblocks" component={FactorBlocks} />
    <Route exact path="/concepts" component={ConceptsCarousel} />
    <Route exact path="/numberlines" component={NumberLineCarousel} />
    <Route exact path="/orderequivalence" component={EquivalenceCarousel} />
    <Route exact path="/manipulatives" component={ManipulativeCarousel} />
    <Route exact path="/lessons/:lesson" component={LessonPage} />
    <Route exact path="/studentlandingpage" component={StudentLandingPage} />
    <Route exact path="/overview/:activity" component={TeacherLandingPage} />
    <Route exact path="/dualarena/:key" component={DualArena} />
    <Route exact path="/equivalencelessons" component={EquivalenceList} />
    <Route exact path="/conceptslessons" component={ConceptsList} />
    <Route exact path="/conceptswordproblems" component={ConceptsWordProblems} />
    <Route exact path="/numberlinelessons" component={NumberLineList} />
    <Route path="/wordproblems/:activity" component={WordProblemPortalImg} />
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/portrait" component={PortraitPortal} />
    <Route exact path="/fullprompt" component={LandingPage} />
    <Route exact path="/newpanel/:activity" component={NewPanels} />
    <Route exact path="/fulltool" component={LandingPage} />
    <Route exact path="/wordproblemcard" component={WordProblemCard} />
    <Route exact path="/wordproblems" component={WordProblems} />
    <Route exact path="/overview" component={Overview} />
    <Route exact path="/buildandcut" render={() => <Arena app = {app} fullscreen = {true} features = {{x: 13,y: 13,descriptor: true}} script = {BuildAndCutScript.init}/>} />
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
