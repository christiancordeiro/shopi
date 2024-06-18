import { NavLink } from "react-router-dom"

const HeaderLi = ({ handleLinkClick }) => {
  return (
    <>
      <li>
        <NavLink
          to="/"
          className="block w-full py-4 pl-6 sm:py-7 sm:px-4 hover:bg-zinc-800 lg:hover:bg-zinc-900 duration-100"
          onClick={handleLinkClick}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/products"
          className="block w-full py-4 pl-6 sm:py-7 sm:px-4 hover:bg-zinc-800 lg:hover:bg-zinc-900 duration-100"
          onClick={handleLinkClick}
        >
          Products
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className="block w-full py-4 pl-6 sm:py-7 sm:px-4 hover:bg-zinc-800 lg:hover:bg-zinc-900 duration-100"
          onClick={handleLinkClick}
        >
          About
        </NavLink>
      </li>
    </>
  )
}

export default HeaderLi
