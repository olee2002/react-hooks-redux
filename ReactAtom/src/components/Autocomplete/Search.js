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

          <div>
              <h2>Combo box</h2>
              <hr className="hr"/>
              <h4>The value must be chosen from a predefined set of allowed values.</h4>
              <hr className="hr"/>
              <ComboBox/>
          </div>

          <div>
              <h2>Country select</h2>
              <hr className="hr"/>
              <h4>Choose one of the 248 countries.</h4>
              <hr className="hr"/>
              <CountrySelect/>
          </div>

          <div>
              <h2>Creatable</h2>
              <hr className="hr"/>
              <h4>A option, for instance Add "YOUR SEARCH". You could also display a dialog when the user wants to add a new value..</h4>
              <hr className="hr"/>
              <FreeSoloCreateOptionDialog/>
          </div>

      </div>
    );
  }
}

export default Search;
