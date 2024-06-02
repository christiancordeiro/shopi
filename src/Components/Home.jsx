import { useContext, useEffect, useState } from "react"
import UserContext from "../UserContext"
import Loading from "./Helper/Loading"
import CardHorizontal from "./Home/CardHorizontal"
import CardVertical from "./Home/CardVertical"
import Brand from "./Home/Brand"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const Home = () => {
  const { dados } = useContext(UserContext)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Função para verificar se o dispositivo é um dispositivo móvel
    const checkIsMobile = () => {
      const width = window.innerWidth
      setIsMobile(width <= 768) // Define como móvel se a largura for menor ou igual a 768px
    }

    // Verifica se o dispositivo é móvel ao carregar a página
    checkIsMobile()

    // Adiciona um event listener para verificar se o tamanho da tela muda
    window.addEventListener("resize", checkIsMobile)

    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener("resize", checkIsMobile)
    }
  }, [])

  if (!dados.length) {
    return <Loading />
  }

  return (
    <main className="ml-5 my-10 font-Inter xl:mx-28 md:mx-12 overflow-x-hidden">
      <section className="grid grid-cols-2 justify-center items-center slidein gap-5 md:grid-cols-1">
        {isMobile ? (
          <div className="flex justify-center items-center w-screen">
            <Swiper spaceBetween={20} slidesPerView={2}>
              <SwiperSlide>
                <Link to="/products/clothes">
                  <CardHorizontal img={dados[2]?.image} name={dados[2]?.name} />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/products/shoes">
                  <CardVertical img={dados[0]?.image} name={dados[0]?.name} />
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link to="/products/electronics">
                  <CardVertical img={dados[3]?.image} name={dados[3]?.name} />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/products/miscellaneous">
                  <CardHorizontal img={dados[1]?.image} name={dados[1]?.name} />
                </Link>
              </SwiperSlide>
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
            <div className="flex justify-center items-center md:gap-5 md:w-full md:ml-0">
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
        {isMobile ? (
          <div className="w-screen">
            <Swiper spaceBetween={60} slidesPerView={4}>
              <SwiperSlide>
                <Brand />
              </SwiperSlide>
              <SwiperSlide>
                <Brand />
              </SwiperSlide>
              <SwiperSlide>
                <Brand />
              </SwiperSlide>
              <SwiperSlide>
                <Brand />
              </SwiperSlide>
              <SwiperSlide>
                <Brand />
              </SwiperSlide>
            </Swiper>
          </div>
        ) : (
          <div className="flex justify-center gap-4 md:gap-12">
            <Brand />
            <Brand />
            <Brand />
            <Brand />
            <Brand />
          </div>
        )}
      </section>
    </main>
  )
}

export default Home
