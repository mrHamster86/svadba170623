import styles from './EventSchedule.module.scss';

export const EventSchedule = () => {
    return (
        <div className={styles.conteiner}>
            <div className={styles.wrapper}>
                <div className={styles.schedule}>
                    <h2 className='visually-hidden'>Расписание:</h2>
                    <div className={[styles.item, styles.zags].join(' ')}>
                        <h3>Регистрация</h3>
                        <address>ЗАГС&nbsp;<br />ул. Малая Покровская, 9</address>
                        <time>в 15:00</time>
                    </div>
                    <div className={[styles.item, styles.banquet].join(' ')}>
                        <h3>Банкет</h3>
                        <address>«Forself»&nbsp;<br />Зеленский съезд, 4</address>
                        <time>в 16:30</time>
                    </div>
                </div>
            </div>
        </div>
    );
}