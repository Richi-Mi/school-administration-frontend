import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'

import './index.css'

import { redTheme } from './theme/red.js'
import { LoginScreen } from './auth/pages/LoginScreen.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    
    <ThemeProvider theme={ redTheme }>

      <LoginScreen />

    </ThemeProvider>
  
  </React.StrictMode>,
)