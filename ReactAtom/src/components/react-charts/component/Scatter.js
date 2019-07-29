/*<h1>ScatterChart</h1>
*The ScatterChart is an reusable component 
*In this component the data is fetched from JSON file and chart is displayed using react-google-charts 
*
*
* @author  Meghana Arali
* @since 2019-02-25
*/


import React, { Component } from 'react';
import Data from '../json/chartdata';
import Chart from 'react-google-charts';
import '../component/chart.css';

const data = Data;
const options = {
  
  legend: { position: "bottom" },
};

export default class ScatterChart extends Component {
  render() {
    return (
      <div className="Scatter">
       
        <Chart
          chartType="Scatter"
          data={data}
          options={options}
        />
      </div>
    )
  }
}
