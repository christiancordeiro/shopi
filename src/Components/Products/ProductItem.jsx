import { ShoppingCart } from "lucide-react"

const ProductItem = ({ produto }) => (
  <div
    key={produto.id}
    className="grid grid-cols-2 gap-8 justify-center items-center slidein"
  >
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-4">
        <img
          className="w-80 h-64 object-cover rounded-md"
          src={produto?.images[1].replace(/^\[|"|"\]$/g, "")}
          alt="Product image 1"
        />
        <img
          className="w-80 h-64 object-cover rounded-md"
          src={produto?.images[2].replace(/^\[|"|"\]$/g, "")}
          alt="Product image 2"
        />
      </div>
      <div>
        <img
          className="w-[22.625rem] h-[33rem] object-cover rounded-md"
          src={produto?.images[0].replace(/^\[|"|"\]$/g, "")}
          alt="Product image 3"
        />
      </div>
    </div>
    <div>
      <span className="bg-zinc-900 rounded-3xl px-2 py-2 text-xs text-zinc-100 font-semibold tracking-widest">
        {produto?.category?.name}
      </span>
      <div className="mt-5 mb-6">
        <h2 className="text-zinc-200 mb-4 font-semibold">{produto?.title}</h2>
        <h3 className="text-zinc-400">{produto?.description}</h3>
      </div>
      <h1 className="text-2xl text-zinc-50 font-semibold mb-7">
        ${produto?.price}
      </h1>
      <button className="bg-indigo-600 text-lg font-semibold py-3 px-3 w-[29.875rem] rounded-lg hover:bg-indigo-900 ease-in duration-100 flex gap-2 justify-center items-center">
        <ShoppingCart className="text-center inline-block w-5 h-5 stroke-3.1" />
        Add to cart
      </button>
    </div>
  </div>
)

export default ProductItem
