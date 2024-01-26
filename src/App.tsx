import React from 'react';
import './App.module.css';
import styles from './App.module.css';
import {Header} from "./Components/Header/Header";
import {pointTexts, subTexts} from "./texts/texts";
import {PointItem} from "./Components/PointItem/PointItem";
import {TextBlock} from "./Components/TextBlock/TextBlock";

function App() {

    const pointItems = pointTexts.map((pointText) => <PointItem
        key={pointText.pointNumber}
        number={pointText.pointNumber} title={pointText.title}
        text={pointText.text}/>)

    const textItems = subTexts.map((text, index) => <TextBlock key={index}
                                                               text={text.subText}/>)

    return (
        <div className={styles.app}>
            <div className={styles.book_cover}>
                <Header/>
                <section className={styles.content}>
                    {textItems}
                    {pointItems}
                </section>
            </div>
        </div>
    );
}

export default App;
