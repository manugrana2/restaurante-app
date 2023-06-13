import Specials from "../../components/Specials/Specials";
import Testimonials from "../../components/Testimonials/Testimonials";
import "./Bookings.css"
import React from "react";
import BookingForm from "./Form/BookingForm";
import { useReducer } from "react";

const initializeTimes = (() => ["16:00","17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])();

function updateTimes(state, action) {
    switch (action.type) {
        case "updateDate":
            console.log("Time updated");
            return [...initializeTimes, "23:00"];
        default:
            return initializeTimes;

    }

}
export default function Bookings() {
    React.useEffect(() => {
        document.title = "Little Lemon - Bookings";
    }, []);

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)
    return (
        <main>
            <BookingForm avialability={availableTimes} dispatch={dispatch} />
            <Specials />
            <Testimonials />
        </main>
    )

}