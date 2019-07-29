import React, { Component } from 'react'
import './Main.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Dialog from '../components/Dialoge/Dialoge';
import Textfield from '../components/Textfield/Textfield';
import ReactTable from '../components/React-Table/ReactTable';
import DatePicker from '../components/Date-picker/DatePicker';
import ReactCharts from '../components/react-charts/ReactCharts';
import Search from '../components/Autocomplete/Search';
import TabNavigation from '../components/ReactTab/TabNavigation';
import Accordian from '../components/Accordian/Accordian';
import Gauge from '../components/Gauge/Gauge';
import Snackbar from '../components/Snackbar/Snackbar';
import Form from '../components/Form/Form';
import Button from '../components/Button/Button';
import List from '../components/List/List';
import Carousel from '../components/Carousel/Carousel';

let routes =
    [
        {
            "id": 1,
            "routeName": "/Accordion",
            "displayName": "Accordion"
        },
        {
            "id": 2,
            "routeName": "/Search",
            "displayName": "Autocomplete Search"
        },
        {
            "id": 3,
            "routeName": "/Button",
            "displayName": "Button"
        },
        {
            "id": 4,
            "routeName": "/Carousel",
            "displayName": "Carousel"
        },

        {
            "id": 5,
            "routeName": "/DatePicker",
            "displayName": "DatePicker"
        },
        {
            "id": 6,
            "routeName": "/Dialog",
            "displayName": "Dialog"
        },
        {
            "id": 7,
            "routeName": "/Form",
            "displayName": "Form"
        },
        {
            "id": 8,
            "routeName": "/Gauge",
            "displayName": "Gauge"
        },
        {
            "id": 9,
            "routeName": "/List",
            "displayName": "List"
        },
        {
            "id": 10,
            "routeName": "/ReactCharts",
            "displayName": "React Charts"
        },
        {
            "id": 11,
            "routeName": "/TabNavigation",
            "displayName": "React Tabs"
        },
        {
            "id": 12,
            "routeName": "/ReactTable",
            "displayName": "ReactTable"
        },
        {
            "id": 13,
            "routeName": "/Snackbar",
            "displayName": "Snackbar"
        },
        {
            "id": 14,
            "routeName": "/Textfield",
            "displayName": "Textfield"
        }
    ]

function searchingFor(term) {
    return function (x) {
        return x.displayName.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}


export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state =
            {
                routes: routes,
                term: '',
                showItems: false,
                selectedItem: this.props.items && this.props.items[0]


            }
        this.searchHandler = this.searchHandler.bind(this);

    }

    searchHandler(event) {
        this.setState({ term: event.target.value })
    }

    selectedItem = (routes) => this.setState({
        selectedItem: routes,
        showItems: false
    })

    render() {
        return (
            <div>
                <Router>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4" >
                                <ul className="nav flex-column">
                                    <div className="search">
                                        <input type="text" onChange={this.searchHandler} placeholder="Search.." className="text" />
                                    </div>
                                    <div className="select-box">
                                        {
                                            this.state.routes.filter(searchingFor(this.state.term)).map(routes =>

                                                <div key={routes.id} onClick={() => this.selectedItem(routes)} className={this.state.selectedItem === routes ? 'selected' : ''}>

                                                    <NavLink activeClassName="active" to={routes.routeName}  ><li className="list" >{routes.displayName}</li></NavLink>

                                                </div>
                                            )
                                        }
                                    </div>
                                </ul>
                            </div>
                            <div className="col-sm-8" >
                                <div className="first">
                                    <div className="pdf"></div>
                                </div>
                                <hr className="hr"></hr>
                                <Switch>
                                    <Route exact path="/Accordion" component={Accordian} ></Route>
                                    <Route exact path="/Button" component={Button} ></Route>
                                    <Route exact path="/Carousel" component={Carousel} ></Route>
                                    <Route exact path="/Dialog" component={Dialog} ></Route>
                                    <Route exact path="/List" component={List} ></Route>
                                    <Route exact path="/ReactTable" component={ReactTable} ></Route>
                                    <Route exact path="/DatePicker" component={DatePicker} ></Route>
                                    <Route exact path="/Search" component={Search} ></Route>
                                    <Route exact path="/ReactCharts" component={ReactCharts} ></Route>
                                    <Route exact path="/TabNavigation" component={TabNavigation} ></Route>
                                    <Route exact path="/Gauge" component={Gauge} ></Route>
                                    <Route exact path="/Snackbar" component={Snackbar} ></Route>
                                    <Route exact path="/Textfield" component={Textfield} ></Route>
                                    <Route exact path="/Form" component={Form} ></Route>
                                </Switch>
                            </div>
                        </div>

                    </div>

                </Router>
            </div>
        );
    }
}
