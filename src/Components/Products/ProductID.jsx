import { useContext } from "react"
import UserContext from "../../UserContext"
import ProductDetails from "./ProductDetails"
import { useDispatch } from "react-redux"
import { addProductsToCart } from "../Redux/cart/actions"

const ProductID = () => {
  const { products } = useContext(UserContext)

  const dispatch = useDispatch()

  const path = window.location.pathname.split("/").slice(2)
  const filteredItem = products.filter(
    (produto) => produto.id === parseInt(path)
  )

  function handleCartClick(id) {
    dispatch(addProductsToCart(id))
  }

  return (
    <section className="my-10 mx-10 md:mx-28">
      {filteredItem.map((produto) => (
        <ProductDetails
          key={produto.id}
          produto={produto}
          onClick={() => handleCartClick(produto.id)}
        />
      ))}
    </section>
  )
}

export default ProductID
