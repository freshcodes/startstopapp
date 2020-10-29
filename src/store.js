import createStore from 'unistore'

const key = 'startstop.app'

let localState = {}

if (typeof window !== 'undefined') { // localStorage is not available in pre-render
  localState = JSON.parse(localStorage.getItem(key) || '{}')
}

const initialState = Object.assign({
  lastUri: null,
  history: [],
  running: false,
  lastStart: null,
  lastLoop: null,
  currentTime: 0,
  laps: []
}, localState)

const store = createStore(initialState)

function runLoop () {
  const { currentTime, lastLoop, running } = store.getState()
  if (!running) return
  if (!lastLoop) return requestAnimationFrame(runLoop)
  const now = Date.now()
  const diff = now - lastLoop
  store.setState({ lastLoop: now, currentTime: currentTime + diff })

  requestAnimationFrame(runLoop)
}

if (initialState.running) requestAnimationFrame(runLoop)

const actions = (store) => ({
  navigate (state, event) {
    return { lastUri: event.url }
  },

  clearHistory (state) {
    return { history: [] }
  },

  start (state, startAt) {
    startAt = startAt || Date.now()
    const newState = { lastStart: startAt, lastLoop: startAt, running: true }
    store.setState(newState)
    requestAnimationFrame(runLoop)
  },

  stop (state, stopAt) {
    const newState = { running: false }
    // If we have a specific stopAt time,
    // figure out the diff from now to
    // adjust the currenTime.
    // This is used by the voice recognition.
    if (stopAt) {
      const diff = Date.now() - stopAt
      newState.currentTime = state.currentTime - diff
    }
    return newState
  },

  lap (state, lapAt) {
    if (!state.running) return
    const laps = Array.from(state.laps)
    let lapTime = state.currentTime
    // If we have a specific lapAt time,
    // figure out the diff from now to
    // adjust the lap time.
    // This is used by the voice recognition.
    if (lapAt) {
      const diff = Date.now() - lapAt
      lapTime -= diff
    }
    laps.push(lapTime)
    return { laps }
  },

  reset (state, stopAt) {
    const history = Array.from(state.history)
    const entry = {
      time: state.currentTime,
      laps: Array.from(state.laps)
    }
    // If we have a specific stopAt time,
    // figure out the diff from now to
    // adjust the currentTime.
    // This is used by the voice recognition.
    if (stopAt) {
      const diff = Date.now() - stopAt
      entry.time -= diff
    }
    history.push(entry)
    return { history, laps: [], currentTime: 0, lastStart: null, lastLoop: null, running: false }
  }
})

if (typeof window !== 'undefined') { // localStorage is not available in pre-render
  // Keep state synced up with localStorage
  store.subscribe(state => { localStorage.setItem(key, JSON.stringify(state)) })

  // Keeps state in sync across multiple tabs
  window.addEventListener('storage', (event) => {
    if (event.key === key) {
      const state = JSON.parse(localStorage.getItem(key) || '{}')
      store.setState(state)
    }
  }, false)
}

export {
  store,
  actions
}
