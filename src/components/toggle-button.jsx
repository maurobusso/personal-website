import * as React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
//import React, { useState } from 'react'

export default function ToggleButton(props) {

    const { darkMode, toggleSwitch } = props

    return (
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked={darkMode} />} label={darkMode ? 'dark mode off' : 'dark mode on'} labelPlacement="start" onClick={toggleSwitch}/>
        </FormGroup>
    )
  }
