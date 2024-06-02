import { ChromeIcon } from "lucide-react"

const Brand = () => {
  return (
    <div className="w-24 h-24 xl:w-32 xl:h-32 rounded-full bg-zinc-900 flex justify-center items-center hover:scale-95 ease-in duration-300 cursor-pointer">
      <ChromeIcon className="w-12 h-12 xl:w-14 xl:h-14 text-zinc-100 stroke-1" />
    </div>
  )
}

export default Brand
