import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const YT_API_URI = "https://www.youtube.com/iframe_api";

const YoutubePlayer = ({ videoId }) => {
  const [id, setId] = useState(videoId);
  const [player, setPlayer] = useState(undefined);

  const onPlayerReady = (e) => {
    e.target.playVideo();
  };

  const loadVideo = () => {
    setPlayer(
      new window.YT.Player(`youtube-player-${id}`, {
        videoId: id,
        events: {
          onReady: onPlayerReady,
        },
      })
    );
  };

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = YT_API_URI;

      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    loadVideo();
  }, []);

  return id ? (
    <div>
      <div id="player" />
    </div>
  ) : null;
};

YoutubePlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default YoutubePlayer;
