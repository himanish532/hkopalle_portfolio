import React from 'react';

const interests = [
  { emoji: '⛩️', title: 'Anime Enthusiast', desc: "From classic shonen to complex psychological thrillers — anime has been a lifelong passion. There's a certain storytelling depth in anime that I genuinely admire and always come back to." },
  { emoji: '🤖', title: 'AI Builder', desc: "I love experimenting with AI tools and turning ideas into real prototypes. Whether it's automating workflows or building side projects, AI keeps me creatively energized outside of work." },
  { emoji: '🏀', title: 'Basketball', desc: 'Hitting the court is my favorite way to decompress. The combination of strategy, teamwork, and physical effort makes basketball the perfect counterbalance to a desk-heavy career.' },
  { emoji: '🏔️', title: 'National Parks Explorer', desc: "There's something humbling about standing in the middle of a vast national park. I actively seek out new parks to explore — from canyon trails to alpine meadows." },
  { emoji: '👨‍👩‍👦', title: 'Family First', desc: "My family is my anchor. Spending quality time with them — whether it's a weekend trip, a movie night, or just a shared meal — is something I deeply cherish and prioritize." },
];

export default function BeyondWorkSection() {
  return (
    <section id="beyond" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">Beyond the Code</p>
        <h2 className="section-title">Life Outside Work</h2>
        <p className="text-muted max-w-2xl mb-14 leading-relaxed">
          Behind the data pipelines and cloud architectures, there's a curious, active,
          and family-driven person who finds inspiration in the world far beyond the screen.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-colors"
            >
              <span className="text-3xl mb-4 block">{item.emoji}</span>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
