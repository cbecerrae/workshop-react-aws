import { hasText } from '../utils/portfolio'

export function Footer({ personal = {} }) {
  return (
    <footer className="footer">
      <p>
        {hasText(personal.name) ? personal.name : 'Portafolio profesional'} · {new Date().getFullYear()}
      </p>
    </footer>
  )
}
