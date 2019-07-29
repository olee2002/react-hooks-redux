/*

This component displays year drop down date picker
@author : Aman and vikas
Since : 5th March, 2019

*/

import React, { Component } from 'react';
import '../date-picker-css/date-picker.css';
import Searchopt from './Searchopt';
import './Style.css';

export default class MainComponent extends Component {
    render() {
        return (
            <div >
                <Searchopt 
                
            width={200}
            name="country_id"
            items={[
                { value: 'BasicDatePicker',id: 1 },
            {value: 'DateComponent',id: 2  },
            { value: 'SelectTime',id: 3 },
            { value: 'YearDropdown',id: 4 },
            { value: 'MultipleYearInline',id: 5 },
            
            ]}
            />
              
            </div>
        );
    }
}








