import React, { Component } from "react";
import ChatCard from "./ChatCard";

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
          <ChatCard data={ACTIVITIES.find_equivalent_fractions} />
          </div>
          < div className="col s6">
          <ChatCard data={ACTIVITIES.compare_fractions} />
          </div>
        </div>
      </div>
    );
  }
}

export default EquivalenceList
