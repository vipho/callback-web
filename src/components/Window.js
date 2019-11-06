import {Component, h} from 'preact'
import {observer} from "mobx-preact"
import initialStore from '../store/initialStore'
import './Window.scss'

@observer
export default class Window extends Component {
    state = {
        phone: '+'
    }

    render() {
        return (
            <div className="vipho-callback-window">
                <p className="vipho-callback-window__heading">Обратный Вызов</p>
                <input className="vipho-callback-window__input"
                       style={{borderColor: initialStore.mainColor}}
                       value={this.state.phone}
                       onInput={this.onInput}
                       pattern="^\+[0-9\b]*$"
                       placeholder="Номер телефона"
                />
                <button className="vipho-callback-window__button"
                        style={{borderColor: initialStore.mainColor}}
                >
                    Запросить
                </button>
            </div>
        )
    }

    onInput = (e) => {
        const re = /^\+[0-9\b]*$/;
        this.setState({phone: re.test(e.target.value) ? e.target.value : this.state.phone})
    }
}
