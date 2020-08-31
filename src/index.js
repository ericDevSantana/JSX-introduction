import React from "react";
import ReactDom from "react-dom";

const fname = "Eric";
const lname = "S";

const number = Math.floor(Math.random() * 10);
const food = ["Bacon", "Jamon", "Noodles"];
const listFood = food.map((food) => <li>{food}</li>);

ReactDom.render(
  <div>
    <h1>My Favorite Foods!</h1>
    <ul>{listFood}</ul>

    <p>Your lucky number is {number}</p>
    <p>My name is {fname + " " + lname}</p>
  </div>,
  document.getElementById("root")
);
