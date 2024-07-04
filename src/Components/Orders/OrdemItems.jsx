import { useEffect, useState } from "react"
import Button from "../Helper/Button"
import { useDispatch, useSelector } from "react-redux"
import {
  removeProductsFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
} from "../Redux/cart/actions"
import { toast } from "sonner"

const OrdemItems = ({ id, title, price, img }) => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cartReducer.products)
  const product = products.find((product) => product.id === id)
  const [disabled, setDisabled] = useState(product.quantity <= 1)

  useEffect(() => {
    setDisabled(product.quantity <= 1)
  }, [product.quantity])

  function handleAdd() {
    dispatch(increaseProductQuantity(id))
    setDisabled(false)
  }

  function handleLess() {
    dispatch(decreaseProductQuantity(id))
  }

  function handleRemove() {
    dispatch(removeProductsFromCart(id))
    toast.error("Produto removido do carrinho!")
  }

  return (
    <li className="flex  items-center bg-transparent border border-zinc-700 rounded-lg px-6 py-4 mb-6">
      <div>
        <div className="grid grid-cols-2 md:grid-cols-5 justify-center gap-4 items-center">
          <img
            src={img}
            alt="Item image"
            className="w-full h-auto rounded-lg"
          />
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold">{title}</h2>
            <h3>${price}</h3>
          </div>
          <div className="col-end-2 flex items-center gap-2 md:col-end-7 ">
            <Button text="Remove" onClick={handleRemove} />
            <Button text="-" onClick={handleLess} disabled={disabled} />
            <p>{product.quantity}</p>
            <Button text="+" onClick={handleAdd} />
          </div>
        </div>
      </div>
    </li>
  )
}

export default OrdemItems
