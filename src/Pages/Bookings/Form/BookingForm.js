import { useState } from "react";
import "./BookingForm.css"
export default function BookingForm({avialability, dispatch}) {
    const [booking, Setbooking] = useState({ date: "", time: "", guests: "", occasion: "" });

    const pushBooking = (e) => {
        e.preventDefault();
    };
    const handleChange = (e) => {
        Setbooking(prevState => ({
            ...prevState,
            [e.target.name]: [e.target.value]
        }));
        if(e.target.name==='date'){
            console.log("date changed");
            dispatch({type: "updateDate", date: [e.target.value]})
        }
    }
    return (
        <div className="booking-form-container">
            <form onSubmit={pushBooking}>
                <label htmlFor="res-date">Choose date</label>
                <input
                    value={booking.date}
                    name="date"
                    type="date"
                    id="res-date"
                    onChange={handleChange}
                />
                <select
                    name="time"
                    value={booking.time}
                    id="res-time"
                    onChange={handleChange}
                >
                {avialability.map((value, index) => <option key={index}>{value}</option> )}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                    name="guests"
                    value={booking.guests}
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    onChange={handleChange}
                />
                <label htmlFor="occasion">Occasion</label>
                <select
                    name="occasion"
                    value={booking.occasion}
                    id="occasion"
                    onChange={handleChange}
                >
                    <option value="">None</option>
                    <option value={1}>Birthday</option>
                    <option value={2}>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>

        </div>
    )
}