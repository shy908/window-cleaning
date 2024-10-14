import "./footerStyles.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <h1>Kwik-Wind-O-Kleen</h1>
                <p>Get in touch with Us</p>
            </div>
            <div className="footer-socials">
                <a href="https://www.facebook.com/profile.php?id=100091976320949" aria-label="Facebook">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="https://wa.me/083 749 2163" aria-label="Instagram">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="https://wa.me/0651223324" aria-label="WhatsApp">
                    <i className="fa-brands fa-whatsapp-square"></i>
                </a>
                <a href="mailto:kwikwindokleen@gmail.com" aria-label="Email">
                    <i className="fa-solid fa-envelope-square"></i>
                </a>
            </div>
            <div className="footer-bottom">
                <h2>Our services are available in the following areas in Western Cape</h2>
                <p>
                    <strong>CAPE TOWN:</strong> City Bowl, Gardens, Green Point, Sea Point, Camps Bay, Clifton, 
                    Hout Bay, Constantia, Bishopscourt, Newlands, Rondebosch, Claremont, Wynberg, Kenilworth, 
                    Plumstead, Tokai, Muizenberg, Fish Hoek, Simon's Town, Noordhoek, Observatory, Woodstock, 
                    Salt River, Milnerton, Table View, Blouberg, Durbanville, Bellville, Parow, Goodwood, 
                    Brackenfell, Kraaifontein, Strand, Somerset West, Gordons Bay, Stellenbosch, Paarl, Wellington
                </p>
                <p>
                    Copyright © {new Date().getFullYear()} Kwik-Wind-O-Kleen
                </p>
            </div>
        </footer>
    );
}

export default Footer;
