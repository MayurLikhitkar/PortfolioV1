import react from '../assets/images/technologies/reactjs.png'
import node from '../assets/images/technologies/nodejs.png'
import typeScript from '../assets/images/technologies/typescript.png'
import javaScript from '../assets/images/technologies/javascript.png'
import mongoDB from '../assets/images/technologies/mongoDB.png'
import express from '../assets/images/technologies/expressjs.png'
import redux from '../assets/images/technologies/redux.png'
import tailwind from '../assets/images/technologies/tailwindcss.png'
import prisma from '../assets/images/technologies/prisma.png'
import mysql from '../assets/images/technologies/mysql.png'
import html from '../assets/images/technologies/html.png'
import css from '../assets/images/technologies/css.png'
import bootstrap from '../assets/images/technologies/bootstrap.png'
import git from '../assets/images/technologies/git.png'
import mui from '../assets/images/technologies/mui.png'
import { FaProjectDiagram, FaGamepad, FaFilm } from "react-icons/fa";
import { FaCode, FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { BiSolidUser } from "react-icons/bi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { LuSmartphone } from "react-icons/lu";
import { RiHome2Line } from "react-icons/ri";
import { BsBrowserChrome } from "react-icons/bs";
import { MdOutlineWysiwyg } from "react-icons/md";
import { IoMdMail } from 'react-icons/io'

export const navItems = [
    { title: "Home", key: "home", path: "/", hash: "", icon: RiHome2Line },
    { title: "About", key: "about", path: "/about", hash: "", icon: BiSolidUser },
    { title: "Experience", key: "experience", path: "/", hash: "experience", icon: HiOutlineBriefcase },
    { title: "Projects", key: "projects", path: "/", hash: "projects", icon: FaProjectDiagram },
    { title: "Skills", key: "skills", path: "/", hash: "skills", icon: FaCode },
    { title: "Contact", key: "contact", path: "/", hash: "contact", icon: LuSmartphone },
]

export const Whatsapp = 'https://api.whatsapp.com/send?phone=6260658118&text=Hello%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20learn%20more%20about%20your%20work.';
export const Instagram = 'https://www.instagram.com/likhitkar_mayur/';
export const Linkedin = 'https://www.linkedin.com/in/mayur-likhitkar/';
export const Github = 'https://github.com/MayurLikhitkar';
export const Email = 'mayurlikhitkar786@gmail.com';

export const contactInfo = [
    {
        icon: IoMdMail,
        title: "Email Me",
        contact: "mayurlikhitkar786@gmail.com",
        action: "mailto:mayurlikhitkar786@gmail.com",
    },
    {
        icon: IoCall,
        title: "Call Me",
        contact: "+91 6260658118",
        action: "tel:+916260658118",
    },
    {
        icon: FaLocationDot,
        title: "I'm Based In",
        contact: "Indore, Madhya Pradesh, India",
        action: "#",
    }
]

export const projects = [
    {
        id: 1,
        title: "JobCompass - Job Application Platform",
        description: "A full-stack MERN job portal where candidates can apply and employers can manage postings. Backend built with Node.js and Express.js, implementing secure user and admin authentication, dynamic routing, and CRUD operations with MongoDB. The frontend uses React for interactive UI and asynchronous API calls.",
        duration: "Aug 2024 - Sep 2024",
        icon: '<TbClockHour4 />',
        technologies: ["React", "Node", "MongoDB", 'Express', 'Bootstrap'],
        bullets: [
            'Used the third-party Fake Store API to handle real-world e-commerce environment without need to build full back-end',
            'Handled and applied asynchronous operations such as async/await and callback in React JS, mainly during API calls',
            'Currently Trying to manage/build whole application using Redux Toolkit'
        ],
    },
    {
        id: 2,
        title: "E-Shopp - Online Shopping Platform",
        description: "A responsive e-commerce web app built in React, integrating with a third-party Fake Store API for product data. Focuses on shopping features, async data handling, and UI state management using Redux Toolkit. No backend required; all product and cart logic handled client-side for realistic demo experience.",
        duration: "Jul 2024",
        icon: '<FaWhatsapp />',
        technologies: ["React", "TypeScript", "Tailwind CSS", 'Redux Toolkit'],
        bullets: [
            'Set up a server with Node.js and handled routing, middleware, and API creation with Express.js',
            'Handled and applied asynchronous operations such as async/await and callback in React JS and Node JS, mainly during API calls',
            'Implemented secure user authentication and authorization for Users as well as Admin',
            'Designed and managed a NoSQL database with MongoDB, and performed CRUD operations',
        ],
    },
    {
        id: 3,
        title: "Portfolio - Personal Portfolio Website",
        description: "A modern personal portfolio site built with React and TypeScript, featuring a responsive interface designed in Tailwind CSS. Highlights development projects, technical skills, and integrates Vite for fast development and optimized production build.",
        duration: "Aug 2025",
        icon: '<FaLinkedinIn />',
        technologies: ["React", "Tailwind CSS", "TypeScript"],
        bullets: [
            'Designed and developed a personal portfolio website using React and TypeScript',
            'Implemented a responsive and interactive UI using Tailwind CSS',
            'Used Vite as the development server and bundled the application for production',
        ],
    }
];

export const experience = [
    {
        role: "Web Developer",
        company: "Chit Codes Technologies",
        location: "Indore, MP",
        duration: "Mar 2025 – Present",
        description:
            "Build and maintain scalable MERN stack web applications, with a focus on robust backend API design, security, and documentation. Lead the development of reusable frontend components and API integrations, using best practices in validation, state management, and collaboration.",
        bullets: [
            "Developed and maintained scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), ensuring seamless integration across front-end and back-end layers.",
            "Designed and developed reusable React.js components for admin dashboards and user interfaces,improving user experience and maintainability.",
            "Implemented React-Redux for backend state management and data flow within server-side logic.",
            "Built and optimized RESTful APIs using Node.js and Express.js to support dynamic user management and secure data operations.",
            "Designed, documented, and tested RESTful APIs using Swagger UI and express-validator for secure,reliable backend operations.",
            "Led the creation of static and animated websites for clients using React.js, delivering engaging and responsive user interfaces to enhance user experience.",
            "Created visually appealing websites using HTML, CSS, and JavaScript, focusing on client-specific design requirements and seamless functionality."
        ],
    },
    {
        role: "Software Developer Intern",
        company: "Vected Technologies",
        location: "Indore, MP",
        duration: "Sep 2024 – Mar 2025",
        description:
            "Contributed to scalable web application development and real-time support portal features, integrating advanced backend technologies and cloud storage solutions as part of a collaborative engineering team.",
        bullets: [
            "Contributed to the design and development of scalable web applications using the MERN stack (MongoDB,Express.js, React.js, Node.js), supporting seamless front-end and back-end integration under team leadership.",
            "Contributed to optimizing database operations with MongoDB, enhancing query efficiency and supporting scalable data management solutions.",
            "Integrated Redux Saga for react data flow as well as for asynchronous operations management.",
            "Assisted in engineering and maintaining RESTful APIs using Node.js, Express.js, ensuring efficient communication between services.",
            "Designed, documented, and tested RESTful APIs using Swagger UI and express-validator for secure,reliable backend operations.",
            "Managed image upload, retrieval, and deletion workflows with S3 bucket integration for secure cloud storage.",
            "Assisted in implementing secure role-based access control (RBAC) systems using OAuth2 and JWT,strengthening application security and access management.",
            "Developed dynamic and responsive front-end interfaces using React.js, enhancing user experience and interface usability as part of a collaborative team effort."
        ],
    },
];


export const technologies = [
    { title: "React Js", img: react },
    { title: "Node Js", img: node },
    { title: "TypeScript", img: typeScript },
    { title: "JavaScript", img: javaScript },
    { title: "MongoDB", img: mongoDB },
    { title: "Express Js", img: express },
    { title: "Redux", img: redux },
    { title: "Tailwind CSS", img: tailwind },
    { title: "Prisma", img: prisma },
    { title: "MySQL", img: mysql },
    { title: "HTML", img: html },
    { title: "CSS", img: css },
    { title: "Git", img: git },
    { title: "Material UI", img: mui },
    { title: "Bootstrap", img: bootstrap },
]

export const education = [
    {
        degree: "Bachelor Of Technology in Computer Science",
        institute: "Shivajirao Kadam Institute Of Technology & Management",
        location: "Indore, Madhya Pradesh",
        duration: "Oct 2021 – May 2025",
    },
    {
        degree: "Higher Secondary Education",
        institute: "Pratham Academy Higher Secondary School",
        location: "Indore, Madhya Pradesh",
        duration: "Jun 2020 - May 2021",
    },
    {
        degree: "High School Education",
        institute: "Pratham Academy Higher Secondary School",
        location: "Indore, Madhya Pradesh",
        duration: "Jun 2018 - May 2019",
    },
];

export const interests = [
    {
        title: "Coding",
        icon: FaCode,
    },
    {
        title: "Surfing Internet",
        icon: BsBrowserChrome
    },
    {
        title: "New Technologies",
        icon: MdOutlineWysiwyg,
    },
    {
        title: "Watching Movies",
        icon: FaFilm,
    },
    {
        title: "Gaming",
        icon: FaGamepad,
    },
]