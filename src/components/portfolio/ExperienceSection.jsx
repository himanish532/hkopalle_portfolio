import React from 'react';
import { Briefcase } from 'lucide-react';

const jobs = [
  {
    title: 'Sr. Data Engineer',
    company: 'Costco IT',
    period: 'Aug 2025 – Present',
    location: 'Irving, TX',
    bullets: [
      'Design and optimize large-scale data pipelines on Azure and GCP for enterprise analytics.',
      'Architect cloud-native data warehouse solutions handling terabytes of transactional data.',
      'Built Backend repo for AI OverWatch — a GCP-based AI agent platform integrating Splunk, Dynatrace, and ServiceNow via MCP servers for conversational incident investigation and cross-service correlation.',
      'Developed OverWatch analytics dashboards tracking MTTR improvement, engineer productivity, AI adoption metrics, and ROI — translating operational data into actionable insights for leadership.',
    ],
  },
  {
    title: 'Data Engineer',
    company: 'Deloitte',
    period: 'Oct 2022 – Aug 2025',
    location: 'United States',
    bullets: [
      'Built scalable ETL/ELT frameworks for diverse client engagements across industries.',
      'Developed data integration solutions using Spark, Databricks, and Azure Data Factory.',
      'Enabled advanced analytics and reporting through optimized data models and pipelines.',
      'Mentored junior engineers and contributed to best-practice documentation.',
    ],
  },
  {
    title: 'Data Engineer',
    company: 'Astra Solutions Inc',
    period: 'Aug 2017 – Oct 2022',
    location: 'United States',
    bullets: [
      'Designed and maintained robust data pipelines for large-scale business intelligence systems.',
      'Built and optimized SQL and NoSQL database solutions to support diverse client needs.',
      'Delivered end-to-end data integration solutions across cloud and on-premise environments.',
      'Collaborated with analytics teams to ensure data accuracy, consistency, and availability.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Infosys Limited',
    period: 'Sept 2013 – Dec 2015',
    location: 'India',
    bullets: [
      'Developed and maintained enterprise software applications for global clients.',
      'Contributed to data processing modules and backend system integrations.',
      'Participated in full software development lifecycle including design, development, and testing.',
      'Worked in agile teams delivering quality solutions across multiple domains.',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="section-label">Career</p>
        <h2 className="section-title">Professional Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <div key={i} className="md:pl-14 relative">
                {/* Timeline dot — briefcase icon matching Base44 */}
                <div className="hidden md:flex absolute left-5 top-2 w-7 h-7 rounded-full bg-primary/10 border-2 border-primary items-center justify-center">
                  <Briefcase className="w-3.5 h-3.5 text-primary" />
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <span className="text-xs text-muted">{job.period}</span>
                  </div>
                  <p className="text-accent text-sm font-medium mb-1">{job.company}</p>
                  <p className="text-xs text-muted mb-4">{job.location}</p>
                  <ul className="space-y-2">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
