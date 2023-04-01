import { ControllerRenderProps } from 'react-hook-form';
import style from './Textarea.module.scss';

interface TextareaProps extends ControllerRenderProps {
    id: string;
    name: string;
    label: string;
    rows?: number;
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
    rows = 2,
    onChange,
    onBlur,
}: TextareaProps) => {
    return (
        <div className={style.textarea}>
            <label htmlFor={id} className="visually-hidden">{label}</label>
            <textarea
                id={id}
                name={name}
                placeholder={placeholder}
                required={required}
                rows={rows}
                onChange={onChange}
                onBlur={onBlur}
            />
            {description && (
                <span className={style.description}>{description}</span>
            )}
        </div>
    );
};