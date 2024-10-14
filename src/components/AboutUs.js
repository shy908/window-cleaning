import "./aboutUsStyle.css";

function AboutUs() {
    return (
        <div className="aboutus-container">
            <h1>About Kwik-Wind-O-Kleen</h1>
            <p>With a commitment to precision and client satisfaction, Kwik-Wind-O-Kleen has been a trusted provider of professional cleaning services throughout the Western Cape. From residential properties to high-rise commercial buildings, our experienced team is equipped to tackle any cleaning challenge.</p>
            
            <h2>Our Mission</h2>
            <p>Our mission is simple: to ensure every client experiences a pristine, safe environment. We aim to deliver exceptional, detail-oriented cleaning services that promote health and wellness through cleanliness.</p>

            <h2>Why Choose Us?</h2>
            <ul className="aboutus-values">
                <li><strong>Professional Expertise:</strong> Our team is highly trained and follows industry best practices to ensure top-quality service.</li>
                <li><strong>Customer-First Approach:</strong> We prioritize client satisfaction, tailoring our services to meet unique needs.</li>
                <li><strong>Reliable and Safe:</strong> Using eco-friendly products and state-of-the-art equipment, we deliver reliable, safe cleaning solutions.</li>
            </ul>
        </div>
    );
}

export default AboutUs;
