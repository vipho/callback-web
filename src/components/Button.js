import { h } from 'preact'
import { observer } from 'mobx-preact'
import initialStore from '../store/initialStore'

import './Button.scss'

export default observer(props => {
    return <button onClick={props.onClick} className="vipho-callback-button" style={{ backgroundColor: initialStore.mainColor }}/>
})