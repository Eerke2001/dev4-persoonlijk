import styles from "../styles/Home.module.css";
import Link from "next/link";

const Articles = ({ articles = [] }) => {

    const colorArray = [`#9cffbe`, `#ff85ad`, `#f4b5ff`, `#9cf3ff`, `#96b6ff`, `#ffdb63`];

    return (
        <>
            {/* <h3>Recent verstuurde berichten:</h3>
            <div className={styles.cardDisplay}>
                {articles.map((article) => (
                    <Link key={article.id} href={`/articles/${article.slug}`}>
                        <a style={{ backgroundColor: colorArray[Math.floor(Math.random() * 6)], marginTop: `${Math.floor(Math.random() * 20)}px` }} className={styles.card}>
                            <h3 className={styles.title}>{article.title}</h3>
                            <p className={styles.sender}>- {article.sender}</p>
                            <p>{article.description}</p>
                        </a>
                    </Link>
                ))}
            </div> */}
        </>
    );
};

export default Articles;