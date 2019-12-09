import React from "react";
// import logo from './logo.svg';
import "./App.css";
import $ from "jquery";
import Album from "./album";
import PrimarySearchAppBar from "./NavBar";
import { red } from "@material-ui/core/colors";

import NavBar from "./NavBar";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
    var that = this;

    $.ajax({
      url: "/reservations",
      type: "GET",
      dataType: "JSON",
      success: function(data) {
        //   console.log(data);
        that.setState({ data: data });
        console.log(that.state.data);
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

  componentDidMount() {
    var that = this;
    // var id = window.location.href.split('=')[1];
    $.ajax({
      url: "/reservations",
      type: "GET",
      dataType: "JSON",
      success: function(data) {
        //   console.log(data);
        that.setState({ data: data });
        console.log(that.state.data);
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

  render() {
    var mainPage = this.state.data.map(reservationsSchema => {
      return (
        <div style={{ display: "flex", marginLeft: "5rem" }}>
          {/* ///////////// */}

          {/* ///////////// */}
          <div>
            <div style={{ margin: "2rem" }}>
              <img
                src={reservationsSchema.hallsImg}
                alt="halls"
                height="200"
                width="200"
              />
            </div>
            <div style={{ margin: "2rem" }}>
              <img
                src={reservationsSchema.saloonsImg}
                alt="saloons"
                height="200"
                width="200"
              />
            </div>
            <div style={{ margin: "2rem" }}>
              <img
                src={reservationsSchema.flowersImg}
                alt="flowers"
                height="200"
                width="200"
              />
            </div>
          </div>
          <div>
            <div style={{ margin: "2rem" }}>
              <img
                src={reservationsSchema.tuxedosImg}
                alt="tuxedos"
                height="200"
                width="200"
              />
            </div>
            <div style={{ margin: "2rem" }}>
              <img
                src={reservationsSchema.dressesImg}
                alt="dresses"
                height="200"
                width="200"
              />
            </div>
            <div style={{ margin: "2rem" }}>
              <img
                src={reservationsSchema.cakeImg}
                alt="cake"
                height="200"
                width="200"
              />
            </div>
          </div>
          <div>
            <div style={{ margin: "2rem" }}>
              <img
                src={reservationsSchema.restaurantsImg}
                alt="restaurants"
                height="200"
                width="200"
              />
            </div>
            <div style={{ margin: "2rem" }}>
              <img
                src={reservationsSchema.extraImg}
                alt="extra"
                height="200"
                width="200"
              />
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <NavBar />
        <Album />

        {/* <PrimarySearchAppBar/> */}
        {/* {mainPage} */}
      </div>
    );
  }
}

export default App;
