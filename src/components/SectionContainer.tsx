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
        <section id={id} className={`px-5 py-10 lg:py-15 ${className}`}>
            <div className="container mx-auto max-w-screen-lg">
                <h3 className="text-xl lg:text-2xl uppercase tracking-[3px] font-bold mb-6 bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent leading-relaxed antialiased relative inline-block after:content-[''] after:absolute after:rounded-full after:bottom-[-4px] after:left-0 after:h-[3px] after:w-1/2 after:bg-gradient-to-r after:from-primary-light after:to-primary-dark">
                    {title}
                </h3>
                {children}
            </div>
        </section>
    )
}

export default SectionContainer;