import { useState } from "react"
import Input from "./Products/Input"

function Products() {
  const [valueInput, setValueInput] = useState("")

  const handleChange = ({ target }) => {
    setValueInput(target.value)
  }

  return (
    <section className="my-10 mx-28">
      <div className="flex items-center ">
        <Input onChange={handleChange} value={valueInput} />
      </div>
      <div className="gridCustom">
        <div className="">
          <div className="w-80 h-96 bg-transparent border border-zinc-700 rounded-lg px-8 py-6">
            <img src="" alt="" />
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">Newly Created Product</h3>
              <span className="text-zinc-400 text-sm">Category: Clothes</span>
              <div className="bg-zinc-900 rounded-3xl w-16 px-1 py-2 flex justify-center mt-3">
                <span className="text-xs text-zinc-100">Clothes</span>
              </div>
            </div>
          </div>
        </div>
        <div>b</div>
      </div>
    </section>
  )
}

export default Products
