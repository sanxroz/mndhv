import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./drafts/[id].js";
import styles from "./index.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Drafts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.container}>
        <header className={styles.header}>
          <div className="div-text-hero">
            <div className="div-block-2">
              <h3 className="heading-3">learn. build. ship.</h3>
            </div>
            <h1 className="text-header-drafts">Drafts</h1>
          </div>
        </header>

        <ol className="div-flex-labs" id="blogs">
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (
              <li key={post.id} className={styles.post}>
                <h3 className={styles.postTitle}>
                  <Link href={`/drafts/${post.id}`}>
                    <Text text={post.properties.Name.title} />
                  </Link>
                </h3>

                <p className={styles.postDescription}>{date}</p>
                <Link href={`/drafts/${post.id}`}>Read post →</Link>
              </li>
            );
          })}
        </ol>
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
