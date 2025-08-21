import React, { Fragment } from 'react'
import Button from '../templates/Button'
import { IoLogoGithub } from "react-icons/io";
import { CiShare1 } from "react-icons/ci";
import { BsCaretRight } from "react-icons/bs";
import { experience, projects, technologies } from '../utilities/data';
import SectionHeader from '../templates/SectionHeader';
import Tooltip from '../templates/Tooltip';

const Home: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="px-6 pb-20 pt-40 lg:pb-30 lg:pt-50">
                <div className="container mx-auto max-w-screen-xl text-center">
                    <h5 className="text-2xl lg:text-3xl font-semibold mb-6 text-text-main">
                        {/* Mayur Likhitkar */} Hi, I'm <span className='bg-gradient-to-r from-primary-light to-secondary-main bg-clip-text text-transparent tracking-wider'>Mayur Likhitkar</span>
                    </h5>
                    <p className="text-4xl  md:text-5xl text-text-main mb-8 font-semibold tracking-wider max-w-4xl mx-auto">
                        Transforming Concepts into Seamless <span className='bg-gradient-to-r from-primary-light to-secondary-main bg-clip-text text-transparent '>User Experiences</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button >
                            Let's Connect
                        </Button>
                        <Button
                            variant="outline"
                        >
                            Resume
                        </Button>
                    </div>
                </div>
            </section>

            <section id="projects" className="px-6 py-15 lg:py-30">
                <div className="container mx-auto max-w-screen-xl">
                    <div className="text-center mb-12 sm:mb-16">
                        <SectionHeader title='Featured Projects' description='Showcasing my expertise in full-stack development, performance optimization, and scalable architecture' />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="group h-full p-5 rounded-lg text-text-main bg-background-main backdrop-blur-sm border border-primary-main/30 hover:border-primary-main transition-all duration-300 space-y-6">
                                <div className="flex flex-col space-y-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="p-3 rounded-lg">
                                            {/* Icon */}

                                        </div>
                                        <div className="flex space-x-2">
                                            <a
                                                href="https://github.com/AryanAgrahari07/SndramPortal"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className=""
                                            >
                                                {/* GitHub Icon */}
                                                <IoLogoGithub className="h-5 w-5" />
                                            </a>
                                            <a
                                                href="https://misadmindev.sundarammutual.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className=""
                                            >
                                                {/* External Link Icon */}
                                                <CiShare1 className="h-5 w-5" />
                                            </a>
                                        </div>
                                    </div>
                                    <h4 className="font-semibold tracking-tight text-lg md:text-2xl text-primary-light transition-colors leading-tight">
                                        {project.title}
                                    </h4>
                                    <div className="text-text-main text-base">
                                        {project.description}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, id) => (
                                            <div key={id} className="items-center rounded-full border px-3 py-0.5 font-semibold border-border-main/50 bg-primary-main text-dark-dark text-xs sm:text-sm">{tech}</div>
                                        ))}
                                    </div>
                                    <ul className="space-y-2 text-xs sm:text-sm text-text-main">
                                        {project.bullets.map((bullet, id) => (
                                            <li key={id} className="flex items-center gap-4 ">
                                                <BsCaretRight className="flex-shrink-0 h-3 w-3" />
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="experience" className="px-6 py-15 lg:py-30">
                <div className="container mx-auto max-w-screen-xl">
                    <div className="text-center mb-12 sm:mb-16">
                        <SectionHeader title='Experience' description='Highlights of my career and key projects showcasing my skills & impact.' />
                    </div>
                    <div className="relative">
                        {/* Timeline Line  */}
                        <div className="hidden md:block rounded-full absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-dark">
                        </div>
                        {experience.map((exp, idx) => (
                            <Fragment key={idx}>
                                <div className="relative flex flex-col md:flex-row md:items-center">
                                    <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0" data-aos="fade-up">
                                        <div className='border border-border-dark p-5 space-y-1.5 rounded-md bg-background-main'>
                                            <h3 className="text-xl font-semibold text-primary-dark">{exp.role}</h3>
                                            <p className="text-text-main">{exp.company}</p>
                                            <p className="text-text-main">{exp.timeframe}</p>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 md:pl-12"></div>
                                </div>
                                <div className="relative flex justify-center items-center">
                                    <div className="w-10 h-10 rounded-full bg-primary-light text-dark-dark font-bold flex items-center justify-center shadow-lg z-10">
                                        {idx + 1}
                                    </div>
                                </div>
                                <div className="relative flex flex-col md:flex-row md:items-center mb-30">
                                    <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0"></div>
                                    <div className="md:w-1/2 md:pl-12" data-aos="fade-up">
                                        <div className="bg-background-dark p-6 rounded-lg border border-gray-800">
                                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                                {exp.bullets.map((b, i) => (
                                                    <li key={i}>{b}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        ))}


                    </div>
                </div>
            </section>

            <section id="skills" className="px-6 py-15 lg:py-30">
                <div className="container mx-auto max-w-screen-xl">
                    <div className="text-center mb-12 sm:mb-16">
                        <SectionHeader title='Skills & Technologies' description='A curated selection of my expertise in modern web and software development' />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
                        {technologies.map((tech, id) => (
                            <Tooltip key={id} text={tech.title} position="bottom">
                                <div key={id} className="flex flex-col items-center p-5 rounded-lg text-text-main bg-background-dark border border-border-dark hover:bg-background-main hover:-translate-y-1 hover:scale-105 animate-button-shimmer transition-all duration-400 ease-in-out">
                                    <img src={tech.img} className='w-18 h-15' alt={tech.title} />
                                </div>
                            </Tooltip>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home