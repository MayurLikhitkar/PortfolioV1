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
    { title: "Projects", key: "projects", path: "/", hash: "projects", icon: FaProjectDiagram },
    { title: "Experience", key: "experience", path: "/", hash: "experience", icon: HiOutlineBriefcase },
    { title: "Skills", key: "skills", path: "/", hash: "skills", icon: FaCode },
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
        name: "Project 1",
        description: "Showcasing my expertise in full-stack development, performance optimization, and scalable architecture",
        icon: '<TbClockHour4 />',
        technologies: ["React", "Node.js", "MongoDB"]
    },
    {
        id: 2,
        name: "Project 2",
        description: "Building a responsive and interactive web application using React and TypeScript",
        icon: '<FaWhatsapp />',
        technologies: ["React", "TypeScript", "CSS"]
    },
    {
        id: 3,
        name: "Project 3",
        description: "Designing and developing a RESTful API using Node.js and Express",
        icon: '<FaLinkedinIn />',
        technologies: ["Node.js", "Express", "JavaScript"]
    }
];