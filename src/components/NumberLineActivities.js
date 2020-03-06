import React, { Component } from "react";
import ReactDOM from "react-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ActivityCard from "./ActivityCard";

import  {ACTIVITIES} from "../activitydata/activities.js"

class NumberLineList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    return (
      <div>
        <div className="row">
          < div className="col s6">
          <ActivityCard data={ACTIVITIES.partitioning_number_lines} />
          </div>
          < div className="col s6">
          <ActivityCard data={ACTIVITIES.building_number_lines} />
          </div>
        </div>
        <div className="row">
          < div className="col s6">
          <ActivityCard data={ACTIVITIES.labeling_number_lines} />
          </div>
        </div>
      </div>
    );
  }
}

export default NumberLineList;
