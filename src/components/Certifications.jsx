import { Section } from './Section'
import { hasItems, hasText } from '../utils/portfolio'

export function Certifications({ certifications = [] }) {
  const visibleCertifications = certifications.filter((item) => hasText(item?.name) || hasText(item?.institution))
  if (visibleCertifications.length === 0) return null

  return (
    <Section id="certificaciones" eyebrow="Aprendizaje" title="Certificaciones y cursos">
      <div className="card-grid card-grid--compact">
        {visibleCertifications.map((item) => (
          <article className="card" key={`${item.name}-${item.year}`}>
            <div className="card__meta">
              {[item.year, item.institution].filter(hasText).map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
            {hasText(item.name) && <h3>{item.name}</h3>}
            {hasText(item.credential) && (
              <a className="text-link" href={item.credential} target="_blank" rel="noreferrer">
                Ver credencial
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
