import React, { FC, useCallback } from "react";
import { Navbar, Container, Nav, Button, Row, Col } from "react-bootstrap";
import { useTypedSelector } from "../../hooks/useTypedselector";
import { NavBarProps } from "./declarations";
import { Link } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout as rawLogout } from "../../redux/user/actionsCreators";

export const NavBar: FC<NavBarProps> = () => {
  const isLogined = useTypedSelector((state) => state.user.isLogined);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(rawLogout());
    navigate("/login");
  };

  return (
    <header className="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Row style={{ width: "100%" }}>
            <Col>
              {isLogined && (
                <Nav className="me-auto">
                  <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                  <Nav.Link onClick={() => navigate("/profile")}>
                    Profile
                  </Nav.Link>
                </Nav>
              )}
            </Col>
            <Col className="d-flex justify-content-end">
              {isLogined ? (
                <Button
                  variant="secondary"
                  onClick={logout}
                  style={{ height: "100%" }}
                >
                  Log out
                </Button>
              ) : (
                <Button variant="primary" onClick={() => navigate("/login")}>
                  Log in
                </Button>
              )}
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
};
