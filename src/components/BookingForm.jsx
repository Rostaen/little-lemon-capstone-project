import { useState, useReducer } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import AvailableTimes from "./AvailableTimes";
import Occasions from "./Occasions";

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_AVAILABLE_TIMES":
            return { ...state, availableTimes: action.payload };
        default:
            return state;
    }
}

const BookingForm = (props) => {
    const [state, dispatch] = useReducer(reducer, {availableTimes: [] });
    const [date, setDate] = useState();
    const [guests, setGuests] = useState(1);
    const [theOccasion, setTheOccasion] = useState("Celebration");
    const [selectedTime, setSelectedTime] = useState("");

    const initializeTimes = () => {
        dispatch({ type: "SET_AVAILABLE_TIMES", payload: props.updateTimes() });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const changeDate = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        initializeTimes();
    }
    const changeTime = (e) => {
        const newTime = e.target.value;
        props.setSelectedTime(newTime);
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
        <div className="p-3 row">
            <div className="col col-12 col-lg-6 reservationForm">
                <form onSubmit={handleSubmit}>
                    <div className="p-2">
                        <label className="pe-2" htmlFor="res-date">Choose date</label>
                        <input className="p-1" type="date" id="res-date" onChange={changeDate} />
                    </div>
                    <div className="p-2">
                        <label className="pe-2" htmlFor="res-time">Choose time</label>
                        <select className="p-1" id="res-time " onChange={changeTime}>
                            <AvailableTimes />
                        </select>
                    </div>
                    <div className="p-2">
                        <label className="pe-2" htmlFor="guests">Number of guests</label>
                        <input className="p-1" type="number" placeholder="1" min="1" max="10" id="guests" onChange={changeGuests} />
                    </div>
                    <div className="p-2">
                        <label className="pe-2" htmlFor="occasion">Occasion</label>
                        <select className="p-1" id="occasion" onChange={changeOccasion}>
                            <Occasions />
                        </select>
                    </div>
                    <div className="p-2">
                        <input className="btn" type="submit" value="Make Your Reservation" />
                    </div>
                </form>
            </div>
            <div className="col col-12 col-lg-6">
                <h2 className="availableTimes">Available Times</h2>
                <ul>
                   {state.availableTimes.map((time) => (
                    <li key={time}>{time}</li>
                   ))}
                </ul>
            </div>
        </div>
    )
}

export default BookingForm;
