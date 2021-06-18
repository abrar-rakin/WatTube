import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div style={{ marginTop: "5%" }}>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px", margin: "auto" }}>
          <Card>
            <Card.Body>
              <h2
                style={{ color: "white", fontSize: "4rem" }}
                className="text-center mb-4"
              >
                Sign Up
              </h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label style={{ color: "white" }}>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label style={{ color: "white" }}>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label style={{ color: "white" }}>
                    Password Confirmation
                  </Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
                <br />
                <button
                  style={{ width: "40%" }}
                  disabled={loading}
                  className="w-100 btn"
                  type="submit"
                >
                  Sign Up
                </button>
              </Form>
              <br />
              <br />
            </Card.Body>
          </Card>
          <div style={{ color: "white" }} className="w-100 text-center mt-2">
            Already have an account?{" "}
            <Link style={{ color: "#ffb26b" }} to="/login">
              Log In
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
