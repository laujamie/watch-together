import React from 'react';
import {
  LogoWrapper,
  AppBarWrapper,
  AppBarLink,
  LogoLink,
  StyledAppBar
} from '../styles/AppBarStyles';
import { Link } from 'react-router-dom';

const MainAppBar = () => {
  return (
    <StyledAppBar position="static">
      <AppBarWrapper>
        <LogoWrapper>
          <LogoLink to="/">WatchTogether</LogoLink>
        </LogoWrapper>
        <AppBarLink component={Link} to="/">
          Home
        </AppBarLink>
        <AppBarLink component={Link} to="/about">
          About
        </AppBarLink>
        <AppBarLink component={Link} to="/app">
          Watch
        </AppBarLink>
      </AppBarWrapper>
    </StyledAppBar>
  );
};

export default MainAppBar;
