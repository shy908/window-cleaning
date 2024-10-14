import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import ContactImg from "../assets/contact-us.jpg"
import ContactUs from "../components/contactUs";
import Footer from "../components/footer";

function Contact (){
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