import React, {Component,Fragment} from 'react'
import ReactBoostrapTable from "./components/React_Boostrap_Table";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import React_AgGrid_Table from "./components/React_AgGrid_Table";
import React_AgGrid_API from "./components/React_AgGrid_API";
import Table from '../Accordian/Table';
// import '../Accordian/accordian-css/accordian-css-file.css';
// import 'react-accessible-accordion/dist/fancy-example.css';
export default class ReactTables extends Component {
    render() {
        return(
            <Fragment>
                <h2>Using react-bootstrap-table2</h2>
                <hr className="hr"/>
                <h3>Functionalities:</h3>
                <ul>
                    <li>Sorting</li>
                    <li>Number, text filter</li>
                    <li>Selection</li>
                    <li>Export CSV</li>
                </ul>
                <hr className="hr"/>
                <Accordion className="accordian" allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            React Table using React Bootstrap
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <ReactBoostrapTable/>
                    </AccordionItemPanel>
                </AccordionItem>
                </Accordion>


                <h2>Using ag-grid-react</h2>
                <hr className="hr"/>
                <h3>Functionalities:</h3>
                <ul>
                    <li>Sorting</li>
                    <li>filter</li>
                    <li>Selection</li>
                    <li>Fetching row data from API</li>
                </ul>
                <hr className="hr"/>
                <Accordion className="accordian" allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            React Table using Ag Grid
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <hr className="hr"/>
                        <h4>In the below table, Sorting, filtering and selection has been implemented.</h4>
                        <hr className="hr"/>
                        <React_AgGrid_Table></React_AgGrid_Table>
                        <hr className="hr"/>
                        <h4>Fetching data from API</h4>
                        <hr className="hr"/>

                        <React_AgGrid_API></React_AgGrid_API>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>


                <h2>Using react-table</h2>
                <hr className="hr"/>
                <h3>Functionalities:</h3>
                <ul>
                    <li>Sorting</li>
                    <li>Pagination</li>
                </ul>
                <hr className="hr"/>
                <Accordion className="accordian" allowZeroExpanded>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                React Table using React-table
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <Table></Table>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </Fragment>
        )
    }
}
