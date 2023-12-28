import { Route, Routes, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./Confirmedbooking";
import fakeAPI from "./FakeAPI";
import { useState } from "react";

const Main = () => {
    const [formData, setFormData] = useState([]);
    const navigate = useNavigate();

    const submitForm = (data) => {
        const results = fakeAPI.submitAPI(data);
        if(results){
            setFormData(...formData, data);
            navigate("/confirmation", {state: {customProp: formData }});
        }
    }

    return (
        <>
            <div className="container p-3">
                <div className='row'>
                    <Header />
                    <Nav />
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/reservations" element={<BookingPage submitForm={submitForm} />} />
                <Route path="/confirmation" element={<ConfirmedBooking />} />
            </Routes>
            <div className="container p-2">
                <Footer />
            </div>
        </>
    )
};

export default Main;