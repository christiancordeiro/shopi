const CardHorizontal = ({ img, name }) => {
  return (
    <div className="relative font-semibold hover:scale-105 ease-in duration-300 ">
      <img
        src={img}
        alt="Image category"
        className="xl:w-[49.75rem] h-[29rem] object-cover rounded-xl opacity-70"
      />
      <div className="flex flex-col gap-3 absolute bottom-9 left-9 ">
        <h2 className="text-base ">{name}</h2>
        <button className="bg-indigo-600 py-3 px-5 rounded-md">Buy</button>
      </div>
    </div>
  )
}

export default CardHorizontal
