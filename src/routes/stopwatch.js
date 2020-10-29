import { h, Component } from 'preact'

import isSpeechRecognitionSupported from '../lib/is_speech_recognition_supported'

import Nav from '../components/nav'
import Controls from '../components/controls'
import Clock from '../components/clock'
import Laps from '../components/laps'

function VoiceInstructions () {
  if (!isSpeechRecognitionSupported()) return

  return (
    <section class='note'>
      <p>
        Your browser supports voice recognition. This is expiremental and might be a bit wonky. To enable, use the microphone icon.
      </p>
      <p>
        Once enabled you can use commands like: <strong>"start", "loop", "stop", "reset"</strong>.
      </p>
      <p>
        There are alternates like <strong>"go", "begin", "lap", "next", "end", and "clear"</strong>.
      </p>
    </section>
  )
}

export default class Stopwatch extends Component {
  render () {
    return (
      <div>
        <Controls />
        <Clock />
        <Laps />
        <VoiceInstructions />
        <Nav />
      </div>
    )
  }
}
