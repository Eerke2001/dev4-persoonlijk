import styles from "./SlugHead.module.css";
import Sparkles from "./Sparkles.js";
import React, { useEffect, useRef, useState } from 'react';
import { faCut } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SlugHead = ({ image, color, date, title, description, value, onValueChange, draw }) => {

    let today = new Date();
    let dateNew;
    //console.log(date);

    if ((parseInt(today.getMonth() + 1) < 10) && (parseInt(today.getDate()) < 10)) {
        dateNew = today.getFullYear() + "-" + 0 + parseInt(today.getMonth() + 1) + "-" + 0 + today.getDate();
    } else if (parseInt(today.getMonth() + 1) < 10) {
        dateNew = today.getFullYear() + "-" + 0 + parseInt(today.getMonth() + 1) + "-" + today.getDate();
    } else if (parseInt(today.getDate()) < 10) {
        dateNew = today.getFullYear() + "-" + 0 + parseInt(today.getMonth() + 1) + "-" + 0 + today.getDate();
    } else {
        dateNew = today.getFullYear() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getDate();
    }

    //console.log(dateNew);

    const clickEgg = () => {
        value++;
        onValueChange(value);
        //console.log(value);
    }

    if (dateNew === date) {
        //console.log(`HEJHMHZEPOFH`)
    }

    const size = useWindowSize();
    //console.log(size.width);

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });
        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize;
    }

    //console.log(date);

    const [copySuccess, setCopySuccess] = useState('');
    const urlRef = useRef(null);
    const copyRef = useRef(null);
    const copyNewRef = useRef(null);

    function copyToClipboard(e) {

        urlRef.current.value = window.location.href;
        urlRef.current.select();

        if (copyRef.current.className === 'link-i copied-link') {
            copyRef.current.className = 'link-i';
            copyNewRef.current.className = 'link-i copied-link';
        } else {
            copyRef.current.className = 'link-i copied-link';
            copyNewRef.current.className = 'link-i';
        }

        //console.log(copyRef.current.className);

        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the whole text area selected.
        e.target.focus();

        setCopySuccess('Copied!');
        //console.log(copySuccess);
        //console.log(window.location.href);
    };

    return (
        <>
            <div ref={copyRef} className="link-i">
                Link copied to clipboard!
            </div>
            <div ref={copyNewRef} className="link-i">
                Link copied to clipboard!
            </div>

            <div className={styles.urlButton} title="Share the message" onClick={copyToClipboard}>
                <FontAwesomeIcon icon={faShareAlt} />
            </div>
            <form style={{ position: 'absolute', top: '0px', left: '0px', opacity: 0, zIndex: -10 }}>
                <input ref={urlRef} value='' readOnly></input>
            </form>
            {value >= 15 ?
                <>
                    {dateNew !== date ?
                        <>
                            <div className={styles.chickenDivComplete}>
                                <div className={styles.chickenPrison}>
                                    <div className={styles.featherTwo}></div>
                                    <div className={styles.fingOne}></div>
                                    <div className={styles.fingTwo}></div>
                                    <div className={styles.legOne}></div>
                                    <div className={styles.legTwo}></div>
                                    <div className={styles.chickenLegBolTwo}></div>
                                    <div className={styles.chickenLegBolOne}></div>
                                    <div className={styles.chickenHead}></div>
                                    <div className={styles.chickenBody}></div>
                                    <div className={styles.beakOne}></div>
                                    <div className={styles.chickenEye}>
                                        <div className={styles.eyeShine}></div>
                                    </div>
                                    <div className={styles.feather}></div>
                                    <div className={styles.chickenFeather}></div>
                                </div>
                            </div>
                            <div className={styles.eggHatchingContent}>
                                <p className={styles.huh}>Huh? Een kuiken?</p>
                                <p className={styles.faster}>Je zal de volgende keer de boodschap wat eerder moeten uitbroeden!</p>
                            </div>

                            <Sparkles draw={draw} />
                        </> :
                        <>
                            <div className={`${styles.eggContainer} ${styles.containerFlex}`}>
                                <div className={styles.eggHatchingDiv}></div>
                                <div className={styles.showEggGrid}>
                                    <div className={styles.eggHatchingContent}>
                                        <h2>{title}</h2>
                                        <p className={styles.description}>{description}</p>
                                        {
                                            image && size.width > 540 ?
                                                <img className={styles.imageDisp} width="500" src={image} alt="preview image"></img> :
                                                image && size.width > 460 ?
                                                    <img className={styles.imageDisp} width="420" src={image} alt="preview image"></img> :
                                                    image && size.width > 400 ?
                                                        <img className={styles.imageDisp} width="360" src={image} alt="preview image"></img> :
                                                        image && size.width > 350 ?
                                                            <img className={styles.imageDisp} width="310" src={image} alt="preview image"></img> : image &&
                                                            <img className={styles.imageDisp} width="280" src={image} alt="preview image"></img>
                                        }
                                    </div>
                                    {/* <div className={`${styles.fadeEgg}`}>
                                        {color === `blue` ?
                                            <div className={`${styles.egg} ${styles.blueEgg}`}>
                                                <div className={`${styles.hatchTwo} ${styles.test}`}></div>
                                            </div> : color === `green` ?
                                                <div className={`${styles.egg} ${styles.greenEgg}`}>
                                                    <div className={`${styles.hatchTwo} ${styles.test}`}></div>
                                                </div> : color === `pink` ?
                                                    <div className={`${styles.egg} ${styles.pinkEgg}`}>
                                                        <div className={`${styles.hatchTwo} ${styles.test}`}></div>
                                                    </div> : color === `red` ?
                                                        <div className={`${styles.egg} ${styles.redEgg}`}>
                                                            <div className={`${styles.hatchTwo} ${styles.test}`}></div>
                                                        </div> :
                                                        <div className={`${styles.egg} ${styles.yellowEgg}`}>
                                                            <div className={`${styles.hatchTwo} ${styles.test}`}></div>
                                                        </div>
                                        }
                                    </div> */}
                                </div>
                            </div>
                            <Sparkles draw={draw} />
                        </>
                    }
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
                            {color === `blue` ?
                                <div className={`${styles.eggUnder} ${styles.blueEgg}`}></div>
                                : color === `green` ?
                                    <div className={`${styles.eggUnder} ${styles.greenEgg}`}></div>
                                    : color === `pink` ?
                                        <div className={`${styles.eggUnder} ${styles.pinkEgg}`}></div>
                                        : color === `red` ?
                                            <div className={`${styles.eggUnder} ${styles.redEgg}`}></div>
                                            :
                                            <div className={`${styles.eggUnder} ${styles.yellowEgg}`}></div>
                            }
                            {/* <div className={`${styles.eggUnder} ${styles.yellowEgg}`}></div> */}
                        </div>
                    </div>
                    <h2 className={styles.hatchTitle}>Hatch the egg!</h2>

                </>}
        </>
    );
};

export default SlugHead;