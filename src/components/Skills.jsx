import { Section } from './Section'
import { hasItems, hasText } from '../utils/portfolio'

export function Skills({ skills = [] }) {
  const visibleSkills = skills.filter((group) => hasText(group?.category) || hasItems(group?.items))
  if (visibleSkills.length === 0) return null

  return (
    <Section id="habilidades" eyebrow="Competencias" title="Habilidades">
      <div className="skills-grid">
        {visibleSkills.map((group) => (
          <article className="card" key={group.category}>
            {hasText(group.category) && <h3>{group.category}</h3>}
            {hasItems(group.items) && (
              <div className="tag-list">
                {group.items.filter(hasText).map((item) => (
                  <span className="tag" key={item}>
                    {item}
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
