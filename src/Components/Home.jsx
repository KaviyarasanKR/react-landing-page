import "./Home.css"
import Footer from "../pages/Footer";

function Home() {
  return (
    <div>

      <section className="hero">

        <h1>Book Your Taxi in Minutes</h1>

        <p>
          Enjoy fast, reliable, and affordable taxi rides anytime in the city.
          Our professional drivers and comfortable vehicles ensure a safe and
          smooth travel experience for every passenger.
        </p>

        <button>Book a Ride</button>

      </section>


      <section className="features">

        <div className="feature">
          <h3>Quick Pickup</h3>
          <p>Get matched with a nearby driver and reach your destination faster.</p>
        </div>

        <div className="feature">
          <h3>Professional Drivers</h3>
          <p>Our trained drivers ensure safe and comfortable rides for customers.</p>
        </div>

        <div className="feature">
          <h3>Affordable Pricing</h3>
          <p>Transparent fares with no hidden charges for every trip.</p>
        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Home;