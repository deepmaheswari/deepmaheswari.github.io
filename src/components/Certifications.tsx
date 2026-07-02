import { motion } from 'framer-motion'
import { certifications } from '../data/certifications'

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
}

export default function Certifications() {
  return (
    <motion.section id="certifications" className="section" {...fadeInUp}>
      <p className="section-label">// 05 — Certifications & Awards</p>
      <h2 className="section-title">Certifications & Awards</h2>
      <div className="cert-list">
        {certifications.map((cert) => (
          <div key={cert.name} className="cert-item">
            <strong>{cert.name}</strong>
            <span className="text-dim"> — {cert.type}, {cert.issuer}</span>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
