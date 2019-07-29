/*

This component displays year drop down date picker
@author : Aman and vikas
Since : 5th March, 2019

*/

import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const date_format = "dd/MM/yyyy";

export default class BasicDatePicker extends Component {
    constructor(props) {
        super(props);

        //initializing start and end date to todays date(Current date) using inbuilt Date().
        this.state = {
            startDate: new Date(),
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

            <div className="box">
                <h5>BasicDatePicker</h5>
                {/* DatePicker is imported from react-datepicker which is inbuilt class */}
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.startDateChange}
                    dateFormat={date_format}
                />
            </div>

        );
    }
}




