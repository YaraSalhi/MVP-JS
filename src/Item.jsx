import React, { Component } from "react";
import $ from "jquery";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: []
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    console.log(this.state.data);
    var that = this;
    var path = window.location.href.split("=");
    var id = path[1];
    console.log(id);

    $.ajax({
      url: "/cat/" + id,
      type: "GET",
      data: this.state,
      success: function(data) {
        this.setState({
          deals: data
        });
      }.bind(this),
      error: function(err) {
        console.log("error");
      }
    });
  }
}
