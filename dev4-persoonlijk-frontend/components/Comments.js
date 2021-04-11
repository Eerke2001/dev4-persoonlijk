import styles from "./Comments.module.css";
import React, { useEffect, useRef, useState } from 'react';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Comments = ({ comments = [], sender }) => {

  const messagesRef = useRef(null);
  const scrollToBottom = () => {
    messagesRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start"
    });
  };

  useEffect(() => {
    if (messagesRef.current) {
      console.log(messagesRef.current);
      scrollToBottom();
    }
  }, []);

  return (
    <>
      <div className={`${styles.sort}`}>
        <h3 className={styles.title}>{sender}</h3>
        <div className={`${styles.sortButton}`}>
          <FontAwesomeIcon icon={faSortDown} />
        </div>
      </div>
      <section className={styles.messages} id="ul">
        <ul className={styles.ul}>
          {
            comments.map((comment) => (
              comments.indexOf(comment) !== comments.length - 1 ?
                <li className={styles.li} key={comment.id}>
                  <p className={styles.liName}>{comment.name}</p>
                  <p className={styles.p}>{comment.content}</p>
                </li> :
                <li ref={messagesRef} className={styles.li} key={comment.id}>
                  <p className={styles.liName}>{comment.name}</p>
                  <p className={styles.p}>{comment.content}</p>
                </li>
            ))
          }
        </ul>
      </section>
    </>
  );
};

export default Comments;
