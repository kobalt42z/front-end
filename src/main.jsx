import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalProvider from './contexts/context'
import './index.css'
import Browser from './routes/browser'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
)
