import React, { useState } from 'react';
import { MdEmail, MdDateRange, MdPeople, MdHotel } from 'react-icons/md';
import { FormContainer, Form, InputContainer, Icon, Input, SubmitButton, Card, Title } from "./UpdateFormStyle";
import { useEmail } from '../../../Context/EmailContext';
import { useLocation } from 'react-router-dom';
import Cookies from "js-cookie";

const UpdateForm = () => {
    const { emailId } = useEmail();

    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const [formData, setFormData] = useState({
        email: emailId,
        startDate: params.get('StartDate') || '',
        endDate: params.get('EndDate') || '',
        noOfPersons: params.get('NoOfPersons'),
        noOfRooms: params.get('NoOfRooms'),
        hotelName: params.get('HotelName')
    });

    const formatDateForInput = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0]; // Format the date as "yyyy-MM-dd"
    };

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
            const response = await fetch(`http://localhost:4000/updateBookings`, {
                method: 'PUT',
                headers: {
                    authorization: `${Cookies.get('Token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Booking updated successfully.');
            } else {
                alert('Booking update failed.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <FormContainer>
            <Card>
                <Title>Update Form</Title>
                <Form onSubmit={handleSubmit}>
                    <InputContainer>
                        <Icon>
                            <MdEmail />
                        </Icon>
                        <Input
                            type="text"
                            name="HotelName"
                            placeholder="Hotel Name"
                            value={formData.hotelName}
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
                            value={formatDateForInput(formData.startDate)}
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
                            value={formatDateForInput(formData.endDate)}
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

export default UpdateForm;