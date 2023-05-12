import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { MainApp } from './09-useContext/MainApp'
import { BrowserRouter } from 'react-router-dom';
//import './08-useReducer/intro-reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
  // </React.StrictMode>,
)
