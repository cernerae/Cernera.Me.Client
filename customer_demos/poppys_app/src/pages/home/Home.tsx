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

export default function Home() {
  const [demoToast, setDemoToast] = useState<string | null>(null);
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
      <section className="hero">
        {/* Mobile-only logo — hidden on desktop, snaps to top on small screens */}
        <div className="hero-logo-mobile-wrap">
          <div className="hero-mobile-disc">
            <img src={logoNoBg} alt="Poppy's Ice Cream" className="hero-mobile-logo" />
          </div>
        </div>

        <div className="hero-text">
          <p className="hero-eyebrow">Long Beach Island's favorite scoop</p>
          <h1 className="hero-title">Scooped Fresh.<br />Served Happy.</h1>
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
            <div className="flavor-card" onClick={() => showDemo('This page is a demo — full flavors menu coming soon!')}>
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
            onClick={() => showDemo('This page is a demo — full flavors menu coming soon!')}
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
              We're a family-owned shop right here on LBI — just steps from the Barnegat lighthouse.
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
            <p className="hours-note">Hours may vary — follow us on social for updates!</p>
          </div>
        </div>
      </section>

      {/* Wave out of hours */}
      <div className="wave-divider wave-divider--flip wave-divider--cream">
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
                  <span>Barnegat Light, Long Beach Island, NJ</span>
                </div>
                <div className="findus-detail">
                  <i className="fa-solid fa-clock findus-icon" />
                  <span>Open daily, 11am – 10pm</span>
                </div>
                <div className="findus-detail">
                  <i className="fa-solid fa-water findus-icon" />
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
          <img src={building3} alt="Poppy's Ice Cream Parlor exterior" className="findus-photo" />
        </div>
      </section>

      {/* Jobs */}
      <section className="jobs-section">
        <div className="jobs-inner">
          <div className="jobs-copy">
            <h2>Want to Work Here?</h2>
            <p>Spend your summer on LBI doing something you'll actually love. We're always looking for friendly, hardworking people to join the team.</p>
            <p>No experience needed — just a good attitude and a love of ice cream.</p>
            <button
              className="btn btn--primary"
              onClick={() => showDemo('Applications aren\'t set up yet — this is a demo!')}
            >
              Apply Now
            </button>
          </div>
          <div className="jobs-photos">
            <img src={worker7} alt="Poppy's team" className="jobs-photo jobs-photo--wide" />
            <img src={worker4} alt="Poppy's team member" className="jobs-photo" />
            <img src={worker5} alt="Poppy's team member" className="jobs-photo" />
            <img src={worker6} alt="Poppy's team member" className="jobs-photo" />
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
