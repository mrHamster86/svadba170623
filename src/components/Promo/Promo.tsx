import styles from './Promo.module.scss';

type PromoProps = {
    children: React.ReactNode;
}

export const Promo: React.FC<PromoProps> = ({ children }) => {
    return (
        <div className={styles.promo}>
            {children}
        </div>
    );
};
