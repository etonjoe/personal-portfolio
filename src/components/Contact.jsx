import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi'
import { FiMessageCircle } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const whatsappMessage = `Hi Joseph, I'm interested in discussing a project with you.`
  const whatsappLink = `https://wa.me/2348035913519?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-12 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-600 mb-8">
              Have a question or want to work together? Feel free to reach out! I'm always excited to hear about new opportunities and projects.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <FiMail className="text-primary text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-secondary">Email</h4>
                  <a href="mailto:your-email@example.com" className="text-gray-600 hover:text-primary">
                    your-email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiPhone className="text-primary text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-secondary">Phone</h4>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-primary">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiMapPin className="text-primary text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-secondary">Location</h4>
                  <p className="text-gray-600">Your City, Your Country</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="font-semibold text-secondary mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/joseph-eton/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white p-3 rounded-lg hover:bg-blue-600 transition"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white p-3 rounded-lg hover:bg-blue-600 transition"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white p-3 rounded-lg hover:bg-blue-600 transition"
                >
                  <FiTwitter size={20} />
                </a>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div>
              <h4 className="font-semibold text-secondary mb-4">Quick Contact</h4>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition font-semibold w-fit"
              >
                <FiMessageCircle size={20} />
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-secondary font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-secondary font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-secondary font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-secondary font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-600 transition font-semibold"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
