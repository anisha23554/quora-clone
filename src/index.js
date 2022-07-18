import React from 'react';
import ReactDOM from 'react-dom';
import 'redux'
import 'react-redux'
import App from './App';
import {ChakraProvider} from "@chakra-ui/react"
import {BrowserRouter} from "react-router-dom"
import store from "./store"
import {Provider} from "react-redux"

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}>
        <App/>
      </Provider>
    </ChakraProvider>
  </BrowserRouter>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);


