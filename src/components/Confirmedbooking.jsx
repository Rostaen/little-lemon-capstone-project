import CallToAction from "./CallToAction";
import { useLocation } from "react-router-dom";

const ConfirmedBooking = () => {
  const location = useLocation();
  const customProp = location.state?.customProp || 'default';
  const [name, date, time, guests, occasion] = customProp;

  return (
    <main className="container p-2 row completedReservation">
      <h2>Reservation Complete</h2>
      <div className="col col-12 col-lg-6 reservationInfo">
        <p>
          Congratulations, your reservation is successfull! We'll see you for dinner.
        </p>
        <p>
          Name: {name} <br />
          Date: {date} <br />
          Time: {time} <br />
          # of Guests: {guests} <br />
          Occasion: {occasion}
        </p>
        <CallToAction
          text="Return to Main Page"
          useClassName="yellowButton"
          link="/"
          aria-label="Return to Main Page" />
      </div>
      <div className="col col-12 col-lg-6">
        <img src="../images/restaurant chef B.jpg" alt="Person preparing food in kitchen." className="reservationComplete" />
      </div>
    </main>
  )
}

export default ConfirmedBooking;