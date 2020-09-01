import React, { Component } from 'react'
import './Button.css';
import Materialbutton from './Materialbutton';
import Iconbutton from './Iconbutton';
import Button1 from './Button1';
import Rounded from './Rounded';

export default class Tab extends Component {
  render() {
    return (
      <div>
        <div className="tabs">

          <input type="radio" name="tabs" id="tab1" defaultChecked />
          <label for="tab1">
            <span>Materialized</span>
          </label>

          <input type="radio" name="tabs" id="tab2"  />
          <label for="tab2">
            <span>Icon Button</span>
          </label>

          <input type="radio" name="tabs" id="tab3" />
          <label for="tab3">
            <span>Rounded</span>
          </label>

          <div id="tab-content1" className="tab-content">
            <Materialbutton></Materialbutton>
          </div>

          <div id="tab-content2" className="tab-content">
            <Iconbutton></Iconbutton>

          </div>
          <div id="tab-content3" className="tab-content">

            <Rounded></Rounded>

          </div>
        </div>
      </div>

    )
  }
}

