import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import './i18n'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
registerServiceWorker()
