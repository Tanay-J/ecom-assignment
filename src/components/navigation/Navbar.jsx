import { IoIosArrowDown, IoIosCart } from "react-icons/io";

const Navbar = () => {
  return (
    <header className="nav-container">
      <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_3b0baa.png" />
      <input
        placeholder="Search for products, brands and more"
        className="search-bar py-xs"
      />
      <button className="white-btn px-l">Login</button>
      <span className="icon-container text-white">Become a Seller</span>
      <span className="icon-container text-white">
        More <IoIosArrowDown />
      </span>
      <span className="icon-container text-white">
        <IoIosCart className="text-s" /> Cart
      </span>
    </header>
  );
};
export { Navbar };
