import './Home.css';
import { useState, useEffect } from 'react';
import storefront from '../../assets/NeptuneStoreFront.jpeg';
import logo from '../../assets/NeptuneLogo.jpg';
import customer from '../../assets/Neptune_customer.jpg';
import customer2 from '../../assets/Neptune_customer2.jpg';
import customer3 from '../../assets/Neptune_customer3.jpg';
import shelf from '../../assets/Neptune_shelf.jpg';
import beachChair from '../../assets/LBI_beach.jpg';
import beach from '../../assets/LBI_beach2.jpg';
import catering from '../../assets/Neptune_catering.jpg';
import { MdWineBar, MdLiquor, MdPhone, MdEmail, MdLocationOn, MdArrowForward, MdBeachAccess, MdCelebration, MdPerson } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaXTwitter, FaUserTie } from 'react-icons/fa6';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Wedding Packages', href: '#weddings' },
  { label: 'Hours & Location', href: '#hours' },
  { label: 'Contact', href: '#contact' },
];

const HOURS = [
  { day: 'Sunday', hours: '10am – 6pm' },
  { day: 'Monday', hours: 'Closed' },
  { day: 'Tuesday', hours: 'Closed' },
  { day: 'Wednesday', hours: 'Closed' },
  { day: 'Thursday', hours: '10am – 7pm' },
  { day: 'Friday', hours: '10am – 6pm' },
  { day: 'Saturday', hours: '10am – 6pm' },
];

const ABOUT_GALLERY = [
  { src: customer3,   alt: 'Customer outside Neptune Wines & Liquors with a case' },
  { src: customer,    alt: 'Customer being helped at the Neptune counter' },
  { src: customer2,   alt: 'Happy customer outside Neptune Wines & Liquors' },
  { src: shelf,       alt: 'Curated bottle selection at Neptune Wines & Liquors' },
  { src: beachChair,  alt: 'Long Beach Island beach scene' },
];

const WEDDING_VENUES = [
  'Bonnet Island Estate',
  'Mallard Island Yacht Club',
  'Ashford Estate',
];

