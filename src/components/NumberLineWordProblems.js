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
            <ActivityCard data={ACTIVITIES.car_gas_tank} />
          </div>
        </div>
        <div className="row">
        < div className="col s6">
            <ActivityCard data={ACTIVITIES.helicopter_gas_tank} />
          </div>
          < div className="col s6">
            <ActivityCard data={ACTIVITIES.car_batteries} />
          </div>
        </div>
        <div className="row">
        < div className="col s6">
            <ActivityCard data={ACTIVITIES.snowmen_line} />
          </div>
        </div>
      </div>
    );
  }
}

export default NumberLineWordProblems;
