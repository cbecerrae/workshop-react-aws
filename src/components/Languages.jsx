import { Section } from './Section'
import { hasText } from '../utils/portfolio'

export function Languages({ languages = [] }) {
  const visibleLanguages = languages.filter((item) => hasText(item?.name) || hasText(item?.level))
  if (visibleLanguages.length === 0) return null

  return (
    <Section id="idiomas" eyebrow="Comunicación" title="Idiomas">
      <div className="language-list">
        {visibleLanguages.map((item) => (
          <article className="language-item" key={`${item.name}-${item.level}`}>
            {hasText(item.name) && <strong>{item.name}</strong>}
            {hasText(item.level) && <span>{item.level}</span>}
          </article>
        ))}
      </div>
    </Section>
  )
}
