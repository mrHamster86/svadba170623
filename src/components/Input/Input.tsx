import { ChangeEventHandler, FocusEventHandler, LegacyRef } from 'react';
import { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';

import style from './Input.module.scss';

interface InputProps extends ControllerRenderProps {
    id: string;
    label: string;
    placeholder?: string;
    description?: string;
    required?: boolean;
}

export const Input = ({
    id,
    name,
    label,
    placeholder = '',
    description,
    required,
    ref,
    onChange,
    onBlur,
}: InputProps) => {
    return (
        <div className={style.input}>
            <label htmlFor={id}>{label}</label>
            <input
                type="text"
                id={id}
                name={name}
                placeholder={placeholder}
                required={required}
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
            />
            {description && (
                <span>{description}</span>
            )}
        </div>
    );
};