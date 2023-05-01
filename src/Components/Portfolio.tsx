import * as React from 'react'
import { PortfolioType } from '../types'

interface DataProps {
  data: PortfolioType
}

export const Portfolio: React.FunctionComponent<DataProps> = (props) => {
    const projects = props.data.projects.map((projects) => {
      const projectImage = 'images/' + projects.image
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link" />
              </div>
            </a>
          </div>
        </div>
      )
    })

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>{props.data.header}</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    )
}