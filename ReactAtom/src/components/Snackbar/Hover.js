import React from 'react';

import { SnackbarProvider, wrapComponent } from 'react-snackbar-alert';

export default function PauseOnHoverExample() {
  return (
    <SnackbarProvider pauseOnHover={true} position="bottom-right">
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
      <button onClick={showSnackbar} className="size" ><span>PauseOnHover Snackbar</span></button>
    </div>
  );
});