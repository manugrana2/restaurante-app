import { useState } from "react";
import "./BookingForm.css"
import { useEffect } from "react";
export default function BookingForm({ avialability, dispatch, post }) {
    const [booking, setBooking] = useState({ date: "yyyy-mm-dd", time: avialability[0], guests: "", occasion: 1 });
    const [validinput, setvalidinput] = useState({ date: false, time: false, guests: false, occasion: false })
    const [currentDate, setCurrentDate] = useState({ year: 2023, month: 0o6, day: 13 });
    const [validForm, setValidForm] = useState(false);
    const[touchedInput, settouchedInput] = useState({date: false, time: false, guests: false, occasion: false})
    // Get the current year from a server :)
    useEffect(() => {
        fetch("http://api.geonames.org/timezoneJSON?formatted=true&lat=47.01&lng=10.2&username=demo&style=full")
            .then(response => response.json())
            .then(data => {
                if (data.time) {
                    let date = data.time.replace(" ", "T")
                    let year = new Date(date).getFullYear()
                    setCurrentDate(currentDate => ({ ...currentDate, year: year }));
                }
            })
    }, [])
    useEffect(() => {
        console.log(validinput)
        if (!Object.values(validinput).includes(false)) {
            setValidForm(true);
        }
    }, [validinput])

    useEffect(validateForm, [booking, currentDate]);
    function validateForm() {
        // Validate the date
        let date = new Date(booking.date);
        if (date.getFullYear() >= currentDate.year && date.getMonth() + 1 >= currentDate.month && date.getDate() + 1 >= currentDate.day) {
            setvalidinput((prev) => ({ ...prev, date: true }))
        }
        else {
            setvalidinput((prev) => ({ ...prev, date: false }))
        }

        //Validate the time
        let timePattern = /^([1][6-9]|[2][0-3]):([0][0]|[3][0])$/;
        if (timePattern.test(booking.time)) {
            setvalidinput((prev) => ({ ...prev, time: true }))
        } else {
            setvalidinput((prev) => ({ ...prev, time: false }))
        }
        //Validate guests  number
        if (booking.guests >= 1 && booking.guests <= 10) {
            setvalidinput((prev) => ({ ...prev, guests: true }))
        } else {
            setvalidinput((prev) => ({ ...prev, guests: false }))
        }
        //Vidate the occasion input
        if (booking.occasion > 0 && booking.occasion <= 2) {
            setvalidinput((prev) => ({ ...prev, occasion: true }))
        } else {
            setvalidinput((prev) => ({ ...prev, occasion: false }))
        }
    }

    const pushBooking = (e) => {
        e.preventDefault();
        settouchedInput({date: true, time: true, guests: true, occasion: true})
        let booked = post(booking)
        if (booked && validForm) {
            window.location.href = "/bookings/confirmation"
        }
    };
    const handleChange = (e) => {
        setBooking(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
        if (e.target.name === 'date') {
            dispatch({ type: "updateDate", date: [e.target.value] })
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
                    onBlur={()=>{settouchedInput({...touchedInput, date:true})}}
                    aria-invalid={!validinput.date && touchedInput.date? "true":""}
                />
                {!validinput.date && touchedInput.date ? <span className="error">Write or select a valid date</span>:""}

                <select
                    name="time"
                    value={booking.time}
                    id="res-time"
                    onChange={handleChange}
                    aria-invalid={!validinput.time ? "true":""}
                >
                    {avialability.map((value, index) => <option value={value} key={index}>{value}</option>)}
                </select>
                {!validinput.time?<span className="error">Select a time</span>:""}
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
                    onBlur={()=>{settouchedInput({...touchedInput, guests:true})}}
                    aria-invalid={!validinput.guests && touchedInput.date? "true":""}
                />
                {!validinput.guests && touchedInput.guests?<span className="error">Number of guests should be between 1-10</span>:""}
                <label htmlFor="occasion">Occasion</label>
                <select
                    name="occasion"
                    value={booking.occasion}
                    id="occasion"
                    onChange={handleChange}
                    aria-invalid={!validinput.date ? "true":""}
                >
                    <option value={1}>Birthday</option>
                    <option value={2}>Anniversary</option>
                </select>
                {!validinput.occasion?<span className="error">Select a valid option</span>:""}
                <input type="submit" value="Make Your reservation" className={!validForm ? "blocked" : ""} />
            </form>

        </div>
    )
}