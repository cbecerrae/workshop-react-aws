import { hasText } from '../utils/portfolio'

export function Section({ id, eyebrow, title, children, className = '' }) {
  if (!children) return null

  return (
    <section id={id} className={`section ${className}`}>
      <div className="section__inner">
        {(hasText(eyebrow) || hasText(title)) && (
          <div className="section__heading">
            {hasText(eyebrow) && <span className="eyebrow">{eyebrow}</span>}
            {hasText(title) && <h2>{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
