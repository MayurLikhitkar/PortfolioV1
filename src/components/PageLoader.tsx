import React from 'react'
import { GridLoader } from "react-spinners";

const PageLoader: React.FC = () => {
    return (
        <div className='fixed inset-0 w-screen h-screen flex justify-center items-center'>
            <GridLoader color="#5CFFDE" size={15} />
        </div>
    )
}

export default PageLoader