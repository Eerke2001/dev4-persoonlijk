import styles from "../styles/Home.module.css";
import Link from "next/link";

const Articles = ({ articles = [] }) => {
    return (
        <div className={styles.grid}>
            {articles.map((article) => (
                <Link key={article.id} href={`/articles/${article.slug}`}>
                    <a className={styles.card}>
                        <h3>{article.title} - <span className={styles.sender}>{article.sender}</span></h3>
                        <p>{article.description}</p>
                    </a>
                </Link>
            ))}
        </div>
    );
};

export default Articles;