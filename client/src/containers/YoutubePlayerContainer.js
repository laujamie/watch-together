import React, { useState, useEffect } from "react";
import YoutubePlayer from "../components/YoutubePlayer";
import { loadVideo, subscribeToVideoId } from "../services/Socket";

const YoutubePlayerContainer = () => {
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    subscribeToVideoId((err, id) => setVideoId(id));
  }, []);

  const handleChange = (e) => {
    setVideoId(e.target.value);
    loadVideo(e.target.value);
  };

  return (
    <React.Fragment>
      <input type="videoId" value={videoId} onChange={handleChange}></input>
      <YoutubePlayer videoId={videoId}></YoutubePlayer>
    </React.Fragment>
  );
};

export default YoutubePlayerContainer;
