import styled from 'styled-components';
import { Container } from './shared';
import { Card } from '@material-ui/core';
import { ReactComponent as HeroImage } from '../../pages/assets/hero_image.svg';

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

export const HeroImageWrapper = styled(HeroImage)`
  pointer-events: none;
  width: 100%;
  height: 100%;
`;
