import React from "react";
import ReactDom from "react-dom";

const food = ["Bacon", "Jamon", "Noodles"];

const listFood = food.map((food) => <li>{food}</li>);

ReactDom.render(
  <div>
    <h1>My Favorite Foods!</h1>
    <ul>{listFood}</ul>
  </div>,
  document.getElementById("root")
);
