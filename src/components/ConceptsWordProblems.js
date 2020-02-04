import React, { Component } from "react";
import ReactDOM from "react-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ActivityCard from "./ActivityCard";

import  {ACTIVITIES} from "../activitydata/activities.js"

class ConceptsWordProblems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    return (
      <div className = "container">
        <div className ="section no-pad-bot" id="index-banner">
          <div className ="container">
            <h1 className ="header center orange-text">Concept Word Problems</h1>
          </div>
        </div>
        <div className="row">
        < div className="col s6">
            <ActivityCard data={ACTIVITIES.pizza_crust} />
          </div>
        </div>
      </div>
    );
  }
}

export default ConceptsWordProblems;
