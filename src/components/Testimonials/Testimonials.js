import "./Testimonials.css"
import Testimonial from "./Testimonial/Testimonial";
export default function Testimonials() {
    const testimonialsList = [
        {
            rating: 5,
            name: 'John Doe',
            photo: 'none',
            review: 'The Little Lemon is an exceptional family-owned restaurant in Chicago. Their Mediterranean cuisine is authentic, and their unique modern twist on traditional recipes is something to relish. The cozy ambiance and exceptional service make it a must-visit!'
        },
        {
            rating: 4.5,
            name: 'Jane Smith',
            photo: 'none',
            review: 'This hidden gem in Chicago offers the best Mediterranean dining experience. The Little Lemon takes traditional recipes to another level with their modern interpretation. The food is fresh, flavorful, and perfectly balanced. A remarkable dining experience!'
        },
        {
            rating: 5,
            name: 'Richard Roe',
            photo: 'none',
            review: 'The Little Lemon offers an incredible blend of traditional and modern Mediterranean cuisine. As a family-owned establishment in Chicago, they offer an inviting atmosphere that compliments their delicious dishes. An exceptional place to savor Mediterranean flavors!'
        }
    ];
    return (
        <section className="testimonials">
            <h2 className="title">Testimonials</h2>
            <div className="container">
                <div className="testimonials-list">
                    {testimonialsList.map((testimonial, index) => {
                        return <Testimonial
                            name={testimonial.name}
                            photo={testimonial.photo}
                            rating={testimonial.rating}
                            review={testimonial.review}
                            key={index}
                        />
                    })}
                </div>
            </div>
        </section>
    )
}