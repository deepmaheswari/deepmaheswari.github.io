import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <p className="section-label">// 06 — Contact</p>
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-links">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  )
}
