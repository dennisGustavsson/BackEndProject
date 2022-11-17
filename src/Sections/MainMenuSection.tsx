import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "../Components/MenuIcon";
import { useShoppingCart } from "../Contexts/ShoppingCartContext";




const MainMenuSection = () => {
  const { cartQuantity } = useShoppingCart();

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='main-menu'>
      <div className='container'>
        <h1>
          {" "}
          <NavLink className='logo' to='/' end>
            Fixxo.
          </NavLink>
        </h1>
        <ul className={`menu-links ${showMenu ? "d-flex" : ""}`}>
          <li>
            <NavLink className='menu-link' to='/' end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className='menu-link' to='/categories' end>
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink className='menu-link' to='/products'>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className='menu-link' to='/contacts' end>
              Contacts
            </NavLink>
          </li>
        </ul>

        <div className='main-menu-icons'>
          <MenuIcon link='/search' icon='fa-regular fa-magnifying-glass' quantity={null} hideMobile={""} />
          <MenuIcon
            hideMobile='true'
            link='/compare'
            icon='fa-regular fa-code-compare' quantity={null}          />
          <MenuIcon
            hideMobile='true'
            quantity={null}
            link='/wishlist'
            icon='fa-regular fa-heart'
          />
          <button
            className='menu-icon'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#shoppingCart'
            aria-controls='shoppingCart'
          >
            <span className=' position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme'>
              {cartQuantity >= 1 ? cartQuantity : null}
            </span>
            <i className='fa-regular fa-shopping-bag'></i>
          </button>

          <button
            onClick={toggleMenu}
            className='d-lg-none menu-icon btn-menu-icon'
          >
            <i className='fa-regular fa-bars'></i>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default MainMenuSection;
