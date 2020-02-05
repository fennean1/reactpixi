import React, { Component } from "react";
import ReactDOM from "react-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ChatCard from "./ChatCard";

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
            <ChatCard data={ACTIVITIES.balloon_jiji} />
          </div>
        </div>
      </div>
    );
  }
}

export default ConceptsWordProblems;
