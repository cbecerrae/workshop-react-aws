import { useState } from 'react'
import { Section } from './Section'
import { hasItems, hasText } from '../utils/portfolio'

function ProjectCard({ project }) {
  const [imageVisible, setImageVisible] = useState(hasText(project.image))

  return (
    <article className="card project-card">
      {imageVisible && (
        <div className="project-card__media">
          <img src={project.image} alt={project.title || 'Imagen del proyecto'} onError={() => setImageVisible(false)} />
        </div>
      )}
      <div className="project-card__body">
        <div className="card__meta">
          {[project.type, project.date].filter(hasText).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        {hasText(project.title) && <h3>{project.title}</h3>}
        {hasText(project.description) && <p>{project.description}</p>}
        {hasText(project.role) && <p className="muted">Rol: {project.role}</p>}
        {hasItems(project.technologies) && (
          <div className="tag-list">
            {project.technologies.filter(hasText).map((item) => (
              <span className="tag tag--soft" key={item}>
                {item}
              </span>
            ))}
          </div>
        )}
        {hasItems(project.skills) && (
          <div className="tag-list">
            {project.skills.filter(hasText).map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        )}
        {hasText(project.link) && (
          <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
            Ver enlace
          </a>
        )}
      </div>
    </article>
  )
}

export function Projects({ projects = [] }) {
  const visibleProjects = projects.filter((project) => hasText(project?.title) || hasText(project?.description))
  if (visibleProjects.length === 0) return null

  return (
    <Section id="proyectos" eyebrow="Portafolio" title="Proyectos y experiencias destacadas">
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <ProjectCard key={`${project.title}-${project.date}`} project={project} />
        ))}
      </div>
    </Section>
  )
}
