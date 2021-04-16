import styles from "./SlugHead.module.css";
import Sparkles from "./Sparkles.js";
import React, { useEffect, useRef, useState } from 'react';
import { faCut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SlugHead = ({ title, content, value, onValueChange, draw }) => {

    const clickEgg = () => {
        value++;
        onValueChange(value);
        console.log(value);
    }

    const [copySuccess, setCopySuccess] = useState('');
    const urlRef = useRef(null);

    function copyToClipboard(e) {

        setCopySuccess('');

        urlRef.current.value = window.location.href;
        urlRef.current.select();

        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the whole text area selected.
        e.target.focus();
        setCopySuccess('Copied!');
        console.log(copySuccess);
        console.log(window.location.href);
    };

    return (
        <>
            {copySuccess === 'Copied!' ?
                <div className={styles.copiedMessage}>
                    You copied the link!
                </div> :
                <div>
                </div>
            }

            <div className={styles.urlButton} onClick={copyToClipboard}>
                <FontAwesomeIcon icon={faCut} />
            </div>
            <form style={{ position: 'absolute', top: '0px', left: '0px', opacity: 0, zIndex: -10 }}>
                <input ref={urlRef} value=''></input>
            </form>
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
                    <Sparkles draw={draw} />
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
                    <h2 className={styles.hatchTitle}>Hatch the egg!</h2>

                </>}
        </>
    );
};

export default SlugHead;