import styled from 'styled-components';
import { Container } from './shared';
import { Card } from '@material-ui/core';

export const HeroWrapper = styled(Container)`
  background: rgb(0, 173, 181);
  background: linear-gradient(
    to bottom right,
    rgba(0, 173, 181, 1) 0%,
    rgba(238, 238, 238, 1) 100%
  );
`;

export const FeatureCard = styled(Card)`
  width: 100%;
`;
