export interface Address {
    city: string;
    state: string;
    street: string;
    zip: string;
}

export interface Education {
    description: string;
    degree: string;
    graduated: string;
    school: string;
}

export interface Main {
    address: Address;
    bio: string;
    contactMessage: string;
    contactNameField: string;
    contactEmailField: string;
    contactMessageField: string;
    contactSubmitField: string;
    downloadResume:  string;
    description: string;
    email: string;
    headerHome: string;
    headerAbout: string;
    headerResume: string;
    headerWorks: string;
    headerContact: string;
    image: string;
    introductionText: string;
    name: string;
    occupation: string;
    occupationText: string;
    phone: string;
    resumeDownload: string;
    social: Social[]
    website: string;
}

export interface Project {
    category: string;
    image: string;
    title: string;
    url: string;
}

export interface PortfolioType {
    header: string;
    projects: Project[];
}


export interface ResumeProps {
    education: Education[];
    work: Work[];
    skills: Skills[];
}

export interface Skills {
    name: string;
    level: string;
}

export interface Social {
    className: string;
    name: string;
    url: string;
}

export interface Testimonial {
    text: string;
    user: string;
}

export interface Testimonials {
    testimonials: Testimonial[];
}

export interface Work {
    company: string;
    description: string;
    title: string;
    years: string;
}