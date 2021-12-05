import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DeviceCard from "../Cards/DeviceCard";
import Paper from "@material-ui/core/Paper";
import AgeBarChart from "../Dashboard/AgeBarChart";
import HardwareTypes from "../Dashboard/HardwareTypes";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom component="div">
        Hardware List
      </Typography>
      <Grid container spacing={1}>
        <DeviceCard />
        <DeviceCard />
        <DeviceCard />
        <DeviceCard />
        <DeviceCard />
        <DeviceCard />
        <DeviceCard />
        <DeviceCard />
        <DeviceCard />
        <DeviceCard />
      </Grid>
    </div>
  );
}
