import React, { useState } from "react";
import YoutubePlayer from "../components/YoutubePlayer";
import { YoutubePlayerContainerWrapper } from "../styles/YoutubePlayerContainerStyles";

const YoutubePlayerContainer: React.FC = () => {
  const [videoID, setVideoID] = useState("");

  return (
    <YoutubePlayerContainerWrapper>
      <YoutubePlayer VideoID={videoID}></YoutubePlayer>
    </YoutubePlayerContainerWrapper>
  );
};
