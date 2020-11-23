import { createStore, combineReducers} from 'redux'
import componentReducer from './Component/Component.reducer'

const rootReducer = combineReducers({
  value: componentReducer
})

const store = createStore(rootReducer)

export default store