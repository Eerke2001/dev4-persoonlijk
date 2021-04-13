import styles from "./Comments.module.css";
import React, { useEffect, useRef, useState } from 'react';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Comments = ({ comments = [], sender, value, onValueChange, slideValue }) => {

  const messagesRef = useRef(null);

  const scrollToBottom = () => {
    console.log(messagesRef.current);
    messagesRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start"
    });

    console.log(`RHAAAAAAAAH`);
  };

  useEffect(() => {
    console.log(`the slide value is ${slideValue}`);
  })

  useEffect(() => {
    if (messagesRef.current) {
      console.log(messagesRef.current);
      scrollToBottom();
    }
  }, [comments]);

  const sortChanging = () => {
    value === `up` ? value = `down` : value = `up`;
    onValueChange(value);
  }

  return (
    <>
      <div className={`${styles.sort}`}>
        <h3 className={styles.title}>{sender}</h3>
        <button className={`${styles.sortButton}`} value={value} onClick={sortChanging}>
          {value === `up` ?
            <FontAwesomeIcon icon={faSortDown} /> :
            <FontAwesomeIcon icon={faSortUp} />
          }

        </button>
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
                <li ref={messagesRef} className={`${styles.li} ${styles.testbg}`} key={comment.id}>
                  {console.log(messagesRef.current)}
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
