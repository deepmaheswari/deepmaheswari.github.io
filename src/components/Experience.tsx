import { motion } from 'framer-motion'
import { experience } from '../data/experience'

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
}

export default function Experience() {
  return (
    <motion.section id="experience" className="section" {...fadeInUp}>
      <p className="section-label">// 03 — Experience</p>
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experience.map((entry) => (
          <div key={entry.company} className="timeline-entry">
            <div className="timeline-marker" />
            <div>
              <h3 className="timeline-role">{entry.role}</h3>
              <div className="timeline-meta">
                <span>{entry.company}</span>
                <span className="text-dim"> · {entry.dates}</span>
              </div>
              <ul>
                {entry.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
