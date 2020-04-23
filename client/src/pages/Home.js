import React from 'react';
import { HeroWrapper } from '../styles/pages/HomeStyles';
import { Container } from '../styles/pages';
import { Typography, Button, Grid, Card, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ReactComponent as HeroImage } from './assets/hero_image.svg';

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
            <HeroImage style={{ height: '100%', width: '100%' }} />
          </Grid>
        </Grid>
      </HeroWrapper>
      <Container style={{ background: '#eee' }}>
        <Grid container>
          <Grid item>
            <Typography variant="h4">Features</Typography>
            <Grid container spacing={3}>
              <Grid item>
                <Card>
                  <CardContent>
                    <p>This is a test</p>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
