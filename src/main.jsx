import { createRoot } from 'react-dom/client'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css'

gsap.registerPlugin(ScrollTrigger);
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
