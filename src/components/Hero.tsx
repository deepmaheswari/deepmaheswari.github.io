import { profile } from '../data/profile'
import HeroScene from './HeroScene'

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="hero-content">
        <p className="section-label">// Portfolio</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a href="/resume.pdf" download className="btn btn-primary">Download Resume</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
      <div className="hero-scene">
        <HeroScene />
      </div>
    </section>
  )
}
