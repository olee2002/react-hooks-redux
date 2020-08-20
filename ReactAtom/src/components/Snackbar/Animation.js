import React from 'react';
import './Snack.css';

import { SnackbarProvider, wrapComponent } from 'react-snackbar-alert';

export default function CustomAnimationTimeoutExample() {
  return (
    <SnackbarProvider animationTimeout={1000} position="top-right">
      <Container />
    </SnackbarProvider>
  );
}

const Container = wrapComponent(function ({ createSnackbar }) {
  function showSnackbar() {
    createSnackbar({
      message: 'I Like React!'
    });
  }

  return (
    <div>
      <button onClick={showSnackbar} className="size"><span>Animation Snackbar</span></button>
    </div>
  );
});
