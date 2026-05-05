import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  { school: 'University of North Texas', degree: "Master's Degree — Computer Science", location: 'Denton, TX' },
  { school: 'Jawaharlal Nehru Technological University', degree: "Bachelor's Degree — Computer Science", location: 'India' },
];

const certifications = [
  'Azure Data Engineer Associate',
  'Google Cloud Professional Data Engineer',
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 bg-card/40">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Background</p>
        <h2 className="section-title">Education &amp; Certifications</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Education card */}
          <div className="p-6 md:p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-inter font-semibold text-lg">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((e) => (
                <div key={e.school}>
                  <h4 className="font-inter font-semibold">{e.school}</h4>
                  <p className="text-sm text-muted mt-0.5">{e.degree}</p>
                  <p className="text-xs text-muted/70 mt-0.5">{e.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications card */}
          <div className="p-6 md:p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-inter font-semibold text-lg">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((c) => (
                <div key={c} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                  <span className="text-sm font-medium">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
