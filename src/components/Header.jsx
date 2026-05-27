import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed w-full top-0 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/personal-portfolio/profile.jpg"
            alt="Joseph Eton"
            className="w-9 h-9 rounded-full object-cover object-top border-2 border-blue-400"
          />
          <span className="text-white font-bold text-lg">Joseph Eton</span>
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm font-medium">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a href="mailto:eton.joseph@gmail.com"
          className="hidden md:inline-flex bg-blue-500 hover:bg-blue-400 text-white text-sm px-4 py-2 rounded-lg font-semibold transition-all duration-300">
          Hire Me
        </a>

        {/* Mobile button */}
        <button className="md:hidden text-slate-300 text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden bg-slate-950 border-t border-slate-800 px-4 pb-4 space-y-4 pt-3">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}
                className="block text-slate-300 hover:text-blue-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
