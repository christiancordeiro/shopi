import { useContext, useEffect, useState } from "react"
import Button from "../Button"
import UserContext from "../../UserContext"

const OrdemItems = ({ index, title, price, img, updateTotalPrice }) => {
  const [amount, setAmount] = useState(1)
  const [disabled, setDisabled] = useState(true)

  const { cartItems, setCartItems } = useContext(UserContext)

  function handleAdd() {
    setAmount(amount + 1)
    setDisabled(false)
    updateTotalPrice(price)
  }

  function handleLess() {
    setAmount((prevAmount) => {
      const newAmount = prevAmount - 1
      setDisabled(newAmount === 1)
      return newAmount
    })
    updateTotalPrice(-price)
  }

  function handleRemove() {
    const updateCartItems = cartItems.filter((item, idx) => idx !== index)
    setCartItems(updateCartItems)
  }

  return (
    <li className="flex items-center bg-transparent border border-zinc-700 rounded-lg px-6 py-4 mb-6">
      <div>
        <div className="grid grid-cols-5 justify-center items-center w-full">
          <img src={img} alt="Item image" className="w-36 h-36" />
          <div className="flex flex-col gap-1 w-80">
            <h2 className="font-semibold">{title}</h2>
            <h3>${price}</h3>
          </div>
          <div className="col-end-7 flex justify-center items-center gap-2">
            <Button text="Remove" onClick={() => handleRemove(index)} />
            <Button text="-" onClick={handleLess} disabled={disabled} />
            <p>{amount}</p>
            <Button text="+" onClick={handleAdd} />
          </div>
        </div>
      </div>
    </li>
  )
}

export default OrdemItems
