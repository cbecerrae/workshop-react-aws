import { getContactLinks, getInitials, hasText } from '../utils/portfolio'

export function Hero({ personal = {}, contact = {} }) {
  const links = getContactLinks(personal, contact).slice(0, 4)
  const details = [personal.university, personal.career, personal.cycle, personal.location].filter(hasText)

  return (
    <section id="inicio" className="hero">
      <div className="hero__content">
        <div className="hero__copy">
          {hasText(personal.title) && <p className="hero__kicker">{personal.title}</p>}
          <h1>{hasText(personal.name) ? personal.name : 'Tu nombre aquí'}</h1>
          {details.length > 0 && <p className="hero__details">{details.join(' · ')}</p>}
          <div className="hero__actions">
            <a className="button button--primary" href="#contacto">
              Contactar
            </a>
            {hasText(personal.linkedin) && (
              <a className="button button--secondary" href={personal.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            )}
          </div>
          {links.length > 0 && (
            <div className="hero__links" aria-label="Enlaces profesionales">
              {links.map((link) => (
                <a key={`${link.label}-${link.href || link.value}`} href={link.href || link.value} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="profile-card" aria-label="Fotografía de perfil">
          <div className="profile-card__image">
            <span>{getInitials(personal.name)}</span>
            {hasText(personal.photo) && <img src={personal.photo} alt={personal.name || 'Foto de perfil'} />}
          </div>
        </div>
      </div>
    </section>
  )
}
