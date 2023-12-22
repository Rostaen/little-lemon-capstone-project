import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import AvailableTimes from "./AvailableTimes";
import Occasions from "./Occasions";

const BookingForm = () => {
    const [date, setDate] = useState();
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(2);
    const [theOccasion, setTheOccasion] = useState("Celebration");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const changeDate = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
    }
    const changeTime = (e) => {
        const newTime = e.target.value;
        setTime(newTime);
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
        <form onSubmit={handleSubmit}>
            <div>
                <FormLabel htmlFor="res-date">Choose date</FormLabel>
                <Input type="date" id="res-date" onChange={changeDate} />
            </div>
            <div>
                <FormLabel htmlFor="res-time">Choose time</FormLabel>
                <Select id="res-time " onChange={changeTime}>
                    <AvailableTimes />
                </Select>
            </div>
            <div>
                <FormLabel htmlFor="guests">Number of guests</FormLabel>
                <Input type="number" placeholder="1" min="1" max="10" id="guests" onChange={changeGuests} />
            </div>
            <div>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select id="occasion" onChange={changeOccasion}>
                    <Occasions />
                </Select>
            </div>
            <div>
                <Input type="submit" value="Make Your reservation" />
            </div>
        </form>
    );
}

export default BookingForm;
