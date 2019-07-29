/* 
EmployeeTable is a component which uses MyTable as a reusable component.
Takes input from EmployeeData.json file

@author  Vihanga Naik & Sujita Patil 
@since 2019-02-05 */

import React from 'react';
import MyTable from './MyTable';
import { Link } from 'react-router-dom';
import Button from './Button'
import EmployeeData from '../json/EmployeeData.json';

class EmployeeTable extends React.Component {

  render() {

    const rows = EmployeeData;
    const columns = [{
      Header: "ID",
      accessor: 'id'
    }, {
      Header: "NAME",
      accessor: 'name'
    }, {
      Header: "DEPT",
      accessor: 'dept'
    },
    {
      Header: "EMAIL",
      accessor: 'email'
    },
    {
      Header: "LOCATION",
      accessor: "location"
    }]



    return (
      <div>
        <Link to="/"><Button className="btn5" buttonText={" GO TO HOMEPAGE"}></Button></Link>
        <div className="emp">
          <center><h4>Employee Table</h4></center>
          <MyTable
            data={rows}
            columns={columns}
          >
          </MyTable>
        </div>
      </div>
    )
  }
}

export default EmployeeTable;


