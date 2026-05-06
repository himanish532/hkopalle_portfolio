import React from 'react';
import { Linkedin, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-card/40">
      <div className="max-w-3xl mx-auto">
        <p className="section-label">Connect</p>
        <h2 className="section-title">Let's Work Together</h2>
        <p className="text-muted mb-10 leading-relaxed">
          I'm always open to discussing new opportunities, interesting data challenges, or
          potential collaborations.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
          <a
            href="https://www.linkedin.com/in/himanish-kopalle-48563759/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
          >
            <Linkedin size={18} /> Connect on LinkedIn
          </a>
          <a
            href="mailto:himanishkopalle@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border font-medium hover:bg-card transition-colors"
          >
            <Mail size={18} /> Connect via Email
          </a>
        </div>

        <p className="flex items-center gap-1.5 text-sm text-muted">
          <MapPin size={14} /> Dallas, Texas, United States
        </p>
      </div>
    </section>
  );
}
