import React from 'react';
import { HeroWrapper } from '../styles/pages/HomeStyles';
import { Container } from '../styles/pages';
import { Typography, Button, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="home">
      <HeroWrapper>
        <Toolbar />
        <Typography variant="h3">WatchTogether</Typography>
        <Typography variant="subtitle1">
          Watch Youtube videos with friends in real-time.
        </Typography>
        <Button
          component={Link}
          to="/app"
          variant="contained"
          style={{ background: '#E2C044', color: '#393E41' }}
        >
          Watch Now
        </Button>
      </HeroWrapper>
    </div>
  );
};

export default Home;
