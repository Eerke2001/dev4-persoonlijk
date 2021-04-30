import Comments from "../../components/Comments";
import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import AddComment from "../../components/AddComment";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import styles from "../../components/Comments.module.css";
import SlugHead from "../../components/SlugHead.js";
// dit is een aanpassing

// draw functie bovenaan om te voorkomen dat hij re-renderd
const draw = (ctx, frameCount, bollen) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  bollen.forEach(bol => bol.draw());
}

const Article = ({ data }) => {

  const router = useRouter();
  if (router.isFallback) {
    return (
      <>
        <div style={{ width: "100vw", height: "100vh", position: "absolute", top: "0rem", left: "0rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div>
            <p>Loading...</p>
            <p>Give the chicken a little more time.</p>
          </div>
        </div>
      </>
    );
  }

  const [comments, setComments] = useState(data.comments);
  const [sorting, setSorting] = useState(`down`);
  const [slider, setSlider] = useState(1);
  const [eggClick, setEggClick] = useState(0);

  //setInterval(setComments(data.comments), 1000);


  const handleSubmit = async (comment) => {
    //console.log(comment);
    comment.article = data.id;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/comments/`,
      {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const result = await response.json();
      const tmp = [...comments, result];
      //console.log(tmp);
      setComments(tmp);
    }
  };


  return (
    <Layout>
      <>
        <SlugHead image={data.image} color={data.color} date={data.date} title={data.title} description={data.description} value={eggClick} onValueChange={value => setEggClick(value)} draw={draw} />
        {/* <ReactMarkdown source={data.content} escapeHtml={false} /> */}
        {sorting === `up` ?
          <div className={`${styles.chat} ${styles.up}`}>
            <Comments comments={comments} sender={data.sender} value={sorting} onValueChange={value => setSorting(value)} slideValue={slider} />
            <AddComment onSubmit={handleSubmit} slideValue={slider} onSlideValueChange={slideValue => setSlider(slideValue)} />
          </div>
          :
          <div className={`${styles.chat} ${styles.down}`}>
            <Comments comments={comments} sender={data.sender} value={sorting} onValueChange={value => setSorting(value)} slideValue={slider} />
            <AddComment onSubmit={handleSubmit} slideValue={slider} onSlideValueChange={slideValue => setSlider(slideValue)} />
          </div>
        }

      </>
    </Layout>
  );
};

export default Article;

export const getStaticProps = async ({ params }) => {
  const r = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/articles/?slug=${params.slug}`
  );
  const data = await r.json();

  return {
    props: {
      data: data.pop(), // The pop() method in JavaScript removes the last element of an array and returns that element. It will remove an item from the end of an array and return that item.
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const r = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?_limit=3&_sort=id:desc`
  );
  const data = await r.json();

  return {
    paths: data.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: true,
  };
};
