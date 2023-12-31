import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// In your main.js or main.ts file

// Import styles
import '/src/assets/vendor/aos/aos.css';
import '/src/assets/vendor/bootstrap/css/bootstrap.min.css';
import '/src/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '/src/assets/vendor/boxicons/css/boxicons.min.css';
import '/src/assets/vendor/glightbox/css/glightbox.min.css';
import '/src/assets/vendor/swiper/swiper-bundle.min.css';

// Import scripts
import AOS from 'aos';
import 'bootstrap';
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import Swiper from 'swiper';

// Initialize scripts as needed
AOS.init();
GLightbox();
// Initialize other scripts as needed

// Your Vite application code here

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
