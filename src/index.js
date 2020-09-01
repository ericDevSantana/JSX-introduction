import React from "react";
import ReactDom from "react-dom";

const yourName = "Eric";
const date = new Date();

ReactDom.render(
  <div>
    <p>Created by {yourName}</p>
    <p>Copyright {date.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
