import React, { Component } from "react";
import ReactDOM from "react-dom";
//import "materialize-css/dist/css/materialize.min.css";
import { Switch, Route, Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";

//const LESSONS; // Need to import jsons here.

class LessonPage extends Component {
  constructor(props) {
    super(props);
    const {lesson} = props.match.params
    //this.data = LESSONS[lesson]
  }

  render() {
    
    return (
      <div className = "clouds backgroundImage">
      <div style = {{display: 'flex',flexDirection: 'column'}}>
           <div className ="section no-pad-bot" id="index-banner">
             <h1 className ="header center">Fractions</h1>
           </div>
        <div className = "container">
              <Link style = {{display: "flex",margin: "1%",flexDirection: "row"}} to={{pathname: "/concepts"}}>   
              <Paper elevation = {2} style = {{flex: 1,margin: "1%",flexDirection: "row",display:"flex",justifyContent: "space-between"}}>
              <p style = {{marginLeft: 10}}className = "flow-text">Concepts</p>
              </Paper>
              </Link>
              <Link style = {{display: "flex",margin: "1%",flexDirection: "row"}} to={{pathname: "/numberlines"}}>   
                <Paper elevation = {2} style = {{flex: 1,margin: "1%",flexDirection: "row",display:"flex",justifyContent: "space-between"}}>
                    <p style = {{marginLeft: 10}}className = "flow-text">Number Lines</p>
                </Paper>
              </Link>
              <Link style = {{display: "flex",margin: "1%",flexDirection: "row"}} to={{pathname: "/orderequivalence"}}>   
              <Paper elevation = {2} style = {{flex: 1,margin: "1%",flexDirection: "row",display:"flex",justifyContent: "space-between"}}>
              <p style = {{marginLeft: 10}}className = "flow-text">Ordering and Equivalence</p>  
              </Paper>
            </Link>
            <div className = "container" style = {{display: 'flex',flexDirection: 'row'}}>
              <Link to = {{pathname: "/overview"}}style = {{flex: 1,margin: "1%",flexDirection: "row"}} >   
              <Paper elevation = {2} style = {{flex: 1,flexDirection: "row",display:"flex",justifyContent: "center"}}>
              <p style = {{marginLeft: 10}}className = "flow-text">Overview</p>
              </Paper>
              </Link>
              <Link style = {{flex: 1,margin: "1%",flexDirection: "row"}} to={{pathname: "/manipulatives"}}>   
              <Paper elevation = {2} style = {{flex: 1,flexDirection: "row",display:"flex",justifyContent: "center"}}>
              <p style = {{marginLeft: 10}}className = "flow-text">Tools</p>
              </Paper>
              </Link>
         </div>
        </div>
       </div>
      </div>
    );
  }
}

export default LessonPage
