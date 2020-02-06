import React, { Component } from "react";
import ActivityCard from "./ActivityCard";

import  {ACTIVITIES} from "../activitydata/activities.js"

class EquivalenceList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    return (
      <div>
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
          <ActivityCard data={ACTIVITIES.comparing_fractions} />
          </div>
          < div className="col s6">
          <ActivityCard data={ACTIVITIES.ordering_fractions} />
          </div>
        </div>
        <div className="row">
          <div className="col s6">
           <ActivityCard data={ACTIVITIES.number_line_equivalence} />
         </div>
        </div>
      </div>
    );
  }
}

export default EquivalenceList
