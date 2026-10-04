import { useState } from 'react'
import { hasText } from '../utils/portfolio'

export function Navbar({ items, personal }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="navbar">
      <a className="navbar__brand" href="#inicio" onClick={() => setIsOpen(false)}>
        {hasText(personal?.name) ? personal.name : 'Portafolio'}
      </a>
      <button
        className="navbar__toggle"
        type="button"
        aria-label="Abrir menú"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={isOpen ? 'navbar__links is-open' : 'navbar__links'} aria-label="Navegación principal">
        {items.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
