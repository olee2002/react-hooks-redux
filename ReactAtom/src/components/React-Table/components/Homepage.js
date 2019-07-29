/* 
Homepage is a Single page application. 
have two tables i.e. StudentTable & EmployeeTable

@author  Vihanga Naik & Sujita Patil 
@since 2019-02-05 */

import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import '../css/Table.css'
const Homepage = () => {
    return (
        <div className="home">

            <Link to="/StudentTable"><Button className="btn1" buttonText={"STUDENT DATA"}></Button></Link>

            <Link to="/EmployeeTable"><Button className="btn2" buttonText={"EMPLOYEE DATA"}></Button></Link>
        </div>
    )
}
export default Homepage;