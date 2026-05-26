export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Joseph Eton</h3>
            <p className="text-gray-300">
              Full Stack Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-primary transition">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition">About</a></li>
              <li><a href="#projects" className="hover:text-primary transition">Projects</a></li>
              <li><a href="#blog" className="hover:text-primary transition">Blog</a></li>
              <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Joseph Eton. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React, Vite, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
