import React, { useEffect, useRef, useState } from 'react'
import Button from '../templates/Button'
import { IoLogoGithub, IoMdMail } from "react-icons/io";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { PRESENT } from '../utilities/data';
import { FaLinkedin, FaInstagramSquare, FaWhatsappSquare, FaRegCalendarAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { HiOutlineArrowLongDown, HiOutlineBuildingOffice2 } from "react-icons/hi2";
import SectionContainer from '../components/SectionContainer';
import FormInput from '../templates/FormInput';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import FormTextArea from '../templates/FormTextArea';
import { IoCall, IoChatbox, IoSend } from "react-icons/io5";
import BlackBox from '../components/BlackBox';
import { APP_SCRIPT_URL } from '../utilities/config';
import { FaLocationDot } from 'react-icons/fa6';
import { CgNotes } from 'react-icons/cg';
import type { Content } from '../utilities/type';
import PageLoader from '../components/PageLoader';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment'
import { fetchPortfolioData } from '../utilities/api';

type FormStatus = {
    message: string;
    isSuccess: boolean | null;
    visible: boolean;
};

const Home: React.FC = () => {
    const [status, setStatus] = useState<FormStatus>({
        message: '',
        isSuccess: null,
        visible: false,
    });

    const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const showStatus = (message: string, isSuccess: boolean) => {
        // Clear any pending hide from a previous submission
        if (hideTimerRef.current) {
            clearTimeout(hideTimerRef.current);
        }

        setStatus({ message, isSuccess, visible: true });

        hideTimerRef.current = setTimeout(() => {
            setStatus((prev) => ({ ...prev, visible: false }));
        }, 5000);
    };

    // Clear timer on unmount to avoid setState-after-unmount
    useEffect(() => {
        return () => {
            if (hideTimerRef.current) {
                clearTimeout(hideTimerRef.current);
            }
        };
    }, []);

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
            if (hideTimerRef.current) {
                clearTimeout(hideTimerRef.current);
            }
            setStatus({ message: '', isSuccess: null, visible: false });

            try {
                const formData = new FormData();
                Object.entries(values).forEach(([key, value]) => {
                    formData.append(key, value);
                });

                const res = await fetch(APP_SCRIPT_URL, {
                    method: 'POST',
                    body: formData,
                });

                // console.log("=============>", res)

                if (res.ok) {
                    resetForm();
                    showStatus('Your query has been sent! I will get back to you soon.', true);
                } else {
                    showStatus('Failed to send query. Please try again later.', false);
                }
            } catch (error) {
                if (error instanceof Error) {
                    console.error(`Submission Error:`, error.message);
                    showStatus('Error: ' + error.message, false);
                } else {
                    console.error(`Unknown Submission Error`, error);
                    showStatus('Something went wrong.', false);
                }
            }
        }
    });

    const { data, isLoading } = useQuery<Content>({
        queryKey: ['portfolioData'],
        queryFn: fetchPortfolioData,
        staleTime: 60 * 60, // 10 Minutes: Data won't be refetched if user navigates away and back within 10 minutes
    });

    if (isLoading) {
        return <PageLoader />;
    }

    const content = data || {
        projects: [], experience: [], education: [], skills: [], data: []
    };

    // console.log('content', content)

    return (
        <>
            {/* Hero Section */}
            <section className="px-6 pb-20 pt-40 lg:pb-30 lg:pt-50">
                <div className="container mx-auto max-w-screen-xl text-center">
                    <h5 className="text-xl lg:text-3xl font-bold mb-3 sm:mb-4 text-text-main">
                        Hi, I'm <span className='bg-gradient-to-r from-primary-light to-secondary-main bg-clip-text text-transparent tracking-wider'>{content.data[0].name}</span>
                    </h5>
                    <p className="text-2xl md:text-4xl lg:text-5xl text-text-main mb-8 font-bold tracking-wider max-w-4xl mx-auto lg:leading-18">
                        {content.data[0].headline} <span className='bg-gradient-to-r from-primary-light to-secondary-main bg-clip-text text-transparent '>{content.data[0].headlineGradient}</span>
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                        <Button
                            link
                            to="#connect"
                            target='_self'>
                            <GoDotFill className='inline-block mr-1 text-success-dark group animate-pulse' /> Let's Connect <HiOutlineArrowLongDown className='inline-block group-hover:animate-bounce' />
                        </Button>
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
                            target='_blank'
                        >
                            <FaLinkedin className='text-2xl' />
                        </Button>
                        <Button
                            link
                            to={content.data[0].github}
                            variant="outline"
                            target='_blank'
                        >
                            <IoLogoGithub className='text-2xl' />
                        </Button>
                    </div>
                </div>
            </section>

            <SectionContainer id='experience' title='Experience' description='Highlights of my career and key projects showcasing my skills & impact.'>
                <div className="relative space-y-5 md:space-y-7">
                    {/* Timeline Line */}
                    <div className="block absolute left-2 sm:left-6 h-full w-0.5 bg-primary-dark" />
                    {content.experience.map((exp) => (
                        <div
                            key={exp.id}
                            className="flex items-center"
                            data-aos="fade-up"
                        >
                            {/* Timeline Marker */}
                            <div className="w-4 h-4 absolute left-0 sm:left-4 rounded-full bg-primary-light text-dark-dark font-bold flex items-center justify-center z-10">
                            </div>
                            {/* Timeline Content */}
                            <div className='ml-8 md:ml-15 w-full'>
                                <BlackBox className="space-y-1">
                                    <div className='flex flex-col md:flex-row justify-between gap-1'>
                                        <h3 className="text-xl font-bold text-secondary-dark">
                                            {exp.role}
                                        </h3>
                                        <p className="hidden md:block text-sm font-semibold bg-background-light px-3 py-1 rounded md:rounded-full w-fit">{moment(exp.startDate).format("MMM YYYY")} - {exp.endDate === PRESENT ? PRESENT : moment(exp.endDate).format("MMM YYYY")}</p>
                                    </div>
                                    <p className="font-semibold flex items-center gap-2"><HiOutlineBuildingOffice2 />{exp.company}</p>
                                    <p className="flex md:hidden items-center gap-2"><FaRegCalendarAlt />{exp.duration}</p>
                                    <p className="mb-6 flex items-center gap-2"><FaLocationDot />{exp.location}</p>
                                    <div className="space-y-2">
                                        {exp.bullets?.split('^').map((bullet, i) => (
                                            <p key={i} className="flex items-center gap-4">
                                                <VscDebugBreakpointLog className="flex-shrink-0 h-3 w-3" />
                                                <span>{bullet}</span>
                                            </p>
                                        ))}
                                    </div>
                                </BlackBox>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            <SectionContainer id='projects' title='Projects' description='Showcasing my expertise in full-stack development, performance optimization, and scalable architecture'>
                <div className='space-y-5'>
                    {content.projects.map((project) => (
                        <BlackBox key={project.id} className='space-y-5'>
                            <div className='flex flex-col md:flex-row items-start md:items-center md:justify-between gap-3'>
                                <h3 className='font-bold text-2xl text-secondary-main'>{project.title}</h3>
                                <p className='text-sm font-semibold bg-background-light px-3 py-1 rounded md:rounded-full'>{moment(project.startDate).format("MMM YYYY")} - {project.endDate === PRESENT ? PRESENT : moment(project.endDate).format("MMM YYYY")}</p>
                            </div>
                            <div className='flex flex-col md:flex-row gap-10'>
                                <div className='md:w-1/2 space-y-4'>
                                    <p className='text-justify'>{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.split("^").map((tech, id) => (
                                            <div key={id} className="items-center rounded border px-2 py-0.5 font-semibold border-border-main/50 bg-secondary-main text-dark-dark text-sm">{tech}</div>
                                        ))}
                                    </div>
                                </div>
                                <div className='md:w-1/2 space-y-2'>
                                    {project.bullets.split("^").map((bullet, id) => (
                                        <p key={id} className="flex items-center gap-4">
                                            <VscDebugBreakpointLog className="flex-shrink-0 h-3 w-3" />
                                            <span>{bullet}</span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </BlackBox>
                    ))}
                </div>
            </SectionContainer>

            <SectionContainer id='skills' title='Skills & Technologies' description='A curated selection of my expertise in modern web and software development'>
                <BlackBox>
                    <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-7">
                        {content.skills.map((skill) => (
                            <div key={skill.id} className="flex items-center px-3 py-2 gap-2 rounded-lg text-text-main font-semibold bg-background-light/70 border border-border-main hover:scale-110 transition-all duration-400 ease-in-out cursor-pointer">
                                <img src={skill.image} className='w-7 h-6 contrast-90' alt={skill.title} /><span>{skill.title}</span>
                            </div>
                        ))}
                    </div>
                </BlackBox>
            </SectionContainer>

            <SectionContainer id='connect' title='Connect' description={`Connect With Me`}>
                <BlackBox>
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className='md:w-1/2 space-y-5 text-justify'>
                            <h4 className='text-3xl font-bold'>Hello 👋</h4>
                            <p>Thanks for stopping by.</p>
                            <p>Curious about my work? 💡 Have questions about something you saw in my portfolio? 🖼️ I'm always happy to chat 💬</p>
                            <p>Whether you're just browsing 👀, looking for inspiration ✨, or thinking about how we might collaborate 🤝 feel free to reach out.</p>
                            <p>I’d love to hear your thoughts 💭, answer your questions ❓, or just connect and exchange ideas 🔄</p>
                            <p>Drop me a message anytime 📩 — I’m all ears 🧏‍♂️</p>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <form className="space-y-3" onSubmit={formik.handleSubmit}>
                                <FormInput
                                    id='name'
                                    name='name'
                                    label='Name'
                                    type='text'
                                    formik={formik}
                                    placeholder='Your Name'
                                    withLabel={false}
                                    required />
                                <FormInput
                                    id='email'
                                    name='email'
                                    label='Email'
                                    type='email'
                                    formik={formik}
                                    withLabel={false}
                                    placeholder='Your Email'
                                    required />
                                <FormInput
                                    id='subject'
                                    name='subject'
                                    label='Subject'
                                    type='text'
                                    formik={formik}
                                    placeholder='Subject'
                                    withLabel={false}
                                    required />
                                <FormTextArea
                                    id='message'
                                    name='message'
                                    label='Message'
                                    formik={formik}
                                    rows={4}
                                    withLabel={false}
                                    placeholder="Please Drop Your Short Message..."
                                    required />

                                <div className="">
                                    <Button
                                        type="submit"
                                        className='w-full'
                                        disabled={formik.isSubmitting}
                                    >
                                        {formik.isSubmitting ? 'Submitting...' : 'Send'} <IoSend className='inline-block ml-2' />
                                    </Button>
                                </div>

                                {status.visible && (
                                    <div
                                        id="formMessage"
                                        className={`mt-4 px-4 py-2 rounded ${status.isSuccess ? 'bg-success-dark' : 'bg-error-main'
                                            } text-text-light`}
                                    >
                                        {status.message}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </BlackBox>
            </SectionContainer>

            <SectionContainer id='contact' title='Contact Me' description={`Have a project in mind or a question Reach out and let's turn your ideas into reality.`}>
                <BlackBox>
                    <div className="grid xs:grid-cols-2 gap-3">
                        <div className='bg-background-light p-3 flex items-center gap-3 rounded-md'>
                            <div className='rounded-full bg-background-dark p-3'><IoMdMail className='flex-shrink-0 w-5 h-5' /></div>
                            <div>
                                <h3 className='text-lg font-semibold'>Email Me</h3>
                                <p className='text-secondary-dark break-words break-all font-semibold'><a href={`mailto:${content.data[0].email}`}>{content.data[0].email}</a></p>
                            </div>
                        </div>
                        <div className='bg-background-light p-3 flex items-center gap-3 rounded-md'>
                            <div className='rounded-full bg-background-dark p-3'><IoCall className='flex-shrink-0 w-5 h-5' /></div>
                            <div>
                                <h3 className='text-lg font-semibold'>Call Me</h3>
                                <p className='text-secondary-dark break-words break-all font-semibold'><a href={`tel:+91${content.data[0].contact}`}>+91 {content.data[0].contact}</a></p>
                            </div>
                        </div>
                        <div className='bg-background-light p-3 flex items-center gap-3 rounded-md'>
                            <div className='rounded-full bg-background-dark p-3'><FaLocationDot className='flex-shrink-0 w-5 h-5' /></div>
                            <div>
                                <h3 className='text-lg font-semibold'>I'm Based In</h3>
                                <p className='text-secondary-dark break-words break-all font-semibold'>{content.data[0].location}</p>
                            </div>
                        </div>
                        <div className='bg-background-light p-3 flex items-center gap-3 rounded-md'>
                            <div className='rounded-full bg-background-dark p-3'><IoChatbox className='flex-shrink-0 w-5 h-5' /></div>
                            <div>
                                <h3 className='text-lg font-semibold'>Connect Me On</h3>
                                <div className='flex py-1 gap-3'>
                                    <a target='_blank' href={content.data[0].linkedIn} className=''><FaLinkedin className='flex-shrink-0 text-secondary-dark w-7 h-7' /></a>
                                    <a target='_blank' href={content.data[0].whatsapp} className=''><FaWhatsappSquare className='flex-shrink-0 text-secondary-dark w-7 h-7' /></a>
                                    <a target='_blank' href={content.data[0].instagram} className=''><FaInstagramSquare className='flex-shrink-0 text-secondary-dark w-7 h-7' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </BlackBox>
            </SectionContainer>
        </>
    )
}

export default Home