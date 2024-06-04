import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Room";
import HotelBookingSearch from "./pages/HotelBookingSearch";
import RoomDetail from "./pages/RoomDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Room />} />
        <Route path="/room/:id" element={<RoomDetail />} />
        <Route path="/hotel-booking-search" element={<HotelBookingSearch />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;