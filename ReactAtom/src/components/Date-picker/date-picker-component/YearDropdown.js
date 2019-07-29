/*

This component displays year drop down date picker
@author : Aman and vikas
Since : 5th March, 2019

*/

import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//this constant is used as date format
const date_format_calendar = "MMMM";
//this constant is used for the no of years in the dropdown menu
const year_dropdown_item_number = 20;

export default class SelectTime extends Component {
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

            <div className="box">
                <h5>YearDropdown</h5>
                {/* DatePicker is imported from react-datepicker which is inbuilt class */}
                <DatePicker
                    // The date which user enters
                    selected={this.state.startDate}
                    // Now again when user enters new date the state gets updated and its reflected on the screen
                    onChange={this.startDateChange}
                    showYearDropdown
                    dateFormatCalendar={date_format_calendar}
                    scrollableYearDropdown
                    yearDropdownItemNumber={year_dropdown_item_number}
                />
            </div>

        );
    }
}




