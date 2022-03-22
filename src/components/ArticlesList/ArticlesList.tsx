import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Container, Card, Button } from "react-bootstrap";
import { ArticlesListProps } from "./declarations";
import { Link } from "../../utils";
import { useTypedSelector } from "../../hooks/useTypedselector";
import "./styles.css";
import { setActiveArticle } from "../../redux/articles/actionCreators";
import { ActiveArticle } from "../ActiveArticle";

export const ArticlesList: FC<ArticlesListProps> = () => {
  const articles = useTypedSelector((state) => state.articles.articles);
  const dispatch = useDispatch();

  return (
    <Container className="mt-4">
      <ActiveArticle />
      <ul className="ArticlesList">
        {!articles.length && "No articles found"}
        {articles.map((article) => (
          <li className="ArticlesList__item" key={article.title + article.url}>
            <Card className="ArticlesList__card">
              <Card.Img
                style={{ height: "150px", objectFit: "cover" }}
                variant="top"
                src={article.urlToImage}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                  <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => dispatch(setActiveArticle(article))}
                >
                  View more details
                </Button>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </Container>
  );
};
