import "./BookingForm.css"

export default function BookingForm() {
    return (
        <div className="booking-form-container">
            <form id="booking">
                <label htmlFor="name">Name: <sup>*</sup></label>
                <input type="text" id="name" name="name" placeholder="Your Name"/>
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" id="lastname" name="lastname" placeholder="Your Lastname"/>
                <label htmlFor="email">Email: <sup>*</sup></label>
                <input type="email" id="email" name="email" />
                <label htmlFor="phone">Phone:</label>
                <input type="phone" id="phone" name="phone" />
                <label htmlFor="date">Date:<sup>*</sup></label>
                <select id="date" name="date">
                    <option>Jan 16</option>
                </select>
                <label htmlFor="hour">Hour:<sup>*</sup></label>
                <select id="hour" name="hour">
                    <option>Jan 16</option>
                </select>
                <div className="seat-selection">
                    Number of Dinners/Seats: <sup>*</sup> <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                </div>
                <input type="checkbox" name="terms" id="acept-terms"/>
                <label htmlFor="acept-terms">By clicking reserve table you confirm you have read and accepted terms and conditions. </label>

            </form>
        </div>
    )
}