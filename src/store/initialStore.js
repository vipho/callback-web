import { observable, action } from 'mobx'

class InitialStore {
    @observable mainColor = '#fabee6'
    @observable isPhoneSent = false

    @action sendPhone(phone) {
        const formData = new FormData()
        formData.append('action', 'bazz_widget_action')
        formData.append('phone', phone)
        formData.append('name', '')
        return fetch('/wp-admin/admin-ajax.php', {
            method: 'POST', // или 'PUT'
            body: formData,
        })
    }
}

export default new InitialStore()
