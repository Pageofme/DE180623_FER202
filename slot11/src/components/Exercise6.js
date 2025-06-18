import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Exercise5 from "./Exercise5";

function Exercise6() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    country: "",
    terms: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    gender: "",
    country: "",
    terms: "",
  });

  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  // Validation function
  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    // Name validation
    if (formData.name.length < 3) {
      formErrors.name = "Name must be at least 3 characters long";
      valid = false;
    }

    // Gender validation
    if (!formData.gender) {
      formErrors.gender = "Please select a gender";
      valid = false;
    }

    // Country validation
    if (!formData.country) {
      formErrors.country = "Please select a country";
      valid = false;
    }

    // Terms validation
    if (!formData.terms) {
      formErrors.terms = "You must agree to the terms";
      valid = false;
    }

    setErrors(formErrors);
    setIsSubmitEnabled(valid);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Use effect to run validation every time form data changes
  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name" className="text-start">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="text-start">
          <Form.Label>Gender:</Form.Label>
          <Row>
            <Col>
              <Form.Check
                type="radio"
                id="male"
                label="Male"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                id="female"
                label="Female"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                id="other"
                label="Other"
                name="gender"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleChange}
              />
            </Col>
          </Row>
          {errors.gender && (
            <Form.Text className="text-danger">{errors.gender}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="country" className="text-start">
          <Form.Label>Country:</Form.Label>
          <Form.Control
            as="select"
            name="country"
            value={formData.country}
            onChange={handleChange}
            isInvalid={!!errors.country}
          >
            <option value="">Select Country</option>
            <option value="Da Nang">Da Nang</option>
            <option value="Hanoi">Hanoi</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.country}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="text-start">
          <Form.Check
            type="checkbox"
            id="terms"
            name="terms"
            label="I agree to the terms and conditions"
            checked={formData.terms}
            onChange={handleChange}
            isInvalid={!!errors.terms}
          />
          {errors.terms && (
            <Form.Text className="text-danger">{errors.terms}</Form.Text>
          )}
        </Form.Group>

        <Button type="submit" disabled={!isSubmitEnabled}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Exercise6;
