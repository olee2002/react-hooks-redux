import React, {Component} from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, {numberFilter, textFilter} from 'react-bootstrap-table2-filter';
import ToolkitProvider, {CSVExport} from 'react-bootstrap-table2-toolkit';


export default class ReactBoostrapTable extends Component {
    constructor(props){
        super(props);
        this.state={
           columns:[{
               dataField: 'id',
               text: 'ID',
               sort: true,
               filter: numberFilter(),
           }, {
               dataField: 'First',
               text: 'First Name',
               sort: true,
               filter: textFilter(),
           }, {
               dataField: 'Last',
               text: 'Last Name',
               filter: textFilter(),
               sort: true
           }],
            products:[{
                "id": "0",
                "First": "Aman",
                "Last": "Singh",
                "slug":"aman"
            },
                {
                    "id": "1",
                    "First": "Vikas",
                    "Last": "Rathod",
                    "slug":"vikas"
                },
                {
                    "id": "2",
                    "First": "Kunal",
                    "Last": "Khushalani",
                    "slug": "kunal"
                },
                {
                    "id": "3",
                    "First": "Swapnil",
                    "Last": "Padhye",
                    "slug": "Swapnil"
                },
                {
                    "id": "4",
                    "First": "Aditya",
                    "Last": "Saxena",
                    "slug": "Aditya"
                },

                ]
        }
    }
    render() {
        const defaultSorted = [{
            dataField: 'id',
            order: 'ascending',
        }];
        const selectRow = {
            mode: 'checkbox',  //radio for single;checkbox=multiple
            clickToSelect: true,
            style: { backgroundColor: '#c8e6c9' }
        };
        const { ExportCSVButton } = CSVExport;
        return (
            <div>

                <ToolkitProvider
                    keyField="id"
                    data={ this.state.products }
                    columns={ this.state.columns }
                    exportCSV
                >
                    {
                        props => (
                            <div>
                                <ExportCSVButton { ...props.csvProps }>Export CSV!!</ExportCSVButton>
                                <hr />
                                <BootstrapTable { ...props.baseProps }
                                                filter={ filterFactory()}
                                                selectRow={ selectRow }
                                                defaultSorted={ defaultSorted }
                                                sort={ { dataField: 'First', order: 'asc' } }
                                />
                            </div>
                        )
                    }
                </ToolkitProvider>

            </div>
        )
    }
}






