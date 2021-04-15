import styles from "./SlugHead.module.css";
import Sparkles from "./Sparkles.js";
import React, { useEffect, useRef, useState } from 'react';

const SlugHead = ({ title, content, value, onValueChange }) => {

    const clickEgg = () => {
        value++;
        onValueChange(value);
        console.log(value);
    }

    const draw = (ctx, frameCount, bollen) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        bollen.forEach(bol => bol.draw());
    }


    return (
        <>
            {value >= 15 ?
                <>
                    <div className={styles.eggContainer}>
                        <div className={styles.eggHatchingDiv}></div>
                        <div className={styles.showEggGrid}>
                            <div className={styles.eggHatchingContent}>
                                <h2>{title}</h2>
                                <p>{content}</p>
                            </div>
                            <div className={`${styles.fadeEgg}`}>
                                <div className={`${styles.egg} ${styles.yellowEgg}`}>
                                    <div className={`${styles.hatchTwo} ${styles.test}`}></div>
                                </div>
                            </div>
                        </div>
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
                                            value >= 1 ?
                                                <div className={styles.hatchZero}></div> :
                                                <div></div>
                                }
                            </div>
                            <div className={styles.eggUnder}></div>
                        </div>
                    </div>
                    <h2 className={styles.yellowTitle}>Hatch the egg!</h2>

                    <Sparkles draw={draw} />

                </>}
        </>
    );
};

export default SlugHead;