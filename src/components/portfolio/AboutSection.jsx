import React from 'react';
import { Database, Cloud, RefreshCw, BarChart3 } from 'lucide-react';

const highlights = [
  { icon: Database, title: 'Big Data', desc: 'Designing scalable data pipelines & warehouses' },
  { icon: Cloud, title: 'Cloud Platforms', desc: 'Azure & GCP certified expertise' },
  { icon: RefreshCw, title: 'ETL / ELT', desc: 'Optimizing data integration workflows' },
  { icon: BarChart3, title: 'Analytics', desc: 'Enabling data-driven business decisions' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">About Me</p>
        <h2 className="section-title">
          Building the Data Infrastructure of Tomorrow
        </h2>
        <p className="text-muted max-w-3xl mb-16 leading-relaxed">
          With a proven track record at Costco IT and Deloitte, I specialize in architecting
          robust data solutions that transform raw data into actionable insights. My experience
          spans the full data lifecycle — from ingestion and transformation to storage and
          visualization — across multi-cloud environments. I thrive on solving complex data
          integration challenges and delivering scalable, production-grade data platforms.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="bg-card border border-border rounded-2xl p-6 hover:border-accent/40 transition-colors"
            >
              <div className="w-12 h-12 mb-4 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <h.icon size={24} />
              </div>
              <h3 className="font-semibold mb-2">{h.title}</h3>
              <p className="text-sm text-muted">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
