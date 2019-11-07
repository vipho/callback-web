import { observable, action } from 'mobx'

class InitialStore {
    @observable mainColor = '#fabee6'
    @observable isPhoneSent = false

    @action sendPhone(phone) {
        if (!window.bazz_ajax) {
            window.bazz_ajax = { url: '' }
        }
        const formData = new FormData()
        formData.append('action', 'bazz_widget_action')
        formData.append('phone', phone)
        formData.append('name', '')
        return fetch(window.bazz_ajax.url, {
            method: 'POST', // или 'PUT'
            body: formData,
        })
    }
}

export default new InitialStore()
