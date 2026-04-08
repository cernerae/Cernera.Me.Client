import { useState, useRef, useEffect } from 'react';
import './Home.css';
import Init1Credit from '@shared/init1/Init1Credit';
import OceanPanel from './OceanPanel';

import logo from '../../assets/brand/logo.svg';
import logoNoBg from '../../assets/brand/logo_nobackground.svg';
import iceCream1 from '../../assets/ice_cream/ice_cream1.jpg';
import iceCream2 from '../../assets/ice_cream/ice_cream2.jpg';
import customer1 from '../../assets/customers/customer_1.jpg';
import customer5 from '../../assets/customers/customer_5.jpg';
import building3 from '../../assets/building/building3.jpg';
import worker1 from '../../assets/workers/worker_1.jpg';
import worker2 from '../../assets/workers/worker_2.jpg';
import worker3 from '../../assets/workers/worker_3.jpg';
import worker4 from '../../assets/workers/worker_4.jpg';
import worker5 from '../../assets/workers/worker_5.jpg';
import worker6 from '../../assets/workers/worker_6.jpg';
import worker7 from '../../assets/workers/worker_7.jpg';
import spoon1 from '../../assets/ice_cream_spoon/ice_cream_spoon_1.jpg';
import spoon2 from '../../assets/ice_cream_spoon/ice_cream_spoon_2.jpg';
import spoon3 from '../../assets/ice_cream_spoon/ice_cream_spoon_3.jpg';
import spoon4 from '../../assets/ice_cream_spoon/ice_cream_spoon_4.jpg';
import spoon5 from '../../assets/ice_cream_spoon/ice_cream_spoon_5.jpg';
import spoon6 from '../../assets/ice_cream_spoon/ice_cream_spoon_6.jpg';
import spoon7 from '../../assets/ice_cream_spoon/ice_cream_spoon_7.jpg';

const flavors = [
  { name: 'Strawberry', img: spoon4 },
  { name: "S'mores", img: spoon2 },
  { name: 'Mint Chip', img: spoon3 },
  { name: 'Cookie Dough', img: spoon5 },
  { name: 'Cookie Butter', img: spoon1 },
  { name: 'Birthday Cake', img: spoon7 },
  { name: 'Rainbow Sherbet', img: spoon6 },
];

const hours = [
  { days: 'Monday – Thursday', time: '11am – 9pm' },
  { days: 'Friday – Sunday', time: '11am – 10pm' },
];

const emptyForm = { name: '', email: '', message: '' };

