import React, { useEffect, useState } from 'react'
import Button from '../templates/Button'
import { CgNotes } from "react-icons/cg";
import { education, interests, Linkedin } from '../utilities/data';
import { FaLinkedin, FaSchool } from "react-icons/fa";
import { FaChevronRight, FaGraduationCap, FaLocationDot } from "react-icons/fa6";
import SectionContainer from '../components/SectionContainer';
import BlackBox from '../components/BlackBox';
import Resume from '../assets/documents/MayurLikhitkarResume.pdf';
import { MdOutlineAccessTime } from 'react-icons/md';
import logo from "../assets/images/logo.png";

const About: React.FC = () => {
    const birthDate = new Date('2004-05-15');
    const calculateAge = () => {
        const now = new Date();

        let years = now.getFullYear() - birthDate.getFullYear();
        let months = now.getMonth() - birthDate.getMonth();

        // If current month is before birth month, subtract 1 year and adjust months
        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months };
    };

    const [age, setAge] = useState(calculateAge());

    // Update age once a day (or change interval as needed)
    useEffect(() => {
        const timer = setInterval(() => {
            setAge(calculateAge());
        }, 1000 * 60 * 60 * 24); // every 24 hours

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="px-6 pb-20 pt-40 lg:pb-30 lg:pt-50">
                <div className="container mx-auto max-w-screen-xl text-center">
                    <div className="flex justify-center mb-5 sm:mb-10">
                        <img src={logo} className="w-[40vw] h-[40vw] sm:w-[20vw] sm:h-[22vw] bg-background-light rounded-full" alt="Logo" />
                    </div>
                    <h5 className="text-2xl md:text-4xl lg:text-5xl text-text-main mb-4 md:mb-8 font-bold tracking-wider max-w-4xl mx-auto">
                        I'm <span className='bg-gradient-to-r from-primary-light to-secondary-main bg-clip-text text-transparent '>Mayur Likhitkar</span>
                    </h5>
                    <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto font-semibold mb-6 text-text-main">
                        Delivering complete solutions—from intuitive UI design in React to robust backend APIs in Node.js, every project emphasizes scalability, performance, and maintainability.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button
                            variant="outline"
                            to={Resume}
                            link>
                            <CgNotes className='inline-block mr-1' /> Resume
                        </Button>
                        <Button
                            link
                            to={Linkedin}
                            variant="outline"
                        >
                            <FaLinkedin className='text-2xl' />
                        </Button>
                    </div>
                </div>
            </section>

            <SectionContainer id='about' title='More About Me' description='More About Me'>
                <BlackBox className='space-y-5 text-justify'>
                    <h1 className='font-bold text-2xl text-secondary-dark'>Software Developer</h1>
                    <p>I write, design, debug, commit and refactor (more than I'd like to admit 😂)</p>
                    <p>Curiosity led me from a <span className='text-secondary-main font-semibold'>Computer Science</span> classroom to crafting real-world web solutions. As a <span className='text-secondary-main font-semibold'>MERN Stack</span> enthusiast, I thrive on building responsive interfaces with React, robust APIs with Node.js and Express, and managing data with MongoDB and MySQL.</p>
                    <p>I believe in continuous improvement, embracing new frameworks and tackling projects with enthusiasm and a commitment to excellence.</p>
                    <p>My journey includes internship experience in CRM portals, developing reusable components, and collaborating with dynamic teams.</p>
                    <p>Now, I’m dedicated to creating Secure, Scalable, and Maintainable applications that solve real problems - <span className='text-secondary-main font-semibold'>Always Learning, Always Debugging, and Always Aiming Higher</span>.</p>
                    <div className='grid sm:grid-cols-2 gap-2 font-semibold text-secondary-light'>
                        <div className='flex items-center gap-3'><FaChevronRight className='text-sm' />Age - {age.years} years {age.months} months</div>
                        <div className='flex items-center gap-3'><FaChevronRight className='text-sm' />Location - Indore, Madhya Pradesh</div>
                        <div className='flex items-center gap-3'><FaChevronRight className='text-sm' />Degree - Bachelor of Engineering in Computer Science</div>
                        <div className='flex items-center gap-3'><FaChevronRight className='text-sm' />Email - mayurlikhitkar786@gmail.com</div>
                    </div>
                </BlackBox>
            </SectionContainer>

            <SectionContainer id='education' title='Education' description=''>
                <div className='space-y-5'>
                    {education.map((edu, id) => (
                        <BlackBox key={id} className='space-y-2 text-text-main'>
                            <div className='flex flex-col lg:flex-row items-start lg:items-center md:justify-between gap-3'>
                                <h3 className='flex items-center gap-3 font-bold text-lg sm:text-2xl text-secondary-dark'><FaGraduationCap className='flex-shrink-0 h-4 w-4' />{edu.degree}</h3>
                                <p className='text-sm hidden lg:block font-semibold bg-background-light px-3 py-1 rounded-full'>{edu.duration}</p>
                            </div>
                            <p className='flex items-center gap-3 lg:hidden'><MdOutlineAccessTime className='flex-shrink-0 h-4 w-4' />{edu.duration}</p>
                            <p className='flex items-center gap-3'><FaSchool className='flex-shrink-0 h-4 w-4' />{edu.institute}</p>
                            <p className='flex items-center gap-3'><FaLocationDot className='flex-shrink-0 h-4 w-4' />{edu.location}</p>
                        </BlackBox>
                    ))}
                </div>
            </SectionContainer>

            <SectionContainer id='interests' title='Interests' description=''>
                <BlackBox >
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7'>
                        {interests.map((interest, id) => (
                            <div key={id} className="px-5 flex items-center gap-4 py-3 rounded-lg bg-background-light/70 border border-border-main">
                                <interest.icon className='text-xl md:text-2xl text-primary-main' /><h3 className='font-semibold text-base md:text-lg lg:text-xl'>{interest.title}</h3>
                            </div>
                        ))}
                    </div>
                </BlackBox>
            </SectionContainer>
        </>
    )
}

export default About