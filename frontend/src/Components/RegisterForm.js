import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import wave from "../assets/wave.svg";
import Login from "../assets/login.svg";
import { FaUser, FaLock, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/register", formData);

      navigate("/login");
    } catch (error) {
      console.error("Error registering user", error);
    }
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="login-box">
            <h2 className="login-title">Register</h2>
            <img src={wave} alt="wave" />
            <img src={Login} alt="Login" className="login-icon" />
            <div className="form-padding">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail" className="position-relative">
                  <FaUser className="input-icon" />
                  <div className="height"> |</div>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                </Form.Group>
                <Form.Group
                  controlId="formPassword"
                  className="position-relative"
                >
                  <FaCalendarAlt className="input-icon" />
                  <div className="height"> |</div>
                  <Form.Control
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    placeholder="Date Of Birth"
                  />
                </Form.Group>
                <Form.Group
                  controlId="formPassword"
                  className="position-relative"
                >
                  <FaEnvelope className="input-icon" />
                  <div className="height"> |</div>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
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
                    placeholder="Password"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="login-button"
                >
                  Register
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
