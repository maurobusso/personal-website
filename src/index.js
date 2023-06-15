import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Contacts from './components/Contacts'
import Skills from './components/Skills'
import Project from './components/Project'
import About from './components/About'

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


