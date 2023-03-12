import { ControllerRenderProps } from 'react-hook-form';

import styles from './Checkbox.module.scss';

interface CheckboxProps extends ControllerRenderProps {
    id: string;
    label: string;
    name: string;
}

export const Checkbox = ({
    id,
    label,
    name,
    ref,
    onChange,
    onBlur,
}: CheckboxProps) => {
    return (
        <div className={styles.checkbox}>
            <input
                id={id}
                type="checkbox"
                name={name}
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}
