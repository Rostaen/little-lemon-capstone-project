// Import necessary libraries and components
import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

// Mock the props and functions needed for the test
const mockProps = {
  setAvailableTimes: jest.fn(),
  updateTimes: jest.fn(() => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]),
};

// Test suite for BookingForm component
describe('BookingForm Component', () => {
  it('should initialize times correctly', () => {
    // Render BookingForm with mockProps
    render(<BookingForm {...mockProps} />);

    // Call the initializeTimes function
    screen.getByLabelText('Choose date').value = '2023-12-29';
    console.log('Date value:', screen.getByLabelText('Choose date').value);
    screen.getByText('Make Your Reservation').click();

    // Assert that setAvailableTimes has been called with the expected times
    expect(mockProps.setAvailableTimes).toHaveBeenCalledWith([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);

    expect(screen.getByText('17:00')).toBeInTheDocument();
    expect(screen.getByText('18:00')).toBeInTheDocument();
    // ... Add more assertions as needed
  });
});