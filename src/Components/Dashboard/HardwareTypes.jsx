import React from "react";
import { VictoryPie, VictoryTheme, VictoryChart } from "victory";

export default function HardwareTypes() {
  return (

    <VictoryChart
    // adding the material theme provided with Victor
    width={600} 
    height={400}
  >
    <VictoryPie
      colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
      theme={VictoryTheme.material}
      width={600}
      height={400}
      data={[
        { x: "iPads", y: 223 },

        { x: "Desktops", y: 127 },
        { x: "Laptops", y: 186 },
      ]}
      labels={({ datum }) => `${datum.x}: ${datum.y}`}
    />
  </VictoryChart>
    
  );
}
