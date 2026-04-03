import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import '../Layout.css';
import './ContactPage.css';

const LINKEDIN_URL = 'https://www.linkedin.com/company/init1-llc';
const EMAIL = 'devs@init1.biz';

// TODO: set to Django API endpoint (e.g. 'https://api.init1.biz/api/contact/')
const API_URL = '/api/contact/';

type FormState = { name: string; email: string; subject: string; message: string };
type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';
type FieldErrors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = { name: '', email: '', subject: '', message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactPage = () => {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    if (status === 'error') setStatus('idle');
  };

  const validate = (): FieldErrors => {
    const e: FieldErrors = {};
    if (!form.name.trim())    e.name    = 'name is required.';
    if (!form.email.trim())   e.email   = 'email is required.';
    else if (!EMAIL_RE.test(form.email)) e.email = 'enter a valid email address.';
    if (!form.subject.trim()) e.subject = 'subject is required.';
    if (!form.message.trim()) e.message = 'message is required.';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fieldErrors = validate();
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    flushSync(() => setStatus('loading'));
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setForm(EMPTY);
      setErrors({});
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="page">

      <div className="hero hero--small">
        <div className="hero-scanlines" />
        <div className="hero-content">
          <span className="hero-eyebrow">// init1 / contact</span>
          <h1 className="hero-title">contact</h1>
          <span className="hero-cursor" aria-hidden="true" />
        </div>
      </div>

      {/* ── 50/50: intro + form ── */}
      <section className="contact-main-section">

        <div className="contact-left">
          <h2 className="section-heading">ready to build something incredible?</h2>
          <p className="section-body">
            got a project to scope, a system to build, or an engineering
            problem that needs a real solution? we work with clients at
            any scale.<br /><br />
            fill out the form or reach out directly below. we respond within 24 hours.
          </p>

          <div className="contact-methods">

            <div className="contact-method-tile">
              <i className="fa-brands fa-linkedin contact-method-icon" aria-hidden="true" />
              <div className="contact-method-body">
                <span className="contact-method-label">linkedin</span>
                <span className="contact-method-value">linkedin.com/company/init1-llc</span>
              </div>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-btn"
              >
                view <i className="fa-solid fa-chevron-right" />
              </a>
            </div>

            <div className="contact-method-tile">
              <i className="fa-solid fa-envelope contact-method-icon" aria-hidden="true" />
              <div className="contact-method-body">
                <span className="contact-method-label">email</span>
                <div className="contact-method-value-row">
                  <span className="contact-method-value">{EMAIL}</span>
                  <button
                    className={`contact-copy-btn${copied ? ' contact-copy-btn--copied' : ''}`}
                    onClick={handleCopy}
                    title="Copy email"
                  >
                    <i className={copied ? 'fa-solid fa-check' : 'fa-regular fa-copy'} />
                  </button>
                </div>
              </div>
              <a href={`mailto:${EMAIL}`} className="contact-method-btn">
                send <i className="fa-solid fa-chevron-right" />
              </a>
            </div>

          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>

            <div className="contact-form-field">
              <label className="contact-form-label" htmlFor="cf-name">name</label>
              <input
                id="cf-name"
                className={`contact-form-input${errors.name ? ' contact-form-input--invalid' : ''}`}
                type="text"
                name="name"
                placeholder="your name"
                value={form.name}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
              {errors.name && <span className="contact-form-error">{errors.name}</span>}
            </div>

            <div className="contact-form-field">
              <label className="contact-form-label" htmlFor="cf-email">email</label>
              <input
                id="cf-email"
                className={`contact-form-input${errors.email ? ' contact-form-input--invalid' : ''}`}
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
              {errors.email && <span className="contact-form-error">{errors.email}</span>}
            </div>

            <div className="contact-form-field contact-form-field--full">
              <label className="contact-form-label" htmlFor="cf-subject">subject</label>
              <input
                id="cf-subject"
                className={`contact-form-input${errors.subject ? ' contact-form-input--invalid' : ''}`}
                type="text"
                name="subject"
                placeholder="what's this about?"
                value={form.subject}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
              {errors.subject && <span className="contact-form-error">{errors.subject}</span>}
            </div>

            <div className="contact-form-field contact-form-field--full">
              <label className="contact-form-label" htmlFor="cf-message">message</label>
              <textarea
                id="cf-message"
                className={`contact-form-textarea${errors.message ? ' contact-form-input--invalid' : ''}`}
                name="message"
                placeholder="tell us about your project..."
                value={form.message}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
              {errors.message && <span className="contact-form-error">{errors.message}</span>}
            </div>

            <div className="contact-form-actions contact-form-field--full">
              <button
                type="submit"
                className="hero-btn contact-form-submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
                {status === 'loading'
                  ? <i className="fa-solid fa-circle-notch fa-spin" aria-hidden="true" />
                  : <span className="material-symbols-outlined hero-btn-arrow" aria-hidden="true">arrow_forward</span>
                }
              </button>

              {status === 'success' && (
                <span className="contact-form-feedback contact-form-feedback--success">
                  <i className="fa-solid fa-check" /> message sent. we'll be in touch.
                </span>
              )}
              {status === 'error' && (
                <span className="contact-form-feedback contact-form-feedback--error">
                  <i className="fa-solid fa-xmark" /> something went wrong. try emailing us directly.
                </span>
              )}
            </div>

          </form>
        </div>

      </section>


    </div>
  );
};

export default ContactPage;
