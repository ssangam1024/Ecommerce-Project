import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router';
// importing index.css to apply default browser styles and global styles to the app. 
import './index.css' 
// importing app Component to render it to the DOM element 
import App from './App.tsx'

// we  use createRoot to render the app to the DOM element(<div id="root"></div>). We pass the root element as an argument to createRoot and then call the render method on the returned root object, passing our app component as an argument.
// in simple we are using createRoot so we tell react to take control of the DOM element(<div id="root"></div>) that can render app inside it.
createRoot(document.getElementById('root')!).render(
  // We import StrictMode and wrap the app with it so React can perform extra development checks and show warnings in the browser console.
  <StrictMode>
    {/* BrowserRouter helps with routing, and we can navigate between pages without reloading the entire page — React only updates the necessary components. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </StrictMode>,
)
