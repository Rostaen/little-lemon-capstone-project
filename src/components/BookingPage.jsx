import BookingForm from "./BookingForm"

const BookingPage = (props) => {
  return (
    <>
      <div className="container p-3 reservations">
        <h1 aria-labelledby="bookingFormTitle">Book a Reservation</h1>
        <BookingForm submitForm={props.submitForm} />
      </div>
    </>
  )
}

export default BookingPage