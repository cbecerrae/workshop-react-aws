import { Section } from './Section'
import { hasText } from '../utils/portfolio'

export function Volunteering({ volunteering = [] }) {
  const visibleVolunteering = volunteering.filter((item) => hasText(item?.organization) || hasText(item?.role))
  if (visibleVolunteering.length === 0) return null

  return (
    <Section id="voluntariado" eyebrow="Impacto" title="Voluntariado y liderazgo">
      <div className="card-grid">
        {visibleVolunteering.map((item) => (
          <article className="card" key={`${item.organization}-${item.period}`}>
            <div className="card__meta">
              {[item.period, item.organization].filter(hasText).map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
            {hasText(item.role) && <h3>{item.role}</h3>}
            {hasText(item.description) && <p>{item.description}</p>}
          </article>
        ))}
      </div>
    </Section>
  )
}
