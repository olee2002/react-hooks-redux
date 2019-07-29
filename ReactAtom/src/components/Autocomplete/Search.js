import React, { Component } from 'react';
import Map from './Map';
import './Map.css'

class Search extends Component {
  render() {
    return (
      <div border-style="solid" className="map">
        <h3>Autocomplete Search</h3>
        <Map
          google={this.props.google}
          center={{ lat: 18.5204, lng: 76.8567 }}
          zoom={20}
        />
      </div>
    );
  }
}

export default Search;
