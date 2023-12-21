import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const BookingForm = () => {
    const [date, setDate] = useState();
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(2);
    const [theOccasion, setTheOccasion] = useState("Celebration");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <FormLabel htmlFor="res-date">Choose date</FormLabel>
                <Input type="date" id="res-date" />
            </div>
            <div>
                <FormLabel htmlFor="res-time">Choose time</FormLabel>
                <Select id="res-time ">
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </Select>
            </div>
            <div>
                <FormLabel htmlFor="guests">Number of guests</FormLabel>
                <Input type="number" placeholder="1" min="1" max="10" id="guests" />
            </div>
            <div>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Graduation</option>
                    <option>Celebration</option>
                </Select>
            </div>
            <div>
                <Input type="submit" value="Make Your reservation" />
            </div>
        </form>
    );
}

export default BookingForm;
