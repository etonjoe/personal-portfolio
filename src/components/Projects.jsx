import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'CrimeIQ – Nigeria Crime Analytics',
      description: 'Full-stack crime research and analytics dashboard with React, Node.js, and PostgreSQL using Nigeria FY 2024 crime data. Includes interactive maps, trend analysis, and predictive modelling.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Power BI'],
      github: 'https://github.com/etonjoe',
      live: '#',
      tag: 'Data / ML',
    },
    {
      id: 2,
      title: 'CommunityPulse – Health Early Warning',
      description: 'Multilingual health event early warning system with a full ML pipeline, FastAPI backend, Streamlit dashboard, and Airflow DAG. Supports Hausa, Yoruba, Igbo, and English communities.',
      technologies: ['Python', 'FastAPI', 'Streamlit', 'Airflow', 'NLP'],
      github: 'https://github.com/etonjoe',
      live: '#',
      tag: 'Public Health',
    },
    {
      id: 3,
      title: '247Ride – Multi-Modal Transport App',
      description: 'A Nigerian multi-modal transport booking super-app with real-time tracking, route planning, and driver matching across buses, taxis, and ride-hailing services.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Maps API'],
      github: 'https://github.com/etonjoe',
      live: '#',
      tag: 'Full Stack',
    },
    {
      id: 4,
      title: 'Distropex – Distress Asset Exchange',
      description: 'A 9-stage supervised transaction platform for distress asset trading in Nigeria. Secure escrow, seller verification, and automated deal-flow management.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com/etonjoe',
      live: '#',
      tag: 'Fintech',
    },
    {
      id: 5,
      title: 'Naija-CivicConnect',
      description: 'Civic engagement platform with OTP authentication, community projects board, issue reporting, and an admin dashboard for Nigerian local governments.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'OTP Auth'],
      github: 'https://github.com/etonjoe',
      live: '#',
      tag: 'Civic Tech',
    },
    {
      id: 6,
      title: 'Staff Rota Automation WebApp',
      description: 'Intelligent staff scheduling webapp that ingests Excel rota files and automates shift allocation, conflict detection, and PDF report generation across departments.',
      technologies: ['React', 'Python', 'Excel/VBA', 'Pandas'],
      github: 'https://github.com/etonjoe',
      live: '#',
      tag: 'Automation',
    },
  ]

  const tagColors = {
    'Data / ML': 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    'Public Health': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    'Full Stack': 'bg-violet-500/20 text-violet-300 border-violet-500/40',
    'Fintech': 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    'Civic Tech': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    'Automation': 'bg-rose-500/20 text-rose-300 border-rose-500/40',
  }

  return (
    <section id="projects" className="py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-2">What I Build</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs px-2.5 py-1 rounded-full border font-semibold ${tagColors[project.tag]}`}>
                  {project.tag}
                </span>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="text-slate-500 hover:text-blue-400 transition-colors">
                    <FiGithub size={18} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="text-slate-500 hover:text-blue-400 transition-colors">
                    <FiExternalLink size={18} />
                  </a>
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2 leading-snug">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-slate-800 text-slate-400 text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/etonjoe" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-600 text-slate-300 hover:border-blue-400 hover:text-blue-400 px-6 py-3 rounded-lg transition-all duration-300">
            <FiGithub /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
