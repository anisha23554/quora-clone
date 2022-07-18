import {configureStore} from '@reduxjs/toolkit'
import {composeWithDevTools} from 'redux-devtools-extension'
import root from './reducers/root'

const store = configureStore({
    reducer:root,
    composeWithDevTools
})

export default store