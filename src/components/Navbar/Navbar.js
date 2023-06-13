import { useRef, useEffect } from "react"
import "./Navbar.css"
export default function Navbar() {
  const menuRef = useRef();

  useEffect(() => {
    const menulinks = document.querySelector('.menulinks');
    const handleResize = () => {
      if(window.innerWidth > 768){
        menulinks.style.display = 'flex';
      }else{
        if(!menuRef.current.checked){
          menulinks.style.display = 'none';
        }
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const menubox = menuRef.current;
    const menulinks = document.querySelector('.menulinks');

    const handleCheckboxChange = () => {
      if (menubox.checked) {
        console.log("Menu clicked")
        menulinks.style.display = 'block';
      } else {
        menulinks.style.display = 'none';
      }
    };

    menubox.addEventListener('change', handleCheckboxChange);

    return () => {
      menubox.removeEventListener('change', handleCheckboxChange);
    };
  }, []);
  return (
    <nav className="main" role="navigation">
      <div className="logo">
        <div className="menu">
          <input  ref={menuRef} type="checkbox" id="hamburger-checkbox" />
          <label htmlFor="hamburger-checkbox" className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </label>
        </div>
        <a href="/" className="logoimg"><img  src={process.env.PUBLIC_URL+"/assets/images/Logo.svg"} alt="Little Lemon Logo" /></a>
        <div className="cart">
          <img src={process.env.PUBLIC_URL+"/assets/images/Basket.svg"} alt="Basket or cart icon" />
        </div>
      </div>
      <ul className="menulinks">
        <li><a href="/">Home</a></li>
        <li><a href="/#">About</a></li>
        <li><a href="/#">Menu</a></li>
        <li><a href="/#">Reservations</a></li>
        <li><a href="/#">Order Online</a></li>
        <li><a href="/#">Login</a></li>
      </ul>
      <div className="cart-desktop">
          <img src={process.env.PUBLIC_URL+"/assets/images/Basket.svg"} alt="Basket or cart icon" />
        </div>
    </nav>
  )
}
