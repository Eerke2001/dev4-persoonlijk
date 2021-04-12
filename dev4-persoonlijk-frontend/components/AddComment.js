import styles from "./AddComment.module.css";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddComment = ({ onSubmit, slideValue, onSlideValueChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      content: e.target.content.value,
    };
    e.target.reset();
    onSubmit(data);
    console.log(data);
  };

  const getClick = () => {
    slideValue === 1 ? slideValue += 1 : slideValue -= 1
    onSlideValueChange(slideValue);
    console.log(slideValue);
  }

  return (
    <section>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <label className={styles.namelabel}>
          <input className={styles.nameInput} placeholder="Naam" type="text" name="name" required />
        </label>
        <div className={styles.send}>
          <label>
            <textarea placeholder="Aa" className={styles.textarea} name="content" required maxLength="500"></textarea>
          </label>
          <button className={styles.submit} type="submit" value={slideValue} onClick={getClick}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddComment;
