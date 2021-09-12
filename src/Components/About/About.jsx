import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DeviceCard from '../Cards/DeviceCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
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
