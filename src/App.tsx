import * as React from 'react';
import './App.css';
import {About} from './Components/About';
import Contact from './Components/Contact';
import {Footer} from './Components/Footer';
import {Header} from './Components/Header';
// import Portfolio from './Components/Portfolio';
import {Resume} from './Components/Resume';
// import Testimonials from './Components/Testimonials';
import { Main, PortfolioType, ResumeProps, Testimonials as TestimonialProps } from './types';

interface AppState {
  resumeData: ResumeData;
}

interface ResumeData {
  main: Main;
  resume: ResumeProps;
  portfolio: PortfolioType;
  testimonials: TestimonialProps;
}

class App extends React.Component<{}, AppState> {

  constructor(props: any){
    super(props);
    this.state = {
      resumeData: {
        main: {
          address: {
            city: '',
            state: '',
            street: '',
            workCity: '',
            zip: '',
          },
          bio: '',
          contactMessage: '',
          description: '',
          email: '',
          image: '',
          name: '',
          occupation: '',
          phone: '',
          resumeDownload: '',
          social: [],
          website: ''
        },
        portfolio: {
          projects: []
        },
        resume: {
          education: [],
          skillMessage: '',
          skills: [],
          work: [],
        },
        testimonials: {
          testimonials: [],
        }
      }
    };
  }

  getData = () => {
    fetch('resumeData.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    this.setState({resumeData: data});
  });
  }

  componentDidMount(){
    this.getData();
  }

  public render() {
    return (
      <div className="App">
         <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        {/*<Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.testimonials}/>*/}
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
