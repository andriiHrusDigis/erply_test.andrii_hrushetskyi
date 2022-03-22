import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { ArticlesList } from "../components/ArticlesList";
import { SearchBar } from "../components/SearchBar";

export const PageMain: FC<{}> = () => {
  return (
    <Container className="mt-4">
      <SearchBar />
      <ArticlesList />
    </Container>
  );
};
