import React, { useState, useEffect, useRef } from 'react';

const careerNodes = [
  {
    id: 0,
    company: 'Infosys',
    year: '2013',
    industry: 'IT SERVICES',
    headline: 'Where it started.',
    desc: 'Developed and maintained enterprise software applications for global clients. Contributed to data processing modules and backend system integrations.',
  },
  {
    id: 1,
    company: 'UNT',
    year: '2016',
    industry: '',
    headline: "M.S. Computer Science.",
    desc: "Master's in Computer Science at University of North Texas. Where data engineering fundamentals met cloud computing — and the path to building scalable data platforms began.",
  },
  {
    id: 2,
    company: 'Astra Solutions',
    year: '2017',
    industry: 'DATA ENGINEERING',
    headline: 'Building the foundation.',
    desc: 'Designed and maintained robust data pipelines for large-scale business intelligence systems. Built and optimized SQL and NoSQL database solutions across cloud and on-premise environments.',
  },
  {
    id: 3,
    company: 'Deloitte',
    year: '2022',
    industry: 'CONSULTING',
    headline: 'Enterprise-scale data.',
    desc: 'Built scalable ETL/ELT frameworks for diverse client engagements. Developed data integration solutions using Spark, Databricks, and Azure Data Factory.',
  },
  {
    id: 4,
    company: 'Costco IT',
    year: '2025',
    industry: 'RETAIL · ENTERPRISE',
    headline: 'Where I lead now.',
    desc: 'Sr. Data Engineer building OverWatch — a GCP-based AI agent platform integrating Splunk, Dynatrace, and ServiceNow for incident investigation. Designing large-scale data pipelines and analytics dashboards that quantify ROI and drive strategic decisions.',
  },
];

// SVG positions (5 nodes spread across the viewport)
const positions = [
  { x: 90, y: 170 },
  { x: 225, y: 145 },
  { x: 360, y: 115 },
  { x: 495, y: 85 },
  { x: 610, y: 55 },
];

export default function CareerTimeline() {
  const [activeNode, setActiveNode] = useState(4);
  const blipRef = useRef(null);
  const animRef = useRef(null);
  const progressRef = useRef(0);

  // Animate the blip along the path
  useEffect(() => {
    let lastTime = performance.now();
    const speed = 0.00012; // slower for smooth feel

    const animate = (time) => {
      const dt = time - lastTime;
      lastTime = time;
      progressRef.current += dt * speed;
      if (progressRef.current > positions.length - 1) progressRef.current = 0;

      const idx = Math.floor(progressRef.current);
      const t = progressRef.current - idx;
      const from = positions[idx];
      const to = positions[Math.min(idx + 1, positions.length - 1)];

      const cx = from.x + (to.x - from.x) * t;
      const cy = from.y + (to.y - from.y) * t;

      if (blipRef.current) {
        blipRef.current.setAttribute('cx', cx);
        blipRef.current.setAttribute('cy', cy);
      }

      // Update active node based on nearest
      const nearest = positions.reduce((best, p, i) => {
        const dist = Math.abs(cx - p.x) + Math.abs(cy - p.y);
        return dist < best.dist ? { dist, i } : best;
      }, { dist: Infinity, i: 0 });

      setActiveNode(nearest.i);
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const active = careerNodes[activeNode];

  return (
    <section id="timeline" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">Traced Live</p>
        <h2 className="section-title">Career Progression</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* SVG Timeline */}
          <div className="lg:col-span-2 overflow-x-auto">
            <svg
              className="w-full h-auto min-w-[500px]"
              viewBox="0 0 700 220"
              preserveAspectRatio="xMidYMid meet"
              aria-label="Career timeline"
            >
              {/* Connector lines */}
              <g stroke="var(--border)" strokeWidth="1" fill="none">
                {positions.slice(0, -1).map((p, i) => (
                  <line
                    key={i}
                    x1={p.x} y1={p.y}
                    x2={positions[i + 1].x} y2={positions[i + 1].y}
                    opacity="0.6"
                  />
                ))}
              </g>

              {/* Dotted baseline */}
              <line
                x1="60" y1="200" x2="640" y2="200"
                stroke="var(--border)" strokeWidth="1" strokeDasharray="2 4"
              />

              {/* Axis labels */}
              <text x="60" y="215" textAnchor="middle" fill="var(--muted)" fontSize="10" fontFamily="JetBrains Mono, monospace">
                START
              </text>
              <text x="640" y="215" textAnchor="middle" fill="var(--primary)" fontSize="10" fontFamily="JetBrains Mono, monospace">
                NOW
              </text>

              {/* Nodes */}
              {positions.map((p, i) => (
                <g
                  key={i}
                  className="cursor-pointer"
                  onClick={() => {
                    progressRef.current = i;
                    setActiveNode(i);
                  }}
                >
                  {/* Glow ring */}
                  <circle
                    cx={p.x} cy={p.y} r="14"
                    fill="none"
                    stroke={activeNode === i ? 'var(--primary)' : 'transparent'}
                    strokeWidth="1"
                    opacity="0.4"
                  />
                  {/* Node dot */}
                  <circle
                    cx={p.x} cy={p.y} r="4"
                    fill={activeNode === i ? 'var(--primary)' : 'var(--muted)'}
                  />
                  {/* Label */}
                  <text
                    x={p.x} y={p.y - 20}
                    textAnchor="middle"
                    fill={activeNode === i ? 'var(--fg)' : 'var(--muted)'}
                    fontSize="11"
                    fontFamily="Inter, sans-serif"
                    fontWeight={activeNode === i ? '600' : '400'}
                  >
                    {careerNodes[i].company}
                  </text>
                  {/* Year */}
                  <text
                    x={p.x} y={p.y + 22}
                    textAnchor="middle"
                    fill="var(--muted)"
                    fontSize="9"
                    fontFamily="JetBrains Mono, monospace"
                  >
                    {careerNodes[i].year}
                  </text>
                </g>
              ))}

              {/* Animated blip */}
              <circle
                ref={blipRef}
                cx={positions[4].x}
                cy={positions[4].y}
                r="3.5"
                fill="var(--primary)"
                className="drop-shadow-[0_0_6px_var(--primary)]"
              />
            </svg>
          </div>

          {/* Detail panel */}
          <aside className="bg-card border border-border rounded-2xl p-6 transition-all duration-300">
            {active.industry && (
              <span className="font-mono text-[0.6rem] font-medium text-primary uppercase tracking-wider bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
                {active.industry}
              </span>
            )}
            <h3 className="font-display text-xl font-bold mt-3 mb-2">
              <span className="text-primary">"</span>
              {active.headline}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {active.desc}
            </p>
          </aside>
        </div>

        {/* Mobile fallback — vertical list */}
        <div className="lg:hidden mt-10 space-y-3">
          {[...careerNodes].reverse().map((node) => (
            <div
              key={node.id}
              className="bg-card border border-border rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-muted">{node.year}</span>
                {node.industry && (
                  <span className="font-mono text-[0.6rem] text-primary uppercase tracking-wider">
                    {node.industry}
                  </span>
                )}
              </div>
              <h4 className="font-semibold text-sm">{node.company}</h4>
              <p className="text-xs text-muted mt-1 leading-relaxed">{node.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
