import './Home.css';
import Init1Credit from '@shared/init1/Init1Credit';

import logo from '../../assets/brand/logo.jpg';
import heroImg from '../../assets/workers/worker_1.jpg';
import iceCream1 from '../../assets/ice_cream/ice_cream1.jpg';
import customer1 from '../../assets/customers/customer_1.jpg';
import customer5 from '../../assets/customers/customer_5.jpg';
import spoon1 from '../../assets/ice_cream_spoon/ice_cream_spoon_1.jpg';
import spoon3 from '../../assets/ice_cream_spoon/ice_cream_spoon_3.jpg';
import spoon4 from '../../assets/ice_cream_spoon/ice_cream_spoon_4.jpg';
import spoon6 from '../../assets/ice_cream_spoon/ice_cream_spoon_6.jpg';
import spoon7 from '../../assets/ice_cream_spoon/ice_cream_spoon_7.jpg';

const flavors = [
  { name: 'Strawberry', img: spoon4 },
  { name: 'Mint Chip', img: spoon3 },
  { name: 'Cookie Butter', img: spoon1 },
  { name: 'Birthday Cake', img: spoon7 },
  { name: 'Rainbow Sherbet', img: spoon6 },
];

const hours = [
  { days: 'Monday – Thursday', time: '11am – 9pm' },
  { days: 'Friday – Sunday', time: '11am – 10pm' },
];

export default function Home() {
  return (
    <div className="home">

      {/* Nav */}
      <nav className="nav">
        <img src={logo} alt="Poppy's Ice Cream" className="nav-logo" />
        <div className="nav-links">
          <a href="#flavors">Flavors</a>
          <a href="#hours">Hours</a>
          <a href="#find-us">Find Us</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">Long Beach Island's favorite scoop</p>
          <h1 className="hero-title">Scooped Fresh.<br />Served Happy.</h1>
          <p className="hero-sub">Come as you are. Leave smiling. It's that simple.</p>
          <a href="#flavors" className="btn btn--primary">See Our Flavors</a>
        </div>
      </section>

      {/* Wave break */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#22B5BE" />
        </svg>
      </div>

      {/* Flavors */}
      <section className="flavors-section" id="flavors">
        <div className="section-inner">
          <h2 className="section-title">What's Your Flavor?</h2>
          <p className="section-sub">Over 40 flavors to choose from. All made to make you smile.</p>
        </div>
        <div className="flavors-scroll">
          {flavors.map((f) => (
            <div className="flavor-card" key={f.name}>
              <div className="flavor-img-wrap">
                <img src={f.img} alt={f.name} className="flavor-img" />
              </div>
              <span className="flavor-name">{f.name}</span>
            </div>
          ))}
        </div>
        <div className="flavors-hint">scroll to explore →</div>
      </section>

      {/* Wave break into cream */}
      <div className="wave-divider wave-divider--flip">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="#22B5BE" />
        </svg>
      </div>

      {/* Vibe / About */}
      <section className="vibe-section">
        <div className="vibe-inner">
          <div className="vibe-photos">
            <img src={customer5} alt="Happy customers at Poppy's" className="vibe-photo vibe-photo--main" />
            <img src={iceCream1} alt="Ice cream at Poppy's" className="vibe-photo vibe-photo--accent" />
          </div>
          <div className="vibe-copy">
            <h2>A Little Spot with<br />a Big Heart</h2>
            <p>
              We're a family-owned shop right here on LBI — just steps from the Barnegat lighthouse.
              We've been scooping up happiness for families, couples, and everyone in between.
            </p>
            <p>
              No fancy stuff. Just really, really good ice cream and people who love making your day better.
            </p>
            <img src={customer1} alt="Couple enjoying ice cream" className="vibe-photo vibe-photo--inline" />
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="hours-section" id="hours">
        <div className="section-inner">
          <h2 className="section-title section-title--light">Hours</h2>
          <p className="section-sub section-sub--light">Open Memorial Day through Labor Day</p>
          <div className="hours-card">
            {hours.map((h) => (
              <div className="hours-row" key={h.days}>
                <span className="hours-days">{h.days}</span>
                <span className="hours-divider" />
                <span className="hours-time">{h.time}</span>
              </div>
            ))}
            <p className="hours-note">Hours may vary — follow us on social for updates!</p>
          </div>
        </div>
      </section>

      {/* Find Us */}
      <section className="findus-section" id="find-us">
        <div className="section-inner">
          <h2 className="section-title">Find Us</h2>
          <p className="section-sub">Right near the lighthouse. You can't miss us.</p>
          <div className="findus-card">
            <div className="findus-info">
              <div className="findus-detail">
                <span className="findus-icon">📍</span>
                <span>Barnegat Light, Long Beach Island, NJ</span>
              </div>
              <div className="findus-detail">
                <span className="findus-icon">🕐</span>
                <span>Open daily, 11am – 10pm</span>
              </div>
              <div className="findus-detail">
                <span className="findus-icon">🌊</span>
                <span>Steps from the Barnegat Lighthouse</span>
              </div>
            </div>
            <a
              className="btn btn--primary findus-cta"
              href="https://maps.google.com/?q=Poppy%27s+Ice+Cream+Barnegat+Light+NJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <img src={logo} alt="Poppy's Ice Cream" className="footer-logo" />
        <p>© {new Date().getFullYear()} Poppy's Ice Cream Parlor &nbsp;·&nbsp; Barnegat Light, NJ</p>
        <Init1Credit />
      </footer>

    </div>
  );
}
