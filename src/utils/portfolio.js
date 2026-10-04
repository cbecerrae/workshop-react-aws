const colorThemes = {
  blue: '#2563eb',
  purple: '#7c3aed',
  green: '#16a34a',
  orange: '#ea580c',
  red: '#dc2626',
  pink: '#db2777',
  teal: '#0d9488',
}

export function hasText(value) {
  return typeof value === 'string' && value.trim().length > 0
}

export function hasItems(value) {
  return Array.isArray(value) && value.some((item) => {
    if (typeof item === 'string') return hasText(item)
    if (!item || typeof item !== 'object') return false
    return Object.values(item).some((field) => {
      if (Array.isArray(field)) return field.length > 0
      return hasText(String(field ?? ''))
    })
  })
}

export function hasAbout(about) {
  return Boolean(about && (hasText(about.headline) || hasText(about.description) || hasItems(about.interests)))
}

export function getInitials(name = '') {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase() || 'PF'
}

export function getContactLinks(personal = {}, contact = {}) {
  const links = [
    { label: 'Correo', value: personal.email, href: personal.email ? `mailto:${personal.email}` : '' },
    { label: 'Teléfono', value: personal.phone, href: personal.phone ? `tel:${personal.phone}` : '' },
    { label: 'LinkedIn', value: personal.linkedin, href: personal.linkedin },
    { label: 'GitHub', value: personal.github, href: personal.github },
    { label: 'Web', value: personal.website, href: personal.website },
    ...(Array.isArray(contact.links) ? contact.links : []),
  ]

  return links.filter((link) => hasText(link?.value) || hasText(link?.href))
}

export function buildNavigation(portfolio) {
  const sections = [
    { id: 'inicio', label: 'Inicio', visible: true },
    { id: 'sobre-mi', label: 'Sobre mí', visible: hasAbout(portfolio.about) },
    { id: 'habilidades', label: 'Habilidades', visible: hasItems(portfolio.skills) },
    { id: 'proyectos', label: 'Proyectos', visible: hasItems(portfolio.projects) },
    { id: 'experiencia', label: 'Experiencia', visible: hasItems(portfolio.experience) },
    { id: 'educacion', label: 'Educación', visible: hasItems(portfolio.education) },
    { id: 'voluntariado', label: 'Voluntariado', visible: hasItems(portfolio.volunteering) },
    { id: 'certificaciones', label: 'Certificaciones', visible: hasItems(portfolio.certifications) },
    { id: 'logros', label: 'Logros', visible: hasItems(portfolio.achievements) },
    { id: 'idiomas', label: 'Idiomas', visible: hasItems(portfolio.languages) },
    { id: 'contacto', label: 'Contacto', visible: getContactLinks(portfolio.personal, portfolio.contact).length > 0 },
  ]

  return sections.filter((section) => section.visible)
}

export function getThemeStyle(theme = {}) {
  const dark = theme.mode === 'dark'
  const accent = colorThemes[theme.colorTheme] || colorThemes.blue
  const primary = hasText(theme.primaryColor) ? theme.primaryColor : accent
  const background = hasText(theme.backgroundColor) ? theme.backgroundColor : (dark ? '#101114' : '#ffffff')
  const text = hasText(theme.textColor) ? theme.textColor : (dark ? '#f1f2f4' : '#1e293b')
  const numeric = (value, fallback, min, max) =>
    typeof value === 'number' && Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback
  const fontSize = { small: 14, medium: 16, large: 20 }[theme.fontSize] || 16

  return {
    '--primary-color': primary,
    '--accent-color': hasText(theme.primaryColor) ? primary : (dark ? `color-mix(in srgb, ${accent} 65%, white)` : accent),
    '--background-color': background,
    '--text-color': text,
    '--font-size': `${numeric(theme.fontSize, fontSize, 12, 24)}px`,
    '--heading-size': typeof theme.headingSize === 'number' ? `${numeric(theme.headingSize, 40, 24, 64)}px` : '2.5em',
    '--hero-size': typeof theme.heroSize === 'number' ? `${numeric(theme.heroSize, 72, 32, 100)}px` : '4.5em',
    '--border-width': `${numeric(theme.borderWidth, 1, 0, 4)}px`,
    '--card-radius': `${numeric(theme.borderRadius, 8, 0, 8)}px`,
    '--line-height': numeric(theme.lineHeight, 1.6, 1.2, 2),
  }
}
