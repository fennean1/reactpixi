import React, { Component } from "react";
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
            <ActivityCard data={ACTIVITIES.friend_sharing} />
          </div>
          < div className="col s6">
          <ActivityCard data={ACTIVITIES.sand_pit} />
          </div>
        </div>
        <div className="row">
        < div className="col s6">
        <ActivityCard data={ACTIVITIES.snow_plow} />
          </div>
          < div className="col s6">
          <ActivityCard data={ACTIVITIES.sea_water} />
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
