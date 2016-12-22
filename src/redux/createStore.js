import { createStore, applyMiddleware, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  form: formReducer
})

export default (initialState = {}) => {
  const middlewares = [thunk]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )

  return store
}
