import { WeddingDate } from '../WeddingDate/WeddingDate';

import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <WeddingDate/>
        </footer>
    );
}
