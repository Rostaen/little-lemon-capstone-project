import { useFormik } from "formik";
import * as Yup from 'yup';
import { useEffect, useReducer, useCallback } from "react";
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

const BookingForm = (props) => {
    const [state, dispatch] = useReducer(reducer, {availableTimes: [] });

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        date: Yup.date().required("Date is required")
            .min(new Date(), "Selected date must be today or a future date"),
        time: Yup.string().required("Time is required"),
        guests: Yup.number().required("Number of guests is required")
            .min(1, "At least 1 guest is required")
            .max(10, "We cannot accomidate more than 10 guests"),
        occasion: Yup.string().required("Occasion is required"),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            date: '',
            time: '',
            guests: 1,
            occasion: 'Celebration',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const guestData = [
                values.name,
                values.date,
                values.time,
                values.guests,
                values.occasion
            ];
            props.submitForm(guestData);
        }
    });

    const fetchData = useCallback(async () => {
        try {
            return await fakeAPI.fetchAPI(new Date(formik.values.date));
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }, [formik.values.date]);

    useEffect(() => {
       fetchData().then((data) => {
        dispatch({ type: "SET_AVAILABLE_TIMES", payload: data });
       })
    }, [fetchData]);

    const changeDate = (e) => {
        formik.handleChange(e);
        fetchData();
    }

    return (
        <main className="p-3 row">
            <section className="col col-12 col-lg-4 reservationForm">
                <form onSubmit={formik.handleSubmit} aria-labelledby="bookingFormLabel">
                    <div className="p-2">
                        <label htmlFor="res-name" className="pe-2">Name</label>
                        <input
                            className="p-1"
                            id="res-name"
                            name="name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            area-required="true" />
                        {formik.touched.name && formik.errors.name && <div className="error">{formik.errors.name}</div>}
                    </div>
                    <div className="p-2">
                        <label className="pe-2" htmlFor="res-date">Choose date</label>
                        <input
                        className="p-1"
                        type="date"
                        id="res-date"
                        name="date"
                        onChange={changeDate}
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                        aria-required="true" />
                        {formik.touched.date && formik.errors.date && <div className="error">{formik.errors.date}</div>}
                    </div>
                    <div className="p-2">
                        <label className="pe-2" htmlFor="res-time">Choose time</label>
                        <select
                            className="p-1"
                            id="res-time"
                            name="time"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.time}
                            aria-label="Select a time">
                            <AvailableTimes />
                        </select>
                        {formik.touched.time && formik.errors.time && <div className="error">{formik.errors.time}</div>}
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
                            name="guests"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.guests}
                            aria-label="Number of guests"
                            aria-describedby="guestsHint"/>
                        {formik.touched.guests && formik.errors.guests && <div className="error">{formik.errors.guests}</div>}
                    </div>
                    <div className="p-2">
                        <label className="pe-2" htmlFor="occasion">Occasion</label>
                        <select
                            className="p-1"
                            id="occasion"
                            name="occasion"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.occasion}
                            aria-label="Select an occasion">
                            <Occasions />
                        </select>
                        {formik.touched.occasion && formik.errors.occasion && <div className="error">{formik.errors.occasion}</div>}
                    </div>
                    <div className="p-2">
                        <input
                            className="btn"
                            type="submit"
                            value="Make Your Reservation"
                            aria-label="Submit reservation form" />
                    </div>
                    <div className="p-2 reminder">
                        * All fields are required
                    </div>
                </form>
            </section>
            <section className="col col-12 col-lg-4 availableTimes">
                <h2 className="text-center">Available Times</h2>
                <h3 className="text-center">{formik.values.date}</h3>
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
