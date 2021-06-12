import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <div style={{ marginTop: "5%", marginLeft: "34%" }}>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2
                style={{ color: "white", fontSize: "4vw" }}
                className="text-center mb-4"
              >
                Password Reset
              </h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label style={{ color: "white" }}>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <button
                  style={{ width: "50%", textAlign: "center" }}
                  disabled={loading}
                  className="w-100 btn"
                  type="submit"
                >
                  Reset Password
                </button>
              </Form>
              <br />
              <br />
              <div className="w-100 text-center mt-3">
                <Link style={{ color: "#ffb26b" }} to="/login">
                  Login
                </Link>
              </div>
            </Card.Body>
          </Card>
          <div style={{ color: "white" }} className="w-100 text-center mt-2">
            Need an account?{" "}
            <Link style={{ color: "#ffb26b" }} to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
