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
      <div>
        <div className="row">
        < div className="col s6">
            <ActivityCard data={ACTIVITIES.ice_blocks} />
          </div>
          < div className="col s6">
            <ActivityCard data={ACTIVITIES.jiji_stairs} />
          </div>
        </div>
        <div className="row">
        < div className="col s6">
            <ActivityCard data={ACTIVITIES.measuring_cups} />
          </div>
          < div className="col s6">
            <ActivityCard data={ACTIVITIES.jiji_cookie} />
          </div>
        </div>
      </div>
    );
  }
}

export default ConceptsWordProblems;
