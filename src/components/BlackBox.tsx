import React, { type ReactNode } from 'react'

interface BlackBoxProps {
    children: ReactNode;
    className?: string;
}

const BlackBox: React.FC<BlackBoxProps> = ({ children, className }) => {
    return (
        <div className={`rounded-xl overflow-hidden`}>
            <div className="py-1.5 bg-gradient-to-r from-background-light/60 via-background-light to-background-light/60">
            </div>
            <div className={`bg-background-main text-text-main py-7 px-5 md:px-8 ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default BlackBox;