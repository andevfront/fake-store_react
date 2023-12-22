import { Link } from "react-router-dom";
import { FiShoppingCart, FiHeart } from "react-icons/fi";

export const Header = () => {
  return (
    <header className="bg-white">
      <div className="container flex justify-between mx-auto px-4 py-5">
        <Link className="flex items-center gap-2" to="/">
          <img className="h-10" src="../assets/images/logo.png" alt="logo" />
          <span>Fake Store</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link to="#">
            <FiHeart className="h-6 w-6" />
          </Link>
          <FiShoppingCart className="h-6 w-6" />
          <div>Mi cuenta</div>
        </div>
      </div>
    </header>
  );
};
