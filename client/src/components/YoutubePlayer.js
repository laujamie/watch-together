import React from "react";
import PropTypes from "prop-types";

const YT_API_URI = "https://www.youtube.com/iframe_api";

class YoutubePlayer extends React.Component {
  static propTypes = {
    videoId: PropTypes.string.isRequired,
  };

  componentDidMount() {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = YT_API_URI;

      window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      this.loadVideo();
    }
  }

  loadVideo = () => {
    const { videoId } = this.props;

    this.player = new window.YT.Player(`youtube-player-${videoId}`, {
      videoId: videoId,
      events: {
        onReady: this.onPlayerReady,
      },
    });
  };

  onPlayerReady(e) {
    e.target.playVideo();
  }

  render() {
    const { videoId } = this.props;
    return videoId ? (
      <div>
        <div id={`youtube-player-${videoId}`}></div>
      </div>
    ) : null;
  }
}

export default YoutubePlayer;
