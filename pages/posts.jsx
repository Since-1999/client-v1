import React, { useEffect, useState } from "react";
import CardContainer from "../container/Card.Container";
export default function PostList() {
  const [listMovie, setListMovie] = useState([]);
  useEffect(() => {
    if (listMovie) {
      (async () => {
        try {
          const url =
            "https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST";
          const res = await fetch(url);
          const resJson = await res.json();
          console.log(resJson);
          setListMovie(resJson.phim.phimhoathinh);
        } catch (error) {
          console.log(error.message);
        }
      })();
    }
  }, []);
  const filterData = (value) => {
    const newArray = [...listMovie];
    const newDataFiltered = newArray.filter((item) => item !== value);
    setListMovie(newDataFiltered);
  };
  console.log(listMovie);
  const fetchData =
    listMovie.length === 0 ? (
      <div>Loading ...</div>
    ) : (
      listMovie.map((item, index) => {
        return <CardContainer filter={filterData} key={index} item={item} />;
      })
    );
  return <>{fetchData}</>;
}
