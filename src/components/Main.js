/* import { Route, Routes } from "react-router-dom";*/
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import { useState } from "react";

const Main = () => {
    const [availableTimes, setAvailableTimes] = useState();
    const [page, setPage] = useState(<Homepage />);

    function updateTimes(){
        return (["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    }

    function handleBookingClick(){
        setPage(<BookingPage
                    availableTimes={availableTimes}
                    setAvailableTimes={setAvailableTimes}
                    updateTimes={updateTimes}
                />);
    }

    return (
        <>
            <div className="container p-3">
                <div className='row'>
                    <Header />
                    <Nav />
                </div>
            </div>
            <BookingPage
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                updateTimes={updateTimes}
            />
            {/*page*/}
            <div className="container p-2">
                <Footer />
            </div>
        </>
    )
};

export default Main;
