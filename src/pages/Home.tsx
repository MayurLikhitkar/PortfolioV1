import React, { useState } from 'react'
import Button from '../templates/Button'
import { IoLogoGithub } from "react-icons/io";
import { CiShare1 } from "react-icons/ci";
import { MdFolder } from "react-icons/md";
import { BsCaretRight, BsQuestionCircle } from "react-icons/bs";
import { VscDebugBreakpointData, VscDebugBreakpointLog } from "react-icons/vsc";
import { IoMdMail } from "react-icons/io";
import { experience, projects, technologies } from '../utilities/data';
import { FaLinkedin } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { HiOutlineArrowLongDown } from "react-icons/hi2";
import { LuDot } from "react-icons/lu";
import SectionContainer from '../components/SectionContainer';
import FormInput from '../templates/FormInput';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import FormTextArea from '../templates/FormTextArea';
import { BsFillSendFill } from "react-icons/bs";
import BlackBox from '../components/BlackBox';
import { RxDotFilled } from 'react-icons/rx';

const Home: React.FC = () => {
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
                    <h5 className="text-2xl lg:text-3xl font-bold mb-6 text-text-main">
                        {/* Mayur Likhitkar */} Hi, I'm <span className='bg-gradient-to-r from-primary-light to-secondary-main bg-clip-text text-transparent tracking-wider'>Mayur Likhitkar</span>
                    </h5>
                    <p className="text-3xl md:text-5xl text-text-main mb-8 font-bold tracking-wider max-w-4xl mx-auto">
                        Transforming Concepts into Seamless <span className='bg-gradient-to-r from-primary-light to-secondary-main bg-clip-text text-transparent '>User Experiences</span>
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button >
                            <GoDotFill className='inline-block mr-1 text-success-dark group animate-pulse' /> Let's Connect <HiOutlineArrowLongDown className='inline-block group-hover:animate-bounce' />
                        </Button>
                        <Button
                            variant="outline"
                        >
                            Resume
                        </Button>
                        <Button
                            variant="outline"
                        >
                            <FaLinkedin className='text-2xl' />
                        </Button>
                        <Button
                            variant="outline"
                        >
                            <IoMdMail className='text-2xl' />
                        </Button>
                    </div>
                </div>
            </section>

            <SectionContainer id='experience' title='Experience' description='Highlights of my career and key projects showcasing my skills & impact.'>
                <div className="relative space-y-12 md:space-y-16">
                    {/* Timeline Line */}
                    <div className="block absolute left-6 h-full w-0.5 bg-primary-dark" />
                    {experience.map((exp, id) => (
                        <div
                            key={id}
                            className="flex items-center"
                            data-aos="fade-up"
                        >
                            {/* Timeline Marker */}
                            <div className="w-4 h-4 absolute left-4 rounded-full bg-primary-light text-dark-dark font-bold flex items-center justify-center z-10">
                            </div>
                            {/* Timeline Content */}
                            <div className='ml-12 md:ml-15 w-full'>
                                <BlackBox className="">
                                    <div className='flex justify-between'>
                                        <h3 className="text-xl font-bold text-secondary-dark">
                                            {exp.role}
                                        </h3>
                                        <p className="text-sm font-semibold bg-background-light px-3 py-1 rounded-full">{exp.duration}</p>
                                    </div>
                                    <p className="font-semibold text-text-light">{exp.company}</p>
                                    <p className="text-text-light mb-6">{exp.location}</p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        {exp.bullets.map((bullet, i) => (
                                            <li key={i} className="text-sm">
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </BlackBox>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            <SectionContainer id='projects' title='Projects' description='Showcasing my expertise in full-stack development, performance optimization, and scalable architecture'>
                <div className='space-y-5'>
                    {projects.map((project, id) => (
                        <BlackBox key={id} className='space-y-5'>
                            <div className='flex flex-col md:flex-row items-start md:items-center md:justify-between gap-3'>
                                <h3 className='font-bold text-2xl text-secondary-main'>{project.title}</h3>
                                <p className='text-sm font-semibold bg-background-light px-3 py-1 rounded-full'>{project.duration}</p>
                            </div>
                            <div className='flex flex-col md:flex-row gap-10'>
                                <div className='md:w-1/2 space-y-4'>
                                    <p className='text-justify'>{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, id) => (
                                            <div key={id} className="items-center rounded border px-2 py-0.5 font-semibold border-border-main/50 bg-secondary-main text-dark-dark text-sm">{tech}</div>
                                        ))}
                                    </div>
                                </div>
                                <div className='md:w-1/2 space-y-2'>
                                    {project.bullets.map((bullet, id) => (
                                        <p key={id} className="flex items-center gap-4 ">
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
                    <div className="flex flex-wrap gap-6 sm:gap-7">
                        {technologies.map((tech, id) => (
                            <div key={id} className="flex items-center justify-center px-3 py-2 gap-2 rounded-lg text-text-main font-semibold bg-background-light/70 border border-border-main hover:scale-110 transition-all duration-400 ease-in-out cursor-pointer">
                                <img src={tech.img} className='w-7 h-6 contrast-90' alt={tech.title} /><span>{tech.title}</span>
                            </div>
                        ))}
                    </div>
                </BlackBox>
            </SectionContainer>

            <SectionContainer id='contact' title='Connect' description={`Have a project in mind or a question? Reach out and let's turn your ideas into reality.`}>
                <BlackBox>
                    <div className="flex gap-10 items-center">
                        <div className='w-1/2 space-y-5'>
                            <h4 className='text-3xl font-bold'>Hello 👋</h4>
                            <p>Thanks for stopping by.</p>
                            <p>Curious about my work? 💡 Have questions about something you saw in my portfolio? 🖼️ I'm always happy to chat 💬</p>
                            <p>Whether you're just browsing 👀, looking for inspiration ✨, or thinking about how we might collaborate 🤝 feel free to reach out.</p>
                            <p>I’d love to hear your thoughts 💭, answer your questions ❓, or just connect and exchange ideas 🔄</p>
                            <p>Drop me a message anytime 📩 — I’m all ears 🧏‍♂️</p>
                        </div>
                        <div className='w-1/2'>
                            <form className="space-y-3">
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
                                    type='text'
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
                                    >
                                        <BsFillSendFill className='inline-block ml-1' /> Send
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </BlackBox>
            </SectionContainer>

        </>
    )
}

export default Home