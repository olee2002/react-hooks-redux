/*<h1>LineChart</h1>
*The LineChart is an reusable component 
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
    legend: { position: "bottom" },
    pointsVisible: true
};

export default class LineChart extends React.Component {
    render() {
        return (
            <div className="Line">
                <Chart
                    chartType="LineChart"
                    data={data}
                    options={options}
                />
            </div>
        );
    }
}