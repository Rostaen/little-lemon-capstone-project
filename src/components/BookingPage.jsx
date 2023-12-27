import BookingForm from "./BookingForm"

const BookingPage = (props) => {
  return (
    <>
      <div className="container p-3 reservations">
        <h1 aria-labelledby="bookingFormTitle">Book a Reservation</h1>
        <BookingForm
            availableTimes={props.availableTimes}
            setAvailableTimes={props.setAvailableTimes}
            updateTimes={props.updateTimes}
        />
      </div>
    </>
  )
}

export default BookingPage