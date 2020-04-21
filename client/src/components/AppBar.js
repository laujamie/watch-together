import React, { useState } from 'react';
import {
  LogoWrapper,
  AppBarWrapper,
  AppBarLink,
  LogoLink,
  StyledAppBar,
  AppDrawer,
  DrawerButton
} from '../styles/AppBarStyles';
import { List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MobileMenu = ({ toggle }) => {
  return (
    <AppDrawer toggle={toggle} anchor="top">
      <List>
        <ListItem>
          <AppBarLink component={Link} to="/">
            Home
          </AppBarLink>
          <AppBarLink component={Link} to="/app">
            Watch
          </AppBarLink>
        </ListItem>
      </List>
    </AppDrawer>
  );
};

const MainAppBar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <StyledAppBar position="static">
      <AppBarWrapper>
        <DrawerButton
          color="inherit"
          aria-label="open menu"
          edge="start"
          onClick={toggleOpen}
        />
        <MobileMenu toggle={isOpen}></MobileMenu>
        <LogoWrapper>
          <LogoLink to="/">WatchTogether</LogoLink>
        </LogoWrapper>
        <AppBarLink component={Link} to="/">
          Home
        </AppBarLink>
        <AppBarLink component={Link} to="/app">
          Watch
        </AppBarLink>
      </AppBarWrapper>
    </StyledAppBar>
  );
};

export default MainAppBar;
