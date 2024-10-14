import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import ServiceImg from "../assets/clean.jpg";
import OurServices from "../components/services";
import Footer from "../components/footer";

function Service() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={ServiceImg}
                title="Our Service"
                btnClass="hide"
            />
            <OurServices />

            <div className="service-locations">
                <h2>We Provide Complete Cleaning Solutions For:</h2>
                <ul>
                    <li>Private Residences / Townhouses / Apartments</li>
                    <li>Schools / Colleges</li>
                    <li>Care Homes</li>
                    <li>Leisure Centres</li>
                    <li>Offices / Office Blocks</li>
                    <li>Shops / Shopping Centres</li>
                    <li>Hotels / Restaurants</li>
                    <li>Stadiums / Complexes</li>
                    <li>Managed Apartment Blocks</li>
                    <li>Car Showrooms</li>
                </ul>
            </div>

            <div className="service-description">
                <h2>About Our Services</h2>
                <p>
                    Our expertise in professional cleaning allows us to carefully evaluate each project, addressing requirements, logistics, and safety measures to deliver a service that stands above the rest.
                </p>
                <p>
                    At Kwik-Wind-O-Kleen, we offer a full range of window cleaning and property care solutions, tailored to the unique needs of each building and client. From cozy townhouses to expansive corporate campuses, we provide comprehensive cleaning for all types of properties.
                </p>
                <p>
                    Our reach spans across the Western Cape, handling everything from charming residential homes in the suburbs to bustling offices and hotels throughout Cape Town. With an emphasis on precision and a commitment to excellence, we’re here to tackle any cleaning challenge.
                </p>
                <p>
                    For specialized service and a free assessment, contact Kwik-Wind-O-Kleen today:
                </p>
                <p>
                    <strong>Email:</strong> kwikwindokleen@gmail.com <br />
                    <strong>Cell & WhatsApp:</strong> 065 122 3324 / 083 749 2163
                </p>
            </div>
            <Footer/>
        </>
    );
}

export default Service;
