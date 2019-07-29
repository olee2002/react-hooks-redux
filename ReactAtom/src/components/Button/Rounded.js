import React, { Component } from 'react'
import './Button.css';

export default class Rounded extends Component {
    render() {
        return (
            <div>
                <button class="buttons buttons1">2px</button>
                <button class="buttons buttons2">4px</button>
                <button class="buttons buttons3">8px</button>
                <button class="buttons buttons4">12px</button>
                <button class="buttons buttons5">50%</button>
            </div>
        )
    }
}
