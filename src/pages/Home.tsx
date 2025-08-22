import React, { useState } from 'react'
import Button from '../templates/Button'
import { IoLogoGithub } from "react-icons/io";
import { CiShare1 } from "react-icons/ci";
import { BsCaretRight } from "react-icons/bs";
import { experience, projects, technologies } from '../utilities/data';
import Tooltip from '../templates/Tooltip';
import { GoDotFill } from "react-icons/go";
import { HiOutlineArrowLongDown } from "react-icons/hi2";
import SectionContainer from '../components/SectionContainer';
import { FiPlus } from "react-icons/fi";
import FormInput from '../templates/FormInput';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import FormTextArea from '../templates/FormTextArea';
import { BsFillSendFill } from "react-icons/bs";

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [response, setResponse] = useState('');
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
    const [visible, setVisible] = useState(false);
    const scriptUrl = '';

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required')
            .matches(
                /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                'Name must contain only alphabets and single spaces between names'
            )
            .test(
                'no-leading-trailing-space',
                'No leading or trailing spaces allowed',
                (val) => val === val?.trim()
            )
            .max(100, 'Full name must be less than 100 characters'),

        subject: Yup.string()
            .required('Subject is required')
            .max(100, 'Subject must be less than 100 characters')
            .test(
                'no-leading-trailing-space',
                'No leading or trailing spaces allowed',
                (val) => val === val?.trim()
            ),

        email: Yup.string()
            .required('Email is required')
            .email('Invalid email format')
            .max(100, 'Email must be less than 100 characters')
            .test(
                'no-leading-trailing-space',
                'No leading or trailing spaces allowed',
                (val) => val === val?.trim()
            ),

        message: Yup.string()
            .required('Message is required')
            .max(500, 'Message must be less than 500 characters')
            .test(
                'no-leading-trailing-space',
                'No leading or trailing spaces allowed',
                (val) => val === val?.trim()
            ),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setVisible(false);
            setResponse('');
            setIsSuccess(null);

            try {
                const formData = new FormData();
                Object.entries(values).forEach(([key, value]) => {
                    formData.append(key, value);
                });

                const res = await fetch(scriptUrl, {
                    method: 'POST',
                    body: formData,
                });

                if (res.ok) {
                    resetForm();
                    setResponse('Your application has been sent!');
                    setIsSuccess(true);
                    setVisible(true);
                } else {
                    setResponse('Failed to send application.');
                    setIsSuccess(false);
                    setVisible(true);
                }
            } catch (error) {
                if (error instanceof Error) {
                    console.error(`Submission Error:`, error.message);
                    setResponse('Error: ' + error.message);
                } else {
                    console.error(`Unknown Submission Error`, error);
                    setResponse('Something went wrong.');
                }
                setIsSuccess(false);
                setVisible(true);
            }

            setTimeout(() => setVisible(false), 5000);
        }
    });

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
                            <GoDotFill className='inline-block text-success-dark group animate-pulse' /> Let's Connect <HiOutlineArrowLongDown className='inline-block group-hover:animate-bounce' />
                        </Button>
                        <Button
                            variant="outline"
                        >
                            Resume
                        </Button>
                    </div>
                </div>
            </section>

            <SectionContainer id='projects' title='Featured Projects' description='Showcasing my expertise in full-stack development, performance optimization, and scalable architecture'>
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
            </SectionContainer>

            <SectionContainer id='experience' title='Experience' description='Highlights of my career and key projects showcasing my skills & impact.'>
                <div className="relative space-y-30">
                    {/* Timeline Line  */}
                    <div className="hidden md:block rounded-full absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-dark">
                    </div>
                    {experience.map((exp, idx) => (
                        <div key={idx}>
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
                            <div className="relative flex flex-col md:flex-row md:items-center">
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
                        </div>
                    ))}


                </div>
            </SectionContainer>

            <SectionContainer id='technologies' title='Skills & Technologies' description='A curated selection of my expertise in modern web and software development'>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8">
                    {technologies.map((tech, id) => (
                        <Tooltip key={id} text={tech.title} position="bottom">
                            <div key={id} className="flex flex-col items-center p-5 rounded-lg text-text-main bg-background-dark border border-border-dark/70 hover:bg-background-main hover:-translate-y-1 hover:scale-105 animate-button-shimmer transition-all duration-400 ease-in-out">
                                <img src={tech.img} className='w-12 h-10' alt={tech.title} />
                            </div>
                        </Tooltip>
                    ))}
                </div>
            </SectionContainer>

            <SectionContainer id='contact' title='Connect With Me' description={`Have a project in mind or a question? Reach out and let's turn your ideas into reality.`}>
                <div className='rounded-xl overflow-hidden max-w-4xl mx-auto'>
                    <div className="py-2.5 px-4 bg-gradient-to-r from-background-main via-background-light to-background-main flex items-center justify-between">
                        <div>
                            <GoDotFill className='text-error-main inline-block text-xl' /><GoDotFill className='text-warn-main inline-block text-xl' /><GoDotFill className='text-success-main inline-block text-xl' />
                        </div>
                        <div>
                            <FiPlus className='text-text-dark inline-block text-xl' />
                        </div>
                    </div>
                    <div className='bg-background-main py-10 px-4'>
                        <form action="">
                            <div className="max-w-lg mx-auto space-y-5">
                                <FormInput
                                    id='name'
                                    name='name'
                                    label='Name'
                                    type='text'
                                    formik={formik}
                                    placeholder='Enter your name'
                                    required />
                                <FormInput
                                    id='email'
                                    name='email'
                                    label='Email'
                                    type='text'
                                    formik={formik}
                                    placeholder='Enter your email'
                                    required />
                                <FormInput
                                    id='subject'
                                    name='subject'
                                    label='Subject'
                                    type='text'
                                    formik={formik}
                                    placeholder='Subject'
                                    required />
                                <FormTextArea
                                    id='message'
                                    name='message'
                                    label='Message'
                                    formik={formik}
                                    rows={4}
                                    placeholder="Please Drop Your Short Message..."
                                    required />

                                <div className="">
                                    <Button
                                        type="submit"
                                        className='w-full'
                                    >
                                        <BsFillSendFill className='inline-block ml-1' /> Send
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </SectionContainer>
            
        </>
    )
}

export default Home