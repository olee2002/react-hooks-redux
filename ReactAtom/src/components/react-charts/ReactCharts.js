import React from 'react';
import { Accordion, Toggle } from './Accordion';
import './component/chart.css';
import Line from './component/Line';
import Scatter from './component/Scatter';
import Pie from './component/Pie';
import DonutChart from './component/DonutChart';


const Carosel = () => (
  <Accordion>
    <Toggle title="PIE CHART">
      <Pie />
    </Toggle>
    <Toggle title="LINE CHART">
      <Line />
    </Toggle>
    <Toggle title="SCATTER CHART">
      <Scatter />
    </Toggle>
    <Toggle title="DONUT CHART">
      <DonutChart />
    </Toggle>
  </Accordion>
)

export default Carosel;

