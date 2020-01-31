import React, { Component } from "react";
import ReactDOM from "react-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import { makeStyles } from "@material-ui/core/styles";
//import "materialize-css/dist/css/materialize.min.css";
import { Switch, Route, Link } from "react-router-dom";

import FaceIcon from "@material-ui/icons/Face";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GroupIcon from "@material-ui/icons/Group";
import ForumIcon from "@material-ui/icons/Forum";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import { ACTIVITIES } from "../activitydata/activities.js"
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
      <div style = {{display: 'flex',flexDirection: 'column'}}>
           <div className ="section no-pad-bot" id="index-banner">
             <h1 className ="header center orange-text">Fractions</h1>
          </div>
        <div className = "container">
            <Paper elevation = {2} style = {{flex: 1,margin: "1%",flexDirection: "row",display:"flex",justifyContent: "space-between"}}>
              <p style = {{marginLeft: 10}}className = "flow-text">Concepts</p>
              <Link style = {{display: "flex",margin: "1%",flexDirection: "row"}} to={{pathname: "/conceptlessons"}}>   
                <Button variant = "outlined" style = {{margin: 3}}>Word Problems</Button>
                <Button variant = "outlined" style = {{margin: 3}}>Activities</Button>
                </Link>
                
            </Paper>
            <Paper elevation = {2} style = {{flex: 1,margin: "1%",flexDirection: "row",display:"flex",justifyContent: "space-between"}}>
              <p style = {{marginLeft: 10}}className = "flow-text">Number Lines</p>
              <Link style = {{display: "flex",margin: "1%",flexDirection: "row"}} to={{pathname: "/numberlinelessons"}}>   
              <Button variant = "outlined" style = {{margin: 3}}>Word Problems</Button>
                <Button variant = "outlined" style = {{margin: 3}}>Activities</Button>
                </Link>
            </Paper>
            <Paper elevation = {2} style = {{flex: 1,margin: "1%",flexDirection: "row",display:"flex",justifyContent: "space-between"}}>
              <p style = {{marginLeft: 10}}className = "flow-text">Ordering and Equivalence</p>  
              <Link style = {{display: "flex",margin: "1%",flexDirection: "row"}} to={{pathname: "/equivalencelessons"}}>   
              <Button variant = "outlined" style = {{margin: 3}}>Word Problems</Button>
                <Button variant = "outlined" style = {{margin: 3}}>Activities</Button>
                </Link>
            </Paper>
        </div>
      </div>
    );
  }
}

export default LessonPage
