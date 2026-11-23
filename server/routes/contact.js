import { Router } from 'express';
import mongoose from 'mongoose';
import Contact from '../models/Contact.js';

const router = Router();
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/', async (req, res) => {
  const { name, email, phone, service, budget, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email and message are required.' });
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
  }

  const data = { name, email, phone, service, budget, message };

  try {
    if (mongoose.connection.readyState === 1) {
      await Contact.create(data);
    } else {
      console.log('New enquiry (no DB connected):', data);
    }
    res.status(201).json({ success: true, message: "Thanks! We'll get back to you within 24 hours." });
  } catch (err) {
    console.error('Contact save failed:', err.message);
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again later.' });
  }
});

export default router;
