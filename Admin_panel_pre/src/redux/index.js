import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./Reducer";
import rootSaga from "./Saga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = configureStore({ reducer: reducers, middleware: middleware });

sagaMiddleware.run(rootSaga);

export default store;