export default function Home() {
  const [demoToast, setDemoToast] = useState<string | null>(null);
  const [contactDemoMsg, setContactDemoMsg] = useState(false);
  const [contactForm, setContactForm] = useState(emptyForm);
  const flavorsScrollRef = useRef<HTMLDivElement>(null);
  const [flavorsOverflows, setFlavorsOverflows] = useState(false);

  useEffect(() => {
    const el = flavorsScrollRef.current;
    if (!el) return;
    const check = () => setFlavorsOverflows(el.scrollWidth > el.clientWidth);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  function scrollFlavors(dir: 'left' | 'right') {
    flavorsScrollRef.current?.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' });
  }

  function showDemo(msg: string) {
    setDemoToast(msg);
    setTimeout(() => setDemoToast(null), 3000);
  }

  return (
    <div className="home">

      {/* Preview badge */}
      <a className="preview-badge" href="https://poppysicecream.square.site/" target="_blank" rel="noopener noreferrer">
        <i className="fa-solid fa-eye" />
        <span>
          <span className="preview-badge-title">Design Preview</span>
          <span className="preview-badge-sub">view current site</span>
        </span>
      </a>

      {/* Nav */}
      <nav className="nav">
        <img src={logoNoBg} alt="Poppy's Ice Cream" className="nav-logo" />
        <div className="nav-links">
          <a href="#flavors">Flavors</a>
          <a href="#hours">Hours</a>
          <a href="#find-us">Find Us</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        {/* Mobile-only logo, hidden on desktop, snaps to top on small screens */}
        <div className="hero-logo-mobile-wrap">
          <div className="hero-mobile-disc">
            <img src={logoNoBg} alt="Poppy's Ice Cream" className="hero-mobile-logo" />
          </div>
        </div>

        <div className="hero-text">
          <p className="hero-eyebrow">Long Beach Island's favorite scoop</p>
          <h1 className="hero-title">LBI's Sweetest<br />Tradition.</h1>
          <p className="hero-sub">Come as you are. Leave smiling. It's that simple.</p>
          <div className="hero-btns">
            <a href="#flavors" className="btn btn--primary"><i className="fa-solid fa-ice-cream" /> See Flavors</a>
            <a href="#hours" className="btn btn--secondary"><i className="fa-solid fa-clock" /> Hours & Location</a>
          </div>
        </div>
        <OceanPanel />
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
        <div className="flavors-scroll-wrap">
          {flavorsOverflows && (
            <button className="flavors-arrow flavors-arrow--left" onClick={() => scrollFlavors('left')} aria-label="Scroll left">
              <i className="fa-solid fa-chevron-left" />
            </button>
          )}
          <div className={`flavors-scroll${flavorsOverflows ? '' : ' flavors-scroll--centered'}`} ref={flavorsScrollRef}>
            {flavors.map((f) => (
              <div className="flavor-card" key={f.name}>
                <div className="flavor-img-wrap">
                  <img src={f.img} alt={f.name} className="flavor-img" />
                </div>
                <span className="flavor-name">{f.name}</span>
              </div>
            ))}
            <div className="flavor-card" onClick={() => showDemo('This page is a demo. Full flavors menu coming soon!')}>
              <div className="flavor-img-wrap flavor-img-wrap--cta">
                <span className="flavor-cta-text">See All<br />Flavors</span>
              </div>
              <span className="flavor-name">&nbsp;</span>
            </div>
          </div>
          {flavorsOverflows && (
            <button className="flavors-arrow flavors-arrow--right" onClick={() => scrollFlavors('right')} aria-label="Scroll right">
              <i className="fa-solid fa-chevron-right" />
            </button>
          )}
        </div>
        <div className="flavors-mobile-cta">
          <button
            className="btn btn--secondary flavors-mobile-btn"
            onClick={() => showDemo('This page is a demo. Full flavors menu coming soon!')}
          >
            <i className="fa-solid fa-ice-cream" /> See Full Menu
          </button>
        </div>
        {demoToast && <div className="demo-toast">{demoToast}</div>}
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
          <img src={worker3} alt="Poppy's team member enjoying ice cream" className="vibe-photo vibe-photo--portrait" />
          <div className="vibe-stack">
            <img src={worker1} alt="Poppy's team member" className="vibe-stack-photo" />
            <img src={iceCream1} alt="Ice cream at Poppy's" className="vibe-stack-photo" />
          </div>
          <img src={customer1} alt="Couple enjoying ice cream" className="vibe-photo vibe-photo--below" />
          <div className="vibe-copy">
            <h2>A Little Spot with<br />a Big Heart</h2>
            <p>
              We're a family-owned shop right here on LBI, just steps from the Barnegat lighthouse.
              We've been scooping up happiness for families, couples, and everyone in between.
            </p>
            <p>
              No fancy stuff. Just really, really good ice cream and people who love making your day better.
            </p>
            <img src={customer5} alt="Happy customers at Poppy's" className="vibe-photo vibe-photo--landscape" />
          </div>
        </div>
      </section>

      {/* Wave into hours */}
      <div className="wave-divider wave-divider--sand">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#22B5BE" />
        </svg>
      </div>

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
            <p className="hours-note">Hours may vary. Follow us on social for updates!</p>
          </div>
        </div>
      </section>

      {/* Wave out of hours */}
      <div className="wave-divider wave-divider--flip wave-divider--sand">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="#22B5BE" />
        </svg>
      </div>

      {/* Find Us */}
      <section className="findus-section" id="find-us">
        <div className="findus-inner">
          <div className="findus-text">
            <h2 className="section-title">Find Us</h2>
            <p className="section-sub">Right near the lighthouse. You can't miss us.</p>
            <div className="findus-card">
              <div className="findus-info">
                <div className="findus-detail">
                  <i className="fa-solid fa-location-dot findus-icon" />
                  <span>607 Broadway, Barnegat Light, NJ 08006</span>
                </div>
                <div className="findus-detail">
                  <i className="fa-solid fa-phone findus-icon" />
                  <a href="tel:6093612663" className="findus-link">609-361-2663</a>
                </div>
                <div className="findus-detail">
                  <i className="fa-solid fa-clock findus-icon" />
                  <span>Mon–Thu 11am–9pm &nbsp;·&nbsp; Fri–Sun 11am–10pm</span>
                </div>
                <div className="findus-detail">
                  <i className="fa-solid fa-water findus-icon" />
                  <span>Steps from the Barnegat Lighthouse</span>
                </div>
                <div className="findus-social">
                  <a
                    href="https://www.facebook.com/PoppysIceCreamParlour"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="findus-social-link"
                    aria-label="Facebook"
                  >
                    <i className="fa-brands fa-facebook" />
                  </a>
                  <a
                    href="https://www.instagram.com/poppys.icecream/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="findus-social-link"
                    aria-label="Instagram"
                  >
                    <i className="fa-brands fa-instagram" />
                  </a>
                </div>
              </div>
              <a
                className="btn btn--primary findus-cta"
                href="https://maps.google.com/?q=607+Broadway+Barnegat+Light+NJ+08006"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </div>
          </div>
          <img src={building3} alt="Poppy's Ice Cream Parlor exterior" className="findus-photo" />
        </div>
      </section>

      {/* Wave into contact */}
      <div className="wave-divider wave-divider--sand">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#22B5BE" />
        </svg>
      </div>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <div className="section-inner">
          <h2 className="section-title section-title--light">Say Hello</h2>
          <p className="section-sub section-sub--light">Have a question or just want to chat? We'd love to hear from you.</p>
          <form className="contact-form">
            <div className="contact-row">
              <div className="contact-field">
                <label htmlFor="contact-name" className="contact-label">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  className="contact-input"
                  placeholder="Jane Smith"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-email" className="contact-label">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  className="contact-input"
                  placeholder="jane@example.com"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                />
              </div>
            </div>
            <div className="contact-field">
              <label htmlFor="contact-message" className="contact-label">Message</label>
              <textarea
                id="contact-message"
                className="contact-input contact-textarea"
                placeholder="What's on your mind?"
                rows={5}
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              />
            </div>
            <div className="contact-submit-row">
              <button
                type="button"
                className="btn btn--primary contact-submit"
                onClick={() => { setContactDemoMsg(true); setContactForm(emptyForm); }}
              >
                <i className="fa-solid fa-paper-plane" /> Send Message
              </button>
              {contactDemoMsg && (
                <p className="contact-demo-msg">This is a demo site. The form isn't live yet!</p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Wave out of contact */}
      <div className="wave-divider wave-divider--contact-out">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FFFEF5" />
        </svg>
      </div>

      {/* Jobs */}
      <section className="jobs-section">
        <div className="jobs-inner">
          <div className="jobs-copy">
            <h2>Want to Work Here?</h2>
            <p>Spend your summer on LBI doing what everyone else is doing on vacation. We're always looking for good people to join the team at Poppy's.</p>
            <p>No experience needed. Just show up ready to have a good time and make people's day a little sweeter.</p>
            <button
              className="btn btn--primary"
              onClick={() => showDemo('Applications aren\'t set up yet. This is a demo!')}
            >
              Apply Now
            </button>
          </div>
          <div className="jobs-photos">
            <img src={worker7} alt="Poppy's team" className="jobs-photo jobs-photo--wide" />
            <img src={worker4} alt="Poppy's team member" className="jobs-photo" />
            <img src={worker5} alt="Poppy's team member" className="jobs-photo" />
            <img src={worker6} alt="Poppy's team member" className="jobs-photo" />
            <img src={worker2} alt="Poppy's team member" className="jobs-photo" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-inner">

          {/* Brand column */}
          <div className="footer-col footer-col--brand">
            <img src={logoNoBg} alt="Poppy's Ice Cream" className="footer-logo" />
            <p className="footer-tagline">Scooped fresh. Served happy.<br />Right here on LBI.</p>
            <div className="footer-social">
              <a href="https://www.facebook.com/PoppysIceCreamParlour" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
                <i className="fa-brands fa-facebook" />
              </a>
              <a href="https://www.instagram.com/poppys.icecream/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#flavors">Flavors</a></li>
              <li><a href="#hours">Hours</a></li>
              <li><a href="#find-us">Find Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div className="footer-col">
            <h4 className="footer-heading">Hours</h4>
            <ul className="footer-links footer-links--plain">
              <li>Mon – Thu &nbsp; 11am – 9pm</li>
              <li>Fri – Sun &nbsp; 11am – 10pm</li>
              <li className="footer-note">Open Memorial Day – Labor Day</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Visit Us</h4>
            <ul className="footer-links footer-links--plain">
              <li>607 Broadway</li>
              <li>Barnegat Light, NJ 08006</li>
              <li><a href="tel:6093612663">609-361-2663</a></li>
              <li>
                <a href="https://maps.google.com/?q=607+Broadway+Barnegat+Light+NJ+08006" target="_blank" rel="noopener noreferrer">
                  Get Directions <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '0.7em' }} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Poppy's Ice Cream Parlor &nbsp;·&nbsp; Barnegat Light, NJ</p>
          <Init1Credit />
        </div>
      </footer>

    </div>
  );
}
