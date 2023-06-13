import "./Testimonial.css"
import { Rating } from 'react-simple-star-rating'

export default function Testimonial({ rating, name, photo, review }) {
    return (
        <article className="testimonial">
            <p className="rating">{rating} out of 5 <Rating readonly allowFraction size="1em" initialValue={rating}/></p>
            <img src={photo} alt="rating" className="user-photo" />
            <h3 className="user-name">{name}</h3>
            <p className="review">{review}</p>
        </article>
    )
}