import { h, Component } from 'preact'

const commandVariants = {
  start: 'start',
  go: 'start',
  begin: 'start',

  lap: 'lap',
  loop: 'lap',
  next: 'lap',

  stop: 'stop',
  end: 'stop',

  reset: 'reset',
  clear: 'reset'
}

const iconEnable = (<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 66.161c8.532 0 15.449-6.917 15.449-15.449V15.699C65.449 7.167 58.532.25 50 .25S34.551 7.167 34.551 15.699v35.013c0 8.532 6.917 15.449 15.449 15.449z' /><path d='M73.055 37.881a3.169 3.169 0 00-3.17 3.168v9.663c0 10.964-8.92 19.885-19.885 19.885-10.966 0-19.886-8.921-19.886-19.885v-9.663a3.168 3.168 0 10-6.337 0v9.663c0 14.459 11.764 26.223 26.223 26.223s26.223-11.764 26.223-26.223v-9.663a3.168 3.168 0 00-3.168-3.168zM63.07 93.412h-9.902V79.26c-1.041.126-2.094.21-3.168.21-1.075 0-2.128-.084-3.169-.21v14.152H36.93a3.168 3.168 0 00-3.168 3.169v3.169h32.477v-3.169a3.17 3.17 0 00-3.169-3.169z' /></svg>)
const iconDisable = (<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12.7 12.7'><path d='M6.35.529a5.824 5.824 0 00-5.82 5.82 5.826 5.826 0 005.82 5.822c3.211 0 5.82-2.61 5.82-5.822A5.824 5.824 0 006.35.529zm0 .529a5.289 5.289 0 013.92 8.84L8.51 8.135c.309-.439.486-.967.486-1.521v-.793c0-.353-.53-.353-.53 0v.793c0 .412-.122.805-.337 1.14l-.385-.385c.123-.229.193-.487.193-.755v-2.91a1.588 1.588 0 10-3.176 0v.683l-1.959-1.96a5.266 5.266 0 013.547-1.37zM2.427 2.803l2.333 2.333v1.479A1.59 1.59 0 007.145 7.99c.098-.057.187-.127.269-.201l.375.374c-.116.107-.241.205-.38.286a2.117 2.117 0 01-3.177-1.834v-.793a.265.265 0 00-.267-.27.265.265 0 00-.26.27v.793c0 .944.504 1.818 1.323 2.29.33.191.69.301 1.058.338v.811H4.47c-.353.018-.326.548.027.53H8.2c.353 0 .353-.53 0-.53H6.615v-.811a2.638 2.638 0 001.059-.337c.18-.104.341-.23.488-.37l1.735 1.735a5.288 5.288 0 01-7.468-7.468z' color='#000' overflow='visible' /></svg>)

export default class MicButton extends Component {
  componentDidMount () {
    if (typeof window !== 'undefined') this.setupRecognition()
  }

  state = {
    enabled: false
  }

  toggle = () => (this.state.enabled ? this.disable() : this.enable())

  enable () {
    this.setState({ enabled: true })
    this.listening = true // need immediate internal state
    this.startListening()
  }

  disable () {
    this.setState({ enabled: false })
    this.listening = false // need immediate internal state
    this.recognition.stop()
  }

  setupRecognition () {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

    // grammars do not seem to be well supported at the moment
    // const grammar = new SpeechGrammarList()
    // const commandGrammars = [
    //   'public <start> = start | go | begin',
    //   'public <lap> = lap | next',
    //   'pubilc <stop> = stop | end',
    //   'public <reset> = reset | clear'
    // ]
    // grammar.addFromString(`#JSGF V1.0; grammar commands; ${commandGrammars.join('; ')}`)

    const recognition = new SpeechRecognition()
    // recognition.grammars = grammar
    recognition.continuous = true
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.onstart = () => { console.debug('started listening') }
    recognition.onspeechstart = this.onspeechstart
    recognition.onresult = this.onresult
    // recognition.onnomatch = this.onnomatch
    recognition.onend = this.onend

    this.recognition = recognition
  }

  onspeechstart = () => {
    // Logging the time we detect speech because
    // there is a significant delay to when
    // we have a final result
    this.voiceStartTime = Date.now()
    console.debug('speechstart', this.voiceStartTime)

    // Since we're relying on this speechstart
    // event in this way, we stop/start again
    // setTimeout(() => {
    //   this.recognition.stop()
    // }, 1000)
    setTimeout(() => {
      console.debug('Attempting to restart listening after 1 second')
      this.restartListening()
    }, 1000)
  }

  onresult = (event) => {
    // Grab the last result
    const latest = event.results[event.results.length - 1][0]
    const command = latest.transcript.toLowerCase().trim()
    const knownCommand = commandVariants[command]

    console.log('Command ' + command)
    console.log('Confidence: ' + latest.confidence)
    console.log('Known Command ' + knownCommand)

    if (knownCommand) {
      this.props[knownCommand](this.voiceStartTime)
      this.restartListening()
    }
  }

  // onnomatch = (event) => {
  //   console.log('nomatch', event)
  // }

  restartListening () {
    if (!this.listening) return
    console.debug('attempting to stop recognition in order to restart it')
    try {
      this.recognition.stop()
    } catch (e) {
      console.debug('failed to stop recognition', e.message)
    }
    this.startListening()
  }

  startListening () {
    if (!this.listening) return
    console.debug('attempting to start recognition')
    try {
      this.recognition.start()
    } catch (e) {
      console.debug('failed to start recognition', e.message)
      this.recognition.stop()
    }
  }

  onstart = () => {
    console.debug('start')
  }

  onend = () => {
    console.debug('done listening')
    if (this.listening) this.startListening()
  }

  render (_, { enabled }) {
    const label = `${enabled ? 'Dis' : 'En'}able voice commands`
    return (
      <button type='button' aria-label={label} onclick={this.toggle}>
        {enabled ? iconDisable : iconEnable}
      </button>
    )
  }
}
