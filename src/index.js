import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Enable temporary visual debug mode to reveal content behind dark backgrounds
if (typeof document !== 'undefined') {
  document.body.classList.add('debug-visual');
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Remove the static debug overlay added to index.html when JS runs successfully
if (typeof document !== 'undefined') {
  const debugOverlay = document.getElementById('debug-overlay');
  if (debugOverlay) debugOverlay.remove();
}