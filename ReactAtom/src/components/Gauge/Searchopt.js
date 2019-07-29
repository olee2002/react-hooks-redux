import React, { Component } from 'react'
import './Style.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ArcContainer from './ArcContainer';
import LinearContainer from './LinearContainer ';

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
                <div className="picker1">
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
                    <div className="sample1">
                    <Route exact path="/ArcContainer" component={ArcContainer} ></Route>
                    <Route exact path="/LinearContainer" component={LinearContainer} ></Route>
                    </div>
                </div>
            </Router>
        )
    }
}
export default Searchopt;