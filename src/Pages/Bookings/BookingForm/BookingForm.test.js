import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: jest.fn(),
    }),
}));

test('BookingForm allows the user to book successfully', async () => {
    const mockDispatch = jest.fn();
    const mockPost = jest.fn(() => true); // simulate successful post
    const mockAvailability = ["16:00", "17:00", "18:00"]; // mock your availability data

    render(<BookingForm avialability={mockAvailability} dispatch={mockDispatch} post={mockPost} />);

    fireEvent.change(screen.getByLabelText(/Choose date/), {
        target: { value: '2024-12-24' },
    });
    fireEvent.change(screen.getByLabelText(/Number of guests/), {
        target: { value: '5' },
    });
    fireEvent.change(screen.getByRole('combobox', { name: /Occasion/ }), {
        target: { value: '2' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /Make Your reservation/i }));


    await waitFor(() => expect(mockPost).toHaveBeenCalled());
});

