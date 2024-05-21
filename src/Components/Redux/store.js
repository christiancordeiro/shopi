import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import rootReducer from "./root-reducer"
import {persistCart} from "./cart/cart.selector"

const store = createStore(rootReducer, applyMiddleware(logger, persistCart))

export default store
