import React, { Component } from "react";
import ReactDOM from "react-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ChatCard from "./ChatCard";

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
             <ChatCard data={ACTIVITIES.unit_fractions_on_a_number_line} />
          </div>
          < div className="col s6">
             <ChatCard data={ACTIVITIES.estimate_fractions_on_a_number_line} />
          </div>
        </div>
      </div>
    );
  }
}

export default NumberLineList;
