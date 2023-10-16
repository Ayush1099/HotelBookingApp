import React, { useState } from 'react';
import { RegisterContainer, FormContainer, RegisterPage, InputField, RegisterButton, BackToLoginLink, ErrorText } from "./RegisterStyle";
import { useNavigate } from 'react-router';

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
    }
    if (formData.phoneNumber.length !== 10) {
      newErrors.phoneNumber = 'Length of Phone Number should be equal to 10';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length === 0) {
      const response = await fetch("http://localhost:4000/registerUser", {
        method: 'POST',
        body: JSON.stringify(formData), // Convert your form data to JSON
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log('response.status ===',response.status);
      if (response.status === 201) {
        alert("Registration Successfull");
        navigate('/login');
      }
      else {
        const errorData = await response.json(); // Parse the response body as JSON
        setErrors({ global: errorData.message });
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <RegisterContainer>
      <FormContainer>
        <RegisterPage onSubmit={handleSubmit}>
          {errors.global && <ErrorText>{errors.global}</ErrorText>}
          {errors.name && <ErrorText>{errors.name}</ErrorText>}
          {errors.phoneNumber && <ErrorText>{errors.phoneNumber}</ErrorText>}
          {errors.email && <ErrorText>{errors.email}</ErrorText>}
          {errors.password && <ErrorText>{errors.password}</ErrorText>}
          <InputField
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <RegisterButton type="submit">Register</RegisterButton>
        </RegisterPage>
        <p>
          Already have an account? <BackToLoginLink to="/login">Back to Login</BackToLoginLink>
        </p>
      </FormContainer>
    </RegisterContainer>
  );
}

export default RegisterForm;
