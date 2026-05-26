import { FiCalendar, FiArrowRight } from 'react-icons/fi'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      excerpt: 'Learn how to use React Hooks to manage state and side effects in functional components.',
      date: 'May 15, 2024',
      category: 'React',
      slug: 'getting-started-react-hooks',
    },
    {
      id: 2,
      title: 'Building Responsive Designs with Tailwind CSS',
      excerpt: 'A comprehensive guide to creating beautiful, responsive websites using Tailwind CSS utility classes.',
      date: 'May 10, 2024',
      category: 'CSS',
      slug: 'responsive-designs-tailwind',
    },
    {
      id: 3,
      title: 'REST APIs Best Practices',
      excerpt: 'Explore best practices for designing and building RESTful APIs that scale and maintain consistency.',
      date: 'May 5, 2024',
      category: 'Backend',
      slug: 'rest-apis-best-practices',
    },
  ]

  return (
    <section id="blog" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-12 text-center">
          Latest <span className="text-primary">Blog Posts</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <FiCalendar />
                {post.date}
              </div>
              <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full mb-3">
                {post.category}
              </span>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <a
                href={`#blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-primary hover:text-blue-600 font-semibold transition"
              >
                Read More
                <FiArrowRight />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
