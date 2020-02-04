import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AlarmIcon from "@material-ui/icons/Alarm";
import FaceIcon from "@material-ui/icons/Face";
import InfoIcon from "@material-ui/icons/Info";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Popover from "@material-ui/core/Popover";


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

  return (
    <div className="card sticky-action">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={props.data.ICON}/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{props.data.TITLE}</span>
      <p>{props.data.TIME + " Minutes"}</p>
    </div>
    <div className="card-action">
      <Link  to={{pathname: `${teacherpath}`, state: {data: props.data}}}>
      <Button color = "primary" variant = "outlined" >Teacher</Button></Link>
      <Link to={{pathname: `${studentpath}`, state: {data: props.data}}}>
      <Button color = "primary" variant = "outlined" >Student</Button>
      </Link>
      {printouts}
      </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">{props.data.STANDARD_ID}<i className="material-icons right">close</i></span>
      <p>{props.data.DESCRIPTION}</p>
    </div>
  </div>
  );
}
