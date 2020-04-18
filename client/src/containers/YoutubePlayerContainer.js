import React, { useState, useEffect } from 'react';
import YoutubePlayer from '../components/YoutubePlayer';
import { loadVideo, subscribeToVideoId } from '../services/Socket';
import {
  YoutubePlayerContainerHeader,
  YoutubePlayerContainerText,
  YoutubePlayerContainerWrapper
} from '../styles/YoutubePlayerContainerStyles';

const YoutubePlayerContainer = () => {
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    subscribeToVideoId((err, id) => setVideoId(id));
  }, []);

  const handleChange = (e) => {
    setVideoId(e.target.value);
    loadVideo(e.target.value);
  };

  return (
    <YoutubePlayerContainerWrapper>
      <YoutubePlayerContainerHeader>
        Welcome to WatchTogether!
      </YoutubePlayerContainerHeader>
      <YoutubePlayerContainerText>
        Enter a video id into the textbox to get started:
      </YoutubePlayerContainerText>
      <label for="videoId">Video ID: </label>
      <input
        type="videoId"
        value={videoId}
        onChange={handleChange}
        placeholder="Enter your video id here..."
        name="videoId"
      ></input>
      <YoutubePlayer videoId={videoId}></YoutubePlayer>
    </YoutubePlayerContainerWrapper>
  );
};

export default YoutubePlayerContainer;
