import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Container, Card, Button, Modal } from "react-bootstrap";
import { ActiveArticleProps } from "./declarations";
import { Link } from "../../utils";
import { useTypedSelector } from "../../hooks/useTypedselector";
import "./styles.css";
import { setActiveArticle } from "../../redux/articles/actionCreators";

export const ActiveArticle: FC<ActiveArticleProps> = () => {
  const activeArticle = useTypedSelector(
    (state) => state.articles.activeArticle,
  );
  const dispatch = useDispatch();

  const handleClose = () => dispatch(setActiveArticle(null));

  return (
    <Modal show={!!activeArticle} onHide={handleClose}>
      {activeArticle && (
        <Modal.Body>
          <h2>{activeArticle.title}</h2>
          <p>Author: {activeArticle.author}</p>
          <p>Published at: {activeArticle.publishedAt}</p>
          <p>Source: {activeArticle.source?.name}</p>
          <p>Description: {activeArticle.description}</p>
          <p>
            <img src={activeArticle.urlToImage} style={{ width: "100%" }} />
          </p>
          <p>{activeArticle.content}</p>
          <p>
            See full version:{" "}
            <a href={activeArticle.url} target="_blank" rel="noreferer">
              link
            </a>
          </p>
        </Modal.Body>
      )}
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
