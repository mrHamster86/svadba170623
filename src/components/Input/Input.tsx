import { ControllerRenderProps } from 'react-hook-form';
import InputMask from 'react-input-mask';

import style from './Input.module.scss';

type InputProps = ControllerRenderProps & {
    id: string;
    label: string;
    hidden?: boolean;
    placeholder?: string;
    description?: string;
    required?: boolean;
    mask?: string | (string | RegExp)[];
    maskChar?: string | null | undefined;
    pattern?: string;
};

export const Input = (props: InputProps) => {
    const {
        id,
        name,
        label,
        value,
        placeholder = '',
        description,
        required,
        hidden,
        mask = '',
        maskChar = null,
        pattern,
        onChange,
        onBlur,
    } = props;
    const classNames = [style.input, hidden ? 'visually-hidden' : ''];

    return (
        <div className={classNames.join(' ')}>
            <label htmlFor={id} className="visually-hidden">{label}</label>
            <InputMask
                type="text"
                id={id}
                name={name}
                placeholder={placeholder}
                required={required}
                value={value}
                mask={mask}
                pattern={pattern}
                maskChar={maskChar}
                onChange={onChange}
                onBlur={onBlur}
            />
            {description && (
                <span className={style.des}>{description}</span>
            )}
        </div>
    );
};