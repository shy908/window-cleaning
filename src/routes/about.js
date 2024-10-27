import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import AboutImg from "../assets/domestic-clean.jpg";
import AboutUs from "../components/AboutUs";
import Footer from "../components/footer";
import { useEffect
    
 } from "react";
function About (){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About Us"
        e
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}

export default About;