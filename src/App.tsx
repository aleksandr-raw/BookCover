import React from 'react';
import './App.module.css';
import styles from './App.module.css';
import {BookCover} from "./Components/BookCover/BookCover";

function App() {
    return (
        <div className={styles.app}>
            <BookCover/>
        </div>
    );
}

export default App;
