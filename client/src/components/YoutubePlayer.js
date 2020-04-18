import React from 'react';
import PropTypes from 'prop-types';
import {
  pause,
  play,
  subscribeToVideoPause,
  subscribeToVideoPlay
} from '../services/Socket';
import { YoutubePlayerWrapper } from '../styles/YoutubePlayerStyles';

const YT_API_URI = 'https://www.youtube.com/iframe_api';

class YoutubePlayer extends React.Component {
  static propTypes = {
    videoId: PropTypes.string.isRequired
  };

  componentDidMount() {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = YT_API_URI;

      window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      this.loadVideo();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.videoId !== prevProps.videoId) {
      this.loadVideo();
    }
  }

  loadVideo = () => {
    const { videoId } = this.props;

    this.player = new window.YT.Player(`youtube-player-${videoId}`, {
      videoId: videoId,
      events: {
        onReady: this.onPlayerReady,
        onStateChange: this.handleSock
      }
    });
  };

  onPlayerReady = (e) => {
    subscribeToVideoPause(() => {
      this.player.pauseVideo();
    });
    subscribeToVideoPlay(() => {
      this.player.playVideo();
    });
  };

  handleSock(e) {
    const code = e.data;
    if (
      code === window.YT.PlayerState.BUFFERING ||
      code === window.YT.PlayerState.PLAYING
    ) {
      play();
    } else if (code === window.YT.PlayerState.PAUSED) {
      pause();
    }
  }

  render() {
    const { videoId } = this.props;
    return videoId ? (
      <YoutubePlayerWrapper>
        <div>
          <div id={`youtube-player-${videoId}`}></div>
        </div>
      </YoutubePlayerWrapper>
    ) : null;
  }
}

export default YoutubePlayer;
