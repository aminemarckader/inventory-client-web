import React from "react";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from "victory";
import { Grid, Typography } from "@material-ui/core";

const data = [
  { brand: 1, units: 13 },
  { brand: 2, units: 16 },
  { brand: 3, units: 14 },
  { brand: 4, units: 19 },
  { brand: 5, units: 19 },
];

class AgeBarChart extends React.Component {
  render() {
    return (
      <>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography style={{ textAlign: "center", paddingTop: 10 }}>
              Hardware Brands
            </Typography>
          </Grid>
        </Grid>

        <VictoryChart
          // adding the material theme provided with Victory
          theme={VictoryTheme.material}
          domainPadding={20}
          width={600}
          height={300}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={["HP", "Dell", "Lenovo", "Microsoft", "Other"]}
          />
          <VictoryAxis dependentAxis />
          <VictoryBar data={data} x="brand" y="units" />
        </VictoryChart>
      </>
    );
  }
}

export default AgeBarChart;
