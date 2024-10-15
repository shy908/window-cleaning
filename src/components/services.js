import "./serviceStyle.css";
import ServiceData from "./serviceData";
import Service1 from "../assets/rope-access.jpg";
import Service2 from "../assets/com-cleaning.jpg";
import Service3 from "../assets/clean-them.jpg";
import Service4 from "../assets/mold.jpg";
import Service5 from "../assets/floor-cleaning.jpg"; 
import Service6 from "../assets/carpet-cleaning.jpg";

function OurServices() {
    return (
        <div className="services">
            <h1>Kwik-Wind-O-Kleen Services</h1>
            <div className="servicecard">
                <ServiceData
                    image={Service1}
                    heading="Rope Access Window Cleaning"
                    text="Our skilled rope access team handles challenging high-rise projects across Western Cape. We use a purified water-fed pole system or, when needed, traditional cleaning methods for buildings up to six stories, ensuring a safe and thorough clean every time."
                />
                <ServiceData
                    image={Service2}
                    heading="Commercial Window Cleaning"
                    text="Our team provides expert commercial window cleaning tailored for the needs of Western Cape’s busy urban landscape. With advanced water-fed poles and professional equipment, we tackle exterior glass for buildings up to six stories."
                />
                <ServiceData
                    image={Service3}
                    heading="Domestic Window Cleaning"
                    text="We bring the same level of care to homes as we do to commercial spaces, using a blend of traditional cleaning and advanced water-fed systems for both interior and exterior windows."
                />
                <ServiceData
                    image={Service4}
                    heading="Mold Removal"
                    text="Our mold removal services ensure a safe, clean home by addressing mold growth at its source. We carefully treat affected areas, reducing health risks and restoring indoor air quality for a healthy living environment."
                />
                <ServiceData
                    image={Service5}
                    heading="Floor Cleaning"
                    text="Our floor cleaning service utilizes advanced equipment and eco-friendly products to restore the shine and cleanliness of various floor types, including hardwood, tile, and vinyl. We ensure a thorough deep clean, enhancing the appearance and longevity of your floors."
                />
                <ServiceData
                    image={Service6}
                    heading="Carpet Cleaning"
                    text="Our carpet cleaning service combines powerful extraction techniques and safe, effective cleaning solutions to remove dirt, allergens, and stains. We ensure your carpets are fresh, clean, and revitalized, providing a healthier environment for your home or business."
                />
            </div>
        </div>
    );
}

export default OurServices;
