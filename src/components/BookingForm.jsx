// import { useFormik } from "formik";
// import * as Yup from 'yup';
import { useState, useEffect, useReducer } from "react";
import AvailableTimes from "./AvailableTimes";
import Occasions from "./Occasions";
import fakeAPI from "./FakeAPI";

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_AVAILABLE_TIMES":
            return { ...state, availableTimes: action.payload };
        default:
            return state;
    }
}

const BookingForm = () => {
    const [state, dispatch] = useReducer(reducer, {availableTimes: [] });
    const [date, setDate] = useState();
    const [guests, setGuests] = useState(1);
    const [theOccasion, setTheOccasion] = useState("Celebration");
    const [selectedTime, setSelectedTime] = useState("");

    const fetchData = async () => {
        try {
            return await fakeAPI.fetchAPI(new Date(date));
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }

    useEffect(() => {
       fetchData().then((data) => {
        dispatch({ type: "SET_AVAILABLE_TIMES", payload: data });
       })
    }, [date]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const changeDate = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
    }
    const changeTime = (e) => {
        const newTime = e.target.value;
        setSelectedTime(newTime);
    }
    const changeGuests = (e) => {
        const newGuests = e.target.value;
        setGuests(newGuests);
    }
    const changeOccasion = (e) => {
        const newOccasion = e.target.value;
        setTheOccasion(newOccasion);
    }

    return (
        <main className="p-3 row">
            <section className="col col-12 col-lg-4 reservationForm">
                <form onSubmit={handleSubmit} aria-labelledby="bookingFormLabel">
                    <div className="p-2">
                        <label className="pe-2" htmlFor="res-date">Choose date</label>
                        <input
                        className="p-1"
                        type="date"
                        id="res-date"
                        onChange={changeDate}
                        aria-required="true" />
                    </div>
                    <div className="p-2">
                        <label className="pe-2" htmlFor="res-time">Choose time</label>
                        <select
                            className="p-1"
                            id="res-time
                            "
                            onChange={changeTime}
                            aria-label="Select a time">
                            <AvailableTimes />
                        </select>
                    </div>
                    <div className="p-2">
                        <label className="pe-2" htmlFor="guests">Number of guests</label>
                        <input
                            className="p-1"
                            type="number"
                            placeholder="1"
                            min="1"
                            max="10"
                            id="guests"
                            onChange={changeGuests}
                            aria-label="Number of guests"
                            aria-describedby="guestsHint"/>
                    </div>
                    <div className="p-2">
                        <label className="pe-2" htmlFor="occasion">Occasion</label>
                        <select
                            className="p-1"
                            id="occasion"
                            onChange={changeOccasion}
                            aria-label="Select an occasion">
                            <Occasions />
                        </select>
                    </div>
                    <div className="p-2">
                        <input
                            className="btn"
                            type="submit"
                            value="Make Your Reservation"
                            aria-label="Submit reservation form" />
                    </div>
                </form>
            </section>
            <section className="col col-12 col-lg-4 availableTimes">
                <h2 className="text-center">Available Times</h2>
                <h3 className="text-center">{date}</h3>
                <ul>
                   {state.availableTimes.map((time) => (
                    <li key={time} className="text-center">{time}</li>
                   ))}
                </ul>
            </section>
            <section className="col col-12 col-lg-4">
                <img src="../images/fishCooking.jpg" alt="Fish cooking on a BBQ" className="bookingImage" />
            </section>
        </main>
    )
}

export default BookingForm;
