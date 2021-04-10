import styles from "./Comments.module.css";

const Comments = ({ comments = [] }) => {
  return (
    <>
      <h3>Comments</h3>
      <section className={styles.messages}>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
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
