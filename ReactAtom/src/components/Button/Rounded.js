import React, { Component } from 'react'
import './Button.css';

export default class Rounded extends Component {
    render() {
        return (
            <div>
                <button className="buttons buttons1">2px</button>
                <button className="buttons buttons2">4px</button>
                <button className="buttons buttons3">8px</button>
                <button className="buttons buttons4">12px</button>
                <button className="buttons buttons5">50%</button>
            </div>
        )
    }
}