export default function Home() {
  const [galleryIdx, setGalleryIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setGalleryIdx(i => (i + 1) % ABOUT_GALLERY.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="nwl">

      {/* ── Announcement Banner ── */}
      <div className="nwl-banner">
        Currently closed for the season &mdash; Reopening <strong>end of April 2026</strong>
      </div>

      {/* ── Nav ── */}
      <nav className="nwl-nav">
        <a href="#top" className="nwl-nav__logo">
          <img src={logo} alt="Neptune Wines & Liquors" className="nwl-nav__logo-img" />
          <div className="nwl-nav__logo-text">
            <span className="nwl-nav__logo-name">Neptune</span>
            <span className="nwl-nav__logo-sub">Wines &amp; Liquors</span>
          </div>
        </a>
        <ul className="nwl-nav__links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
          <li>
            <a href="tel:7328415890" className="nwl-nav__cta">
              Call Us
            </a>
          </li>
        </ul>
      </nav>

      {/* ── Hero ── */}
      <section className="nwl-hero" id="top">
        <img src={storefront} alt="Neptune Wines & Liquors storefront" className="nwl-hero__img" />
        <div className="nwl-hero__overlay" />
        <div className="nwl-hero__content">
          <div className="nwl-hero__card">
            <p className="nwl-hero__eyebrow"><MdLocationOn /> Harvey Cedars, Long Beach Island</p>
            <h1 className="nwl-hero__title">Neptune Wines&nbsp;&amp; Liquors</h1>
            <p className="nwl-hero__sub">
              Rare wines, top-shelf spirits & cold beer — right on LBI. And when it's time to celebrate, we've got you covered.
            </p>
            <div className="nwl-hero__actions">
              <a href="#hours" className="nwl-btn nwl-btn--pill-primary">Hours &amp; Location</a>
              <a href="#weddings" className="nwl-btn nwl-btn--pill-secondary">Plan Your Wedding</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="nwl-section" id="about">
        <div className="nwl-container nwl-about-layout">
          <div className="nwl-about-grid">
            <div className="nwl-about-card">
              <MdWineBar className="nwl-about-card__icon" />
              <h3>Rare Finds</h3>
              <p>Hard-to-find wines, allocated Bourbons, and super-premium spirits you won't see on every shelf.</p>
            </div>
            <div className="nwl-about-card">
              <MdPerson className="nwl-about-card__icon" />
              <h3>Ask for Robert</h3>
              <p>Our GM Robert Hill knows his stuff — stop in and he'll help you find exactly the right bottle.</p>
            </div>
            <div className="nwl-about-card">
              <MdBeachAccess className="nwl-about-card__icon" />
              <h3>Harvey Cedars, LBI</h3>
              <p>Right on Long Beach Island — your go-to shop whether you're here for a weekend or all summer.</p>
            </div>
            <div className="nwl-about-card">
              <MdCelebration className="nwl-about-card__icon" />
              <h3>Any Occasion</h3>
              <p>Weddings, house parties, corporate events — full beverage supply and bar staff, handled.</p>
            </div>
          </div>
          <div className="nwl-about-gallery">
            {ABOUT_GALLERY.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className={`nwl-about-img${i === galleryIdx ? ' nwl-about-img--active' : ''}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-width image strip ── */}
      <div className="nwl-img-strip">
        <img src={beach} alt="Long Beach Island beach scene" className="nwl-img-strip__img" />
      </div>

      {/* ── Weddings Overview ── */}
      <section className="nwl-section nwl-section--wedding" id="weddings">
        <div className="nwl-container">
          <div className="nwl-wedding-overview">
            <div className="nwl-wedding-overview__text">
              <span className="nwl-eyebrow">Celebrate in Style</span>
              <h2 className="nwl-section__title">Planning a Wedding on LBI?</h2>
              <p className="nwl-section__intro">
                We work closely with couples to select the perfect wines, spirits, and beers for their big day —
                and can provide experienced bar staff at our preferred venues across Long Beach Island.
              </p>

              <div className="nwl-venues">
                <p className="nwl-venues__label">Preferred Venues</p>
                <ul className="nwl-venues__list">
                  {WEDDING_VENUES.map((v) => (
                    <li key={v}>
                      <MdLocationOn className="nwl-venues__icon" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="nwl-wedding-overview__actions">
                <button className="nwl-btn nwl-btn--wedding" type="button">
                  Wedding Packages <MdArrowForward />
                </button>
              </div>
              <p className="nwl-wedding-overview__contact">
                Have questions? Call Patti at{' '}
                <a href="tel:7328415890">(732) 841-5890</a>
              </p>
            </div>

            <img src={catering} alt="Bar staff at a Neptune wedding event" className="nwl-wedding-img" />
          </div>

          <div className="nwl-wedding-cards-row">
            <div className="nwl-card">
              <div className="nwl-card__icon"><MdWineBar /></div>
              <div className="nwl-card__body">
                <h3>Curated Selection</h3>
                <p>Expert guidance to match the perfect wines, spirits, and beers to your menu and guests.</p>
              </div>
            </div>
            <div className="nwl-card">
              <div className="nwl-card__icon"><FaUserTie /></div>
              <div className="nwl-card__body">
                <h3>Bar Staffing</h3>
                <p>Experienced bar staff available to serve at your venue for a seamless experience.</p>
                <a
                  href="https://www.instagram.com/heres.2u/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nwl-card__instagram"
                >
                  <FaInstagram /> Here's 2U Bartending
                </a>
              </div>
            </div>
            <div className="nwl-card">
              <div className="nwl-card__icon"><MdLiquor /></div>
              <div className="nwl-card__body">
                <h3>Full Beverage Supply</h3>
                <p>From cocktail hour through last call — one stop, zero stress.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hours & Location ── */}
      <section className="nwl-section nwl-section--alt" id="hours">
        <div className="nwl-container nwl-hours-wrap">

          {/* Address */}
          <div className="nwl-hours__location">
            <span className="nwl-eyebrow">Find Us</span>
            <address className="nwl-address--hero">
              <MdLocationOn className="nwl-address--hero__icon" />
              <div>
                <span className="nwl-address--hero__street">3504 Long Beach Blvd</span>
                <span className="nwl-address--hero__city">Harvey Cedars &middot; Long Beach Island, NJ</span>
              </div>
            </address>
          </div>

          {/* Day tiles */}
          <div className="nwl-hours__tiles-wrap">
            <p className="nwl-hours__closed-notice">
              Currently closed for the season — reopening end of April 2026.
            </p>
            <div className="nwl-hours__tiles">
              {HOURS.map(({ day, hours }) => (
                <div
                  key={day}
                  className={`nwl-hours__tile${hours === 'Closed' ? ' nwl-hours__tile--closed' : ''}`}
                >
                  <span className="nwl-hours__tile-day">{day.slice(0, 3)}</span>
                  <span className="nwl-hours__tile-hours">{hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="nwl-hours__social">
            <a href="https://www.facebook.com/Neptune-Wines-Liquors-137513572957384" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="nwl-social__link"><FaFacebook /></a>
            <a href="https://www.instagram.com/neptunewinesliquors/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="nwl-social__link"><FaInstagram /></a>
            <a href="https://twitter.com/NeptuneLiquors" target="_blank" rel="noopener noreferrer" aria-label="X" className="nwl-social__link"><FaXTwitter /></a>
          </div>

        </div>
      </section>

      {/* ── Contact ── */}
      <section className="nwl-section nwl-section--alt" id="contact">
        <div className="nwl-container nwl-contact">
          <span className="nwl-eyebrow">Get In Touch</span>
          <h2>Contact Us</h2>
          <div className="nwl-contact__options">
            <a href="tel:7328415890" className="nwl-contact__card">
              <span className="nwl-contact__icon"><MdPhone /></span>
              <span className="nwl-contact__label">Phone</span>
              <span className="nwl-contact__value">(732) 841-5890</span>
            </a>
            <a href="mailto:rah@neptunewinesliquors.com" className="nwl-contact__card">
              <span className="nwl-contact__icon"><MdEmail /></span>
              <span className="nwl-contact__label">Email</span>
              <span className="nwl-contact__value">rah@neptunewinesliquors.com</span>
            </a>
            <a href="https://maps.app.goo.gl/We9tF9qcmHEDk5mc6" className="nwl-contact__card">
              <span className="nwl-contact__icon"><MdLocationOn /></span>
              <span className="nwl-contact__label">Address</span>
              <span className="nwl-contact__value">3504 Long Beach Blvd, LBI, NJ</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="nwl-footer">
        <div className="nwl-container nwl-footer__grid">

          {/* Brand + social */}
          <div className="nwl-footer__col">
            <div className="nwl-footer__brand">
              <img src={logo} alt="Neptune Wines & Liquors" className="nwl-footer__logo-img" />
              <div className="nwl-nav__logo-text">
                <span className="nwl-nav__logo-name">Neptune</span>
                <span className="nwl-nav__logo-sub">Wines &amp; Liquors</span>
              </div>
            </div>
            <p className="nwl-footer__tagline">
              Your go-to shore-side stop for wine, spirits &amp; beer on Long Beach Island.
            </p>
            <div className="nwl-footer__social">
              <a href="https://www.facebook.com/Neptune-Wines-Liquors-137513572957384" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://www.instagram.com/neptunewinesliquors/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://twitter.com/NeptuneLiquors" target="_blank" rel="noopener noreferrer" aria-label="X"><FaXTwitter /></a>
            </div>
          </div>

          {/* Quick links */}
          <div className="nwl-footer__col">
            <h4 className="nwl-footer__heading">Quick Links</h4>
            <ul className="nwl-footer__links">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="nwl-footer__col">
            <h4 className="nwl-footer__heading">Hours</h4>
            <p className="nwl-footer__closed-season">Closed for the season — reopening end of April 2026</p>
            <ul className="nwl-footer__hours">
              {HOURS.map(({ day, hours }) => (
                <li key={day}>
                  <span>{day.slice(0, 3)}</span>
                  <span>{hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="nwl-footer__col">
            <h4 className="nwl-footer__heading">Contact</h4>
            <ul className="nwl-footer__contact">
              <li><a href="https://maps.app.goo.gl/We9tF9qcmHEDk5mc6"><MdLocationOn /> 3504 Long Beach Blvd, Harvey Cedars, NJ</a></li>
              <li><a href="tel:7328415890"><MdPhone /> (732) 841-5890</a></li>
              <li><a href="mailto:rah@neptunewinesliquors.com"><MdEmail /> rah@neptunewinesliquors.com</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="nwl-footer__bottom">
          <div className="nwl-container nwl-footer__bottom-inner">
            <p>&copy; {new Date().getFullYear()} Neptune Wines &amp; Liquors. All rights reserved.</p>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
