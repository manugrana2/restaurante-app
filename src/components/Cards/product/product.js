import './product.css'
export default function ProductCard({ name, price, img, description }) {
    return (
        <article className='product-card'>
            <div className='card-content'>
                <img src={process.env.PUBLIC_URL + img} alt={name} />
                <div className='product-info'>
                    <div className='product-name'>
                        <h2>{name} </h2>
                        <h2 className="product-price">$ {price}</h2>
                    </div>
                    <p>{description}</p>
                    <h4 className="product-price-mov">$ {price}</h4>
                </div>
            </div>
            <div className='order-btn'>Order a delivery <img src={process.env.PUBLIC_URL+"/assets/images/delivery.svg"}/></div>
        </article>
    )
}