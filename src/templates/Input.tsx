import React, { type InputHTMLAttributes } from 'react'

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
    return (
        <div>
            <input
                className={`bg-muted-foreground/15 p-2 w-full rounded border border-primary-default/20 text-text ${className || ''}`}
                {...props}
            />
        </div>
    )
}

export default Input