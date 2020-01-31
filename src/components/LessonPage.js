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
             <h1 className ="header center orange-text">Day One</h1>
          </div>
        <div className = "container">
            <Paper elevation = {2} style = {{flex: 1,margin: "1%",flexDirection: "row",display:"flex",justifyContent: "space-between"}}>
              <p style = {{marginLeft: 10}}className = "flow-text">Do this</p>
              <div style = {{display: "flex",margin: "1%",flexDirection: "row"}}>       
                <Button  variant = "outlined" style = {{margin: 3}}>Student</Button>
                <Button variant = "outlined" style = {{margin: 3}}>Teacher</Button></div>
            </Paper>
            <Paper elevation = {2} style = {{flex: 1,margin: "1%",flexDirection: "row",display:"flex",justifyContent: "space-between"}}>
              <p style = {{marginLeft: 10}}className = "flow-text">Then This</p>
              <div style = {{display: "flex",margin: "1%",flexDirection: "row"}}>       
                <Button  variant = "outlined" style = {{margin: 3}}>Student</Button>
                <Button variant = "outlined" style = {{margin: 3}}>Teacher</Button></div>
            </Paper>
            <Paper elevation = {2} style = {{flex: 1,margin: "1%",flexDirection: "row",display:"flex",justifyContent: "space-between"}}>
              <p style = {{marginLeft: 10}}className = "flow-text">Then This</p>
              <div style = {{display: "flex",margin: "1%",flexDirection: "row"}}>       
                <Button  variant = "outlined" style = {{margin: 3}}>Student</Button>
                <Button variant = "outlined" style = {{margin: 3}}>Teacher</Button></div>
            </Paper>
        </div>
      </div>
    );
  }
}

export default LessonPage
