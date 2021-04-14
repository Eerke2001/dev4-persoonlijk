import styles from "./AddArticle.module.css";
//import moment from 'moment';

const AddArticle = ({ onSubmit }) => {
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
            sender: e.target.sender.value
        };
        console.log(data.slug);
        e.target.reset();
        onSubmit(data);
        console.log(data);
    };

    return (
        <section className={styles.section}>
            <div>
                <p className={styles.info}>De ontvanger zal jouw boodschap in de vorm van een ei krijgen waarin jouw boodschap verstopt zit.</p>
                <p className={styles.info}>Om de boodschap te kunnen lezen, moet de ontvanger 50 keer op het ei klikken.</p>
                <p className={styles.info}>Daarna zal het ei uitkomen, en wordt de boodschap zichtbaar.</p>
            </div>
            <h3>Maak een boodschap</h3>

            <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
                <div>
                    <label className={styles.label}>
                        Jouw naam:
          <input type="text" name="sender" />
                    </label>
                    <label className={styles.label}>
                        Titel boodschap:
          <input type="text" name="title" required />
                    </label>
                    <label className={styles.label}>
                        Description:
          <textarea name="description" required maxLength="500"></textarea>
                    </label>
                    <label className={styles.label}>
                        Content:
          <textarea name="content" required maxLength="500"></textarea>
                    </label>
                </div>
                <input className={styles.submit} type="submit" value="Create message" />
            </form>
        </section>
    );
};

export default AddArticle;