/* 
EmployeeTable is a component which uses MyTable as a reusable component.
Takes input from Data.json file

@author  Vihanga Naik & Sujita Patil 
@since 2019-02-05 */

import React from 'react';
import MyTable from './MyTable';
import { Link } from 'react-router-dom';
import Button from './Button'
import StudentData from '../json/StudentData.json';

class StudentTable extends React.Component {

  render() {

    const rows = StudentData;
    const columns = [{
      Header: "ID",
      accessor: 'id',
    }, {
      Header: "NAME",
      accessor: 'name'
    }, {
      Header: "DIV",
      accessor: 'div'
    },
    {
      Header: "EMAIL",
      accessor: 'email'
    },
    {
      Header: "MARKS",
      accessor: "marks"
    }]

    return (
      <div>
        <Link to="/"><Button className='btn5' buttonText={" GO TO HOMEPAGE"}></Button></Link>
        <div className="stud">
        <center><h4>Student Table</h4></center>
        <MyTable
          data={rows}
          columns={columns}
        />
      </div>
      </div>
    )
  }
}

export default StudentTable;