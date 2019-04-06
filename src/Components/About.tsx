import * as React from 'react';
import { Main } from '../types';

interface DataProps {
  data: Main;
}

class About extends React.Component<DataProps> {
  render() {

      const { bio, email, name, phone, resumeDownload } = this.props.data;
      const profilepic= "images/"+this.props.data.image;
      const { city, state, street, zip } = this.props.data.address;

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Sujit Pradhan Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city}, {state} {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button" download="resume_Sujit_Pradhan"><i className="fa fa-download"/>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
