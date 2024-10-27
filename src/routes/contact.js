import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import ContactImg from "../assets/contact-us.jpg"
import ContactUs from "../components/contactUs";
import Footer from "../components/footer";
import { useEffect } from "react";

function Contact (){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
               <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact Us"
        e
        btnClass="hide"
        />
        <ContactUs/>
        <Footer/>
        </>
    )
}

export default Contact;