import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
}

export default function Skills() {
  return (
    <motion.section id="skills" className="section" {...fadeInUp}>
      <p className="section-label">// 02 — Skills</p>
      <h2 className="section-title">Skills</h2>
      {skillGroups.map((group) => (
        <div key={group.category} className="skill-group">
          <h3 className="skill-category">{group.category}</h3>
          <div>
            {group.items.map((item) => (
              <span key={item} className="tag">{item}</span>
            ))}
          </div>
        </div>
      ))}
    </motion.section>
  )
}
