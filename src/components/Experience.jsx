import { Section } from './Section'
import { hasItems, hasText } from '../utils/portfolio'
import { Certificate } from './Certificate'

export function Experience({ experience = [] }) {
  const visibleExperience = experience.filter((item) => hasText(item?.company) || hasText(item?.position))
  if (visibleExperience.length === 0) return null

  return (
    <Section id="experiencia" eyebrow="Trayectoria" title="Experiencia profesional">
      <div className="timeline">
        {visibleExperience.map((item) => (
          <article className="timeline__item" key={`${item.company}-${item.period}`}>
            <div className="timeline__marker" />
            <div className="card">
              <div className="card__meta">
                {[item.period, item.company].filter(hasText).map((value) => (
                  <span key={value}>{value}</span>
                ))}
              </div>
              {hasText(item.position) && <h3>{item.position}</h3>}
              {hasText(item.description) && <p>{item.description}</p>}
              {hasItems(item.achievements) && (
                <ul className="clean-list">
                  {item.achievements.filter(hasText).map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              )}
              <Certificate file={item.certificate} image={item.certificateImage} position={item.position} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
