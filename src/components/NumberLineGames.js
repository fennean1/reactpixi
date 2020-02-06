import React, { Component } from "react";
import ReactDOM from "react-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ChatCard from "./ActivityCard";

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
          <ChatCard data={ACTIVITIES.build_unit_fractions} />
          </div>
        </div>
      </div>
    );
  }
}

export default NumberLineList;
