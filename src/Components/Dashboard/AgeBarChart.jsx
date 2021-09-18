import React from 'react';
import { VictoryBar,VictoryChart,VictoryTheme,VictoryAxis } from 'victory';

const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000},
    {quarter: 5, earnings: 19400}
  ];
  
  class AgeBarChart extends React.Component {
    render() {
      return (
        <VictoryChart
          // adding the material theme provided with Victory
          theme={VictoryTheme.material}
          domainPadding={20}
          width={600} 
          height={300}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4,5]}
            tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4","Quarter 5"]}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`$${x / 1000}k`)}
          />
          <VictoryBar
            data={data}
            x="quarter"
            y="earnings"
          />
        </VictoryChart>
      )
    }
  }

  export default AgeBarChart;