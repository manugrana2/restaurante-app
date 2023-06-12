import ProductCard from "../Cards/product/product";
import Categories from "../Categories/Categories";
import "./Specials.css"
export default function Specials() {
    let categories = ["Lunch", "Mains", "Desserts", "A La Carte", "Specials","Lunch", "Mains", "Desserts", "A La Carte", "Specials"];
    return (
        <div className="specials">
            <span className="order">ORDER FOR DELIVERY!</span>
            <Categories
                list={categories}
            />
            <p className="title">This weeks Specials!<button className="online-menu">Online Menu</button></p>
            <div className="cards">
                <section className="specials-products">
                    <ProductCard
                        img="/assets/images/greek salad.jpg"
                        name="Greek Salad"
                        description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
                        price="12.99"
                    />
                    <ProductCard
                        img="/assets/images/bruchetta.svg"
                        name="Bruchetta"
                        description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
                        price="5.99"
                    />
                    <ProductCard
                        img="/assets/images/lemon dessert.jpg"
                        name="Lemon Dessert"
                        description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                        price="5.00"
                    />

                </section>
            </div>
        </div>
    )
}