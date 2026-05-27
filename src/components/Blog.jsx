import { FiExternalLink } from 'react-icons/fi'

export default function Blog() {
  const publications = [
    {
      id: 1,
      type: 'Journal Article',
      title: 'Health systems preparedness to provide post-abortion care: Assessment of health facilities in Burkina Faso, Kenya and Nigeria',
      authors: 'Juma, K., Ouedraogo, R., Adjei, J., Sie, A., Mamadou, O., Emma-Echiegu, N., Eton, J., et al.',
      year: '2022',
      venue: 'BMC Health Services Research',
      link: 'https://doi.org/10.21203/rs.3.rs-769638/v2',
    },
    {
      id: 2,
      type: 'Report',
      title: 'Quality of Post-Abortion Care in Nigeria',
      authors: 'Ebonyi State University & African Population and Health Research Center',
      year: '2020',
      venue: 'APHRC: Nairobi',
      link: 'http://dx.doi.org/10.13140/RG.2.2.29698.81607',
    },
    {
      id: 3,
      type: 'Report',
      title: 'Report of Training Needs Assessment for Community Health Workers in South-South Geopolitical Region of Nigeria',
      authors: 'Bennibor, S., Ngobua, S., Bailey, R., Alozie, A., Eton, J., Puckett, A.',
      year: '2014',
      venue: 'CapacityPlus / IntraHealth International',
      link: 'http://www.capacityplus.org/report-training-needs-assessment-community-health-workers-nigeria',
    },
  ]

  const blogs = [
    {
      id: 4,
      type: 'Blog',
      title: 'Supporting Lifelong Learning among Nigerian Community Health Workers through a Targeted Assessment of Training Needs',
      authors: 'Bailey, R. & Eton, J.',
      year: 'Dec 2014',
      venue: 'CapacityPlus Blog',
      link: 'http://www.capacityplus.org/supporting-lifelong-learning-nigerian-community-health-workers',
    },
    {
      id: 5,
      type: 'Blog',
      title: 'Picturing Our Work: Delivering Over a Thousand Textbooks for Students in Nigeria',
      authors: 'Eton, J.',
      year: 'Jan 2014',
      venue: 'CapacityPlus Blog',
      link: 'http://www.capacityplus.org/picturing-our-work-delivering-over-a-thousand-textbooks-for-students-in-nigeria',
    },
    {
      id: 6,
      type: 'Blog',
      title: 'Nigeria Minister of Health Cites Importance of Health Workforce Issues',
      authors: 'Eton, J.',
      year: 'Oct 2013',
      venue: 'CapacityPlus Blog',
      link: 'http://www.capacityplus.org/nigeria-minister-of-health-cites-importance-of-health-workforce-issues',
    },
  ]

  const typeColors = {
    'Journal Article': 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    'Report': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    'Blog': 'bg-amber-500/20 text-amber-300 border-amber-500/40',
  }

  const Card = ({ item }) => (
    <article className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex justify-between items-start mb-3">
        <span className={`text-xs px-2.5 py-1 rounded-full border font-semibold ${typeColors[item.type]}`}>
          {item.type}
        </span>
        <span className="text-slate-500 text-xs">{item.year}</span>
      </div>
      <h3 className="text-white font-semibold leading-snug mb-2">{item.title}</h3>
      <p className="text-slate-500 text-xs mb-1">{item.authors}</p>
      <p className="text-blue-400 text-xs mb-4 italic">{item.venue}</p>
      <a href={item.link} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-400 transition-colors">
        <FiExternalLink size={13} /> Read Publication
      </a>
    </article>
  )

  return (
    <section id="blog" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-2">Research & Writing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Publications <span className="text-blue-400">&amp; Blogs</span>
          </h2>
        </div>

        <h3 className="text-slate-300 font-semibold text-lg mb-5">Peer-Reviewed Publications</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {publications.map(item => <Card key={item.id} item={item} />)}
        </div>

        <h3 className="text-slate-300 font-semibold text-lg mb-5">Field Blogs</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map(item => <Card key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  )
}
