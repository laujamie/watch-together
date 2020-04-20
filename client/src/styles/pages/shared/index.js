import styled from 'styled-components';

export const Container = styled.div`
  padding: 4em 4em;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakpoints.up('sm')}) {
    padding: 4em 2em;
  }
`;
