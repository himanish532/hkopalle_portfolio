import React from 'react';
import { Linkedin, Mail, ChevronDown } from 'lucide-react';
import LiveTrends from './LiveTrends';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-accent/5" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left — intro */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://media.base44.com/images/public/69e90667fd3f2c56cd52644e/87eb366df_dp.jpg"
                alt="Himanish Kopalle"
                className="w-14 h-14 rounded-full object-cover border-2 border-accent/30"
              />
              <div>
                <p className="font-mono text-xs text-primary uppercase tracking-wider">
                  Senior Data Engineer
                </p>
                <p className="text-sm text-muted">Dallas, Texas</p>
              </div>
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Building data platforms
              <span className="text-accent"> — made to scale.</span>
            </h1>

            <p className="text-lg text-muted max-w-xl mb-8 leading-relaxed">
              Architecting robust data solutions that transform raw data into actionable
              insights across multi-cloud environments.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/in/himanish-kopalle-48563759/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-card transition-colors"
              >
                <Mail size={16} /> Get In Touch
              </a>
            </div>
          </div>

          {/* Right — live trends */}
          <div className="lg:col-span-2">
            <LiveTrends />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
