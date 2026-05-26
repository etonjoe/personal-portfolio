import { FiArrowDown } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6">
          Hi, I'm <span className="text-primary">Joseph Eton</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Full Stack Developer | Web Designer | Tech Enthusiast
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          I create beautiful, functional web experiences that solve real-world problems. 
          Let's build something amazing together.
        </p>
        
        <div className="flex gap-4 justify-center mb-16 flex-wrap">
          <a
            href="#projects"
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition duration-300 font-semibold"
          >
            Get In Touch
          </a>
        </div>

        <div className="animate-bounce">
          <FiArrowDown className="text-primary text-3xl mx-auto" />
        </div>
      </div>
    </section>
  )
}
