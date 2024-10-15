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
                    At Kwik-Wind-O-Kleen, we specialize in a comprehensive range of cleaning solutions tailored to your needs. Our team is equipped to handle everything from window cleaning and mold removal to deep carpet and floor care.
                </p>
                <p>
                    Our window cleaning services ensure crystal-clear views while protecting your glass surfaces. We also provide effective mold removal solutions to keep your spaces healthy and safe.
                </p>
                <p>
                    Whether it's residential carpets that need revitalizing or commercial flooring that requires professional maintenance, our expertise covers all aspects of property care, ensuring every surface looks its best.
                </p>
                <p>
                    Serving the Western Cape, we are committed to delivering exceptional cleaning services for all types of properties, from cozy homes to bustling offices. Trust us to tackle your cleaning challenges with precision and care.
                </p>
                <p>
                    For specialized service and a free assessment, contact Kwik-Wind-O-Kleen today:
                </p>
                <p>
                    <strong>Email:</strong> kwikwindokleen@gmail.com <br />
                    <strong>Cell & WhatsApp:</strong> 065 122 3324 / 083 749 1163
                </p>
            </div>
            <Footer />
        </>
    );
}

export default Service;