import React, { Component } from "react";
import ReactDOM from "react-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import { makeStyles } from "@material-ui/core/styles";
//import "materialize-css/dist/css/materialize.min.css";
import { Switch, Route, Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";

//const LESSONS; // Need to import jsons here.

class LessonPage extends Component {
  constructor(props) {
    super(props);
    const {lesson} = props.match.params
    //this.data = LESSONS[lesson]
  }

  render() {
    
    return (
      <div className = "clouds backgroundImage">
      <div style = {{display: 'flex',flexDirection: 'column'}}>
           <div className ="section no-pad-bot" id="index-banner">
             <h1 className ="header center">Number Lines</h1>
          </div>
        <div className = "container" style = {{display: 'flex',flexDirection: 'row'}}>
              <Link style = {{flex: 1,margin: "1%",flexDirection: "row"}} to={{pathname: "/numberlinelessons"}}>   
              <Paper elevation = {2} style = {{flex: 1,flexDirection: "row",display:"flex",justifyContent: "center"}}>
              <p style = {{marginLeft: 10}}className = "flow-text">Activities</p>
              </Paper>
              </Link>
              <Link style = {{flex: 1,margin: "1%",flexDirection: "row"}} >   
              <Paper elevation = {2} style = {{flex: 1,flexDirection: "row",display:"flex",justifyContent: "center"}}>
              <p style = {{marginLeft: 10}}className = "flow-text grey-text">Word Problems</p>
              </Paper>
              </Link>
        </div>
        </div>
      </div>
    );
  }
}

export default LessonPage
