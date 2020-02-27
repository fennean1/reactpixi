import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { red } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";



const useStyles = makeStyles(theme => ({
  card: {},
  media: {
    height: 0,
    paddingTop: "120%", // 16:9
    paddingLeft: "100%",
    marginLeft: 30,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  typography: {
    padding: theme.spacing(2)
  }
}));

export default function ActivityCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const teacherpath = props.data.WORD_PROBLEM ? "/wordproblems/" + props.data.ID : '/overview/' + props.data.ID
  const studentpath =  props.data.WORD_PROBLEM ? props.data.TOOL  : '/landing/' + props.data.ID
  const printouts = (props.data.ORGANIZER && <Button className = "white"> 
  <a target="_blank" className = "black-text" href = {`${props.data.ORGANIZER}`}> 
      Printouts
  </a>
  </Button>)

const objectives = props.data.OBJECTIVES.map((obj,k)=><blockquote key = {k} style = {{marginLeft: "5%"}}><Box fontSize={20}>{obj}</Box></blockquote>)
const studentButton = (!props.data.NO_TOOL &&  <Link to={{pathname: `${studentpath}`, state: {data: props.data}}}>
<Button color = "primary" variant = "outlined" >Student</Button>
</Link>)

  return (
    <div className="card sticky-action">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={props.data.ICON}/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{props.data.TITLE}<i className="material-icons right">more_vert</i></span>
      <p>{props.data.TIME + " Minutes"}</p>
    </div>
    <div className="card-action">
      <Link  to={{pathname: `${teacherpath}`, state: {data: props.data}}}>
      <Button color = "primary" variant = "outlined" >Teacher</Button></Link>
      {studentButton}
      {printouts}
      </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Overview<i className="material-icons right">close</i></span>
      {(!props.data.WORD_PROBLEM && 
        (<div> <p>{props.data.DESCRIPTION}</p><p>Objectives</p> {objectives}</div>))}
    </div>
  </div>
  );
}
