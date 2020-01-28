import React, { Component } from "react";
import ReactDOM from "react-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import { makeStyles } from "@material-ui/core/styles";
//import "materialize-css/dist/css/materialize.min.css";
import { Switch, Route, Link } from "react-router-dom";

import FaceIcon from "@material-ui/icons/Face";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
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
      const list = [0,1,2,3,4].map((l,i)=>{
          return (<Link key = {i} to = {l.link}>
            <Button style ={{margin: 5}} variant="outlined" color="primary">
            {l.title}
            </Button>
        </Link>)
      })
    return (
      <div className="row">
        <div className ="section no-pad-bot" id="index-banner">
                <div className ="container">
                 <h1 className ="header center orange-text">Title</h1>
          </div>
        </div>
        <br />  
        <br />
        <div style = {{display: 'flex',flexDirection: 'row'}}>
        <Chip  size = "large" label="1 - 3"  />    
        <h3>Balls</h3>
        </div>
        <div className="center">
        <Button style ={{margin: 5}} variant="outlined" >
            Start
          </Button>
        </div>
      </div>
    );
  }
}

export default TeacherActivityLandingPage;
