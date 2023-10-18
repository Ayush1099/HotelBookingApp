import React, { useState } from 'react';
import { MdEmail, MdDateRange, MdPeople, MdHotel } from 'react-icons/md';
import { FormContainer, Form, InputContainer, Icon, Input, SubmitButton, Card, Title } from "./BookingFormStyle";
import { useLocation } from 'react-router-dom';
import { useEmail } from '../../../Context/EmailContext';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const navigate = useNavigate();
  const { emailId } = useEmail();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const title = params.get('title');

  const [formData, setFormData] = useState({
    email: emailId,
    startDate: '',
    endDate: '',
    noOfPersons: '',
    noOfRooms: '',
    hotelName: title
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/bookings', {
        method: 'POST',
        headers: {
          authorization: `${Cookies.get('Token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Booking submitted successfully.');
        navigate('/bookings');

      } else {
        alert('Booking submission failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <FormContainer>
      <Card>
        <Title>Booking Form</Title>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Icon>
              <MdEmail />
            </Icon>
            <Input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </InputContainer>
          <InputContainer>
            <Icon>
              <MdDateRange />
            </Icon>
            <Input
              type="date"
              name="startDate"
              placeholder="Start Date"
              value={formData.startDate}
              onChange={handleInputChange}
              required
            />
          </InputContainer>
          <InputContainer>
            <Icon>
              <MdDateRange />
            </Icon>
            <Input
              type="date"
              name="endDate"
              placeholder="End Date"
              value={formData.endDate}
              onChange={handleInputChange}
              required
            />
          </InputContainer>
          <InputContainer>
            <Icon>
              <MdPeople />
            </Icon>
            <Input
              type="number"
              name="noOfPersons"
              placeholder="Number of Persons"
              value={formData.noOfPersons}
              onChange={handleInputChange}
              required
            />
          </InputContainer>
          <InputContainer>
            <Icon>
              <MdHotel />
            </Icon>
            <Input
              type="number"
              name="noOfRooms"
              placeholder="Number of Rooms"
              value={formData.noOfRooms}
              onChange={handleInputChange}
              required
            />
          </InputContainer>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </Card>
    </FormContainer>);
};

export default BookingForm;