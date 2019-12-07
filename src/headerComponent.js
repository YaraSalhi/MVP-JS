import React from "react";
import "./header.css";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { FacebookLoginButton } from "react-social-login-buttons";
import { TwitterLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";

const styles = {
  toolbar: {
    button: {
      fontSize: "5rem"
    }
  }
};

class Header extends React.Component {
  render() {
    return (
      //   <AppBar position="static" id="head">
      <span id="headerComponentt">
        <Toolbar style={{}}>
          <Button
            style={{
              fontSize: "1.5rem",
              marginLeft: "5rem",
              color: "rgb(63, 115, 236)",
              fontWeight: "bold"
            }}
            //   color="white"
            className="btnNav"
            href="#text-buttons"
          >
            HOME
          </Button>

          <Button
            style={{
              fontSize: "1.5rem",
              marginLeft: "5rem",
              color: "rgb(63, 115, 236)",
              fontWeight: "bold"
            }}
            //   color="primary"
            href="#text-buttons"
          >
            CONTACT US
          </Button>
          <Button
            style={{
              fontSize: "1.5rem",
              marginLeft: "5rem",
              color: "rgb(63, 115, 236)",
              fontWeight: "bold"
            }}
            //   color="primary"
            fontSize="1rem"
            href="#text-buttons"
          >
            Link
          </Button>
          <span style={{ display: "flex", marginLeft: "40rem" }}>
            <FacebookLoginButton
              onClick={() => alert("Hello")}
              style={{
                color: "transparent",
                width: "3rem",
                borderRadius: "50%"
              }}
            ></FacebookLoginButton>
            <TwitterLoginButton
              onClick={() => alert("Hello")}
              style={{
                color: "transparent",
                width: "3rem",
                borderRadius: "50%"
              }}
            />
            <GoogleLoginButton
              onClick={() => alert("Hello")}
              style={{
                color: "transparent",
                width: "3rem",
                borderRadius: "50%"
              }}
            />
          </span>
        </Toolbar>
        <h1 id="headerText">MAKE YOUR RESERVATION EASIER FROM HOME!</h1>
      </span>

      //   </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
