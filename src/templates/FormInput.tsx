import type { HTMLInputTypeAttribute } from 'react';
import Input from './Input';
import type { FormikProps } from 'formik';

interface FormInputProps<T> {
    label: string
    name: keyof T & string,
    id: string,
    type: HTMLInputTypeAttribute,
    placeholder: string,
    formik: FormikProps<T>,
    required?: boolean
    disabled?: boolean
    className?: string;
    withLabel?: boolean
}

const FormInput = <T,>({
    id,
    placeholder,
    label,
    name,
    className,
    type,
    formik,
    withLabel = true,
    required = false,
    disabled = false
}: FormInputProps<T>) => {
    const error = formik.touched[name] && Boolean(formik.errors[name]);
    const helperText = formik.touched[name] && typeof formik.errors[name] === 'string'
        ? formik.errors[name] : '';

    return (
        <div className={`${className}`}>
            {withLabel && (<label className="w-full inline-block text-base font-medium text-text-main mb-2" htmlFor={id}>{label} {required ? <span className='text-error-main'>*</span> : <></>}</label>)}
            <Input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                value={formik.values[name] as string | number | readonly string[]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={disabled}
                className={error ? '!border-error-main !focus:ring-error-main !focus:border-error-main' : ''}
            />
            {error && (
                <div className="text-sm text-error-main mt-1">{helperText}</div>
            )}
        </div>
    )
}

export default FormInput;