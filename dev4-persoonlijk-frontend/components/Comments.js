import styles from "./Comments.module.css";
import React, { useEffect, useRef, useState } from 'react';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Comments = ({ comments = [], sender, value, onValueChange, slideValue }) => {

  const messagesRef = useRef(null);
  const scrollToBottom = () => {
    messagesRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start"
    });
    console.log(`RHAAAAAAAAH`);
  };

  useEffect(() => {
    if (messagesRef.current) {
      console.log(messagesRef.current);
      scrollToBottom();
    }
  }, []);

  const sortChanging = () => {
    value === `up` ? value = `down` : value = `up`;
    onValueChange(value);
  }

  // if (slideValue === 1) {
  //   scrollToBottom();
  // } else {
  //   scrollToBottom();
  // }

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
