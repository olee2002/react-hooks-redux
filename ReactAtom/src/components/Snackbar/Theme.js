import React from 'react';

import { SnackbarProvider, wrapComponent } from 'react-snackbar-alert';

export default function ThemeExample() {
  return (
    <SnackbarProvider position="top-right">
      <Container />
    </SnackbarProvider>
  );
}

const Container = wrapComponent(function ({ createSnackbar }) {
  function showSnackbar() {
    createSnackbar({
      message: 'I Like React!',
      theme: 'success'
    });
  }

  return (
    <div>
      <button onClick={showSnackbar} className="size" ><span>Theme Snackbar</span></button>
    </div>
  );
});
