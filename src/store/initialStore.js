import { observable, action } from 'mobx'

class InitialStore {
    @observable mainColor = '#fabee6'

    @action setMainColor(value) {
        this.mainColor = value
    }
}

export default new InitialStore()
