/* 
MyTable is a reusable component which describe react table.
Includes all the properties of React-Table.

@author  Vihanga Naik & Sujita Patil 
@since 2019-02-05 */

import React, { Component } from 'react';
import ReactTable from 'react-table';
import '../css/Table.css';

class MyTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      showPaginationBottom: true
    }
  }

  render() {

    return (
      <div className="table" >
        <ReactTable className="row__color"
          //for fetching the index and display as a alert with index number.
          getTrProps={(state, Data) => {
            if (Data && Data.row) {
              return {
                onClick: (e) => {

                  this.setState({
                    selected: Data.index
                  }, () => alert("Page index is:" + this.state.selected))
                },
                style: {
                  background: Data.index === this.state.selected ? '#00afec' : 'transparent '
                }
              }
            } else {
              return
            }
          }
          }

          data={this.props.data}
          columns={this.props.columns}

          //properties

          showPaginationBottom={this.state.showPaginationBottom}
          style={{ height: "300px" }}
          scrollToIndex={50}
          showPageJump={true}
          collapseOnPageChange={false}
          sortable={true}
          resizable={true}
          viewIndex={1}
      

        />

      </div>
    )
  }
}

export default MyTable;


