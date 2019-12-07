import React, { Component } from "react";
import ListItem from "./ListItem";
import NavBar from "./NavBar";

export default class AppF extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <img
          src="https://www.landmarkamman.com/sites/default/files/styles/slider/public/imageblock/MainWedding.jpg?itok=6kRY4AJu"
          alt="hall"
          width="100%"
          height="600px"
        ></img>
        <ListItem />
      </div>
    );
  }
}
