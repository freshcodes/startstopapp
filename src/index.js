import { h } from 'preact'
import './style'
import App from './components/app'
import { Provider } from 'unistore/preact'
import { store } from './store'

export default () => {
  return (<Provider store={store}><App /></Provider>)
}
