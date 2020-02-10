import React, { Component, Text, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import NewArena from "./NewArena";

import { SCRIPTS } from "../activitydata/scripts.js"

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const useStyles = makeStyles(theme => ({
  container: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));


export default function LandscapePortal(props) {

  let height = Math.round((window.innerHeight - 50)/window.innerHeight*100) - 35
  console.log(
    "height?",height)
  let heightString = height+"vh"
  console.log(
    "height string",heightString)


  return (
    <div style={{ display: "flex", flexDirection: "column"}} >
     <div style={{ display: "flex", justifyContent: 'center', flex: 1 }}>
        <Document loading = {<div style = {{height: window.innerHeight*0.35,width: 300}}/>} file= {props.data.PDF} onLoadSuccess = {props.onLoadSuccess}>
         <Page loading = {<div style = {{height: window.innerHeight*0.35,width: 300}}/>} height = {window.innerHeight*0.35} pageNumber = {props.panelNumber} />
        </Document>
      </div>
      <div style={{ flex: 1 }}>
        <NewArena features = {props.data.FEATURES}  currentPanel = {props.data.SEQUENCE[props.panelNumber-1]}  fullscreen={false} screenstate = {{ width: "100vw", height: heightString}} app={props.app} script={SCRIPTS[props.data.SCRIPT]} />
      </div>
    </div>
  );
}  

