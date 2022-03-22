import React, { FC, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/user/actionsCreators";
import { LoginProps } from "./declarations";

export const Login: FC<LoginProps> = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [token, setToken] = useState<string>("");

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispath(login(email, token));
    navigate("/");
  };

  return (
    <Container className="mt-4">
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicToken">
          <Form.Label>Token</Form.Label>
          <Form.Control
            type="text"
            placeholder="Token"
            required
            value={token}
            onChange={(event) => setToken(event.target.value)}
          />
          <Form.Text className="text-muted">
            You can take token{" "}
            <a
              target="_blank"
              rel="noreferer"
              href="https://newsapi.org/account"
            >
              here
            </a>
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
