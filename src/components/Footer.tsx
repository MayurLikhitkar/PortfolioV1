import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className="px-5 py-10 lg:py-15">
            <div className="container mx-auto max-w-screen-xl text-center">
                <div className='text-center text-sm text-text-main font-semibold'>
                    <span className='text-lg'>&copy;</span> {new Date().getFullYear()} - Developed By <span className='text-primary-main'>Mayur Likhitkar</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer