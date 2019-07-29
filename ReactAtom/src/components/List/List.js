import React, { Component } from 'react'
import './Style.css';
import Main from './Main';
import TransferList from './TransferList';

export default class Demo extends Component {
  render() {
    return (
      <div>
        <details class="oncss">
          <summary>Nested List</summary>
          <Main></Main>
        </details>
        <details class="oncss">
          <summary>Transfer List</summary>
          <TransferList></TransferList>
        </details>
      </div>
    )
  }
}
