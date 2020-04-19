import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const YoutubePlayerWrapper = styled.div`
  margin-top: 0.5em;
`;

export const YoutubeIFrameWrapper = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

export const YoutubeIFrameWrapperIn = styled.div`
  float: none;
  clear: both;
  width: 100%;
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const RestartButton = styled(Button)`
  padding: 0.5em 1em;
  margin-top: 0.5em;
`;
