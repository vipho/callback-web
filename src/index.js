import { h, render } from 'preact'
import { Provider } from 'mobx-preact'
import App from './components/App.js'
import initialStore from './store/initialStore'

import './index.scss'

initialStore.mainColor = 'green'
const el = document.createElement('div')
el.className = 'vipho-callback';
document.body.appendChild(el)

render(<App />, el)
