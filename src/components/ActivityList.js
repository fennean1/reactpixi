import React, { Component } from "react";
import ReactDOM from "react-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ActivityCard from "./ActivityCard";

import  {ACTIVITIES} from "../activitydata/activities.js"

class ActivityList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    return (
      <div className = "container">
        <div className ="section no-pad-bot" id="index-banner">
          <div className ="container">
            <h1 className ="header center grey-text">Activities</h1>
          </div>
        </div>
        <div className="row">
        < div className="col s6">
           <ActivityCard data={ACTIVITIES.ordering_blocks_number_line} />
          </div>
          <div className="col s6">
           <ActivityCard data={ACTIVITIES.hundred_grid_building_numbers} />
          </div>
        </div>
        <div className="row">
        < div className="col s6">
           <ActivityCard data={ACTIVITIES.jiji_sharing_pizza} />
          </div>
        </div>
      </div>
    );
  }
}

export default ActivityList;
