import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 px-4 min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">

      {/* Background grid overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-52 h-52 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 blur-md opacity-60"></div>
              <img
                src="/personal-portfolio/profile.jpg"
                alt="Joseph Eton"
                className="relative w-full h-full rounded-full object-cover object-top border-4 border-blue-400 shadow-2xl"
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-3">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Joseph<br />
              <span className="text-blue-400">Eton</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-3 font-light">
              Data Scientist &amp; Engineer
            </p>
            <p className="text-slate-400 mb-8 max-w-xl leading-relaxed">
              13+ years transforming complex data into decisions. Public health researcher, cloud architect, and builder of AI-powered platforms for African contexts.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
              <a href="#projects"
                className="bg-blue-500 hover:bg-blue-400 text-white px-7 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-500/30">
                View Projects
              </a>
              <a href="#contact"
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-7 py-3 rounded-lg font-semibold transition-all duration-300">
                Hire Me
              </a>
            </div>

            {/* Social row */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://github.com/etonjoe" target="_blank" rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors text-xl">
                <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/joseph-eton/" target="_blank" rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors text-xl">
                <FiLinkedin />
              </a>
              <a href="mailto:eton.joseph@gmail.com"
                className="text-slate-400 hover:text-blue-400 transition-colors text-xl">
                <FiMail />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-blue-400 opacity-60">
        <FiArrowDown size={24} />
      </div>
    </section>
  )
}
