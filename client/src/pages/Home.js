import React from 'react';
import {
  HeroWrapper,
  FeatureCard,
  HeroImageWrapper
} from '../styles/pages/HomeStyles';
import { Container } from '../styles/pages';
import { Typography, Button, Grid, Card, CardContent } from '@material-ui/core';
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
              to="/app"
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
      <Container style={{ background: '#eee' }}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="h4">Features</Typography>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <FeatureCard>
                <CardContent>
                  <p>This is a test</p>
                </CardContent>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <FeatureCard>
                <CardContent>
                  <p>This is a test</p>
                </CardContent>
              </FeatureCard>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
