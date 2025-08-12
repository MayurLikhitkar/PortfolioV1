import React, { type TextareaHTMLAttributes } from 'react'

const TextArea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ className, rows, required = false, ...props }) => {
    return (
        <div>
            <textarea
                className={`bg-muted-foreground/15 p-2 w-full rounded border border-primary-default/20 text-text ${className || ''}`}
                rows={rows}
                {...props}
            />
        </div>
    )
}

export default TextArea