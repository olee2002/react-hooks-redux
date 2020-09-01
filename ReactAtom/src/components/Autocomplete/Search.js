import React, { Component } from 'react';
import ComboBox from "./ComboBox";
import CountrySelect from "./CountrySearch";
import FreeSoloCreateOptionDialog from "./Creatable";

class Search extends Component {
  render() {
    return (
      <div>
        <h2>Autocomplete Search</h2>
          <hr className="hr"/>
          <h4>The autocomplete is a normal text input enhanced by a panel of suggested options.</h4>
          <hr className="hr"/>

              <h2>Country Search</h2>
              <hr className="hr"/>
              <h4>This is a basic example of search auto-complete which uses onChange event and fetches result</h4>
              <hr className="hr"/>
              <ComboBox/>



      </div>
    );
  }
}

export default Search;
