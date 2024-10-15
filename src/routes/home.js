import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import HomeImg from "../assets/com-cleaning.jpg"
import Company from "../components/company"
import OurServices from "../components/services"
import WhyUs from "../components/whyUs";
import Footer from "../components/footer";

function Home (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Profession Cleaning Services"
        text="We got you covered"
        buttonText="Get in Touch"
        url="/contact"
        btnClass="show"
        />
        <Company/>
        <OurServices/>
        <WhyUs/>
        <Footer/>
        </>
    )
}

export default Home;