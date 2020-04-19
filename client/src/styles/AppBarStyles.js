import React from 'react';
import styled from 'styled-components';
import { Typography, Toolbar } from '@material-ui/core';

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

  @media only screen and (max-width: 700px) {
    padding: 1em 2em;
  }
`;
