import { useContext } from "react"
import UserContext from "../../UserContext"
import ProductItem from "./ProductItem"

const ProductID = () => {
  const { products } = useContext(UserContext)
  const path = window.location.pathname.split("/").slice(2)
  const filteredItem = products.filter(
    (produto) => produto.id === parseInt(path)
  )

  return (
    <section className="my-10 mx-28">
      {filteredItem.map((produto) => (
        <ProductItem key={produto.id} produto={produto} />
      ))}
    </section>
  )
}

export default ProductID
