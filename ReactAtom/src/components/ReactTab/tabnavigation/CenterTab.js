/**
* <h1>CenterTab</h1>
* The CenterTab is using the @material ui which is creating the center tab with larger view
* 
*
* @author  Pratiksha Nalavade & Apoorva Pareek 
* @since   2019-02-25 
*/


import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = {
  root: {
    flexGrow: 1,
    width: '100%',

  },
};



class ScrollableTabsButtonPrevent extends React.Component {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render(props) {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} variant="scrollable" scrollButtons="off">
            <Tab icon={<PhoneIcon />} aria-label="Phone" />
            <Tab icon={<FavoriteIcon />} aria-label="Favorite" />
            <Tab icon={<PersonPinIcon />} aria-label="Person" />
            <Tab icon={<HelpIcon />} aria-label="Help" />

          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}

      </div>
    );
  }
}
export default withStyles(styles)(ScrollableTabsButtonPrevent);