import * as React from 'react'
import { Main } from '../types'
import { useNavObserver } from '../useNavObserver'
import { LocaleFlag } from './LocaleFlag'

interface DataProps {
  data: Main
}

export const SectionId = {
  About: 'about',
  Contact: 'contact',
  Home: 'home',
  Portfolio: 'portfolio',
  Resume: 'resume',
  // Testimonials: 'testimonials',
}

export const Header: React.FunctionComponent<DataProps> = (props) => {
  const { description, introductionText, name, occupation, occupationText } = props.data
  const { headerAbout, headerContact, headerHome, headerPortfolio, headerResume } =
    props.data.headerSection
  const networks = props.data.social.map((network) => (
    <li key={network.name}>
      <a href={network.url}>
        <i className={network.className} />
      </a>
    </li>
  ))

  const [currentSection, setCurrentSection] = React.useState<typeof SectionId | null>(null)
  const navSections = React.useMemo(
    () => [
      SectionId.About,
      SectionId.Contact,
      SectionId.Home,
      SectionId.Portfolio,
      SectionId.Resume,
      // SectionId.Testimonials,
    ],
    [],
  )

  const intersectionHandler = React.useCallback((section: typeof SectionId | null) => {
    if (section) {
      setCurrentSection(section)
    }
  }, [])

  useNavObserver(navSections.map((section) => `#${section}`).join(','), intersectionHandler)

  const getClassName = (section: typeof SectionId): string => {
    if (section === currentSection) {
      return 'current'
    } else {
      return ''
    }
  }

  return (
    <header id="home" style={{ backgroundImage: 'url(images/header-background.jpg)' }}>
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className={getClassName('home' as unknown as typeof SectionId)}>
            <a className="smoothscroll" href="#home">
              {headerHome}
            </a>
          </li>
          <li className={getClassName('about' as unknown as typeof SectionId)}>
            <a className="smoothscroll" href="#about">
              {headerAbout}
            </a>
          </li>
          <li className={getClassName('resume' as unknown as typeof SectionId)}>
            <a className="smoothscroll" href="#resume">
              {headerResume}
            </a>
          </li>
          <li className={getClassName('portfolio' as unknown as typeof SectionId)}>
            <a className="smoothscroll" href="#portfolio">
              {headerPortfolio}
            </a>
          </li>
          {/*<li className={getClassName('testimonials' as unknown as typeof SectionId)}><a className="smoothscroll" href="#testimonials">Testimonials</a></li>*/}
          <li className={getClassName('contact' as unknown as typeof SectionId)}>
            <a className="smoothscroll" href="#contact">
              {headerContact}
            </a>
          </li>
          <li>
            <LocaleFlag country="united-kingdom" />
          </li>
          <li>
            <LocaleFlag country="germany" />
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            {introductionText} {name}.
          </h1>
          <h3>
            {occupationText} <span>{occupation}</span>. {description}.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle" />
        </a>
      </p>
    </header>
  )
}
