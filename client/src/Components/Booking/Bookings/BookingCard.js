import { Card, Title, Description, UpdateButton, DeleteButton } from './BookingCardStyle';
import { useNavigate } from 'react-router-dom';
import { useEmail } from '../../../Context/EmailContext';
import Cookies from "js-cookie";

const BookingsCard = ({ booking, onDeleteSuccess }) => {
  const { emailId } = useEmail();
  const navigate = useNavigate();
  const { HotelName, StartDate, EndDate, NoOfPersons, NoOfRooms } = booking;

  const openUpdateForm = () => {
    navigate(`/updateform?HotelName=${encodeURIComponent(HotelName)}&StartDate=${encodeURIComponent(StartDate)}&EndDate=${encodeURIComponent(EndDate)}&NoOfPersons=${encodeURIComponent(NoOfPersons)}&NoOfRooms=${encodeURIComponent(NoOfRooms)}`);
  };
  const handleDelete = async () => {
    try {
      const response = await fetch('http://localhost:4000/deleteBooking', {
        method: 'DELETE',
        headers: {
          authorization: `${Cookies.get('Token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          EmailId: emailId,
          HotelName: HotelName,
          StartDate: StartDate,
          EndDate: EndDate,
          NoOfPersons: NoOfPersons,
          NoOfRooms: NoOfRooms,
        }),
      });

      if (response.ok) {
        alert('Booking deleted successfully.');
        onDeleteSuccess();
      } else {
        alert('Failed to delete booking.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const formatDateForInput = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Format the date as "yyyy-MM-dd"
};

  return (
    <Card>
      <Title>{HotelName}</Title>
      <Description>Start Date: {formatDateForInput(StartDate)}</Description>
      <Description>End Date: {formatDateForInput(EndDate)}</Description>
      <Description>No. of Persons: {NoOfPersons}</Description>
      <Description>No. of Rooms: {NoOfRooms}</Description>
      <UpdateButton onClick={openUpdateForm}>Update</UpdateButton>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </Card>
  );
};

export default BookingsCard;
