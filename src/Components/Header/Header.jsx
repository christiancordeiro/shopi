import { ShoppingCart } from "lucide-react"
import { NavLink, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectProductsCount } from "../Redux/cart/cart.selector"

const Header = () => {
  const productCount = useSelector(selectProductsCount)

  return (
    <header className="border-b-2 border-zinc-900 w-full px-8 py-6 xl:px-16 ">
      <nav className="flex justify-between items-center font-Helvetica">
        <Link to="/" className="font-extrabold">
          Shopi
        </Link>

        <ul className="flex justify-center items-center text-sm text">
          <li>
            <NavLink
              to="/"
              className="py-7 px-2 xl:px-5 hover:bg-zinc-900 duration-100"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/products"
              className="py-7 px-2 xl:px-5 hover:bg-zinc-900 duration-100"
            >
              Products
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className="py-7 px-2 xl:px-5 hover:bg-zinc-900 duration-100"
            >
              About
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center">
          <Link
            to="/orders"
            className=" flex justify-center items-center text-sm xl:gap-3"
          >
            <span className="hidden md:block">Orders</span>
            <div className="flex xl:relative">
              <i>
                <ShoppingCart className="w-[1.2rem]" />
              </i>
              <span className="xl:absolute xl:right-[-8px] xl:top-[-8px] text-xs">
                {productCount}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
