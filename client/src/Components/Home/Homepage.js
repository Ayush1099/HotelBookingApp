import React, { useState, useEffect } from 'react';
import HotelCard from './HotelCard';
import { CardContainer, ViewBookingsButton } from './CardStyle';
import { HotelImages } from '../../Data/Constant';
import Cookies from "js-cookie";

function Homepage() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await fetch('http://localhost:4000/gethotels', {
        headers: {
          authorization: `${Cookies.get('Token')}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        const dbHotels = data;
        const mergedHotels = dbHotels.map((dbHotel, index) => ({
          ...dbHotel,
          images: HotelImages[index % HotelImages.length].images,
        }));
        setHotels(mergedHotels);
      }
    } catch (error) {
      console.error('Error fetching hotels:', error);
    }
  };
  return (
    <div>
      <CardContainer>
        {hotels.map((hotel) => (
          <HotelCard
          key={hotel.id}
          title={`${hotel.HotelName}`}
          phoneNo={`Phone Number: ${hotel.PhoneNo}`}
          address={`Address: ${hotel.Address}`}
          images={hotel.images}
          />
          ))}
      </CardContainer>
      <ViewBookingsButton to="/bookings" >View Bookings</ViewBookingsButton>
    </div>
  );
}

export default Homepage;
