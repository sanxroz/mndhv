import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./labs/[id].js";
import styles from "./index.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const databaseId = process.env.NOTION_DATABASE_ID_LABS;

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
              <h3 className="heading-3">Learn by building</h3>
            </div>
            <h1 className="text-header-drafts">Labs</h1>
            <p className="description-drafts">
              Get messy with AI and have fun learning! Explore new fields and
              build exciting tools to showcase to your friends and family.
            </p>

            <a
              className="framer-zo7c36 framer-1u69nbu"
              href="./labs#labs"
              data-projection-id={33}
            ></a>
          </div>
        </header>
        <div className="body-div">
          <ol className="div-flex-labs" id="labs">
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
                <li
                  href={`/labs/${post.id}`}
                  key={post.id}
                  className={styles.post}
                >
                  <h3 className={styles.postTitle}>
                    <Link href={`/labs/${post.id}`}>
                      <Text text={post.properties.Name.title} />
                    </Link>
                  </h3>

                  <p className={styles.postDescription}>{date}</p>
                  <Link href={`/labs/${post.id}`}>Read post →</Link>
                </li>
              );
            })}
          </ol>
        </div>
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
