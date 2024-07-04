import { useContext, useState } from "react"
import Input from "./Input"
import UserContext from "../../UserContext"
import { NavLink, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addProductsToCart } from "../Redux/cart/actions"
import ProductLink from "./ProductLink"
import ProductItems from "./ProductItems"
import { toast } from "sonner"

function Products() {
  const dispatch = useDispatch()
  const [valueInput, setValueInput] = useState("")

  const { products, dados } = useContext(UserContext)

  const filteredItemsInput =
    valueInput.length > 0
      ? products.filter((produto) =>
          produto.title.toLowerCase().includes(valueInput.toLowerCase())
        )
      : []

  const location = useLocation()

  const categoryName = location.pathname.split("/")[2]

  const filteredItemsCategory = categoryName
    ? products.filter(
        (product) =>
          product.category.name.toLowerCase() === categoryName.toLowerCase()
      )
    : products

  function handleCartClick(produto) {
    dispatch(addProductsToCart(produto))
    toast.success("Produto adicionado ao carrinho!")
  }

  return (
    <section className="grid my-10 mx-12 xl:mx-28">
      <div className="flex items-center lg:w-96 mb-8">
        <Input
          onChange={(e) => setValueInput(e.target.value)}
          value={valueInput}
        />
      </div>
      <div className="grid grid-cols-1 gap-5 slidein md:grid-cols-[1fr_300px]">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 order-2 lg:grid-cols-3 lg:order-1">
          {valueInput.length > 0
            ? filteredItemsInput.map((produto) => (
                <ProductItems
                  key={produto.id}
                  produto={produto}
                  handleCartClick={handleCartClick}
                />
              ))
            : filteredItemsCategory.map((produto) => (
                <ProductItems
                  key={produto.id}
                  produto={produto}
                  handleCartClick={handleCartClick}
                />
              ))}
        </ul>
        <aside className="xl:ml-8 order-1 bg-transparent border border-zinc-700 rounded-lg h-[20rem] md:order-2">
          <h2 className="font-semibold text-zinc-50 px-8 pt-8">Categories:</h2>
          <ul className="flex flex-col mt-4 text-sm text-zinc-200">
            <NavLink to="/products" end>
              <ProductLink name="All" />
            </NavLink>
            {dados.map((product) => (
              <NavLink key={product.id} to={product.name}>
                <ProductLink name={product.name} />
              </NavLink>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default Products
