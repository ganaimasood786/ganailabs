import { useState } from 'react';
import { PageHero } from '../components/Common.jsx';
import { COMPANY, services } from '../data.js';

const empty = { name: '', email: '', phone: '', service: '', budget: '', message: '' };

// The website is a static site; the API runs as a separate Render web service.
const API_BASE =
  import.meta.env.VITE_API_URL ||
  (window.location.hostname.endsWith('ganailabs.in') ? 'https://ganailabs.onrender.com' : '');

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ state: 'idle', msg: '' });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();

    // Build a WhatsApp message from the form and open the chat
    const lines = [
      'Hi GanaiLabs, I would like to discuss a project.',
      '',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      form.service ? `Service: ${form.service}` : null,
      form.budget ? `Budget: ${form.budget}` : null,
      '',
      `Project details: ${form.message}`,
    ].filter((l) => l !== null);
    const url = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
    // Also keep a copy in the database. keepalive lets it finish even if this tab navigates away,
    // and the backend may need a few seconds to wake up on Render's free plan.
    fetch(`${API_BASE}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
      keepalive: true,
    }).catch(() => {});

    // Open WhatsApp in a new tab (fall back to this tab if pop-ups are blocked)
    const win = window.open(url, '_blank');
    if (win) win.opener = null;
    else window.location.href = url;

    setStatus({ state: 'success', msg: 'Opening WhatsApp… just press send in the chat.' });
    setForm(empty);
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
            <div className="info-item"><span>💬</span><a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer">{COMPANY.phone}</a></div>
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
            <button className="btn btn-primary">Send Message</button>
            {status.msg && <p className={`form-msg ${status.state}`}>{status.msg}</p>}
          </form>
        </div>
      </section>
    </>
  );
}
