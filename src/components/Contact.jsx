import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiMessageCircle } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const whatsappMessage = `Hi Joseph, I'd like to discuss a project with you.`
  const whatsappLink = `https://wa.me/2348035913519?text=${encodeURIComponent(whatsappMessage)}`

  const contacts = [
    { icon: FiMail, label: 'Email', value: 'eton.joseph@gmail.com', href: 'mailto:eton.joseph@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '+234 803 591 3519', href: 'tel:+2348035913519' },
    { icon: FiMapPin, label: 'Location', value: 'Abuja, Nigeria', href: null },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-2">Reach Out</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side */}
          <div>
            <p className="text-slate-400 leading-relaxed mb-8">
              Available for data science consulting, engineering contracts, research collaborations, and speaking engagements. Based in Abuja, Nigeria — open to remote and international opportunities.
            </p>

            <div className="space-y-5 mb-8">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a href={href} className="text-slate-200 hover:text-blue-400 transition-colors font-medium">{value}</a>
                    ) : (
                      <p className="text-slate-200 font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3 mb-8">
              {[
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/joseph-eton/', label: 'LinkedIn' },
                { icon: FiGithub, href: 'https://github.com/etonjoe', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-green-600/20">
              <FiMessageCircle size={18} /> WhatsApp Me
            </a>
          </div>

          {/* Form */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Project inquiry' },
              ].map(f => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="block text-slate-400 text-sm mb-1.5">{f.label}</label>
                  <input
                    type={f.type} id={f.id} name={f.id}
                    value={formData[f.id]} onChange={handleChange} required
                    placeholder={f.placeholder}
                    className="w-full bg-slate-800 border border-slate-600 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 placeholder-slate-600 transition-colors"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-slate-400 text-sm mb-1.5">Message</label>
                <textarea
                  id="message" name="message"
                  value={formData.message} onChange={handleChange} required
                  rows="5" placeholder="Tell me about your project..."
                  className="w-full bg-slate-800 border border-slate-600 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 placeholder-slate-600 resize-none transition-colors"
                ></textarea>
              </div>
              <button type="submit"
                className="w-full bg-blue-500 hover:bg-blue-400 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/20">
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
