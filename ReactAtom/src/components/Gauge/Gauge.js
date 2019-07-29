import React, { Component } from 'react';
import './Gauge.css'
import Searchopt from './Searchopt';

class Gauge extends Component {
  render() {
    return (
      <div className="App" >
        <Searchopt
          width={200}
          items={[
            { value: 'ArcContainer', id: 1 },
            { value: 'LinearContainer', id: 2 },
          ]}
          marginTop={30}
        />
      </div>
    );
  }
}

export default Gauge;
