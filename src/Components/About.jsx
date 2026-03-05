import "./About.css";

function About() {
  return (
    <div className="page">

      <h1>About Our Taxi Service</h1>

      <p>
        Our taxi service is designed to provide safe, reliable, and comfortable
        transportation for customers across the city. We focus on delivering
        quick pickups, professional drivers, and a smooth booking experience.
      </p>

      <p>
        With our platform, customers can easily book a ride, track their driver,
        and reach their destination without hassle. Our goal is to make daily
        commuting simple and convenient for everyone.
      </p>

      <p>
        We maintain a fleet of well-maintained vehicles and experienced drivers
        who prioritize customer safety and satisfaction. Whether it's a short
        trip across town or a longer journey, our service ensures a pleasant ride.
      </p>

      <p>
        Our mission is to provide affordable transportation with modern
        technology, making taxi booking faster, smarter, and more accessible
        for all users.
      </p>


      {/* Service Cards */}

      <div className="about-cards">

        <div className="card">
          <h3>Safe Travel</h3>
          <p>
            All our drivers are verified and trained to ensure passengers enjoy
            a safe and secure journey at all times.
          </p>
        </div>

        <div className="card">
          <h3>24/7 Availability</h3>
          <p>
            Our taxi services are available around the clock so customers can
            book rides anytime they need transportation.
          </p>
        </div>

        <div className="card">
          <h3>Affordable Pricing</h3>
          <p>
            We offer competitive and transparent pricing with no hidden charges
            so customers always know what they are paying for.
          </p>
        </div>

      </div>


      {/* Extra Section */}

      <div className="about-extra">

        <h2>Why Choose Our Service?</h2>

        <p>
          We focus on delivering excellent customer experience by combining
          modern technology with professional transportation services.
          Our platform helps passengers quickly find nearby drivers and
          reach their destinations without delays.
        </p>

        <p>
          Whether you need a ride for work, travel, or daily commuting,
          our taxi service ensures reliability, comfort, and convenience.
        </p>

      </div>

    </div>
  );
}

export default About;