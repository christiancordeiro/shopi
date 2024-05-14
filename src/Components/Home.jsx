import { useContext } from "react"
import UserContext from "../UserContext"
import Loading from "./Helper/Loading"
import CardHorizontal from "./Home/CardHorizontal"
import CardVertical from "./Home/CardVertical"
import Brand from "./Home/Brand"

const Home = () => {
  const { dados } = useContext(UserContext)

  if (!dados.length) {
    return <Loading />
  }

  // fetch("https://api.escuelajs.co/api/v1/products")
  //   .then((response) => response.json())
  //   .then((json) => console.log(json))

  return dados ? (
    <main className="my-10 mx-28 font-Inter">
      <div className="flex justify-center items-center gap-5 slidein">
        <CardHorizontal img={dados[2]?.image} name={dados[2]?.name} />
        <CardVertical img={dados[0]?.image} name={dados[0]?.name} />
      </div>
      <div className="flex justify-center items-center gap-5 pt-6">
        <CardVertical img={dados[3]?.image} name={dados[3]?.name} />
        <CardHorizontal img={dados[1]?.image} name={dados[1]?.name} />
      </div>
      <section className="flex flex-col justify-center items-center gap-12 mt-14">
        <h1 className="font-Helvetica text-zinc-200 text-lg tracking-widest">
          BROWSE THROUGH PARTNER STORES
        </h1>
        <div className="flex gap-12">
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
        </div>
      </section>
    </main>
  ) : (
    <Loading />
  )
}

export default Home
