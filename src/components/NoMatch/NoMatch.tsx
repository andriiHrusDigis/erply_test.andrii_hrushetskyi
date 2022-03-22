import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { NoMatchProps } from "./declarations";
import { Link } from "../../utils";

export const NoMatch: FC<NoMatchProps> = () => {
  return (
    <Container className="mt-4">
      <h1>⚔ Say "Palanytsia"</h1>
      <p>
        You see this message because you are trying to open non-existing page
        (error 404). <br /> Fix url or go to{" "}
        <Link to="/" className="dontReset">
          homepage
        </Link>
      </p>
    </Container>
  );
};
