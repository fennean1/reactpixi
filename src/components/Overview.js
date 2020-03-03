import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Document, Page, pdfjs } from 'react-pdf';
import {Link} from "react-router-dom";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "container">
        <div className ="section no-pad-bot" id="index-banner">
          <h1 className ="header center orange-text">Unit Overview</h1>
        </div>
        <div className = "center">
          <Button variant = "outlined"><a href = "/pdfs/overview.pdf">Print</a></Button>
        </div>
        <Document file="/pdfs/overview.pdf">
           <Page  width={window.innerWidth*0.7} pageNumber={1} />
        </Document>
      </div>
    );
  }
}

