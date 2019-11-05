import { h, Fragment, Component } from 'preact'

import Button from './Button'
import Window from './Window'

class App extends Component {
    render() {
        return (
            <>
                <Button/>
                <Window/>
            </>
        )
    }
}

export default App
