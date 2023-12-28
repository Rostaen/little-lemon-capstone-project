import BookingForm from "./BookingForm"

const BookingPage = () => {
  return (
    <>
      <div className="container p-3 reservations">
        <h1 aria-labelledby="bookingFormTitle">Book a Reservation</h1>
        <BookingForm />
      </div>
    </>
  )
}

export default BookingPage