import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import Schedule from './pages/Schedule';
import Pricing from './pages/Pricing';
import Location from './pages/Location';
import Contact from './pages/Contact';
import Register from './pages/Register';
import ConfirmationC from './pages/ConfirmationC';
import ConfirmationR from './pages/ConfirmationR';
import Faq from './pages/Faq';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={ <Home />}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/classes" element={<Classes/>}></Route>
          <Route path="/schedule" element={<Schedule/>}></Route>
          <Route path="/pricing" element={<Pricing/>}></Route>
          <Route path="/location" element={<Location/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/confirmationC" element={<ConfirmationC/>}></Route>
          <Route path="/confirmationR" element={<ConfirmationR/>}></Route>
          <Route path="/faq" element={<Faq/>}></Route>

        </Routes>
      </Router> 
    </>
  );
}
