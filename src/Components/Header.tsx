import * as React from 'react'
import { Main } from '../types'
import { useTranslation } from 'react-i18next'

interface DataProps {
  data: Main
}

export const Header: React.FunctionComponent<DataProps> = (props) => {
  const { t } = useTranslation()
  const { description, introductionText, name, occupation, occupationText } = props.data
  // const workCity= props.data.address.workCity;
  const networks = props.data.social.map((network) => (
    <li key={network.name}>
      <a href={network.url}>
        <i className={network.className} />
      </a>
    </li>
  ))

  return (
    <header
      id="home"
      style={{
        background: '#161415 no-repeat top center',
        backgroundImage: 'url(images/header-background.jpg)',
      }}
    >
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
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          {/*<li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>*/}
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            {t(introductionText)} {name}.
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
