import React from 'react';
import styled from 'styled-components';
import {
  Typography,
  Toolbar,
  Button,
  AppBar,
  Drawer,
  IconButton,
  List
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

export const LogoWrapper = styled(({ ...props }) => (
  <Typography variant="h6" {...props} />
))`
  font-variant: small-caps;
  flex-grow: 1;
  @media only screen and (max-width: 600px) {
    align-self: center;
  }
`;

export const AppBarWrapper = styled(({ disableGutters, ...other }) => (
  <Toolbar {...other} />
))``;

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
  z-index: 1201;
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

export const AppDrawer = styled(({ toggle, ...other }) => (
  <Drawer {...other} />
))`
  width: 100%;
  background: #393e46;
  color: #eee;
  ${({ toggle }) => {
    if (toggle === true) {
      return `display: block`;
    } else {
      return `display: none`;
    }
  }}
`;

export const DrawerLinkWrapper = styled(List)`
  padding-left: 2em;
  padding-right: 2em;
`;
