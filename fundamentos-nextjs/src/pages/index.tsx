import styles from "@/styles/pages/home.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | ig.news</title>
      </Head>

      <h1 className={styles.title}>Home</h1>
    </>
  );
}
