import {createStore} from 'redux'
import counterReducer from './counter_reducer'

const store = createStore(counterReducer)

export default store