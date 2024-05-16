import { useContext, useEffect, useState } from "react"
import UserContext from "../../UserContext"
import OrdemItems from "./OrdemItems"

const Orders = () => {
  const { cartItems } = useContext(UserContext)
  const [totalPrice, setTotalPrice] = useState(0)

  console.log(cartItems)

  useEffect(() => {
    setTotalPrice(calculateTotalPrice()) // Atualiza o total ao montar o componente
  }, [cartItems]) //

  function calculateTotalPrice() {
    let totalPrice = 0
    cartItems.forEach((item) => {
      setTotalPrice((totalPrice += item.price))
    })
    return totalPrice
  }

  function updateTotalPrice(itemPrice) {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + itemPrice)
  }

  return (
    <section className="my-10 mx-28">
      <h1 className="font-semibold text-2xl mb-8">Shopping cart</h1>
      {cartItems.map((item, index) => (
        <ul key={index}>
          <OrdemItems
            img={
              item && item.images && item.images.length > 0 && item.images[0]
            }
            title={item?.title}
            price={item?.price}
            id={item?.id}
            index={index}
            updateTotalPrice={updateTotalPrice}
          />
        </ul>
      ))}
      <div>
        <p>Total: ${totalPrice}</p>
      </div>
    </section>
  )
}

export default Orders
