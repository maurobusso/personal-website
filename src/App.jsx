import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Contacts from './components/Contacts'
import Skills from './components/Skills'
import Project from './components/Project'
import About from './components/About'

export default function App() {

    const [darkMode, setDarkMode] = React.useState(false)

    function toggleSwitch() {
      setDarkMode(prevMode => !prevMode)
      }

    return (
      <>
        <Navbar 
          darkMode={darkMode} 
          toggleSwitch={toggleSwitch}
        />
        <Main darkMode={darkMode} />
        <Contacts darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Project darkMode={darkMode} />
        <About darkMode={darkMode} />
      </>
    )
}