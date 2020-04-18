import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import YoutubePlayer from '../components/YoutubePlayer';
import { loadVideo, subscribeToVideoId } from '../services/Socket';
import {
  YoutubePlayerContainerHeader,
  YoutubePlayerContainerText,
  YoutubePlayerContainerWrapper,
  YoutubeIDInput,
  YoutubeSubmitButton
} from '../styles/YoutubePlayerContainerStyles';

const YoutubePlayerContainer = () => {
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    subscribeToVideoId((err, id) => setVideoId(id));
  }, []);

  const handleChange = (e) => {
    setVideoId(e.target.value);
  };

  const handleClick = (e) => {
    if (videoId) loadVideo(videoId);
  };

  return (
    <YoutubePlayerContainerWrapper>
      <YoutubePlayerContainerHeader variant="h1">
        Welcome to WatchTogether!
      </YoutubePlayerContainerHeader>
      <YoutubePlayerContainerText>
        Enter a video id into the textbox to get started:
      </YoutubePlayerContainerText>
      <Grid container>
        <Grid container item xs={12} alignItems="flex-end" spacing={3}>
          <Grid item>
            <YoutubeIDInput
              label="Video ID"
              value={videoId}
              onChange={handleChange}
            ></YoutubeIDInput>
          </Grid>
          <Grid item>
            <YoutubeSubmitButton
              onClick={handleClick}
              startIcon={<YouTubeIcon />}
            >
              Play
            </YoutubeSubmitButton>
          </Grid>
        </Grid>
      </Grid>
      <YoutubePlayer videoId={videoId}></YoutubePlayer>
    </YoutubePlayerContainerWrapper>
  );
};

export default YoutubePlayerContainer;
