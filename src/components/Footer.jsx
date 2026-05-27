import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/personal-portfolio/profile.jpg" alt="Joseph Eton"
                className="w-10 h-10 rounded-full object-cover object-top border-2 border-blue-400" />
              <span className="text-white font-bold text-lg">Joseph Eton</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Data Scientist and Engineer building AI-powered solutions for health, civic, and business challenges across Africa and globally.
            </p>
          </div>

          <div>
            <h3 className="text-slate-300 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-500 text-sm">
              {[['Home','#home'],['About','#about'],['Projects','#projects'],['Publications','#blog'],['Contact','#contact']].map(([n,h]) => (
                <li key={n}><a href={h} className="hover:text-blue-400 transition-colors">{n}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-slate-300 font-semibold mb-4">Connect</h3>
            <div className="flex gap-3 mb-4">
              {[
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/joseph-eton/' },
                { icon: FiGithub, href: 'https://github.com/etonjoe' },
                { icon: FiMail, href: 'mailto:eton.joseph@gmail.com' },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="text-slate-500 text-xs">Abuja, Nigeria</p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs">
          <p>&copy; {currentYear} Joseph Eton. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with React, Vite &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
