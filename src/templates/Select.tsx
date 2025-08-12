import React from 'react';

type Option = {
    label: string;
    value: string | number;
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    value: string | number;
    options: Option[];
    placeholder: string;
}

const Select: React.FC<SelectProps> = ({
    value,
    placeholder,
    className,
    options,
    ...rest
}) => {
    return (
        <div>
            <select
                value={value}
                {...rest}
                className={`bg-muted-foreground/15 p-2 rounded border border-primary-default/20 text-text py-2 w-full ${className || ''}`}
            >
                {placeholder && (
                    <option value="" className='text-text bg-background' disabled>
                        {placeholder}
                    </option>
                )}
                {options.map((opt) => (
                    <option key={opt.value} className='text-text bg-background' value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
