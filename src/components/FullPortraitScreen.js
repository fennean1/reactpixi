import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

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

export default function FullPortraitScreen(props) {
  const loading = <div style = {{height: 0.93*window.innerHeight,width: 300}}/>

  return (
    <div style={{ display: "flex", flexDirection: "row"}} >
     <div style={{ display: "flex", justifyContent: 'center', flex: 1 }}>
        <Document loading = {loading} file= {props.data.PDF} onLoadSuccess = {props.onLoadSuccess}>
          <Page loading = {loading} height = {0.93*window.innerHeight} pageNumber = {props.panelNumber} />
        </Document>
      </div>
    </div>
  );
}  

