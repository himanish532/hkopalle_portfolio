import React from 'react';

const trends = [
  { label: 'NOW', value: 'Sr. Data Engineer @ Costco IT' },
  { label: 'LOCATION', value: 'Dallas, TX' },
  { label: 'LEARNING', value: 'LLMs · LangChain · Agentic AI' },
  { label: 'TOOLBOX', value: 'Azure · GCP · Spark · Databricks' },
  { label: 'STACK', value: 'Python · SQL · PySpark · Scala' },
  { label: 'BUILDS', value: 'Data Pipelines · Cloud Platforms' },
];

export default function LiveTrends() {
  return (
    <div className="border border-border rounded-2xl bg-card p-6 md:p-8">
      <div className="flex items-center gap-2 mb-6">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
        </span>
        <span className="font-mono text-xs font-medium text-muted uppercase tracking-wider">
          Live Status
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {trends.map((t) => (
          <div key={t.label} className="flex flex-col gap-0.5">
            <span className="font-mono text-[0.65rem] font-medium text-primary uppercase tracking-wider">
              {t.label}
            </span>
            <span className="text-sm text-foreground font-medium">
              {t.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
