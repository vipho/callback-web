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
        if (initialStore.isPhoneSent) {
            return (
                <div className="vipho-callback-window">
                    <p className="vipho-callback-window__heading">Запрос отправлен</p>
                </div>
            )
        }
        return (
            <div className="vipho-callback-window">
                <p className="vipho-callback-window__heading">Обратный Вызов</p>
                <input className="vipho-callback-window__input"
                       style={{borderColor: initialStore.mainColor}}
                       value={this.state.phone}
                       pattern="^\+[0-9\b]*$"
                       placeholder="Номер телефона"
                       onInput={this.onInput}
                       onKeyPress={this.handleKeyPress}
                />
                <button className="vipho-callback-window__button"
                        style={{borderColor: initialStore.mainColor}}
                        onClick={this.sendPhone}
                >
                    Запросить
                </button>
            </div>
        )
    }

    onInput = e => {
        let phone = e.target.value.match(/\d+/g) || [];
        phone = phone.join('');
        this.setState({phone: '+' + phone})
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.sendPhone()
        }
    }

    sendPhone = () => {
        if (this.state.phone.length < 2) {
            alert('Необходимо ввести номер телефона')
            return
        }
        initialStore.sendPhone(this.state.phone)
            .then((Response) => {
                if (!Response.ok) {
                    initialStore.isPhoneSent = true
                } else {
                    alert('Произошла ошибка при отправке')
                }
            })
            .catch(() => {
                alert('Произошла ошибка при отправке')
            })
    }
}
