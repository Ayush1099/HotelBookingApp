import styled from 'styled-components';
import background from '../../../images/background.jpg';

export const FormContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Card = styled.div`
max-width: 360px; /* Increased width */
width: 100%;
border-radius: 10px;
box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.7);
overflow: hidden;
padding: 16px; /* Reduced padding */
display: flex;
flex-direction: column;
gap: 14px;
transition: all 0.5s ease-in-out;

&:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Icon = styled.div`
  padding: 5px;
  svg {
    font-size: 20px;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

export const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  background: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  display: block;
  width: 100%;
  font-size: 16px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;
