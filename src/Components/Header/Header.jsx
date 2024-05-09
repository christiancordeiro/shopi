import { ShoppingCart } from "lucide-react"
import HeaderLi from "./HeaderLi"
import { NavLink } from "react-router-dom"
import Products from "../Products"

const Header = () => {
  return (
    <header className="flex justify-between items-center h-16 px-16 font-Helvetica flex-wrap border-b-2 border-zinc-900">
      <NavLink to="/">
        <h1 className="font-extrabold">Shopi</h1>
      </NavLink>
      <div className="flex">
        <ul className="flex justify-center items-center text-sm  tracking-wide">
          <NavLink to="/">
            <HeaderLi name="Home" />
          </NavLink>
          <NavLink to="/products">
            <HeaderLi name="Products" />
          </NavLink>
          <NavLink to="/about">
            <HeaderLi name="About" />
          </NavLink>
        </ul>
      </div>
      <div className="flex gap-8">
        <ul className="flex justify-center items-center gap-8 text-sm">
          <li>My Orders</li>
          <li>My Account</li>
        </ul>
        <i>
          <ShoppingCart className="w-5" />
        </i>
      </div>
    </header>
  )
}

export default Header
