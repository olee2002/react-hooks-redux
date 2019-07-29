import React, { Component } from 'react'

export default class Materialbutton extends Component {
  render() {
    return (
      <div>
        <div >
          <div class="row">
            <div class="col four">
              <a href="#" class="btn btn-facebook"><i class="fa fa-facebook"></i>  Sign in with Facebook</a>
            </div>


            <div class="col four">
              <a href="#" class="btn btn-linkedin"><i class="fa fa-linkedin"></i>  Sign in with LinkedIn</a>
            </div>
          </div>


          <div class="row">
            <div class="col three">
              <a href="#" class="btn btn-dark-blue"><i class="fa fa-image"></i> Upload image</a>
            </div>

            <div class="col three">
              <a href="#" class="btn btn-dark-blue"><i class="fa fa-pencil"></i> Register now</a>
            </div>
            <br></br>

            <div class="col three">
              <a href="#" class="btn btn-dark-blue"><i class="fa fa-shopping-cart"></i> Add to cart</a>
            </div>

            <div class="col three">
              <a href="#" class="btn btn-dark-blue"><i class="fa fa-times-circle"></i> Sign out</a>
            </div>
          </div>

        </div>

      </div>


    )
  }
}












// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import './Button.css'
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';

// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit,
//     width:107,
//     height:30,
//   },
//   input: {
//     display: 'none',
//   },
//   rightIcon: {
//     marginLeft: theme.spacing.unit,
//   },
// });

// function ContainedButtons(props) {
//   const { classes } = props;
//   return (
//     <div>
//       <div>
//         <Button variant="contained" className={classes.button}>
//           Default
//       </Button>
//         <Button variant="contained" color="primary" className={classes.button}>
//           Primary
//       </Button>

//         <Button variant="contained" color="secondary" className={classes.button}>
//           Secondary
//       </Button>

//         <Button variant="contained" color="secondary" disabled className={classes.button}>
//           Disabled
//       </Button>

//         <a href="#"> <Button variant="contained"  className={classes.button}>
//           Link
//       </Button>
//         </a>



//       </div>


//     </div>
//   );
// }

// export default withStyles(styles)(ContainedButtons);
