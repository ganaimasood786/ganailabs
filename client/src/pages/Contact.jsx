import { useState } from 'react';
import { PageHero } from '../components/Common.jsx';
import { COMPANY, services } from '../data.js';

const empty = { name: '', email: '', phone: '', service: '', budget: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ state: 'idle', msg: '' });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', msg: '' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setStatus({ state: 'success', msg: data.message });
      setForm(empty);
    } catch (err) {
      setStatus({ state: 'error', msg: err.message || 'Could not send message.' });
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something great"
        text="Share your idea with us. We'll reply within 24 hours with next steps."
      />
      <section className="section">
        <div className="container contact-grid">
          <aside className="contact-info">
            <h3>Get in touch</h3>
            <p>Prefer email or a call? Reach us directly.</p>
            <div className="info-item"><span>✉️</span><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div>
            <div className="info-item"><span>📞</span><a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}>{COMPANY.phone}</a></div>
            <div className="info-item"><span>📍</span><p>{COMPANY.address}</p></div>
            <div className="info-note">🔒 Your idea is safe with us. We sign NDAs on request.</div>
          </aside>

          <form className="card contact-form" onSubmit={submit}>
            <div className="form-row">
              <label>Full name *<input name="name" value={form.name} onChange={update} required /></label>
              <label>Email *<input type="email" name="email" value={form.email} onChange={update} required /></label>
            </div>
            <div className="form-row">
              <label>Phone<input name="phone" value={form.phone} onChange={update} /></label>
              <label>Service
                <select name="service" value={form.service} onChange={update}>
                  <option value="">Select a service</option>
                  {services.map((s) => <option key={s.title}>{s.title}</option>)}
                </select>
              </label>
            </div>
            <label>Budget
              <select name="budget" value={form.budget} onChange={update}>
                <option value="">Select budget</option>
                <option>Under $5k</option>
                <option>$5k - $15k</option>
                <option>$15k - $50k</option>
                <option>$50k+</option>
              </select>
            </label>
            <label>Project details *
              <textarea name="message" rows="5" value={form.message} onChange={update} required />
            </label>
            <button className="btn btn-primary" disabled={status.state === 'loading'}>
              {status.state === 'loading' ? 'Sending…' : 'Send Message'}
            </button>
            {status.msg && <p className={`form-msg ${status.state}`}>{status.msg}</p>}
          </form>
        </div>
      </section>
    </>
  );
}
