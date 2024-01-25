import styles from './BookCover.module.css';
import {Header} from "./Header/Header";
import {pointTexts, subTexts} from "../../texts/texts";
import {PointItem} from "./PointItem/PointItem";
import {TextBlock} from "./TextBlock/TextBlock";


export const BookCover = () => {

    const pointItems = pointTexts.map((pointText) => <PointItem
        key={pointText.pointNumber}
        number={pointText.pointNumber} title={pointText.title}
        text={pointText.text}/>)

    const textItems = subTexts.map((text, index) => <TextBlock key={index}
                                                               text={text.subText}/>)

    return (
        <div className={styles.book_cover}>
            <Header/>
            <section className={styles.content}>
                {textItems}
                {pointItems}
            </section>
        </div>
    );
}
