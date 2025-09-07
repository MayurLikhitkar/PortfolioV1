import React, { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Link, type To } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    link?: boolean;
    to?: To;
    target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
    variant?: 'contained' | 'outline';
    disabled?: boolean;
    className?: string;
}

const baseStyles = 'rounded-md py-1 md:py-2 px-4 font-semibold cursor-pointer group relative flex items-center justify-center overflow-hidden transform transition-transform duration-100 ease-in-out hover:scale-105';

const variantStyles: Record<string, string> = {
    outline: 'bg-background-main border border-border-light/40 text-text-light',
    contained: 'border border-light text-dark-dark bg-secondary-main hover:text-dark-dark'
};


const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'contained',
    link = false,
    to = '/',
    type = 'button',
    target = '_blank',
    disabled = false,
    className = '',
    ...rest
}) => {
    return (
        <>
            {
                link ?
                    <Link
                        to={to}
                        target={target}
                        className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
                        {children}<div className="absolute inset-0 flex justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div className={`relative w-4 ${variant === 'contained' ? 'bg-background-dark/50' : 'bg-primary-light/50'}`}></div></div>
                    </Link>
                    :
                    <button
                        type={type}
                        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
                        disabled={disabled}
                        {...rest}>
                        {children}<div className="absolute inset-0 flex justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div className={`relative w-4 ${variant === 'contained' ? 'bg-background-dark/50' : 'bg-primary-light/50'}`}></div></div>
                    </button>}
        </>
    );
};

export default Button;
