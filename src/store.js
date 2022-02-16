import 'redux'
import 'react-redux'

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combinedReducer from './reducers/combinedReducer';

const initialState = {}
const store = createStore(combinedReducer,initialState,composeWithDevTools())

export default store
