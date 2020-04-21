import React from 'react';
import styled from 'styled-components';
import {
  Typography,
  Toolbar,
  Button,
  AppBar,
  Drawer,
  IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

export const LogoWrapper = styled(({ ...props }) => (
  <Typography variant="h6" {...props} />
))`
  font-variant: small-caps;
  flex-grow: 1;
`;

export const AppBarWrapper = styled(({ disableGutters, ...other }) => (
  <Toolbar disableGutters {...other} />
))`
  padding: 1em 4em;

  @media only screen and (max-width: 600px) {
    padding: 1em 2em;
  }
`;

export const AppBarLink = styled(({ color, ...other }) => (
  <Button color="inherit" {...other} />
))`
  font-family: inherit;
  margin-left: 1em;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const StyledAppBar = styled(AppBar)`
  z-index: ${(props) => props.theme.zIndex.drawer + 1};
`;

export const DrawerButton = styled((props) => (
  <IconButton {...props}>
    <MenuIcon></MenuIcon>
  </IconButton>
))`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
    margin-right: 0.5rem;
  }
`;

export const AppDrawer = styled(Drawer)`
  width: 100%;
  ${({ toggle }) => {
    if (toggle) {
      return `display: block`;
    } else {
      return `display: none`;
    }
  }}
`;
