export interface Address {
  city: string
  state: string
  street: string
  workCity: string
  zip: string
}

export interface Education {
  description: string
  degree: string
  graduated: string
  school: string
}

export interface Main {
  address: Address
  bio: string
  contactMessage: string
  description: string
  email: string
  image: string
  introductionText: string
  name: string
  occupation: string
  occupationText: string
  phone: string
  resumeDownload: string
  social: Social[]
  website: string
}

export interface Project {
  category: string
  image: string
  title: string
  url: string
}

export interface PortfolioType {
  projects: Project[]
}

export interface ResumeProps {
  skillMessage: string
  education: Education[]
  work: Work[]
  skills: Skills[]
}

export interface Skills {
  name: string
  level: string
}

export interface Social {
  className: string
  name: string
  url: string
}

export interface Testimonial {
  text: string
  user: string
}

export interface Testimonials {
  testimonials: Testimonial[]
}

export interface Work {
  company: string
  description: string
  title: string
  years: string
}
