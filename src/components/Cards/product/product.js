import './product.css'
export default function ProductCard({ name, price, img, description }) {
    return (
        <article className='product-card'>
            <img src={process.env.PUBLIC_URL +img} alt={name} />
            <div className='product-info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>

        </article>
    )
}