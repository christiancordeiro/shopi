import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"

const ProductItems = ({ produto, handleCartClick }) => {
  return (
    <li
      key={produto.id}
      className="bg-transparent border border-zinc-700 rounded-lg p-4 2xl:p-6 flex flex-col justify-between"
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
          <Link to={`/product/${produto.id}`}>{produto?.title}</Link>
        </h3>
        <span className="text-zinc-400 text-sm">
          Category: {produto?.category?.name}
        </span>
        <div className="mt-4">
          <span className="bg-zinc-900 rounded-3xl px-2 py-2 text-xs text-zinc-100 font-semibold">
            {produto?.category?.name}
          </span>
        </div>
        <div className="flex justify-between mt-4 items-center">
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
  )
}

export default ProductItems
