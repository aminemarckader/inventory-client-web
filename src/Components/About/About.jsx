import React from "react";
import { makeStyles } from '@mui/styles';
import Grid from "@mui/material/Grid";
import DeviceCard from "../Cards/DeviceCard";

import { Typography } from "@mui/material";

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
