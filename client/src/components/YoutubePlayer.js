import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import {
  pause,
  play,
  subscribeToVideoPause,
  subscribeToVideoPlay,
  subscribeToTimestamp,
  timestampChange
} from '../services/Socket';
import {
  YoutubePlayerWrapper,
  RestartButton,
  YoutubeIFrameWrapper,
  YoutubeIFrameWrapperIn
} from '../styles/YoutubePlayerStyles';

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
      width: '100%',
      height: '100%',
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
    subscribeToTimestamp((timestamp) => {
      this.player.seekTo(timestamp);
    });
  };

  setTimestamp = (timestamp = 0) => {
    // this.player.seekTo(timestamp);
    timestampChange(timestamp);
  };

  handleRestart = () => {
    this.setTimestamp();
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
          <Grid container justify="center">
            <Grid item xs={12}>
              <YoutubeIFrameWrapper>
                <YoutubeIFrameWrapperIn>
                  <div id={`youtube-player-${videoId}`}></div>
                </YoutubeIFrameWrapperIn>
              </YoutubeIFrameWrapper>
            </Grid>
            <Grid item xs={12}>
              <RestartButton
                startIcon={<RotateLeftIcon />}
                onClick={this.handleRestart}
                color="primary"
                variant="contained"
              >
                Restart
              </RestartButton>
            </Grid>
          </Grid>
        </div>
      </YoutubePlayerWrapper>
    ) : null;
  }
}

export default YoutubePlayer;
