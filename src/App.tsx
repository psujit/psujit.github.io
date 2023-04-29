import * as React from "react";
import "./App.css";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
// import Portfolio from './Components/Portfolio';
import { Resume } from "./Components/Resume";
import { useFetch } from "./useFetch";
// import Testimonials from './Components/Testimonials';

export const App: React.FunctionComponent = () => {
  const { loading, resumeData } = useFetch("resumeData.json");

  return (
    <div className="App">
      {!loading && (
        <>
          <Header data={resumeData.main} />
          <About data={resumeData.main} />
          <Resume data={resumeData.resume} />
          {/*<Portfolio data={resumeData.portfolio}/>
        <Testimonials data={resumeData.testimonials}/>*/}
          <Contact data={resumeData.main} />
          <Footer data={resumeData.main} />
        </>
      )}
    </div>
  );
};
