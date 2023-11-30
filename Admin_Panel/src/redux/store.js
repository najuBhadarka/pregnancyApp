import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import reducers from './Reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { injectStore } from 'src/utils/api'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = composeWithDevTools

const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
injectStore(store)

export default store
