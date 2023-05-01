import * as React from 'react'
import { Main } from '../types'
import { LocaleFlag } from './LocaleFlag'

interface DataProps {
  data: Main
}

export const Header: React.FunctionComponent<DataProps> = (props) => {
  const {
    description,
    headerAbout,
    headerContact,
    headerHome,
    headerResume,
    headerWorks,
    introductionText,
    name,
    occupation,
    occupationText,
  } = props.data
  const networks = props.data.social.map((network) => (
    <li key={network.name}>
      <a href={network.url}>
        <i className={network.className} />
      </a>
    </li>
  ))

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
          <li className="current">
            <a className="smoothscroll" href="#home">
              {headerHome}
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              {headerAbout}
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              {headerResume}
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              {headerWorks}
            </a>
          </li>
          {/*<li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>*/}
          <li>
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
