import CallToAction from "./CallToAction";
import { useLocation } from "react-router-dom";

const ConfirmedBooking = () => {
  const location = useLocation();
  const customProp = location.state?.customProp || 'default';
  const [name, date, time, guests, occasion] = customProp;
  console.log(name, date, time, guests, occasion);

  return (
    <div className="container p-2">
      <h2>Reservation Complete</h2>
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
  )
}

export default ConfirmedBooking;