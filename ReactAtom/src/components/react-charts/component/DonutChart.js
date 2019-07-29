/*<h1>DonutChart</h1>
*The DonutChart is an reusable component 
*In this component the data is fetched from JSON file and chart is displayed using react-google-charts 
*
*
* @author  Meghana Arali
* @since 2019-02-25
*/


import React from "react";
import Chart from "react-google-charts";
import Data from '../json/chartdata';
import '../component/chart.css';

const data = Data;
const options = {
  pieHole: 0.4,                        //defines the inner radius
  legend: { position: "bottom" },
  slices: {
    1: { offset: 0.2 }               //slice is used foe exploding a slice of piechart
  },
};

export default class DonutChart extends React.Component {
  render() {
    return (
      <div className="Donut">

        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          legend_toggle
        />
      </div>
    );
  }
}