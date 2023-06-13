import Specials from "../../components/Specials/Specials";
import Testimonials from "../../components/Testimonials/Testimonials";
import "./Bookings.css"
import React from "react";
import BookingForm from "./BookingForm/BookingForm";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../../fakeApi";
const today = new Date();
export const initializeTimes = (() => fetchAPI(today))();

export function updateTimes(state, action) {
    switch (action.type) {
        case "updateDate":
            let date = new Date(action.date)
            return fetchAPI(date);
        default:
            return initializeTimes;

    }

}
export function submitForm(data) {
    return (submitAPI(data))

}
export default function Bookings() {
    React.useEffect(() => {
        document.title = "Little Lemon - Bookings";
    }, []);

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)
    return (
        <main>
            <BookingForm avialability={availableTimes} dispatch={dispatch} post={submitForm}/>
            <Specials />
            <Testimonials />
        </main>
    )

}