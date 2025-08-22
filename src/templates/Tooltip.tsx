import React, { useState } from 'react';

interface TooltipProps {
    children: React.ReactNode;
    text: string;
    position?: 'top' | 'right' | 'bottom' | 'left';
}

const Tooltip: React.FC<TooltipProps> = ({ children, text, position = 'top' }) => {
    const [visible, setVisible] = useState(false);

    // Positioning classes (Tailwind-based)
    const positions = {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    };

    return (
        <div
            className="relative cursor-pointer"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            onFocus={() => setVisible(true)}
            onBlur={() => setVisible(false)}
            tabIndex={0} // For keyboard accessibility
        >
            {children}

            <div
                role="tooltip"
                className={`absolute z-10 px-3 py-1 font-semibold text-xs text-dark-main bg-secondary-main rounded-sm whitespace-normal ${positions[position]} transition-all duration-900 ${visible ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
            >
                {text}
            </div>
        </div>
    );
}

export default Tooltip;