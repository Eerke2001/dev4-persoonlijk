import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Articles from "../components/Articles.js";
import styles from "../styles/Home.module.css";
import AddArticle from "../components/AddArticle.js";
import { useState } from "react";

export default function Home({ data }) {

  const [articles, setArticles] = useState(data);
  console.log(articles);

  const handleSubmit = async (article) => {
    //console.log(article);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/articles/`,
      {
        method: "POST",
        body: JSON.stringify(article),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const result = await response.json();
      //console.log(result);
      const tmp = [result, ...articles];
      //console.log(tmp);
      setArticles(tmp);
    }
  };

  //console.log(data);
  return (
    <Layout>
      <AddArticle onSubmit={handleSubmit}></AddArticle>
      <Articles articles={articles} />
    </Layout>
  );
}
export const getStaticProps = async () => {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?_sort=id:desc`
  );
  const data = await resp.json();

  return {
    props: {
      data,
    },
  };
};
