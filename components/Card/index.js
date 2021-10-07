import React from "react";
import PropTypes from "prop-types";
import { Container, Title, Image, Button } from "./styles/Card";
import Link from "next/link";
export default function Card({ key, handleFilter, children, ...restProps }) {
  return (
    <Container {...restProps}>
      <>
        {children}
        <Button type="button">
          <Link href={`/posts/1`}>Đi đến bài post</Link>
        </Button>
        <Button onClick={handleFilter} type="button">
          Xóa
        </Button>
      </>
    </Container>
  );
}

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Card.Image = function CardImage({ src, ...restProps }) {
  return <Image {...restProps} src={src} alt="Image" />;
};
