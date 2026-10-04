import { Section } from './Section'
import { hasText } from '../utils/portfolio'

export function Achievements({ achievements = [] }) {
  const visibleAchievements = achievements.filter((item) => hasText(item?.title) || hasText(item?.description))
  if (visibleAchievements.length === 0) return null

  return (
    <Section id="logros" eyebrow="Reconocimientos" title="Logros">
      <div className="card-grid">
        {visibleAchievements.map((item) => (
          <article className="card" key={`${item.title}-${item.year}`}>
            <div className="card__meta">
              {[item.year, item.organization].filter(hasText).map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
            {hasText(item.title) && <h3>{item.title}</h3>}
            {hasText(item.description) && <p>{item.description}</p>}
          </article>
        ))}
      </div>
    </Section>
  )
}
