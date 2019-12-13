import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'

/* ReactDOM.render(<App />, document.getElementById('root')) */

// Enable concurrent mode
ReactDOM.createRoot(document.querySelector('#root') as Element).render(<App />)
