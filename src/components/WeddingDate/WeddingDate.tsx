import styles from './WeddingDate.module.scss';

export const WeddingDate = () => {
    return (
        <div className={styles.date}>
            <div className={styles.month}>июнь</div>
            <div className={styles.day}>17</div>
            <div className={styles.year}>2023</div>
        </div>
    );
};
