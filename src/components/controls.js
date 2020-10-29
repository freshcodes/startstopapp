import { h, Component } from 'preact'
import { connect } from 'unistore/preact'

import { actions } from '../store'

import StartButton from './start_button'
import StopButton from './stop_button'
import LapButton from './lap_button'
import MicButton from './mic_button'
import ResetButton from './reset_button'

import isSpeechRecognitionSupported from '../lib/is_speech_recognition_supported'

const voiceSupported = isSpeechRecognitionSupported()

export class Controls extends Component {
  // Ignoring the event that ultimately gets passed in from the click
  start = (_) => (this.props.start())
  stop = (_) => (this.props.stop())
  lap = (_) => (this.props.lap())
  reset = (_) => (this.props.reset())

  render ({ running, start, stop, lap, reset }) {
    return (
      <menu>
        <li>{running ? <StopButton onclick={this.stop} /> : <StartButton onclick={this.start} />}</li>
        <li><LapButton onclick={this.lap} /></li>
        <li><ResetButton onclick={this.reset} /></li>
        {voiceSupported ? <li><MicButton start={start} stop={stop} lap={lap} reset={reset} /></li> : ''}
      </menu>
    )
  }
}

export default connect('running', actions)(Controls)
