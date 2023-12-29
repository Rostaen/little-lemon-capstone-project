import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import BookingPage from './components/BookingPage';
import fakeAPI from './components/FakeAPI';
import BookingForm from './components/BookingForm';

// Mock the props and functions needed for the test
const mockProps = {
  setAvailableTimes: jest.fn(),
  updateTimes: jest.fn(() => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]),
  testDate: jest.fn(() => ["2023-02-01"]),
};

// Test suite for BookingForm component
describe('BookingForm/Page Components', () => {
  test("Render Reservation Booking Header", () => {
    act(() => {
      render(<BookingPage />);
    });
    const header = screen.getByText("Book a Reservation");
    expect(header).toBeInTheDocument();
  });

  test("Test initialize times", () =>{
    const timeStamps = fakeAPI.fetchAPI(new Date("2024-02-01"));
    localStorage.clear();
    act(() => {
      render(
        <div>
          {timeStamps.map((time) => (
            <div key={time}>{time}</div>
          ))}
        </div>
      )
    })
    expect(screen.getAllByText(/:00/)[1]).toBeInTheDocument();
    //expect(screen.getAllByAltText(/:00/)[0]).toBeInTheDocument();
    expect(timeStamps[1]).toHaveLength(5);
  });

  test("Validate form fields", async () => {
    act(() => (
      render(<BookingForm />)
    ))
    const timeStamps = fakeAPI.fetchAPI(new Date("2024-02-01"));
    const testName = "Jerry Duggen";
    const testDate = "2024-20-01";
    const testTime = timeStamps[3];
    const testGuests = 3;

    fireEvent.change(screen.getByLabelText("Name"), {
      target: {value: testName}
    });
    fireEvent.change(screen.getByLabelText("Choose date"), {
      target: {value: testDate}
    });
    fireEvent.change(screen.getByLabelText("Choose time"), {
      target: {value: testTime}
    });
    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: {value: testGuests}
    });
    fireEvent.click(screen.getByText("Make Your Reservation"));

    await waitFor(() => {
      expect(screen.getByText("Congratulations, your reservation is successfull! We'll see you for dinner.")).toBeInTheDocument();
    }, {timeout: 10000 });
  });
});

// import { act, fireEvent, render, screen } from "@testing-library/react";
// import Bookings, {
//   initializeTimes,
//   updateTimes,
// } from "./components/MainComponents/Reservation";
// import BookingForm from "./components/MainComponents/BookingForm";
// describe("Testing Reservation Form Func", () => {
//   test("Renders the Reservation heading", () => {
//     render(<Bookings />);
//     const headingElement = screen.getByText("Make a Reservation");
//     expect(headingElement).toBeInTheDocument();
//   });

//   test("Test initialize times", () => {
//     // This test was designed having fake api calls in mind
//     const times = initializeTimes("2024-12-26");
//     localStorage.clear();
//     render(
//       <div>
//         {times.map((time, index) => (
//           <div key={index}>{time}</div>
//         ))}
//       </div>
//     );
//     expect(screen.getAllByText(/:00/)[0]).toBeInTheDocument();
//     expect(times.length === 4);
//   });

//   test("Test update times", () => {
//     // This test was designed having fake api calls in mind
//     localStorage.clear();
//     const times = initializeTimes("2024-12-26");
//     const updated_times = updateTimes("2024-12-26", times[0]);
//     render(
//       <div>
//         {updated_times.map((time, index) => (
//           <div key={index}>{time}</div>
//         ))}
//       </div>
//     );
//     expect(screen.getAllByText(/:00/)[0]).toBeInTheDocument();
//     expect(times.length === 3);
//   });

//   test("Validates the fields", () => {
//     render(<Bookings />);
//     const times = initializeTimes("2024-12-26");
//     const test_date = "2024-12-26";
//     const test_time = times[0];
//     const test_guests = "4";

//     fireEvent.change(screen.getByLabelText("Choose date"), {
//       target: { value: test_date },
//     });
//     fireEvent.change(screen.getByLabelText("Choose time"), {
//       target: { value: test_time },
//     });
//     fireEvent.change(screen.getByLabelText("Number of guests"), {
//       target: { value: test_guests },
//     });

//     fireEvent.click(screen.getByText("Make your reservation"));

//     expect(
//       screen.getByText(
//         `Reservation confirmed for a party of ${test_guests} on ${test_date} at ${test_time}`
//       )
//     ).toBeInTheDocument();
//   });

//   test("Validate it wont accept wrong date input", () => {
//     render(<Bookings />);
//     const times = initializeTimes("2024-12-26");
//     const test_date = "WRONG";
//     const test_time = times[0];
//     const test_guests = "4";
//     fireEvent.change(screen.getByLabelText("Choose date"), {
//       target: { value: test_date },
//     });
//     fireEvent.change(screen.getByLabelText("Choose time"), {
//       target: { value: test_time },
//     });
//     fireEvent.change(screen.getByLabelText("Number of guests"), {
//       target: { value: test_guests },
//     });
//     fireEvent.click(screen.getByText("Make your reservation"));
//     expect(
//       screen.queryByText(
//         `Reservation confirmed for a party of ${test_guests} on ${test_date} at ${test_time}`
//       )
//     ).toBeNull();
//   });

//   test("Validate it wont accept wrong time input", () => {
//     render(<Bookings />);
//     const test_date = "2024-12-28";
//     const test_time = "WRONG";
//     const test_guests = "4";
//     fireEvent.change(screen.getByLabelText("Choose date"), {
//       target: { value: test_date },
//     });
//     fireEvent.change(screen.getByLabelText("Choose time"), {
//       target: { value: test_time },
//     });
//     fireEvent.change(screen.getByLabelText("Number of guests"), {
//       target: { value: test_guests },
//     });
//     fireEvent.click(screen.getByText("Make your reservation"));
//     expect(
//       screen.queryByText(
//         `Reservation confirmed for a party of ${test_guests} on ${test_date} at ${test_time}`
//       )
//     ).toBeNull();
//   });
// });

// test("Validate it wont accept wrong date input", () => {
//   render(<Bookings />);
//   const times = initializeTimes("2024-12-26");
//   const test_date = "2024-12-26";
//   const test_time = times[0];
//   const test_guests = "WRONG";
//   fireEvent.change(screen.getByLabelText("Choose date"), {
//     target: { value: test_date },
//   });
//   fireEvent.change(screen.getByLabelText("Choose time"), {
//     target: { value: test_time },
//   });
//   fireEvent.change(screen.getByLabelText("Number of guests"), {
//     target: { value: test_guests },
//   });
//   fireEvent.click(screen.getByText("Make your reservation"));
//   expect(
//     screen.queryByText(
//       `Reservation confirmed for a party of ${test_guests} on ${test_date} at ${test_time}`
//     )
//   ).toBeNull();
// });
