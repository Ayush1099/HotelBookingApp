import styled from 'styled-components';
import background from '../../../images/background.jpg'

export const CardContainer = styled.div`
background-image: url(${background});
  background-size: cover; /* Add this line to make the background cover the entire container */
  background-repeat: no-repeat; /* Add this line to prevent the background from repeating */
  background-attachment: fixed; /* Add this line to keep the background fixed while scrolling */
  min-height: 100vh; /* Set a minimum height of the container to cover the entire viewport */
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  padding: 20px;
`;

export const Card = styled.div`
    max-width: 360px; /* Increased width */
    width: 100%;
    height : 40%;
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

export const Title = styled.div`
    margin-top: 2px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
`;

export const Description = styled.div`
    font-weight: 400;
    margin-top: 1px;
    margin-bottom: 1px;
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: ${({ isExpanded }) => (isExpanded ? 'unset' : '4')};
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    transition: all 0.8s ease-in-out;
`;

export const UpdateButton = styled.button`
  background-color: #007bff;
  padding: 10px 20px;
  font-size: 16px;
  background: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  display: block;
  left: 0;
  right: 0;
  margin-bottom: 10px;
  width: 100%;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const DeleteButton = styled.button`
  background-color: #ff0000;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  border: none;
  cursor: pointer;
  display: block;
  left: 0;
  right: 0;
  margin-bottom: 10px;
  width: 100%;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cc0000;
  }
`;