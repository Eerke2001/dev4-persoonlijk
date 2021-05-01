import styles from "./AddArticle.module.css";
import React, { useEffect, useRef, useState } from 'react';
//import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
//import moment from 'moment';

const AddArticle = ({ onSubmit }) => {

    const [slugValue, setSlugValue] = useState('');
    const currentDate = new Date();
    console.log(currentDate);

    const randomNum = Math.floor(Math.random() * 100000);
    //console.log(randomNum);

    const handleSlugChange = (e) => {
        setSlugValue(e.target.value);
    }

    const [image, setImage] = useState();
    const [loadingstate, setLoadingstate] = useState('');
    const [checkimg, setCheckimg] = useState('');

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


    const uploadFile = async e => {
        setImage('');
        setLoadingstate('loading image...');
        console.log("uploading...");
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'imgfolder');

        const res = await fetch('https://api.cloudinary.com/v1_1/eerke2001/image/upload', {
            method: 'POST',
            body: data
        });

        const file = await res.json();
        setImage(file.secure_url);
        setLoadingstate('');
        setCheckimg('new');
        //this.setState({ image: file.secure_url })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!e.target.sender.value) {
            e.target.sender.value = 'A good soul';
        }

        const slugCreator = e.target.title.value.split(" ").join("-");
        const officialSlug = `${slugCreator}-${randomNum}`;

        const data = {
            title: e.target.title.value,
            description: e.target.description.value,
            status: 'published',
            slug: officialSlug,
            sender: e.target.sender.value,
            date: currentDate,
            color: e.target.color.value,
            image: image
        };

        console.log(currentDate);
        console.log(data.date);
        e.target.reset();
        onSubmit(data);
        console.log(data);

        window.location.href = `/articles/${officialSlug}`;
        //console.log(process.env.NEXT_PAGE_URL);

    };


    return (
        <section className={styles.section}>
            <div>
                <p className={styles.info}>De ontvanger zal jouw boodschap in de vorm van een ei krijgen waarin jouw boodschap verstopt zit.</p>
            </div>
            <h3 className={styles.h3}>Maak een boodschap</h3>

            <form onSubmit={(e) => handleSubmit(e)} >

                <label className={`${styles.label}`}>
                    <input className={`${styles.nameInput}`} type="text" name="sender" placeholder="Jouw naam" />
                </label>
                <div className={styles.form}>
                    <div>
                        <label className={`${styles.label} ${styles.messageLabel}`}>
                            Titel boodschap:
          <input className={`${styles.titleInput}`} type="text" name="title" onChange={handleSlugChange} value={slugValue} required />
                        </label>
                        <label className={`${styles.label} ${styles.messageLabel}`}>
                            Schrijf een boodschap:
          <textarea className={styles.textarea} name="description" required maxLength="500"></textarea>
                        </label>
                        <div className={`${styles.label} ${styles.messageLabel}`}>
                            <p className={styles.eggCol}>Kleur van het ei:</p>
                            <div className={styles.colorLabel}>
                                <label className={`${styles.label} ${styles.messageLabel}`}>
                                    <div className={styles.backColorInput}>
                                        <div className={styles.colorInputField}>
                                            <input type="radio" id="yellow" name="color" value="yellow"></input>
                                            <p className={styles.colorInputText}>geel</p>
                                        </div>
                                        <div className={styles.yellowEgg}></div>
                                    </div>
                                </label>
                                <label className={`${styles.label} ${styles.messageLabel}`}>
                                    <div className={styles.backColorInput}>
                                        <div className={styles.colorInputField}>
                                            <input type="radio" id="blue" name="color" value="blue"></input>
                                            <p className={styles.colorInputText}>blauw</p>
                                        </div>
                                        <div className={styles.blueEgg}></div>
                                    </div>
                                </label>
                                <label className={`${styles.label} ${styles.messageLabel}`}>
                                    <div className={styles.backColorInput}>
                                        <div className={styles.colorInputField}>
                                            <input type="radio" id="green" name="color" value="green"></input>
                                            <p className={styles.colorInputText}>groen</p>
                                        </div>
                                        <div className={styles.greenEgg}></div>
                                    </div>
                                </label>
                                <label className={`${styles.label} ${styles.messageLabel}`}>
                                    <div className={styles.backColorInput}>
                                        <div className={styles.colorInputField}>
                                            <input type="radio" id="pink" name="color" value="pink"></input>
                                            <p className={styles.colorInputText}>roze</p>
                                        </div>
                                        <div className={styles.pinkEgg}></div>
                                    </div>
                                </label>
                                <label className={`${styles.label} ${styles.messageLabel}`}>
                                    <div className={styles.backColorInput}>
                                        <div className={styles.colorInputField}>
                                            <input type="radio" id="red" name="color" value="red"></input>
                                            <p className={styles.colorInputText}>rood</p>
                                        </div>
                                        <div className={styles.redEgg}></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <label htmlFor="file" className={`${styles.label} ${styles.messageLabel}`}>
                            Kies een leuke afbeelding:
                            {checkimg !== 'new' ?
                                <div htmlFor="file-upload" className={styles.customUpload}>
                                    Upload afbeelding
                            </div> :
                                <div htmlFor="file-upload" className={styles.customUpload}>
                                    Wissel afbeelding
                            </div>
                            }
                            {
                            }
                            <input id="file-upload" className={styles.imageUpload} type="file" id="file" name="file" accept="image/x-png,image/gif,image/jpeg" placeholder="upload image" required onChange={uploadFile} />
                        </label>
                        <div className={styles.loadingStateDiv}>
                            {
                                image && size.width > 540 ?
                                    <img width="500" src={image} alt="preview image"></img> :
                                    image && size.width > 460 ?
                                        <img width="420" src={image} alt="preview image"></img> :
                                        image && size.width > 400 ?
                                            <img width="360" src={image} alt="preview image"></img> :
                                            image && size.width > 350 ?
                                                <img width="310" src={image} alt="preview image"></img> : image &&
                                                <img width="280" src={image} alt="preview image"></img>
                            }
                            {
                                loadingstate === "loading image..." &&
                                <div className={styles.flexLoaders}>
                                    <p className={styles.loadingState}>loading image...</p>
                                    <div className={styles.loader}>
                                        <div className={styles.loadBlue}></div>
                                        <div className={styles.loadGreen}></div>
                                        <div className={styles.loadYellow}></div>
                                        <div className={styles.loadRed}></div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    {slugValue ?
                        <p>{slugValue.split(" ").join("-")}</p> :
                        <p></p>
                    }

                    <input className={styles.submit} type="submit" value="Create message" />
                </div>
            </form>
        </section>
    );
};

export default AddArticle;