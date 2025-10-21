import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

// Guard against duplicate customElements.define calls that throw
// Example error: "A custom element with name 'mce-autosize-textarea' has already been defined.".
// Some third-party bundles (e.g., editor widgets) may register webcomponents twice.
if (typeof window !== 'undefined' && (window as any).customElements) {
  const originalDefine = (window as any).customElements.define.bind((window as any).customElements)
  (window as any).customElements.define = (name: string, constructor: any, options?: any) => {
    try {
      if ((window as any).customElements.get(name)) {
        // already defined: noop to avoid DOMException
        // console.warn(`customElements: skipping duplicate definition for ${name}`)
        return
      }
      return originalDefine(name, constructor, options)
    } catch (err) {
      // If anything unexpected happens, still avoid breaking the app
      // console.error('customElements.define wrapper caught error', err)
      return
    }
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
