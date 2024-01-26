import styles from './Header.module.css';
import {titleText} from "../../texts/texts";

export const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.number}>{titleText.number}</h1>
            <div className={styles.title_wrapper}>
                <p className={styles.intro}>{titleText.intro}</p>
                <p className={styles.title}>{titleText.title}</p>
                <h2 className={styles.name}>{titleText.name}</h2>
            </div>
        </div>
    );
}
