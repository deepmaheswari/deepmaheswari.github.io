import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
}

export default function Projects() {
  return (
    <motion.section id="projects" className="section" {...fadeInUp}>
      <p className="section-label">// 04 — Projects</p>
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </motion.section>
  )
}
