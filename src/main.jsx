import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CookieConsentProvider } from './context/CookieConsentContext'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <CookieConsentProvider>
          <App />
        </CookieConsentProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)