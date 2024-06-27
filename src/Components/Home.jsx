import { useContext } from "react"
import UserContext from "../UserContext"
import Loading from "./Helper/Loading"
import CardHorizontal from "./Home/CardHorizontal"
import CardVertical from "./Home/CardVertical"
import Brand from "./Home/Brand"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import { useMediaQuery } from "@mui/material"

const Home = () => {
  const { dados } = useContext(UserContext)

  const isSmallScreen = useMediaQuery("(max-width:800px)")

  if (!dados.length) {
    return <Loading />
  }

  return (
    <main className="ml-8 sm:mx-8 my-10 font-Inter xl:mx-28 overflow-x-hidden">
      <section className="grid grid-cols-1 justify-center items-center slidein gap-5 md:grid-cols-1">
        {isSmallScreen ? (
          <div className="flex justify-center items-center w-full pr-8 md:pr-0">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation
              modules={[Navigation]}
              className="swiper-container"
            >
              {dados.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link to={`/products/${item.name}`}>
                    {index % 2 === 0 ? (
                      <CardHorizontal img={item.image} name={item.name} />
                    ) : (
                      <CardVertical img={item.image} name={item.name} />
                    )}
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <>
            <div className="flex justify-center items-center gap-5">
              <Link to="/products/clothes">
                <CardHorizontal img={dados[2]?.image} name={dados[2]?.name} />
              </Link>
              <Link to="/products/shoes">
                <CardVertical img={dados[0]?.image} name={dados[0]?.name} />
              </Link>
            </div>
            <div className="flex justify-center items-center gap-5">
              <Link to="/products/electronics">
                <CardVertical img={dados[3]?.image} name={dados[3]?.name} />
              </Link>
              <Link to="/products/miscellaneous">
                <CardHorizontal img={dados[1]?.image} name={dados[1]?.name} />
              </Link>
            </div>
          </>
        )}
      </section>
      <section className="flex flex-col flex-wrap justify-center items-start gap-8 md:gap-12 mt-14 md:items-center">
        <h1 className="font-Helvetica text-zinc-200 text-base md:text-lg tracking-widest">
          BROWSE THROUGH PARTNER STORES
        </h1>
        {isSmallScreen ? (
          <div className="w-full">
            <Swiper spaceBetween={40} slidesPerView={3}>
              {Array.from({ length: 6 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <Brand />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="flex justify-center gap-4 md:gap-12">
            {Array.from({ length: 5 }).map((_, index) => (
              <Brand key={index} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Home
