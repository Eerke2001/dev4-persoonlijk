import styles from "./AddArticle.module.css";
import React, { useEffect, useRef, useState } from 'react';
//import moment from 'moment';

const AddArticle = ({ onSubmit }) => {

    const [slugValue, setSlugValue] = useState('');
    const currentDate = new Date();

    const handleSlugChange = (e) => {
        setSlugValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!e.target.sender.value) {
            e.target.sender.value = 'A good soul';
        }

        const data = {
            title: e.target.title.value,
            description: e.target.description.value,
            content: e.target.content.value,
            status: 'published',
            slug: e.target.title.value.split(" ").join("-"),
            sender: e.target.sender.value,
            date: currentDate
        };

        console.log(currentDate);
        console.log(data.date);
        e.target.reset();
        onSubmit(data);
        console.log(data);

        //window.location.href = `/articles/${slugValue.split(" ").join("-")}`;
        //console.log(process.env.NEXT_PAGE_URL);

    };

    return (
        <section className={styles.section}>
            <div>
                <p className={styles.info}>De ontvanger zal jouw boodschap in de vorm van een ei krijgen waarin jouw boodschap verstopt zit.</p>
                <p className={styles.info}>Om de boodschap te kunnen lezen, moet de ontvanger 50 keer op het ei klikken.</p>
                <p className={styles.info}>Daarna zal het ei uitkomen, en wordt de boodschap zichtbaar.</p>
            </div>
            <h3>Maak een boodschap</h3>

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
                            Description:
          <textarea className={styles.textarea} name="description" required maxLength="500"></textarea>
                        </label>
                        <label className={`${styles.label} ${styles.messageLabel}`}>
                            Content:
          <textarea name="content" required maxLength="500"></textarea>
                        </label>
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