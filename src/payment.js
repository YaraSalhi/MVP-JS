import React from "react";
import "./header.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Header from "./headerComponent";

const styles = {
  toolbar: {
    button: {
      fontSize: "5rem"
    }
  }
};

class Payment extends React.Component {
  render() {
    return (
      //   <AppBar position="static" id="head">
      <div>HI IM FROM THE PAYMET</div>
    );
  }
}

Payment.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Payment);
