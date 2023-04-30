import * as React from "react";
import {Main, PortfolioType, ResumeProps, Testimonials as TestimonialProps} from "./types";
interface ResumeData {
    main: Main;
    resume: ResumeProps;
    portfolio: PortfolioType;
    testimonials: TestimonialProps;
}

export const useFetch = (url: string) => {

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
    return {loading, resumeData}
}
