import { Link } from 'react-router-dom';
import styled from 'styled-components';
import background from '../../images/background.jpg'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Adjust the height as needed */
  background-image: url(${background}); /* Add the correct path to your image here */
  background-size: cover;
  background-position: center;
`;

export const FormContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5); /* Transparent white background */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

export const ErrorText = styled.p`
  color: red; /* Red color for error messages */
  margin-top: 0.1px;
`;

export const LoginPage = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputField = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const LoginButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const RegisterLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  margin-top: 10px;
  font-size: 16px;
  transition: color 0.3s, text-decoration 0.3s;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;