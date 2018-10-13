import * as React from 'react';
import { Main } from '../types';

interface DataProps {
  data: Main;
}

class About extends React.Component<DataProps> {
  render() {

      const name = this.props.data.name;
      const profilepic= "images/"+this.props.data.image;
      const bio = this.props.data.bio;
      const street = this.props.data.address.street;
      const city = this.props.data.address.city;
      const state = this.props.data.address.state;
      const zip = this.props.data.address.zip;
      const phone= this.props.data.phone;
      const email = this.props.data.email;
      const resumeDownload = this.props.data.resumeDownload;

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
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button" download="true"><i className="fa fa-download"/>Download Resume</a>
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
