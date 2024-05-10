import { ChromeIcon } from "lucide-react"

const Brand = () => {
  return (
    <div className="w-32 h-32 rounded-full bg-zinc-900 flex justify-center items-center hover:scale-110 ease-in duration-300 cursor-pointer">
      <ChromeIcon className="w-14 h-14 text-zinc-100 stroke-1" />
    </div>
  )
}

export default Brand
