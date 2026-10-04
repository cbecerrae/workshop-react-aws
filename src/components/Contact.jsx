import { Section } from './Section'
import { getContactLinks, hasText } from '../utils/portfolio'

export function Contact({ personal = {}, contact = {} }) {
  const links = getContactLinks(personal, contact)
  if (links.length === 0 && !hasText(contact.message)) return null

  return (
    <Section id="contacto" eyebrow="Conversemos" title="Contacto" className="section--contact">
      <div className="contact-panel">
        {hasText(contact.message) && <p>{contact.message}</p>}
        {links.length > 0 && (
          <div className="contact-links">
            {links.map((link) => (
              <a
                className="button button--secondary"
                href={link.href || link.value}
                key={`${link.label}-${link.href || link.value}`}
                target={String(link.href || link.value).startsWith('mailto:') || String(link.href || link.value).startsWith('tel:') ? undefined : '_blank'}
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}
