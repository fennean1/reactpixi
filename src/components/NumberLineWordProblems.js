import React, { Component } from "react";
import ReactDOM from "react-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ActivityCard from "./ActivityCard";

import  {ACTIVITIES} from "../activitydata/activities.js"

class NumberLineWordProblems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    return (
      <div>
        <div className="row">
        < div className="col s6">
            <ActivityCard data={ACTIVITIES.jiji_pond} />
          </div>
          < div className="col s6">
            <ActivityCard data={ACTIVITIES.jiji_resting} />
          </div>
        </div>
      </div>
    );
  }
}

export default NumberLineWordProblems;
