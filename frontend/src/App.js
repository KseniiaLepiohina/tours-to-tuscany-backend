import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import AboutUs from './pages/About_Us';
import ContactUs from './pages/Contact_Us';
import Tours from './pages/Tours';
import Login from './pages/auth/Login';
import CreateAccount from './pages/auth/CreateAccount';
import ResetPassword from './pages/auth/ResetPassword';
import CheckEmail from './pages/auth/CheckEmail';
import NewPassword from './pages/auth/NewPassword';
import ApprovedPassword from './pages/auth/ApprovedPassword';
import HaveTickets from './pages/account/HaveTickets';
import NoTickets from './pages/account/NoTickets'
import SpecificTour from './pages/SpecificTour'


import BookingDetails from './pages/Purchase/BookingDetails';
import Payment from './pages/Purchase/Payment'
import UserDetails from './pages/Purchase/UserDetails';
import OrderCompleted from './pages/Purchase/OrderComplete';
import Search from './components/search';
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  return (
    <div className="App">
      <Auth0Provider
      
      domain={process.env.AUTH0_DOMAIN}
      clientId={process.env.AUTH0_CLIENT_ID}
      authorizationParams={{redirect_uri:window.location.origin}}
      >

      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={<SpecificTour />} />
          <Route path='/contact' element={<ContactUs />} />

          <Route path='/booking/:id' element={<BookingDetails />} />

          <Route path='/User' element={<UserDetails />} />
          <Route path='/Payment' element={<Payment />} />
          <Route path='/OrderCompleted' element={<OrderCompleted />} />

          <Route path="/auth/login" element={<Login />} />
          <Route path='/account/haveTickets' element={<HaveTickets />} />
          <Route path='/account/noTickets' element={<NoTickets />} />

          <Route path="/auth/createAccount" element={<CreateAccount />} />
          <Route path='/auth/resetpassword' element={<ResetPassword />} />
          <Route path='/auth/checkemail' element={<CheckEmail />} />
          <Route path='/auth/newPassword' element={< NewPassword />} />
          <Route path='/auth/newPassword/approvedPassword' element={<ApprovedPassword />} />
          <Route path='/search' element={<Search />} />
        </Routes>

        <Footer />
      </BrowserRouter>
</Auth0Provider>
    </div>
  );
}

export default App;
