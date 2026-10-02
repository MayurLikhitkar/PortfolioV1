import React, { useState } from 'react'
import Button from '../templates/Button'
import { CgNotes } from "react-icons/cg";
import { interests, PRESENT } from '../utilities/data';
import { FaLinkedin, FaSchool } from "react-icons/fa";
import { FaChevronRight, FaGraduationCap, FaLocationDot } from "react-icons/fa6";
import SectionContainer from '../components/SectionContainer';
import BlackBox from '../components/BlackBox';
import Resume from '../assets/documents/MayurLikhitkarResume.pdf';
import { MdOutlineAccessTime } from 'react-icons/md';
import logo from "../assets/images/logo.png";
import type { Content } from '../utilities/type';
import { fetchPortfolioData } from '../utilities/api';
import PageLoader from '../components/PageLoader';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';

const About: React.FC = () => {

    const { data, isLoading } = useQuery<Content>({
        queryKey: ['portfolioData'],
        queryFn: fetchPortfolioData,
        staleTime: 60 * 60,
    });

    const content = data || {
        projects: [], experience: [], education: [], skills: [], data: []
    };

    const calculateAge = (dob: string | undefined) => {
        if (!dob) return null;

        const birthDate = moment(dob, 'DD/MM/YYYY'); // replace with your actual dob format
        if (!birthDate.isValid()) return null;

        const now = moment();
        const years = now.diff(birthDate, 'years');
        const months = now.diff(birthDate.clone().add(years, 'years'), 'months');

        return { years, months };
    };

    const [age] = useState(() => calculateAge(content.data[0]?.dob));

    if (isLoading) {
        return <PageLoader />;
    }

    return (
        <>
            {/* Hero Section */}
            <section className="px-6 pb-20 pt-40 lg:pb-30 lg:pt-30">
                <div className="container mx-auto max-w-screen-xl text-center">
                    <div className="flex justify-center mb-5 sm:mb-10">
                        <img src={logo} className="w-[40vw] h-[40vw] sm:w-[20vw] sm:h-[22vw] bg-background-light rounded-full" alt="Logo" />
                    </div>
                    <h5 className="text-2xl md:text-4xl lg:text-5xl text-text-main mb-4 md:mb-8 font-bold tracking-wider max-w-4xl mx-auto">
                        I'm <span className='bg-gradient-to-r from-primary-light to-secondary-main bg-clip-text text-transparent '>{content.data[0].name}</span>
                    </h5>
                    <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto font-semibold mb-6 text-text-main">
                        {content.data[0].aboutHeadline}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button
                            variant="outline"
                            to={content.data[0].resume}
                            link>
                            <CgNotes className='inline-block mr-1' /> Resume
                        </Button>
                        <Button
                            link
                            to={content.data[0].linkedIn}
                            variant="outline"
                        >
                            <FaLinkedin className='text-2xl' />
                        </Button>
                    </div>
                </div>
            </section>

            <SectionContainer id='about' title='More About Me' description='More About Me'>
                <BlackBox className='space-y-5 text-justify'>
                    <h1 className='font-bold text-2xl text-secondary-dark'>{content.data[0].aboutHeading}</h1>
                    {content.data[0].aboutContent.split("^").map((para, index) => (
                        <p key={index}>{para}</p>
                    ))}
                    <div className='grid sm:grid-cols-2 gap-2 font-semibold text-secondary-light'>
                        <div className='flex items-center gap-3'><FaChevronRight className='text-sm' />Age - {age?.years} years {age?.months} months</div>
                        <div className='flex items-center gap-3'><FaChevronRight className='text-sm' />{content.data[0].location}</div>
                        <div className='flex items-center gap-3'><FaChevronRight className='text-sm' />Degree - {content.data[0].degree}</div>
                        <div className='flex items-center gap-3'><FaChevronRight className='text-sm' />Email - {content.data[0].email}</div>
                    </div>
                </BlackBox>
            </SectionContainer>

            <SectionContainer id='education' title='Education' description=''>
                <div className='space-y-5'>
                    {content.education.map((edu) => (
                        <BlackBox key={edu.id} className='space-y-2 text-text-main'>
                            <div className='flex flex-col lg:flex-row items-start lg:items-center md:justify-between gap-3'>
                                <h3 className='flex items-center gap-3 font-bold text-lg sm:text-2xl text-secondary-dark'><FaGraduationCap className='flex-shrink-0 h-4 w-4' />{edu.course}</h3>
                                <p className='text-sm hidden lg:block font-semibold bg-background-light px-3 py-1 rounded-full'>{moment(edu.startDate).format("MMM YYYY")} - {edu.endDate === PRESENT ? PRESENT : moment(edu.endDate).format("MMM YYYY")}</p>
                            </div>
                            <p className='flex items-center gap-3 lg:hidden'><MdOutlineAccessTime className='flex-shrink-0 h-4 w-4' />{moment(edu.startDate).format("MMM YYYY")} - {edu.endDate === PRESENT ? PRESENT : moment(edu.endDate).format("MMM YYYY")}</p>
                            <p className='flex items-center gap-3'><FaSchool className='flex-shrink-0 h-4 w-4' />{edu.institution}</p>
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