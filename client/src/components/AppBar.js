import React from 'react';
import { AppBar, Button } from '@material-ui/core';
import { LogoWrapper, AppBarWrapper } from '../styles/AppBarStyles';

const MainAppBar = () => {
  return (
    <AppBar position="static">
      <AppBarWrapper>
        <LogoWrapper>WatchTogether</LogoWrapper>
        <Button color="inherit" style={{ fontFamily: 'inherit' }}>
          Log In
        </Button>
      </AppBarWrapper>
    </AppBar>
  );
};

export default MainAppBar;
