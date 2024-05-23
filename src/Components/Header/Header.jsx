import { ShoppingCart } from "lucide-react"
import HeaderLi from "./HeaderLi"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectProductsCount } from "../Redux/cart/cart.selector"

const Header = () => {
  const productCount = useSelector(selectProductsCount)

  return (
    <header className="flex justify-between items-center h-16 px-24 font-Helvetica flex-wrap border-b-2 border-zinc-900">
      <NavLink to="/">
        <h1 className="font-extrabold">Shopi</h1>
      </NavLink>
      <nav className="flex">
        <ul className="flex justify-center items-center text-sm tracking-wide">
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
      </nav>

      <NavLink
        to="/orders"
        className=" flex justify-center items-center gap-4 text-sm py-[1.282rem] px-5"
      >
        My Orders
        <div className="flex flex-row relative">
          <i>
            <ShoppingCart className="w-[1.2rem]" />
          </i>
          <i className=" absolute right-[-8px] top-[-8px] text-xs">
            {productCount}
          </i>
        </div>
      </NavLink>
    </header>
  )
}

export default Header
