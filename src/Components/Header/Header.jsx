import { Menu, X } from "lucide-react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { selectProductsCount } from "../Redux/cart/cart.selector"
import { useMediaQuery } from "@mui/material"
import { useEffect, useState } from "react"
import HeaderLi from "./HeaderLi"
import Cart from "./Cart"

const Header = () => {
  const productCount = useSelector(selectProductsCount)
  const isSmallScreen = useMediaQuery("(max-width:640px)")
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [animateMenu, setAnimateMenu] = useState(false)

  const closeMenu = () => {
    setAnimateMenu(false)
    setTimeout(() => setIsOpenMenu(false), 800) // Atraso para a animação de saída
  }

  const handleClickMenu = () => {
    if (isOpenMenu) {
      closeMenu()
    } else {
      setIsOpenMenu(true)
      setAnimateMenu(true)
    }
  }

  function handleLinkClick() {
    closeMenu()
  }

  useEffect(() => {
    if (isOpenMenu) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isOpenMenu])

  return (
    <header className="border-b-2 border-zinc-900 w-full relative p-6 sm:py-0 md:px-8  xl:px-16">
      <nav className="flex justify-between items-center font-Helvetica">
        <Link to="/" className="font-extrabold">
          Shopi
        </Link>
        {isSmallScreen ? (
          <div className="flex flex-row-reverse sm:flex-row gap-4">
            <ul className="flex justify-between lg:justify-center items-center text-sm text">
              <Menu onClick={handleClickMenu} />
              {isOpenMenu && (
                <div
                  className={`fixed overflow-y-hidden z-20 right-0 top-0 h-screen w-screen bg-zinc-900 ${
                    animateMenu ? "slidein" : "slideout"
                  }`}
                >
                  <div className="flex justify-between p-6">
                    <Link to="/" className="font-extrabold">
                      Shopi
                    </Link>
                    <X onClick={handleClickMenu} />
                  </div>
                  <HeaderLi handleLinkClick={handleLinkClick} />
                </div>
              )}
            </ul>
            <Cart productCount={productCount} />
          </div>
        ) : (
          <>
            <ul className="flex justify-center items-center text-sm text">
              <HeaderLi />
            </ul>
            <Cart productCount={productCount} />
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
