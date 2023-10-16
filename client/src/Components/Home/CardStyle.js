import styled from 'styled-components';
import background from '../../images/background.jpg';
import { Link } from 'react-router-dom';

export const ViewBookingsButton = styled(Link)`
  position: fixed;  // Fix the button position
  top: 20px;
  right: 20px;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  z-index: 1;  // Ensure the button is above other content
`;


export const ImageContainer = styled.div`
  position: relative;
`;

export const ArrowButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.6);
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #007bff; /* Change to your desired arrow color */
`;

export const LeftArrow = styled(ArrowButton)`
  left: 0;
`;

export const RightArrow = styled(ArrowButton)`
  right: 0;
`;

export const CardContainer = styled.div`
    background-image: url(${background}); /* Add the correct path to your image here */
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-around;
    padding: 20px;
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

export const Title = styled.div`
    margin-top: 2px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
`;
export const BookButton = styled.button`
  text-decoration: none !important;
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
    background: #0056b3;
  }
`;

export const Image = styled.img`
    width: 100%;
    height: 180px;
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
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