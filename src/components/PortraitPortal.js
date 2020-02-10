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

export default function PortraitPortal(props) {


  return (
    <div style={{ display: "flex", flexDirection: "row"}} >
     <div style={{ display: "flex", justifyContent: 'center', flex: 1 }}>
        <Document file= {props.data.PDF} onLoadSuccess = {props.onLoadSuccess}>
         <Page loading = {<div style = {{height: window.innerHeight*0.3,width: 300}}/>} width = {window.innerWidth*0.3} pageNumber = {props.panelNumber} />
        </Document>
      </div>
      <div style={{ flex: 1 }}>
        <NewArena newLayout = {props.newLayout} features = {{x: 5,y: 5}} fullscreen={false} screenstate = {{ width: "60vw", height: "93vh" }} app={props.app} script={SCRIPTS[props.data.SCRIPT]} />
      </div>
    </div>
  );
}  

