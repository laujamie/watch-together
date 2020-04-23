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
const CHECK_INTERVAL = 1000;

/**
 * Component for creating a Youtube IFrame player
 */
class YoutubePlayer extends React.Component {
  static propTypes = {
    videoId: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.prevTime = undefined;
    this.videoTimeout = undefined;
    this.blockStateSend = false;
  }

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

  componentWillUnmount = () => {
    if (typeof this.videoTimeout !== 'undefined')
      clearTimeout(this.videoTimeout);
  };

  componentDidUpdate(prevProps) {
    if (this.props.videoId !== prevProps.videoId) {
      this.loadVideo();
    }
  }

  loadVideo = () => {
    const { videoId } = this.props;
    let id = '';
    try {
      const temp = new URL(videoId);
      const tempParams = temp.searchParams;
      if (!tempParams.has('v')) {
        throw new Error('Missing video id');
      }
      id = tempParams.get('v');
    } catch (err) {
      // set videoId directly if not a URL
      id = videoId;
    } finally {
    }

    this.player = new window.YT.Player(`youtube-player-${videoId}`, {
      videoId: id,
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
      this.blockStateSend = true;
      this.prevTime = timestamp; // hopefully prevent desync
      this.player.seekTo(timestamp);
    });
    setTimeout(this.trackPlayer, CHECK_INTERVAL);
  };

  setTimestamp = (timestamp = 0) => {
    // this.player.seekTo(timestamp);
    timestampChange(timestamp);
  };

  handleRestart = () => {
    this.player.seekTo(0);
    this.prevTime = 0;
    this.setTimestamp();
  };

  handleSock = (e) => {
    const code = e.data;
    if (
      code === window.YT.PlayerState.BUFFERING ||
      code === window.YT.PlayerState.PLAYING
    ) {
      play();
      this.blockStateSend = false;
    } else if (code === window.YT.PlayerState.PAUSED && !this.blockStateSend) {
      pause();
    }
  };

  trackPlayer = () => {
    if (this.prevTime) {
      if (
        this.player.getPlayerState() === window.YT.PlayerState.PLAYING ||
        this.player.getPlayerState() === window.YT.PlayerState.BUFFERING
      ) {
        if (this.blockStateSend) {
          this.blockStateSend = false;
          this.prevTime = this.player.getCurrentTime();
          this.videoTimeout = setTimeout(this.trackPlayer, CHECK_INTERVAL);
          return;
        }
        const curTime = this.player.getCurrentTime();
        const CHECK_INTERVAL_SECS = CHECK_INTERVAL / 1000;
        if (
          Math.abs(curTime - this.prevTime - CHECK_INTERVAL_SECS) >
          CHECK_INTERVAL_SECS * 1.25
        ) {
          this.setTimestamp(curTime);
        }
      }
    }
    this.prevTime = this.player.getCurrentTime();
    this.videoTimeout = setTimeout(this.trackPlayer, CHECK_INTERVAL);
  };

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
                color="secondary"
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
