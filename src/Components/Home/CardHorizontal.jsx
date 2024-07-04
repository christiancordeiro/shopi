const CardHorizontal = ({ img, name }) => {
  return (
    <div className="relative w-full h-full font-semibold hover:scale-105 ease-in duration-300 transform transition-transform">
      <img
        src={img}
        alt="Image category"
        className="w-[1000px] md:w-[49.75rem] h-[21.875rem] md:h-[29rem] object-cover rounded-xl opacity-70"
      />
      <div className="flex flex-col gap-3 absolute bottom-9 left-9 ">
        <h2 className="text-base ">{name}</h2>
        <button className="bg-indigo-600 py-3 px-5 rounded-md">Buy</button>
      </div>
    </div>
  )
}

export default CardHorizontal
