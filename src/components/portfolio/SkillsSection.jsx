import React from 'react';

const categories = [
  { title: 'Cloud Platforms', skills: ['Microsoft Azure', 'Google Cloud Platform', 'AWS'] },
  { title: 'Data Engineering', skills: ['Apache Spark', 'Databricks', 'Azure Data Factory', 'BigQuery', 'Snowflake', 'Hadoop'] },
  { title: 'Programming', skills: ['Python', 'SQL', 'PySpark', 'Scala', 'Shell Scripting'] },
  { title: 'Databases', skills: ['SQL Server', 'PostgreSQL', 'Cosmos DB', 'MongoDB', 'Redis'] },
  { title: 'DevOps & Tools', skills: ['Azure DevOps', 'Git', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'] },
  { title: 'Visualization', skills: ['Power BI', 'Tableau', 'Looker'] },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/40">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">Technical Expertise</p>
        <h2 className="section-title">Skills &amp; Technologies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="font-inter font-semibold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
