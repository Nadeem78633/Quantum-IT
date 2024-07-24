import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./LoginForm.css";
import wave from "../assets/wave.svg";
import Login from "../assets/login.svg";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/protected");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", formData);
      login(response.data.token);
      navigate("/protected");
    } catch (error) {
      console.error("Error logging in", error);
    }
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="login-box">
            <h2 className="login-title">Sign In</h2>
            <img src={wave} alt="wave" />
            <img src={Login} alt="Login" className="login-icon" />
            <div className="form-padding">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail" className="position-relative">
                  <FaEnvelope className="input-icon" />
                  <div className="height"> |</div>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group
                  controlId="formPassword"
                  className="position-relative"
                >
                  <FaLock className="input-icon" />
                  <div className="height"> |</div>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                  />
                </Form.Group>
                <Form.Group
                  controlId="formRememberMe"
                  className="d-flex justify-content-between align-items-center"
                >
                  <Form.Check
                    type="checkbox"
                    name="rememberMe"
                    label="Remember me"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="checkbox"
                  />
                  <a href="/forgot-password" className="forgot-password-link">
                    Forgot your password?
                  </a>
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="login-button"
                >
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
