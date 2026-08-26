import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/siteData';
import { ContactFormData } from '../types';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  MessageSquare,
  ArrowRight,
  RefreshCw
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  initialBudget?: string;
  initialTimeline?: string;
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = 'Website Design & UI/UX',
  initialBudget = '$1,500 - $3,000',
  initialTimeline = 'Within 1 Month',
  initialMessage = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialService,
    budget: initialBudget,
    timeline: initialTimeline,
    message: initialMessage,
  });

  const [botcheck, setBotcheck] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const budgetOptions = [
    'Under $1,500',
    '$1,500 - $3,000',
    '$3,000 - $6,000',
    '$6,000 - $12,000',
    '$12,000+ Enterprise',
  ];

  const timelineOptions = [
    'Immediately / Urgent',
    'Within 1 - 2 Weeks',
    'Within 1 Month',
    '1 - 3 Months',
    'Exploring Options',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMsg('Please provide your name and work email address.');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    if (!formData.message.trim()) {
      setErrorMsg('Please tell us briefly about your project goals or requirements.');
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '24728188-6cb1-4132-adc6-087de36f32cc';

    if (!accessKey) {
      console.error(
        '[RealWebArts Error] Web3Forms Access Key is missing. ' +
        'Please provide VITE_WEB3FORMS_ACCESS_KEY in your environment.'
      );
      setErrorMsg(
        'Form submission is temporarily unavailable. Please contact us directly at info@realwebarts.com or WhatsApp +91 94658 94687.'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        access_key: accessKey,
        subject: `New Website Inquiry from ${formData.name.trim()} - RealWebArts`,
        from_name: 'RealWebArts Website Inquiry',
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || 'Not specified',
        company: formData.company.trim() || 'Not specified',
        service: formData.service,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message.trim(),
        botcheck: botcheck ? 'true' : undefined,
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        
        // Trigger celebration confetti
        try {
          confetti({
            particleCount: 120,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#06B6D4', '#38BDF8', '#818CF8', '#A855F7', '#10B981'],
          });
        } catch (err) {
          // Gracefully fallback if canvas is restricted
        }
      } else {
        console.error('[Web3Forms Submission Error]', result);
        setErrorMsg(
          result.message || 'Something went wrong submitting your inquiry. Please try again or email us directly at info@realwebarts.com.'
        );
      }
    } catch (err: any) {
      console.error('[Network Error Submitting Web3Forms]', err);
      setErrorMsg(
        'Unable to connect to the server. Please check your internet connection or email info@realwebarts.com directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrorMsg('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'Website Design & UI/UX',
      budget: '$1,500 - $3,000',
      timeline: 'Within 1 Month',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#090D16] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-600/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Initiate Project Conversation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Let's Build Something Exceptional Together
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Tell us about your objectives. We respond within 12 business hours with technical scope ideas, timeline estimates, and transparent pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left Direct Contact Cards & Guarantee */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Cards */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-white font-heading">
                Direct Contact Channels
              </h3>

              {/* Email */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Official Email</div>
                  <div className="text-sm font-bold text-white group-hover:text-cyan-300 font-mono">
                    {COMPANY_INFO.email}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Average reply time: &lt; 2 hrs</div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Direct / WhatsApp Call</div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-300 font-mono">
                    {COMPANY_INFO.formattedPhone}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Monday - Saturday (9AM - 7PM IST)</div>
                </div>
              </a>

              {/* Office Location */}
              <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Headquarters</div>
                  <div className="text-xs font-semibold text-slate-200 leading-snug mt-0.5">
                    {COMPANY_INFO.address}
                  </div>
                  <div className="text-[11px] text-cyan-400 mt-1">Serving clients worldwide</div>
                </div>
              </div>
            </div>

            {/* Guarantees Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950/40 border border-indigo-500/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-300 font-bold">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span>The RealWebArts Commitment</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Fixed-Scope Transparent Proposals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Core Web Vitals & Speed Optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>30-Day Complete Post-Launch Warranty</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Strict NDA & IP Ownership Handover</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Lead Capture Form */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-md">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    Project Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. A senior technical architect from RealWebArts is reviewing your brief and will contact you at <strong className="text-cyan-300">{formData.email}</strong> within 12 hours.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 max-w-md mx-auto text-left space-y-1">
                  <div><strong>Selected Service:</strong> {formData.service}</div>
                  <div><strong>Budget Range:</strong> {formData.budget}</div>
                  <div><strong>Timeline:</strong> {formData.timeline}</div>
                </div>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="lead-contact-form">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">
                    Project Scope & Brief
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the form below to lock in an engineering consultation with our team.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs font-medium">
                    {errorMsg}
                  </div>
                )}

                {/* Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      placeholder="e.g. Alexander Wright"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Phone and Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      placeholder="e.g. +1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      placeholder="e.g. Acme Innovations"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Service Selector */}
                <div>
                  <label htmlFor="contact-service" className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                    Required Service
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Complete Custom Full-Stack Project">Complete Custom Full-Stack Project</option>
                  </select>
                </div>

                {/* Budget & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-budget" className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                      Target Budget (USD)
                    </label>
                    <select
                      id="contact-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      {budgetOptions.map((b, idx) => (
                        <option key={idx} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-timeline" className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                      Target Timeline
                    </label>
                    <select
                      id="contact-timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      {timelineOptions.map((t, idx) => (
                        <option key={idx} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Details Textarea */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                    Project Details & Goals *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your project vision, target audience, existing website URL, and key business goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                {/* Honeypot Spam Protection (Invisible to humans, caught by bots) */}
                <input
                  type="checkbox"
                  name="botcheck"
                  id="botcheck"
                  className="hidden"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  onChange={(e) => setBotcheck(e.target.checked)}
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="contact-submit-button"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Sending Brief to Technical Team...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Brief & Request Proposal</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Zero Spam Policy • Data Protected under Strict NDA</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
