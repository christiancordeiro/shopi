import { useContext } from "react"
import UserContext from "../UserContext"
import Loading from "./Helper/Loading"
import CardHorizontal from "./Home/CardHorizontal"
import CardVertical from "./Home/CardVertical"
import Brand from "./Home/Brand"
import { Link } from "react-router-dom"

const Home = () => {
  const { dados } = useContext(UserContext)
  const categoryName = location.pathname.split("/")[2]

  if (!dados.length) {
    return <Loading />
  }

  return dados ? (
    <main className="xl:mx-28 md:mx-12 mx-8 my-10 font-Inter">
      <div className="flex justify-center items-center gap-5 slidein">
        <Link
          to="/products/clothes"
          className={categoryName === dados.name ? "active" : ""}
        >
          <CardHorizontal img={dados[2]?.image} name={dados[2]?.name} />
        </Link>
        <Link
          to="/products/shoes"
          className={categoryName === dados.name ? "active" : ""}
        >
          <CardVertical img={dados[0]?.image} name={dados[0]?.name} />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-5 pt-6">
        <Link
          to="/products/electronics"
          className={categoryName === dados.name ? "active" : ""}
        >
          <CardVertical img={dados[3]?.image} name={dados[3]?.name} />
        </Link>
        <Link
          to="/products/miscellaneous"
          className={categoryName === dados.name ? "active" : ""}
        >
          <CardHorizontal img={dados[1]?.image} name={dados[1]?.name} />
        </Link>
      </div>
      <section className="flex flex-col justify-center items-center gap-12 mt-14">
        <h1 className="font-Helvetica text-zinc-200 text-lg tracking-widest">
          BROWSE THROUGH PARTNER STORES
        </h1>
        <div className="grid grid-cols-2 xl:flex gap-12">
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
