import "./contactUsStyle.css";

function ContactUs() {
    return (
        <div className="contactus-container">
            <p>
                Welcome to Kwik-Wind-O-Kleen! We are dedicated to providing exceptional cleaning services across the Western Cape, specializing in window cleaning, mold removal, carpet care, and floor maintenance. With our professional expertise, we ensure spotless and well-maintained spaces that enhance the beauty and cleanliness of your environment. From residential homes to commercial properties, we cater to a variety of cleaning needs throughout Cape Town and surrounding areas. Trust us to deliver clarity and freshness to your surroundings—contact us today!
            </p>

            <div className="contact-details">
                <h2>Contact Information</h2>
                <p><strong>Phone:</strong></p>
                <p>
                    <a href="tel:0651223324">065 122 3324</a> | 
                    <a href="tel:0837492163"> 083 749 1163</a>
                </p>
                <p><strong>Email:</strong> <a href="mailto:kwikwindokleen@gmail.com">kwikwindokleen@gmail.com</a></p>

                <div className="socials">
                    <h3>Follow Us</h3>
                    <a href="https://www.facebook.com/profile.php?id=61567570160885" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="https://wa.me/083 749 1163" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="https://wa.me/0651223324" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-whatsapp-square"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;