import './Home.css';
import storefront from '../../assets/NeptuneStoreFront.jpeg';
import logo from '../../assets/NeptuneLogo.jpg';
import { MdWineBar, MdLiquor, MdInventory2, MdPhone, MdEmail, MdLocationOn, MdArrowForward } from 'react-icons/md';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

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

const WEDDING_VENUES = [
  'Bonnet Island Estate',
  'Mallard Island Yacht Club',
  'Ashford Estate',
];

export default function Home() {
  return (
    <div className="nwl">

      {/* ── Announcement Banner ── */}
      <div className="nwl-banner">
        Currently closed for the season &mdash; Re-opening end of April 2026
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
            <p className="nwl-hero__eyebrow">Long Beach Island, NJ</p>
            <h1 className="nwl-hero__title">Neptune Wines&nbsp;&amp; Liquors</h1>
            <p className="nwl-hero__sub">
              Your premier destination for wines, spirits, and beers on LBI — plus full-service beverage packages for your special day.
            </p>
            <div className="nwl-hero__actions">
              <a href="#weddings" className="nwl-btn nwl-btn--gold">Plan Your Wedding</a>
              <a href="#hours" className="nwl-btn nwl-btn--outline-dark">Hours &amp; Location</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="nwl-section" id="about">
        <div className="nwl-container nwl-about">
          <div className="nwl-about__text">
            <span className="nwl-eyebrow">Who We Are</span>
            <h2>A Full Selection, Expert Guidance</h2>
            <p>
              At Neptune we feature a full array of wines, liquors, and beers. Whether you're stocking up for a weekend at the shore or selecting the perfect bottle for a special occasion, our knowledgeable staff is here to help.
            </p>
            <p>
              We take pride in offering personalized recommendations and a welcoming atmosphere that keeps our customers coming back season after season.
            </p>
          </div>
          <div className="nwl-about__stats">
            <div className="nwl-stat">
              <span className="nwl-stat__num">3</span>
              <span className="nwl-stat__label">Categories</span>
              <span className="nwl-stat__detail">Wine · Spirits · Beer</span>
            </div>
            <div className="nwl-stat">
              <span className="nwl-stat__num">LBI</span>
              <span className="nwl-stat__label">Locally Rooted</span>
              <span className="nwl-stat__detail">Long Beach Island, NJ</span>
            </div>
            <div className="nwl-stat">
              <span className="nwl-stat__num">∞</span>
              <span className="nwl-stat__label">Occasions</span>
              <span className="nwl-stat__detail">From casual to black-tie</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Weddings Overview ── */}
      <section className="nwl-section nwl-section--wedding" id="weddings">
        <div className="nwl-container nwl-wedding-overview">
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

          <div className="nwl-wedding-overview__cards">
            <div className="nwl-card">
              <div className="nwl-card__icon"><MdWineBar /></div>
              <h3>Curated Selection</h3>
              <p>Expert guidance to match the perfect wines, spirits, and beers to your menu and guests.</p>
            </div>
            <div className="nwl-card">
              <div className="nwl-card__icon"><MdLiquor /></div>
              <h3>Bar Staffing</h3>
              <p>Experienced bar staff available to serve at your venue for a seamless experience.</p>
            </div>
            <div className="nwl-card">
              <div className="nwl-card__icon"><MdInventory2 /></div>
              <h3>Full Beverage Supply</h3>
              <p>From cocktail hour through last call — one stop, zero stress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hours & Location ── */}
      <section className="nwl-section" id="hours">
        <div className="nwl-container nwl-hours-grid">
          <div className="nwl-hours__info">
            <span className="nwl-eyebrow">Find Us</span>
            <h2>Hours &amp; Location</h2>
            <address className="nwl-address">
              <p>3504 Long Beach Blvd</p>
              <p>Long Beach Township, NJ</p>
            </address>
            <div className="nwl-social">
              <a href="#" aria-label="Facebook" className="nwl-social__link">
                <FaFacebook /> Facebook
              </a>
              <a href="#" aria-label="Instagram" className="nwl-social__link">
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>

          <div className="nwl-hours__table">
            <table>
              <tbody>
                {HOURS.map(({ day, hours }) => (
                  <tr key={day} className={hours === 'Closed' ? 'nwl-hours__closed' : ''}>
                    <td className="nwl-hours__day">{day}</td>
                    <td className="nwl-hours__time">{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            <a href="mailto:neptune@neptuneliquors.com" className="nwl-contact__card">
              <span className="nwl-contact__icon"><MdEmail /></span>
              <span className="nwl-contact__label">Email</span>
              <span className="nwl-contact__value">neptune@neptuneliquors.com</span>
            </a>
            <div className="nwl-contact__card">
              <span className="nwl-contact__icon"><MdLocationOn /></span>
              <span className="nwl-contact__label">Address</span>
              <span className="nwl-contact__value">3504 Long Beach Blvd, LBI, NJ</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="nwl-footer">
        <div className="nwl-container nwl-footer__inner">
          <div className="nwl-footer__brand">
            <img src={logo} alt="Neptune Wines & Liquors" className="nwl-footer__logo-img" />
            <div className="nwl-nav__logo-text">
              <span className="nwl-nav__logo-name">Neptune</span>
              <span className="nwl-nav__logo-sub">Wines &amp; Liquors</span>
            </div>
          </div>
          <p className="nwl-footer__copy">
            &copy; {new Date().getFullYear()} Neptune Wines &amp; Liquors &mdash; Long Beach Island, NJ.
            All rights reserved.
          </p>
          <a href="#" className="nwl-footer__privacy">Privacy Policy</a>
        </div>
      </footer>

    </div>
  );
}
