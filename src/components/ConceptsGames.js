import React, { Component } from "react";


import ConceptsBar from "../assets/ConceptsBar.png"

class ConceptsWordProblems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    return (
      <div>
        <p className = "flow-text">
          To play Concepts Games, place Fraction Concepts at the top of your objectives.
        </p>
        <div style= {{flexDirection: 'row',display: "flex"}}>
           <img style = {{flex: 1,width: "100%"}} src={ConceptsBar}/>
        </div>
      </div>
    );
  }
}

export default ConceptsWordProblems;
