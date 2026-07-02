import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
}

export default function Contact() {
  return (
    <motion.section id="contact" className="section" {...fadeInUp}>
      <p className="section-label">// 06 — Contact</p>
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-links">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </motion.section>
  )
}
