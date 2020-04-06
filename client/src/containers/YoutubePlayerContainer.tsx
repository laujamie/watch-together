import React, { useState } from "react";
import YoutubePlayer from "../components/YoutubePlayer";
import { YoutubePlayerContainerWrapper } from "../styles/YoutubePlayerContainerStyles";

const YoutubePlayerContainer: React.FC = () => {
  const [videoID, setVideoID] = useState("");

  return (
    <React.Fragment>
      <YoutubePlayerContainerWrapper>
        <YoutubePlayer VideoID={videoID}></YoutubePlayer>
      </YoutubePlayerContainerWrapper>
      <h1>Enter your video ID</h1>
      <input
        value={videoID}
        type="text"
        onChange={(e) => setVideoID(e.target.value)}
      />
    </React.Fragment>
  );
};

export default YoutubePlayerContainer;
