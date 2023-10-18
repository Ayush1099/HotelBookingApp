import LoginForm from './Components/Login/LoginForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './Components/Register/RegisterForm';
import Homepage from './Components/Home/Homepage';
import Bookings from './Components/Booking/Bookings/Bookings';
import BookingForm from './Components/Booking/BookingForm/BookingForm';
import { EmailProvider } from './Context/EmailContext';
import UpdateForm from './Components/Booking/UpdateBooking/UpdateForm';

function App() {
  return (
    <EmailProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/bookingform" element={<BookingForm />} />
          <Route path="/updateform" element={<UpdateForm />} />
        </Routes>
      </Router>
    </EmailProvider>
  );
}

export default App;
