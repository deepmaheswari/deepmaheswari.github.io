import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="section about">
      <p className="section-label">// 01 — About</p>
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <img src="/profile-photo.jpg" alt={profile.name} className="about-photo" />
        <div>
          <p>{profile.summary}</p>
          <div className="about-education">
            <div>
              <strong>M.S. Information Technology</strong> — Arizona State University, Tempe, AZ
              <div className="text-dim">GPA 3.9 / 4.0 · 05/2026</div>
            </div>
            <div>
              <strong>B.E. Computer Engineering</strong> — Kadi Sarva Vishwavidyalaya, India
              <div className="text-dim">GPA 3.55 / 4.0 · 06/2024</div>
            </div>
          </div>
          <span className="tag">🏆 The Tech Whisperer Award — Aramark</span>
        </div>
      </div>
    </section>
  )
}
