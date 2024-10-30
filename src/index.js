import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import './styles/NavbarStyle.css';
import './styles/aboutUsStyle.css'; 
import './styles/companyStyles.css'; 
import './styles/contactUsStyle.css'; 
import './styles/dots.css'; 
import './styles/footerStyles.css'; 
import './styles/heroStyle.css'; 
import './styles/serviceStyle.css'; 
import './styles/slider.css'; 
import './styles/whyUs.css';
import './styles/WhatsAppButton.css';  


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
