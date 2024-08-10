import { NavLink } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";
import { useSelector } from "react-redux";
const Navbar = () => {
  const {cart} = useSelector((state) => state);
  return(
    <div>
      <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/Shopping-Cart">
          <div>
            <img src={`${process.env.PUBLIC_URL}/logo.png`} className="h-14" alt="Logo"/>
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/Shopping-Cart">
            <p>Home</p>
          </NavLink>
          <NavLink to="/Shopping-Cart/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl"/>
              {
                cart.length > 0 && <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
              }
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
