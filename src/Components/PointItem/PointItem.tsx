import styles from './PointItem.module.css';

type PointItemProps = {
    number: number;
    title: string;
    text: string;
}
export const PointItem = ({number, title, text}: PointItemProps) => {
    return (
        <div
            className={`${styles.point_item} ${styles['point_item_' + number]}`}>
            <div className={styles.title_wrapper}>
                <h1 className={styles.number}>{number}</h1>
                <h2 className={styles.title}>{title}</h2>
            </div>
            <p className={styles.text}>{text}</p>
        </div>
    );
}
