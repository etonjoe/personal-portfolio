import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with product catalog, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://via.placeholder.com/400x250?text=E-Commerce+Platform',
      github: '#',
      live: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'https://via.placeholder.com/400x250?text=Task+Management',
      github: '#',
      live: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with real-time data, forecasts, and location-based features.',
      technologies: ['React', 'Weather API', 'Geolocation'],
      image: 'https://via.placeholder.com/400x250?text=Weather+Dashboard',
      github: '#',
      live: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-12 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-primary text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-primary hover:text-blue-600 transition"
                  >
                    <FiGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-primary hover:text-blue-600 transition"
                  >
                    <FiExternalLink /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
