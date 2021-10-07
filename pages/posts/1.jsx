import React from "react";
import { useParams } from "react-router";

export default function Post1() {
  const { params } = useParams();
  console.log(params);
  return <div>This is Post 1</div>;
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST"
  );
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
