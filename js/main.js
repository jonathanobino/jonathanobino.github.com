import React from 'react'
import { render } from 'react-dom'
import Home from './pages/home'
import Menu from './pages/navigator'

render(<Home/>,document.getElementById('app'))
// render(<Menu><Home/></Menu>,document.getElementById('app'))

