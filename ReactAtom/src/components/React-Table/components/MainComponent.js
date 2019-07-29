/* 
Created routing using React-router-dom.

@author  Vihanga Naik & Sujita Patil 
@since 2019-02-05 */

import React, { Component } from 'react';
import '../css/Table.css';
import "react-table/react-table.css";
import StudentTable from './StudentTable';
import Homepage from './Homepage';
import Employeetable from './EmployeeTable';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class MainComponent extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Homepage}></Route>
          <Route exact path="/StudentTable" component={StudentTable}></Route>
          <Route exact path="/Employeetable" component={Employeetable}></Route>
        </div>
      </Router>

    );
  }
}

export default MainComponent;
