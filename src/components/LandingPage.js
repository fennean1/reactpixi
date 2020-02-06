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
      <div style = {{display: 'flex',flexDirection: 'column'}} className = "clouds backgroundImage">
           <div className ="section no-pad-bot" id="index-banner">
             <h1 className ="header center">Fractions</h1>
           </div>
        <div style = {{flex: 2}} className = "container">
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

         </div>
        </div>
       <footer style = {{flex: 0.10}} className="page-footer grey">
          <div className="container">
            <div className="row" style = {{display: "flex",flexDirection: "row"}}>
                  <Link style = {{marginRight: "5%"}} to = {{pathname: "/manipulatives"}}><p className = "white-text">Tools</p></Link>
                  <Link to = {{pathname: "/overview"}}><p className = "white-text">Overview</p></Link>
              </div>
            </div>
        </footer>
        </div>
    );
  }
}

export default LessonPage
