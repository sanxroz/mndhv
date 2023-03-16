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
            >
              <div
                className="framer-tesu0h"
                data-framer-component-type="RichTextContainer"
                data-projection-id={34}
                style={{
                  placeContent: "center",
                  alignItems: "center",
                  backgroundColor: "#d5494c",
                  borderRadius: "32px",
                  display: "flex",
                  flex: "0 0 auto",
                  flexFlow: "row nowrap",
                  gap: "10px",
                  height: "min-content",
                  overflow: "hidden",
                  padding: "20px 28px",
                  position: "relative",
                  textDecoration: "none",
                  willChange: "transform",
                  Color: "rgba(255, 255, 255, 0.92)",
                }}
              >
                <p>Start exploring now</p>
              </div>
            </a>
          </div>
        </header>

        <ol className={styles.posts} id="labs">
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
