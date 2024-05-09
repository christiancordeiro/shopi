import { Search } from "lucide-react"

const Input = ({ onChange, value }) => {
  return (
    <div className="relative">
      <Search className="absolute top-5 ml-7 w-4 h-4 text-zinc-100 stroke-4" />
      <input
        type="text"
        placeholder="Search..."
        onChange={onChange}
        value={value}
        className="w-96 h-14 bg-transparent border border-zinc-700 rounded-xl pl-14"
      />
    </div>
  )
}

export default Input
