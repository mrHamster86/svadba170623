import { ControllerRenderProps } from 'react-hook-form';
import { Icon } from '../Icon/Icon';

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
    onChange,
    onBlur,
}: CheckboxProps) => {
    return (
        <div className={styles.checkbox}>
            <input
                id={id}
                type="checkbox"
                className="visually-hidden"
                name={name}
                onChange={onChange}
                onBlur={onBlur}
            />
            <label htmlFor={id} className={styles.label}>
                <Icon icon='checkbox' mix={styles.icon} />
                {label}
            </label>
        </div>
    );
}
