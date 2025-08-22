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
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaProjectDiagram } from "react-icons/fa";
import { FaMeta, FaCode } from "react-icons/fa6";
import { IoMailOutline, IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { TbClockHour4 } from "react-icons/tb";
import { BiSolidUser } from "react-icons/bi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { LuSmartphone } from "react-icons/lu";
import { RiHome2Line } from "react-icons/ri";

export const navItems = [
    { title: "Home", key: "home", path: "/", hash: "", icon: RiHome2Line },
    { title: "About", key: "about", path: "/", hash: "about", icon: BiSolidUser },
    { title: "Skills", key: "skills", path: "/", hash: "skills", icon: FaCode },
    { title: "Experience", key: "experience", path: "/", hash: "experience", icon: HiOutlineBriefcase },
    { title: "Projects", key: "projects", path: "/", hash: "projects", icon: FaProjectDiagram },
    { title: "Contact", key: "contact", path: "/", hash: "contact", icon: LuSmartphone },
]

export const footerLinks = {
    Product: [
        { name: "Features", to: "/features" },
        { name: "Services", to: "/services" },
        { name: "Pricing", to: "/pricing" },
        { name: "Process", to: "/process" },
        { name: "Documentation", to: "#" },
    ],
    Company: [
        { name: "About", to: "#" },
        { name: "Blog", to: "/blog" },
        { name: "Contact", to: "/contact" },
        { name: "Careers", to: "#" },
        { name: "Press", to: "#" },
    ],
    Resources: [
        { name: "FAQ", to: "/faq" },
        { name: "Community", to: "#" },
        { name: "Help Center", to: "#" },
        { name: "Status", to: "#" },
        { name: "Changelog", to: "#" },
    ],
    Legal: [
        { name: "Privacy Policy", to: "#" },
        { name: "Terms of Service", to: "#" },
        { name: "Cookie Policy", to: "#" },
        { name: "GDPR", to: "#" },
    ],
}

export const socialLinks = [
    { name: "Whatsapp", icon: FaWhatsapp, to: "#" },
    { name: "Instagram", icon: FaInstagram, to: "#" },
    { name: "LinkedIn", icon: FaLinkedinIn, to: "#" },
    { name: "Meta", icon: FaMeta, to: "#" },
]

export const contactInfo = [
    {
        icon: IoMailOutline,
        title: "Email Us",
        description: "Send us an email anytime",
        contact: "hello@aicode.com",
        action: "mailto:hello@aicode.com",
    },
    {
        icon: IoCallOutline,
        title: "Call Us",
        description: "Mon-Fri from 8am to 6pm",
        contact: "+1 (555) 123-4567",
        action: "tel:+15551234567",
    },
    {
        icon: IoLocationOutline,
        title: "Visit Us",
        description: "Come say hello at our office",
        contact: "123 Tech Street, San Francisco, CA 94105",
        action: "#",
    },
    {
        icon: TbClockHour4,
        title: "Working Hours",
        description: "Our team is available",
        contact: "Mon-Fri: 8am-6pm PST",
        action: "#",
    },
]

export const projects = [
    {
        id: 1,
        title: "JobCompass - Job Application Platform",
        description: "Showcasing my expertise in full-stack development, performance optimization, and scalable architecture",
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
        description: "Building a responsive and interactive web application using React and TypeScript",
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
        description: "Designing and developing a RESTful API using Node.js and Express",
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
        role: "Trainee Software Developer Intern",
        company: "Vected Technologies Private Limited",
        location: "Indore, Madhya Pradesh",
        timeframe: "Sep 2024 – Feb 2025",
        description:
            "Delivered support to the development team in CRM and Support Portals. Contributed to building efficient and maintainable web applications using modern JavaScript frameworks.",
        bullets: [
            "Worked on CRM Portal and Support Portal for Vector Skill Academy.",
            "Used Redux Saga for efficient state management.",
            "Implemented responsive user interfaces with Material UI.",
            "Designed and implemented RESTful APIs for real-time data exchange.",
            "Built reusable React components to speed up development and improve code maintainability."
        ],
    },
    {
        role: "Frontend Developer (Project)",
        company: "E-Shopp - Ecommerce Application",
        location: "",
        timeframe: "2024",
        description:
            "Developed an e-commerce web application frontend using ReactJS, integrating third-party APIs to simulate real-world scenarios.",
        bullets: [
            "Used Fake Store API to handle product data.",
            "Applied async/await and callbacks for handling API calls in ReactJS.",
            "Currently refactoring and managing the app state with Redux Toolkit."
        ],
    },
    {
        role: "Full Stack Developer (Project, In Progress)",
        company: "JobCompass - Job Portal Application",
        location: "",
        timeframe: "2025",
        description:
            "Building a MERN stack job portal enabling secure user authentication, robust API design, and comprehensive database management.",
        bullets: [
            "Set up Node.js server and managed routing, middleware, and API creation with Express.js.",
            "Handled async operations in both ReactJS and NodeJS during API calls.",
            "Implemented secure authentication and authorization for users and admin.",
            "Designed and managed NoSQL database with MongoDB, supporting full CRUD operations."
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
    // { title: "Bootstrap", img: bootstrap },
]