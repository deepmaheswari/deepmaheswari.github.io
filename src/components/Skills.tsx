import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section">
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
    </section>
  )
}
