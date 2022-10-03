import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'

import App from './App'
import {UserProvider} from "./contexts/user.context";
import {CategoriesProvider} from "./contexts/categories.context";
import {CartProvider} from "./contexts/cart.context";
import {store} from './store/store'

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
< React.StrictMode >
    <Provider store={store}>
  < BrowserRouter >
    < UserProvider >
      < CategoriesProvider >
        < CartProvider >
          < App / >
        < /CartProvider>
      < /CategoriesProvider>
    < /UserProvider>
  < /BrowserRouter>
</Provider>
< /React.StrictMode>
)