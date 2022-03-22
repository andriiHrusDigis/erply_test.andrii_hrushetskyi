import React, { FC, useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedselector";
import { updateArticles, setQuery } from "../../redux/articles/actionCreators";
import { login } from "../../redux/user/actionsCreators";
import { SearchBarProps } from "./declarations";

export const SearchBar: FC<SearchBarProps> = () => {
  const dispath = useDispatch();
  const { searchQuery: initialSearchQuery, isLoading } = useTypedSelector(
    (state) => state.articles,
  );

  const [searchQuery, setSearchQuery] = useState<string>(initialSearchQuery);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispath(setQuery(searchQuery));
    dispath(updateArticles());
  };

  useEffect(() => {
    dispath(updateArticles());
  }, []);

  return (
    <Container className="mt-4 p-4 border border-primary rounded">
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="searchQuery">
          <Form.Control
            type="text"
            placeholder="Search Query"
            required
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Search"}
        </Button>
      </Form>
    </Container>
  );
};
