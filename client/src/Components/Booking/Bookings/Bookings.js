
import React, { useState, useEffect } from 'react';
import { CardContainer } from './BookingCardStyle';
import BookingCard from './BookingCard';
import { useEmail } from "../../../Context/EmailContext";
import Cookies from "js-cookie";

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const { emailId } = useEmail();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`http://localhost:4000/getBookings/${emailId}`, {
          headers: {
            authorization: `${Cookies.get('Token')}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setBookings(data);
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    }
    fetchBookings();
  }, [emailId]);

  const handleDeleteSuccess = () => {
    window.location.reload();
  }
  return (
    <div>
      <CardContainer>
        {bookings.length === 0 ? <h1>No Bookings</h1> :
          bookings.map((booking) => (
            <BookingCard key={booking._id} booking={booking} onDeleteSuccess={handleDeleteSuccess} />
          ))}
      </CardContainer>
    </div>
  );
}

export default Bookings;
