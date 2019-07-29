/*

This component displays year drop down date picker
@author : Aman and vikas
Since : 5th March, 2019

*/

import React, { Component } from 'react';
import MainComponent from './date-picker-component/MainComponent';
import './date-picker-css/date-picker.css';

class DatePicker extends Component {
    render() {
        return (
            <div className="center-date">
                <MainComponent></MainComponent>
            </div>
        );
    }
}

export default DatePicker;