import React, { Component } from "react";
import ReactDOM from "react-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ActivityCard from "./ActivityCard";

import  {ACTIVITIES} from "../activitydata/activities.js"

class ConceptsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    return (
      <div>
        <div className="row">
        < div className="col s6">
        <ActivityCard data={ACTIVITIES.beaker_estimation} />
          </div>
          <div className="col s6">
          <ActivityCard data={ACTIVITIES.jiji_sharing_pizza} />
          </div>
        </div>
        <div className="row">
        < div className="col s6">
        <ActivityCard data={ACTIVITIES.tile_less_than_one} />
          </div>
          < div className="col s6">
          <ActivityCard data={ACTIVITIES.tile_greater_than_one} />
          </div>
        </div>
      </div>
    );
  }
}

export default ConceptsList;
