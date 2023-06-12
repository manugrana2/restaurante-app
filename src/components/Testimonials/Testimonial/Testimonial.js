import "./Testimonial.css"
export default function Testimonial({rating, name, photo, review}){
    return(
        <article className="testimonial">
            <p className="rating">{rating} out of 5</p>
            <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="rating" className="user-photo"/>
            <h3 className="user-name">{name}</h3>
            <p className="review">{review}</p>
        </article>
    )
}