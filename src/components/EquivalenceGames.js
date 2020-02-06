import React, { Component } from "react";
import ActivityCard from "./ActivityCard";

import  {ACTIVITIES} from "../activitydata/activities.js"

import EquivalenceBar from "../assets/ComparingFractionsBar.png"

export default class EquivalenceGames extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    return (
      <div>
      <p className = "flow-text">
        To play Comparison games, place Comparing Fractions at the top of your objectives.
      </p>
      <div style= {{flexDirection: 'row',display: "flex"}}>
         <img style = {{flex: 1,width: "100%"}} src={EquivalenceBar}/>
      </div>
    </div>
    );
  }
}

