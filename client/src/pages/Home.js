import React from 'react';
import { HeroWrapper, HeroImageWrapper } from '../styles/pages/HomeStyles';
import { Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="home">
      <HeroWrapper>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3">WatchTogether</Typography>
            <Typography variant="subtitle1">
              Watch Youtube videos with friends in real-time.
            </Typography>
            <Button
              component={Link}
              to="/rooms"
              variant="contained"
              style={{ background: '#E2C044', color: '#393E41' }}
            >
              Watch Now
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <HeroImageWrapper style={{ height: '100%', width: '100%' }} />
          </Grid>
        </Grid>
      </HeroWrapper>
    </div>
  );
};

export default Home;
