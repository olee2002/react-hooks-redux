/*
*The PieChart is a reusable component 
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
  is3D: true,
  legend: { position: "bottom" },
  slices: {
    5: { offset: 0.2 },           //slice is used foe exploding a slice of piechart
    6: { offset: 0.3 }            //slice is used foe exploding a slice of piechart
  },
};

export default class PieChart extends React.Component {
  render() {
    return (
      <div className="Pie">
      
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
        />
      </div>
    );
  }
}