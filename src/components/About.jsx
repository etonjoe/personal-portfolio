export default function About() {
  const skills = [
    { category: 'Languages', items: ['Python', 'R', 'SQL', 'Scala', 'Java'] },
    { category: 'ML / AI', items: ['scikit-learn', 'TensorFlow', 'PyTorch', 'Hugging Face', 'NLP'] },
    { category: 'Data Engineering', items: ['Databricks', 'Apache Airflow', 'Azure Data Factory', 'SSIS', 'dbt'] },
    { category: 'Cloud', items: ['Microsoft Azure', 'AWS', 'Google Cloud Platform', 'IBM Cloud'] },
    { category: 'Visualisation', items: ['Power BI', 'Tableau', 'Looker', 'QlikView', 'SSRS'] },
    { category: 'Databases', items: ['Azure SQL', 'PostgreSQL', 'MySQL', 'Cosmos DB', 'Delta Lake'] },
  ]

  const experience = [
    { year: 'Feb 2026 – Present', role: 'Co-Founder & COO', org: 'Xpresshare LTD, Nigeria/UK' },
    { year: 'Apr 2024 – Dec 2025', role: 'Energy Specialist / Data Analyst', org: 'E.ON Next, Nottingham, UK' },
    { year: 'Aug 2023 – Mar 2024', role: 'Data Analyst', org: 'Solihull Metropolitan Borough Council, UK' },
    { year: 'Oct 2022 – Jan 2023', role: 'Data Scientist', org: 'Hexis Lab Limited, UK' },
    { year: 'Jan 2022 – Jul 2023', role: 'Data Engineer', org: 'Pyralink Innovation Ltd, UK' },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-2">Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-blue-400">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start mb-16">
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              I am a results-driven Data Scientist and Data Engineer with over 13 years of expertise spanning health systems strengthening, cloud data architecture, and machine learning engineering across Nigeria, the UK, and internationally.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              My career bridges two worlds: deep fieldwork with USAID/PEPFAR programmes across seven Nigerian states, and production-grade data engineering at organisations including E.ON Next Energy and Solihull Metropolitan Borough Council. I hold an MSc in Applied Data Science with Distinction (University of Sunderland, 2023).
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              Currently based in Abuja, Nigeria, I co-founded Xpresshare LTD and am actively building AI-powered platforms for African health, civic, and logistics contexts. I hold Microsoft Azure Data Engineer Associate and Databricks Certified Data Engineer certifications.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Years Experience', value: '13+' },
                { label: 'Certifications', value: '9+' },
                { label: 'Publications', value: '3' },
                { label: 'Countries Active', value: '5+' },
              ].map(s => (
                <div key={s.label} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                  <div className="text-3xl font-bold text-blue-400">{s.value}</div>
                  <div className="text-slate-400 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((g) => (
                <div key={g.category}>
                  <p className="text-blue-400 text-sm font-semibold mb-2 uppercase tracking-wider">{g.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map(s => (
                      <span key={s} className="bg-slate-800 border border-slate-600 text-slate-300 text-xs px-3 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-xl font-bold text-white mb-8 text-center">Career Timeline</h3>
          <div className="relative border-l-2 border-blue-500/40 ml-4 space-y-8">
            {experience.map((e, i) => (
              <div key={i} className="relative pl-8">
                <div className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-blue-500 border-4 border-slate-900"></div>
                <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">{e.year}</p>
                <p className="text-white font-semibold">{e.role}</p>
                <p className="text-slate-400 text-sm">{e.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
