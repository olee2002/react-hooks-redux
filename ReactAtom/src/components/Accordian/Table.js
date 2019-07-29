import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './accordian-css/accordian-css-file.css';
import data from './json/Data.json';
import columns from './json/HeaderInfo.json'

export default class Table extends Component {
    render() {
        return (
            <div>
                <ReactTable
                    data={data}
                    columns={columns}
                    defaultPageSize={5}
                    pageSizeOptions={[5, 10, 20]}
                />
            </div>
        )
    }
}