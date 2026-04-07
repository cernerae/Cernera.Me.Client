import './Home.css';
import Init1Credit from '@shared/init1/Init1Credit';

export default function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Example Business</h1>
        <p className="tagline">Your tagline goes here</p>
        <a className="cta-button" href="tel:5550000000">
          Call Us — (555) 000-0000
        </a>
      </header>

      <section className="home-section">
        <h2>About Us</h2>
        <p>Tell your story here. What makes this business great?</p>
      </section>

      <section className="home-section home-section--alt">
        <h2>Our Services</h2>
        <ul className="services-list">
          <li>Service One</li>
          <li>Service Two</li>
          <li>Service Three</li>
        </ul>
      </section>

      <section className="home-section" id="contact">
        <h2>Contact</h2>
        <p>123 Main St, Anytown, USA</p>
        <p><a href="tel:5550000000">(555) 000-0000</a></p>
        <p><a href="mailto:hello@example.com">hello@example.com</a></p>
      </section>

      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} Example Business</p>
        <Init1Credit />
      </footer>
    </div>
  );
}
