import React from "react";
import { YoutubePlayerWrapper } from "../styles/YoutubePlayerStyles";

const BASE_URI = "https://www.youtube.com/embed/";

interface YoutubePlayerProps {
  VideoID: string;
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ VideoID }) => {
  return VideoID ? (
    <YoutubePlayerWrapper
      src={BASE_URI + VideoID}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="video"
    ></YoutubePlayerWrapper>
  ) : null;
};

export default YoutubePlayer;
