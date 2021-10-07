import React from "react";
import Card from "../components/Card";
import PropTypes from "prop-types";
import styles from "../styles/Home.module.css";
Card.propTypes = {
  item: PropTypes.object,
};
Card.defaultProps = {
  item: {},
};
export default function CardContainer({ key, filter, item }) {
  const handleFilter = () => {
    if (!filter) return;
    filter(item);
  };
  console.log(item);
  return (
    <div className={styles.container}>
      <Card key={key} handleFilter={handleFilter}>
        <Card.Title>{item.title}</Card.Title>
        <Card.Image src={item.imageUrl} />
      </Card>
    </div>
  );
}
