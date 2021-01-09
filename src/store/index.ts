import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from "redux-thunk";
import weather from './weather/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  weather
})

const middleware = [thunk]

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));