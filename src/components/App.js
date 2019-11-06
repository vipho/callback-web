import { h, Fragment, Component } from 'preact'

import Button from './Button'
import Window from './Window'

class App extends Component {
    state = {
        isWindowOpen: false,
    }

    render() {
        return (
            <>
                <Button onClick={this.handleClick}/>
                { this.state.isWindowOpen ? <Window/> : null }
            </>
        )
    }

    handleClick = () => {
        this.setState({ isWindowOpen: !this.state.isWindowOpen })
        console.log(123)
    }
}

export default App
