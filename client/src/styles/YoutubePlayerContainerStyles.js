import styled from 'styled-components';
import { TextField, Button, Container } from '@material-ui/core';

export const YoutubePlayerContainerHeader = styled.h1`
  font-size: 1.8em;
  margin: 0;
  padding: 0;
`;

export const YoutubePlayerContainerText = styled.p`
  margin: 0;
  padding: 0;
`;

export const YoutubePlayerContainerWrapper = styled(Container)`
  text-align: center;
  padding: 4em 6em;
  margin: 0;
  max-width: 100%;
  color: #0a202d;
  min-height: 40%;
`;

export const YoutubeIDInput = styled(TextField)`
  && {
    margin-top: 0.5em;
    font-family: inherit;

    &:hover {
      color: #c4302b;
    }
  }
`;

export const YoutubeSubmitButton = styled(Button)`
  && {
    background-color: #c4302b;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    margin-top: 0.5em;
    color: white;
    padding: 0.5em 1.5em;
    font-family: inherit;

    &:hover {
      background-color: black;
    }
  }
`;
