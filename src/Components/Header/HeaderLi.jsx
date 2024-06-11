import { NavLink } from "react-router-dom"

const HeaderLi = () => {
  return (
    <>
      <li>
        <NavLink
          to="/"
          className="block w-full py-4 pl-6 sm:py-7 sm:px-4 hover:bg-zinc-800 lg:hover:bg-zinc-900 duration-100"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/products"
          className="block w-full py-4 pl-6 sm:py-7 sm:px-4 hover:bg-zinc-800 lg:hover:bg-zinc-900 duration-100"
        >
          Products
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className="block w-full py-4 pl-6 sm:py-7 sm:px-4 hover:bg-zinc-800 lg:hover:bg-zinc-900 duration-100"
        >
          About
        </NavLink>
      </li>
    </>
  )
}

export default HeaderLi
