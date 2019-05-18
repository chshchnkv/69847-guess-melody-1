import React from "react";
import PropTypes from "prop-types";

class AudioPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = React.createRef();

    const {isPlaying} = props;

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying,
    };

    this._handleButtonClick = this._handleButtonClick.bind(this);
  }

  componentDidMount() {
    const {src} = this.props;
    const audio = this._audioRef.current;

    audio.oncanplaythrough = () => this.setState({isLoading: false});
    audio.onplay = () => this.setState({isPlaying: true});
    audio.onpause = () => this.setState({isPlaying: false});
    audio.ontimeupdate = () => this.setState({progress: audio.currentTime});
    audio.src = src;
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const audio = this._audioRef.current;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  componentWillUnmount() {
    const audio = this._audioRef.current;
    audio.pause();
    audio.oncanplaythrough = undefined;
    audio.onplay = null;
    audio.onpause = null;
    audio.ontimeupdate = null;
    audio.src = ``;
  }

  render() {
    const {
      isLoading,
      isPlaying
    } = this.state;

    return (
      <React.Fragment>
        <button className={`track__button track__button--${isPlaying ? `pause` : `play`}`} type="button" disabled={isLoading} onClick={this._handleButtonClick} />
        <div className="track__status">
          <audio ref={this._audioRef}/>
        </div>
      </React.Fragment>
    );
  }

  _handleButtonClick() {
    const {
      id = 0,
      onButtonClick = () => {}
    } = this.props;

    onButtonClick(id);
    this.setState({isPlaying: !this.state.isPlaying});
  }
}

AudioPlayer.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func,
};

export default AudioPlayer;
