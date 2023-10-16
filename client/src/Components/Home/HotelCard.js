import React, { useState } from 'react';
import { Card, Title, Image, Description, BookButton, ImageContainer, LeftArrow, RightArrow } from "./CardStyle";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HotelCard = ({ title, phoneNo, address, images, onBookNow }) => {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    const BookingForm = () => {
        navigate(`/bookingform?title=${encodeURIComponent(title)}`);
    }
    return (
        <Card>
            <Title>{title}</Title>
            <ImageContainer>
                <Image src={images[currentImageIndex]} />
                <LeftArrow onClick={prevImage}>
                    <FaArrowLeft />
                </LeftArrow>
                <RightArrow onClick={nextImage}>
                    <FaArrowRight />
                </RightArrow>
            </ImageContainer>
            <Description>{phoneNo}</Description>
            <Description>{address}</Description>
            <BookButton onClick={BookingForm}>Book Now</BookButton>
        </Card>
    );
};

export default HotelCard;