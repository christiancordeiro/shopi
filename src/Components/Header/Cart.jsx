import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"

const Cart = ({ productCount }) => {
  return (
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
  )
}

export default Cart
