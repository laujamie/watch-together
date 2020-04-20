import React from 'react';
import { HeroWrapper } from '../styles/pages/HomeStyles';
import { Container } from '../styles/pages';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="home">
      <HeroWrapper>
        <Typography variant="h3">WatchTogether</Typography>
        <Typography variant="subtitle1">
          Watch Youtube videos with friends in real-time.
        </Typography>
        <Button component={Link} to="/app" variant="contained">
          Watch Now
        </Button>
      </HeroWrapper>
      <Container>
        <Typography variant="h3">Low-latency</Typography>
        <Typography variant="body1">Big lmao</Typography>
      </Container>
    </div>
  );
};

export default Home;
