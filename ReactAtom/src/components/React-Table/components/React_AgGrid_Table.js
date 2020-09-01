import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import ReactPaginate from 'react-paginate';
class React_AgGrid_Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [{
                headerName: "ID", field: "id", checkboxSelection: true, sortable: true, filter: true,
            }, {
                headerName: "First Name", field: "first", sortable: true, filter: true,
            },{
                headerName: "Last Name", field: "last", sortable: true, filter: true,
            }],
            rowData: [{
                id: "0", first: "Aditya", last: "Saxena"
            }, {
                id: "1", first: "vikas", last: "Singh"
            }, {
                id: "2", first: "Richard", last: "Gomes"
            }]
        }
    }

    render() {
        return (
            <div
                className="ag-theme-alpine"
                style={{
                    height: '200px',
                    width: '600px' }}
            >
                <AgGridReact
                    rowSelection="multiple"
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}>
                </AgGridReact>


            </div>


        );
    }
}

export default React_AgGrid_Table ;
