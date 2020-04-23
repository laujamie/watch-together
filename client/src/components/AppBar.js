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
import { List, ListItem, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 'inherit'
  }
}));

const MobileMenu = ({ open, toggleOpen }) => {
  const classes = useStyles();
  return (
    <AppDrawer
      open={open}
      anchor="top"
      variant="permanent"
      toggle={open}
      classes={{ paper: classes.drawerPaper }}
    >
      <Toolbar />
      <div style={{ overflow: 'auto' }}>
        <List onClick={toggleOpen}>
          <ListItem button component={Link} to="/">
            Home
          </ListItem>
          <ListItem button component={Link} to="/app">
            Watch
          </ListItem>
        </List>
      </div>
    </AppDrawer>
  );
};

const MainAppBar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <StyledAppBar position="fixed">
        <AppBarWrapper>
          <DrawerButton
            color="inherit"
            aria-label="open menu"
            edge="start"
            onClick={toggleOpen}
          />
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
      <MobileMenu open={isOpen} toggleOpen={toggleOpen}></MobileMenu>
    </>
  );
};

export default MainAppBar;
