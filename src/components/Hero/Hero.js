import './Hero.css'
export default function Hero() {
    return (
        <section className="hero">
            <div className="left">
                <div className="info">
                    <div className="brand">
                        <h1>Little Lemon<span className="hide">Restaurant</span></h1>
                        <h2>Chicago</h2>
                    </div>
                    <p>We are a family owned
                        Mediterranean restaurant,
                        focused on traditional
                        recipes served with a modern
                        twist.
                    </p>
                    <a href="/bookings" role='button' className='reserve'>Reserve a Table</a>
                </div>
            </div>
            <div className="right">
                <div className="heroimg">
                </div>
            </div>
        </section>
    )
}