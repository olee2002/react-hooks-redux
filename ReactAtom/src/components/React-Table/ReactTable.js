import React, { Component } from 'react';
import SimpleTable from "./components/SimpleTable";
import SortingSelecting from "./components/SortingSelecting";
import Collapsible from "./components/Collapsible";
import '../React-Table/css/Table.css';
class ReactTable extends Component {
    render() {
        return (
            <div>
                <h2>React Table</h2>
                <hr className="hr"/>
                <h4>Tables display information in a way that’s easy to scan, so that users can look for patterns and insights. They can be embedded in primary content, such as cards.</h4>
                <h4>Tables display sets of data. They can be fully customized.</h4>
                <hr className="hr"/>

                <div>
                <h2>Simple Table</h2>
                <hr className="hr"/>
                <h4>A simple example with no frills.</h4>
                <hr className="hr"/>
                <SimpleTable/>
                </div>
                {/*<hr className="hr"/>*/}
                <div>
                <h2>Sorting & Selecting</h2>
                <hr className="hr"/>
                <h4>The Table has been given a fixed width to demonstrate horizontal scrolling. In order to prevent the pagination controls from scrolling, the TablePagination component is used outside of the Table.</h4>
                <h4>This example demonstrates the use of Checkbox and clickable rows for selection, with a custom Toolbar. It uses the TableSortLabel component to help style column headings..</h4>
                <hr className="hr"/>
                <SortingSelecting/>
                </div>
                {/*<hr className="hr"/>*/}
                <div>
                <h2>Collapsible table</h2>
                <hr className="hr"/>
                <h4>An example of a table with expandable rows, revealing more information. It utilizes the Collapse component.</h4>
                <hr className="hr"/>
                <Collapsible/>
                </div>
            </div>
        );
    }
}

export default ReactTable;
