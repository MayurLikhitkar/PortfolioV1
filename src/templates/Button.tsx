import React, { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    link?: boolean;
    target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
    href?: AnchorHTMLAttributes<HTMLAnchorElement>['href'];
    variant?: 'contained' | 'outline';
    disabled?: boolean;
    className?: string;
}

const baseStyles = 'rounded-md py-2 px-4 font-semibold cursor-pointer group relative flex items-center justify-center overflow-hidden transform transition-transform duration-100 ease-in-out hover:scale-105';

const variantStyles: Record<string, string> = {
    outline: 'bg-background-main border border-border-light/40 text-text-light',
    contained: 'border border-light text-dark-dark bg-secondary-main hover:text-dark-dark'
};


const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'contained',
    link = false,
    href,
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
                    <a
                        href={href}
                        target={target}
                        className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
                        <span>{children}</span><div className="absolute inset-0 flex justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div className={`relative w-4 ${variant === 'contained' ? 'bg-background-dark/50' : 'bg-primary-light/30'}`}></div></div>
                    </a >
                    :
                    <button
                        type={type}
                        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
                        disabled={disabled}
                        {...rest}>
                        <span>{children}</span><div className="absolute inset-0 flex justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div className={`relative w-4 ${variant === 'contained' ? 'bg-background-dark/50' : 'bg-primary-light/30'}`}></div></div>
                    </button>}
        </>
    );
};

export default Button;
