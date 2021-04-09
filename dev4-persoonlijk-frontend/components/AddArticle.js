import styles from "./AddComment.module.css";
import moment from 'moment';

const AddArticle = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: e.target.title.value,
            description: e.target.description.value,
            content: e.target.content.value,
            status: 'published',
            slug: e.target.title.value.split(" ").join("-")
        };
        console.log(data.slug);
        e.target.reset();
        onSubmit(data);
        console.log(data);
    };

    return (
        <section>
            <h3>Add article</h3>
            <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
                <label className={styles.label}>
                    Title:
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
                <input type="submit" value="Send" />
            </form>
        </section>
    );
};

export default AddArticle;