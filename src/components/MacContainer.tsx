import React, { type ReactNode } from 'react'
import { BsQuestionCircle } from 'react-icons/bs'
import { GoDotFill } from 'react-icons/go'
import { MdFolder } from 'react-icons/md'
import Tooltip from '../templates/Tooltip';

interface MacContainerProps {
    children: ReactNode;
    title: string;
    description: string;
    className?: string;
}

const MacContainer: React.FC<MacContainerProps> = ({ children, className, title, description }) => {
    return (
        <div className={`rounded-xl overflow-hidden max-w-4xl mx-auto ${className}`}>
            <div className="py-2.5 px-4 bg-gradient-to-r from-background-main via-background-light to-background-main flex items-center justify-between">
                <div>
                    <GoDotFill className='text-error-main inline-block text-xl' /><GoDotFill className='text-warn-main inline-block text-xl' /><GoDotFill className='text-success-main inline-block text-xl' />
                </div>
                <h1 className='text-2xl font-semibold text-primary-dark flex gap-2 items-center'><MdFolder />{title}</h1>
                <div>
                    <Tooltip text={description} position='bottom-right'>
                        <BsQuestionCircle className='text-text-dark inline-block text-2xl' />
                    </Tooltip>
                </div>
            </div>
            <div className='bg-background-main py-10 px-4'>
                {children}
            </div>
        </div>
    )
}

export default MacContainer