export interface Project {
    id: number;
    title: string;
    description: string;
    duration: string;
    startDate: string;
    endDate: string;
    logo: string;
    technologies: string;
    image: string;
    url: string;
    githubUrl: string;
    bullets: string;
}

export interface Education {
    id: number;
    course: string;
    institution: string;
    startDate: string;
    endDate: string;
    location: string;
    cgpa: string;
    duration: string;
    description: string;
}

export interface Experience {
    id: number;
    role: string;
    company: string;
    startDate: string;
    endDate: string;
    location: string;
    duration: string;
    description: string;
    mode: string;
    bullets: string;
}

export interface Data {
    name: string;
    contact: string;
    dob: string;
    age: number;
    headline: string;
    headlineGradient: string;
    email: string;
    url: string;
    instagram: string;
    linkedIn: string;
    github: string;
    location: string;
    whatsapp: string;
    resume: string;
    aboutHeadline: string;
    aboutHeading: string;
    aboutContent: string;
    degree: string;
}

export interface Skill {
    id: number;
    title: string;
    image: string;
    level: string;
}

export interface Content {
    projects: Project[];
    experience: Experience[];
    education: Education[];
    skills: Skill[];
    data: Data[];
}