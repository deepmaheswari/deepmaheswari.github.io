import { certifications } from '../data/certifications'

export default function Certifications() {
  return (
    <section id="certifications" className="section">
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
    </section>
  )
}
