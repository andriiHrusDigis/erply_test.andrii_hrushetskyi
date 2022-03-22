import React, { FC, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedselector";
import { updateUserInfo } from "../../redux/user/actionsCreators";
import { ProfileProps } from "./declarations";

export const Profile: FC<ProfileProps> = () => {
  const dispath = useDispatch();
  const {
    name: initialName,
    email: initialEmail,
    token: initialToken,
    isLoading,
  } = useTypedSelector((state) => state.user);

  const [name, setName] = useState<string>(initialName as string);
  const [email, setEmail] = useState<string>(initialEmail as string);
  const [token, setToken] = useState<string>(initialToken as string);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispath(updateUserInfo(name, email, token));
  };

  return (
    <Container className="mt-4">
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="profileName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="profileEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="profileToken">
          <Form.Label>Token</Form.Label>
          <Form.Control
            type="text"
            placeholder="Token"
            required
            value={token}
            onChange={(event) => setToken(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Save updates"}
        </Button>
      </Form>
    </Container>
  );
};
