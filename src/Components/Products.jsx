import { useContext, useState } from "react"
import Input from "./Products/Input"
import { ShoppingCart } from "lucide-react"
import UserContext from "../UserContext"
import { Link, NavLink, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addProductsToCart } from "./Redux/cart/actions"
import ProductLink from "./Products/ProductLink"

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
  }

  return (
    <section className="my-10 mx-28">
      <div className="flex items-center ">
        <Input
          onChange={(e) => setValueInput(e.target.value)}
          value={valueInput}
        />
      </div>
      <div className="gridCustom slidein">
        <ul className="grid grid-cols-3 gap-4">
          {valueInput.length > 0
            ? filteredItemsInput.map((produto) => (
                <li
                  key={produto.id}
                  className="bg-transparent border border-zinc-700 rounded-lg px-6 py-6 flex flex-col justify-evenly"
                >
                  <Link to={`/product/${produto.id}`}>
                    <img
                      src={produto.images[0].replace(/^\[|"|"\]$/g, "")}
                      alt=""
                      className="rounded-lg hover:scale-105 ease-in duration-300"
                    />
                  </Link>
                  <div className="flex flex-col gap-1 mt-5">
                    <h3 className="font-semibold">
                      <Link to={`/product/${produto.id}`}>
                        {produto?.title}
                      </Link>
                    </h3>
                    <span className="text-zinc-400 text-sm">
                      Category: {produto?.category?.name}
                    </span>
                    <div className="mt-4">
                      <span className="bg-zinc-900 rounded-3xl px-2 py-2 text-xs text-zinc-100 font-semibold">
                        {produto?.category?.name}
                      </span>
                    </div>
                    <div className="flex gap-12 mt-4">
                      <h2 className="text-zinc-400">
                        Price:
                        <span className="block text-zinc-50 font-semibold">
                          ${produto?.price}
                        </span>
                      </h2>
                      <button className="bg-indigo-600 text-sm font-semibold py-3 px-3 rounded-lg hover:bg-indigo-900 ease-in duration-100 flex gap-2 items-center">
                        <ShoppingCart className="text-center inline-block w-4 h-4 stroke-3.1" />
                        Add to cart
                      </button>
                    </div>
                  </div>
                </li>
              ))
            : filteredItemsCategory.map((produto) => (
                <li
                  key={produto.id}
                  className="bg-transparent border border-zinc-700 rounded-lg px-6 py-6 flex flex-col justify-evenly"
                >
                  <Link to={`/product/${produto.id}`}>
                    <img
                      src={produto.images[0].replace(/^\[|"|"\]$/g, "")}
                      alt=""
                      className="rounded-lg hover:scale-105 ease-in duration-300"
                    />
                  </Link>
                  <div className="flex flex-col gap-1 mt-5">
                    <h3 className="font-semibold">
                      <Link to={`/product/${produto.id}`}>
                        {produto?.title}
                      </Link>
                    </h3>
                    <span className="text-zinc-400 text-sm">
                      Category: {produto?.category?.name}
                    </span>
                    <div className="mt-4">
                      <span className="bg-zinc-900 rounded-3xl px-2 py-2 text-xs text-zinc-100 font-semibold">
                        {produto?.category?.name}
                      </span>
                    </div>
                    <div className="flex gap-12 mt-4">
                      <h2 className="text-zinc-400">
                        Price:
                        <span className="block text-zinc-50 font-semibold">
                          ${produto?.price}
                        </span>
                      </h2>
                      <button
                        onClick={() => handleCartClick(produto)}
                        className="bg-indigo-600 text-sm font-semibold py-3 px-3 rounded-lg hover:bg-indigo-900 ease-in duration-100 flex gap-2 items-center"
                      >
                        <ShoppingCart className="text-center inline-block w-4 h-4 stroke-3.1" />
                        Add to cart
                      </button>
                    </div>
                  </div>
                </li>
              ))}
        </ul>
        <aside className="ml-14 bg-transparent border border-zinc-700 rounded-lg max-h-[20rem]">
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
