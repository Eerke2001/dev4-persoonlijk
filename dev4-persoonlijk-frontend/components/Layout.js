import styles from "./Layout.module.css";
import Head from "next/head";
import Link from "next/link";
import AddArticle from "./AddArticle";
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hatch The Message</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/e2fdaa5e93.js" crossorigin="anonymous"></script>
      </Head>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <Link href="/">
            <a>Hatch The Message</a>
          </Link>
        </h1>
        <p className={styles.description}>Stuur een boodschap die blijft plakken!</p>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
