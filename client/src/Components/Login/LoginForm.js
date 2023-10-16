import React, { useState } from 'react';
import { LoginContainer, LoginPage, InputField, LoginButton, RegisterLink, FormContainer, ErrorText } from './LoginStyle';
import { useNavigate } from 'react-router-dom';
import { useEmail } from '../../Context/EmailContext';
import Cookies from "js-cookie";

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const { setEmailId } = useEmail();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;;

    return emailRegex.test(email);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    else if (!isEmailValid(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length === 0) {
      const response = await fetch("http://localhost:4000/loginUser", {
        method: 'POST',
        body: JSON.stringify(formData), // Convert your form data to JSON
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (response.status === 201) {
        const data = await response.json();
        Cookies.set("Token", data.message);
        setEmailId(formData.email)
        navigate('/home');
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
    <LoginContainer>
      <FormContainer>
        <LoginPage onSubmit={handleSubmit}>
          {errors.global && <ErrorText>{errors.global}</ErrorText>}
          {errors.email && <ErrorText>{errors.email}</ErrorText>}
          {errors.password && <ErrorText>{errors.password}</ErrorText>}
          <InputField
            type="text"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
          <LoginButton type="submit">Login</LoginButton>
        </LoginPage>
        <p>
          Don't have an account? <RegisterLink to="/register">Register</RegisterLink>
        </p>
      </FormContainer>
    </LoginContainer>
  );
}

export default LoginForm;
