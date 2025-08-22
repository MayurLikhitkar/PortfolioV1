import React, { type ReactNode } from 'react'

interface SectionContainerProps {
    children: ReactNode;
    id: string;
    title: string;
    description: string;
    className?: string;
}
const SectionContainer: React.FC<SectionContainerProps> = ({ children, className, id, title, description }) => {
    return (
        <section id={id} className={`px-6 py-15 lg:py-20 ${className}`}>
            <div className="container mx-auto max-w-screen-xl">
                <div className="text-center mb-12 sm:mb-16">
                    <h3 className="text-4xl lg:text-5xl tracking-wide font-bold mb-2 bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent leading-relaxed antialiased">
                        {title}
                    </h3>
                    <p className="text-lg sm:text-xl text-text-main max-w-4xl mx-auto">
                        {description}
                    </p>
                </div>
                {children}
            </div>
        </section>
    )
}

export default SectionContainer;