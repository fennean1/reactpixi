import React, { Component } from "react";
import ReactDOM from "react-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ChatCard from "./ActivityCard";

import  {ACTIVITIES} from "../activitydata/activities.js"


import ConceptsBar from "../assets/NumberLineBar.png"

class NumberLineList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    return (
      <div>
        <p className = "flow-text">
          To play Number Line games, place Fractions on a Number Line at the top of your objectives.
        </p>
        <div style= {{flexDirection: 'row',display: "flex"}}>
           <img style = {{flex: 1,width: "100%"}} src={ConceptsBar}/>
        </div>
      </div>
    );
  }
}

export default NumberLineList;
