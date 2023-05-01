import * as React from 'react'
import './App.css'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
// import Portfolio from './Components/Portfolio';
import { Resume } from './Components/Resume'
import { Context } from './Context'
import { Main, PortfolioType, ResumeProps, Testimonials as TestimonialProps } from './types'
// import Testimonials from './Components/Testimonials';

interface ResumeData {
  main: Main;
  resume: ResumeProps;
  portfolio: PortfolioType;
  testimonials: TestimonialProps;
}

export const App: React.FunctionComponent = () => {
  const localeContext = React.useContext(Context)
  const [context, setContext] = React.useState(localeContext.locale)
  const url = `resumeData_${context}.json`

  const [resumeData, setResumeData] = React.useState<ResumeData>({} as ResumeData)
  const [loading, setLoading] = React.useState(true);

  React.useEffect( () => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetch(url);
        if(data.status === 200) {
          const json = await data.json();
          setResumeData(json);
        }

      } catch (error) {
        throw error
      } finally {
        setLoading(false)
      }

    }
    fetchData()
  },[url])




  return (
    <div className="App">
      {!loading && (
        <Context.Provider value={{locale:context, setLocale: setContext}}>
          <Header data={resumeData.main} />
          <About data={resumeData.main} />
          <Resume data={resumeData.resume} />
          {/*<Portfolio data={resumeData.portfolio}/>
        <Testimonials data={resumeData.testimonials}/>*/}
          <Contact data={resumeData.main} />
          <Footer data={resumeData.main} />
        </Context.Provider>
      )}
    </div>
  )
}
