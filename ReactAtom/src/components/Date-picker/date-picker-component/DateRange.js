/*

This component displays year drop down date picker
@author : Aman and vikas
Since : 5th March, 2019

*/


import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//these constatnts are used as a label.
const from_label = "From: ";
const to_label = "To: ";

export default class DateRange extends Component {
    constructor(props) {
        super(props);

        //initializing start and end date to todays date(Current date) using inbuilt Date().
        this.state = {
            startDate: new Date(),
            endDate: new Date()
        };
        //Binding methods
        this.startDateChange = this.startDateChange.bind(this);
        this.endDateChange = this.endDateChange.bind(this);
    }

    //updating the state of Start-date with the date that user enters.
    startDateChange(date) {
        this.setState({
            startDate: date
        });
    }

    //updating the state of End-date with the date that user enters.
    endDateChange(date) {
        this.setState({
            endDate: date
        });
    }

    render() {
        return (
            <div className="box">
            <div className="fromto">
                <h5>DateRange</h5>
                    <h3 id="from-to">{from_label}</h3>

                    <DatePicker
                        // The date which user enters
                        selected={this.state.startDate}
                        selectsStart
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        // Now again when user enters new date the state gets updated and its reflected on the screen
                        onChange={this.startDateChange}
                    />
                </div>
                <div className="tofrom">
                    <h3 className="to" id="from-to">{to_label}</h3>
                    <DatePicker
                        selected={this.state.endDate}
                        selectsEnd
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.endDateChange}
                    />
                </div>
            </div>
        );
    }
}