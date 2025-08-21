import React from 'react'

interface SectionHeaderProps {
    title: string;
    description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
    return (
        <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-4xl lg:text-5xl tracking-wide font-bold mb-2 bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent leading-relaxed antialiased">
                {title}
            </h3>
            <p className="text-lg sm:text-xl text-text-main max-w-4xl mx-auto">
                {description}
            </p>
        </div>
    )
}

export default SectionHeader