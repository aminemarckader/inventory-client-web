import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { VictoryPie, VictoryTheme, VictoryChart, VictoryLegend } from "victory";

export default function HardwareTypes() {
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
            Hardware types
          </Typography>
        </Grid>
      </Grid>
      <VictoryPie
        colorScale={["tomato", "orange", "gold", "#800080", "navy"]}
        theme={VictoryTheme.material}
        width={600}
        height={420}
        padding={50}
        data={[
          { x: "iPads", y: 223 },

          { x: "Desktops", y: 127 },
          { x: "Laptops", y: 186 },
          { x: "Other", y: 35 },
        ]}
        labels={({ datum }) => `${datum.x}: ${datum.y}`}
      />
    </>
  );
}
