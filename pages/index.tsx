import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Haloholic</title>
        <meta name="description" content="Haloholics Art Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://twitter.com/HALOHOLlC">
            Haloholics&apos;s Portfolio POG
          </a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Abys5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Abyss Development
        </a>
      </footer>
    </div>
  );
};

export default Home;
