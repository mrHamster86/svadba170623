import { EventSchedule } from "../EventSchedule/EventSchedule";
import { WeddingDate } from "../WeddingDate/WeddingDate";

import styles from './Invite.module.scss';

export const Invite = () => {
    return (
        <div id="#invite" className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <h1>Приглашаем&nbsp;вас на&nbsp;нашу&nbsp;свадьбу</h1>
                </div>
                <div className={styles.newlyweds}>
                    <p>Татьяна <small>и</small> Евгений</p>
                </div>
                <WeddingDate />
            </div>
            <EventSchedule />
        </div>
    );
}
