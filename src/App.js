import React from "react";
import { BrowserRouter as Router,  Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Groomming from "./pages/Groomming"
import Vaccination from "./pages/Vaccination";
import Deworming from "./pages/Deworming";
import Veterinary from "./pages/Veterinary";
import DogWalking from "./pages/DogWalking";
import PetSitters from "./pages/PetSitters";
import Daycare from "./pages/Daycare";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";

// Backend URL
export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/booking" element={<Booking />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/grooming" element={<Groomming />}/>
        <Route path="/vaccination" element={<Vaccination />}/>
        <Route path="/deworming" element={<Deworming />}/>
        <Route path="/veterinary" element={<Veterinary />}/>
        <Route path="/dog-walking" element={<DogWalking />}/>
        <Route path="/pet-sitters" element={<PetSitters />}/>
        <Route path="/dog-daycare" element={<Daycare />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
