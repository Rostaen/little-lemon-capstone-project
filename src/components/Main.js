import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";

const Main = () => {

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
                <Route path="/reservations" element={<BookingPage />} />
            </Routes>
            <div className="container p-2">
                <Footer />
            </div>
        </>
    )
};

export default Main;