import React, { Component } from "react";
import ReactDOM from "react-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import { makeStyles } from "@material-ui/core/styles";
//import "materialize-css/dist/css/materialize.min.css";
import { Switch, Route, Link } from "react-router-dom";

import FaceIcon from "@material-ui/icons/Face";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import GroupIcon from "@material-ui/icons/Group";
import ForumIcon from "@material-ui/icons/Forum";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import { ACTIVITIES } from "../activitydata/activities.js"


class TeacherActivityLandingPage extends Component {
  constructor(props) {
    super(props);
    const { activity } = props.match.params
    this.data = ACTIVITIES[activity]
    this.state = {
      tabIndex: 0
    };
  }

  changeTab(event, newValue) {
    console.log("this is what's passed", newValue);
    this.setState({ tabIndex: newValue });
  }

  render() {

      //const dummy = <div style = {{flex: 1}}><h4  >Overview</h4>{overview}</div>

      const center = {display: "block",margin: "auto"}

      const description = {margin: "3%"}

      const teacherpath = this.data.WORD_PROBLEM ? "/wordproblems/" + this.data.ID : "/activities/" +this.data.ID 


      const overview = this.data.OVERVIEW.map((item,k)=>{
      return (<div><div style = {{justifyContent: "space-between",display: "flex",flexDirection: "row"}}><h5>{item.anchor}</h5><h5>{item.slides[0] + " - " + item.slides[1]}</h5></div><Divider />
      {item.description.map(b=><div style = {{display: "flex",flexDirection: "row"}}><Box style = {{marginLeft: "3%"}} fontSize={20}>&#8226;{" "+b}</Box></div>)}
      </div>)
      })
      const objectives = this.data.OBJECTIVES.map((obj,k)=><blockquote style = {{marginLeft: "5%"}}><Box fontSize={20}>{obj}</Box></blockquote>)
    return (
      <div style = {{flexDirection: "column",display: "flex",marginBottom: "10%"}}>
        <div className = "container">
        <div className ="section no-pad-bot" id="index-banner">
                <div className ="container">
          <h1 className ="header center orange-text">{this.data.TITLE}</h1>
          </div>
          <Link to={{pathname: `${teacherpath}`}}> <Button style = {center} variant = "outlined">Start Lesson</Button></Link>
          <p className = "flow-text dark-grey-text" style = {description}>
              {this.data.DESCRIPTION}
            </p>
          <div style = {{flexDirection: "row",display: "flex"}}>
          <div style = {{flex: 1}}>
          <div>
          <h4>Objectives</h4>
          {objectives}
          </div>
          </div>
          </div>
          </div>
        </div>
      </div>

    );
  }
}

export default TeacherActivityLandingPage;
