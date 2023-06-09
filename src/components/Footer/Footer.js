import "./Footer.css"
export default function Footer() {
    return (
        <div className="footer-container">
            <footer className="footer">
                <div className="footer-img">
                    <img src="https://th.bing.com/th/id/OIG.uOI4ZIrobZ5L9egSJc7o?pid=ImgGn" alt="Litte Lemon pic of a group of people smiling around a table" />
                </div>
                <ul>
                    <h4>Doormat Navegation</h4>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#">About</a></li>
                    <li><a href="/#">Menu</a></li>
                    <li><a href="/#">Reservations</a></li>
                    <li><a href="/#">Order Online</a></li>
                    <li><a href="/#">Login</a></li>
                </ul>
                <ul>
                    <h4>Contact</h4>
                    <li><a href="/#">Adress</a></li>
                    <li><a href="/#">Phone Number</a></li>
                    <li><a href="/#">Email</a></li>
                </ul>
                <ul>
                    <h4>Social Media Links</h4>
                    <li><a href="/#">Facebook</a></li>
                    <li><a href="/#">Instagram</a></li>
                    <li><a href="/#">Pinterest</a></li>
                    <li><a href="/#">Twitter</a></li>
                </ul>
            </footer>
        </div>
    )
}