import { useCallback, useState } from 'react';
import { Icon } from '@/components/Icon/Icon';

import styles from './Menu.module.scss';

const navList = [
    {
        text: 'Приглашение',
        link: '#invite',
    },
    {
        text: 'Регистрация',
        link: '#registration',
    },
    {
        text: 'Банкет',
        link: '#banquet',
    },
    {
        text: 'Галерея',
        link: '#gallery',
    },
    {
        text: 'Обратная связь',
        link: '#feedback',
    },
];

export const Menu = () => {
    const [visible, setVisible] = useState(false);

    const hendleButtonClick = useCallback(() => setVisible(!visible), [visible, setVisible]);

    return (
        <nav className={styles.menu}>
            <div className={styles.wrapper}>
                <div className={styles.conteiner}>
                    <div className={[styles.mobileMenu, visible ? styles.mobileMenu_on : styles.mobileMenu_off].join(' ')}>
                        <ul className={styles.list}>
                            {navList.map(({ text, link }) => (
                                <a
                                    className={styles.link}
                                    href={link}
                                    key={link}
                                    onClick={hendleButtonClick}
                                >{text}</a>
                            ))}
                        </ul>
                    </div>
                    <button
                        className={styles.button}
                        onClick={hendleButtonClick}
                    >
                        <Icon icon={visible ? 'menu_close' : 'menu_open'} />
                        <span className='visually-hidden'>{visible ? 'Закрыть меню' : 'Открыть меню'}</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};