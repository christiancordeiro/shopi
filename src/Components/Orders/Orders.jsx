import OrdemItems from "./OrdemItems"
import { useSelector } from "react-redux"

const Orders = () => {
  const { products, totalPrice } = useSelector((state) => state.cartReducer)

  return (
    <section className="my-10 mx-12 md:my-10 md:mx-28">
      <h1 className="font-semibold text-2xl mb-8">Shopping cart</h1>
      {products.map((item, index) => (
        <ul key={index}>
          <OrdemItems
            img={item.images && item.images.length > 0 && item.images[0]}
            title={item.title}
            price={item.price}
            id={item.id}
            index={index}
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
