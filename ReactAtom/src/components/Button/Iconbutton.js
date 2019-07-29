import React, { Component } from 'react'
import './Button.css'
export default class Iconbutton extends Component {
    render() {
        return (
            <div>
                <button className="btn"><i className="fa fa-home"></i></button>
                <button className="btn"><i className="fa fa-bars"></i></button>
                <button className="btn"><i className="fa fa-trash"></i></button>
                <button className="btn"><i className="fa fa-close"></i></button>
                <button className="btn"><i className="fa fa-folder"></i></button>

            </div>
        )
    }
}
