import portfolio from './data/portfolio'
import { About } from './components/About'
import { Achievements } from './components/Achievements'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Languages } from './components/Languages'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Volunteering } from './components/Volunteering'
import { buildNavigation, getThemeStyle } from './utils/portfolio'

function App() {
  const navigation = buildNavigation(portfolio)
  const theme = portfolio.theme ?? {}

  return (
    <div
      className="app"
      data-mode={theme.mode || 'light'}
      data-font-size={theme.fontSize || 'medium'}
      data-font-family={theme.fontFamily || 'Inter'}
      data-image-shape={theme.profileImageShape || 'circle'}
      data-button-style={theme.buttonStyle || 'rounded'}
      data-section-spacing={theme.sectionSpacing || 'comfortable'}
      style={getThemeStyle(theme)}
    >
      <Navbar items={navigation} personal={portfolio.personal} />
      <main>
        <Hero personal={portfolio.personal} contact={portfolio.contact} />
        <About about={portfolio.about} />
        <Skills skills={portfolio.skills} />
        <Projects projects={portfolio.projects} />
        <Experience experience={portfolio.experience} />
        <Education education={portfolio.education} />
        <Volunteering volunteering={portfolio.volunteering} />
        <Certifications certifications={portfolio.certifications} />
        <Achievements achievements={portfolio.achievements} />
        <Languages languages={portfolio.languages} />
        <Contact personal={portfolio.personal} contact={portfolio.contact} />
      </main>
      <Footer personal={portfolio.personal} />
    </div>
  )
}

export default App
