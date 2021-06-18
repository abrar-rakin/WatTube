import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Home.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
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
                Log In
              </h2>

              {error && (
                <Alert style={{ color: "white" }} variant="danger">
                  {error}
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label style={{ color: "white" }}>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label style={{ color: "white" }}>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <br />
                <button
                  disabled={loading}
                  className="w-100 btn"
                  style={{ width: "40%" }}
                  type="submit"
                >
                  Log In
                </button>
              </Form>
              <br />
              <br />
              <div className="w-100 text-center mt-3">
                <Link style={{ color: "#ffb26b" }} to="/forgot-password">
                  Forgot Password?
                </Link>
              </div>
            </Card.Body>
          </Card>
          <div style={{ color: "white" }} className="w-100 text-center mt-2">
            Need an account?{" "}
            <Link to="/signup" style={{ color: "#ffb26b" }}>
              Sign Up
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
