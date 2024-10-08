import React from 'react'
import NavBarLogoLeft from '../NavBarLogoLeft'
 
const SectionHero = () => {
  return (
    <>
      <div className="relative min-h-screen flex flex-col"> {/* Adicionado flex e flex-col */}
        <img
          src="/slide01.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <NavBarLogoLeft />
        <div className="flex-grow flex items-center justify-center font-sans px-10">  
          <div className="text-center px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 z-40"> 
            <h2 className='text-white text-4xl lg:text-6xl'>Seu negócio precisa de ajuda para crescer?</h2>
            <p className='text-white text-xl mt-6'> {/* Mudança de pt-6 para mt-4 para reduzir o espaço */}
              A Startcity possui vasta experiência no segmento de inovação e gestão de negócios.
              Desde estruturar um projeto até captação de investimentos, perpassando por desenvolvimeno de produto e alavancagem comercial.
            </p>
            <div className='mt-10'>
            <a href="#o-que-fazemos" className='py-3 px-6 rounded-lg text-darkcolor bg-maincolor font-semibold z-40'>Saiba mais</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionHero;