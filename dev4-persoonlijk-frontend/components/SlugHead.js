import styles from "./SlugHead.module.css";
import React, { useEffect, useRef, useState } from 'react';

const SlugHead = ({ title, content, value, onValueChange }) => {

    const clickEgg = () => {
        value++;
        onValueChange(value);
        console.log(value);
    }

    return (
        <>
            {value >= 15 ?
                <>
                    <div className={styles.eggHatchingDiv}>
                    </div>
                    <div className={styles.eggHatchingContent}>
                        <h2>{title}</h2>
                        <p>{content}</p>
                    </div>
                </> :
                <>
                    <div className={styles.eggContainer}>
                        <div className={styles.eggGrid}>
                            <div className={styles.egg} onClick={clickEgg}>
                                {
                                    value >= 10 ?
                                        <div className={styles.hatchTwo}></div> :
                                        value >= 5 ?
                                            <div className={styles.hatchOne}></div> :
                                            value >= 2 ?
                                                <div className={styles.hatchZero}></div> :
                                                <div></div>
                                }
                            </div>
                            <div className={styles.eggUnder}></div>
                        </div>
                    </div>
                    <h2>Hatch the egg!</h2>
                </>}
        </>
    );
};

export default SlugHead;