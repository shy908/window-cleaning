import React, { useEffect, useRef, useState } from "react";

function WhyUs() {
  const sectionRef = useRef(null);
  const nextSectionRef = useRef(null); // Reference to the footer section
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scroll = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        ref={sectionRef}
        className={`whyus-section ${isVisible ? "visible" : ""}`}
      >
        <div className="whyus-content">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>We are dedicated to excellence in all we do, working to earn and maintain the trust of our clients.</li>
            <li>A large portion of our work is based on repeat customers and referrals from happy clients.</li>
            <li>We operate throughout the Western Cape, including Cape Town, Stellenbosch, Somerset West, Paarl, Worcester, and surrounding areas.</li>
            <li>If you're interested in our services, <a href="/contact">CONTACT US NOW</a> to schedule a complimentary site assessment with one of our skilled team members.</li>
          </ul>
          <div className="whyus-icon" onClick={scroll} style={{ cursor: "pointer" }}>
            <span>&#8595;</span>
          </div>
        </div>
      </div>
      {/* Footer reference */}
      <div ref={nextSectionRef} style={{ marginTop: '1rem' }}></div>
    </>
  );
}

export default WhyUs;
