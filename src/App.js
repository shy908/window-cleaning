import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Home from "./routes/home"; 
import About from "./routes/about"; 
import Service from "./routes/service"; 
import Contact from "./routes/contact"; 
import WhatsAppButton from "./components/WhatsAppButton"; 

export default function App() { 
  return ( 
    <Router> 
      <div className="App"> 
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/service" element={<Service />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes> 
        <WhatsAppButton />
      </div> 
    </Router> 
  ); 
}
