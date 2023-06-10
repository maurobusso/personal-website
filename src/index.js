import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Contacts from './components/Contacts'
import Skills from './components/Skills'
import Project from './components/Project'
import About from './components/About'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Navbar />
    <Main />
    <Contacts />
    <Skills />
    <Project />
    <About />
  </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
