import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

const root = document.getElementById('root')!
const app = (
  <React.StrictMode>
    <App path={location.pathname} />
  </React.StrictMode>
)

// dist/index.html is prerendered (scripts/prerender.mjs); `yarn dev` serves an empty root.
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, app)
else ReactDOM.createRoot(root).render(app)
