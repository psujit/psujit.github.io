import * as React from 'react'
import { Main } from '../types'

interface DataProps {
  data: Main
}

export const About: React.FunctionComponent<DataProps> = (props) => {
  const { downloadResume, email, name, phone, resumeDownload } = props.data
  const profilepic = 'images/' + props.data.image
  const { city, state, street, zip } = props.data.address

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={profilepic} alt="Sujit Pradhan Profile Pic" />
        </div>
        <div className="nine columns main-col">
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  {city}, {state} {zip}
                </span>
                <br />
                {phone && <span>{phone}</span> && <br />}
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button" download="resume_Sujit_Pradhan">
                  <i className="fa fa-download" />
                  {downloadResume}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
