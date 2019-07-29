/*

This component displays year drop down date picker
@author : Aman and vikas
Since : 5th March, 2019

*/

import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//this constant is used to show number of months
const months_to_show = 2;

export default class MultipleMonthInline extends Component {
    constructor(props) {
        super(props);

        //initializing start and end date to todays date(Current date) using inbuilt Date().
        this.state = {
            startDate: new Date()
        };
        //Binding methods
        this.startDateChange = this.startDateChange.bind(this);
    }

    //updating the state of Start-date with the date that user enters.
    startDateChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            
            <div className="box1">
            <h5>MultipleYearInline</h5>
                    {/* DatePicker is imported from react-datepicker which is inbuilt class */}
                    <DatePicker
                        selected={this.state.startDate}
                        inline
                        onChange={this.startDateChange}
                        monthsShown={months_to_show}
                    />
                </div>
            
        );
    }
}




