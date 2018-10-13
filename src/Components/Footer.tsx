import * as React from 'react';
import { Main } from '../types';

interface DataProps {
  data: Main;
}

class Footer extends React.Component<DataProps> {
  render () {

      const networks= this.props.data.social.map((network) => 
        <li key={network.name}><a href={network.url}><i className={network.className}/></a></li>
      )
    

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2018 Sujit Pradhan</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"/></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
