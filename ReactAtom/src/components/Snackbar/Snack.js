import React from 'react';
import './Snack.css';
import Sticky from './Sticky';
import Hover from './Hover';
import Animation from './Animation';
import Theme from './Theme';


class PositionedSnackbar extends React.Component {
  render() {

    return (
      <div className="snack">
        <Animation></Animation>

        <br></br>

        <Theme></Theme>

        <br></br>

        <Hover></Hover>
        <br></br>

        <Sticky></Sticky>

      </div>
    );
  }
}
export default PositionedSnackbar;


