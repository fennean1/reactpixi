import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import NumberLineList from './NumberLineActivities';
import NumberLineWordProblems from "./NumberLineWordProblems";
import NumberLineChats from "./NumberLineChats"
import NumberLineGames from "./NumberLineGames"



function TabContainer({ children, dir }) {
  return (
    <div component="div" dir={dir}>
      {children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  }
}));

export default function ConceptsCarousel(props) {

  const theme = useTheme();
  const [value, setValue] = React.useState(0);


  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className="container">
        <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <h1 className="header center grey-text">Number Lines</h1>
        </div>
      </div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant = "fullWidth"
        centered

      >
        <Tab className = "white" label= "Lessons" />
        <Tab className = "white" label= "Word Problems" />
        <Tab className = "white" label= "Chats" />
      </Tabs>

      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>
          {value == 0 && (
            <NumberLineList/>
          )}
        </TabContainer>
        <TabContainer dir={theme.direction}>
          {value == 1 && (
            <NumberLineWordProblems/>
          )}
        </TabContainer>
        <TabContainer dir={theme.direction}>
          {value == 2 && (
               <NumberLineChats/>
           )}
        </TabContainer>
      </SwipeableViews>
    </div>
  );
}
