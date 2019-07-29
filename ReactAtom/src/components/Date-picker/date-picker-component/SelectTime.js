/*

This component displays year drop down date picker
@author : Aman and vikas
Since : 5th March, 2019

*/


import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../date-picker-css/date-picker.css';

//these constants are used for date, time, format.
const time_format = "HH:mm";
const time_interval = 15;
const date_format = "MMMM d, yyyy h:mm aa";
const time_caption = "time";

export default class SelectTime extends Component {
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
                <h5>SelectTime</h5>
                {/* DatePicker is imported from react-datepicker which is inbuilt class */}
                <DatePicker
                    // The date which user enters
                    selected={this.state.startDate}
                    // Now again when user enters new date the state gets updated and its reflected on the screen
                    onChange={this.startDateChange}
                    //to display time functionality
                    showTimeSelect
                    timeFormat={time_format}
                    timeIntervals={time_interval}
                    dateFormat={date_format}
                    timeCaption={time_caption}
                />
            </div>

        );
    }
}