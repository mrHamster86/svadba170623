import { ControllerRenderProps } from 'react-hook-form';
import style from './Textarea.module.scss';

interface TextareaProps extends ControllerRenderProps {
    id: string;
    name: string;
    label: string;
    placeholder?: string;
    description?: string;
    required?: boolean;
}

export const Textarea = ({
    id,
    name,
    label,
    placeholder = '',
    description,
    required,
    ref,
    onChange,
    onBlur,
}: TextareaProps) => {
    return (
        <div className={style.textarea}>
            <label htmlFor={id}>{label}</label>
            <textarea
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