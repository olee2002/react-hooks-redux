import React from "react";
import Accordion from "./Accordion";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./Textfield.css";

const styles = theme => ({

  textField: {
    marginLeft: 70,
    marginRight: 70,
    width: 100,
  },
  dense: {
    marginTop: 19,
  },
});


class TextFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      age: '',
    };
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Accordion
          className="accordion"
          selectedIndex={this.state.selectedIndex}
          onChange={(index, expanded, selectedIndex) => console.log(`#${index} ${expanded ? 'expanded' : 'collapsed'} (selectedIndex: ${selectedIndex})`)}
        >
          <div
            data-header="REQUIRED"
            className="accordion-item"
          >
            <TextField
              required
              id="standard-required"

              defaultValue="Hello World"
              className={classes.textField}
            />
          </div>
          <div data-header="STANDARD ERROR" className="accordion-item">
            <TextField
              error
              id="standard-error"

              defaultValue="Hello World"
              className={classes.textField}
              margin="normal"
            />
          </div>
          <div
            data-header="PASSWORD"
            className="accordion-item"
          >
            <TextField
              id="standard-password-input"

              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
            />

          </div>

          <div
            data-header="READ ONLY"
            className="accordion-item"
          >
            <TextField
              id="standard-read-only-input"

              defaultValue="Hello World"
              className={classes.textField}

              InputProps={{
                readOnly: true,
              }}
            />
          </div>

          <div
            data-header="STANDARD NUMBER"
            className="accordion-item"
          >
            <TextField
              id="standard-number"

              value={this.state.age}
              onChange={this.handleChange('age')}
              type="number"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />

          </div>

          <div
            data-header="STANDARD DISABLE"
            className="accordion-item"
          >
            <TextField
              disabled
              id="standard-disabled"
              label="Disabled"
              defaultValue="Hello World"
              className={classes.textField}
              margin="normal"
            />

          </div>


        </Accordion>


      </div>
    );
  }
}

export default withStyles(styles)(TextFields);



