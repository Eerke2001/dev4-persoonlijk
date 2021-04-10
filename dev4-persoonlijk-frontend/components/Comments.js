import styles from "./Comments.module.css";

const Comments = ({ comments = [] }) => {
  return (
    <>
      <h3 className={styles.title}>Chat</h3>
      <section className={styles.messages}>
        <ul className={styles.ul}>
          {comments.map((comment) => (
            <li className={styles.li} key={comment.id}>
              <strong>{comment.name}</strong>
              <p>{comment.content}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Comments;
