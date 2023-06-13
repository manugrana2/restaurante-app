import Specials from "../../../components/Specials/Specials";
import Testimonials from "../../../components/Testimonials/Testimonials";
import React from "react";
import "./BookingConfirmation.css"
export default function BookingConfirmation() {
    React.useEffect(() => {
        document.title = "Confirmation - Your reservation at Little Lemon was booked";
    }, []);

    return (
        <main>
            <div className="booking-confirmation-container"></div>
            <Specials />
            <Testimonials />
        </main>
    )

}