import styles from "./Layout.module.css";
import Head from "next/head";
import Link from "next/link";
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sticky Message</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <Link href="/">
            <a>Sticky Message</a>
          </Link>
        </h1>
        <p className={styles.description}>Stuur een boodschap die blijft plakken!</p>
        <Link href="/subscribe">
          <a>Schrijf je in voor onze nieuwsbrief</a>
        </Link>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
