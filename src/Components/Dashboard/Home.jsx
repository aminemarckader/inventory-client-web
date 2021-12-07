import { Grid, Paper } from "@mui/material";

import React from "react";

import AgeBarChart from "./AgeBarChart";
import HardwareTypes from "./HardwareTypes";

function Home(props) {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} lg={7}>
          <Paper elevation={3}>
            <AgeBarChart />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} lg={5}>
          <Paper elevation={3}>
            <HardwareTypes />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
