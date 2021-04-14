import styles from "./SlugHead.module.css";
import React, { useEffect, useRef, useState } from 'react';

const SlugHead = ({ title, value, onValueChange }) => {

    const clickEgg = () => {
        value++;
        onValueChange(value);
        console.log(value);
    }

    return (
        <>
            <button className={styles.egg} value={value} onClick={clickEgg}></button>
            <h2>{title}</h2>
        </>
    );
};

export default SlugHead;