import React, { Component } from "react";
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
            <h1 className ="header center orange-text">Lessons</h1>
          </div>
        </div>
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
          <ActivityCard data={ACTIVITIES.placing_fractions} />
          </div>
          < div className="col s6">
          <ActivityCard data={ACTIVITIES.number_line_equivalence} />
          </div>
        </div>
        <div className="row">
          < div className="col s6">
          <ActivityCard data={ACTIVITIES.bar_equivalence} />
          </div>
          < div className="col s6">
          <ActivityCard data={ACTIVITIES.equivalent_area} />
          </div>
        </div>
        <div className="row">
          < div className="col s6">
          <ActivityCard data={ACTIVITIES.ordering_fractions} />
          </div>
          < div className="col s6">
          <ActivityCard data={ACTIVITIES.comparing_fractions} />
          </div>
        </div>
      </div>
    );
  }
}

export default ActivityList;
