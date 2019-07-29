import React, { Component } from 'react'
import './tab-navigationcss/Tab.css';
import CenterTab from './tabnavigation/CenterTab';
import Tabs from './tabnavigation/Tabs'

export default class Demo extends Component {
  render() {
    return (
      <div>
        <section class="a-container">
          <div class="ac">

            <input class="ac-input" id="ac-1" name="ac-1" type="checkbox" />
            <label class="ac-label" for="ac-1">Center Tab</label>

            <article class="ac-text">

              <div class="ac-sub">
                <CenterTab></CenterTab>
              </div>
            </article>

          </div>

          <div class="ac">

            <input class="ac-input" id="ac-4" name="ac-4" type="checkbox" />
            <label class="ac-label" for="ac-4">Customized Tab</label>

            <article class="ac-text">

              <div class="ac-sub">
                <Tabs></Tabs>

              </div>
            </article>

          </div>

        </section>

      </div>
    )
  }
}




