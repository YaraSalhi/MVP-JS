import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "10px",
    paddingBottom: "20px"
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

const Item = () => {
  const [data, setData] = useState([]);
  //instead of DidMount()
  useEffect(() => {
    axios.get("shops").then(({ data }) => {
      setData(data);
    });
  }, [setData]);

  const classes = useStyles();

  console.log(data);
  return (
    <div className={classes.root}>
      {data.map(item => (
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="hall" src={item.image} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography key={item._id} gutterBottom variant="subtitle1">
                    {item.name}
                  </Typography>
                  <Typography key={item._id} variant="body2" gutterBottom>
                    {item.location}
                  </Typography>
                  <Typography
                    key={item._id}
                    variant="body2"
                    color="textSecondary"
                  >
                    {item.contactInfo}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    Book now
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">${item.price}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
};
export default Item;
