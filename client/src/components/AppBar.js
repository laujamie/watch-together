import React, { useState } from 'react';
import {
  LogoWrapper,
  AppBarWrapper,
  AppBarLink,
  LogoLink,
  StyledAppBar,
  AppDrawer,
  DrawerButton,
  DrawerLinkWrapper
} from '../styles/AppBarStyles';
import { ListItem, Toolbar, Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 'inherit',
    background: 'inherit',
    color: 'inherit'
  }
}));

const MobileMenu = ({ open, toggleOpen }) => {
  const classes = useStyles();
  return (
    <Collapse in={open}>
      <AppDrawer
        open={open}
        anchor="top"
        variant="permanent"
        toggle={open}
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar />
        <div style={{ overflow: 'auto' }}>
          <DrawerLinkWrapper onClick={toggleOpen}>
            <ListItem button component={Link} to="/" disableGutters>
              Home
            </ListItem>
            <ListItem button component={Link} to="/app" disableGutters>
              Watch
            </ListItem>
          </DrawerLinkWrapper>
        </div>
      </AppDrawer>
    </Collapse>
  );
};

const MainAppBar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <StyledAppBar position="relative">
        <AppBarWrapper>
          <LogoWrapper>
            <LogoLink to="/">WatchTogether</LogoLink>
          </LogoWrapper>
          <AppBarLink component={Link} to="/">
            Home
          </AppBarLink>
          <AppBarLink component={Link} to="/app">
            Watch
          </AppBarLink>
          <DrawerButton
            color="inherit"
            aria-label="open menu"
            edge="start"
            onClick={toggleOpen}
          />
        </AppBarWrapper>
      </StyledAppBar>
      <MobileMenu open={isOpen} toggleOpen={toggleOpen}></MobileMenu>
    </>
  );
};

export default MainAppBar;
