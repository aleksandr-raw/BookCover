import styles from './TextBlock.module.css';

type TextBlockProps = {
    text: string;
}
export const TextBlock = ({text}: TextBlockProps) => {

    return (
        <div className={styles.text_block}>
            <p className={styles.text}>{text}</p>
        </div>
    );
}
