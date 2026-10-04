import { Section } from './Section'
import { hasAbout, hasItems, hasText } from '../utils/portfolio'

export function About({ about }) {
  if (!hasAbout(about)) return null

  return (
    <Section id="sobre-mi" eyebrow="Perfil profesional" title="Sobre mí">
      <div className="about">
        <div>
          {hasText(about.headline) && <h3>{about.headline}</h3>}
          {hasText(about.description) && <p>{about.description}</p>}
        </div>
        {hasItems(about.interests) && (
          <div className="tag-list" aria-label="Áreas de interés">
            {about.interests.filter(hasText).map((interest) => (
              <span className="tag" key={interest}>
                {interest}
              </span>
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}
