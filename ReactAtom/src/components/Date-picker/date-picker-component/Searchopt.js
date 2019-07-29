import React, { Component } from 'react'
import './Style.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import BasicDatePicker from './BasicDatePicker';
import DateComponent from './DateRange';
import SelectTime from './SelectTime';
import YearDropdown from './YearDropdown';
import MultipleYearInline from './MultipleMonthInline';

class Searchopt extends Component {
    state = {
        ...this.props,
        items: this.props.items || [],
        showItems: false,
        selectedItem: this.props.items && this.props.items[0]
    }

    dropDown = () => {
        this.setState(prevState => ({
            showItems: !prevState.showItems
        }))
    }

    selectedItem = (item) => this.setState({
        selectedItem: item,
        showItems: false
    })
    render() {
        return (
            <Router>
                <div className="picker">
                    <div className="select-box--box" style={{ width: this.state.width || 150 }}>
                        <div className="select-box--container">
                            <div className="select-box--selected-item">{this.state.selectedItem.value}</div>
                            <div className="select-box--arrow" onClick={this.dropDown}>
                                <span className={`${this.state.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}`}></span>

                            </div>
                            <div style={{ display: this.state.showItems ? 'block' : 'none' }} className="select-box--items">

                                {
                                    this.state.items.map(item =>
                                        <Link to={item.value}><div key={item.id} onClick={() => this.selectedItem(item)} className={this.state.selectedItem === item ? 'selected' : ''}>
                                            {item.value}
                                        </div>
                                        </Link>
                                    )
                                }
                            </div>

                        </div>

                    </div>
                    <div className="sample">
                        <Route exact path="/BasicDatePicker" component={BasicDatePicker} ></Route>
                        <Route exact path="/DateComponent" component={DateComponent} ></Route>
                        <Route exact path="/SelectTime" component={SelectTime} ></Route>
                        <Route exact path="/YearDropdown" component={YearDropdown} ></Route>
                        <Route exact path="/MultipleYearInline" component={MultipleYearInline} ></Route>
                    </div>

                </div>
            </Router>
        )
    }
}
export default Searchopt;