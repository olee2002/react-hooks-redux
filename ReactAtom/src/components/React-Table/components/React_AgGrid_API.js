import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class React_AgGrid_API extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [{
                headerName: "Make", field: "make", checkboxSelection: true, sortable: true, filter: true
            }, {
                headerName: "Model", field: "model", sortable: true, filter: true
            }, {
                headerName: "Price", field: "price", sortable: true, filter: true
            }],
        }
    }
        componentDidMount()
        {
            fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json')
                .then(result => result.json())
                .then(rowData => this.setState({rowData}))
        }


        render()
        {
            return (
                <div
                    className="ag-theme-alpine"
                    style={{
                        height: '200px',
                        width: '600px'
                    }}
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

export default React_AgGrid_API ;
