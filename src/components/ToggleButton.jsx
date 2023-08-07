import * as React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
//import React, { useState } from 'react'

export default function ToggleButton(props) {

    const { darkMode, toggleSwitch } = props

    return (
        <FormGroup>
          <div className='flex items-center'>
            <p className='pr-6'>Light</p>
            <FormControlLabel control={<Switch defaultChecked={darkMode} />} onClick={toggleSwitch}/>
            <p className=''>Dark</p>
          </div>
        </FormGroup>
    )
  }

  //to make lable change label={darkMode ? 'Dark Mode off' : 'Dark Mode on'}