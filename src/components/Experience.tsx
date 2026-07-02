import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section">
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
    </section>
  )
}
