import { Section } from './Section'
import { hasItems, hasText } from '../utils/portfolio'

export function Education({ education = [] }) {
  const visibleEducation = education.filter((item) => hasText(item?.institution) || hasText(item?.degree))
  if (visibleEducation.length === 0) return null

  return (
    <Section id="educacion" eyebrow="Formación" title="Educación">
      <div className="card-grid">
        {visibleEducation.map((item) => (
          <article className="card" key={`${item.institution}-${item.degree}`}>
            <div className="card__meta">
              {[item.period, item.institution].filter(hasText).map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
            {hasText(item.degree) && <h3>{item.degree}</h3>}
            {hasText(item.description) && <p>{item.description}</p>}
            {hasItems(item.courses) && (
              <div className="tag-list">
                {item.courses.filter(hasText).map((course) => (
                  <span className="tag" key={course}>
                    {course}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
